import React,{useEffect,useState} from 'react';
import './menuitem.css'

const MenuItem=props=>{
    return(
        <div className="menuitem">
            <span className="menuitemname">{props.children}</span>
        </div>
    );
};

export default MenuItem;