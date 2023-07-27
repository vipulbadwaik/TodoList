import Card from "./Card";
import { useState } from 'react';


const Body = () =>{
    

  const [add, setAdd] = useState(0);
    



      return(
         <div className="Body">
          <div className="text-box">
              <input className="inpt"/>
              
              <button className="add-btn">Add</button>

              
          </div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
         </div>
      )
};

export default Body;