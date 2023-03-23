const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path:'/admin/add-product',
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    console.log(products);
    res.redirect('/');
});

exports.router = router;
exports.products = products