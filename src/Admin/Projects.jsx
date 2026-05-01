// import { useEffect, useState } from "react";
// import axios from "axios";
// import { GithubIcon, Link } from "lucide-react";
// import { Links, NavLink } from "react-router-dom";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const [form, setForm] = useState({
//     id: "",
//     title: "",
//     shortDesc: "",
//     detailedDesc: "",
//     category: "",

//     roles: "",
//     authentication: "",

//     frontend: "",
//     backend: "",
//     database: "",
//     aiModel: "",
//     payment: "",
//     apiIntegration: "",
//     tooling: "",
//     stateManagement: "",
//     visualization: "",

//     uiHighlights: "",
//     businessLogicSimulation: "",
//     targetUsers: "",
//     futureEnhancements: "",

//     liveDemo: "",
//     github: ""
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [categories, setCategories] = useState([]);

//   const fetchCategories = async () => {
//     const res = await axios.get("http://localhost:5000/api/category");
//     setCategories(res.data);
//   };

//   useEffect(() => {
//     fetchProjects();
//     fetchCategories(); // 🔥 add this
//   }, []);
//   // 🔄 FETCH
//   const fetchProjects = async () => {
//     const res = await axios.get("http://localhost:5000/api/projects");
//     setProjects(res.data);
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   // ✍️ CHANGE
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 🖼️ FILE
//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);

//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // 🚀 SUBMIT
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();

//     Object.keys(form).forEach((key) => {
//       formData.append(key, form[key] || "");
//     });

//     if (imageFile) {
//       formData.append("image", imageFile);
//     }

//     try {
//       if (editId) {
//         await axios.put(
//           `http://localhost:5000/api/projects/${editId}`,
//           formData
//         );
//       } else {
//         await axios.post(
//           "http://localhost:5000/api/projects",
//           formData
//         );
//       }

//       resetForm();
//       fetchProjects();
//     } catch (err) {
//       console.log(err);
//     }

//     setLoading(false);
//   };

//   // 🔁 RESET
//   const resetForm = () => {
//     setOpen(false);
//     setEditId(null);
//     setImageFile(null);
//     setPreview(null);

//     setForm({
//       id: "",
//       title: "",
//       shortDesc: "",
//       detailedDesc: "",
//       category: "",
//       roles: "",
//       authentication: "",
//       frontend: "",
//       backend: "",
//       database: "",
//       aiModel: "",
//       payment: "",
//       apiIntegration: "",
//       tooling: "",
//       stateManagement: "",
//       visualization: "",
//       uiHighlights: "",
//       businessLogicSimulation: "",
//       targetUsers: "",
//       futureEnhancements: "",
//       liveDemo: "",
//       github: ""
//     });
//   };

//   // ✏️ EDIT
//   const handleEdit = (p) => {
//     setForm({
//       id: p.id || "",
//       title: p.title || "",
//       shortDesc: p.shortDesc || "",
//       detailedDesc: p.detailedDesc || "",
//       category: p.category || "",

//       roles: (p.roles || []).join(","),
//       authentication: (p.authentication || []).join(","),

//       frontend: p.techStack?.frontend?.join(",") || "",
//       backend: p.techStack?.backend?.join(",") || "",
//       database: p.techStack?.database?.join(",") || "",
//       aiModel: p.techStack?.aiModel?.join(",") || "",
//       payment: p.techStack?.payment?.join(",") || "",
//       apiIntegration: p.techStack?.apiIntegration?.join(",") || "",
//       tooling: p.techStack?.tooling?.join(",") || "",
//       stateManagement: p.techStack?.stateManagement?.join(",") || "",
//       visualization: p.techStack?.visualization?.join(",") || "",

//       uiHighlights: (p.uiHighlights || []).join(","),
//       businessLogicSimulation: (p.businessLogicSimulation || []).join(","),
//       targetUsers: (p.targetUsers || []).join(","),
//       futureEnhancements: (p.futureEnhancements || []).join(","),

//       liveDemo: p.liveDemo || "",
//       github: p.github || ""
//     });

//     setPreview(p.image ? `http://localhost:5000${p.image}` : null);
//     setEditId(p.id);
//     setOpen(true);
//   };

//   // ❌ DELETE
//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5000/api/projects/${id}`);
//     fetchProjects();
//   };

