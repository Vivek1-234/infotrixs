import React from 'react'
import { axiosClient } from '../../utils/axiosclient'
import { useState , useEffect } from "react";
import "./History.css";
 


const History = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {

       
const da =  async () => {
    try { 
       
const response = await axiosClient.get("/history/get");
           
      
        setData(response.data.his); 

    } catch (error) {
            console.log(error); 
    }  
}  
      da();

    }, []);
  
    
    return (
       <div className='total_output'>

    {

     data !== []?data.map((d)=>{
      
        return (
            <div>
            
            <p className='single_output'># {d.input} = {d.result}</p>  
            
            </div>
        )
       
        
     }):""

    }
      </div>
    );
  };


     

export default History


