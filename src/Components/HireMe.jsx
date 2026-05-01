"use client"

import { motion } from "framer-motion"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HireMe() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">

      {/* Subtle Red Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Let’s Build Something{" "}
          <span className="text-red-600">Extraordinary</span>
        </motion.h2>

        {/* Green Accent Line */}
        <div className="mt-6 mx-auto h-[2px] w-24 bg-green-500/60" />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 text-zinc-400 max-w-2xl mx-auto"
        >
          I help businesses and startups transform ideas into scalable,
          high-performance digital experiences.
          If you're looking for precision, creativity, and performance —
          let's talk.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA */}
          <a
            href="mailto:senthilkumar393946@mail.com"
            className="group relative px-8 py-4 rounded-xl bg-red-600 text-white font-semibold flex items-center gap-3 transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail size={18} />
            Hire Me
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Secondary CTA */}
          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl border border-red-600/40 text-red-500 font-semibold transition-all hover:bg-red-600 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            Discuss Project
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-500 text-sm"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-500 text-sm">

            {/* Email */}
            <a
              href="mailto:senthilkumar393946@mail.com"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              <Mail size={16} className="text-red-500" />
              senthilkumar393946@mail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+918925393946"
              className="flex items-center gap-2 hover:text-red-500 transition-colors"
            >
              <Phone size={16} className="text-red-500" />
              +91 8925393946
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  )
}