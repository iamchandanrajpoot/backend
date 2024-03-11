const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const authorizeUser = require('../middlewares/userAuthorization');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', authorizeUser,shopController.getCart);

router.post('/cart', authorizeUser,shopController.postCart);

router.post('/cart-delete-item', authorizeUser,shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
