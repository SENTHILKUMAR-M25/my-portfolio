import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static z-50 top-0 left-0 h-full transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        <Sidebar closeSidebar={() => setOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow">
          <button onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
          <h1 className="font-bold text-lg">Admin Panel</h1>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-2 sm:p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}