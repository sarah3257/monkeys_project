import { wait } from '@testing-library/user-event/dist/utils'
import React from 'react'

export default function Message(props) {
  return (
    <div  style={{
        color:"white",background:"red"
        }}>Message:{props.txt}
    <button onClick={()=>{
        props.hideMessage1()
    }} className='float-end'>x
    </button>
    </div>
  )
}
