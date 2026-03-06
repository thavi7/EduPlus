import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";


const ProjectAcc = ({title,tag,link}) => {
  return (
     <div className='bg-[#0F172A] flex gap-2 h-full w-[30%] rounded-xl '>
          <div className=' w-[30%] h-full text-center p-4 text-2xl text-[#1214E7] '> 
            <FontAwesomeIcon icon={faCartArrowDown} />
          </div>
          <div className='py-3  w-[70%] flex flex-col justify-between items-start  '>
              <div><h2>{title}</h2></div>
              <div className='font-extralight text-[13px] text-gray-400  '><p>Difficulty:   {tag.toUpperCase()}  </p></div>
              <div className=" w-full h-9 ">
            <a href={link} className=' w-[45%] h-full rounded-[10px] hover:cursor-pointer bg-[#1313EC]  flex justify-center items-center'><button className='hover:cursor-pointer h-full w-full text-[15px] '><h2>View Brief</h2></button></a>
          </div>  
          </div>
        </div>
  )
}

export default ProjectAcc
