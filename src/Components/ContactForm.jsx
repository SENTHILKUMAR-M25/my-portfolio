
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ShieldCheck
} from "lucide-react";
import Toast from "./Toast";

const ContactSection = () => {
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!form.name || !form.email || !form.message) {
      setToast({
        title: "Warning",
        description: "All fields are required"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setToast({
        title: "Invalid Email",
        description: "Enter valid email"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "https://portfolio-036e.onrender.com/api/contact",
        form
      );

      setToast({
        title: "Success",
        description: res.data?.message || "Message sent!"
      });

      setForm({ name: "", email: "", message: "" });

    } catch (err) {
      setToast({
        title: "Error",
        description: "Server error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast toast={toast} setToast={setToast} />

      <section className="relative bg-[#050505] py-24 overflow-hidden">
        
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-zinc-800/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-1.5 text-sm text-red-500"
              >
                <ShieldCheck className="h-4 w-4" />
                Secure & Direct Communication
              </motion.div>

              <h2 className="text-5xl sm:text-7xl font-black text-white">
                LET'S BUILD <br />
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  THE FUTURE.
                </span>
              </h2>

              <p className="text-zinc-400 max-w-md border-l-2 border-red-600 pl-6">
                High-performance digital solutions focused on speed & impact.
              </p>

              <div className="flex gap-6">
                <a href="https://github.com/SENTHILKUMAR-M25" target="_blank">
                  <Github className="text-zinc-500 hover:text-red-500" size={28} />
                </a>
                <a href="https://www.linkedin.com/in/senthil-kumar-m-04048a2b0/" target="_blank">
                  <Linkedin className="text-zinc-500 hover:text-red-500" size={28} />
                </a>
                <a href="mailto:senthil.kumar.m25@gmail.com">
                  <Mail className="text-zinc-500 hover:text-red-500" size={28} />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              {/* 🔥 FIX: overlay won't block clicks */}
              <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-tr from-red-600 to-zinc-800 opacity-20 group-hover:opacity-40 transition duration-500 pointer-events-none"></div>

              {/* 🔥 FIX: form above overlay */}
              <div className="relative z-10 p-8 sm:p-10 bg-black rounded-[2.5rem] text-white">

                <form onSubmit={handleSubmit} className="space-y-5">

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Name"
                    className="w-full p-3 bg-gray-900 rounded border border-gray-800 focus:border-red-600 outline-none"
                  />

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="Email"
                    className="w-full p-3 bg-gray-900 rounded border border-gray-800 focus:border-red-600 outline-none"
                  />

                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Message"
                    className="w-full p-3 bg-gray-900 rounded h-32 border border-gray-800 focus:border-red-600 outline-none"
                  />

                  <button
                    disabled={isSubmitting}
                    className={`w-full p-3 rounded font-bold transition ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                </form>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;