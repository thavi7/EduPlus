import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const CourseNav = ({Topic, setTopic,search,setSearch }) => {
  return (
<div className="flex flex-col gap-2 border-b border-white fixed top-0 w-full bg-[#101022] z-50 p-4">
  <div className="t1 flex items-center gap-20 xl:gap-60">
    <div className='max-w-[60%]'>
      <h2 className="text-3xl font-bold">Explore Free Courses</h2>
      <h3 className="text-[17px] text-gray-400">
        Master new skills with community-curated tutorials.
      </h3>
    </div>

    <div className="flex items-center gap-3 bg-[#111136] px-4 h-12 rounded-xl w-80">
  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 shrink-0" />
  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="bg-transparent outline-none w-full min-w-0"
    type="text"
    placeholder="Search for courses..."
  />
</div>

  </div>

      
      <div className="t2 flex justify-start  w-[75%] gap-2 text-[16px] items-center text-gray-400 pt-5 pb-5">
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
