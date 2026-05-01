import { NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  FolderTree, 
  Briefcase, 
  MessageSquare, 
  LogOut 
} from "lucide-react";

export default function Sidebar() {
    const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 mb-2 p-3 rounded-xl transition-all duration-200 group ${
      isActive 
        ? "bg-red-600 text-white shadow-lg shadow-red-900/20" 
        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
    }`;

    const logout = () => {
      localStorage.removeItem("admin");
      navigate("/login");
    };
  return (
    <div className="w-72 min-h-screen bg-zinc-950 border-r border-zinc-800 text-zinc-100 p-6 flex flex-col shadow-2xl">

      {/* Branding */}
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-black tracking-tighter uppercase text-white">
          SK<span className="text-red-600">.Admin</span>
        </h1>
        <div className="h-1 w-8 bg-red-600 mt-1 rounded-full"></div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col">
        <NavLink to="/admin" end className={linkStyle}>
          <LayoutDashboard size={20} className="group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">Dashboard</span>
        </NavLink>

        <NavLink to="/admin/category" className={linkStyle}>
          <FolderTree size={20} className="group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">Category</span>
        </NavLink>

        <NavLink to="/admin/projects" className={linkStyle}>
          <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">Projects</span>
        </NavLink>

        <NavLink to="/admin/contacts" className={linkStyle}>
          <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-sm tracking-wide">Contacts</span>
        </NavLink>
      </nav>

      {/* Logout Section */}
      <div className="mt-auto pt-6 border-t border-zinc-900">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 p-3 text-zinc-500 hover:text-red-500 hover:bg-red-950/20 rounded-xl transition-all group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-widest">Logout</span>
        </button>
      </div>

    </div>
  );
}