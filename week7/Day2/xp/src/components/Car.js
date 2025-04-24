import React, { useState } from 'react'
import Garage from './Garage'

const Car = ({name,model}) => {
    const [car, setCar] = useState({name, model, color: "red"})
  return (
    <div>
        <h1>Car</h1>
        <p>this {car.name} car is a {car.color} {car.model} </p>
        <Garage size="small"/>
    </div>
  )
}

export default Car