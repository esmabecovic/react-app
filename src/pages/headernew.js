import React from "react";
import { NavLink } from "react-router-dom";
import './headernew.css'

const HeaderNew = () =>{
    return(
        <div className="navbar">
        <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} to={'/'} style={{textDecoration: 'none', color: 'white'}}>Home</NavLink></li>
        <li><NavLink to={'/about'} style={{textDecoration: 'none', color: 'white'}}>About</NavLink></li>
        <li><NavLink to={'/products'} style={{textDecoration: 'none', color: 'white'}}>Products</NavLink></li>
        <li><NavLink to={'/contact'} style={{textDecoration: 'none', color: 'white'}}>Contact</NavLink></li>
        </div>
    )
}

export default HeaderNew