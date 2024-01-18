import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Order confirmed</div>
    <button onClick={() => navigate(-1)}>Back</button>;
    </>
    
  )
}
//-1 navigates back to home page