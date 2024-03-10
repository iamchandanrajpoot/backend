const Product = require("./product");
const User = require("./user");


User.hasMany(Product,{
    foreignKey: "userId",
    as: "userProducts",
    constraints: true,
    onDelete: "CASCADE"
})
Product.belongsTo(User, {
    foreignKey: "userId",
    as: "productOwner"
  })