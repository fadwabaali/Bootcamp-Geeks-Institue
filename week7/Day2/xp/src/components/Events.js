import React, { useState } from 'react'

const Events = () => {

    const [isToggleOn, setIsToggleOn] = useState(true)

    const clickMe = () => {
        alert("I was clicked")
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert("ur enter key was pressed, your input is: " + event.target.value)
        }
    }
  return (
    <div>
        <button onClick={clickMe}>Click me</button>
        <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />
        <button onClick={() => setIsToggleOn(!isToggleOn)}>{isToggleOn? "On": "Off"}</button>
    </div>
  )
}

export default Events