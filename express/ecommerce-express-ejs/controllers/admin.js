const Product = require("../models/product");
const User = require("../models/user");

exports.getLoginPage = (req, res) => {
  res.render("admin/login", {
    pageTitle: "login user",
    path: "/admin/login",
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const userId = req.user.id;
  User.findByPk(userId)
    .then((userInstance) => {
      // Use createUserProduct on the user instance
      return userInstance.createUserProduct({
        title,
        imageUrl,
        price,
        description,
      });
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  User.findByPk(req.user.id)
    .then((userInstance) => {
      const prodId = req.params.productId;
      return userInstance.getUserProducts({ where: { id: prodId } });
    })
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product[0],
      });
    })
    .then((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedProduct = {
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice,
  };

  Product.destroy({ where: { id: prodId } })
    .then(() => {
      return updatedProduct;
    })
    .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res) => {
  Product.findAll().then((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy({ where: { id: prodId } })
    .then(() => {
      console.log("product deleted successfully!");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
