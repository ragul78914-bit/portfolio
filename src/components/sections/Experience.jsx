"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Development",
    company: "Accent Techno",
    duration: "May 2025 – June 2025",
    description: [
      "Assisted in developing and maintaining web application components using HTML, CSS, and Django.",
      "Collaborated with team members to analyze project requirements and implement practical solutions.",
      "Supported daily development tasks, improving team productivity and workflow efficiency.",
      "Managed multiple assignments while consistently meeting project deadlines.",
      "Strengthened teamwork, communication, and software development practices in a professional environment."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-1.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start">
                <div className="mb-4 md:mb-0 md:text-right md:pr-12 md:col-start-1">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center md:justify-end gap-2 text-secondary font-medium mt-1 mb-2">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-slate-400 border border-white/10">
                    {exp.duration}
                  </span>
                </div>
                
                <div className="md:pl-12 md:col-start-2">
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-300 text-sm md:text-base flex items-start gap-3">
                          <span className="text-primary mt-1 text-lg leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
