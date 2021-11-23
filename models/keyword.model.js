module.exports = (sequelize, Sequelize) => {
  const Keyword = sequelize.define('keyword', {
    keyword: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  return Keyword;
};
