module.exports = {
  mysqlConfig: {
    database: 'cloudphony',
    user:  'root',
    password: 'Mysql@123',
    host: 'localhost',
    port: 3306,
    ssl: false,
    max: 50,
    min: 10,
    evictionRunIntervalMillis: 0,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 10000,
    databaseName: 'cloudphony',
  },
  port: 8080,
};
