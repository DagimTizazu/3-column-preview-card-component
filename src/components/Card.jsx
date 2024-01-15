import React from 'react'

function Card({ carImage, carName, carDescription, background }) {
  return (
    <div className="card"
      style={{
        backgroundColor: background 
      }}>
      <img src={carImage} alt={carName} />
      <h1>{carName}</h1>
      <p>{carDescription}</p>
      <a href="index.html">Learn More</a>
    </div>
  )
}

export default Card
