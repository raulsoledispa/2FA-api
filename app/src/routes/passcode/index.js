import { from, of } from 'rxjs';
// eslint-disable-next-line import/extensions
import { map } from 'rxjs/internal/operators/map.js';
// eslint-disable-next-line import/extensions
import { concatMap } from 'rxjs/internal/operators/concatMap.js';
// eslint-disable-next-line import/extensions
import { generate } from './passcodeGenerator.js';

export default async function init(app, options, next) {
  app.post('/api/generate', async (request, reply) => {
    const { userId } = request.body;
    try {
      const token = await from(generate())
        .pipe(
          map((data) => Number(data)),
          concatMap((data) => app.repository.save(userId, data))
        )
        .toPromise();
      reply.send({ userId, token });
    } catch (e) {
      reply.send({ message: e.message });
    }
  });

  app.post('/api/verify', async (request, response) => {});

  next();
}
