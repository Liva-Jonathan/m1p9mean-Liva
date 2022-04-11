const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/Auth');
const clientCtrl = require('../controllers/Client');

const auth = require('../middleware/auth');

router.post('/signup', clientCtrl.signup);
router.post('/login', authCtrl.findClient, authCtrl.findRestaurant, authCtrl.findDeliveryMan, authCtrl.findManager, authCtrl.checkUser);
router.get('/User/:userId', auth.authentified, authCtrl.getUser);

module.exports = router;