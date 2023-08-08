const History = require('../models/history'); 
 
const history =  async (req , res )=>{  
     

try {
        
           let take  = req.body.input;
            let ans = eval(take).toString(); 
          

         let his =  await new History({
            input:  req.body.input,              
            result: ans, 
             
         }); 

       his.save(); 
           
     res.status(200).json({
          his 
       }); 

  
  
} catch (error) {
     res.status(500).json(error); 
}

}

const gethistory =  async (req , res )=>{  
     

    try {
       
              
      const   his =  await History.find();
          
    
          
         res.status(200).json({
               his
           }); 
    
      
      
    } catch (error) {
         res.status(500).json(error); 
    }
    
    }
    


module.exports ={
    history, 
    gethistory
}