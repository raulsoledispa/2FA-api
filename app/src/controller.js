export default async function routes(fastify, options) {
  fastify.post('/2FA/api/generate', async (request, reply) => {
    const { userId } = request.body;
  });
}
