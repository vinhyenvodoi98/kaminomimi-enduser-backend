module.exports = (sequelize, Sequelize) => {
  const TweetAlert = sequelize.define('tweetAlert', {
    tweet_id: {
      type: Sequelize.STRING,
    },
  });
  return TweetAlert;
};
