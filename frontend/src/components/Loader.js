import React from "react";
import ReactDOM from "react-dom";

function Loader() {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <h3>LOADING...</h3>
      </div>
    </div>,
    document.getElementById("loader")
  );
}

export const Spinner = () => {
  return (
    <div>
      <div className="loader">
        <h3>LOADING...</h3>
      </div>
    </div>
  );
};

export default Loader;
