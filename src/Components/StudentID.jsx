import React, { useContext } from 'react'
import { Bookmark } from './Bookmark'

const StudentID = () => {
  const { bookmarks } = useContext(Bookmark)
  const courseCount = bookmarks.filter(b => b.type === "course").length
const projectCount = bookmarks.filter(b => b.type === "project").length
  return (
   <div className="students h-[30%] w-full flex justify-between items-center my-10 bg-[#0F172A] rounded-xl ">
        <div className="  w-[20.33%] h-full flex justify-center items-center ">
          <div className="ir bg-white h-35 w-35 border-4 border-[#101651]  rounded-full ">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaLE2sXpP5XaSW6CpnKWtTF5pLbIWoS7DgginruewdlBGHKy6VPke4dvxWKQObdUYcaVnZzlQnse849ewGpZR0zx3rQF18ncNm-EPtbp75uWViPh9pFbgnCOR3Fpi1-IAaQ3g-YoTYVJ2rm31AeXNf3EhRSnQVLQucr8V4Xn_esvwr6qEYoPhSFg5yVNy6ltHyIpdxAZ_KAgvKZagWA9GLlJjEqRdpP_3g_uvimZYJFHJDF_Wja6OzII_3PVTGbqT9MTVyikMXbh4" className='object-cover h-full w-full border-4  rounded-full ' />
          </div>
        </div>
        <div className="info flex flex-col justify-between items-start w-[40%] h-full ">
          <div className=" w-[50%] gap-1 flex flex-col justify-between py-2 h-[60%]">
          <div className="text-xl font-bold">Alex Johnson</div>
          <div className="text-[#94A398]">alex.jhonson@nsec.in</div>
          <div className="flex justify-between items-center gap-2 px-2">
            <div className='bg-[#0F173E] px-1 py-1 rounded-2xl  text-[12px] text-[#1214E7] '>Premium Student</div>
            <div className='bg-[#102930] px-2 py-1  text-[13px] rounded-2xl text-[#22C55E] '>Active</div>
          </div>

          </div>
          <div className=" h-[40%] w-[80%] flex flex-col justify-between ">
            <div className='text-[#64748B] font-bold  text-justify text-xl '>My Interests</div>
            <div className='flex justify-between items-center py-2 '>
              <div className='bg-[#162033] px-5 py-1 rounded-xl    '>Python</div>
              <div className='bg-[#162033] px-5 py-1 rounded-xl    '>Java</div>
              <div className='bg-[#162033] px-5 py-1 rounded-xl    '>DSA</div>
              <div className='bg-[#162033] px-5 py-1 rounded-xl    '>AI</div>
            </div>
          </div>
        </div>
        <div className=" flex justify-evenly  items-center gap-2 w-[30%] h-full ">
          <div className=" h-[50%] w-30 bg-[#162033] rounded-2xl flex flex-col justify-evenly items-center p-2"><h1 className='text-3xl font-bold text-blue-500'>{courseCount}</h1><h1>COURSES</h1></div>
          <div className=" h-[50%] w-30 bg-[#162033] rounded-2xl flex flex-col justify-evenly items-center p-2"><h1 className='text-3xl font-bold text-blue-500'>{projectCount}</h1><h1>PROJECTS</h1></div> 
            </div>
      </div>
  )
}

export default StudentID
