import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap,faPlay  } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser  } from "@fortawesome/free-regular-svg-icons";
import Sidebar_Options from './Sidebar_Options';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  let navigate=useNavigate()  
  return (
    <div className="sidebar fixed left-0 top-0 text-white bg-[#101027] w-[20%] h-screen flex border-r-2 border-[#101037] flex-col">
      
      <div className='title h-[15%] w-full flex items-center px-5 gap-3'>
        <div className='bg-[#1313EC] h-10 w-10 rounded-xl flex items-center justify-center'>
          <FontAwesomeIcon icon={faGraduationCap}  />
        </div>
        <h1 className='text-2xl font-bold'>EduPlus</h1>
      </div>
 
  <Sidebar_Options/>

      <button 
       onClick={()=>{
            navigate('/account')
        }}className='acc h-[10%] w-full flex items-center px-7 gap-3 hover:cursor-pointer border-t-3 border-[#101037]'>

        <div className=' h-7 w-7 rounded-full flex items-center justify-center'>
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
        <h1 className='text-[14px]'>Account</h1>
      </button>

    </div>
  )
}

export default Sidebar
