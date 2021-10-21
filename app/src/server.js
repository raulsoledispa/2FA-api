// eslint-disable-next-line import/extensions
import build from './app.js';

const start = async () => {
  const app = await build();
  try {
    await app.listen(3000, '0.0.0.0');
    app.log.info(app.printRoutes());
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
