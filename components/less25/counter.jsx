import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {add1,resetCouner,addCustom,reduc6} from './features/counterSlice'




export default function Counter() {
    const dispatch=useDispatch();
    const counter= useSelector((myStore)=>
    myStore.counterSlice.counter)

  return (
    <div className='container'>Counter:{counter}
    <button onClick={()=>{
        dispatch(add1())
    }}>add 1
     </button>
     <button onClick={()=>{
        dispatch(resetCouner())
    }}>Reaset
     </button>
     <button onClick={()=>{
     dispatch(addCustom({counterVal:5}))  }
     }>add 5</button>
     
     <button onClick={()=>{
     dispatch(reduc6({counterVal:6}))  }
     }>reduc 6</button>
     </div>

  )
}
