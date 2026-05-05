import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from '../Components/Sidebar'

const Home = () => {
   let navigate= useNavigate();
  const categories = ["Web Dev", "JavaScript", "React", "Java", "Python", "DSA", "AI"];
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* ── Ambient glow blobs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-180px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(79,70,229,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-100px",
          left: "10%",
          width: "500px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          right: "0%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
 
      {/* ── Dot-grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />
 
      {/* ── Hero Section ── */}
      <section className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
 
        {/* Eyebrow badge */}
        <div
          className="mb-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.25)",
            color: "#a5b4fc",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#818cf8" }}
          />
          You’ve Entered the World of Z-Coding
        </div>
 
        {/* Main heading */}
        <h1
          className="font-black leading-[1.04] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(120deg, #38bdf8 0%, #818cf8 40%, #c084fc 100%)",
              filter: "drop-shadow(0 0 48px rgba(129,140,248,0.6))",
            }}
          >
            Level Up Your
          </span>
          <span className="block" style={{ color: "#f1f5f9" }}>
            Coding Skills
          </span>
        </h1>
 
        {/* Subheading */}
        <p
          className="text-lg sm:text-xl max-w-xl mb-10 leading-relaxed font-light"
          style={{ color: "#64748b" }}
        >
          Explore curated courses for{" "}
          <span style={{ color: "#94a3b8", fontWeight: 500 }}>Web Dev, DSA, AI</span>{" "}
          and more — Learn from the best coding creators on YouTube.
        </p>
 
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <button
            className="relative px-8 py-3.5 rounded-2xl font-semibold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:cursor-pointer active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #0891b2 100%)",
              boxShadow: "0 0 32px rgba(99,102,241,0.5), 0 0 80px rgba(99,102,241,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 48px rgba(99,102,241,0.7), 0 0 100px rgba(99,102,241,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 32px rgba(99,102,241,0.5), 0 0 80px rgba(99,102,241,0.15)";
            }}
            onClick={()=>{
            navigate('/courses')
        }}
          >
            Explore Courses
          </button>
 
          <button
            className="px-8 py-3.5 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] hover:cursor-pointer active:scale-[0.98]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "1px solid rgba(99,102,241,0.5)";
              e.currentTarget.style.color = "#e2e8f0";
              e.currentTarget.style.background = "rgba(99,102,241,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
            onClick={()=>{
            navigate('/projects')
        }}
          >
            Start Building →
          </button>
        </div>
 
   
 
        {/* ── Quick Categories ── */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-2xl text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#64748b",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(79,70,229,0.2), rgba(124,58,237,0.2))";
                e.currentTarget.style.border = "1px solid rgba(124,58,237,0.45)";
                e.currentTarget.style.color = "#e2e8f0";
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {cat}
            </button>
          ))}
        </div>
 
        {/* ── Social proof ── */}
        <div
          className="mt-14 flex flex-wrap justify-center items-center gap-3 text-xs"
          style={{ color: "#334155" }}
        >
          <div className="flex -space-x-2">
            {[
              "rgba(99,102,241,0.9)",
              "rgba(124,58,237,0.9)",
              "rgba(6,182,212,0.9)",
              "rgba(236,72,153,0.9)",
            ].map((bg, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full"
                style={{ background: bg, border: "2px solid #000" }}
              />
            ))}
          </div>
          <span>
            <span style={{ color: "#94a3b8", fontWeight: 500 }}>12,400+</span>{" "}
            learners already enrolled
          </span>
          <span style={{ color: "#1e293b" }}>·</span>
          <span style={{ color: "rgba(234,179,8,0.7)" }}>★★★★★</span>
          <span style={{ color: "#475569" }}>4.9 avg rating</span>
        </div>
      </section>
    </div>
  );
}

export default Home
