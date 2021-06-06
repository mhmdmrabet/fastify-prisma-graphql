import { app } from "./app";

const start = async () => {
  try {
    const port = 8080;
    await app.listen(port);
    app.log.info(`App running on http://localhost:${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
