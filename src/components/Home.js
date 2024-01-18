import React from 'react'
import { useNavigate } from 'react-router-dom'
//to navigate progammatically

export const Home = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Home Page</div>
    <button onClick={() => navigate('order-summary', {replace :true})}>Place Order</button>
    </>
  )
}

//replace :true , replaces the history
