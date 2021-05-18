const dbUtils = require('../sequelize');
const { CLOUDPHONY } = require('../constants');

const sequelizeWrapper = async request => {
  const { model, type, where, options, properties } = request;
  console.log(`Sequelize Request: ${JSON.stringify(request, null, 4)}`);
  let response;
  if (type === 'create') {
    response = await dbUtils.getPool(CLOUDPHONY).models[model][type](properties);
  } else {
    response = await dbUtils.getPool(CLOUDPHONY).models[model][type]({
      where,
      ...options,
    });
  }
  console.log(`Sequelize Response: ${JSON.stringify(response, null, 4)}`);
  return response;
};

module.exports = {
  sequelizeWrapper,
};
