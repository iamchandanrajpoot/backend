const db = require("../util/database");
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   
  }

  static deleteById() {
  }

  static fetchAll() {
    return db.execute("SELECT * FROM eshop.products;")
  }

  static findById(id) {
    return db.execute(`SELECT * FROM eshop.products where id = ${id};`);
  }
  
}
