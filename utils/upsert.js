const dbUtils = require('../sequelize');
const { sequelizeWrapper } = require('../sequelize/wrapper');
const { CLOUDPHONY } = require('../constants');

const upsertCallerInfo = async ({ callerNumber, callerName }) => {
  const callerInfo = await dbUtils
    .getPool(CLOUDPHONY)
    .models.CallerInfo.findOne({
      where: {
        caller_number: callerNumber,
      },
    });

  if(!callerInfo) {
    await sequelizeWrapper({
      model: 'CallerInfo',
      type: 'create',
      properties: {
        caller_number: callerNumber,
        caller_name: callerName,
        created_date: Date.now(),
        modified_date: Date.now(),
      },
    });
  }
  return {callerNumber, callerName};
};

const upsertCalleeInfo = async ({ calleeNumber, callerNumber, calleeName }) => {
  const calleeInfo = await dbUtils
    .getPool(CLOUDPHONY)
    .models.CalleeInfo.findOne({
      where: {
        caller_number: callerNumber,
        callee_number: calleeNumber,
      },
    });

    if(!calleeInfo) {
      await sequelizeWrapper({
        model: 'CalleeInfo',
        type: 'create',
        properties: {
          callee_number: calleeNumber,
          caller_number: callerNumber,
          callee_name: calleeName,
          created_date: Date.now(),
          modified_date: Date.now(),
        },
      });
    }

    return {calleeNumber, callerNumber, calleeName};
};

const upsertCallDetails = async (callerNumber, calleeNumber, payload) => {
  const callDetails = await dbUtils
    .getPool(CLOUDPHONY)
    .models.CallDetails.findOne({
      where: {
        caller_number: callerNumber,
        callee_number: calleeNumber,
      },
    });

    if(!callDetails) {
      await sequelizeWrapper({
        model: 'CallDetails',
        type: 'create',
        properties: {
          caller_number: callerNumber,
          callee_number: calleeNumber,
          ...payload,
          created_date: Date.now(),
          modified_date: Date.now(),
        },
      });
      return payload;
    }

  callDetails.set({ ...payload, modified_date: Date.now() });
  await callDetails.save();

  return payload;
};

module.exports = {
  upsertCallerInfo,
  upsertCalleeInfo,
  upsertCallDetails,
};
