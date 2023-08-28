import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <div>
        <h1>404 - Page not found</h1>
        <Link to="/dashboard">Back home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <Link to="/">Back home</Link>
    </div>
  );
}

export default ErrorPage;
