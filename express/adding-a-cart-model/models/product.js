const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    Product.fetchAll(products => {
      const product = products.find(product => product.id == id);
      cb(product);
    });
  }

  // edit product functionality
  // static updateProductByID(id, cb){
  //   Product.fetchAll(products=>{
  //     const editProduct = products.find(product=> product.id = id);

  //   })
  // }

  // edit prodcut functionality
  static editproductbyID(id, cb){
    Product.fetchAll((products)=>{
      const remaingProducts =  products.filter(product => product.id !== id);
      fs.writeFile(p, JSON.stringify(remaingProducts), err=>{
        if(!err){
         cb();
        }
      })
    })
  }
  // delete prodcut functionality
  static deleteproductbyID(id, cb){
    Product.fetchAll((products)=>{
      const remaingProducts =  products.filter(product => product.id !== id);
      fs.writeFile(p, JSON.stringify(remaingProducts), err=>{
        if(!err){
          Product.fetchAll((products)=>{
            cb(products);
          })
        }
      })
    })
  }
};
