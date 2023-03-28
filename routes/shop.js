const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.get('/orders', shopController.getOrder);
router.get('/checkout', shopController.getCheckOut);
router.get('/', shopController.getIndex);

module.exports = router;