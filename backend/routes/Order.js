const express = require('express');
const router = express.Router();

const orderCtrl = require('../controllers/Order');
const orderDetailsCtrl = require('../controllers/OrderDetails');

const auth = require('../middleware/auth');

router.post('/', auth.authentified, auth.allowClient, auth.checkAuthorisation, orderCtrl.createOrder);

router.get('/Restaurant/:userId', auth.authentified, auth.allowRestaurant, auth.checkAuthorisation, orderDetailsCtrl.getOrderDetailsRestaurant);
router.get('/ready/Restaurant/:userId', auth.authentified, auth.allowRestaurant, auth.checkAuthorisation, orderDetailsCtrl.getOrderDetailsReadyRestaurant);
router.put('/OrderDetails/:id', auth.authentified, auth.allowRestaurant, auth.allowDeliveryMan, auth.checkAuthorisation, orderDetailsCtrl.updateOrderDetailsStatus);

router.get('/ready', auth.authentified, auth.allowDeliveryMan, auth.checkAuthorisation, orderDetailsCtrl.getOrderDetailsReady);
router.get('/delivered/DeliveryMan/:userId', auth.authentified, auth.allowDeliveryMan, auth.checkAuthorisation, orderDetailsCtrl.getOrderDetailsDeliveredDeliveryMan);


module.exports = router;