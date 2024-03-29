const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');


const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
// /admin/eddit-product => get
router.get('/edit-product/:productId', adminController.editProduct);


// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);


// /admin/delete-product => get
router.post('/delete-product', adminController.deleteProduct);

module.exports = router;
