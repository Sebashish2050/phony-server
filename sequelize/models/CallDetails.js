module.exports = (db, Sequelize) =>
  db.define(
    'call_details',
    {
      caller_number: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      callee_number: {
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      answer_time: Sequelize.STRING(50),
      end_time: Sequelize.STRING(50),
      duration: Sequelize.STRING(10),
      bill_rate: Sequelize.STRING(10),
      call_status: Sequelize.STRING(20),
      hangup_source: Sequelize.STRING(50),
      hangup_cause: Sequelize.STRING(50),
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
      tableName: 'call_details',
      timestamps: true,
      createdAt: 'created_date',
      updatedAt: 'modified_date',
    }
  );
