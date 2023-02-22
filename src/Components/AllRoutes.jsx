import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import VideoPlayer from '../Pages/VideoPlayer'
function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/VideoPlayer' element={<VideoPlayer/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes