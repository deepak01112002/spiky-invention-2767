import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Center} from '@chakra-ui/react'
function Element() {

    const [data,setdata] = useState([])
    const fetchdata = ()=>{
        fetch(`http://localhost:8080/news`)
        .then((res)=>{
            return res.json()
        })
        .then((result)=>{
            setdata(result)
        })
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
       <div>
        <h1>TECHNOLOGY NEWS</h1>
        <hr />
         { data.map((el)=>(
            <div style={{display:"flex",justifyContent:"space-around"}} key={el.id}>
                <div>
                <img src={el.img} alt="newsimage" />           
                </div>
                <div>
                  <Link to={`/Element/${el.id}`}><Center>{el.heading}</Center></Link>
                 
                </div> 
                <hr />    
         </div>
           
         ))}
        </div> 
    </div>
  )
}

export default Element