//   return (
//     <div className="p-8 min-h-screen bg-zinc-950 text-zinc-100 font-sans">
//       {/* HEADER */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 border-b border-zinc-800 pb-6">
//         <div>
//           <h1 className="text-4xl font-black tracking-tighter text-white uppercase">
//             Project <span className="text-red-600">Console</span>
//           </h1>
//           <p className="text-zinc-500 text-sm mt-1">Manage and deploy your technical portfolio</p>
//         </div>

//         <button
//           onClick={() => setOpen(true)}
//           className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-red-900/20 flex items-center gap-2"
//         >
//           <span className="text-xl">+</span> Add New Project
//         </button>
//       </div>

//       {/* LIST */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((p) => (
//           <div key={p.id} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 shadow-xl">
//             <div className="relative h-52 overflow-hidden">
//               <img
//                 src={p.image ? `http://localhost:5000${p.image}` : "/no-image.png"}
//                 className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
//                 alt="project"
//               />
//               {/* Quick Links Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-6">
//                 <NavLink to={p.github} target="_blank" className="p-3 bg-zinc-900/90 text-white rounded-full hover:text-red-500 border border-zinc-700 hover:border-red-500 transition-all">
//                   <GithubIcon size={20} />
//                 </NavLink>
//                 <NavLink to={p.liveDemo} target="_blank" className="p-3 bg-zinc-900/90 text-white rounded-full hover:text-red-500 border border-zinc-700 hover:border-red-500 transition-all">
//                   <Link size={20} />
//                 </NavLink>
//               </div>
//             </div>

//             <div className="p-6">
//               <div className="flex justify-between items-start mb-2">
//                 <h2 className="font-bold text-xl text-white truncate pr-4">{p.title}</h2>
//                 <span className="text-[10px] uppercase tracking-widest bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-zinc-700">
//                   {p.category || "General"}
//                 </span>
//               </div>
//               <p className="text-zinc-400 text-sm line-clamp-2 mb-6 h-10 leading-relaxed">
//                 {p.shortDesc}
//               </p>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => handleEdit(p)}
//                   className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-2.5 rounded-xl font-semibold text-sm transition-colors border border-zinc-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(p.id)}
//                   className="flex-1 bg-transparent hover:bg-red-950/30 text-red-500 border border-red-900/30 py-2.5 rounded-xl font-semibold text-sm transition-all"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {open && (
//         <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center items-center p-4">
//           <div className="bg-zinc-900 border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl custom-scrollbar">

//             <div className="sticky top-0 bg-zinc-900/80 backdrop-blur-md p-6 border-b border-zinc-800 flex justify-between items-center z-10">
//               <h2 className="text-2xl font-black uppercase tracking-tight text-white">
//                 {editId ? "Modify" : "Initialize"} <span className="text-red-600 pr-2">Project</span>
//                 {editId && <span className="text-xs text-zinc-500 font-mono">ID: {editId}</span>}
//               </h2>
//               <button onClick={resetForm} className="text-zinc-500 hover:text-white transition-colors">✕</button>
//             </div>

//             <form onSubmit={handleSubmit} className="p-8 space-y-8">

//               {/* Core Info */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">General Details</label>
//                   <input name="title" value={form.title} onChange={handleChange} placeholder="Project Title" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white" />
//                   <select
//                     name="category"
//                     value={form.category}
//                     onChange={handleChange}
//                     className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none"
//                   >
//                     <option value="">Select Category</option>

//                     {categories.map((cat) => (
//                       <option key={cat.categoryId} value={cat.name}>
//                         {cat.name}
//                       </option>
//                     ))}
//                   </select>      
//                  </div>

//                 <div className="space-y-4">
//                   <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Media Asset</label>
//                   <div className="relative group border-2 border-dashed border-zinc-800 rounded-2xl p-4 bg-zinc-950 hover:border-red-600/50 transition-all flex flex-col items-center justify-center min-h-[160px]">
//                     <input type="file" onChange={handleFile} className="absolute inset-0 opacity-0 cursor-pointer" />
//                     {preview ? (
//                       <img src={preview} className="h-32 w-full object-cover rounded-lg" alt="preview" />
//                     ) : (
//                       <div className="text-center">
//                         <p className="text-zinc-500 text-sm">Drag & drop or click to upload</p>
//                         <p className="text-zinc-700 text-xs mt-1">PNG, JPG up to 10MB</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Descriptions */}
//               <div className="space-y-4">
//                 <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Narrative</label>
//                 <input name="shortDesc" value={form.shortDesc} onChange={handleChange} placeholder="Short Hook Description" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 outline-none text-white" />
//                 <textarea name="detailedDesc" value={form.detailedDesc} onChange={handleChange} placeholder="Detailed project breakdown..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 outline-none text-white h-32" />
//               </div>

