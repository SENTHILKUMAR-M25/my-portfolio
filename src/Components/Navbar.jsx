import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo1 from "../assets/logo1.png";

const navItems = ["Home", "About", "Project", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* Glass Background */}
      <div className="absolute inset-0 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5" />

      <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl tracking-tight">
          <img
            src={logo1}
            alt="VS Portfolio"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-red-500"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item}

                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-500"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/hireme"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-400 text-white font-medium hover:opacity-90 transition"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white border border-white/10 rounded-xl hover:border-red-400 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#030712] z-50 flex flex-col"
          >
            <div className="flex justify-between items-center p-6">

              {/* Logo */}
              <img
                src={logo1}
                alt="VS Portfolio"
                className="h-10 w-auto object-contain"
              />

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl text-white hover:border-red-400 transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-4xl font-bold text-white hover:text-red-400 transition"
                  >
                    {item}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}