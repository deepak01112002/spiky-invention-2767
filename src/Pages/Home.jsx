import { Box } from '@chakra-ui/react'
import React from 'react'
import Upperposter from '../Upperposter.png'
import firstphoto from '../images/firstphoto.png'
import photo2 from '../images/photo2.png'
import photo3 from '../images/photo3.png'
import photo4 from '../images/photo4.png'
import photo5 from '../images/photo5.png'
import photo6 from '../images/photo6.png'
import {Link} from 'react-router-dom'
import {Icon} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div id='maincontainer'>
      <div id='upperposter'>
       <img src={Upperposter} alt="" />
      </div>
      <h1 style={{marginLeft:"200px",marginTop:"10px"}}><b>IN-DEPTH</b></h1>
    <Box className='flexcontainer'>
      <Box className='part25'>
          <div >
            <Link to="/Element"><img src={firstphoto} alt="indepth1" />
            <p>DualSense Edge Review: Cutting-Edge Comes at a Cost</p></Link>
           </div>
           <div>
            <Link to="/Element"><img src={firstphoto} alt="indepth1" />
            <p>DualSense Edge Review: Cutting-Edge Comes at a Cost</p></Link>
           </div>
      </Box>
       
      <Box className='Gridbox'>
           <div>
           
            <img src={firstphoto} alt="indepth1" />
            <Link to="/Element"><p>DualSense Edge Review: Cutting-Edge Comes at a Cost</p></Link>
           </div>
           <div>
            <img src={photo2} alt="indepth1" />
            <Link to="/Element"><p>DualSense Edge Review: Cutting-Edge Comes at a Cost</p></Link>
           </div>
           <div>
            <img src={photo3} alt="indepth1" />
            <Link to="/Element"><p>DualSense Edge Review: Cutting-Edge Comes at a Cost</p></Link>
           </div>
           <div>
            <img src={photo4} alt="indepth1" />
            <Link to="/Element"><p>DualSense Edge Review: Cutting-Edge Comes at a Cost</p></Link>
           
           </div>
           
           
             <Link to="./VideoPlayer"> <div>
             <img  src={photo6} alt="" />
              <h1><b>Review of The Lenovo Legion Slim 7i</b></h1>
               
              
            </div></Link>
            <Link to="./VideoPlayer"> <div>
             <img  src={photo6} alt="" />
              <h1><b>Review of The Lenovo Legion Slim 7i</b></h1>
               
              
            </div></Link>
            <Link to="./VideoPlayer"> <div>
             <img  src={photo6} alt="" />
              <h1><b>Review of The Lenovo Legion Slim 7i</b></h1>
               
              
            </div></Link>
            <Link to="./VideoPlayer"> <div>
             <img  src={photo6} alt="" />
              <h1><b>Review of The Lenovo Legion Slim 7i</b></h1>
               
              
            </div></Link>
           
        </Box>
        
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
          
    
      </Box>
    </Box> 

     <div>
      <Product />
      </div>  
     
    </div>
    
  )
}

export default Home