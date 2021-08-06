import { fastify } from 'fastify';
import fastifySwagger from 'fastify-swagger';
import route from './controller.js';
const app = fastify({ logger: true });

app.register(fastifySwagger, {
  mode: 'static',
  specification: {
    path: './app/src/docs/2FA.yaml',
  },
  exposeRoute: true,
});

app.register(route);

const start = async () => {
  try {
    await app.listen(3000, '0.0.0.0');
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
