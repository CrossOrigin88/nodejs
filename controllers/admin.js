const Product = require('../models/products');

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path:'/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    console.log(product);
    product.save();
    res.redirect('/');
};

exports.getEditProductPage = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Edit Product', 
        path:'/admin/edit-product',
    });
};

exports.getProductPage = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products, 
            pageTitle: 'Admin Product', 
            path: '/admin/products', 
        });
    });
};