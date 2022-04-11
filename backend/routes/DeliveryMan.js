const express = require('express');
const router = express.Router();

const deliveryManCtrl = require('../controllers/DeliveryMan');

const auth = require('../middleware/auth');

router.get('/', auth.authentified, auth.allowManager, auth.checkAuthorisation, deliveryManCtrl.getAll);
router.get('/:id', auth.authentified, auth.allowManager, auth.checkAuthorisation, deliveryManCtrl.getOne);
router.post('/', auth.authentified, auth.allowManager, auth.checkAuthorisation, deliveryManCtrl.create);
router.put('/:id', auth.authentified, auth.allowManager, auth.checkAuthorisation, deliveryManCtrl.modify);
router.delete('/:id', auth.authentified, auth.allowManager, auth.checkAuthorisation, deliveryManCtrl.delete);

module.exports = router;