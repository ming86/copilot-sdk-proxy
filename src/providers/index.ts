import { openaiProvider } from "./openai/provider.js";
import { claudeProvider } from "./claude/provider.js";
import { codexProvider } from "./codex/provider.js";
import type { Provider } from "./types.js";
import type { ProviderName } from "../schemas/config.js";

export { PROVIDER_NAMES } from "../schemas/config.js";
export type { ProviderName } from "../schemas/config.js";

export const providers = {
  openai: openaiProvider,
  claude: claudeProvider,
  codex: codexProvider,
} satisfies Record<ProviderName, Provider>;
