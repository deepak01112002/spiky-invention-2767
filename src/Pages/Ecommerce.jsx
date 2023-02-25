import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Box} from "@chakra-ui/react"
import photo5 from '../images/photo5.png'
import {Icon} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
function Ecommerce() {
  const [product,setproduct] = useState([])
  useEffect(()=>{
   filerdata()
  },[])
  const filerdata = ()=>{
    axios.get(`http://localhost:8080/products`)
    .then((result)=>{
      setproduct(result.data)
    })
  }
  const styles = {
    display:"flex",width:"70%",margin:"auto",justifyContent:"space-evenly",padding:"25px",boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
  }
   
  return (
  
    <div >
      {product.map((el)=>(
        
     <Link to={`/products/${el.id}`}> <div style={styles}>
      <div>
         <img src={el.img} alt={el.id} />
      </div>
      <div>
         <h1> <b> {el.name} </b></h1>
         <h2><b>Display Size :</b>{el.displaysize}</h2>
      </div>
    </div> </Link>
    ))}
  <div>
</div>
    </div>
  )
}

export default Ecommerce