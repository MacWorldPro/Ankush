


const mongoose=require('mongoose');
require('dotenv').config();
const url=process.env.MONGO_URI;
const connectDB=async()=>{
  try {
    const conn=await mongoose.connect(url);
    console.log('connected');
    console.log(`${conn.connection.host}`)
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Fuck off');
  }
};

module.exports=connectDB;
