import React, { useState } from 'react'
import { Link,useSearchParams } from 'react-router-dom';

export default function PageNav() {
    const [page,setPage]=useState(5);
    const[query]=useSearchParams();
    let currentPage=Number(query.get("page"))
  return (<>
    <div>PageNav</div>
    {[...Array(page)].map((item,i)=>{
        return(
            <Link to={"/?page="+(i+1)} className='me-2'> {i+1}</Link>
        )
    })}
    <p><Link to={"/?page="+(Math.min(currentPage+1),page
    )}
    className='me-2 btn btn-dark'>Next</Link></p>
   <p><Link to ={"/?page="+(Math.max(currentPage-1),0)}
   className='me-2 btn btn-dark'>prev</Link></p> 
    </>
  )
}
