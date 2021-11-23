module.exports = (sequelize, Sequelize) => {
  const Counter = sequelize.define('counter', {
    count: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
  });
  return Counter;
};
