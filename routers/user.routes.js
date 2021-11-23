const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/all', controller.allAccess);

router.get('/verify', [authJwt.verifyToken], controller.userBoard);

module.exports = router;
