import React from 'react';
import { useState } from 'react';

const veryLightGray = 'hsl(0, 0%, 95%)';

function Card({ carImage, carName, carDescription, bgColor }) {
  const [backgroundColor, setBackgroundColor] = useState(veryLightGray);
  const [fontColor, setFontColor] = useState(bgColor);

  const handleMouseOver = () => {
    setBackgroundColor(bgColor);
    setFontColor(veryLightGray)
  };

  const handleMouseOut = () => {
    setFontColor(bgColor);
    setBackgroundColor(veryLightGray);
  };

  return (
    <div className="card"
      style={{
        backgroundColor: bgColor 
      }}>
      <img className="card__image" src={carImage} alt={carName} />
      <h1 className="card__header">{carName}</h1>
      <p className="card__txt">{carDescription}</p>
      <a
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="card__button"
        href="index.html" style={{
          color: fontColor,
          backgroundColor: backgroundColor
        }}
      >Learn More
      </a>
    </div>
  )
}

export default Card
