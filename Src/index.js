const express = require('express');
const ServerConfig = require('./Config/ServerConfig');
//const bodyParser = require('body-parser');
const connectDB = require('./Config/dbConfig');


const app = express();

// Middleware for parsing JSON and text
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));


// Define the correct route for ping
app.post('/ping',(res,req)=>{
  console.log(req.body)
  return res.json({message:"pong"})
})


// Start the server and connect to the database
app.listen(ServerConfig.PORT, async () => {
  try {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}!!`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
});
