import React from 'react'

const CourseBox = ({title,channel,thumbnail,}) => {
  const progress = Math.floor(Math.random() * 91) + 10;
  return (
   <div className=' box h-full w-[35%] rounded-2xl bg-[#0F172A]  flex flex-col '>
      <div className="t  rounded-t-2xl h-[55%] relative ">
    <img  src={thumbnail} className='h-full w-full  rounded-t-2xl overflow-hidden object-cover '  />
        <div className=" rounded-[3px] w-[18%] h-[20] text-[10px] px-1 absolute right-2 bottom-2  bg-[#1214E7] text-shadow-2xs flex justify-center items-center"><p>CONTINUE </p></div> 
      
      </div>
      <div className="flex flex-col item-start justify-between p-2 gap-2">
        <div className="name text-[16px] font-light">{title.split(" ").slice(0,9).join(" ")}</div>
        <div className="bar w-[90%] h-2 rounded-4xl bg-white ">
            <div className=' bluebar h-full rounded-l-4xl  bg-[#1214E7]  'style={{ width: `${progress}%` }}></div>
        </div>
        <div className="com text-[13px] text-gray-400 ">{progress}% Complete</div>
      </div>
    </div>
  )
}

export default CourseBox
