const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/products', shopController.getProductPage);
router.get('/product-detail', shopController.getProductDetailPage);
router.get('/cart', shopController.getCartPage);
router.get('/orders', shopController.getOrderPage);
router.get('/checkout', shopController.getCheckOutPage);
router.get('/', shopController.getIndexPage);

module.exports = router;