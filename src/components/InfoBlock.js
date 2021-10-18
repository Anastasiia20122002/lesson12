import React from "react";
import "./Modal1.css";
function InfoBlock(props) {
  return (
    <div>
      <div id="block_name">
        <h1 id="name_info">{props.name}</h1>
        <h1 id="data_info">{props.data}</h1>
      </div>
      <div id="line_block">
        <hr id="line_modal_1" align="left"></hr>
      </div>
    </div>
  );
}

export default InfoBlock;
