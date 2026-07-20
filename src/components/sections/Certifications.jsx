"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-secondary/20 text-secondary rounded-2xl">
              <Award size={32} />
            </div>
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          
          <div className="space-y-4">
            {["Python for Data Science", "HTML & CSS Bootcamp", "SQL Bootcamp", "Canva for Beginners"].map((cert, index) => (
              <div key={index} className="glass p-5 rounded-2xl border border-white/5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <p className="text-lg font-medium text-white">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/20 text-primary rounded-2xl">
              <Trophy size={32} />
            </div>
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          
          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Trophy size={120} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Internship Completion</h3>
            <p className="text-slate-300 leading-relaxed relative z-10">
              Successfully completed a Full-Stack Development Internship at Accent Techno. Recognized for effective teamwork, problem-solving, and timely project completion during the internship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
