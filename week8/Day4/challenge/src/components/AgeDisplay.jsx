import React from 'react'
import { useSelector } from 'react-redux'

export default function AgeDisplay() {
  const { age, loading } = useSelector((state) => state.age)

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>Age: {age}</h1>
      {/* {loading && <img src="/spinner.svg" alt="Loading..." width={40} />} */}
    </div>
  )
}
