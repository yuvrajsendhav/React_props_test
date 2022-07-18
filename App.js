//import logo from './logo.svg';
import './App.css';
import PropsExample from './PropsExample';
import React, { useRef, useState } from "react";
function App ()
{
    const color1 = useRef(null);
    const color2 = useRef(null);
    const color3 = useRef(null);
    const[si, setSi] = useState("");
    function fun1()
    {
        setSi(color1.current.value);
    }
    let fun2 = () =>
    {
        setSi(color2.current.value);
    }
    let fun3 = () =>
    {
        setSi(color3.current.value);
    }
    
    return(
    
         <div className="App">
         <h1>Colors</h1>
         <PropsExample scs={si}/>
         <input type="button" value="RED" ref={color1} onClick={fun1}/>
         <input type="button" value="BLUE" ref={color2} onClick={fun2}/>
         <input type="button" value="ORANGE" ref={color3} onClick={fun3}/>
         
        </div> 
          
    );
}
//export default PropsExample;

export default App;
