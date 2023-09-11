import React from "react"
import './Navbar.css'
import spotify from './ss/spotify.png'
export default function Navbar(){
    return(
        <nav>
        <img className='logo' src={spotify} alt="logo"/>
        <ul className="list">
        </ul>
        </nav>
    )
}