import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import{Box,Image,Heading } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {Icon} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import photo5 from '../images/photo5.png'
import './singleNews.css'
import photo7 from '../images/photo7.png'
function SingleNews() {
    const {id} = useParams()
    console.log(id)
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
    console.log(data)
  return (
    <div>
       {
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div className='part70'>
             <Heading >{data.heading}</Heading>
         <Image style={{margin:"auto"}} src={data.img}/>
        
         <Box>
            {data.news}
         </Box>
         </div>
         
         <Box className='part30'>
          <div className='trending'>
            <h1>TRENDING</h1>
           <Icon as={SearchIcon}/>
          </div>
          <div className='trendingbox'>
             <div style={{display:"flex",justifyContent:"space-between"}}>
                <img src={photo5} alt="he" />
                <Link to="https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=28120645031&tag=kp-web-rhs-21&SubscriptionId=AKIAJZ7ZVEW7WHEFIMWA&ascsubtag=130807587"><p>Own OnePlus Nord CE 2 Lite 5G @ ₹908/Month*</p>
                <p>Grab Now !</p>
                <p>Extra Upto ₹1500 Off*</p></Link>
                
             </div>
             <div style={{display:"flex",justifyContent:"space-between"}}>
                <img src={photo5} alt="he" />
                <Link to="https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=28120645031&tag=kp-web-rhs-21&SubscriptionId=AKIAJZ7ZVEW7WHEFIMWA&ascsubtag=130807587"><p>Own OnePlus Nord CE 2 Lite 5G @ ₹908/Month*</p>
                <p>Grab Now !</p>
                <p>Extra Upto ₹1500 Off*</p></Link>
                
             </div>
             <div style={{display:"flex",justifyContent:"space-between"}}>
                <img src={photo5} alt="he" />
                <Link to="https://www.amazon.in/b/?_encoding=UTF8&ie=UTF8&node=28120645031&tag=kp-web-rhs-21&SubscriptionId=AKIAJZ7ZVEW7WHEFIMWA&ascsubtag=130807587"><p>Own OnePlus Nord CE 2 Lite 5G @ ₹908/Month*</p>
                <p>Grab Now !</p>
                <p>Extra Upto ₹1500 Off*</p></Link>
                
             </div>
          </div>
           <div>
              <Link to="https://www.ndtv.com/"><img src={photo7} alt="" /></Link>
           </div>
              
        </Box>
        
         </div>
        
        
       }  
    </div>
  )
}

export default SingleNews