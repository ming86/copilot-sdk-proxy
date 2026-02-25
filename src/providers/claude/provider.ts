import type { Provider } from "../types.js";
import { createMessagesHandler } from "./handler.js";
import { createCountTokensHandler } from "./count-tokens.js";
import { DefaultConversationManager } from "../../conversation-manager.js";

export const claudeProvider = {
  name: "Claude",
  routes: ["POST /v1/messages", "POST /v1/messages/count_tokens"],

  register(app, ctx) {
    const manager = new DefaultConversationManager(ctx.logger);
    app.post("/v1/messages", createMessagesHandler(ctx, manager));
    app.post("/v1/messages/count_tokens", createCountTokensHandler(ctx));
  },
} satisfies Provider;
