import React from 'react'
import { useSelector } from 'react-redux'
export default function Home() {
  const counter=useSelector((mystate)=>
  mystate.counterSlice.counter
  )
  return (
    <div className='container'>
     <h1>Home</h1> 
     {counter}
    </div>
  )
}
