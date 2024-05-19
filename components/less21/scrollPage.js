import React, { useEffect, useState } from 'react'

export default function ScrollPage() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
    window.addEventListener("scroll",funScroll)
   
  },[])
  const funScroll=()=>{
    console.log("sarah you are scrolling now")
    //גובה החלון
    let windH=window.innerHeight;
    //  נק' הגלילה מהעליון
    let top=document.documentElement.scrollTop;
    //גובה המסך   
    let docH=document.documentElement.offsetHeight;
    if(Math.ceil(windH+top)==docH){
      alert("end")
    }
  }
  
  const doApi = async() => {
    let url = `https://api.fda.gov/food/enforcement.json?limit=10&skip=0`;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    setAr(data.results)
  }

  return (
    <div className='container'>
      <h1 className='display-4'>List of recalls by the F.D.A</h1>
      <div>
        {ar.map(item => {
          return(
            <article key={item.event_id} className='col-md-7 border p-4 my-2'>
              <h2>{item.recalling_firm}</h2>
              <h4>Products type:{item.product_type}</h4>
              <h4>Location:{item.state} {item.city}</h4>
            </article>
          )
        })}
      </div>
    </div>
  )
}
