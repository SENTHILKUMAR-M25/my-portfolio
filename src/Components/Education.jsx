
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FrontendSkills from "./Skill";

const data = {
  experience: [
    { year: "2025 — Present", title: " UI Developer", company: "Yaaraa Technologies", desc: "Spearheading the transition to motion-driven interfaces and modular design systems using React and Framer Motion." },
    { year: "2025 — Present", title: "Product Designer", company: "Yaaraa Technologies", desc: "Developed user-centric flows for high-traffic SaaS platforms with a focus on accessibility and WCAG compliance." },
  ],
  education: [
    { year: "2018 — 2021", title: "B.Tech IT", company: "Sethu Institute of Technology", desc: "Focused on Computer Science fundamentals, Software Engineering, and Advanced UI Architecture." },
    { year: "2019 — 2021",title: "Diploma in Electrical & Electronics Engineering",company: "Sri Sowdambika Polytechnic College",desc: "Focused on core subjects including Electrical Machines, Power Systems, Circuit Theory, and Industrial Electronics. Actively involved in technical workshops and hands-on lab projects."},
    { year: "2017 — 2019", title: "Higher Secondary Education (HSC)", company: "Government Higher Secondary School", desc: "Specialized in Mathematics and Science stream. Developed strong analytical and problem-solving foundations that later supported my engineering and software development journey."},
  ]
};

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="relative pl-8 pb-12 last:pb-0 group"
  >
    {/* Crimson Timeline Rail */}
    <div className="absolute left-0 top-0 h-full w-px bg-zinc-800 group-last:h-2" />
    
    {/* Node Dot - Animated to look like your logo's sharp style */}
    <div className="absolute -left-1.25 top-2 h-2.5 w-2.5 rounded-sm bg-red-600 rotate-45 border border-black shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-500 group-hover:scale-150 group-hover:bg-white" />

    <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
      {item.year}
    </span>
    
    <h3 className="text-2xl font-black text-white mt-1 tracking-tight group-hover:text-red-500 transition-colors">
      {item.title.toUpperCase()}
    </h3>
    
    <div className="flex items-center gap-2 mt-1 mb-4">
        <div className="h-px w-4 bg-red-600" />
        <p className="text-red-500 text-xs font-bold uppercase tracking-widest">
          {item.company}
        </p>
    </div>
    
    <p className="text-zinc-400 leading-relaxed text-sm max-w-xl font-medium">
      {item.desc}
    </p>
  </motion.div>
);

export default function EnhancedCV() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="bg-[#050505] text-white py-24 px-6 relative overflow-hidden">
      {/* Brand Background Glows */}
      <div className="absolute top-0 right-0 w-150 h-[600px] bg-red-600/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-900/[0.05] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-zinc-900 pb-12">
          <div>
            <h2 className="text-6xl font-black tracking-tighter italic uppercase">
                History<span className="text-red-600 not-italic">.</span>
            </h2>
            <p className="text-zinc-500 mt-2 font-mono text-sm tracking-widest uppercase opacity-70">
                // Professional_Logs / {activeTab}_v2.0
            </p>
          </div>

          {/* Crimson Liquid Tab Switcher */}
          <div className="flex p-1  bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-white/5 relative">
            {["experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 md:px-10 py-3 text-xs font-black uppercase tracking-[0.2em] z-10 transition-all duration-500 ${
                  activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabCV"
                    className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 rounded-lg z-[-1] shadow-[0_0_20px_rgba(185,28,28,0.3)]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Background Title (The big transparent "S" style text) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32">
            <h3 className="text-[12rem] font-black uppercase leading-none opacity-[0.05] select-none pointer-events-none absolute -left-10 top-0"
                style={{ WebkitTextStroke: '2px #dc2626', color: 'transparent' }}>
              {activeTab.slice(0, 4)}
            </h3>
            <div className="relative pt-24 pl-4 border-l-2 border-red-600">
              <p className="text-[10px] text-red-500 font-mono tracking-[0.4em] uppercase mb-4 italic font-bold">Deploying_Sequence</p>
              <h4 className="text-4xl font-black leading-[0.9] text-white italic">
                {activeTab === "experience" ? "CAREER MILESTONES" : "ACADEMIC ROOTS"}
              </h4>
            </div>
          </div>

          {/* Right: The Timeline Scroll */}
          <div className="lg:col-span-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[3rem] p-8 md:p-20 backdrop-blur-3xl shadow-2xl relative">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.4 }}
               >
                 {data[activeTab].map((item, i) => (
                   <TimelineItem key={i} item={item} index={i} />
                 ))}
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <FrontendSkills />
      </div>
    </div>
  );
}