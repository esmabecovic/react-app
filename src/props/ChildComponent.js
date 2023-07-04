import React, { useState } from "react";
import "./ChildComponent.css";

const ChildComponent = ({ onData }) => {
  const [data, setData] = useState("");

  const changeText = (e) => {
    setData(e.target.value);
  };
  const updateUsername = () => {
    onData(data);
  };
  return (
    <div className="child">
      <input onChange={changeText} />
      <button onClick={updateUsername}>Update username</button>
    </div>
  );
};

export default ChildComponent;
