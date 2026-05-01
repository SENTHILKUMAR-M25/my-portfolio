// import { useParams, Link } from "react-router-dom";
// import { motion, useScroll, useSpring } from "framer-motion";
// import projects from "../Project/Projectdata";
// import {
//   ExternalLink,
//   Github,
//   ArrowLeft,
//   Terminal,
//   Cpu,
//   Layout,
//   Sparkles,
//   Layers,
// } from "lucide-react";

// export default function ProjectDetail() {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id === id);

//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   if (!project) {
//     return (
//       <section className="min-h-screen pt-[10px] flex items-center justify-center bg-[#050505] text-white">
//         <div className="text-center">
//           <h2 className="text-6xl font-black mb-4 opacity-10 italic text-red-600">
//             404
//           </h2>
//           <p className="text-xl font-mono tracking-widest text-red-500 uppercase">
//             Project Not Found
//           </p>
//           <Link
//             to="/project"
//             className="mt-8 inline-block text-white border-b border-red-600 pb-1"
//           >
//             Return to base
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen pt-8 bg-[#050505] text-white pb-32 selection:bg-red-600/30">
//       {/* Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-50 origin-left"
//         style={{ scaleX }}
//       />

   

//       {/* HERO */}
//       <div className="relative h-[60vh] w-full overflow-hidden">
//         <motion.img
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.3 }}
//           transition={{ duration: 1.5 }}
//           src={project.image}
//           alt={project.title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

//         <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end px-6 pb-12">
//           <Link
//             to="/project"
//             className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-red-500 mb-6"
//           >
//             <ArrowLeft size={14} />
//             Back to Gallery
//           </Link>

//           <h1 className="text-5xl md:text-6xl font-bold uppercase italic">
//             {project.title}
//             <span className="text-red-600 not-italic">.</span>
//           </h1>

//           <p className="mt-6 text-xl text-slate-400 max-w-3xl">
//             {project.shortDesc}
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mt-20">
//         {/* LEFT */}
//         <div className="lg:col-span-8 space-y-20">
//           {/* Overview */}
//           <section>
//             <div className="flex items-center gap-3 mb-6">
//               <Terminal size={20} className="text-red-600" />
//               <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
//                 Execution_Summary
//               </h2>
//             </div>
//             <p className="text-lg text-slate-300 leading-relaxed">
//               {project.detailedDesc}
//             </p>
//           </section>

//           {/* MODULES */}
//           {project.modules &&
//             Object.entries(project.modules).map(([key, module], i) => (
//               <section key={i}>
//                 <div className="flex items-center gap-3 mb-8">
//                   <Layers size={20} className="text-red-600" />
//                   <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
//                     {module.title}
//                   </h2>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   {module.features?.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ x: 10 }}
//                       className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-600/40 transition-all"
//                     >
//                       <span className="text-red-600 font-mono text-xs mt-1">
//                         0{index + 1}
//                       </span>
//                       <p className="text-slate-400 hover:text-white transition-colors">
//                         {feature}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </section>
//             ))}

//           {/* Roles */}
//           {project.roles && (
//             <section>
//               <div className="flex items-center gap-3 mb-6">
//                 <Sparkles size={20} className="text-red-600" />
//                 <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
//                   System_Roles
//                 </h2>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {project.roles.map((role, i) => (
//                   <span
//                     key={i}
//                     className="px-4 py-2 text-xs font-mono uppercase bg-red-600/10 border border-red-600/20 text-red-400 rounded-md"
//                   >
//                     {role}
//                   </span>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Future Enhancements */}
//           {project.futureEnhancements && (
//             <section>
//               <div className="flex items-center gap-3 mb-6">
//                 <Sparkles size={20} className="text-red-600" />
//                 <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
//                   Future_Upgrades
//                 </h2>
//               </div>
//               <ul className="space-y-3 text-slate-400">
//                 {project.futureEnhancements.map((item, i) => (
//                   <li key={i}>• {item}</li>
//                 ))}
//               </ul>
//             </section>
//           )}
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <aside className="lg:col-span-4">
//           <div className="sticky top-24 p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]">
//             <div className="flex items-center gap-3 mb-6">
//               <Cpu size={18} className="text-red-600" />
//               <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
//                 Stack_Configuration
//               </h3>
//             </div>

//             <div className="flex flex-wrap gap-2 mb-8">
//               {project.techStack?.frontend?.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 text-[10px] font-mono uppercase bg-red-600/10 text-red-500 border border-red-600/20 rounded-md"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {project.liveDemo && (
//               <a
//                 href={project.liveDemo}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all mb-4"
//               >
//                 Launch Live System <ExternalLink size={16} />
//               </a>
//             )}

