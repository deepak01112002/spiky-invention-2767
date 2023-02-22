import React from 'react'
import Video from '../Components/Video'

function VideoPlayer() {
    const style ={
        width:"90%",
        margin:"auto",
        display:"flex",
        justifyContent:"space-around"
    }
  return (
    <div>
        <h1 style={{fontSize:"32px",marginLeft:"15px",marginBottom:"20px"}}>Review Of The Leneovo Legion Slim 7i</h1>
    <div style={style}>
        
        <div className='Videoplay'>
            <Video />
        </div>
        <div style={{width:"25%"}}><p>MSI is launching a plethora of laptops in 2023, and we bring you a quick sneak peek at the lineup. Mercedes-Benz has launched the EQS and EQB, we show you the first look at both cars. We also speak to Rohan Talwar from T&T Motors. We visited Samsung's first experiential store in Delhi and tell you all about it. And finally, we review the Lenovo Legion Slim 7i and tell you whether it is worth the price.
        </p>    
        </div>
    </div>
</div> 
  )
}

export default VideoPlayer