import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./components/Card";
const logo = new URL("./applogo.png", import.meta.url);

// React.createElement is used to create a React element. It is an object that describes a DOM node.
// const heading = React.createElement("h1", { id: "heading" }, "Hello India!");

// JSX is a syntax extension that allows us to write HTML-like code in JavaScript.
// It is transformed into React.createElement calls by the build tools.
// The following line is equivalent to the above React.createElement call.
// JSX is not valid JavaScript, so it needs to be transpiled to JavaScript using Babel or a similar tool.
// The JSX code is transformed into a React element object that can be rendered to the DOM.

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
  );
};

// componet in react is a function that returns a React element.
// Here, we define a functional component that returns a React element.
// Components can be reused and can accept props to customize their output.
// The component can be used like a regular HTML tag in JSX.
// The component can also be used to encapsulate logic and state management.
// The component can be used to create a reusable UI element.

const Body = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <h1 className="text-2xl font-bold">Food Delivery App</h1>
        <input type="text" placeholder="Search" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <p>All rights reserved</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
