"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a final-year B.Tech Artificial Intelligence and Data Science student at Adithya Institute of Technology with a passion for software development and full-stack web development.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mt-4">
              I enjoy learning new technologies, solving real-world problems, and continuously improving my technical and leadership skills. I am seeking an opportunity to contribute to an organization while growing as a software engineer.
            </p>

            <div className="mt-8 flex items-center gap-4 text-white">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-gradient">8.0</span>
                <span className="text-sm text-slate-400">CGPA (B.Tech)</span>
              </div>
              <div className="w-px h-12 bg-white/20 mx-4" />
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-gradient">2027</span>
                <span className="text-sm text-slate-400">Expected Graduation</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {/* Education Cards */}
            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl text-primary mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">B.Tech AI & Data Science</h3>
                  <p className="text-secondary text-sm font-medium mb-3">Adithya Institute of Technology</p>
                  <p className="text-slate-400 text-sm">Major: Data Science • Expected Graduation: September 2027</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/20 rounded-xl text-secondary mt-1">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Higher Secondary (HSLC)</h3>
                  <p className="text-secondary text-sm font-medium mb-3">Kamarajar Matric Higher Secondary School</p>
                  <p className="text-slate-400 text-sm">Salem, Tamil Nadu • 79% • Graduated: 2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
