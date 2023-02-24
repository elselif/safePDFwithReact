import React from "react";
import './header.css';

const Header = () => {

     return(
          <>
     <div className="bar" onContextMenu={(e)=>e.preventDefault()} >
     <div className="logo">
          <img width="150px" src="../img/logo.png"></img>

          </div>
          <div className="baslik">
          <h3>Psikanaliz</h3>
          </div>
          
     </div>
     </>
     )
     

}

export default Header;