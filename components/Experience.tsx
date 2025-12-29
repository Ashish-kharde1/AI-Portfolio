"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Google Student Ambassador",
        company: "AISSMS IOIT",
        period: "Aug 2025 – Present",
        color: "bg-blue-600",
        textColor: "text-white",
        description: "Driving cloud & AI adoption for 300+ students. Leading workshops on GenAI and Cloud technologies."
    },
    {
        role: "Software Engineering Intern",
        company: "Noveracion Global Pvt. Ltd.",
        period: "Mar 2025 – May 2025",
        color: "bg-white",
        textColor: "text-black",
        description: "Optimized core algorithms reducing time complexity. Built backend features and experimented with LLM prompts."
    },
    {
        role: "Core Member",
        company: "Google Developer Student Clubs",
        period: "Feb 2024 – Present",
        color: "bg-[#1a1a1a]",
        textColor: "text-gray-200",
        description: "Mentored students in Cloud Study Jams. Organized 10+ technical events focusing on applied ML."
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 mb-4 backdrop-blur-md">
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-widest">Career Path</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        Work<br />Experience
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${exp.color} rounded-[2rem] p-8 min-h-[320px] flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-full ${exp.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/5'}`}>
                                        <Briefcase size={24} className={exp.textColor} />
                                    </div>
                                    <span className={`text-sm font-bold opacity-60 ${exp.textColor} border border-current px-3 py-1 rounded-full`}>
                                        {exp.period}
                                    </span>
                                </div>

                                <h3 className={`text-2xl font-black uppercase leading-tight mb-2 ${exp.textColor}`}>
                                    {exp.role}
                                </h3>
                                <p className={`font-bold mb-6 opacity-80 ${exp.textColor}`}>
                                    {exp.company}
                                </p>
                            </div>

                            <p className={`text-sm font-medium leading-relaxed opacity-90 ${exp.textColor}`}>
                                {exp.description}
                            </p>

                            {/* Decorative Circle */}
                            <div className="absolute -bottom-12 -right-12 w-40 h-40 border-[20px] border-current opacity-10 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
