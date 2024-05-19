import React, { useState } from 'react'
import Message from './message'

export default function AppParents() {
  const [show,setShow]=useState(true);
  const hideMessage=()=>{
    setShow(false)
  }
  return (
    <div>AppParents
    { show&&<Message hideMessage1={hideMessage} txt="sarah"/>} 
    </div>
  )
}
