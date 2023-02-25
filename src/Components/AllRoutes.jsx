import React from 'react'
import {Routes,Route, useParams} from 'react-router-dom'
import Home from '../Pages/Home'
import Element from '../Pages/Element'
import VideoPlayer from '../Pages/VideoPlayer'
import SingleNews from '../Pages/SingleNews'
import Ecommerce from '../Pages/Ecommerce'
import Detail from '../Pages/Detail'

function AllRoutes() {
  const {id} = useParams()
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/VideoPlayer' element={<VideoPlayer/>}></Route>
            <Route path="/Element" element={<Element/>}></Route>
            <Route path={`/Element/:id`} element={<SingleNews />}></Route>
            <Route path="/products" element={<Ecommerce />}></Route>
            <Route path={`/products/:detailid`} element={<Detail />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes