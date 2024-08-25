import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './pages/Home'; 
import Blogs from './pages/Blogs';
import WriteBlogs from './pages/WriteBlogs';
import BlogsPage from './components/BlogsPage/BlogsPage';
const App = () => {
  return (
    <Router>
   
    <div>
      <Navbar/>
    </div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/writeBlogs" element={<WriteBlogs title={"Write"}/>} />
          
          <Route path="/blogsPage/:id" element={<BlogsPage/>} />
          <Route path="/updateBlog/:id" element={<WriteBlogs title={"Update"}/>} />

          
        </Routes>
    </Router>
  )
}

export default App