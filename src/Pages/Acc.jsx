import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons"; 
import { faBell } from "@fortawesome/free-regular-svg-icons";
import StudentID from '../Components/StudentID';
import CourseBox from '../Components/CourseBox';
import ProjectAcc from '../Components/ProjectAcc';
import  { useContext } from 'react'
import { Bookmark } from '../Components/Bookmark';
import { useNavigate } from 'react-router-dom';


const Acc = () => {
   let navigate= useNavigate()
  const { bookmarks } = useContext(Bookmark)
  const savedCourses = bookmarks.filter(b => b.type === "course")
const savedProjects = bookmarks.filter(b => b.type === "project")
  return (
    <div className='bg-[#101022] w-full h-auto  text-white p-6'>

      <div className="title flex justify-between items-center ">
        <div className="name font-bold text-4xl p-2">Profile Dashboard</div>
        <div className="set  flex justify-evenly items-center h-20 w-40 p-2">
          <div className="not rounded-full bg-[#1E293B] h-10 w-10 flex justify-center items-center text-xl"><FontAwesomeIcon icon={faBell} /></div>
          <div className="not rounded-full bg-[#1E293B] h-10 w-10 flex justify-center items-center text-xl"><FontAwesomeIcon icon={faGear} /></div>
        </div>
      </div>


      <StudentID/>

<div className='flex-col flex w-full h-73 gap-3 justify-baseline items-center '>

  <div className='flex justify-between items-start h-[10%] w-full '>
    <h2 className='text-[22px] font-bold  '>Saved Course</h2>
    <h2 onClick={()=>{
            navigate('/courses')
        }} className='text-[15px] hover:cursor-pointer  text-[#1214E7]  '>View All</h2> 
  </div>

  <div className='  flex justify-start items-center gap-10  h-[85%]  w-full '>

  {savedCourses.length === 0 ? (
  <p className="text-gray-400">No saved courses 😿</p>
) : (
  savedCourses.map((c,i)=>(
    <CourseBox key={i} {...c}/>
  ))
)}

  </div>
<div></div>
  
</div>


<div className='flex-col  flex w-full h-50 gap-6 pb-2 justify-between mt-8 items-center '>

  <div className='flex justify-between items-start h-[10%] w-full '>
    <h2 className='text-[22px] font-bold  '>Saved Projects</h2>
    <h2
    onClick={()=>{
            navigate('/projects')
        }}
    className=' hover:cursor-pointer text-[15px] text-[#1214E7]  '>Browse Hub</h2> 
  </div>

  <div className='  flex justify-start items-center gap-8  h-[80%]  w-full overflow-x-auto flex-nowrap '>
   
    {savedProjects.length === 0 ? (
    <p className="text-gray-400">No saved projects 😿</p>
  ) : (
    savedProjects.map((p,i)=>(
      <ProjectAcc key={i} {...p}/>
    ))
  )}

   
  </div>

  
</div>














    </div>
  )
}

export default Acc
