"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Construction Management System",
    description: "A full-stack construction management platform to manage projects, attendance, documents, tasks, and site progress.",
    techStack: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    highlights: [
      "Implemented secure user authentication, role-based access, and real-time data management.",
      "Designed a responsive dashboard with an intuitive user interface for efficient project monitoring.",
      "Deployed the application on Vercel for online accessibility."
    ],
    link: "https://construction-management7.vercel.app/admin",
  },
  {
    title: "Tuition ERP System",
    description: "A Tuition ERP system to manage students, teachers, attendance, fees, and academic records.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Developed modules for student registration, fee tracking, attendance management, and report generation.",
      "Created a responsive dashboard to simplify administrative tasks and improve data management.",
      "Deployed the application on Vercel."
    ],
    link: "https://tutionerp-e47sa8rg1-ragul78914-8933s-projects.vercel.app",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/20 text-primary rounded-2xl">
                  <FolderGit2 size={32} />
                </div>
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="mb-6 space-y-2">
                <p className="text-sm font-semibold text-white">Highlights:</p>
                <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
