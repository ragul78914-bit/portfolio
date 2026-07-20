"use client";

import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Technologies",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "Flask", "Django"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase (Firestore)"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "REST APIs", "Full-Stack Web Development"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={itemVariants}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white rounded-lg text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
