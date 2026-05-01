import React from "react";
import { motion } from "framer-motion";
import ExperienceEducation from './Education';
import resume from '../assets/Resume.pdf';

const StatItem = ({ label, value }) => (
  <div className="flex flex-col gap-1 group">
    <span className="text-3xl font-black text-white leading-none group-hover:text-red-600 transition-colors duration-300 italic">
      {value}
    </span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">
      {label}
    </span>
  </div>
);

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32 px-6 text-zinc-200">
      
      {/* 1. Structural Red Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#cc0000_1px,transparent_1px),linear-gradient(to_bottom,#cc0000_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Crimson Ambient Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-zinc-900 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             {/* Large Watermark Text */}
             <h2 className="absolute -top-12 -left-4 text-[8rem] font-black uppercase tracking-tighter opacity-[0.03] select-none pointer-events-none italic"
                style={{ WebkitTextStroke: '1px #dc2626', color: 'transparent' }}>
              PROFILE
            </h2>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
              About <span className="text-red-600 not-italic">Me</span>
            </h2>
          </motion.div>
         
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-start">

          {/* Left: Interactive Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h3 className="mb-8 text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-[0.9] italic">
              Forging interfaces through <br />
              <span className="text-red-600 not-italic">precision and logic.</span>
            </h3>

            <div className="space-y-6 text-lg leading-relaxed text-zinc-400 font-medium">
              <p>
                I am a  Frontend Developer obsessed with building 
                <span className="text-white font-bold"> high-performance, design-centric web systems</span>. 
                My methodology aligns with the aggressive speed of modern tech: no bloat, just pure optimization.
              </p>
              <p>
                Specializing in the React ecosystem, I engineer 
                <span className="text-red-500 font-bold italic"> low-latency interactions </span> 
                and scalable architectures. I don't just develop apps; I craft the 
                digital core of modern user experiences.
              </p>
            </div>

            {/* Signature Area (Red Gradient) */}
            <div className="mt-12">
               <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="block text-6xl font-signature bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent drop-shadow-[0_4px_15px_rgba(220,38,38,0.4)]"
              >
                Senthil Kumar
              </motion.span>
            </div>
            
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 sticky top-24"
          >
            <div className="relative group">
              {/* Crimson Energy Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-950 via-red-600 to-red-900 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative rounded-2xl border border-white/5 bg-[#0a0a0a] p-10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 mb-8">
                    <div className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-red-600 italic">
                      SYSTEM_STATUS
                    </h4>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Deployment Node", val: "India, Remote" },
                    { label: "Designation", val: "Frontend Architect" },
                    { label: "Availability", val: "Active for Projects" },
                  ].map((info, i) => (
                    <div key={i} className="flex flex-col gap-1.5 border-b border-zinc-900 pb-5 last:border-0">
                      <span className="text-[10px] uppercase text-zinc-600 font-black tracking-widest">{info.label}</span>
                      <span className="text-white font-bold tracking-tight">{info.val}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={resume}
                  className="mt-12 group flex items-center justify-center w-full rounded-lg bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                 download="Senthil_Kumar_Resume.pdf">
                  Retrieve Resume.exe
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Experience Section Spacing */}
      <div className="relative mt-10">
        <ExperienceEducation />
      </div>
    </section>
  );
}