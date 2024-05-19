import React,{useState} from 'react'

export default function ParentsComp(props) {
    const [show,setShow]=useState(false)
   
  return (
    <div className='container'>ParentsComp
    <button onClick={()=>{
         setShow(!show)
    }}>child
   
    </button>
     {show && props.children}
    </div>
  )
}
