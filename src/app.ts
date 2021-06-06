import { fastify } from "fastify";
import { router } from "./routes";

const app = fastify({
  logger: true,
});

app.register(router);

export { app };
