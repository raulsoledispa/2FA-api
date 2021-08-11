import plugin from 'fastify-plugin';
import openapi from 'fastify-swagger';

async function documentation(fastify) {
  fastify.register(openapi, {
    mode: 'static',
    specification: {
      path: './app/src/docs/2FA.yaml',
    },
    exposeRoute: true,
  });
}

export default plugin(documentation);