//               {/* Technical Stack Grid */}
//               <div className="space-y-4">
//                 <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Technical Architecture (Comma Separated)</label>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                   <input name="frontend" value={form.frontend} onChange={handleChange} placeholder="Frontend" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input name="backend" value={form.backend} onChange={handleChange} placeholder="Backend" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input name="database" value={form.database} onChange={handleChange} placeholder="Database" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input name="aiModel" value={form.aiModel} onChange={handleChange} placeholder="AI / ML Models" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input name="uiHighlights" value={form.uiHighlights} onChange={handleChange} placeholder="UI Highlights" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input
//                     name="apiIntegration"
//                     value={form.apiIntegration}
//                     onChange={handleChange}
//                     placeholder="API Integrations"
//                     className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm"
//                   />
//                   <input name="authentication" value={form.authentication} onChange={handleChange} placeholder="Auth Methods" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input name="payment" value={form.payment} onChange={handleChange} placeholder="Payment Gateways" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input name="futureEnhancements" value={form.futureEnhancements} onChange={handleChange} placeholder="Future Enhancements" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />                  <input name="stateManagement" value={form.stateManagement} onChange={handleChange} placeholder="State Mgmt" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                   <input name="tooling" value={form.tooling} onChange={handleChange} placeholder="Tooling/DevOps" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm focus:border-red-600 outline-none" />
//                 </div>
//               </div>

//               {/* Links & Extra */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Deployment</label>
//                   <input name="liveDemo" value={form.liveDemo} onChange={handleChange} placeholder="Live Demo URL" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 outline-none" />
//                   <input name="github" value={form.github} onChange={handleChange} placeholder="GitHub Repository URL" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 outline-none" />
//                 </div>
//                 <div className="space-y-4">
//                   <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Highlights</label>
//                   <input name="roles" value={form.roles} onChange={handleChange} placeholder="Your Roles" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 outline-none" />
//                   <input name="targetUsers" value={form.targetUsers} onChange={handleChange} placeholder="Target Audience" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 outline-none" />
//                 </div>
//               </div>

//               {/* Footer Actions */}
//               <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-zinc-800">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="flex-[2] bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-red-900/40 disabled:opacity-50 uppercase tracking-widest text-sm"
//                 >
//                   {loading ? "Synchronizing..." : editId ? "Push Updates" : "Deploy Project"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={resetForm}
//                   className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-4 rounded-2xl font-bold transition-colors uppercase tracking-widest text-sm"
//                 >
//                   Abort
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );

// }








