import React, {useRef} from 'react'

export default function AppInput() {
    const inputRef=useRef();
    const func=()=>{
        console.log(inputRef.current.value)
    }
  return (
    <div className='container'>AppInput
    <input ref={inputRef} type="text" />
    <button onClick={func}>choose</button>
    </div>
  )
}
