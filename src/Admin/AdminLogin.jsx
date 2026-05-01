import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, ShieldCheck } from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // 🔥 Added

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "senthil" && password === "Senthil@123") {
      localStorage.setItem("admin", "true");
      // ✅ Success Toast
      toast.success("Authentication Successful. Welcome back, Senthil.", {
        style: {
          borderRadius: '12px',
          background: '#18181b', // zinc-900
          color: '#fff',
          border: '1px solid #27272a', // zinc-800
        },
        iconTheme: {
          primary: '#dc2626', // red-600
          secondary: '#fff',
        },
      });
      
      setTimeout(() => navigate("/admin"), 1000);
    } else {
      // ❌ Error Toast
      toast.error("Access Denied: Invalid Credentials.", {
        style: {
          borderRadius: '12px',
          background: '#18181b',
          color: '#fff',
          border: '1px solid #7f1d1d', // dark red border
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 px-4 relative overflow-hidden font-sans">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-900/20 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-zinc-900 border border-zinc-800 rounded-2xl mb-4 shadow-xl">
            <ShieldCheck size={40} className="text-red-600" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter uppercase text-white">
            Access <span className="text-red-600">Terminal</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-2 tracking-widest font-medium">SK PORTFOLIO MANAGEMENT SYSTEM</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl shadow-2xl space-y-6"
        >
          <div className="space-y-4">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-red-500 transition-colors" size={18} />
              <input
                type="text"
                placeholder="Admin Identifier"
                className="w-full bg-zinc-950 border border-zinc-800 text-white pl-12 pr-4 py-4 rounded-xl outline-none focus:border-red-600 transition-all placeholder:text-zinc-700 font-medium"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-red-500 transition-colors" size={18} />
              <input
                type="password"
                placeholder="Access Key"
                className="w-full bg-zinc-950 border border-zinc-800 text-white pl-12 pr-4 py-4 rounded-xl outline-none focus:border-red-600 transition-all placeholder:text-zinc-700 font-medium"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-red-900/30 active:scale-95 uppercase tracking-widest text-sm"
          >
            Authenticate Access
          </button>
        </form>
      </div>
    </div>
  );
}