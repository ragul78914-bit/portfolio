"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Code2, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Internships
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Ragul S</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 mb-8 font-medium">
            AI & Data Science Student <br className="hidden md:block" />
            <span className="text-white">&</span> Full-Stack Developer
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg leading-relaxed">
            I specialize in building scalable web applications and exploring the intersection of data science and software engineering. Passionate about solving real-world problems.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf.pdf"
              target="_blank"
              className="px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition-colors flex items-center gap-2 text-white"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <p className="text-sm text-slate-500 mr-2">Connect with me:</p>
            <a href="https://github.com/ragul78914-bit" target="_blank" rel="noreferrer" className="p-2 rounded-full glass text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/ragul-s-8a3930305?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="p-2 rounded-full glass text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:ragul78914@gmail.com" className="p-2 rounded-full glass text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative lg:ml-auto"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary to-secondary">
            <div className="w-full h-full rounded-full bg-background overflow-hidden relative border-4 border-background">
              <Image src="/profile.jpg.jpeg" alt="Ragul S" fill className="object-cover" />
            </div>
          </div>
          
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 glass px-4 py-2 rounded-2xl flex items-center gap-3 border border-white/10 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="Next.js" width={24} height={24} className="invert" />
            </div>
            <div className="text-sm">
              <p className="text-slate-400 text-xs">Framework</p>
              <p className="font-bold text-white">Next.js</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-4 glass px-4 py-2 rounded-2xl flex items-center gap-3 border border-white/10 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-[#3776AB]/20 flex items-center justify-center">
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width={24} height={24} />
            </div>
            <div className="text-sm">
              <p className="text-slate-400 text-xs">AI/Data</p>
              <p className="font-bold text-white">Python</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
