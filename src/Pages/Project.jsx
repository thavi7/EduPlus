import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import ProjectNav from '../Components/ProjectNav'
import ProjectList from '../Components/ProjectList';

const Project = () => {
  
  const [Save, setSave] = useState(false)
  const [skills, setSkills] = useState([])

  const projects = [

{title:"Personal Portfolio Website",
description:"Responsive personal portfolio to showcase projects and skills.",
category:["HTML","CSS"],
link:"https://github.com/topics/portfolio-website",
tag:"easy"},

{title:"Product Landing Page",
description:"Modern landing page with animations and responsive layout.",
category:["HTML","CSS"],
link:"https://github.com/topics/landing-page",
tag:"easy"},

{title:"Interactive Quiz App",
description:"Quiz application with scoring system and dynamic questions.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/quiz-app",
tag:"mid"},

{title:"Kanban Task Board",
description:"Drag-and-drop task management board like Trello.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/kanban-board",
tag:"hard"},

{title:"Weather Dashboard",
description:"Weather app using external API and dynamic UI updates.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/weather-app",
tag:"mid"},

{title:"Memory Card Game",
description:"Card matching game with animations and score tracking.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/memory-game",
tag:"mid"},

{title:"React Todo App",
description:"Simple task manager built with React hooks.",
category:["React"],
link:"https://github.com/topics/react-todo-app",
tag:"easy"},

{title:"React Blog Platform",
description:"Blog website with post creation and dynamic routing.",
category:["React"],
link:"https://github.com/topics/react-blog",
tag:"mid"},

{title:"React E-commerce UI",
description:"Frontend for an online store with product filtering.",
category:["React"],
link:"https://github.com/topics/react-ecommerce",
tag:"hard"},

{title:"Node.js REST API",
description:"Backend API for managing users and posts.",
category:["Node.js","Express"],
link:"https://github.com/topics/node-api",
tag:"easy"},

{title:"Chat Application",
description:"Real-time chat app using Node.js and WebSockets.",
category:["Node.js","Express"],
link:"https://github.com/topics/chat-application",
tag:"hard"},

{title:"URL Shortener",
description:"Service that converts long URLs into short ones.",
category:["Node.js","Express"],
link:"https://github.com/topics/url-shortener",
tag:"mid"},

{title:"Django Blog",
description:"Full-featured blogging platform with authentication.",
category:["Python","Django"],
link:"https://github.com/topics/django-blog",
tag:"mid"},

{title:"Django E-commerce",
description:"Online store with payment integration.",
category:["Python","Django"],
link:"https://github.com/topics/django-ecommerce",
tag:"hard"},

{title:"Task Manager API",
description:"Backend service for task tracking using Django REST.",
category:["Python","Django"],
link:"https://github.com/topics/task-manager",
tag:"easy"},

{title:"Java CLI Library Manager",
description:"Command-line library management system.",
category:["Java"],
link:"https://github.com/topics/library-management",
tag:"easy"},

{title:"Java Chat Server",
description:"Multi-user chat server using sockets.",
category:["Java"],
link:"https://github.com/topics/java-chat",
tag:"hard"},

{title:"Java Spring Boot REST API",
description:"RESTful API with database integration.",
category:["Java","SpringBoot"],
link:"https://github.com/topics/spring-boot-api",
tag:"mid"},

{title:"Spring Boot E-commerce Backend",
description:"Backend system for managing products and orders.",
category:["Java","SpringBoot"],
link:"https://github.com/topics/spring-ecommerce",
tag:"hard"},

{title:"Python File Organizer",
description:"Script that automatically sorts files into folders.",
category:["Python"],
link:"https://github.com/topics/file-organizer",
tag:"easy"},

{title:"Python Web Scraper",
description:"Tool that collects data from websites automatically.",
category:["Python"],
link:"https://github.com/topics/web-scraping",
tag:"mid"},

{title:"Machine Learning Movie Recommender",
description:"Recommendation engine using collaborative filtering.",
category:["Python"],
link:"https://github.com/topics/recommendation-system",
tag:"hard"},

{title:"C++ Console Snake Game",
description:"Classic snake game in terminal using C++.",
category:["C++"],
link:"https://github.com/topics/snake-game",
tag:"easy"},

{title:"C++ File Compression Tool",
description:"Implement Huffman coding compression algorithm.",
category:["C++"],
link:"https://github.com/topics/huffman-coding",
tag:"hard"},

{title:"C++ Student Management System",
description:"System to store and manage student records.",
category:["C++"],
link:"https://github.com/topics/student-management",
tag:"mid"},

{title:"DSA Visualizer",
description:"Visual tool for sorting algorithms.",
category:["DSA","JS"],
link:"https://github.com/topics/algorithm-visualizer",
tag:"mid"},

{title:"Pathfinding Visualizer",
description:"Interactive visualization for BFS, DFS, A* algorithms.",
category:["DSA","JS"],
link:"https://github.com/topics/pathfinding",
tag:"hard"},

{title:"Sorting Visualizer",
description:"Visualization of bubble, merge, and quick sort.",
category:["DSA","JS"],
link:"https://github.com/topics/sorting-visualizer",
tag:"easy"},

{title:"Full Stack Blog",
description:"Blog platform with frontend, backend, and database.",
category:["React","Node.js","Express"],
link:"https://github.com/topics/fullstack-blog",
tag:"mid"},

{title:"Full Stack Chat App",
description:"Real-time messaging system with authentication.",
category:["React","Node.js","Express"],
link:"https://github.com/topics/fullstack-chat",
tag:"hard"},

{title:"Full Stack Todo App",
description:"Task manager with persistent database storage.",
category:["React","Node.js","Express"],
link:"https://github.com/topics/fullstack-todo",
tag:"easy"},

{title:"React + Django Dashboard",
description:"Admin dashboard with charts and analytics.",
category:["React","Django"],
link:"https://github.com/topics/dashboard-app",
tag:"mid"},

{title:"Online Code Editor",
description:"Browser-based code editor supporting multiple languages.",
category:["React","Node.js"],
link:"https://github.com/topics/code-editor",
tag:"hard"},

{title:"E-learning Platform",
description:"Course management system with progress tracking.",
category:["React","Node.js","Express"],
link:"https://github.com/topics/elearning-platform",
tag:"hard"},

{title:"Expense Tracker",
description:"Personal finance tracker with charts and reports.",
category:["React","Node.js"],
link:"https://github.com/topics/expense-tracker",
tag:"mid"},

{title:"Markdown Notes App",
description:"Notes application with markdown support.",
category:["React"],
link:"https://github.com/topics/markdown-editor",
tag:"easy"},

{title:"Recipe Finder",
description:"Search recipes using a public API.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/recipe-app",
tag:"easy"},

{title:"Fitness Tracker",
description:"Track workouts and health stats with charts.",
category:["React","Node.js"],
link:"https://github.com/topics/fitness-tracker",
tag:"mid"},

{title:"Collaborative Whiteboard",
description:"Real-time drawing board using WebSockets.",
category:["React","Node.js"],
link:"https://github.com/topics/whiteboard-app",
tag:"hard"},
{title:"Responsive Pricing Table",
description:"Build a responsive pricing section with modern UI cards and hover effects.",
category:["HTML","CSS"],
link:"https://github.com/topics/pricing-table",
tag:"easy"},

{title:"Random Quote Generator",
description:"Generate random quotes using JavaScript and an external API.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/quote-generator",
tag:"easy"},

{title:"Password Generator",
description:"Generate secure passwords with customizable length and symbols.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/password-generator",
tag:"easy"},

{title:"React Counter Dashboard",
description:"Create a dashboard with multiple counters using React hooks.",
category:["React"],
link:"https://github.com/topics/react-counter",
tag:"easy"},

{title:"Node.js File Upload API",
description:"Backend API allowing users to upload files to a server.",
category:["Node.js","Express"],
link:"https://github.com/topics/file-upload",
tag:"easy"},

{title:"Python Password Strength Checker",
description:"CLI tool that evaluates password security.",
category:["Python"],
link:"https://github.com/topics/password-checker",
tag:"easy"},

{title:"C++ Number Guessing Game",
description:"Console game where user guesses randomly generated numbers.",
category:["C++"],
link:"https://github.com/topics/guessing-game",
tag:"easy"},

{title:"DSA Stack Visualizer",
description:"Interactive visualization of stack push and pop operations.",
category:["DSA","JS"],
link:"https://github.com/topics/stack-visualizer",
tag:"easy"},

{title:"React Movie Search App",
description:"Search movies using a public API and display results.",
category:["React"],
link:"https://github.com/topics/movie-search",
tag:"mid"},

{title:"Blog Comment System",
description:"Add commenting functionality with backend storage.",
category:["Node.js","Express"],
link:"https://github.com/topics/comment-system",
tag:"mid"},

{title:"Online Markdown Editor",
description:"Editor that converts markdown text to live preview HTML.",
category:["HTML","CSS","JS"],
link:"https://github.com/topics/markdown-editor",
tag:"mid"},

{title:"Django Authentication System",
description:"User login, registration and password reset system.",
category:["Python","Django"],
link:"https://github.com/topics/django-authentication",
tag:"mid"},

{title:"React Kanban Board",
description:"Task board with drag and drop cards.",
category:["React"],
link:"https://github.com/topics/react-kanban",
tag:"mid"},

{title:"Spring Boot Task Manager",
description:"Backend REST service for task management.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/spring-task-manager",
tag:"mid"},

{title:"Java Multithreading Downloader",
description:"Download files concurrently using multiple threads.",
category:["Java"],
link:"https://github.com/topics/java-multithreading",
tag:"mid"},

{title:"C++ Graph Traversal Tool",
description:"Implement BFS and DFS traversal visualizer.",
category:["C++","DSA"],
link:"https://github.com/topics/graph-algorithms",
tag:"mid"},

{title:"Full Stack Notes App",
description:"Notes app with React frontend and Node backend.",
category:["React","Node.js","Express"],
link:"https://github.com/topics/fullstack-notes",
tag:"mid"},

{title:"React Image Gallery",
description:"Gallery with image search and lazy loading.",
category:["React"],
link:"https://github.com/topics/image-gallery",
tag:"mid"},

{title:"Real-time Collaboration Editor",
description:"Google Docs style editor using WebSockets.",
category:["React","Node.js"],
link:"https://github.com/topics/collaborative-editor",
tag:"hard"},

{title:"Full Stack Social Media App",
description:"Users can post, like, and comment in a social platform.",
category:["React","Node.js","Express"],
link:"https://github.com/topics/social-media-app",
tag:"hard"},

{title:"Distributed Web Crawler",
description:"Python crawler that indexes multiple websites.",
category:["Python"],
link:"https://github.com/topics/web-crawler",
tag:"hard"},

{title:"Django Real-time Notification System",
description:"Push notifications using Django channels.",
category:["Python","Django"],
link:"https://github.com/topics/django-notifications",
tag:"hard"},

{title:"Java Distributed Chat Server",
description:"Multi-server chat system using Java networking.",
category:["Java"],
link:"https://github.com/topics/java-chat-server",
tag:"hard"},

{title:"Spring Boot Microservices App",
description:"Microservice architecture with service discovery.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/microservices",
tag:"hard"},

{title:"AI Chatbot Web App",
description:"Build chatbot interface using React and backend AI service.",
category:["React","Node.js"],
link:"https://github.com/topics/chatbot",
tag:"hard"},

{title:"Advanced Pathfinding Simulator",
description:"Compare multiple pathfinding algorithms visually.",
category:["DSA","JS"],
link:"https://github.com/topics/pathfinding-visualizer",
tag:"hard"},

{title:"C++ Game Engine Prototype",
description:"Basic 2D game engine architecture in C++.",
category:["C++"],
link:"https://github.com/topics/game-engine",
tag:"hard"},

{title:"Full Stack Video Streaming Platform",
description:"YouTube-like platform with upload and streaming.",
category:["React","Node.js","Express"],
link:"https://github.com/topics/video-streaming",
tag:"hard"},

{title:"Algorithm Benchmark Tool",
description:"Compare performance of sorting and searching algorithms.",
category:["DSA","C++"],
link:"https://github.com/topics/algorithm-analysis",
tag:"mid"},

{title:"Personal Knowledge Base",
description:"Full stack note-taking system with tagging and search.",
category:["React","Node.js"],
link:"https://github.com/topics/knowledge-base",
tag:"mid"},
{title:"Spring Boot Hello World API",
description:"Create a simple REST API returning basic JSON responses.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/spring-boot-rest-api",
tag:"easy"},

{title:"Spring Boot CRUD Application",
description:"Basic CRUD application with REST endpoints and in-memory database.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/spring-boot-crud",
tag:"easy"},

{title:"Spring Boot Student Management",
description:"Backend for managing students with create, update, delete, and list APIs.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/student-management",
tag:"easy"},

{title:"Spring Boot REST API with MySQL",
description:"Build REST services connected to a MySQL database.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/spring-boot-mysql",
tag:"easy"},

{title:"Spring Boot Logging System",
description:"Implement application logging with Spring Boot and Logback.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/spring-logging",
tag:"easy"},

{title:"Spring Boot Authentication System",
description:"Add login and registration using Spring Security.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/spring-security",
tag:"mid"},

{title:"Spring Boot Blog Backend",
description:"Backend API for blog posts with comments and users.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/spring-blog",
tag:"mid"},

{title:"Spring Boot Task Manager API",
description:"Create REST API to manage tasks with status and deadlines.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/task-manager",
tag:"mid"},

{title:"Spring Boot File Upload System",
description:"Upload and download files using REST endpoints.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/file-upload",
tag:"mid"},

{title:"Spring Boot Email Notification Service",
description:"Send automated emails using Spring Mail.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/email-service",
tag:"mid"},

{title:"Spring Boot JWT Authentication",
description:"Secure APIs using JWT tokens and Spring Security.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/jwt-authentication",
tag:"mid"},

{title:"Spring Boot URL Shortener",
description:"Service that generates short links for long URLs.",
category:["Java","Spring Boot"],
link:"https://github.com/topics/url-shortener",
tag:"mid"},
{title:"Advanced Algorithm Visualizer",
description:"Interactive platform visualizing complex algorithms like A*, Dijkstra, Floyd Warshall, and dynamic programming solutions.",
category:["DSA","JS"],
link:"https://github.com/topics/algorithm-visualizer",
tag:"hard"},

{title:"LeetCode Problem Analyzer",
description:"Tool that analyzes LeetCode problems and suggests optimal algorithm strategies and complexity comparisons.",
category:["DSA","Python"],
link:"https://github.com/topics/leetcode",
tag:"hard"},

{title:"Distributed Graph Processing Simulator",
description:"Simulation system for processing massive graphs using distributed algorithms and parallel traversal techniques.",
category:["DSA","Python"],
link:"https://github.com/topics/graph-algorithms",
tag:"hard"},

{title:"AI Coding Assistant",
description:"AI-powered tool that helps developers write, refactor, and debug code using generative AI models.",
category:["Python","GenAI"],
link:"https://github.com/topics/ai-coding-assistant",
tag:"hard"},

{title:"AI Research Paper Summarizer",
description:"Upload academic papers and automatically generate concise summaries using large language models.",
category:["Python","GenAI"],
link:"https://github.com/topics/research-paper-summarizer",
tag:"hard"},

{title:"AI Multi-Document Q&A System",
description:"System allowing users to upload multiple documents and ask questions ",
category:["Python","GenAI"],
link:"https://github.com/topics/rag",
tag:"hard"},

{title:"AI Codebase Understanding Tool",
description:"Tool that analyzes entire repositories  and code structure using generative AI.",
category:["Python","GenAI"],
link:"https://github.com/topics/code-analysis",
tag:"hard"},

{title:"Deep Learning Image Caption Generator",
description:"Neural network model that generates descriptive captions automatically for uploaded images.",
category:["Python","Data Science"],
link:"https://github.com/topics/image-captioning",
tag:"hard"},

{title:"Fraud Detection System",
description:"Machine learning system that detects fraudulent transactions using anomaly detection",
category:["Python","Data Science"],
link:"https://github.com/topics/fraud-detection",
tag:"hard"},

{title:"Real-Time Recommendation Engine",
description:"Advanced recommendation system using collaborative filtering and deep learning for personalized suggestions.",
category:["Python","Data Science"],
link:"https://github.com/topics/recommendation-system",
tag:"hard"},
{title:"Simple Notes Mobile App",
description:"Basic mobile notes application where users can create, edit, and delete notes locally.",
category:["App Dev","Kotlin"],
link:"https://github.com/topics/android-notes-app",
tag:"easy"},

{title:"Weather App (Android)",
description:"Android app that fetches and displays weather information using a public API.",
category:["App Dev","Kotlin"],
link:"https://github.com/topics/android-weather-app",
tag:"easy"},

{title:"Basic Calculator App",
description:"Mobile calculator application implementing basic arithmetic operations.",
category:["App Dev","Kotlin"],
link:"https://github.com/topics/android-calculator",
tag:"easy"},

{title:"MERN Todo App",
description:"Simple todo list with CRUD operations using MongoDB, Express, React, and Node.js.",
category:["MERN","React","Node.js","Express"],
link:"https://github.com/topics/mern-todo",
tag:"easy"},

{title:"User Login System (MERN)",
description:"Basic authentication system with signup and login using MERN stack.",
category:["MERN","React","Node.js","Express"],
link:"https://github.com/topics/mern-auth",
tag:"easy"},

{title:"Go CLI Task Manager",
description:"Command-line task manager written in Go that lets users add, list, and remove tasks.",
category:["Go"],
link:"https://github.com/topics/go-cli",
tag:"easy"},

{title:"Go REST API Starter",
description:"Simple REST API built with Go that handles basic GET and POST requests.",
category:["Go"],
link:"https://github.com/topics/go-rest-api",
tag:"easy"},

{title:"MERN Blog Starter",
description:"Beginner MERN project allowing users to create and view simple blog posts.",
category:["MERN","React","Node.js","Express"],
link:"https://github.com/topics/mern-blog",
tag:"easy"}

];

const skillFilteredProjects =
skills.length === 0
? projects
: projects.filter(project =>project.category.some(sk =>skills.includes(sk.toUpperCase())
  )
)

const easyProjects = skillFilteredProjects.filter(p => p.tag === "easy")
const midProjects = skillFilteredProjects.filter(p => p.tag === "mid")
const hardProjects = skillFilteredProjects.filter(p => p.tag === "hard")


  return (
    <div className='bg-[#101022] w-full h-auto min-h-screen text-white p-6'>
      <ProjectNav skills={skills} setSkills={setSkills} />
      <div className="pro flex justify-between items-start gap-3 mt-60">

        <div className="easy w-[33.33%] flex flex-col gap-5 ">

            <div className='flex   justify-between items-center p-2'>
                <h2> <div className='h-3 w-3 rounded-full bg-[#10B981] inline-block mr-2'></div>EASY</h2>
                <div className="time rounded-[5px] w-[18%] h-[8%] bg-[#10212C] text-[12px] text-[#10B981] text-shadow-2xs flex justify-center items-center"><p>Idea {easyProjects.length}</p></div>
            </div>  

       {easyProjects.map((project, index) => (
  <ProjectList
    key={index}
    title={project.title}
    description={project.description}
    category={project.category}
    tag={project.tag}
    link={project.link}
  />
))}
    
          </div>


        <div className="mid w-[33.33%] flex flex-col gap-5">
                  <div className='flex justify-between items-center p-2'>
          <h2> <div className='h-3 w-3 rounded-full bg-[#F59E0B] inline-block mr-2'></div>MEDIUM</h2>
          <div className="time rounded-[5px] w-[18%] h-[8%] bg-[#10212C] text-[12px] text-[#F59E0B] text-shadow-2xs flex justify-center items-center"><p>Idea {midProjects.length}</p></div>
        </div> 
      
      {midProjects.map((project, index) => (
  <ProjectList
    key={index}
    title={project.title}
    description={project.description}
    category={project.category}
    tag={project.tag}
    link={project.link}
  />
))}
     

        </div>


        <div className="hard w-[33.33%] flex flex-col gap-5">
                  <div className='flex justify-between items-center p-2'>
          <h2> <div className='h-3 w-3 rounded-full bg-[  #F43F5E] inline-block mr-2'></div>HARD</h2>
          <div className="time rounded-[5px] w-[18%] h-[8%] bg-[#10212C] text-[12px] text-[#F43F5E] text-shadow-2xs flex justify-center items-center"><p>Idea {hardProjects.length}</p></div>
        </div> 
      
  {hardProjects.map((project, index) => (
  <ProjectList
    key={index}
    title={project.title}
    description={project.description}
    category={project.category}
    tag={project.tag}
    link={project.link}
  />
))}

        </div>
      </div>
    </div>
  )
}

export default Project
