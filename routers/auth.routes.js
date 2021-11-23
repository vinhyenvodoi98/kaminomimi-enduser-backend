const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth.controller');
const router = require('express').Router();

router.post('/signup', verifySignUp.checkDuplicateEmail, controller.signup);

router.post('/signin', controller.signin);

module.exports = router;
