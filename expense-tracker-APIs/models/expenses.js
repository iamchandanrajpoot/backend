import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const Expense = sequelize.define("Expense", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description :{
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false})


export default Expense;