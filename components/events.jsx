import React from 'react'

export default function Events() {
 
 const onBtnClick=()=>{
    alert("click1")
 }
 
    return (
    <div className='container'><h1>Events</h1>
   <button onClick={onBtnClick}>click1</button>
   <button onClick={()=>
     alert("click2")}>click2</button>

    </div>
  )
}
