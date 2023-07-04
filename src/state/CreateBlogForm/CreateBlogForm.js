import React from "react";
import './CreateBlogForm.css'

const CardForm = () =>{
    return(
        <div className="cardDiv">
            <input type="text" placeholder="Title"></input>
            <textarea className="area" placeholder="Text"></textarea>
            <button className="cardButton">Create blog</button>
        </div>
    )
}

export default CardForm