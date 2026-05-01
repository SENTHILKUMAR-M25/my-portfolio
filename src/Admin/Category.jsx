import { useEffect, useState } from "react";
import axios from "axios";
import { FolderTree, Trash2, X, PlusCircle } from "lucide-react";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: ""
  });

  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://portfolio-036e.onrender.com/api/category");
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://portfolio-036e.onrender.com/api/category", form);
      setForm({ name: "", description: "" });
      setOpen(false);
      fetchCategories();
    } catch (err) {
      console.error("Error saving category", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      await axios.delete(`https://portfolio-036e.onrender.com/api/category/${id}`);
      fetchCategories();
    }
  };

  return (
    <div className="p-8 min-h-screen bg-zinc-950 text-zinc-100">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10 border-b border-zinc-900 pb-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
            Project <span className="text-red-600">Categories</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-1">Organize your work by industry or tech</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
        >
          <PlusCircle size={20} className="group-hover:rotate-90 transition-transform" />
          Add Category
        </button>
      </div>

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.categoryId}
            className="group bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-red-600/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Icon Decoration */}
            <FolderTree className="absolute -right-4 -bottom-4 text-zinc-800/50 group-hover:text-red-900/20 transition-colors" size={100} />

            <div className="relative z-10">
              <h2 className="font-mono text-[10px] text-red-500 tracking-widest uppercase mb-2">
                REF: {cat.categoryId}
              </h2>

              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                {cat.name}
              </h3>

              <p className="text-sm text-zinc-400 mt-2 line-clamp-3 leading-relaxed min-h-[60px]">
                {cat.description || "No description provided for this category."}
              </p>

              <button
                onClick={() => handleDelete(cat.categoryId)}
                className="mt-6 flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-widest border border-zinc-800 hover:border-red-900/50 px-4 py-2 rounded-lg bg-zinc-950"
              >
                <Trash2 size={14} />
                Delete Entry
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          
          <div className="bg-zinc-900 w-full max-w-md rounded-3xl p-8 border border-zinc-800 shadow-2xl">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                New <span className="text-red-600">Category</span>
              </h2>
              <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Label</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g., E-Commerce"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder:text-zinc-700"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Definition</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the scope of this category..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all text-white placeholder:text-zinc-700"
                  rows={4}
                />
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-[2] bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-red-900/40 disabled:opacity-50 uppercase tracking-widest text-xs"
                >
                  {loading ? "Registering..." : "Save Category"}
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 py-4 rounded-2xl font-bold transition-colors uppercase tracking-widest text-xs"
                >
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