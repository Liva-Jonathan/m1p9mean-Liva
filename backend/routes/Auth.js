const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/Auth');
const clientCtrl = require('../controllers/Client');

router.post('/signup', clientCtrl.signup);
router.post('/login', authCtrl.findClient, authCtrl.findRestaurant, authCtrl.findDeliveryMan, authCtrl.findManager, authCtrl.checkUser);

module.exports = router;