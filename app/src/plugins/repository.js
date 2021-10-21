// eslint-disable-next-line import/prefer-default-export,max-classes-per-file
class DbRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async save(userId, token) {
    await this.connection.token.create({
      data: {
        email: userId,
        token: Number(token),
      },
    });
    return token;
  }

  async search(userId) {
    return this.connection.token.findFirst({
      where: {
        email: userId,
      },
    });
  }
}

async function repository(app, ops) {
  app.decorate('repository', new DbRepository(app.db));
}

repository[Symbol.for('skip-override')] = true;

export default repository;
