

import React from "react";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "REACT / ", value: 95, color: "from-red-900 via-red-600 to-red-500", sub: "Hooks, SSR, Performance Architect" },
  { name: "TYPESCRIPT", value: 90, color: "from-zinc-800 via-red-700 to-red-600", sub: "Generics, Advanced Type Patterns" },
  { name: "TAILWIND CSS", value: 98, color: "from-red-800 via-red-600 to-red-400", sub: "Design Systems, Utility-First Architecture" },
  { name: "STATE MANAGEMENT", value: 85, color: "from-red-950 via-red-800 to-red-600", sub: "Redux Toolkit" },
];

export default function FrontendSkills() {
  return (
    <section className="bg-[#050505] py-32 px-6 relative overflow-hidden">
      {/* 1. Structural Red Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#cc0000_1px,transparent_1px),linear-gradient(to_bottom,#cc0000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="relative">
            {/* Logo-Style Background Stroke */}
            <h2 className="absolute -top-16 -left-2 text-[10rem] font-black uppercase tracking-tighter opacity-[0.03] select-none whitespace-nowrap pointer-events-none italic"
                style={{ WebkitTextStroke: '1px #dc2626', color: 'transparent' }}>
              ARSENAL
            </h2>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-px w-10 bg-red-600" />
               <span className="text-red-500 font-mono text-[10px] tracking-[0.5em] uppercase font-black">System_Specs</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none italic">
              Tech <span className="text-red-600 not-italic">Stack</span>
            </h3>
          </div>
          
          <p className="max-w-xs text-zinc-500 text-sm font-medium leading-relaxed border-l-2 border-red-600/30 pl-6 italic">
            Engineered for speed. Developed for impact. Utilizing a high-performance stack for modern web architecture.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {frontendSkills.map((skill, i) => (
            <motion.div 
              key={skill.name} 
              className="group relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-end mb-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-red-500/80 uppercase tracking-widest font-black italic">
                    {`>> ${skill.sub}`}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-red-500 transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
                <div className="flex flex-col items-end">
                   <span className="text-sm font-mono text-zinc-600 group-hover:text-red-500 transition-colors font-bold">
                      {skill.value}%
                   </span>
                </div>
              </div>

              {/* Crimson Progress Container */}
              <div className="relative h-2 w-full bg-zinc-900 rounded-sm overflow-hidden border border-white/5">
                {/* Background Track Segments */}
                <div className="absolute inset-0 flex justify-between px-1 opacity-20 pointer-events-none z-10">
                   {[...Array(15)].map((_, j) => (
                     <div key={j} className="w-[1px] h-full bg-black" />
                   ))}
                </div>

                {/* Animated Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  className={`relative h-full bg-gradient-to-r ${skill.color} shadow-[0_0_20px_rgba(220,38,38,0.4)]`}
                >
                  {/* Leading Edge Spark */}
                  <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_#fff]" />
                  
                  {/* Fast Energy Pulse Effect */}
                  <motion.div 
                    animate={{ opacity: [0.2, 0.5, 0.2], x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/20 w-20 skew-x-12"
                  />
                </motion.div>
              </div>

              {/* System Meta-Data */}
              <div className="mt-3 flex items-center justify-between text-[8px] font-mono tracking-widest text-zinc-600 uppercase font-bold">
                 <div className="flex gap-2 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                    <span className="group-hover:text-red-500 transition-colors">Core_Active</span>
                 </div>
                 <div className="flex gap-4">
                    <span>SYNC_STABLE</span>
                    <span className="text-zinc-800">0x{skill.value}ADF9</span>
                 </div>
              </div>

              {/* Background Hover Glow */}
              <div className="absolute -inset-x-6 -inset-y-4 bg-red-600/[0.03] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}