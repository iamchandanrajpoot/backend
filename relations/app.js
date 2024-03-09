import express from 'express';
import connectDb from './config/dbConfig.js';


const app  = express();
const sequelize = connectDb("demodb", "root", "12345678");


app.listen(8000);