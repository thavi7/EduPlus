import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import { createBrowserRouter,RouterProvider , Route, Routes } from 'react-router-dom'

import Project from "./Pages/Project";
import Home from "./Pages/Home";
import Course from "./Pages/Course";
import Blog from "./Pages/Blog";
import Acc from "./Pages/Acc";
import Ai from "./Pages/Ai";  
import Sidebar from "./Components/Sidebar";
import Applayout from "./Components/Layout/Applayout";

import 'locomotive-scroll/dist/locomotive-scroll.css'


const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      children:[
        {

     index: true, element:<Home/>,
    },
    {
      path:"/projects" , element:<Project/> ,
    },
    {
      path:"/courses" , element:<Course/> ,
    },
    {
      path:"/blogs" , element:<Blog/> ,
    },
    {
      path:"/account" , element:<Acc/> ,
    },
    {
      path:"/ai" , element:<Ai/> ,
    },
    
        
      ]
    },
    
    
  ])
  return <RouterProvider router={router} />;
}

export default App
