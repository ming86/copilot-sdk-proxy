import type { Provider } from "../types.js";
import { createResponsesHandler } from "./handler.js";
import { DefaultConversationManager } from "../../conversation-manager.js";

export const codexProvider = {
  name: "Codex",
  routes: ["POST /v1/responses"],

  register(app, ctx) {
    const manager = new DefaultConversationManager(ctx.logger);
    app.post("/v1/responses", createResponsesHandler(ctx, manager));
  },
} satisfies Provider;
