import React from 'react'
import { useParams } from 'react-router-dom'
//extract route  params

export const UserDetails = () => {
    const params = useParams()
    const userId = params.userId

  return (
    <div>Details about user {userId}</div>
  )
}
