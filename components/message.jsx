import React from "react";

export default function Message(props){
    return(
        <div >
           <h1 style={{
            color:"red",background:"blue"
            }}>Message:{props.txt}</h1> 
        </div>
    )
}