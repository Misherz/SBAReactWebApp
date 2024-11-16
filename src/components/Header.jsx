import NavBarMenu from "./navBarButton";
import React from "react";

export default function Header(){
    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth()
    const year= today.getFullYear();
  
    return (
      <div className="headerTab">
        <h2 className="textContent">{day}/{month + 1}/{year}</h2>
        <h1 className="header" >SCALES OF TRUTH🐉</h1>        
        <NavBarMenu /><br/>
      </div>
    )
}