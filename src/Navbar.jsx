import React from "react";
import logo from "/globe.png"
import './components.css'

export default function Navbar(){
    return (
        <nav className="nav">
            <img src={logo} className="nav--logo"/>
            <p className="nav--text">my travel journal</p>
        </nav>
    )
}