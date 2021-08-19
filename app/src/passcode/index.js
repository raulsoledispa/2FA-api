// eslint-disable-next-line import/extensions
import PasswordService from './passcodeService.js';

export default function init(app, options, next) {
  app.post('/2FA/api/generate', async (request, reply) => {
    const { userId } = request.body;
    const { token } = await PasswordService(userId).generate.call(app);
    app.log.info(`Token generated ${token}`);
    reply.send({ data: { token } });
  });

  app.post('/2FA/api/verify', async (request, reply) => {
    const { userId, code } = request.body;
    const { token } = await PasswordService(userId).verify.call(app, code);
    reply.send({ data: { token } });
  });

  next();
}
