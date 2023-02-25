import { Container } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import photo15 from '../images/photo15.png'
function Detail() {
    const {detailid} = useParams()
    const [data,setdata] = useState([])
    useEffect(()=>{
     fetchingdata()
    },[])
    const fetchingdata = ()=>{
        axios.get(`http://localhost:8080/products/${detailid}`)
        .then((res)=>{
           setdata(res.data)
        })
    }
    console.log(data)
  return (
    <div style={{display:"flex",border:"5px solid black",padding:"15px",width:"70%",margin:"auto"}}>
    {
       <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"15px"}}>
           <div>
               <img src={data.img} alt="" />
            </div>
            <div >
               <h1><b>{data.name}</b></h1>
               <h1><b> Display Size </b> : {data.displaysize}</h1>
               <h1><b>Resolution :</b> {data.resolution}</h1>
               <h1><b>Touchscreen : </b> {data.touchscreen}</h1>
               <h1><b>Processor :</b>{data.Processor}</h1>
               <h1><b>Os</b> : {data.Os}</h1>
               <h1><b>HardDisk</b> : {data.Harddisk}</h1>   
        </div>
        <div style={{width:"30%"}}>
            <b>Details </b> :  {data.detail}
        </div>
            
       </div>
       
        }
       
    </div>
  )
}

export default Detail