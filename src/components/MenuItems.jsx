import React from "react";
import { Link } from "react-router-dom";

export default function MenuItems(){
    return (
    <div className="menuTab"> 
        <Link to={'/About'}>
            <h3>About</h3>
        </Link><br />
        <Link to={'/Contact'}>
            <h3>Contact</h3>
        </Link><br />
        <Link to={'/Help'}>
            <h3>Help</h3>
        </Link>
    </div>
    )
}