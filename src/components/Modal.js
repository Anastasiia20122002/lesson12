import React from "react";
import "./Modal.css";
import BuyPizza from "./BuyPizza";
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div id="header_small">
            <h1 div className="title">
              Cart
            </h1>
            <img
              id="cancel"
              src="images/cancel.png"
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </div>

          <BuyPizza
            image="/images/pizza3.png"
            name="Pepperoni"
            weight="430g"
            number="1"
            price="195"
          />
          <hr id="line_modal"></hr>
          <BuyPizza
            image="/images/pizza3.png"
            name="Diabola"
            weight="860g"
            number="2"
            price="440"
          />
          <hr id="line_modal"></hr>

          <BuyPizza
            image="/images/pizza1.png"
            name="Calzone al Forno"
            weight="430g"
            number="1"
            price="180"
          />
          <div id="amount">
            <h1 id="text">Amount</h1>
            <h1 id="money">UAH</h1>
          </div>
          <div id="button_block">
            <button id="order_b">To order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
