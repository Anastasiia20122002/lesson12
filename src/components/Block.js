import React from 'react'
import './styles.css'
import Order from './Order'
import Description from './Description'
function Block(props) {
    return (
        <div id="block">
        <div id="pizza">
        <h3 id="amount">{props.amount}</h3> 
        <h3 id="length">{props.length}</h3> 
        <img src={props.image}/>
         </div>
        <Description pizza={props.pizza} description={props.description}/>
         <Order price={props.price}/>
        </div>
    )
}

export default Block
