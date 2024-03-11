const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Cart = sequelize.define("Cart", {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  status:{
    type: DataTypes.STRING
  }

}, {timestamps: false});

 module.exports = Cart;