module.exports = (db, Sequelize) =>
  db.define(
    'caller_info',
    {
      caller_number: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      caller_name: {
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
      tableName: 'caller_info',
      timestamps: true,
      createdAt: 'created_date',
      updatedAt: 'modified_date',
    }
  );
