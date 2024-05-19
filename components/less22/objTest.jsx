import React from 'react'

export default function ObjTest() {
    const car={
        name:"mazda",
        color:"blue",
        year:2024
    }
    const coins={
        "usd":3.6,
        "curo":3.9,
        "baht":0.11
    }
    const coins_arr=[]
    for(let key in coins){
        coins_arr.push(
            {
                name:key,
                value:coins[key]
            }
        )
    }
  return (
    <div>ObjTest
        <ul>
            {coins_arr.map(({name,value})=>{
                return(
                    <li key={name}>{name}-{value}</li>
                )
            })}
            
        </ul>
    </div>
  )
}
