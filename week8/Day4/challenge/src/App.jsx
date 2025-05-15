import React from 'react'
import AgeDisplay from './components/AgeDisplay'
import AgeControls from './components/AgeControls'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2> Age Tracker</h2>
      <AgeDisplay />
      <AgeControls />
    </div>
  )
}

export default App
