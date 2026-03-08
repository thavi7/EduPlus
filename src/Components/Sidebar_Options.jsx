import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar_Options = () => {
    let navigate= useNavigate()
    let location=useLocation()
  return (
    <div className=' h-[75%] w-full flex justify-start items-start gap-2 px-5 flex-col'>

        <button 
        onClick={()=>{
            navigate('/courses')
        }}
       className={`h-[8vh] text-[16px] flex justify-start gap-3 px-3 py-3 rounded-xl text-gray-400 items-center w-full hover:cursor-pointer hover:text-white ${location.pathname === "/courses" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"}`}>
        <img className='h-5 w-5  filter brightness-0 invert' src="https://cdn-icons-png.flaticon.com/128/1055/1055007.png" alt="" />
            <h1 className='text-[16px]'>Free Courses</h1>
        </button>
         <button
         onClick={()=>{
            navigate('/projects')
        }}
         className={`h-[8vh] text-[16px] flex justify-start gap-3 px-3 py-3 rounded-xl text-gray-400 items-center w-full hover:cursor-pointer hover:text-white ${location.pathname === "/projects" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"}`}>
        <img className='h-5 w-5  filter brightness-0 invert' src="https://cdn-icons-png.flaticon.com/128/566/566359.png" alt="" />
            <h1 className='text-[16px]'>Project Suggetions</h1>
        </button>
        <button
        onClick={()=>{
            navigate('/ai')
        }}
         className={`h-[8vh] text-[16px] flex justify-start gap-3 px-3 py-3 rounded-xl items-center text-gray-400 w-full hover:cursor-pointer hover:text-white ${location.pathname === "/ai" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"}`}>
        <img className='h-5 w-5  filter brightness-0 invert' src="https://cdn-icons-png.flaticon.com/128/10446/10446187.png" alt="" />
            <h1 className='text-[16px]'>Ask AI Doubt</h1>
        </button>
        <button 
        onClick={()=>{
            navigate('/blogs')
        }}
         className={`h-[8vh] text-[16px] flex justify-start gap-3 px-3 py-3 rounded-xl items-center text-gray-400 w-full hover:cursor-pointer hover:text-white ${location.pathname === "/blogs" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"}`}>

        <img className='h-5 w-5  filter brightness-0 invert' src="https://cdn-icons-png.flaticon.com/128/6463/6463648.png" alt="" />
            <h1 className='text-[16px]'>Best Blog Search</h1>
        </button>

        

      </div>
  )
}

export default Sidebar_Options
