const {Sequelize}= require("sequelize")

const sequelize = new Sequelize("demodb", "root", "12345678",{
    dialect : "mysql",
    host: "localhost"
})


module.exports =  sequelize;