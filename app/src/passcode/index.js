// eslint-disable-next-line import/extensions
import generatePassword from './generatePassword.js';

export default function init(app, options, next) {
  app.post('/2FA/api/generate', async (request, reply) => {
    const { userId } = request.body;
    const { token } = generatePassword(userId);
    app.log.info(`Token generated ${token}`);
    reply.send({ data: { token } });
  });

  next();
}
