const Product = require('../models/products');

exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path:'/admin/add-product',
        activeAddProduct: true,
        formsCSS: true,
        productCSS: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    console.log(product);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
    
};