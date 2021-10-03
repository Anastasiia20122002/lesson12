import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'
import  './styles.css'
function Header() {
    return (
        <div id="align">
        <Leftside/>
        <Rightside/>
        </div>
    )
}

export default Header
