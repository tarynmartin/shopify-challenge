import React from 'react';
import './Popup.css';

function Popup({close}) {
  return (
    <div className='popup'>
      <button className='close-btn' onClick={close}>X Close</button>
      <h2>You have reached your limit of 5 nominations. Please remove 1 or more to nominate other movies.</h2>
    </div>
  )
}

export default Popup;