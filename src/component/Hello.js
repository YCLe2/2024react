import React, { useState } from 'react';
import './Hello.css';

function Hello() {
  const [color, setColor] = useState('black');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div>
      <h1 style={{ color: color }}>Hello world</h1>
      <button className="button" onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default Hello;