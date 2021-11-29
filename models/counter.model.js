module.exports = (sequelize, Sequelize) => {
  const Counter = sequelize.define(
    'counter',
    {
      keyword: {
        type: Sequelize.STRING,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['keyword', 'date'],
        },
      ],
    }
  );
  return Counter;
};
