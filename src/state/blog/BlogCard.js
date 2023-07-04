import React from "react";
import './BlogCard.css'


const BlogCard = ({blogs}) =>{
    return(
        <>
        {blogs.map((b, i) => {
            return(
                <div className="blogCardContainer" key={i}>
                    <h3>{b.title}</h3>
                    <span>{b.text}</span>
                </div>
            )
        })}
        </>
    )
}

export default BlogCard