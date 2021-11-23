const router = require('express').Router();

// const { getAllMentionInDay } = require('../knex/query');

router.get('/', async (req, res) => {
  res.json('ok');
});

module.exports = router;
