import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const ProjectNav = ({skills, setSkills}) => {

  const [Input, setInput] = useState("")



  const handleKeyDown = (e) => {
  if (e.key === "Enter" && Input.trim() !== "") {
    if (!skills.includes(Input)) {
      setSkills([...skills, Input.toUpperCase()])
    }

    setInput("")
  }
}
  const removeSkill = (skill) => {
  setSkills(skills.filter((s) => s !== skill))
}





  return (
    <div className="flex flex-col gap-7 fixed top-0 w-[calc(100%-300px)] bg-[#101022] z-50 p-4">
       <div className="t1 flex flex-col gap-2 mt-2">
         <h2 className='text-3xl font-bold'>Project Suggestions</h2>
         <h3 className='text-[17px] text-gray-400'>Discover curated project ideas to build your professional portfolio.</h3>
       </div>
       <div className="t2  flex items-center justify-center w-[90%] h-15 bg-[#111136] outline-0 px-5 text-[17px] rounded-2xl">  
           <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 relative left-0"/>
           <input 
           value={Input}
           onChange={(e)=>setInput(e.target.value)}
          onKeyDown={handleKeyDown}
           className='w-full h-full bg-[#111136] outline-0 p-5 text-[17px] rounded-2xl' type="text" placeholder='Add skills like React, Python, NodeJS...' />
         </div>
       <div className="t3 flex justify-start gap-3 items-center text-white pb-2">
         
      {skills.map((skill, index) => (
 
  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-[#1313EC] rounded-full text-white">
    {skill}
    <button
      onClick={() => removeSkill(skill)}
      className="text-sm rounded-4xl h-2 w-8 hover:cursor-pointer  flex justify-end items-center ">
    <FontAwesomeIcon icon={faXmark} />
    </button>
  </div>
))}
 
       </div>
     
 
 
 
 
 
 
     </div>
     


  )
}

export default ProjectNav
