import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

function SingleNews() {
    const {id} = useParams()
    const [data,setdata] = useState([])
    const fetchdata = ()=>{
        fetch(`http://localhost:8080/news/${id}`)
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
    console.log(id)
  return (
    <div>
        
    </div>
  )
}

export default SingleNews