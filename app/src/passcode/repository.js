function save(userId) {
  return async function (token) {
    const tok = Number(token);
    this.log.info('saving information');
    const response = await this.db.token.create({
      data: {
        email: userId,
        token: tok,
      },
    });
    return response;
  };
}

async function search(userId) {
  const { code } = await this.db.token.findFirst({
    where: {
      email: userId,
    },
  });
  this.log.info(`Token found ${code}`);
  return code;
}

export { save, search };
