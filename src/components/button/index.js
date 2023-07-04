import React from "react";
import './button.css'

const Button = ({text, color, colorText}) =>{
    return(
        <div className="btnDiv">
        <button className="btn" style={{backgroundColor : color, color: colorText} }>{text}</button>
        </div>
    )
}

export default Button