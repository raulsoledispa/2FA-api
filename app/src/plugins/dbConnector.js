import prisma from '@prisma/client';
import plugin from 'fastify-plugin';

const { PrismaClient } = prisma;

async function initializerDB(fastify) {
  fastify.decorate('db', new PrismaClient());

  fastify.addHook('onReady', async () => {
    await fastify.db.$connect();
    fastify.log.info('Connected to MongoDB...');
  });
  fastify.addHook('onClose', async (instance, done) => {
    await instance.db.$disconnect();
    instance.log.info('Disconnect from MongoDB...');
    done();
  });
}

export default plugin(initializerDB);
