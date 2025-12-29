"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Title Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-[#ccfd50] rounded-[2rem] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group shadow-lg"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-6">
                                <Sparkles size={24} />
                            </div>
                            <h2 className="text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-4">
                                About<br />The<br />Builder
                            </h2>
                        </div>

                        <div className="relative z-10">
                            <p className="text-black font-bold text-xl opacity-80">
                                Engineering Intelligence.
                            </p>
                        </div>

                        {/* Decorative Background */}
                        <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 border-[40px] border-black/10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                    </motion.div>

                    {/* Right Content Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7 bg-[#1a1a1a] rounded-[2rem] p-10 flex flex-col justify-center relative shadow-lg border border-white/5"
                    >

                        <div className="prose prose-lg max-w-none">
                            <p className="text-2xl font-medium text-white leading-relaxed mb-6">
                                I am an <span className="bg-orange-500/20 text-orange-400 px-2 rounded font-bold border border-orange-500/30">AI Engineer</span> & <span className="bg-blue-500/20 text-blue-400 px-2 rounded font-bold border border-blue-500/30">Google Student Ambassador</span> engaged in the deep end of AI.
                            </p>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    I’m Ashish Kharde, an AI-focused software engineer and B.Tech IT student passionate about Generative AI, LLMs, and applied machine learning. I build end-to-end AI systems including RAG pipelines, efficient LLMs, and production-ready backend services using PyTorch, LangChain, and Hugging Face. As a Google Student Ambassador and GDSC core member, I enjoy mentoring developers and building AI solutions with real-world impact.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-2 text-white font-bold cursor-pointer group hover:text-orange-500 transition-colors">
                                Read Full Bio <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