import { useEffect, useState } from "react";
import axios from "axios";
import { GithubIcon, Link } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    id: "",
    title: "",
    shortDesc: "",
    detailedDesc: "",
    category: "",
    roles: "",
    authentication: "",
    frontend: "",
    backend: "",
    database: "",
    aiModel: "",
    payment: "",
    apiIntegration: "",
    tooling: "",
    stateManagement: "",
    visualization: "",
    uiHighlights: "",
    businessLogicSimulation: "",
    targetUsers: "",
    futureEnhancements: "",
    liveDemo: "",
    github: ""
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // FETCH
  const fetchProjects = async () => {
    const res = await axios.get("https://portfolio-036e.onrender.com/api/projects");
    setProjects(res.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get("https://portfolio-036e.onrender.com/api/category");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  // INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FILE
  const handleFile = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key] || "");
    });

    if (imageFile) formData.append("image", imageFile);

    try {
      if (editId) {
        await axios.put(`https://portfolio-036e.onrender.com/api/projects/${editId}`, formData);
      } else {
        await axios.post("https://portfolio-036e.onrender.com/api/projects", formData);
      }

      resetForm();
      fetchProjects();
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  // RESET
  const resetForm = () => {
    setOpen(false);
    setEditId(null);
    setImageFile(null);
    setPreview(null);

    setForm({
      id: "",
      title: "",
      shortDesc: "",
      detailedDesc: "",
      category: "",
      roles: "",
      authentication: "",
      frontend: "",
      backend: "",
      database: "",
      aiModel: "",
      payment: "",
      apiIntegration: "",
      tooling: "",
      stateManagement: "",
      visualization: "",
      uiHighlights: "",
      businessLogicSimulation: "",
      targetUsers: "",
      futureEnhancements: "",
      liveDemo: "",
      github: ""
    });
  };

  // EDIT
  const handleEdit = (p) => {
    setForm({
      id: p.id || "",
      title: p.title || "",
      shortDesc: p.shortDesc || "",
      detailedDesc: p.detailedDesc || "",
      category: p.category || "",
      roles: (p.roles || []).join(","),
      authentication: (p.authentication || []).join(","),
      frontend: p.techStack?.frontend?.join(",") || "",
      backend: p.techStack?.backend?.join(",") || "",
      database: p.techStack?.database?.join(",") || "",
      aiModel: p.techStack?.aiModel?.join(",") || "",
      payment: p.techStack?.payment?.join(",") || "",
      apiIntegration: p.techStack?.apiIntegration?.join(",") || "",
      tooling: p.techStack?.tooling?.join(",") || "",
      stateManagement: p.techStack?.stateManagement?.join(",") || "",
      visualization: p.techStack?.visualization?.join(",") || "",
      uiHighlights: (p.uiHighlights || []).join(","),
      businessLogicSimulation: (p.businessLogicSimulation || []).join(","),
      targetUsers: (p.targetUsers || []).join(","),
      futureEnhancements: (p.futureEnhancements || []).join(","),
      liveDemo: p.liveDemo || "",
      github: p.github || ""
    });

    setPreview(p.image ? `https://portfolio-036e.onrender.com${p.image}` : null);
    setEditId(p.id);
    setOpen(true);
  };

  // DELETE
  const handleDelete = async (id) => {
    await axios.delete(`https://portfolio-036e.onrender.com/api/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 min-h-screen bg-zinc-950 text-white">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-zinc-800 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            Project <span className="text-red-600">Console</span>
          </h1>
          <p className="text-zinc-500 text-sm">Manage your projects</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg w-full sm:w-auto"
        >
          + Add Project
        </button>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            
            <div className="h-40 sm:h-48 overflow-hidden">
              <img
                src={p.image ? `https://portfolio-036e.onrender.com${p.image}` : "/no-image.png"}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="p-4 sm:p-5">
              <h2 className="font-bold text-lg truncate">{p.title}</h2>
              <p className="text-sm text-zinc-400 line-clamp-2 mt-1">{p.shortDesc}</p>

              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <button onClick={() => handleEdit(p)} className="bg-zinc-800 py-2 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(p.id)} className="bg-red-600 py-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-3 sm:p-4">
          
          <div className="bg-zinc-900 w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-2xl p-4 sm:p-6 md:p-8">

            <h2 className="text-xl font-bold mb-4">
              {editId ? "Edit Project" : "Add Project"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* BASIC */}
              <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 bg-zinc-800 rounded" />
              <input name="shortDesc" value={form.shortDesc} onChange={handleChange} placeholder="Short Desc" className="w-full p-2 bg-zinc-800 rounded" />
              <textarea name="detailedDesc" value={form.detailedDesc} onChange={handleChange} placeholder="Details" className="w-full p-2 bg-zinc-800 rounded" />

              {/* CATEGORY */}
              <select name="category" value={form.category} onChange={handleChange} className="w-full p-2 bg-zinc-800 rounded">
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c.categoryId}>{c.name}</option>
                ))}
              </select>

              {/* TECH GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.keys(form).map((key) =>
                  !["title","shortDesc","detailedDesc","category"].includes(key) ? (
                    <input
                      key={key}
                      name={key}
                      value={form[key]}
                      onChange={handleChange}
                      placeholder={key}
                      className="p-2 bg-zinc-800 rounded"
                    />
                  ) : null
                )}
              </div>

              {/* FILE */}
              <input type="file" onChange={handleFile} />

              {/* ACTION */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-red-600 py-2 rounded w-full">
                  {loading ? "Saving..." : "Save"}
                </button>
                <button type="button" onClick={resetForm} className="bg-gray-500 py-2 rounded w-full">
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}