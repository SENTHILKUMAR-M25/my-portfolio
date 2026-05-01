import { useState } from "react";

export default function AddProjectForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    detailedDesc: "",
    category: "",
    liveDemo: "",
    github: "",

    roles: [""],
    authentication: [""],
    futureEnhancements: [""],

    techStack: {
      frontend: [""],
      backend: [""],
      database: [""],
      aiModel: [""],
      payment: [""],
      apiIntegration: [""],
    },

    modules: [
      {
        key: "",
        title: "",
        features: [""],
        tech: [""],
      },
    ],
  });

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState(null);

  // ---------------- HANDLERS ----------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addArrayItem = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const handleTechChange = (type, index, value) => {
    const updated = [...formData.techStack[type]];
    updated[index] = value;

    setFormData({
      ...formData,
      techStack: { ...formData.techStack, [type]: updated },
    });
  };

  const addTechItem = (type) => {
    setFormData({
      ...formData,
      techStack: {
        ...formData.techStack,
        [type]: [...formData.techStack[type], ""],
      },
    });
  };

  const handleModuleChange = (index, field, value) => {
    const updated = [...formData.modules];
    updated[index][field] = value;
    setFormData({ ...formData, modules: updated });
  };

  const handleFeatureChange = (mIndex, fIndex, value) => {
    const updated = [...formData.modules];
    updated[mIndex].features[fIndex] = value;
    setFormData({ ...formData, modules: updated });
  };

  const addFeature = (index) => {
    const updated = [...formData.modules];
    updated[index].features.push("");
    setFormData({ ...formData, modules: updated });
  };

  const addModule = () => {
    setFormData({
      ...formData,
      modules: [
        ...formData.modules,
        { key: "", title: "", features: [""], tech: [""] },
      ],
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const modulesObject = {};
    formData.modules.forEach((mod) => {
      if (mod.key) {
        modulesObject[mod.key] = {
          title: mod.title,
          features: mod.features,
          tech: mod.tech,
        };
      }
    });

    const newProject = {
      ...formData,
      id: Date.now().toString(),
      modules: modulesObject,
      image: imagePreview || "https://via.placeholder.com/300",
    };

    onAdd(newProject);
  };

  // ---------------- UI ----------------

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-white">

      {/* INPUT STYLE */}
      <style>{`
        .input {
          width: 100%;
          padding: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          outline: none;
          transition: 0.3s;
        }
        .input:focus {
          border-color: #dc2626;
          box-shadow: 0 0 10px rgba(220,38,38,0.4);
          background: rgba(255,255,255,0.05);
        }
      `}</style>

      {/* BASIC */}
      <div className="space-y-3">
        <h2 className="text-red-500 font-bold">Basic Info</h2>
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="input"/>
        <textarea name="shortDesc" value={formData.shortDesc} onChange={handleChange} placeholder="Short Desc" className="input"/>
        <textarea name="detailedDesc" value={formData.detailedDesc} onChange={handleChange} placeholder="Detailed Desc" className="input"/>
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="input"/>
        <input name="liveDemo" value={formData.liveDemo} onChange={handleChange} placeholder="Live Demo" className="input"/>
        <input name="github" value={formData.github} onChange={handleChange} placeholder="GitHub" className="input"/>
      </div>

      {/* ROLES */}
      <div>
        <h2 className="text-red-500 font-bold">Roles</h2>
        {formData.roles.map((r, i) => (
          <input key={i} value={r} onChange={(e)=>handleArrayChange("roles", i, e.target.value)} className="input mt-2"/>
        ))}
        <button type="button" onClick={()=>addArrayItem("roles")} className="text-red-500 text-sm mt-2">+ Add Role</button>
      </div>

      {/* AUTH */}
      <div>
        <h2 className="text-red-500 font-bold">Authentication</h2>
        {formData.authentication.map((a, i) => (
          <input key={i} value={a} onChange={(e)=>handleArrayChange("authentication", i, e.target.value)} className="input mt-2"/>
        ))}
        <button type="button" onClick={()=>addArrayItem("authentication")} className="text-red-500 text-sm mt-2">+ Add Auth</button>
      </div>

      {/* TECH STACK */}
      <div>
        <h2 className="text-red-500 font-bold">Tech Stack</h2>
        {Object.keys(formData.techStack).map((type) => (
          <div key={type} className="mt-3">
            <p className="capitalize text-red-400">{type}</p>
            {formData.techStack[type].map((t, i) => (
              <input key={i} value={t} onChange={(e)=>handleTechChange(type,i,e.target.value)} className="input mt-1"/>
            ))}
            <button type="button" onClick={()=>addTechItem(type)} className="text-red-500 text-xs mt-1">+ Add</button>
          </div>
        ))}
      </div>

      {/* MODULES */}
      <div>
        <h2 className="text-red-500 font-bold">Modules</h2>
        {formData.modules.map((mod, i) => (
          <div key={i} className="border border-white/10 p-4 rounded-xl mt-3 bg-white/5">
            <input value={mod.key} onChange={(e)=>handleModuleChange(i,"key",e.target.value)} placeholder="Module Key" className="input mb-2"/>
            <input value={mod.title} onChange={(e)=>handleModuleChange(i,"title",e.target.value)} placeholder="Module Title" className="input mb-2"/>

            {mod.features.map((f, fi)=>(
              <input key={fi} value={f} onChange={(e)=>handleFeatureChange(i,fi,e.target.value)} className="input mt-1"/>
            ))}

            <button type="button" onClick={()=>addFeature(i)} className="text-red-500 text-xs mt-2">+ Feature</button>
          </div>
        ))}
        <button type="button" onClick={addModule} className="text-red-500 mt-3">+ Add Module</button>
      </div>

      {/* FUTURE */}
      <div>
        <h2 className="text-red-500 font-bold">Future Enhancements</h2>
        {formData.futureEnhancements.map((f,i)=>(
          <input key={i} value={f} onChange={(e)=>handleArrayChange("futureEnhancements",i,e.target.value)} className="input mt-2"/>
        ))}
        <button type="button" onClick={()=>addArrayItem("futureEnhancements")} className="text-red-500 text-sm mt-2">+ Add</button>
      </div>

      {/* IMAGE */}
      <div>
        <h2 className="text-red-500 font-bold">Project Image</h2>

        <label className="block border-2 border-dashed border-white/10 p-6 rounded-xl text-center cursor-pointer hover:border-red-500">
          {imagePreview ? (
            <img src={imagePreview} className="w-full h-48 object-cover rounded"/>
          ) : (
            <p className="text-zinc-400">Click to upload</p>
          )}

          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden"/>
        </label>

        {imageFile && <p className="text-xs text-zinc-500 mt-2">{imageFile.name}</p>}
      </div>

      {/* SUBMIT */}
      <button className="w-full bg-red-600 py-3 rounded-xl font-bold hover:bg-red-700">
        🚀 Submit Project
      </button>
    </form>
  );
}