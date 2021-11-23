module.exports = (sequelize, Sequelize) => {
  const Tweet = sequelize.define('tweet', {
    tweet_id: {
      type: Sequelize.STRING,
    },
  });

  return Tweet;
};
