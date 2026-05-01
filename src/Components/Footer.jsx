
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Github, ArrowUpRight, Cpu, ShieldCheck } from "lucide-react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";


export default function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update clock every second for that "Live System" feel
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/senthil-kumar-m-04048a2b0/" },
    { name: "GitHub", icon: <Github size={16} />, href: "https://github.com/SENTHILKUMAR-M25" },
 
  ];

  return (
    <footer className="relative w-full bg-[#050505] border-t border-zinc-900 pt-20 pb-10 px-6 overflow-hidden">
      {/* 1. Structural Red Grid Overlay (Consistency with Arsenal/About) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#cc0000_1px,transparent_1px),linear-gradient(to_bottom,#cc0000_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Crimson Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Brand & Status */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border border-red-600/30 flex items-center justify-center bg-red-600/5 rotate-45">
                <img src={logo} size={22} className="text-red-600 -rotate-45 animate-pulse" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                SK<span className="text-red-600 not-italic">.</span>CORE
              </span>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-medium italic">
              Building high-performance digital engines. Focused on 
              <span className="text-white"> sub-second latency</span>, 
              scalable architecture, and precision-engineered user interfaces.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-red-600 uppercase tracking-[0.3em] font-black">System_Clock</span>
                <span className="text-white font-mono text-sm uppercase font-bold">{time}</span>
              </div>
              <div className="w-[1px] h-8 bg-zinc-800" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-red-600 uppercase tracking-[0.3em] font-black">Link_Status</span>
                <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-zinc-300 font-mono text-sm uppercase font-bold">Encrypted_Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] font-black border-l-2 border-red-600 pl-3">Directory</h4>
            {/* <ul className="space-y-4">
              {["Home", "About", "Projects",  "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-zinc-400 hover:text-red-500 transition-all duration-300 text-xs font-black uppercase tracking-widest flex items-center group">
                    <span className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden text-red-600 italic">//</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul> */}
            <ul className="space-y-4">
  {["Home", "About", "Project", "Contact"].map((item) => (
    <li key={item}>
      <Link
        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
        className="text-zinc-400 hover:text-red-500 transition-all duration-300 text-xs font-black uppercase tracking-widest flex items-center group"
      >
        <span className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden text-red-600 italic">
          //
        </span>
        {item}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Column 3: Social & Connect */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em] font-black border-l-2 border-red-600 pl-3">Comm_Protocols</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-between p-4 border border-zinc-900 bg-zinc-900/30 hover:border-red-600/50 hover:bg-red-600/5 transition-all duration-500 group rounded-sm"
                >
                  <div className="flex items-center gap-3 text-zinc-500 group-hover:text-white transition-colors">
                    <span className="group-hover:text-red-500 transition-colors">{social.icon}</span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-black">{social.name}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-zinc-700 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
            
            <div className="pt-4">
               <button className="w-full py-4 border border-red-600/20 bg-red-600/5 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-2 italic">
                  <ShieldCheck size={14} /> Establish Connection
               </button>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
}