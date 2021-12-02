const router = require('express').Router();
const controller = require('../controllers/mentions.controller');
// const { getAllMentionInDay } = require('../knex/query');

router.get('/', controller.getAllInday);

module.exports = router;
