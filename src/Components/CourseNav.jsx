import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const CourseNav = ({Topic, setTopic,search,setSearch }) => {
  return (
    <div className="flex flex-col gap-2 border-b border-white  fixed top-0 w-[calc(100%-300px)] bg-[#101022] z-50 p-4">
      <div className="t1 flex justify-between ">
        <div className="c1  "><h2 className='text-3xl font-bold'>Explore Free  Courses</h2>
        <h3 className='text-[17px] text-gray-400'>Master new skills with community-curated tutorials.</h3></div>
        <div className="c2  flex items-center justify-center w-90 h-12 bg-[#111136] outline-0 px-5 text-[17px] rounded-xl">  
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 relative left-0"/>
          <input 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className='w-80 h-12 bg-[#111136] outline-0 p-5 text-[17px] rounded-xl' type="text" placeholder='Search for courses...' />
        </div>
      </div>
      <div className="t2 flex justify-start gap-3 items-center text-gray-400 pt-5 pb-5">
        <div
        onClick={()=>setTopic("All Topics")} className={`${Topic === "All Topics" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>All Topics</h2>  
        </div>
        <div onClick={()=>setTopic("Web Dev")} className={`${Topic === "Web Dev" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>Web Dev</h2> 
        </div>
        <div onClick={()=>setTopic("JS")} className={`${Topic === "JS" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>JavaScript</h2>  
        </div>
        <div onClick={()=>setTopic("React")} className={`${Topic === "React" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>React</h2>
        </div>
        <div onClick={()=>setTopic("Java")} className={`${Topic === "Java" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>Java</h2>  
        </div>
        <div onClick={()=>setTopic("Spring")} className={`${Topic === "Spring" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>Spring</h2>  
        </div>
        <div onClick={()=>setTopic("Python")}className={`${Topic === "Python" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>Python</h2>  
        </div>
        <div onClick={()=>setTopic("Django")} className={`${Topic === "Django" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>Django</h2>  
        </div>
        <div onClick={()=>setTopic("DSA")} className={`${Topic === "DSA" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>DSA</h2>
        </div>
        <div onClick={()=>setTopic("AI")} className={`${Topic === "AI" ? "bg-[#1313EC] text-white" : "bg-[#111136]text-gray-400"} rounded-4xl h-9 w-25 hover:cursor-pointer  flex justify-center items-center `}>
          <h2>AI</h2>  
        </div>


      </div>
    






    </div>


  )
}

export default CourseNav
