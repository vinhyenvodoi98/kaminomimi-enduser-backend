const config = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user.model')(sequelize, Sequelize);
db.keywords = require('../models/keyword.model')(sequelize, Sequelize);
db.counter = require('../models/counter.model')(sequelize, Sequelize);
db.twitter_user = require('../models/twitter_user.model')(sequelize, Sequelize);
db.tweet = require('../models/tweet.model')(sequelize, Sequelize);
db.tweet_alert = require('../models/tweet_alert.model')(sequelize, Sequelize);

db.keywords.hasMany(db.counter, { as: 'counter' });
db.counter.belongsTo(db.keywords, {
  foreignKey: 'keywordId',
  as: 'keyword',
});

db.keywords.hasMany(db.tweet_alert, { as: 'tweet_alert' });
db.tweet_alert.belongsTo(db.keywords, {
  foreignKey: 'keywordId',
  as: 'keyword',
});

db.user.belongsToMany(db.twitter_user, {
  through: 'subcrise_twitter_account',
  as: 'twitter_users',
  foreignKey: 'twitterUserId',
});

db.twitter_user.belongsToMany(db.user, {
  through: 'subcrise_twitter_account',
  as: 'users',
  foreignKey: 'userId',
});

db.user.belongsToMany(db.keywords, {
  through: 'subcrise_keywords',
  as: 'keyword',
  foreignKey: 'keywordId',
});

db.keywords.belongsToMany(db.user, {
  through: 'subcrise_keywords',
  as: 'users',
  foreignKey: 'userId',
});

db.twitter_user.hasMany(db.tweet, { as: 'tweet' });
db.tweet.belongsTo(db.twitter_user, {
  foreignKey: 'twitterUserId',
  as: 'twitter_user',
});

module.exports = db;
