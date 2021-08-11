import { fastify } from 'fastify';
import autoload from 'fastify-autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export default async function build() {
  const filename = fileURLToPath(import.meta.url);
  const directory = dirname(filename);

  const app = fastify({ logger: true });
  app.register(autoload, {
    dir: join(directory, 'plugins'),
  });

  app.register(autoload, {
    dir: join(directory, 'passcode'),
  });

  return app;
}
