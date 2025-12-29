"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ChevronRight, Layers, Code, Users, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#0a0a0a]">
            {/* Background Noise & Gradient */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT COLUMN: Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="bg-white rounded-[2rem] p-6 pb-8 text-black relative shadow-2xl overflow-hidden group">
                            {/* Decorative Circles */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-[2px] border-dashed border-orange-400 rounded-full opacity-60"></div>
                            <div className="absolute top-20 right-[-20px] w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                                <span className="animate-flame">🔥</span>
                            </div>

                            {/* Profile Image Area */}
                            <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-[1.5rem] mb-6 overflow-hidden border-4 border-white shadow-inner">
                                <Image src="/profile.png" alt="Ashish Kharde" fill className="object-cover" />
                            </div>

                            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight mb-1">
                                Ashish Kharde
                            </h2>

                            {/* Decorative Dotted Line */}
                            <svg className="w-full h-8 mb-2 opacity-50" viewBox="0 0 300 30">
                                <path d="M0 15 Q 150 15 300 15" stroke="orange" strokeWidth="2" strokeDasharray="8 8" fill="none" />
                            </svg>

                            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                                An AI Engineer passionate about architecting scalable <span className="text-black font-bold">LLM Agents</span> and <span className="text-black font-bold">RAG Systems</span> for enterprise solutions.
                            </p>

                            <div className="flex gap-4">
                                <Link href="https://linkedin.com/in/ashish-kharde1" className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                                <Link href="https://github.com/Ashish-kharde1" className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 hover:text-black transition-colors">
                                    <Github size={20} />
                                </Link>
                                <Link href="#contact" className="p-3 bg-gray-100 rounded-xl hover:bg-orange-100 hover:text-orange-600 transition-colors">
                                    <Mail size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Content & Stats */}
                    <div className="lg:col-span-8 flex flex-col gap-8">

                        {/* Header Area */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="pt-4"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Open to Opportunities</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-4">
                                AI <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">ENGINEER</span>
                            </h1>

                            <p className="text-xl text-gray-400 max-w-2xl font-light border-l-2 border-white/20 pl-6 my-8">
                                Transforming complex generative AI concepts into intelligent, user-centric production systems.
                            </p>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-3 gap-8 mb-4"
                        >
                            <div>
                                <h3 className="text-5xl font-bold text-white mb-2">+1</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Years of<br />Experience</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-bold text-white mb-2">+10</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Projects<br />Completed</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-bold text-white mb-2">+400</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Students<br />Mentored</p>
                            </div>
                        </motion.div>

                        {/* Highlight Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2rem] p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-lg"
                            >
                                <Layers className="mb-4 opacity-80" size={40} />
                                <h4 className="text-2xl font-bold mb-2">Systems Architect</h4>
                                <p className="text-orange-100 text-sm font-medium">Building robust RAG pipelines & Agentic workflows.</p>
                                <ChevronRight className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="bg-[#ccfd50] rounded-[2rem] p-8 text-black relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-lg"
                            >
                                <Code className="mb-4 opacity-80" size={40} />
                                <h4 className="text-2xl font-bold mb-2">Generative AI</h4>
                                <p className="text-black/70 text-sm font-bold">Fine-tuning LLMs & optimizing inference.</p>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
