const Product = require("../models/product");
const Cart = require("../models/cart");
const User = require("../models/user");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findOne({ where: { id: prodId } }).then((product) => {
    // console.log(row);
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = async (req, res) => {
  try {
    const userInstance = await User.findByPk(req.user.id);
    const cartInstance = await userInstance.getCart();
    const cartProducts = await cartInstance.getProducts();

    // const result =[];
    // cartProducts.forEach(product => {
    //   result.push([cartProducts.title, product.CartItem.quantity]);
    // });

    console.log("tfy ouy uupiip");
    console.log(cartProducts);
    res.render("shop/cart", {
      path: "/cart",
      pageTitle: "Your Cart",
      products: cartProducts,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.postCart = async (req, res) => {
  try {
    const product = await Product.findByPk(req.body.productId);
    const userInstance = await User.findByPk(req.user.id);
    let cartInstance = await userInstance.getCart();
    if (!cartInstance) {
      cartInstance = await userInstance.createCart();
    }
    const products = await cartInstance.getProducts({
      where: { id: product.id },
    });
    let quantity = 0;
    if (products.length > 0) {
      quantity = products[0].CartItem.quantity + 1;
      // Update the existing cart item with the new quantity
      await cartInstance.addProduct(product, {
        through: { quantity },
      });
    } else {
      quantity = 1;
      // Add the product to the cart with the initial quantity
      await cartInstance.addProduct(product, {
        through: { quantity },
      });
    }

    res.redirect("/cart");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.postCartDeleteProduct = async (req, res) => {
  try {
    const userInstance = await User.findByPk(req.user.id);
    const cartInstance = await userInstance.getCart();

    const productsToRemoved = await cartInstance.getProducts({
      where: { id: req.body.productId },
    });
    await cartInstance.removeProducts(productsToRemoved);
    res.redirect("/cart");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
