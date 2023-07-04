import React from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
import GetJewelry from "../categories/jewelry";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <ul className="categories">
        <li>
          <Link
            to={"/jewelry"}
            style={{ textDecoration: "none", color: "#703b59" }}
          >
            Jewelry
          </Link>
        </li>
        <li>
          <Link
            to={"/electronics"}
            style={{ textDecoration: "none", color: "#703b59" }}
          >
            Electronics
          </Link>
        </li>
        <li>
          <Link
            to={"/men"}
            style={{ textDecoration: "none", color: "#703b59" }}
          >
            Men's clothing
          </Link>
        </li>
        <li>
          <Link
            to={"/women"}
            style={{ textDecoration: "none", color: "#703b59" }}
          >
            Women's clothing
          </Link>
        </li>
      </ul>
    </div>
    // <div>
    //   <select style={{ border: "none" }}>
    //     <option disabled selected value>
    //       All categories
    //     </option>
    //     <option value={<GetJewelry />} onClick={<GetJewelry />}>
    //       <Link to={"/jewelry"}>Jewelry</Link>
    //     </option>
    //     <option>Option 2</option>
    //     <option>Option 3</option>
    //   </select>
    // </div>
  );
};
export default DropdownMenu;
