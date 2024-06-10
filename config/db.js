const mongoose = require('mongoose');
require("dotenv").config();
const DatURl=process.env.MONGO_URI;

const connectDB = async () => {
    
    try{
        mongoose.set('strictQuery' , false);
        const conn = await mongoose.connect(DatURl);
        console.log(`Databse connected : ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;