module.exports = (db, Sequelize) =>
  db.define(
    'callee_info',
    {
      callee_number: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      caller_number: {
        type: Sequelize.STRING(15),
        allowNull: false,
        references: {
          model: 'caller_info',
          key: 'caller_number',
       },
      },
      callee_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      created_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      modified_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      tableName: 'callee_info',
      timestamps: true,
      createdAt: 'created_date',
      updatedAt: 'modified_date',
    }
  );
