import prisma from '@prisma/client';
import plugin from 'fastify-plugin';

const { PrismaClient } = prisma;

async function initializerDB(fastify) {
  fastify.decorate('db', new PrismaClient());
}

export default plugin(initializerDB);
