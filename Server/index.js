const express = require('express');
const app = express(); 
const dbconnnect = require('./dbconnnect'); 
const historyrouter = require('./routers/historyRouter'); 
const  cors = require('cors'); 
const dotenv = require('dotenv'); 
dotenv.config('./.env '); 
const morgan = require('morgan'); 



// middlewares 

app. use(express.json()); 
app.use(morgan('common')); 
app.use(cors({
credentials:true, 
origin:'http://localhost:3000'

})); 




app.use('/history' , historyrouter ); 
app.get('/' , (req , res) =>{
     res.status(200).send('Ok From Server'); 
}); 

 

     
const PORT = process.env.PORT || 4001; 
dbconnnect();    
  
 
  
app.listen(PORT , ()=>{
    console.log('Listening on port :' , `${PORT}`); 

}); 


