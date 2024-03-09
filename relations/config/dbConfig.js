import { Sequelize } from "sequelize";

async function connectDb(dbName, user, psw){
    const sequelize =  new Sequelize(dbName, user, psw, {
        host: "localhost",
        dialect: "mysql"
    })

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      return sequelize;
}


export default connectDb;