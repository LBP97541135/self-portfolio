/**
 * Mock 后端数据 - 作品集演示用
 *
 * 原项目后端：FastAPI + SSE 实时事件流
 * 作品集版：所有数据从这里读，不发起任何真实网络请求
 *
 * 数据形状与后端 Pydantic 保持一致（snake_case），
 * 仍然走 src/lib/*Map.ts 的 mapper 转换。
 */

// ============================================================
// 1. 主页 / Home
// ============================================================
export const mockHomeData = {
  hero: {
    title: "AI 狼人杀",
    subtitle: "多智能体博弈实验台 · HIGH-DIMENSION EMPATHY SIMULATION",
    cta_label: "建立全新对局",
    cta_path: "/",
  },
  nav_links: [
    { key: "home", title: "虚境主页", path: "/home", description: "回到主页" },
    { key: "rules", title: "法官判定规则", path: "/rules", description: "昼夜流程与胜负" },
    { key: "roles", title: "角色权能圣典", path: "/roles", description: "20+ 角色系统" },
    { key: "models", title: "模型对弈跑分", path: "/models", description: "AI 模型横向评测" },
    { key: "runs", title: "战绩中心与复盘", path: "/runs", description: "历史对局" },
    { key: "night", title: "黑夜行纪", path: "/night-phase", description: "夜间阶段细则" },
    { key: "strategy", title: "智斗秘卷", path: "/strategy", description: "战术手册" },
    { key: "features", title: "特色能力", path: "/features", description: "信念矩阵 / 投票意向" },
    { key: "about", title: "关于", path: "/about", description: "项目背景" },
  ],
  stats_cards: [
    { label: "当前存续对局", value: 3, unit: "局", hint: "ACTIVE_ARENAS" },
    { label: "历史对局卷宗", value: 1284, unit: "局", hint: "TOTAL_RECORDS" },
    { label: "可用模型数量", value: 8, unit: "个", hint: "RUNNING_AGENTS" },
    { label: "综合推理评分", value: 76, unit: "分", hint: "MODEL_SCORE" },
  ],
  recent_runs: [
    {
      run_id: "6p-deepseek-2026-06-10-01",
      created_at: "2026-06-10 21:32",
      player_count: 6,
      winner_camp: "werewolf",
      has_replay: true,
    },
    {
      run_id: "8p-mixed-2026-06-09-04",
      created_at: "2026-06-09 18:14",
      player_count: 8,
      winner_camp: "villager",
      has_replay: true,
    },
    {
      run_id: "6p-doubao-2026-06-08-02",
      created_at: "2026-06-08 15:02",
      player_count: 6,
      winner_camp: "villager",
      has_replay: true,
    },
    {
      run_id: "12p-ab-2026-06-07-01",
      created_at: "2026-06-07 22:48",
      player_count: 12,
      winner_camp: "werewolf",
      has_replay: true,
    },
  ],
  quick_actions: [
    { key: "newgame", title: "建立全新对局", path: "/", description: "6/9/12 人局" },
    { key: "replay", title: "战绩中心与复盘", path: "/runs", description: "查看历史" },
    { key: "models", title: "模型对弈跑分", path: "/models", description: "横向比较" },
    { key: "roles", title: "角色权能圣典", path: "/roles", description: "20+ 角色" },
    { key: "rules", title: "法官判定规则", path: "/rules", description: "规则法典" },
  ],
  game_modes: [
    { participation: "纯 Agent", rules: "标准", config_path: "configs/llm-6p-deepseek.yaml", config_id: "llm-6p-deepseek", description: "6 智能体对局", player_count: 6 },
    { participation: "人机对战", rules: "标准", config_path: "configs/human-6p-demo.yaml", config_id: "human-6p-demo", description: "真人 + 5 智能体", player_count: 6 },
    { participation: "批量评测", rules: "扩展", config_path: "configs/eval-8p-mixed.yaml", config_id: "eval-8p-mixed", description: "8 模型横评", player_count: 8 },
  ],
};

