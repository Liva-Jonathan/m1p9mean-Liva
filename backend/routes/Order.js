const express = require('express');
const router = express.Router();

const orderCtrl = require('../controllers/Order');

const auth = require('../middleware/auth');

router.post('/', auth.authentified, auth.allowClient, auth.checkAuthorisation, orderCtrl.createOrder);

module.exports = router;