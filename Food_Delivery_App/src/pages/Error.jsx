import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-page">
      <h1>Error</h1>
      <p>{error.message || error.statusText || "Unknown error"}</p>
    </div>
  );
};

export default Error;
