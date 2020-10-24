import React from 'react';
import './app.css';
import Menu from './Menu';
import MenuItem from './MenuItem';
import Home from './Home';

function App() {
  return (
    <div style={{position:'absolute',width:'100%'}}>
      <div id="headerBar">
        <span id="title">NSI GAMES</span>
        <Menu>
          <MenuItem>HOME</MenuItem>
          <MenuItem>GAMES</MenuItem>
          <MenuItem>ABOUT US</MenuItem>
        </Menu>
      </div>
      <div style={{position:'relative',top:50,width:'100%'}}>
        <Home/>
      </div>
    </div>
  );
}

export default App;
