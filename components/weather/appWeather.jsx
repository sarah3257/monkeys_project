import React, { useEffect, useState } from 'react'
import WeatherForm from './weatherForm'
import WeatherInfo from './weatherInfo'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export default function AppWeather() {
    const [info,setInfo]=useState()
    const [query]=useSearchParams();
    useEffect(()=>{
        doApi(query.get("q"))
    },[query]);

    const doApi= async(_town)=>{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${_town}&APPID=79e6c6e51697d969f9059a38ca350661`;
        let resp= await axios.get(url)
        console.log(resp.data);
        setInfo(resp.data)
    }

  return (

    <div className='container'>

        <WeatherForm doApi={doApi}/>
        {info ? <WeatherInfo info={info}/>:<p>Loading..</p>}  
       
       
    </div>
  )
}
