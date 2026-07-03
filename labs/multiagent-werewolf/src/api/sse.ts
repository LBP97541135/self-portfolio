/**
 * 作品集 Mock 版 SSE
 *
 * - 替换全局 EventSource，使其发出 mockData 中的事件
 * - URL 解析忽略真实网络调用
 */

import { mockSseEvents } from "./mockData";

export type StreamView = "god" | "seat";

/** Build the SSE stream URL for a run. Always returns a local URL. */
export function streamUrl(
  _runId: string,
  _view: StreamView = "god",
  _seat?: number,
  _token?: string,
): string {
  return "mock-sse://stream";
}

// ============================================================
// MockEventSource — 实现与原生 EventSource 同名的最小 API
// ============================================================
type Listener = (e: MessageEvent) => void;
type NamedListener = (e: MessageEvent) => void;

class MockEventSource implements EventSource {
  static readonly CONNECTING = 0 as const;
  static readonly OPEN = 1 as const;
  static readonly CLOSED = 2 as const;

  readonly CONNECTING = 0;
  readonly OPEN = 1;
  readonly CLOSED = 2;

  readyState: 0 | 1 | 2 = MockEventSource.CONNECTING;
  url = "";
  withCredentials = false;

  private listeners: Record<string, Listener[]> = {};
  private namedListeners: Record<string, NamedListener[]> = {};
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(url: string, _init?: EventSourceInit) {
    this.url = url;
    // 模拟连接建立
    setTimeout(() => this._open(), 50);
  }

  private _open() {
    this.readyState = MockEventSource.OPEN;
    // 派发 open 事件
    this._fireNamed("open", new MessageEvent("open"));
    // 逐条派发 mock 事件
    let i = 0;
    const tick = () => {
      if (this.readyState !== MockEventSource.OPEN) return;
      if (i >= mockSseEvents.length) {
        // 派发 end
        this._fireNamed("end", new MessageEvent("end"));
        return;
      }
      const raw = mockSseEvents[i++];
      const ev = this._normalizeEvent(raw);
      const eventName = ev.event_type === "snapshot" ? "snapshot"
        : ev.event_type === "end" ? "end"
        : "message";
      const dataStr = JSON.stringify(ev);
      const me = new MessageEvent(eventName, { data: dataStr });
      if (eventName === "message" || eventName === "snapshot" || eventName === "end") {
        this._fireNamed(eventName, me);
      } else {
        this._fireMessage(me);
      }
      // 间隔
      this.timer = setTimeout(tick, 250);
    };
    this.timer = setTimeout(tick, 80);
  }

  private _fireNamed(name: string, e: MessageEvent) {
    const list = this.namedListeners[name] ?? [];
    list.forEach((fn) => {
      try { fn(e); } catch { /* ignore */ }
    });
  }

  private _normalizeEvent(ev: any) {
    if (ev?.event_type === "snapshot") {
      const rawRoster = ev.roster ?? ev.data?.roster ?? [];
      const roster = Array.isArray(rawRoster)
        ? rawRoster.map((p: any, index: number) => {
            const idText = String(p?.player_id ?? "");
            const match = idText.match(/(\d+)$/);
            const seat = typeof p?.seat === "number" ? p.seat : match ? Number(match[1]) : index + 1;
            return {
              seat,
              name: p?.name ?? p?.player_name ?? `P${seat}`,
              role: p?.role ?? p?.role_name ?? null,
              camp: p?.camp ?? null,
              is_alive: p?.is_alive ?? true,
            };
          })
        : [];
      return {
        ...ev,
        roster,
        phase: ev.phase ?? ev.data?.phase,
        round_number: ev.round_number ?? ev.data?.day ?? 0,
      };
    }
    if (ev?.event_type === "game_ended") {
      return {
        ...ev,
        data: {
          ...ev.data,
          winner_camp: ev.data?.winner_camp ?? ev.data?.winner,
        },
      };
    }
    return ev;
  }

  private _fireMessage(e: MessageEvent) {
    const list = this.listeners["message"] ?? [];
    list.forEach((fn) => {
      try { fn(e); } catch { /* ignore */ }
    });
  }

  addEventListener(type: string, listener: Listener | null, _options?: boolean | AddEventListenerOptions): void {
    if (!listener) return;
    if (!this.namedListeners[type]) this.namedListeners[type] = [];
    this.namedListeners[type].push(listener as NamedListener);
  }

  removeEventListener(type: string, listener: Listener | null, _options?: boolean | EventListenerOptions): void {
    if (!listener || !this.namedListeners[type]) return;
    this.namedListeners[type] = this.namedListeners[type].filter((fn) => fn !== listener);
  }

  dispatchEvent(_event: Event): boolean {
    return true;
  }

  set onopen(fn: ((this: EventSource, ev: Event) => any) | null) {
    this._setProp("open", fn);
  }
  set onmessage(fn: ((this: EventSource, ev: MessageEvent) => any) | null) {
    this._setMessageProp(fn);
  }
  set onerror(fn: ((this: EventSource, ev: Event) => any) | null) {
    this._setProp("error", fn);
  }

  private _setProp(name: string, fn: ((...args: any[]) => any) | null) {
    if (fn) {
      this.addEventListener(name, (e) => fn.call(this as unknown as EventSource, e as unknown as Event));
    } else {
      this.namedListeners[name] = [];
    }
  }

  private _setMessageProp(fn: ((...args: any[]) => any) | null) {
    if (fn) {
      this.addEventListener("message", (e) => fn.call(this as unknown as EventSource, e as unknown as MessageEvent));
    } else {
      this.listeners["message"] = [];
    }
  }

  close(): void {
    this.readyState = MockEventSource.CLOSED;
    if (this.timer) clearTimeout(this.timer);
  }
}

// 在模块加载时把全局 EventSource 替换为 mock
if (typeof globalThis !== "undefined" && !(globalThis as any).__wwMockEventSourceInstalled) {
  (globalThis as any).EventSource = MockEventSource;
  (globalThis as any).__wwMockEventSourceInstalled = true;
}

export {}; // 保持模块
