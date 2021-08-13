import prisma from '@prisma/client';

const { PrismaClient } = prisma;

const save = (userId) => async (token) => {
  const tok = Number(token);
  const client = new PrismaClient();
  const response = await client.token.create({
    data: {
      email: userId,
      token: tok,
    },
  });
  return response;
};
/*
class Repository {
  constructor() {
    this.client = new PrismaClient();
  }

  async save(userId, token) {
    const tok = Number(token);
    const response = await this.client.token.create({
      data: {
        email: userId,
        token: tok,
      },
    });

    return response;
  }
}*/

export default save;
