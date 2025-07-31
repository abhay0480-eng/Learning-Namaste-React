import React from 'react'
const logo = new URL("../../applogo.png", import.meta.url);

const Header = () => {
  return (
     <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <img src={logo} alt="mylogo" className=" w-20 h-20 bg-gray-800" />
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header

