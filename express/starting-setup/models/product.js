const db = require("../util/database");
const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const insertQuery =
      "INSERT INTO products (id, title, price, description, imageUrl) VALUES (?, ?, ?, ?, ?)";
    const values = [
      this.id,
      this.title,
      this.price,
      this.description,
      this.imageUrl,
    ];
    db.execute(insertQuery, values)
      .then(([rows, fields]) => {
        console.log("Data inserted successfully:", rows);
      })
      .catch((err) => {
        console.error("Error inserting data:", err);
      })
      .finally(() => {
        db.end();
      });
  }

  static deleteById() {
   
  }

  static fetchAll() {
    return db.execute("SELECT * FROM eshop.products;");
  }

  static findById(id) {
    return db.execute(`SELECT * FROM eshop.products where id = ${id};`);
  }
};