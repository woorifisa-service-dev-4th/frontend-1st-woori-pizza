import React from 'react';
import imgLogo from '@/assets/images/pizza_box.png'

const Seat = ({ name }) => {
  return (
    <div className="seat" id={name}>
      <img
        className="pizza_box"
        src= {imgLogo}
        alt="closed pizza box"
        onClick={() => {
          console.log('clicked!');
        }}
      />
      <div className="name_area">
        <div className="name_tag">{name}</div>
      </div>
    </div>
  );
};

export default Seat;