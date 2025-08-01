import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// React.createElement is used to create a React element. It is an object that describes a DOM node.
// const heading = React.createElement("h1", { id: "heading" }, "Hello India!");

// JSX is a syntax extension that allows us to write HTML-like code in JavaScript.
// It is transformed into React.createElement calls by the build tools.
// The following line is equivalent to the above React.createElement call.
// JSX is not valid JavaScript, so it needs to be transpiled to JavaScript using Babel or a similar tool.
// The JSX code is transformed into a React element object that can be rendered to the DOM.

// componet in react is a function that returns a React element.
// Here, we define a functional component that returns a React element.
// Components can be reused and can accept props to customize their output.
// The component can be used like a regular HTML tag in JSX.
// The component can also be used to encapsulate logic and state management.
// The component can be used to create a reusable UI element.

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
