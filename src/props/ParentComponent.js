import React, { useState } from "react";
import ChildComponent from "./ChildComponent";


const ParentComponent = () =>{
    const [dataFromChild, setDataFromChild] = useState('')

    const handleData = (e) =>{
        setDataFromChild(e)
    }
    return(
        <div>
            <h1>Username: {dataFromChild}</h1>
            <ChildComponent onData={handleData}/>
        </div>
    )
}

export default ParentComponent