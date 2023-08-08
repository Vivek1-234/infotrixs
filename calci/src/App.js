/** @format */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import History from "./components/History/History";
import  {axiosClient} from './utils/axiosclient';
import { useNavigate} from 'react-router-dom' ; 

function App() {
  const [result, setresult] = useState("");
  const navigate= useNavigate(); 
  const[history_toggle , sethistory_toggle] = useState(0);
  const handleclick = (e) => {
    setresult(result.concat(e.target.name));
  };

  const clear = () => {
    setresult("");
  };

  const backspace = () => {
    setresult(result.slice(0, result.length - 1));
  };

   const calculate = () => {
    try {
      let input = result; 
      setresult(eval(result).toString());
      let res = result; 
       
         send(input ,res); 
     
    } catch (error) {
      setresult("Error");    
    }  

  }; 
  
 
  const send = async  (input  , res)=>{
   
     await axiosClient.post('/history/', {
      input,
      res 
    });

  
    
  }


  const handlehistory = ()=>{
        
    if(history_toggle === 0 ){
        
      sethistory_toggle(1);
      navigate('/history'); 

    }
    else {

      sethistory_toggle(0); 
      navigate(''); 
    }
  }


  return (
    <div className="App">
     

      <div className="Calculator-app">
        <h1 className="calci-name">Calculator</h1>
                             
        <Routes> 
        <Route  path="/history/" element={<History />} />  
      </Routes>                   
      <p onClick={handlehistory} className="calci-history">History</p>  

        <div className="calci-input">
          <input
            value={result}
            className="cal-input"
            placeholder="0"
            type="text"
          />
        </div>
        <div className="cal-keys">
          <button id="clear" onClick={clear} className="box highlight">
            Clear
          </button>

          <button id="back" onClick={backspace} className="box highlight">
            C
          </button>
          <button name="%" onClick={handleclick} className="box highlight">
            %
          </button>

          <button name="+" onClick={handleclick} className="box highlight">
            +
          </button>

          <button name="7" onClick={handleclick} className="box">
            7
          </button>
          <button name="8" onClick={handleclick} className="box">
            8
          </button>

          <button name="9" onClick={handleclick} className="box">
            9
          </button>
          <button name="*" onClick={handleclick} className="box highlight">
            *
          </button>

          <button name="4" onClick={handleclick} className="box ">
            4
          </button>

          <button name="5" onClick={handleclick} className="box">
            5
          </button>

          <button name="6" onClick={handleclick} className="box">
            6
          </button>

          <button name="-" onClick={handleclick} className="box highlight">
            -
          </button>

          <button name="1" onClick={handleclick} className="box">
            1
          </button>

          <button name="2" onClick={handleclick} className="box">
            2
          </button>

          <button name="3" onClick={handleclick} className="box">
            3
          </button>

          <button name="/" onClick={handleclick} className="box highlight">
            /
          </button>
          <button name="." onClick={handleclick} className="box">
            .
          </button>
          <button name="0" onClick={handleclick} className="box">
            0
          </button>

          <button onClick={calculate} className="box highlight equal">
            =
          </button>
        </div>

        <div>
          <p className="copyright">© 2023 Calci. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
