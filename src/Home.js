import React,{useEffect,useState} from 'react';
import './home.css';
import logo from './potrait_logo.png';
import tcl from './tactical_combat_icon.png';
import mwl from './mw_logo_1.png';
import 'animate.css/animate.min.css';
import GameItem from './GameItem';
import gmi from './games_mock.png';
import RubberBand from 'react-reveal/RubberBand';

const HOME=props=>{
    return(
        <div id="homeroot"> 
            <div id="homeintro">
                <div id="homelogodiv"><img id="logoimg" src={logo} /></div>
                <div id="welcomediv">
                    <h1 id="welcometitle">Welcome to NSI Games Official Website</h1>
                    <p id="welcomedesc">We are mobile games development studio under Nikhil Sai Infra Pvt Ltd company. We are committed to provide good entertaining games with new and refreshing ideas. We are working as an individual studio and have started this year 2020 to provide wonderful mobile games to you now and in the future.</p>
                    <img id="gamemockimg" src={gmi}/>
                </div>
            </div>
            <div id="ourgamesdiv">
                <RubberBand>
                    <h2 id="ourgamestitle">OUR GAMES</h2>
                </RubberBand>
                <div id="gamesdiv">
                    <GameItem url="https://play.google.com/store/apps/details?id=com.msmg.TacticalCombat" image={tcl} title="TACTICAL COMBAT"/>
                    <GameItem image={mwl} title="MAZE WAR" />
                </div>
            </div>
        </div>
    );
};

export default HOME;