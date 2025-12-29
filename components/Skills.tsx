"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Code2, Database } from "lucide-react";

const skillCategories = [
    {
        title: "LLMs & GenAI",
        icon: <Cpu size={24} />,
        color: "bg-orange-500",
        skills: ["RAG", "LangChain", "LangGraph", "Hugging Face", "Prompt Engineering", "Gemini AI", "OpenAI", "Ollama"]
    },
    {
        title: "Machine Learning",
        icon: <Database size={24} />,
        color: "bg-black",
        textColor: "text-white",
        skills: ["PyTorch", "TensorFlow", "scikit-learn", "YOLOv8", "OpenCV", "MediaPipe", "LoRA"]
    },
    {
        title: "Backend & Cloud",
        icon: <Cloud size={24} />,
        color: "bg-white",
        textColor: "text-black",
        border: "border-gray-200",
        skills: ["FastAPI", "Flask", "PostgreSQL", "Firebase", "Google Cloud", "Docker", "Git"]
    },
    {
        title: "Frontend",
        icon: <Code2 size={24} />,
        color: "bg-[#ccfd50]",
        textColor: "text-black",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Streamlit"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-end gap-4"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.8]">
                        Tech<br />Stack
                    </h2>
                    <div className="w-full h-1 bg-white/20 mb-4 rounded-full flex-grow"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${category.color} ${category.border ? `border ${category.border}` : ''} rounded-[2rem] p-6 flex flex-col h-full shadow-lg relative overflow-hidden group`}
                        >
                            <div className={`flex items-center gap-3 mb-6 ${category.textColor || 'text-white'}`}>
                                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-tight">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-bold border-2 transition-transform hover:-translate-y-1 cursor-default
                      ${category.color === 'bg-white'
                                                ? 'bg-gray-100 border-gray-200 text-gray-800'
                                                : 'bg-white/10 border-white/20 text-white backdrop-blur-sm'
                                            }
                      ${category.color === 'bg-[#ccfd50]' ? '!bg-black/10 !border-black/10 !text-black' : ''}
                    `}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Decorative Abstract Shape */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
