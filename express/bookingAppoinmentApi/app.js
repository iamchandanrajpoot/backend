const express = require("express");
const cors = require("cors")

const sequelize = require("./config/dbConfig");
const bookingRouter = require("./routes/bookingRoutes")

const app = express();

//handle cors 
app.use(cors())
// parse json data 
app.use(express.json())
// parse form data
app.use(express.urlencoded({extended: true}));


// use booking router
app.use("/",bookingRouter);

sequelize.sync().then(()=>{
    console.log("synced to database");
    app.listen(8000);
}).catch(err=>{
    console.log(err);
})

// sequelize.authenticate().then(()=>{
//     console.log("dlsglg")
//     app.listen(8000)
// }).catch(err=>{
//     console.log(err)
// })