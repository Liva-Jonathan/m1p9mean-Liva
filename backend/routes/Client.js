const express = require('express');
const router = express.Router();

const clientCtrl = require('../controllers/client');

router.post('/signup', clientCtrl.signup);
router.post('/login', clientCtrl.login);

module.exports = router;