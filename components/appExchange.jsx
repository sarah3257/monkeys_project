import React, {useRef,useState} from 'react'

export default function AppExchange() {

let coinRef= useRef();
let amounteRef= useRef();
const [total,setTotal]= useState(0)
const calcTotal=()=>{
let myT=coinRef.current.value * amounteRef.current.value
setTotal(myT.toFixed(2))
}

  return (
    <div>AppExchange
        <select onChange={calcTotal} ref={coinRef} className='form-select'>
            <option value="3.3">USD</option>
            <option value="3.9">EURO</option>
            <option value="0.11">BATH</option>

        </select>

        <input onInput={calcTotal} ref={amounteRef} type='number' className="form-control"></input>
    {total}
    </div>
  )
}
