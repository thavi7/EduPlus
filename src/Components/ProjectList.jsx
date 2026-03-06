import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { Bookmark } from './Bookmark';

const ProjectList = ({title,description,category,tag,link}) => {

 const { bookmarks, toggleBookmark } = useContext(Bookmark);

  const project = { title, description, category, tag, link,type:"project" };

  const saved = bookmarks.some(p => p.title === title);
 


  return (
     <div className="box py-2 px-3 bg-[#101325] transition duration-300 ease hover:scale-103 hover:bg-[#1d223bbc] relative rounded-2xl border-2 border-[#0F0F3E]  h-60 w-full flex flex-col justify-between">
    <div 
   onClick={() => toggleBookmark(project)}  
    className='absolute right-2 top-2 hover:cursor-pointer'><FontAwesomeIcon icon={saved ? solidBookmark : regularBookmark} /></div>
        <div className="title text-2xl">{title}</div>
        <div className="des text-start text-[16px] text-gray-400 font-extralight"><p>{description}</p>
        </div>
        <div className="tag flex gap-2 text-[#e7d50b] justify-start items-center">
        {category.map((c, i) => (
    <div key={i}
      className="rounded-[5px] px-2 py-1 bg-black text-[12px]">
      {c}
    </div>
  ))}
        </div>
       <div className="button h-[20%] w-full flex justify-center items-center m-2">
        <a href={link} className=' w-[80%] h-full rounded-xl hover:cursor-pointer bg-[#1313EC]  flex justify-center items-center'><button className='hover:cursor-pointer h-full w-full text-xl '><h2>Check Now</h2></button></a>
      </div>  
      </div>
  )
}

export default ProjectList
