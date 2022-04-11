const express = require('express');
const router = express.Router();

const foodCtrl = require('../controllers/Food');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', foodCtrl.getAllFoods);
router.get('/:foodId', foodCtrl.getOneFood);
router.post('/evaluateOrder', foodCtrl.evaluateOrder);

router.post('/', auth.authentified, auth.allowRestaurant, auth.checkAuthorisation, multer, foodCtrl.create);
router.put('/:id', auth.authentified, auth.allowRestaurant, auth.checkAuthorisation, multer, foodCtrl.modify);
router.delete('/:id', auth.authentified, auth.allowRestaurant, auth.checkAuthorisation, foodCtrl.delete);

module.exports = router;

// (req, res, next) => { setTimeout(()=>{ next() }, 3000) }, 