/**
 * 作品集 Mock 版 API Client
 *
 * - 完全本地数据，不发起任何网络请求
 * - 返回形状与原 client.ts 一致（不破坏调用方）
 * - 原 mappers（src/lib/*Map.ts）正常工作
 */

import * as M from "./mockData";

const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export class ApiClient {
  private static async ok<T>(data: T, ms = 30): Promise<T> {
    await delay(ms);
    return data;
  }

  static async startGame(_req: unknown): Promise<typeof M.mockStartGameResponse> {
    return this.ok(M.mockStartGameResponse, 50);
  }

  static async getBoardPresets() {
    return this.ok(M.mockBoardPresets);
  }

  static async sendInput(_runId: string, _body: unknown) {
    return this.ok({ run_id: "mock", accepted: true, message: "Mock 已接收", reject_code: null }, 20);
  }

  static async getGameStatus(_runId: string, _source = "runs") {
    return this.ok(M.mockGameStatus);
  }

  static async getHomePageData() {
    return this.ok(M.mockHomeData);
  }

  static async getRolesPageData() {
    return this.ok(M.mockRolesData);
  }

  static async getRoleDetail(roleKey: string) {
    // 找对应角色
    const all = [
      ...M.mockRolesData.camps.werewolf,
      ...M.mockRolesData.camps.villager,
      ...M.mockRolesData.camps.neutral,
    ];
    const found = all.find((r) => r.key === roleKey);
    const base = found ?? all[0];
    return this.ok({
      ...base,
      instruction: `${base.display_name} 的角色说明：在标准 6 人局中发挥阵营作用。`,
      suggestion: "保持阵营判断 + 信息整合",
      victory_text: "阵营胜利条件满足时获胜。",
      tips: ["保持身份", "逻辑发言", "注意票型"],
      board_sizes: [6, 9, 12],
      related_roles: ["villager", "werewolf"],
      night_action_order: base.has_night_action ? 5 : null,
      prompt_version: "v2",
      skill_version: "v2",
      prompt_library: [
        { id: "p1", category: "system", title: "System Prompt", content: `你是 ${base.display_name}。${base.short_desc}`, version: "v2" },
        { id: "p2", category: "phase", title: "Day Speech", content: "白天发言要带证据。", version: "v2" },
      ],
      skill_library: [
        { id: "s1", title: "身份隐藏", description: "夜间行动时不暴露身份", status: "active", weight: 1, version: "v1" },
        { id: "s2", title: "信息整合", description: "整合场上发言形成判断", status: "active", weight: 1, version: "v1" },
      ],
      abilities: base.has_night_action
        ? [{ name: "夜间技能", description: "夜晚可执行特定行动", timing: "NIGHT" }]
        : [{ name: "被动技能", description: "白触发", timing: "PASSIVE" }],
      strategies: ["开局保持低调", "中期寻找站队", "末期决定胜负"],
    });
  }

  static async getModelsPageData() {
    return this.ok(M.mockModelsData);
  }

  static async getModelDetail(modelId: string) {
    if (modelId === M.mockModelDetail.id) return this.ok(M.mockModelDetail);
    return this.ok({ ...M.mockModelDetail, id: modelId, name: modelId });
  }

  static async compareModels(_ids: string[]) {
    return this.ok(M.mockModelComparison);
  }

  static async getReplayData(_runId: string, _source = "runs") {
    return this.ok(M.mockReplayData);
  }

  static async getShareReplayData(_runId: string) {
    return this.ok(M.mockShareReplayData);
  }

  static async getAboutPageData() {
    return this.ok(M.mockAboutData);
  }

  static async getFeaturesPageData() {
    return this.ok(M.mockFeaturesData);
  }

  static async getHowToPlayPageData() {
    return this.ok(M.mockHowToPlayData);
  }

  static async getNightPhasePageData() {
    return this.ok(M.mockNightPhaseData);
  }

  static async getStrategyPageData() {
    return this.ok(M.mockStrategyData);
  }

  static async getRunsPageData(_page = 1, _pageSize = 20) {
    return this.ok(M.mockRunsData);
  }

  static async getSpectatableRuns(_page = 1, _pageSize = 30) {
    return this.ok(M.mockRunsData);
  }

  static async getProviders() {
    return this.ok(M.mockProviders);
  }

  static async getApiKeysStatus() {
    return this.ok(M.mockApiKeysStatus);
  }

  static async updateApiKeys(_body: unknown) {
    return this.ok({ updated_env_names: [], keys: M.mockApiKeysStatus.keys, message: "Mock 模式不写入" });
  }

  static async getAvailableModels() {
    return this.ok(M.mockAvailableModels);
  }
}

/** unwrap 兼容：mock 数据已经是内部 data，无 envelope */
export function unwrap<T>(json: unknown): T {
  if (
    json !== null &&
    typeof json === "object" &&
    "data" in (json as Record<string, unknown>) &&
    ("success" in (json as Record<string, unknown>) || "message" in (json as Record<string, unknown>))
  ) {
    return (json as { data: T }).data;
  }
  return json as T;
}
