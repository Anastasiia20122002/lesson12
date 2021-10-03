import React from 'react'
import Counter from './Counter'
import './styles.css'
function Order(props) {
    return (
        <div id="order">
        <span id="price">{props.price}</span>    
        <span id="valute">UAH</span>        
        <Counter/>
        <div id="add-div"><button id="add">Add</button></div>
        </div>
    )
}

export default Order
