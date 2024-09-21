const mongoose = require('mongoose')
const ServerConfig = require('./ServerConfig')


async function connectDB() {
/**
 * the below function us to connecte a mongo db server
 */
  try{
        await mongoose.connect(ServerConfig.DB_URL)
        console.log('sucessfully connected to the mongodb server....')

    }catch (error){
        console.log('not able to connect to the mongodb server')
        console.log(error)

    }

}
module.exports = connectDB