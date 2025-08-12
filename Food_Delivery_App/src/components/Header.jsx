import React, { useState } from "react";
import { Link } from "react-router";
const logo = new URL("../../applogo.png", import.meta.url);

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <img src={logo} alt="mylogo" className=" w-20 h-20 bg-gray-800" />
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
