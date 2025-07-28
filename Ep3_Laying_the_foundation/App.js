import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement is used to create a React element. It is an object that describes a DOM node.
// const heading = React.createElement("h1", { id: "heading" }, "Hello India!");

// JSX is a syntax extension that allows us to write HTML-like code in JavaScript.
// It is transformed into React.createElement calls by the build tools.
// The following line is equivalent to the above React.createElement call.
// JSX is not valid JavaScript, so it needs to be transpiled to JavaScript using Babel or a similar tool.
// The JSX code is transformed into a React element object that can be rendered to the DOM.
const heading = <h1 id="heading">Hello India!</h1>;
console.log("heading", heading); // This will log the React element object to the console

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
