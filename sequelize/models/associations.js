const setupAssociations = db => {
  const {
    models: {
      CalleeInfo,
      CallerInfo,
    },
  } = db;
  CallerInfo.hasMany(CalleeInfo, {
    foreignKey: 'caller_number'
  });
  
};

module.exports = {
  setupAssociations,
};
