import React from "react";
import "./Modal1.css";
import InfoBlock from "./InfoBlock";
function Modal1({ setOpenModal1 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div id="header_small">
            <h1 div className="title">
              Order
            </h1>
            <img
              id="cancel"
              src="images/cancel.png"
              onClick={() => {
                setOpenModal1(false);
              }}
            />
          </div>
        </div>
        <InfoBlock name={"Name"} data="Dmytro" />
        <InfoBlock name={"Phone number"} data="+38067777777" />
        <InfoBlock name={"City"} data="Lviv" />
        <InfoBlock name={"Address"} data="Shevchenka 31" />
        <div id="button_block">
          <button id="order_b">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal1;
