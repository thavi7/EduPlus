import React from 'react'
import BlogList from '../Components/BlogList'
import BlogNav from '../Components/BlogNav'

const Blog = () => {
  return (
    <div  className='bg-[#010104] w-full h-auto text-white p-3'>
      <BlogNav/>
      <BlogList/>
    </div>
    
  )
}

export default Blog