// ============================================================
// 2. 角色 / Roles
// ============================================================
export const mockRolesData = {
  title: "角色权能圣典",
  intro_title: "二十二刻印齐聚于此",
  intro_text: "二十二位命运刻印齐聚于此，点击卡牌查看规则权能、提升词库与技能库。",
  camps: {
    werewolf: [
      { key: "werewolf", display_name: "狼人", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "Werewolf", prompt_role_key: "wolf", tagline: "夜袭神谕之人", short_desc: "夜晚集体选择击杀目标", difficulty: "EASY", prompt_count: 3, skill_count: 4, prompt_version: "v2", skill_version: "v2" },
      { key: "alpha_wolf", display_name: "头狼", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "AlphaWolf", prompt_role_key: "wolf", tagline: "狼群领袖", short_desc: "可指定队友的额外行动", difficulty: "HEAVY", prompt_count: 4, skill_count: 5, prompt_version: "v1", skill_version: "v1" },
      { key: "white_wolf", display_name: "白狼王", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "WhiteWolf", prompt_role_key: "wolf", tagline: "自爆同行", short_desc: "被投票出局时可带走一名玩家", difficulty: "HEAVY", prompt_count: 2, skill_count: 3, prompt_version: "v1", skill_version: "v1" },
      { key: "wolf_beauty", display_name: "狼美人", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "WolfBeauty", prompt_role_key: "wolf", tagline: "魅惑之吻", short_desc: "夜晚可魅惑一名玩家", difficulty: "HEAVY", prompt_count: 2, skill_count: 3, prompt_version: "v1", skill_version: "v1" },
      { key: "guardian_wolf", display_name: "守卫狼", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "GuardianWolf", prompt_role_key: "wolf", tagline: "守护同袍", short_desc: "每晚可守护一名狼队友", difficulty: "HEAVY", prompt_count: 2, skill_count: 2, prompt_version: "v1", skill_version: "v1" },
      { key: "hidden_wolf", display_name: "隐狼", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "HiddenWolf", prompt_role_key: "wolf", tagline: "混入人群", short_desc: "首夜不暴露于预言家", difficulty: "HEAVY", prompt_count: 2, skill_count: 2, prompt_version: "v1", skill_version: "v1" },
      { key: "nightmare_wolf", display_name: "梦魇狼", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "NightmareWolf", prompt_role_key: "wolf", tagline: "恐惧之咬", short_desc: "使目标当晚无法使用技能", difficulty: "HEAVY", prompt_count: 2, skill_count: 2, prompt_version: "v1", skill_version: "v1" },
      { key: "blood_moon_apostle", display_name: "血月使徒", camp: "werewolf", camp_label: "狼人阵营", victory_goal: "杀光所有好人", has_night_action: true, runtime_name: "BloodMoonApostle", prompt_role_key: "wolf", tagline: "月下蛰伏", short_desc: "存活到第二轮后激活", difficulty: "HEAVY", prompt_count: 2, skill_count: 2, prompt_version: "v1", skill_version: "v1" },
    ],
    villager: [
      { key: "villager", display_name: "村民", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: false, runtime_name: "Villager", prompt_role_key: "villager", tagline: "白昼之眼", short_desc: "没有技能的平民", difficulty: "EASY", prompt_count: 3, skill_count: 2, prompt_version: "v2", skill_version: "v1" },
      { key: "seer", display_name: "预言家", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: true, runtime_name: "Seer", prompt_role_key: "prophet", tagline: "命运之眼", short_desc: "每晚可查验一名玩家", difficulty: "MEDIUM", prompt_count: 4, skill_count: 3, prompt_version: "v2", skill_version: "v2" },
      { key: "witch", display_name: "女巫", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: true, runtime_name: "Witch", prompt_role_key: "witch", tagline: "双生药剂", short_desc: "一瓶解药 + 一瓶毒药", difficulty: "MEDIUM", prompt_count: 3, skill_count: 4, prompt_version: "v2", skill_version: "v2" },
      { key: "hunter", display_name: "猎人", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: false, runtime_name: "Hunter", prompt_role_key: "hunter", tagline: "绝命一枪", short_desc: "出局时可带走一名玩家", difficulty: "MEDIUM", prompt_count: 2, skill_count: 2, prompt_version: "v1", skill_version: "v1" },
      { key: "guard", display_name: "守卫", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: true, runtime_name: "Guard", prompt_role_key: "guard", tagline: "圣盾之护", short_desc: "每晚守护一名玩家", difficulty: "MEDIUM", prompt_count: 2, skill_count: 2, prompt_version: "v1", skill_version: "v1" },
      { key: "elder", display_name: "长老", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: false, runtime_name: "Elder", prompt_role_key: "elder", tagline: "村庄之声", short_desc: "可承受两次攻击", difficulty: "MEDIUM", prompt_count: 2, skill_count: 2, prompt_version: "v1", skill_version: "v1" },
      { key: "idiot", display_name: "白痴", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: false, runtime_name: "Idiot", prompt_role_key: "idiot", tagline: "免疫放逐", short_desc: "被投票出局时翻牌免死", difficulty: "EASY", prompt_count: 2, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
      { key: "knight", display_name: "骑士", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: false, runtime_name: "Knight", prompt_role_key: "knight", tagline: "圣裁之剑", short_desc: "白天可决斗一名玩家", difficulty: "MEDIUM", prompt_count: 2, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
      { key: "graveyard_keeper", display_name: "守墓人", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: true, runtime_name: "GraveyardKeeper", prompt_role_key: "graveyard_keeper", tagline: "亡者之声", short_desc: "每晚可验一名死亡玩家身份", difficulty: "HEAVY", prompt_count: 2, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
      { key: "raven", display_name: "乌鸦", camp: "villager", camp_label: "好人阵营", victory_goal: "放逐所有狼人", has_night_action: true, runtime_name: "Raven", prompt_role_key: "raven", tagline: "不祥之兆", short_desc: "夜晚可标记玩家增加票数", difficulty: "MEDIUM", prompt_count: 2, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
    ],
    neutral: [
      { key: "cupid", display_name: "丘比特", camp: "neutral", camp_label: "第三方", victory_goal: "让情侣存活到最后", has_night_action: true, runtime_name: "Cupid", prompt_role_key: "cupid", tagline: "命运之矢", short_desc: "首夜连接两名玩家为情侣", difficulty: "MEDIUM", prompt_count: 2, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
      { key: "magician", display_name: "魔术师", camp: "neutral", camp_label: "第三方", victory_goal: "每夜交换两名玩家", has_night_action: true, runtime_name: "Magician", prompt_role_key: "magician", tagline: "镜像戏法", short_desc: "每晚可交换两名玩家身份", difficulty: "HEAVY", prompt_count: 2, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
      { key: "thief", display_name: "盗贼", camp: "neutral", camp_label: "第三方", victory_goal: "自选新身份开局", has_night_action: true, runtime_name: "Thief", prompt_role_key: "thief", tagline: "影中之手", short_desc: "开局可从候选中选一身份", difficulty: "EASY", prompt_count: 2, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
      { key: "lover", display_name: "情侣", camp: "neutral", camp_label: "第三方", victory_goal: "与情侣一起存活", has_night_action: false, runtime_name: "Lover", prompt_role_key: "lover", tagline: "羁绊之链", short_desc: "与丘比特指定的对象同生共死", difficulty: "EASY", prompt_count: 1, skill_count: 1, prompt_version: "v1", skill_version: "v1" },
    ],
  },
  camp_stats: { werewolf: 8, villager: 10, neutral: 4 },
  board_presets: [],
  total: 22,
};

// ============================================================
// 3. 模型 / Models
// ============================================================
export const mockModelsData = {
  title: "模型对弈跑分",
  usage_stats: [
    { model_id: "deepseek-v3", display_name: "DeepSeek-V3", role_name: "通用", run_count: 320, win_rate: 0.612, avg_mvp: 71.2 },
    { model_id: "doubao-1-5-pro", display_name: "豆包 1.5 Pro", role_name: "通用", run_count: 280, win_rate: 0.582, avg_mvp: 68.4 },
    { model_id: "gpt-5", display_name: "GPT-5", role_name: "通用", run_count: 180, win_rate: 0.654, avg_mvp: 73.8 },
    { model_id: "claude-sonnet-4-5", display_name: "Claude Sonnet 4.5", role_name: "通用", run_count: 165, win_rate: 0.628, avg_mvp: 72.1 },
    { model_id: "gemini-2-5-pro", display_name: "Gemini 2.5 Pro", role_name: "通用", run_count: 142, win_rate: 0.594, avg_mvp: 66.7 },
    { model_id: "kimi-k2", display_name: "Kimi K2", role_name: "通用", run_count: 96, win_rate: 0.561, avg_mvp: 64.2 },
    { model_id: "qwen-3-max", display_name: "Qwen 3 Max", role_name: "通用", run_count: 88, win_rate: 0.578, avg_mvp: 65.5 },
    { model_id: "llama-3-1-405b", display_name: "Llama 3.1 405B", role_name: "通用", run_count: 54, win_rate: 0.519, avg_mvp: 60.3 },
  ],
  configs: [],
  by_provider: { ark: 2, openai: 1, siliconflow: 3, google: 1, moonshot: 1 },
  recommended_config_ids: ["llm-6p-deepseek", "eval-8p-mixed"],
};

// ============================================================
// 4. 对局设置 / GameSetup
// ============================================================
export const mockBoardPresets = {
  roles: [
    { key: "werewolf", display_name: "狼人", camp: "werewolf", camp_label: "狼人阵营" },
    { key: "seer", display_name: "预言家", camp: "villager", camp_label: "好人阵营" },
    { key: "witch", display_name: "女巫", camp: "villager", camp_label: "好人阵营" },
    { key: "hunter", display_name: "猎人", camp: "villager", camp_label: "好人阵营" },
    { key: "guard", display_name: "守卫", camp: "villager", camp_label: "好人阵营" },
    { key: "villager", display_name: "村民", camp: "villager", camp_label: "好人阵营" },
    { key: "elder", display_name: "长老", camp: "villager", camp_label: "好人阵营" },
    { key: "idiot", display_name: "白痴", camp: "villager", camp_label: "好人阵营" },
    { key: "cupid", display_name: "丘比特", camp: "neutral", camp_label: "第三方" },
    { key: "white_wolf", display_name: "白狼王", camp: "werewolf", camp_label: "狼人阵营" },
  ],
  presets: [
    {
      preset_id: "demo-6p",
      kind: "demo",
      title: "6P DeepSeek Demo",
      description: "6 人标准局 · 2 狼 1 预言 1 女巫 1 猎人 1 村民",
      tags: ["demo", "入门", "6人"],
      player_count: 6,
      role_names: ["werewolf", "werewolf", "seer", "witch", "hunter", "villager"],
      role_labels: ["狼人", "狼人", "预言家", "女巫", "猎人", "村民"],
      werewolf_count: 2, villager_count: 4, neutral_count: 0,
    },
    {
      preset_id: "9p-badge",
      kind: "badge",
      title: "9P 警徽流",
      description: "9 人进阶局 · 警长竞选 + 警徽流",
      tags: ["进阶", "9人", "警徽流"],
      player_count: 9,
      role_names: ["werewolf", "werewolf", "werewolf", "seer", "witch", "hunter", "guard", "villager", "villager"],
      role_labels: ["狼人", "狼人", "狼人", "预言家", "女巫", "猎人", "守卫", "村民", "村民"],
      werewolf_count: 3, villager_count: 6, neutral_count: 0,
    },
    {
      preset_id: "12p-mixed",
      kind: "mixed",
      title: "12P 扩展局",
      description: "12 人混合局 · 多模型横评",
      tags: ["扩展", "12人", "评测"],
      player_count: 12,
      role_names: ["werewolf", "werewolf", "werewolf", "white_wolf", "seer", "witch", "hunter", "guard", "villager", "villager", "elder", "cupid"],
      role_labels: ["狼人", "狼人", "狼人", "白狼王", "预言家", "女巫", "猎人", "守卫", "村民", "村民", "长老", "丘比特"],
      werewolf_count: 4, villager_count: 7, neutral_count: 1,
    },
  ],
  default_preset_id: "demo-6p",
};

// ============================================================
// 5. 单局复盘 / Replay
// ============================================================
const REPLAY_RUN_ID = "6p-deepseek-2026-06-10-01";
const REPLAY_ROSTER = [
  { player_id: "player_1", player_name: "墨白", role_name: "狼人", camp: "werewolf", ai_model: "deepseek-v3", is_alive: true },
  { player_id: "player_2", player_name: "夜行", role_name: "狼人", camp: "werewolf", ai_model: "deepseek-v3", is_alive: true },
  { player_id: "player_3", player_name: "沐辰", role_name: "预言家", camp: "villager", ai_model: "doubao-1-5-pro", is_alive: false },
  { player_id: "player_4", player_name: "若谷", role_name: "女巫", camp: "villager", ai_model: "gpt-5", is_alive: true },
  { player_id: "player_5", player_name: "听雪", role_name: "猎人", camp: "villager", ai_model: "claude-sonnet-4-5", is_alive: true },
  { player_id: "player_6", player_name: "云归", role_name: "村民", camp: "villager", ai_model: "gemini-2-5-pro", is_alive: true },
];

const REPLAY_TIMELINE = [
  // Night 1
  { index: 1, event_type: "game_started", round_number: 0, phase: "setup", message: "对局开始 · 6 人标准局", timestamp: "20:00" },
  { index: 2, event_type: "werewolf_killed", round_number: 1, phase: "night", message: "🐺 狼人击杀 P3 沐辰（预言家）", timestamp: "20:01", data: { target_id: "player_3", target_name: "沐辰" } },
  { index: 3, event_type: "witch_saved", round_number: 1, phase: "night", message: "🧪 女巫使用解药救下 P3 沐辰", timestamp: "20:02", data: { target_id: "player_3" } },
  { index: 4, event_type: "seer_checked", round_number: 1, phase: "night", message: "🔮 预言家查验 P1 墨白 → 【狼人】", timestamp: "20:03", data: { player_id: "player_3", target_id: "player_1", result: "狼人" } },
  // Day 1
  { index: 5, event_type: "phase_changed", round_number: 1, phase: "day_discussion", message: "☀️ 第 1 天 · 白天讨论", timestamp: "20:30" },
  { index: 6, event_type: "player_speech", round_number: 1, phase: "day_discussion", message: "我是预言家，昨晚查了 1 号，他是狼人。", timestamp: "20:31", data: { player_id: "player_3", speech: "我是预言家，昨晚查了 1 号，他是狼人。", reasoning: "P1 行为可疑，发言含糊。" } },
  { index: 7, event_type: "player_speech", round_number: 1, phase: "day_discussion", message: "1 号昨晚没说话，确实可疑，我信预言家。", timestamp: "20:33", data: { player_id: "player_4", speech: "1 号昨晚没说话，确实可疑，我信预言家。", reasoning: "P3 主动跳预言家且证据明确。" } },
  { index: 8, event_type: "player_speech", round_number: 1, phase: "day_discussion", message: "1 号不是预言家。我才是预言家，昨晚查 2 号，2 号是好人。", timestamp: "20:35", data: { player_id: "player_1", speech: "1 号不是预言家。我才是预言家，昨晚查 2 号，2 号是好人。", reasoning: "对跳预言家，污蔑我。" } },
  { index: 9, event_type: "player_speech", round_number: 1, phase: "day_discussion", message: "我听 3 号的发言更有逻辑，3 号是真预言家。", timestamp: "20:37", data: { player_id: "player_5", speech: "我听 3 号的发言更有逻辑，3 号是真预言家。" } },
  { index: 10, event_type: "vote_cast", round_number: 1, phase: "day_voting", message: "🗳️ P1 投给 P3", timestamp: "20:50", data: { voter_id: "player_1", target_id: "player_3" } },
  { index: 11, event_type: "vote_cast", round_number: 1, phase: "day_voting", message: "🗳️ P3 投给 P1", timestamp: "20:50", data: { voter_id: "player_3", target_id: "player_1" } },
  { index: 12, event_type: "vote_cast", round_number: 1, phase: "day_voting", message: "🗳️ P4 投给 P1", timestamp: "20:51", data: { voter_id: "player_4", target_id: "player_1" } },
  { index: 13, event_type: "vote_cast", round_number: 1, phase: "day_voting", message: "🗳️ P5 投给 P1", timestamp: "20:51", data: { voter_id: "player_5", target_id: "player_1" } },
  { index: 14, event_type: "vote_cast", round_number: 1, phase: "day_voting", message: "🗳️ P6 投给 P1", timestamp: "20:52", data: { voter_id: "player_6", target_id: "player_1" } },
  { index: 15, event_type: "vote_result", round_number: 1, phase: "day_voting", message: "⚖️ P1 墨白 4 票出局", timestamp: "20:53", data: { target_id: "player_1", target_name: "墨白" } },
  { index: 16, event_type: "player_eliminated", round_number: 1, phase: "ended_day", message: "💀 P1 墨白 真实身份：狼人", timestamp: "20:53", data: { player_id: "player_1", role: "werewolf" } },
  // Night 2
  { index: 17, event_type: "werewolf_killed", round_number: 2, phase: "night", message: "🐺 狼人击杀 P3 沐辰", timestamp: "21:01", data: { target_id: "player_3" } },
  { index: 18, event_type: "witch_poison_used", round_number: 2, phase: "night", message: "🧪 女巫毒杀 P2 夜行", timestamp: "21:02", data: { target_id: "player_2" } },
  { index: 19, event_type: "seer_checked", round_number: 2, phase: "night", message: "🔮 预言家查验 P2 → 【狼人】", timestamp: "21:03", data: { player_id: "player_3", target_id: "player_2", result: "狼人" } },
  // Day 2
  { index: 20, event_type: "phase_changed", round_number: 2, phase: "day_discussion", message: "☀️ 第 2 天 · 夜晚死 2 人", timestamp: "21:30" },
  { index: 21, event_type: "player_speech", round_number: 2, phase: "day_discussion", message: "昨晚 2、3 都死了，我昨晚没救是因为救药用完了。", timestamp: "21:32", data: { player_id: "player_4", speech: "昨晚 2、3 都死了，我昨晚没救是因为救药用完了。" } },
  { index: 22, event_type: "player_speech", round_number: 2, phase: "day_discussion", message: "女巫和预言家都死了？场上剩我们 3 个村民，靠逻辑推。", timestamp: "21:33", data: { player_id: "player_5", speech: "女巫和预言家都死了？场上剩我们 3 个村民，靠逻辑推。" } },
  { index: 23, event_type: "vote_cast", round_number: 2, phase: "day_voting", message: "🗳️ P4 投给 P6", timestamp: "21:50", data: { voter_id: "player_4", target_id: "player_6" } },
  { index: 24, event_type: "vote_cast", round_number: 2, phase: "day_voting", message: "🗳️ P5 投给 P6", timestamp: "21:51", data: { voter_id: "player_5", target_id: "player_6" } },
  { index: 25, event_type: "vote_cast", round_number: 2, phase: "day_voting", message: "🗳️ P6 投给 P4", timestamp: "21:51", data: { voter_id: "player_6", target_id: "player_4" } },
  { index: 26, event_type: "vote_result", round_number: 2, phase: "day_voting", message: "⚖️ P6 云归 2 票出局", timestamp: "21:52", data: { target_id: "player_6" } },
  { index: 27, event_type: "player_eliminated", round_number: 2, phase: "ended_day", message: "💀 P6 云归 真实身份：村民", timestamp: "21:52", data: { player_id: "player_6", role: "villager" } },
  // Night 3
  { index: 28, event_type: "werewolf_killed", round_number: 3, phase: "night", message: "🐺 狼人击杀 P4 若谷", timestamp: "22:01", data: { target_id: "player_4" } },
  // Day 3
  { index: 29, event_type: "phase_changed", round_number: 3, phase: "day_discussion", message: "☀️ 第 3 天 · 狼人胜利", timestamp: "22:30" },
  { index: 30, event_type: "game_ended", round_number: 3, phase: "ended", message: "🏆 狼人阵营胜利（仅剩狼人与猎人）", timestamp: "22:35", data: { winner: "werewolf" } },
];

export const mockReplayData = {
  run: {
    run_id: REPLAY_RUN_ID,
    source: "runs",
    path: `runs/${REPLAY_RUN_ID}`,
    created_at: "2026-06-10 20:00",
    player_count: 6,
    winner_camp: "werewolf",
    has_post_game: true,
    has_replay: true,
    roster: REPLAY_ROSTER,
    game_result_text: "狼人阵营胜利",
    artifacts: [
      { name: "events.jsonl", path: `runs/${REPLAY_RUN_ID}/events.jsonl`, kind: "log" },
      { name: "post_game.json", path: `runs/${REPLAY_RUN_ID}/post_game.json`, kind: "report" },
    ],
    extra: {},
  },
  view_scope: "god",
  timeline: REPLAY_TIMELINE,
  phase_summary: [
    { round_number: 1, phase: "night", event_count: 3, highlight_event_types: ["werewolf_killed", "witch_saved", "seer_checked"] },
    { round_number: 1, phase: "day_discussion", event_count: 5, highlight_event_types: ["player_speech", "vote_cast", "vote_result"] },
    { round_number: 2, phase: "night", event_count: 3, highlight_event_types: ["werewolf_killed", "witch_poison_used", "seer_checked"] },
    { round_number: 2, phase: "day_discussion", event_count: 3, highlight_event_types: ["player_speech", "vote_result"] },
    { round_number: 3, phase: "night", event_count: 1, highlight_event_types: ["werewolf_killed"] },
    { round_number: 3, phase: "ended", event_count: 1, highlight_event_types: ["game_ended"] },
  ],
  turning_points: [
    "Day 1 预言家对跳，P3 凭借更具体的查验信息获得多数票支持",
    "Night 2 狼人击杀 P3 预言家后，女巫毒杀 P2 反向命中最后一只狼",
    "Day 2 村民之间陷入互投，最终 P6 出局后好人失去推理支点",
  ],
  mvp_ranking: [
    { rank: 1, player_id: "player_3", player_name: "沐辰", role_name: "预言家", total_score: 92.4, ai_model: "doubao-1-5-pro" },
    { rank: 2, player_id: "player_4", player_name: "若谷", role_name: "女巫", total_score: 78.6, ai_model: "gpt-5" },
    { rank: 3, player_id: "player_5", player_name: "听雪", role_name: "猎人", total_score: 71.2, ai_model: "claude-sonnet-4-5" },
    { rank: 4, player_id: "player_2", player_name: "夜行", role_name: "狼人", total_score: 68.9, ai_model: "deepseek-v3" },
    { rank: 5, player_id: "player_1", player_name: "墨白", role_name: "狼人", total_score: 64.5, ai_model: "deepseek-v3" },
    { rank: 6, player_id: "player_6", player_name: "云归", role_name: "村民", total_score: 51.3, ai_model: "gemini-2-5-pro" },
  ],
  scores: [
    {
      kind: "mvp",
      title: "MVP 评分",
      payload: {
        data: {
          players: REPLAY_ROSTER.map((p, i) => {
            const totals = [64.5, 68.9, 92.4, 78.6, 71.2, 51.3];
            return {
              player_id: p.player_id,
              player_name: p.player_name,
              role_name: p.role_name,
              camp: p.camp,
              mvp_total: totals[i],
              breakdown_norm: {
                persuasion: 60 + i * 4,
                wolf_night: 30 + i * 5,
                strategy: 50 + i * 3,
                outcome: 70 - i * 2,
              },
            };
          }),
        },
      },
    },
    {
      kind: "swing",
      title: "投票摇摆分析",
      payload: {
        data: {
          speeches: [
            {
              round_number: 1,
              speaker_id: "player_4",
              speaker_name: "若谷",
              influence_score: 35,
              swing_count: 2,
              before_summary: "P5 倾向观望",
              after_summary: "P5 转投 P1",
              public_speech: "1 号昨晚没说话，确实可疑，我信预言家。",
              swings: [
                { player_id: "player_5", from_target_name: "P3", to_target_name: "P1" },
                { player_id: "player_6", from_target_name: "P3", to_target_name: "P1" },
              ],
            },
            {
              round_number: 1,
              speaker_id: "player_1",
              speaker_name: "墨白",
              influence_score: 8,
              swing_count: 0,
              before_summary: "无变化",
              after_summary: "无人转向",
              public_speech: "1 号不是预言家。我才是预言家...",
              swings: [],
            },
          ],
        },
      },
    },
    {
      kind: "benefit",
      title: "阵营收益",
      payload: { data: { werewolf: 28.5, villager: 18.2 } },
    },
  ],
  views_available: ["god", "seat"],
  report_markdown: "## 复盘报告\n\n狼人阵营凭借更稳定的对跳策略取得胜利。",
  coach_excerpt: "P3 沐辰的发言结构清晰，但夜间行动顺序可优化；P4 若谷解药用得太早，毒药使用精准。",
  belief_snapshots: [
    // Day 1 末
    {
      round: 1,
      phase: "day_discussion",
      anchor: "after_speech",
      observer_id: "player_3",
      observer_seat: 3,
      vote_intention: { seat: 1, reason: "已确认 P1 是狼" },
      first_order: [
        { target_seat: 1, wolf_probability: 0.92, reason: "我亲自验的", note: null },
        { target_seat: 2, wolf_probability: 0.6, reason: "跟 P1 互动密切", note: null },
        { target_seat: 4, wolf_probability: 0.18, reason: "发言偏保守但帮过我", note: null },
        { target_seat: 5, wolf_probability: 0.22, reason: "行为像村民", note: null },
        { target_seat: 6, wolf_probability: 0.3, reason: "信息不足", note: null },
      ],
      second_order: [
        { observer_seat: 1, suspects_me_as_wolf: 0.85, reason: "对跳预言家", note: null },
        { observer_seat: 2, suspects_me_as_wolf: 0.4, reason: "跟 P1 站一起", note: null },
      ],
    },
    {
      round: 1,
      phase: "day_discussion",
      anchor: "after_speech",
      observer_id: "player_4",
      observer_seat: 4,
      vote_intention: { seat: 1, reason: "信 P3 预言家" },
      first_order: [
        { target_seat: 1, wolf_probability: 0.7, reason: "对跳且不解释细节", note: null },
        { target_seat: 2, wolf_probability: 0.45, reason: "P1 同党嫌疑", note: null },
        { target_seat: 3, wolf_probability: 0.15, reason: "发言结构清晰", note: null },
        { target_seat: 5, wolf_probability: 0.25, reason: "站 P3 一边", note: null },
        { target_seat: 6, wolf_probability: 0.3, reason: "无明显信息", note: null },
      ],
      second_order: [{ observer_seat: 1, suspects_me_as_wolf: 0.3, reason: "我帮过 P3", note: null }],
    },
    // Day 2 末
    {
      round: 2,
      phase: "day_discussion",
      anchor: "after_speech",
      observer_id: "player_5",
      observer_seat: 5,
      vote_intention: { seat: 6, reason: "场上 P4 / P6 二选一" },
      first_order: [
        { target_seat: 4, wolf_probability: 0.4, reason: "解释有逻辑但略生硬", note: null },
        { target_seat: 6, wolf_probability: 0.55, reason: "P6 站队靠后", note: null },
      ],
      second_order: [
        { observer_seat: 4, suspects_me_as_wolf: 0.35, reason: "互相怀疑", note: null },
        { observer_seat: 6, suspects_me_as_wolf: 0.3, reason: "互相怀疑", note: null },
      ],
    },
  ],
  wolf_camp_snapshots: [
    {
      day: 1,
      camp_strategy: "对跳预言家污蔑真预言家",
      target_selection_id: 3,
      target_selection_name: "沐辰",
      wolf_votes: [
        { wolf_player_id: 1, wolf_player_name: "墨白", voted_for_id: 3, voted_for_name: "沐辰" },
        { wolf_player_id: 2, wolf_player_name: "夜行", voted_for_id: 3, voted_for_name: "沐辰" },
      ],
    },
    {
      day: 2,
      camp_strategy: "击杀真预言家，逼迫女巫出手",
      target_selection_id: 3,
      target_selection_name: "沐辰",
      wolf_votes: [
        { wolf_player_id: 2, wolf_player_name: "夜行", voted_for_id: 3, voted_for_name: "沐辰" },
      ],
    },
  ],
  belief_heatmap: [],
};

// ============================================================
// 6. 分享 / Share
// ============================================================
export const mockShareReplayData = {
  run_id: REPLAY_RUN_ID,
  share_title: "6P DeepSeek Demo · 狼人险胜",
  share_summary: "预言家对跳 + 女巫毒杀反向命中，本局狼人阵营以微弱阵营收益取胜。",
  winner_camp: "werewolf",
  mvp_winner: {
    rank: 1,
    player_id: "player_3",
    player_name: "沐辰",
    role_name: "预言家",
    total_score: 92.4,
    ai_model: "doubao-1-5-pro",
  },
  key_moments: [
    "Day 1 预言家对跳，P3 凭借查验细节赢得多数票",
    "Night 2 狼人击杀 P3 预言家，P4 女巫反向毒杀 P2 命中最后狼",
    "Day 2 村民间互投，P6 出局后好人推理链断裂",
  ],
  highlight_players: [
    { player_id: "player_3", player_name: "沐辰", role_name: "预言家", camp: "villager", ai_model: "doubao-1-5-pro", is_alive: false },
    { player_id: "player_4", player_name: "若谷", role_name: "女巫", camp: "villager", ai_model: "gpt-5", is_alive: false },
    { player_id: "player_1", player_name: "墨白", role_name: "狼人", camp: "werewolf", ai_model: "deepseek-v3", is_alive: false },
  ],
  stats_line: "6 人局 · 狼人胜利 · 阵营收益 28.5 · MVP 沐辰 92.4",
};

// ============================================================
// 7. 玩法说明 / HowToPlay
// ============================================================
export const mockHowToPlayData = {
  title: "法官判定规则",
  summary: "标准狼人杀流程 + 平台对 AI 玩家的特殊处理",
  sections: [
    { heading: "昼夜交替", body: "标准狼人杀流程：夜晚行动 → 白天讨论 → 投票放逐 → 结算胜负。", bullets: ["夜晚：狼人选择击杀目标，神职角色按固定顺序行动", "白天：公开讨论，预言家/女巫可选择是否亮明身份", "投票：得票最多者出局，平票由警长决定或重新投票"] },
    { heading: "AI 玩家行为", body: "AI 玩家在每个阶段会先进行内部推理，再产出公开行动。", bullets: ["推理基于多层记忆 + 当前信念矩阵", "行动受 Prompt 模板约束，由 Skill 库引导策略", "对局结束自动生成复盘 / 进化报告"] },
    { heading: "胜负判定", body: "狼人阵营胜利条件：场上狼人数量 ≥ 好人数量且狼人 > 0。", bullets: ["好人胜利：所有狼人被放逐或击杀", "狼人胜利：满足阵营比例", "第三方：取决于具体角色胜负条件"] },
  ],
  phase_flow: [
    { order: 1, phase_key: "night", title: "夜晚", description: "狼人 / 预言家 / 女巫 / 守卫按顺序行动", icon: "🌙" },
    { order: 2, phase_key: "dawn", title: "天亮", description: "公布昨晚死亡信息", icon: "☀️" },
    { order: 3, phase_key: "speech", title: "发言", description: "存活玩家轮流发言", icon: "💬" },
    { order: 4, phase_key: "vote", title: "投票", description: "所有存活玩家投票", icon: "🗳️" },
    { order: 5, phase_key: "exile", title: "放逐", description: "得票最多者出局", icon: "⚖️" },
  ],
  victory_conditions: [
    { camp: "villager", title: "好人胜利", conditions: ["所有狼人被放逐", "所有狼人夜晚被击杀"] },
    { camp: "werewolf", title: "狼人胜利", conditions: ["狼人数量 ≥ 好人数量", "狼人数量 > 0"] },
  ],
};

// ============================================================
// 8. 关于 / About
// ============================================================
export const mockAboutData = {
  title: "关于 AI 狼人杀",
  summary: "一个用狼人杀验证多智能体博弈与自进化的实验性 AI 产品。",
  sections: [
    { heading: "项目背景", body: "普通多 Agent 演示缺少持续思考、身份判断和策略变化。本项目以狼人杀为场景，验证多智能体在信息不完全环境下的推理、说服、投票与策略演化能力。" },
    { heading: "技术栈", body: "FastAPI + AgentScope + React + Three.js + Tailwind 4 + SSE 实时事件流。", bullets: ["后端：FastAPI / Python", "前端：React 19 + Vite + TypeScript", "可视化：Three.js / GSAP / Recharts"] },
    { heading: "设计原则", body: "让每一次发言都影响判断、投票和后续策略沉淀。" },
  ],
  tech_stack: ["Python 3.11", "FastAPI", "AgentScope", "React 19", "TypeScript", "Vite", "Three.js", "GSAP", "Recharts", "Tailwind 4"],
  architecture_layers: [
    { heading: "game_runtime", body: "规则引擎", bullets: ["角色", "夜间行动", "死亡链", "投票", "胜负"] },
    { heading: "agent_team", body: "Agent 执行层", bullets: ["AgentScope", "InformationHub", "多层记忆", "Skill 注入"] },
    { heading: "strategy", body: "策略契约层", bullets: ["Prompt 包", "结构化输出 schema", "信念矩阵", "投票意向"] },
    { heading: "evaluation", body: "评测闭环", bullets: ["赛后评分", "复盘", "Skill 抽取", "版本进化"] },
  ],
  platform_stats: { role_count: 22, config_count: 8, model_count: 8, total_runs: 1284 },
};

// ============================================================
// 9. 玩法 / Features
// ============================================================
export const mockFeaturesData = {
  title: "特色能力",
  subtitle: "PROJECT HIGHLIGHTS",
  description: "本平台围绕多智能体博弈的三大核心能力：信念矩阵、投票意向、赛后自进化。",
  sections: [
    { title: "一阶 / 二阶信念矩阵", value: "每个 Agent 对其他玩家身份概率 + 他人怀疑自己的程度，全部可视化" },
    { title: "投票意向追踪", value: "Foaster 风格复盘，展示每轮发言如何改变投票对象" },
    { title: "赛后 Skill 沉淀", value: "从对局中抽取可复用策略到下一局" },
  ],
  feature_cards: [
    { title: "20+ 角色", description: "标准板子 + 自定义板子（4 / 6 / 8 / 12 / 16 人）", icon: "🎭", value_stat: "22 角色" },
    { title: "多层记忆", description: "工作 / 情景 / 语义 / 程序记忆四层组合", icon: "🧠", value_stat: "4 层" },
    { title: "信念矩阵", description: "一阶 + 二阶信念追踪，支持信号检测", icon: "📊", value_stat: "B1 + B2" },
    { title: "投票意向", description: "Foaster 风格复盘，发言前后对比", icon: "🗳️", value_stat: "swing" },
    { title: "Web 全栈", description: "FastAPI + React/Three.js + SSE 实时直播", icon: "🌐", value_stat: "SSE" },
    { title: "并行多栈", description: "fleet 模式同时开多局，批量评测", icon: "🚀", value_stat: "fleet" },
    { title: "结构化日志", description: "JSONL 事件流 + 赛后复盘视图", icon: "📝", value_stat: "JSONL" },
    { title: "音频系统", description: "BGM + 事件音效（作品集中已默认静音）", icon: "🔊", value_stat: "静音" },
    { title: "Docker 部署", description: "一键生产部署，含健康检查与告警", icon: "📦", value_stat: "compose" },
    { title: "多模型评测", description: "同一博弈环境横评不同 LLM", icon: "🔬", value_stat: "8 模型" },
    { title: "Prompt/Skill 自进化", description: "A / B 实验验证策略沉淀效果", icon: "🔄", value_stat: "+35.7%" },
  ],
};

// ============================================================
// 10. 黑夜行纪 / NightPhase
// ============================================================
export const mockNightPhaseData = {
  title: "黑夜行纪",
  summary: "夜间阶段行动次第与黑盒蔽天规则",
  sections: [
    { heading: "行动顺序", body: "守卫 → 狼人 → 丘比特 → 盗贼 → 预言家 → 女巫 → 守墓人 → 梦魇狼" },
  ],
  steps: [
    { order: 1, role_group: "guard", title: "守卫行动", description: "选择一名玩家守护，若与昨夜相同则视为放弃守护" },
    { order: 2, role_group: "werewolf", title: "狼人袭击", description: "狼人集体讨论后选择击杀目标" },
    { order: 3, role_group: "cupid", title: "丘比特连接", description: "首夜：连接两名玩家成为情侣" },
    { order: 4, role_group: "thief", title: "盗贼换牌", description: "首夜：自候选身份中选一" },
    { order: 5, role_group: "seer", title: "预言家查验", description: "选择一名玩家查验身份" },
    { order: 6, role_group: "witch", title: "女巫用药", description: "可使用解药救被狼杀的人 / 用毒药杀人" },
    { order: 7, role_group: "graveyard_keeper", title: "守墓人验尸", description: "可验一名死亡玩家的身份" },
  ],
  involved_roles: {
    "守卫": ["每晚守护一名玩家"],
    "狼人": ["集体投票选择击杀目标"],
    "丘比特": ["首夜连接两名玩家为情侣"],
    "盗贼": ["首夜自候选身份中选一"],
    "预言家": ["每晚查验一名玩家"],
    "女巫": ["解药 / 毒药各一瓶，全局有效"],
    "守墓人": ["每晚可验一名死亡玩家"],
    "梦魇狼": ["使目标当晚无法使用技能"],
  },
  visibility_rules: [
    { heading: "信息隔离", body: "夜晚除同阵营 / 特殊技能外，不展示其他玩家身份" },
    { heading: "守夜可见", body: "狼人可看到其他狼人，但看不到神职" },
    { heading: "技能结算", body: "解药 / 毒 / 守卫优先级按顺序处理" },
  ],
  timeout_hints: { "pre_wolf": 30, "werewolf_kill": 60, "werewolf_chat": 90, "seer_check": 30, "witch_decide": 30 },
};

// ============================================================
// 11. 智斗秘卷 / Strategy
// ============================================================
export const mockStrategyData = {
  title: "智斗秘卷",
  general_tips: [
    { role_key: null, title: "先判断身份", content: "不急于亮身份，先看发言再决定是否跳预言家", tags: ["通用"] },
    { role_key: null, title: "逻辑链", content: "用时间线串联事件，给出可验证的推理", tags: ["通用"] },
  ],
  phase_tips: [
    { role_key: null, title: "夜晚", content: "夜晚尽量利用技能打出信息差", tags: ["夜晚"] },
    { role_key: null, title: "白天", content: "白天抓住矛盾点攻击可疑玩家", tags: ["白天"] },
  ],
  role_tips: [
    { role_key: "werewolf", title: "狼人", content: "首夜击杀要选能获得最大信息的人（预言家优先）", tags: ["狼人"] },
    { role_key: "seer", title: "预言家", content: "亮身份要带具体查验，避免被对跳", tags: ["预言家"] },
    { role_key: "witch", title: "女巫", content: "解药留到关键轮次，毒药用于反向命中", tags: ["女巫"] },
  ],
  role_tips_by_camp: {
    werewolf: [{ role_key: null, title: "对跳", content: "对跳预言家是狼人常用策略", tags: [] }],
    villager: [{ role_key: null, title: "站边", content: "站边要基于逻辑而非直觉", tags: [] }],
  },
};

// ============================================================
// 12. 模型详情 / ModelDetail
// ============================================================
export const mockModelDetail = {
  id: "deepseek-v3",
  name: "DeepSeek-V3",
  developer: "DeepSeek",
  rating: 1832,
  primaryRolePreference: "通用",
  description: "DeepSeek-V3 在狼人杀博弈中表现稳定，擅长长链路推理与策略博弈。",
  parameters: "671B (MoE)",
  visionSupport: false,
  maxTokens: 8192,
  strengths: ["长链推理", "多步博弈", "信息整合", "语言一致性"],
  weaknesses: ["极端条件下会犹豫", "有时过度解释"],
  temperament: "冷静分析型",
  radarStats: { logic: 88, deception: 75, persuasion: 82, cooperation: 78, survivability: 80 },
  sampleQuote: "综合场上 5 个人的发言，我倾向认为 P1 是狼，因为...",
  tags: ["MoE", "中文友好", "长上下文"],
};

// ============================================================
// 13. 模型对比 / ModelComparison
// ============================================================
export const mockModelComparison = {
  models: [
    { id: "deepseek-v3", name: "DeepSeek-V3", developer: "DeepSeek", rating: 1832, primaryRolePreference: "通用", description: "稳定型", visionSupport: false, maxTokens: 8192, strengths: ["长链推理"], weaknesses: ["犹豫"], temperament: "冷静", radarStats: { logic: 88, deception: 75, persuasion: 82, cooperation: 78, survivability: 80 }, sampleQuote: "...", tags: ["MoE"] },
    { id: "gpt-5", name: "GPT-5", developer: "OpenAI", rating: 1854, primaryRolePreference: "通用", description: "推理性", visionSupport: true, maxTokens: 16384, strengths: ["推理"], weaknesses: ["成本高"], temperament: "全面", radarStats: { logic: 92, deception: 80, persuasion: 86, cooperation: 82, survivability: 84 }, sampleQuote: "...", tags: ["OpenAI"] },
  ],
  dimensionAnalysis: [
    { dimension: "逻辑推理", description: "对发言逻辑链的拆解能力", winnerModelId: "gpt-5", details: { "deepseek-v3": "88 分", "gpt-5": "92 分" } },
    { dimension: "伪装能力", description: "夜间身份的隐藏", winnerModelId: "gpt-5", details: { "deepseek-v3": "75 分", "gpt-5": "80 分" } },
  ],
  overallVerdict: "在 6P Demo 中两者各有胜负；DeepSeek 成本低，GPT-5 推理更准。",
};

// ============================================================
// 14. 模型总览 / ModelOverall
// ============================================================
export const mockModelOverall = {
  total_models: 8,
  total_runs: 1284,
  total_good_wins: 642,
  total_evil_wins: 642,
  models: [
    { id: "deepseek-v3", name: "DeepSeek-V3", win_rate: 0.612, avg_mvp: 71.2 },
    { id: "gpt-5", name: "GPT-5", win_rate: 0.654, avg_mvp: 73.8 },
    { id: "claude-sonnet-4-5", name: "Claude Sonnet 4.5", win_rate: 0.628, avg_mvp: 72.1 },
    { id: "doubao-1-5-pro", name: "豆包 1.5 Pro", win_rate: 0.582, avg_mvp: 68.4 },
    { id: "gemini-2-5-pro", name: "Gemini 2.5 Pro", win_rate: 0.594, avg_mvp: 66.7 },
    { id: "kimi-k2", name: "Kimi K2", win_rate: 0.561, avg_mvp: 64.2 },
    { id: "qwen-3-max", name: "Qwen 3 Max", win_rate: 0.578, avg_mvp: 65.5 },
    { id: "llama-3-1-405b", name: "Llama 3.1 405B", win_rate: 0.519, avg_mvp: 60.3 },
  ],
};

// ============================================================
// 15. Runs / RunList
// ============================================================
export const mockRunsData = {
  runs: {
    items: [
      { run_id: "6p-deepseek-2026-06-10-01", source: "runs", path: "runs/6p-deepseek-2026-06-10-01", created_at: "2026-06-10 20:00", player_count: 6, winner_camp: "werewolf", has_post_game: true, has_replay: true },
      { run_id: "8p-mixed-2026-06-09-04", source: "runs", path: "runs/8p-mixed-2026-06-09-04", created_at: "2026-06-09 17:30", player_count: 8, winner_camp: "villager", has_post_game: true, has_replay: true },
      { run_id: "6p-doubao-2026-06-08-02", source: "runs", path: "runs/6p-doubao-2026-06-08-02", created_at: "2026-06-08 14:00", player_count: 6, winner_camp: "villager", has_post_game: true, has_replay: true },
      { run_id: "12p-ab-2026-06-07-01", source: "runs", path: "runs/12p-ab-2026-06-07-01", created_at: "2026-06-07 21:00", player_count: 12, winner_camp: "werewolf", has_post_game: true, has_replay: true },
      { run_id: "9p-badge-2026-06-06-03", source: "runs", path: "runs/9p-badge-2026-06-06-03", created_at: "2026-06-06 19:00", player_count: 9, winner_camp: "werewolf", has_post_game: true, has_replay: true },
    ],
    meta: { page: 1, page_size: 20, total: 5 },
  },
};

// ============================================================
// 16. Providers / Settings
// ============================================================
export const mockProviders = {
  providers: [
    { provider_id: "ark", display_name: "火山方舟", fields: [
      { env_name: "ARK_API_KEY", label: "API Key", required: true, secret: true, example: "xxxx-xxxx-xxxx" },
    ] },
    { provider_id: "openai", display_name: "OpenAI", fields: [
      { env_name: "OPENAI_API_KEY", label: "API Key", required: true, secret: true, example: "sk-..." },
    ] },
    { provider_id: "siliconflow", display_name: "SiliconFlow", fields: [
      { env_name: "SILICONFLOW_API_KEY", label: "API Key", required: true, secret: true, example: "sk-..." },
    ] },
  ],
  default_provider_id: "ark",
};

export const mockApiKeysStatus = {
  keys: {
    ARK_API_KEY: { env_name: "ARK_API_KEY", configured: true, masked: "****-****-xxxx" },
    OPENAI_API_KEY: { env_name: "OPENAI_API_KEY", configured: false, masked: null },
  },
  env_fields: {},
  env_file: ".env",
  writable: false,
};

export const mockAvailableModels = {
  models: [
    { provider_id: "ark", provider_label: "火山方舟", display_name: "Doubao 1.5 Pro" },
    { provider_id: "openai", provider_label: "OpenAI", display_name: "GPT-5" },
    { provider_id: "siliconflow", provider_label: "SiliconFlow", display_name: "DeepSeek V3" },
  ],
  default_provider_id: "ark",
};

// ============================================================
// 17. StartGame
// ============================================================
export const mockStartGameResponse = {
  run_id: "6p-deepseek-mock-001",
  source: "runs",
  status: "started",
  config_id: "llm-6p-deepseek",
  run_dir: "runs/6p-deepseek-mock-001",
  game_page_path: "/",
  status_path: "/runs/6p-deepseek-mock-001",
  replay_page_path: "/replay/6p-deepseek-mock-001",
  player_count: 6,
  badge_flow: false,
  player_token: null,
  stream_path: "/api/v1/games/6p-deepseek-mock-001/stream",
  seat_page_path: null,
};

// ============================================================
// 18. GameStatus
// ============================================================
export const mockGameStatus = {
  run_id: "6p-deepseek-mock-001",
  source: "runs",
  status: "running",
  snapshot: {
    phase: "day_discussion",
    round_number: 1,
    winner_camp: null,
    is_ended: false,
    sheriff_id: null,
    alive_count: 6,
    dead_count: 0,
    event_count: 24,
  },
  error: null,
  result_text: null,
  has_post_game: true,
  has_replay: true,
  post_game_status: null,
  alert_count: 0,
};

// ============================================================
// 19. SSE 事件流
// ============================================================
export const mockSseEvents = [
  { event_type: "snapshot", data: { roster: REPLAY_ROSTER, day: 1, phase: "night" } },
  { event_type: "phase_changed", round_number: 1, phase: "night", message: "🌙 第 1 夜" },
  { event_type: "actor_thinking", round_number: 1, phase: "night", message: "墨白 正在思考...", data: { player_id: "player_1", role: "werewolf", context: "werewolf_chat" } },
  { event_type: "werewolf_killed", round_number: 1, phase: "night", message: "🐺 狼人击杀 P3 沐辰", data: { player_id: "player_1", target_id: "player_3", target_name: "沐辰" } },
  { event_type: "seer_checked", round_number: 1, phase: "night", message: "🔮 预言家查验 P1 → 【狼人】", data: { player_id: "player_3", target_id: "player_1", target_name: "墨白", result: "狼人" } },
  { event_type: "phase_changed", round_number: 1, phase: "day_discussion", message: "☀️ 第 1 天 · 白天讨论" },
  { event_type: "player_speech", round_number: 1, phase: "day_discussion", message: "我是预言家，昨晚查了 1 号，他是狼人。", data: { player_id: "player_3", speech: "我是预言家，昨晚查了 1 号，他是狼人。", reasoning: "P1 行为可疑，发言含糊。" } },
  { event_type: "player_speech", round_number: 1, phase: "day_discussion", message: "1 号昨晚没说话，确实可疑，我信预言家。", data: { player_id: "player_4", speech: "1 号昨晚没说话，确实可疑，我信预言家。", reasoning: "P3 主动跳预言家且证据明确。" } },
  { event_type: "vote_cast", round_number: 1, phase: "day_voting", message: "🗳️ P4 投给 P1", data: { voter_id: "player_4", target_id: "player_1" } },
  { event_type: "vote_result", round_number: 1, phase: "day_voting", message: "⚖️ P1 墨白 4 票出局", data: { target_id: "player_1", target_name: "墨白" } },
  { event_type: "player_eliminated", round_number: 1, phase: "ended_day", message: "💀 P1 墨白 真实身份：狼人", data: { player_id: "player_1", role: "werewolf" } },
  { event_type: "belief_snapshot", round_number: 1, phase: "day_discussion", message: "📊 信念快照", data: { snapshots: mockReplayData.belief_snapshots.filter(s => s.round === 1) } },
  { event_type: "vote_intention_snapshot", round_number: 1, phase: "day_discussion", message: "🗳️ 投票意向", data: { round_number: 1, phase: "day_discussion", speaker_id: "player_4", speaker_name: "若谷", public_speech: "1 号昨晚没说话，确实可疑，我信预言家。", swings: [{ player_id: "player_5", player_name: "听雪", from_seat: 3, to_seat: 1, to_target_name: "墨白" }], swing_count: 1, influence_score: 18, before: {}, after: {} } },
  { event_type: "wolf_camp_snapshot", round_number: 1, phase: "night", message: "🐺 狼人阵营快照", data: { minds: [{ owner_seat: 1, camp_strategy: "对跳预言家污蔑真预言家", target_selection_id: 3 }] } },
  { event_type: "phase_changed", round_number: 2, phase: "night", message: "🌙 第 2 夜" },
  { event_type: "werewolf_killed", round_number: 2, phase: "night", message: "🐺 狼人击杀 P3 沐辰", data: { player_id: "player_2", target_id: "player_3" } },
  { event_type: "witch_poison_used", round_number: 2, phase: "night", message: "🧪 女巫毒杀 P2 夜行", data: { player_id: "player_4", target_id: "player_2" } },
  { event_type: "player_eliminated", round_number: 2, phase: "ended_night", message: "💀 P3 沐辰 / P2 夜行 死亡", data: [{ player_id: "player_3" }, { player_id: "player_2" }] },
  { event_type: "game_ended", round_number: 3, phase: "ended", message: "🏆 狼人阵营胜利", data: { winner: "werewolf" } },
  { event_type: "end" },
];

// ============================================================
// 20. About PageProjectPresentation (used by about/ProjectPresentation.tsx)
// ============================================================
export const mockProjectPresentation = {
  brand: "AI 狼人杀",
  tagline: "多智能体博弈与自进化实验系统",
  highlights: [
    { title: "22 角色", desc: "狼 / 预言家 / 女巫 / 猎人 / 守卫 / 丘比特..." },
    { title: "信念矩阵", desc: "一阶 + 二阶信念追踪，发言驱动判断变化" },
    { title: "投票意向", desc: "Foaster 风格复盘，影响力可量化" },
    { title: "自进化", desc: "A / B 实验验证 Skill 沉淀效果" },
  ],
};
