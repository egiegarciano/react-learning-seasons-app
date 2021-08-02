import React from 'react';
import './SeasonDisplay.css';

const Spinner = (props) => {
  return (
    <div className='ui active dimmer border'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
