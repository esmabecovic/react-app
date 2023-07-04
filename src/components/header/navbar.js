import React, { useState } from "react";
import "./header.css";
import DropdownMenu from "../dropdown/dropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [category, setCategory] = useState(false);

  const openCategory = () => {
    setCategory(true);
  };

  const closeCategory = () => {
    setCategory(false);
  };
  return (
    <div className="navbar">
      {/* <img src="" className="logo" /> */}
      <h1 className="logo">Logo</h1>
      <div className="list">
        <ul>
          <li>
            <Link
              to={"/products"}
              style={{ textDecoration: "none", color: "#703b59" }}
            >
              Products
            </Link>
          </li>
          <li>
            {category ? (
              <div className="dropdown">
                <button className="category" onClick={closeCategory}>
                  Categories
                </button>
                <DropdownMenu />
              </div>
            ) : (
              <button className="category" onClick={openCategory}>
                Categories
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
