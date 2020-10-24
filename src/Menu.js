import React,{useEffect,useState} from 'react';
import './menu.css'

const Menu=props=>{
    return(
        <div id="menu">{props.children}</div>
    );
};

export default Menu;