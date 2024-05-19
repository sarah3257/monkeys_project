 import React ,{useState} from 'react'

export default function Counter() {

    const [counter, setCounter]=useState(3)
     const addOne=()=>{
       // counter++;
       setCounter(counter+1)
     }
  return (
    <div className='container'>
        <h2>Counter:{counter}</h2>
        <button onClick={addOne}>add 1</button>
        </div>
  )
}
