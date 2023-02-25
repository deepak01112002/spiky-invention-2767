import React from 'react'
import photo8 from '../images/photo8.png'
import photo13 from '../images/photo13.png'
import photo9 from '../images/photo9.png'
import photo10 from '../images/photo10.png'
import photo11 from '../images/photo11.png'
import photo12 from '../images/photo12.png'
import photo14 from '../images/photo14.png'
import { Link } from 'react-router-dom'
function Product() {
    
  return (
    <div>
        <div style={{marginLeft:"250px"}}>
        <h1> <b>PRODUCT FINDER</b> </h1> 
        </div>
       <div className='product-row' style={{display:"flex",width:"40%",overflow:"auto",margin:"auto"}}>
       <img className='image' src={photo8} alt="nooo" /> 
            <img src={photo9} alt="" />
            <img src={photo10} alt="" />
            <img src={photo11} alt="" />
            <img src={photo12} alt="" />
            <img src={photo13} alt="" />
            <img src={photo9} alt="" />
            <img src={photo10} alt="" />
            <img src={photo12} alt="" />
            <img src={photo11} alt="" />
           
        </div>
        <div style={{width:"60%",margin:"auto",marginTop:"5px"}}>
           <img src={photo14} alt="" /> 
        </div> 
    </div>
  )
}

export default Product