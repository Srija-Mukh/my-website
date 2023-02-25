import React from 'react';

const Emoji = (props) => {
  return (
    <span className='emoji' role='img'>
      {props.symbol}
    </span>
  );
};

export default Emoji;
