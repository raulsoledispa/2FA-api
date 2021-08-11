import plugin from 'fastify-plugin';
import sequelize from 'fastify-sequelize';

async function dbConnector(fastify) {
  fastify
    .register(sequelize, {
      instance: 'db',
      dialect: 'sqlite',
      storage: ':memory:',
    })
    .ready(() => {
      fastify.db
        .authenticate()
        .then(() => {
          fastify.log.info('Connection has been established successfully.');
        })
        .catch((err) => {
          fastify.log.error('Unable to connect to the database:', err);
        });
    });
}

export default plugin(dbConnector);
