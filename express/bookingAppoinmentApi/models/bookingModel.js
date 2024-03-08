const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: null,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Booking;
