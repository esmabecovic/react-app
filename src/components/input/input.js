import React from "react";
import './input.css'
// import Button from "../button";

const Input = ({text, border, color}) =>{
    return(
        // <div className="Login">
        //     <input className="plch" placeholder="Username"></input>
        //     <input className="plch" placeholder="Password"></input>
        //     <div className="btns">
        //     <Button text={'Login'} color={'#85FF9E'}/>
        //     <Button text={'Cancel'} color={'#FF3A20'}/>
        //     </div>
        // </div>
        <input style={{borderTop: border, borderLeft: border, borderRight: border, backgroundColor: color}} placeholder={text}/>
    )
}

export default Input