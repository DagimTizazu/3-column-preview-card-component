import React from 'react'
import Card from './Card.jsx'
import sedanImage from '../assets/icon-sedans.svg'
import suvImage from '../assets/icon-suvs.svg'
import luxuryImage from '../assets/icon-luxury.svg'

function App() {
  return (
    <div className='card-container'>
      <Card 
        carImage={sedanImage}
        carName='Sedans'
        carDescription='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip.'
        background='hsl(31, 77%, 52%)'/>
      
      <Card 
        carImage={suvImage}
        carName='SUVs'
        carDescription='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures.' />
      
      <Card 
        carImage={luxuryImage}
        carName='Luxury'
        carDescription='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style.' />
      
    </div>
  )
}

export default App
