import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
//outlet for child links
// use search params searches for params in link
export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'  //.get searches for the filter param in the link 
  return (
    <>
    <h2>User 1</h2>
    <h2>User 2</h2>
    <h2>User 3</h2>
    <Outlet /> 
    <div>
        <button onClick={() => setSearchParams({filter: 'active'})}>Active users</button>
        <button onClick={() => setSearchParams({})}>Reset filter</button>
    </div>
    {
        showActiveUsers ? <h2>showing active users</h2>:<h2>showing all users</h2>
    }

    </>
  )
}
