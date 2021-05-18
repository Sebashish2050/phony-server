const sequelize = require('./sequelize');
const server = require('./server');

sequelize
  .initialize()
  .then(() => {
    server();
  })
  .catch(err => console.log('server setup', err));