import React from 'react'
import { useDispatch } from 'react-redux'
import { ageUpAsync, ageDownAsync } from '../features/ageSlice'

export default function AgeControls() {
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync())} style={{ marginLeft: '10px' }}>
        Age Down
      </button>
    </div>
  )
}
