import React from 'react'
import { useNavigate } from 'react-router-dom'
const Body = () => {

    const navigate = useNavigate()

    const handleclick = () => {
        navigate("/body")
    }
  return (
    <div>
      
      <h2>body part</h2>
      <p onClick={handleclick}>cricket</p>
    </div>
  )
}

export default Body
