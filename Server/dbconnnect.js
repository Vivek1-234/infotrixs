/** @format */

const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");


module.exports =async()=>{
  const uri =
  "mongodb+srv://vivek:aLxB2MqQQrn1pEH7@cluster0.juh5t2y.mongodb.net/?retryWrites=true&w=majority"
  
  try { 
    
  const connect = await  mongoose.connect(uri , {
    useUnifiedTopology:true, 
    useNewUrlParser:true, 

}); 

console.log(`MongoDB Connnected: ${connect.connection.host}`);

  } catch (error) {
    console.log(error);
    process.exit(1);  
  }


}



