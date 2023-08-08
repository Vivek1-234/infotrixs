const mongoose = require("mongoose"); 

const userHistory = new mongoose.Schema ({ 
input:{
    type:String,
   
},
result:{
    type:String,    
},   
});


module.exports = mongoose.model('history', userHistory);     








    