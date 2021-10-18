import React from "react";
import "./styles.css";
import Picture from "./Picture";
import Buy from "./Buy";

function Leftside() {
  return (
    <div>
      <header>
        <Picture />
        <h3 id="top">Omg...</h3>
        <h3 id="bottom">Pizza</h3>
      </header>
    </div>
  );
}

export default Leftside;
