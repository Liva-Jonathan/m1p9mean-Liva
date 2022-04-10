const express = require('express');
const router = express.Router();

const restaurantCtrl = require('../controllers/Restaurant');

const auth = require('../middleware/auth');

router.get('/', auth.authentified, auth.allowManager, auth.checkAuthorisation, restaurantCtrl.getAll);
router.get('/:id', auth.authentified, auth.allowManager, auth.checkAuthorisation, restaurantCtrl.getOne);
router.post('/', auth.authentified, auth.allowManager, auth.checkAuthorisation, restaurantCtrl.create);
router.put('/:id', auth.authentified, auth.allowManager, auth.checkAuthorisation, restaurantCtrl.modify);
router.delete('/:id', auth.authentified, auth.allowManager, auth.checkAuthorisation, restaurantCtrl.delete);

module.exports = router;