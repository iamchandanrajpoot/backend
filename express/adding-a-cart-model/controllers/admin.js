const Product = require("../models/product");
const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "prodcuts.json"
);

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  if (req.body.id) {
    let editedProdcutId = req.body.id;
    Product.editproductbyID(editedProdcutId, () => {
      const title = req.body.title;
      const imageUrl = req.body.imageUrl;
      const price = req.body.price;
      const description = req.body.description;
      const product = new Product(title, imageUrl, description, price);
      product.save();
      res.redirect("/admin/products");
    });
  } else {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect("/");
  }
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.editProduct = (req, res) => {
  const id = req.params.productId;
  // console.log("product id", productId);
  Product.findById(id, (product) => {
    console.log(product);

    res.render("admin/edit-product", {
      id: id,
      product: product,
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      editing: true,
    });
  });
};

exports.deleteProduct = (req, res) => {
  const productId = req.body.id;
  console.log(productId);

  Product.deleteproductbyID(productId, (remaingProducts) => {
    res.render("admin/products", {
      prods: remaingProducts,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
