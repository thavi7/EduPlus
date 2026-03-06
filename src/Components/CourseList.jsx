import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { Bookmark } from "./Bookmark";

const CourseList = ({
  title,
  channel,
  thumbnail,
  duration,
  category,
  link,
}) => {
  
  const { bookmarks, toggleBookmark } = useContext(Bookmark);
  const course = { title, channel, thumbnail, duration, category, link, type:"course"};

  const isSavedCourse = bookmarks.some((c) => c.title === title);
  return (
    <div className="bg-[#0e0e32]  transition duration-300 ease hover:scale-103  border-2 gap-2 border-[#0F0F3E] h-110 rounded-2xl flex flex-col justify-center items-center p-2">
      <div className="pic rounded-t-2xl h-[40%] w-full relative">
        <img className="rounded-t-2xl " src={thumbnail} alt="" />
        <div className="time rounded-[5px] p-2 w-[18%] h-[8%] absolute bottom-0 right-2 m-1 bg-black text-[12px] flex justify-center items-center">
          {duration}
        </div>
      </div>
      <div className="info w-full h-[60%] flex flex-col relative justify-evenly">
        <div
          onClick={() => toggleBookmark(course)}
          className="absolute right-1 top-3 hover:cursor-pointer"
        >
          <FontAwesomeIcon
            icon={isSavedCourse ? solidBookmark : regularBookmark}
          />
        </div>
        <div className="type rounded-[5px] px-2 w-[25%] h-[15%]  m-1 bg-black text-[12px] flex justify-center items-center">
          {category}
        </div>
        <div className="title text-2xl px-2 py-1">{title}</div>
        <div className="channel px-4 text-[12px] text-gray-400 py-1 flex gap-1 items-center">
          <FontAwesomeIcon icon={faCircleCheck} />
          {channel}
        </div>
      </div>

      <div className="button h-[15%] w-[80%]  active:bg-[#4a4adc] bg-[#1313EC] rounded-2xl flex justify-center items-center ">
        <a
          href={link}
          className=" w-[80%] h-13 hover:cursor-pointer flex justify-center items-center"
        >
          <button className="hover:cursor-pointer h-full w-full  ">
            <h2>Watch Now</h2>
          </button>
        </a>
      </div>
    </div>
  );
};

export default CourseList;