//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all"
//               >
//                 Open Repository <Github size={16} />
//               </a>
//             )}

//             <div className="mt-8 pt-6 border-t border-white/5 text-emerald-500 text-xs font-mono uppercase tracking-widest animate-pulse">
//               <Layout size={12} className="inline mr-2" />
//               System_Status: Operational
//             </div>
//           </div>
//         </aside>
//       </div>

     
//     </section>
//   );
// }




import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Terminal,
  Cpu,
  Layout,
  Sparkles,
  Layers,
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/projects/${id}`
        );
        setProject(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProject();
  }, [id]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  if (!project) {
    return (
      <section className="min-h-screen pt-[10px] flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <h2 className="text-6xl font-black mb-4 opacity-10 italic text-red-600">
            404
          </h2>
          <p className="text-xl font-mono tracking-widest text-red-500 uppercase">
            Project Not Found
          </p>
          <Link
            to="/project"
            className="mt-8 inline-block text-white border-b border-red-600 pb-1"
          >
            Return to base
          </Link>
        </div>
      </section>
    );
  }

  // 🔥 SAFE DATA PARSING (backend may send string or array)
  const safeArray = (data) => {
    if (!data) return [];
    return Array.isArray(data) ? data : data.split(",");
  };

  return (
    <section className="min-h-screen pt-8 bg-[#050505] text-white pb-32 selection:bg-red-600/30">

      {/* Progress Bar (UNCHANGED) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          src={
            project.image
              ? `http://localhost:5000${project.image}`
              : "/placeholder.png"
          }
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end px-6 pb-12">

          <Link
            to="/project"
            className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-red-500 mb-6"
          >
            <ArrowLeft size={14} />
            Back to Gallery
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold uppercase italic">
            {project.title}
            <span className="text-red-600 not-italic">.</span>
          </h1>

          <p className="mt-6 text-xl text-slate-400 max-w-3xl">
            {project.shortDesc}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mt-20">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-20">

          {/* Overview */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Terminal size={20} className="text-red-600" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                Execution_Summary
              </h2>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              {project.detailedDesc}
            </p>
          </section>

          {/* MODULES (safe check) */}
          {project.modules &&
            Object.entries(project.modules).map(([key, module], i) => (
              <section key={i}>
                <div className="flex items-center gap-3 mb-8">
                  <Layers size={20} className="text-red-600" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                    {module.title}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {module.features?.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-600/40 transition-all"
                    >
                      <span className="text-red-600 font-mono text-xs mt-1">
                        0{index + 1}
                      </span>
                      <p className="text-slate-400 hover:text-white transition-colors">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}

          {/* Roles */}
          {safeArray(project.roles).length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={20} className="text-red-600" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                  System_Roles
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {safeArray(project.roles).map((role, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-mono uppercase bg-red-600/10 border border-red-600/20 text-red-400 rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </section>
          )}
          {safeArray(project.authentication).length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={20} className="text-red-600" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                Authentication
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {safeArray(project.authentication).map((auth, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-mono uppercase bg-red-600/10 border border-red-600/20 text-red-400 rounded-md"
                  >
                    {auth}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Future Enhancements */}
          {safeArray(project.futureEnhancements).length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={20} className="text-red-600" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                  Future_Upgrades
                </h2>
              </div>

              <ul className="space-y-3 text-slate-400">
                {safeArray(project.futureEnhancements).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </section>
          )}

          {safeArray(project.targetUsers).length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={20} className="text-red-600" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                 Targeted Users
                </h2>
              </div>

              <ul className="space-y-3 text-slate-400">
                {safeArray(project.targetUsers).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* RIGHT */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]">

            <div className="flex items-center gap-3 mb-6">
              <Cpu size={18} className="text-red-600" />
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
                Stack_Configuration
              </h3>
            </div>
          <h2 className="mb-3">Frontend</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {safeArray(project.techStack?.frontend).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[10px] font-mono uppercase bg-red-600/10 text-red-500 border border-red-600/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          <h2 className="mb-3">Backend</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {safeArray(project.techStack?.backend).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[10px] font-mono uppercase bg-red-600/10 text-red-500 border border-red-600/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all mb-4"
              >
                Launch Live System <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                Open Repository <Github size={16} />
              </a>
            )}

            <div className="mt-8 pt-6 border-t border-white/5 text-emerald-500 text-xs font-mono uppercase tracking-widest animate-pulse">
              <Layout size={12} className="inline mr-2" />
              System_Status: Operational
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}