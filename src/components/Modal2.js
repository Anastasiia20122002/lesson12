import React from "react";
import "./Modal1.css";
import InfoBlock from "./InfoBlock";
function Modal2({ setOpenModal2 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <h1 id="Completed">Order Completed</h1>
          <img id="order1" src="/images/order.png" />
          <div id="button_done">
            <button
              id="order_b"
              onClick={() => {
                setOpenModal2(false);
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
