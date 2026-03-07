import React, { useState } from 'react'
import CourseNav from '../Components/CourseNav'
import CourseList from '../Components/CourseList'

const Course = () => {

  const [Topic, setTopic] = useState("All Topics")
  const [search, setSearch] = useState("")

  const courses = [
    //web dev
  {
    title: "Sigma Web Development Course - Web Development Tutorials in Hindi 🗿",
    channel: "CodeWithHarry",
    duration: "56:31:24 ",
    category: "Web Dev",
    thumbnail: "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A",
    link: "https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=NJEOLAYvs0NVYUas"
  },
  {
    title: "Web Development Full Course 2026 | Build Real Projects",
    channel: "Coder Army",
    duration: "155:42:10",
    category: "Web Dev",
    thumbnail: "https://i.ytimg.com/vi/1pcikNlDB-4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBWF6HHFVAhpyljTAe60aV35M-rag",
    link: "https://youtube.com/playlist?list=PLQEaRBV9gAFsistSzOgnD4cWgFGRVda4X&si=0PB1lvv4GD2xp2_L "
  },
  {
    title: "Full Stack Web Development Complete Course",
    channel: "Sheryians Coding School ",
    duration: "65:44:23",
    category: "Web Dev",
    thumbnail: "https://i.ytimg.com/vi/4dprtEzunIk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAoQiFJWT6ViIqSedEaJoDvUqKXEA",
    link: "https://youtube.com/playlist?list=PLbtI3_MArDOkxh7XzixN2G4NAGIVqTFon&si=5zyOVAyai0BD23yR"  
  },
   {
    title: "Complete Web Dev using MERN stack",
    channel: "CodeHelp-by Babbar",
    duration: "171:52:24",
    category: "Web Dev",
    thumbnail: "https://i.ytimg.com/vi/Vi9bxu-M-ag/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAuRKGTBkNUOEglcihlb91LN6XYOQ",
    link: "https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=rjvlxmKxl9svjY6j"
  },
  //js
  {
    title: "JavaScript Full Course (2025-26) - Beginners to Pro",
    channel: "Shradha Khapra",
    duration: "15:52:44",
    category: "JS",
    thumbnail: "https://i.ytimg.com/vi/ajdRvxDWH4w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHZkl1toTFHBY8cD7PLeg9Jxd5oA",
    link: "https://youtube.com/playlist?list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&si=0oKqg-nhSppK1iMi"
  },
  {
    title: "JavaScript Tutorials for Beginners in Hindi",
    channel: "CodeWithHarry",
    duration: "25:45:34",
    category: "JS",
    thumbnail: "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBIjme99R-l_yHv0C9V5uitvb5CoA",
    link: "https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&si=Tp7gN0c3NVcHR8a0"
  },
  {
    title: "JavaScript Full Course",
    channel: "Coder Army",
    duration: "24:32:22",
    category: "JS",
    thumbnail: "https://i.ytimg.com/vi/611_04Ml25c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAaenj3ol-k3ZqNRHUGhM87nfXD5Q",
    link: "https://youtube.com/playlist?list=PLQEaRBV9gAFuf-27K64l7-hV7o0fr9zx7&si=mx_5BXla_zAyMxLf"
  },
  {
    title: "JavaScript Tutorial Full Course",
    channel: "SuperSimpleDev",
    duration: "22:15:57",
    category: "JS",
    thumbnail: "https://i.ytimg.com/vi/EerdGm-ehJQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAcTFrvMm74ZMBst8pu_4oMw65A2w",
    link: " https://youtu.be/EerdGm-ehJQ?si=57RZeZ1Y4RyruZIp"
  },
   {
    title: "JavaScript Full Course",
    channel: "Sheryians Coding School",
    duration: "8:04:12",
    category: "JS",
    thumbnail: "https://i.ytimg.com/vi/a-wVHL0lpb0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC8Lo_X7R1iA6khCfBPmILwvnORmg",
    link: "https://youtu.be/a-wVHL0lpb0?si=_lrX5qwfpfYTxgJS "
  },
   {
    title: "JavaScript Full Course Free",
    channel: "BroCode",
    duration: "12:00:00",
    category: "JS",
    thumbnail: "https://i.ytimg.com/vi/lfmg-EJ8gm4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBuPHqCiIqQNUJqbZL6F4RQN7pFPg",
    link: "https://youtu.be/lfmg-EJ8gm4?si=eXeaiU5XPXpzurlU"
  },
 //react
 {
    title: "ReactJs Full Course",
    channel:"Sheryians Coding School",
    duration: "11:13:00",
    category: "React",
    thumbnail: "https://i.ytimg.com/vi/3LRZRSIh_KE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAfEvew-k6Bn7XD6uWOvvPRNqU4RA",
    link: "https://youtu.be/3LRZRSIh_KE?si=b8auYifNvmdG54_H"
  },
  {
    title: "Chai aur React | with projects",
    channel: "Chai aur Code",
    duration: "18:00:00",
    category: "React",
    thumbnail: "https://i.ytimg.com/vi/vz1RlUyrc3w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCPuqXVkPj7ttWHlhfi9QZ8hFdqug",
    link: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=-AsvjkSNoZ6878du"
  },
  {
    title: "React Js Tutorials in Hindi",
    channel: "CodeWithHarry",
    duration: "19:25:20", 
    category: "React",
    thumbnail: "https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHBmNMkrlki0bJx7dkyaYw7lu7sQ",
    link: "https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&si=Sa4RXF0NgUCQT_Zn"
  },
    {
    title: "React Tutorial Full Course - Beginner to Pro",
    channel: "SuperSimpleDev",
    duration: "11:32:04", 
    category: "React",
    thumbnail: "https://i.ytimg.com/vi/TtPXvEcE11E/hqdefault.jpg",
    link: "https://youtu.be/TtPXvEcE11E?si=zmHoQ8pgm5WH_77x"
  },
  {
    title: "🚀🔥 React & Redux Complete Course (2024) with Projects",
    channel: "Complete Coding by Prashant Sir",
    duration: "19:53:37", 
    category: "React",
    thumbnail: "https://i.ytimg.com/vi/eILUmCJhl64/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBlScDjYe5DXDbALTRXR_lGn4l81Q",
    link: "https://youtu.be/eILUmCJhl64?si=QjCS2eKYYBPiE_Vp"
  },
  //java
  {
    title: "Java Tutorial for Beginners",
    channel: "Telusko",
    duration: "12:23:23", 
    category: "Java",
    thumbnail: "https://i.ytimg.com/vi/BGTx91t8q50/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDWtFn4Aoz4F-zq_ElbmguEfh39Qg",
    link: "https://youtu.be/BGTx91t8q50?si=HoaxHnR0aT53w9_E"
  },
  {
    title: "Complete Java Programming Course",
    channel: "Engineering Digest",
    duration: "30:00:00", 
    category: "Java",
    thumbnail: "https://i.ytimg.com/pl_c/PLA3GkZPtsafY62QhQ030p85HAer0pFDdr/studio_square_thumbnail.jpg?sqp=CJznr80G-oaymwEICKoDEPABSFqi85f_AwYIoN_wuQY=&rs=AOn4CLDczOe0LPgDA2U03iuzMe8BtDvyZQ",
    link: "https://youtube.com/playlist?list=PLA3GkZPtsafY62QhQ030p85HAer0pFDdr&si=DM4vPvrfkmJKtR0V"
  },
    {
    title: "Java & DSA in 30 days : Course for Placement",
    channel: "Apna College",
    duration: "45:00:00", 
    category: "Java",
    thumbnail: "https://i.ytimg.com/vi/yRpLlJmRo2w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB953onHqGMzlmf8cMVs-n9pUaNRA",
    link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=qq1bgKzW10a9-z6t"
  },
  {
    title: "Java Full Course 2026",
    channel: "Coder Army",
    duration: "ongoing", 
    category: "Java",
    thumbnail: "https://i.ytimg.com/pl_c/PLQEaRBV9gAFsR15tNo2QLF9d2qc-c018p/studio_square_thumbnail.jpg?sqp=CMTlr80G-oaymwEICKoDEPABSFqi85f_AwYIgZrMzAY=&rs=AOn4CLDxV5DvT5Z8z3qTSAxkZ4ZyXPKaOg",
    link: "https://youtube.com/playlist?list=PLQEaRBV9gAFsR15tNo2QLF9d2qc-c018p&si=R_NlMrT-LGcT4mLq"
  },
  //spring
  {
    title: "Spring Boot and Spring Security with JWT",
    channel: "Telusko",
    duration: "8:39:30", 
    category: "Spring",
    thumbnail: "https://i.ytimg.com/vi/VFVI1svmy04/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBYzx6Cg0wgd_fq-TMHGx_YK8ncjQ",
    link: "https://youtu.be/VFVI1svmy04?si=os1LmPuIbGmXY0cY"
  },
  {
    title: "Spring Boot Mastery: From Basics to Adv",
    channel: "Engineering Digest",
    duration: "35:20:44", 
    category: "Spring",
    thumbnail: "https://i.ytimg.com/vi/1993zSY5UBI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBVXV0kdbs6JmQYvTFHTEq1rPSfyA",
    link: "https://youtube.com/playlist?list=PLA3GkZPtsafacdBLdd3p1DyRd5FGfr3Ue&si=Vt9Hp6T_f5BahOFN"
  },
  {
    title: "Complete Spring Boot Tutorial For Beginners [2025]",
    channel: "Anuj Kumar Sharma",
    duration: "18:42:34", 
    category: "Spring",
    thumbnail: "https://i.ytimg.com/pl_c/PLUcsbZa0qzu0gVRFlVfscqjD84TqMssOt/studio_square_thumbnail.jpg?sqp=CI69r80G-oaymwEICIAKENAFSFqi85f_AwYI3tvCwwY=&rs=AOn4CLBWYuzs_W0r3h1exFyaVLFtZbqk6A",
    link: "https://youtube.com/playlist?list=PLUcsbZa0qzu0gVRFlVfscqjD84TqMssOt&si=JK9i07tHInsrFwCT"
  },

  //python
  {
    title: "Python Tutorial For Beginners in Hindi | Complete Python Course 🔥",
    channel: "CodeWithHarry",
    duration: "10:53:55", 
    category: "Python",
    thumbnail: "https://i.ytimg.com/vi/UrsmFxEIp5k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBm9X2Vozsbpfw8ihb1mR7DCytnWQ",
    link: "https://youtu.be/UrsmFxEIp5k?si=ujAPfxIDm_utQ0GQ"
  },
  {
    title: "Python Tutorial for Beginners - Full Course ",
    channel: "Apna College",
    duration: "10:24:51", 
    category: "Python",
    thumbnail: "https://i.ytimg.com/vi/ERCMXc8x7mc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdgtz1Q_jN2iTmPqYnMNMZiSoQTg",
    link: "https://youtu.be/ERCMXc8x7mc?si=unASUAnKvFVnx0y6"
  },
  {
    title: "Python Full Course for free 🐍",
    channel: "Bro Code ",
    duration: "12:00:00", 
    category: "Python",
    thumbnail: "https://i.ytimg.com/vi/ix9cRaBkVe0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDsLPZCX5PFS2a-Wng9IwGAduPqOQ",
    link: "https://youtu.be/ix9cRaBkVe0?si=-OSGUkay8yfcexgv"
  },
  //django
  {
    title: "Django Full Course 2026 in Hindi | Beginner to Advanced ",
    channel: "Mohit Decodes",
    duration: "15:59:05", 
    category: "Django",
    thumbnail: "https://i.ytimg.com/vi/iflSRpcyzdI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDN4VaC7jstuDw4b8KKsW62eF3WCg",
    link: "https://youtu.be/iflSRpcyzdI?si=tjKA46LlpPQ01dfK"
  },
   {
    title: "Django For Everybody - Full Python University Course",
    channel: "freeCodeCamp.org",
    duration: "18:32:45", 
    category: "Django",
    thumbnail: "https://i.ytimg.com/vi/o0XbHvKxw7Y/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDGYC_AgBZMmFRrU26zIDGcVRYeQg",
    link: "https://youtu.be/o0XbHvKxw7Y?si=z6KTYXTrk2tL123G"
  },
  {
    title: "Chai aur Django",
    channel: "Chai aur Code",
    duration: "9:12:23", 
    category: "Django",
    thumbnail: "https://i.ytimg.com/vi/j6szNSzw4BU/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBMrXGSCoNkutD9tQ8nVguxVL9I9A",
    link: "https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&si=Ob8C6e6LeW6ulywi"
  },
   {
    title: "Django Tutorial In Hindi",
    channel: "CodeWithHarry",
    duration: "2:56:24", 
    category: "Django",
    thumbnail: "https://i.ytimg.com/vi/JxzZxdht-XY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLABqdqWIe34mJ5M0Y8wQXWSiY_GKw",
    link: "https://youtu.be/JxzZxdht-XY?si=PpO2Pt-F3XAkGWXs"
  },
  //DSA
  {
    title: "Strivers A2Z-DSA Course",
    channel: "take U forward",
    duration: "250:34:22", 
    category: "DSA",
    thumbnail: "https://i.ytimg.com/vi/0bHoB32fuj0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBaVe7ndTXmOLmC8Yom2Grzt5dQfg",
    link: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=2wJZiPWZbTAblJoH"
  },
  {
    title: "Complete C++ DSA Course ",
    channel: "Apna College",
    duration: "110:44:57", 
    category: "DSA",
    thumbnail: "https://i.ytimg.com/vi/VTLCoHnyACE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC8fQQIljrUqn0NzkqX1iiAdw9Dfg",
    link: "https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=Hb02BEjJuUxlhbHX"
  },
  {
    title: "DSA Playlist in C++",
    channel: "Coder Army",
    duration: "300:57:12", 
    category: "DSA",
    thumbnail: "https://i.ytimg.com/vi/y3OOaXrFy-Q/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC-Ap2wuqakV3A5MPlnny5bmnCYNA",
    link: "https://youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklqI7IyXwr01&si=pz-g1RrQYpNmSbSK"
  },
  {
    title: "Complete DSA In Java",
    channel: "GeeksforGeeks",
    duration: "120:55:25", 
    category: "DSA",
    thumbnail: "https://i.ytimg.com/vi/m3fg2PRY1u4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDegD8P8yJcgH4XAwd2kSYEIBhWRw",
    link: "https://youtube.com/playlist?list=PLqM7alHXFySGwOTADxwHrgH8m_XpgrB-k&si=GdVhrIKUkdg7nRPZ"
  },
  {
    title: "Complete C++ Placement DSA Course",
    channel: "CodeHelp - by Babbar",
    duration: "250:34:22", 
    category: "DSA",
    thumbnail: "https://i.ytimg.com/vi/WQoB2z67hvY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC67s1Sgk0k2zdN0cWG1WacUylIWQ",
    link: "https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=MatIjonepV883b1i"
  },
  //genai
   {
    title: "GenAI Full Course",
    channel: "Rohit Negi",
    duration: "10:22:12", 
    category: "AI",
    thumbnail: "https://i.ytimg.com/vi/WOyZid8OkkI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAtcoC3TitCzEXG_pDQ2IHHmPN1qA",
    link: "https://youtube.com/playlist?list=PLd7PleJR_EFfRYiLdagOsv4FczMl1Cxt_&si=wXjXoM5AQom9awaz"
  },
  {
    title: "Generative AI using LangChain",
    channel: "CampusX ",
    duration: "28:05:55", 
    category: "AI",
    thumbnail: "https://i.ytimg.com/vi/pSVk-5WemQ0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCa3PziWjIYiX-fhST987JwqBE61g",
    link: "https://youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0&si=1bNyJvxgpQC2T0LG"
  },
   {
    title: "Generative AI Full Course | LangChain, LLMs & Prompt Engineering ",
    channel: "Sheryians AI School ",
    duration: "3:52:25", 
    category: "AI",
    thumbnail: "https://i.ytimg.com/vi/vwncYfhxbR0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDlI8-n1eHPXhlQmyfYVRcPU59ftQ",
    link: "https://youtu.be/vwncYfhxbR0?si=e8eLpoxpfhgASWvk"
  },
  
]
const filteredCourses = courses.filter(course => 
  (Topic === "All Topics" || course.category === Topic) &&
  course.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className='bg-[#101022] w-full h-auto min-h-screen text-white p-6'>

<CourseNav Topic={Topic} setTopic={setTopic} search={search} setSearch={setSearch}/>
<div className="grid grid-cols-3 gap-4 z-0 mt-40 py-5">
 {filteredCourses.map((course, index) => (
    <CourseList
      key={index}
      title={course.title}
      channel={course.channel}
      duration={course.duration}
      category={course.category}
      thumbnail={course.thumbnail}
      link={course.link}
    />
  ))}
 
</div>

    </div>
  )
}

export default Course
