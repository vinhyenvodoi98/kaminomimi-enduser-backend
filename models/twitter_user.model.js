module.exports = (sequelize, Sequelize) => {
  const TwitterUser = sequelize.define('twitterUser', {
    twitter_account_id: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return TwitterUser;
};
