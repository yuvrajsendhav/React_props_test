import React, { useState } from "react";
let PropsExample = () =>
{
    var [a,setA] = useState("white");
    const bgcolor1 = () =>
    {
        setA("red")
    }
    const bgcolor2 = () =>
    {
        setA("blue")
    }
    const bgcolor3 = () =>
    {
        setA("green")
    }
    const bgcolor4 = () =>
    {
        setA("cyan")
    }
    return(
         <div style={{ backgroundColor: a,height: '400px',}}
        >
        <p>Color</p>
         <button className="btn" onClick={bgcolor1}>RED</button>
         <button className="btn" onClick={bgcolor2}>BLUE</button>
         <button  className="btn" onClick={bgcolor3}>GREEN</button>
         <button className="btn"  onClick={bgcolor4}>CYAN</button>
        </div>    
    )
}
export default PropsExample;