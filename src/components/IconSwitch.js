import React from 'react';
import '../style/IconSwitch.css';

function IconSwitch({icon, onSwitch}) {
    return (
        <header class='switch' >
          <button class='material-icons' onClick={onSwitch}>{icon}</button>
        </header>
      )
};


export default IconSwitch;