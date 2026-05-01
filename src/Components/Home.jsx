import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { 
  RiReactjsLine, 
  RiTailwindCssLine, 
  RiNodejsLine 
} from "react-icons/ri";
import { SiTypescript, SiFramer, SiNextdotjs } from "react-icons/si";
import { Link } from "react-router-dom";
/* ==========================================================
   1. AMBIENT FLOATING ICON COMPONENT
========================================================== */
const FloatingIcon = ({ Icon, color, top, left, delay = 0, depth = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 0.08,
        scale: 1,
        y: [0, -15, 0],
      }}
      transition={{ 
        duration: 4 + Math.random() * 2, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      style={{ 
        position: "absolute", 
        top, 
        left, 
        color,
        filter: `blur(${depth - 1}px)`,
        zIndex: 0 
      }}
      className="text-5xl md:text-7xl pointer-events-none select-none hidden lg:block"
    >
      <Icon />
    </motion.div>
  );
};

/* ==========================================================
   2. TYPEWRITER
========================================================== */
const words = ["Frontend Systems", "Modern Interfaces", "React Architectures", "Digital Products"];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <span className="relative inline-block text-red-500 font-mono">
      {words[index].substring(0, subIndex)}
      <span className="absolute -right-1 top-0 h-full w-[2px] bg-red-500 animate-pulse" />
    </span>
  );
}

/* ==========================================================
   3. MAIN HERO COMPONENT
========================================================== */
export default function PortfolioHero() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const springConfig = { stiffness: 60, damping: 25 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  const bgX = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const fgX = useTransform(mouseX, [-0.5, 0.5], [45, -45]);
  const fgY = useTransform(mouseY, [-0.5, 0.5], [45, -45]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center selection:bg-red-500/30"
    >
     

      {/* Red Glow */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/20 rounded-full blur-[120px]" />
      </motion.div>

      {/* Floating Icons */}
      {!prefersReducedMotion && (
        <>
          <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0">
            <FloatingIcon Icon={RiReactjsLine} color="#61DAFB" top="15%" left="12%" depth={2.5} />
            <FloatingIcon Icon={SiNextdotjs} color="#ffffff" top="75%" left="15%" depth={3} delay={1} />
            <FloatingIcon Icon={RiNodejsLine} color="#339933" top="20%" left="80%" depth={2.8} delay={0.5} />
          </motion.div>
          
          <motion.div style={{ x: fgX, y: fgY }} className="absolute inset-0">
            <FloatingIcon Icon={SiTypescript} color="#3178C6" top="65%" left="78%" depth={1} delay={2} />
            <FloatingIcon Icon={SiFramer} color="#BB44FF" top="12%" left="65%" depth={1.2} delay={1.5} />
            <FloatingIcon Icon={RiTailwindCssLine} color="#06B6D4" top="55%" left="8%" depth={1.5} delay={0.8} />
          </motion.div>
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center text-center">
        
        <motion.h1 className="text-slate-400 text-lg mb-4">
          I Am <span className="text-red-600 font-semibold text-2xl">Senthil Kumar</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Building high-performance <br />
          <TypewriterText />
        </motion.h2>

        {/* Green Accent Line */}
        <div className="mt-6 h-[2px] w-20 bg-green-500/60"></div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed"
        >
          I am a Software Engineer focused on building <span className="text-white font-medium">scalable frontend systems</span> and polished user experiences with modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <button className="group relative px-8 py-4 rounded-xl bg-red-600 text-white font-bold transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]">
            <Link to="/project">View My Projects</Link>
          </button>

          <button className="px-8 py-4 rounded-xl border border-red-600/40 bg-transparent text-red-500 font-semibold transition-all hover:bg-red-600 hover:text-white active:scale-[0.98]">
            <Link to="/contact">Get in touch</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
}