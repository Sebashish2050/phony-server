const Sequelize = require('sequelize');
const config = require('config');
const models = require('./models');
const { setupAssociations } = require('./models/associations');

const mysqlConfig = config.get('mysqlConfig');

const pools = {};

let initializedDbHandles;

const initialize = () => {
  if (initializedDbHandles) return initializedDbHandles;
    const {
      database,
      user: username,
      password,
      host,
      port,
      max,
      min,
      idleTimeoutMillis,
      connectionTimeoutMillis,
      evictionRunIntervalMillis,
      databaseName,
    } = mysqlConfig;
    const sequelize = new Sequelize(database, username, password, {
      host,
      port,
      logging: false,
      dialect: 'mysql',
      define: {
        timestamps: false,
      },
      pool: {
        max,
        min,
        acquire: connectionTimeoutMillis,
        idle: idleTimeoutMillis,
        evict: evictionRunIntervalMillis,
      },
    });

    sequelize.models = Object.entries(models[databaseName]).reduce(
      (acc, [model, createTable]) => {
        acc[model] = createTable(sequelize, Sequelize);
        return acc;
      },
      {}
    );

    setupAssociations(sequelize);

    const syncPromise = sequelize.sync();

    pools[database] = sequelize;

    initializedDbHandles = Promise.resolve(syncPromise);
    return initializedDbHandles;
};

const getPool = dbName => {
  const sequelize = pools[dbName];

  if (!sequelize) {
    throw new Error(`DB has not been initialized: ${database}`);
  }

  return sequelize;
};

module.exports = {
  initialize,
  getPool,
};
