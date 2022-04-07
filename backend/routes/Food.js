const express = require('express');
const router = express.Router();

const foodCtrl = require('../controllers/Food');

const auth = require('../middleware/auth');

router.get('/', foodCtrl.getAllFoods);
router.get('/:foodId', foodCtrl.getOneFood);

module.exports = router;