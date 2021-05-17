module.exports = {
  pgConfig: [
    {
      pgconfig: {
        database: 'tracking',
        user:  'narvar',
        password: 'narvar',
        host: 'localhost',
        port: 5432,
        ssl: false,
        max: 50,
        min: 10,
        evictionRunIntervalMillis: 0,
        connectionTimeoutMillis: 5000,
        idleTimeoutMillis: 10000,
        databaseName: 'tracking',
      },
    },
  ],
  port: 8080,
};
