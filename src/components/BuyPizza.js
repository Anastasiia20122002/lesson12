import React from "react";
import "./BuyPizza.css";
function BuyPizza(props) {
  return (
    <div>
      <div id="ChosenPizza">
        <img id="pizza_img" src={props.image} />

        <div id="info_small">
          <h1 id="name_small">{props.name}</h1>
          <h1 id="price_small">{props.weight}</h1>
        </div>
        <div id="number_modal">
          <h1 id="number">{props.number}</h1>
          <h1 id="weight_small">{props.price}</h1>
          <h1 id="cash">UAH</h1>
        </div>
        <div id="close">
          <img src="images/close.png" />
        </div>
      </div>
    </div>
  );
}

export default BuyPizza;
