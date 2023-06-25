import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog'
import Favourite from './Pages/Favourite'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'

const AllRoute = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:id' element={<Blog/>}/>
        <Route path='/favorites' element={<Favourite/>}/>
        <Route path='*' element={<NotFound/>}/>
     </Routes>
  )
}

export default AllRoute