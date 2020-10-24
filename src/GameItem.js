import React,{useEffect,useState} from 'react';
import './gameitem.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import psl from './play_store_logo.png';
import 'animate.css/animate.min.css';

const GameItem=props=>{
    var buttonname="COMMING SOON";
    var onClickHandler=()=>{

    };
    if(props.url){
        buttonname="GET APP";
        onClickHandler=()=>{
            window.open(props.url,'_blank');
        }
    }
    return(
        <div id="gameitemroot">
            <h2 style={{textAlign:"center",height:'50px'}}>
                {props.title}
            </h2>
            <img id="gameitemimage" src={props.image}/>
            <center><AwesomeButton ripple onPress={onClickHandler} style={{position:'relative',top:'10px',marginBottom:'10px'}} size="medium" type="primary"><img src={psl} width="30px" height="30px"></img>{buttonname}</AwesomeButton></center>
        </div>
    );
};

export default GameItem;