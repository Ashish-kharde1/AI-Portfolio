"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
    const email = "ashnkharde@gmail.com";
    const subject = "Portfolio Contact";
    const body = "Hello Ashn,\n\nI saw your portfolio and would like to connect.";

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };
    return (
        <section id="contact" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-500 to-red-600 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-[80px]"></div>

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none">
                            Let&apos;s Build<br />The Future
                        </h2>

                        <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto mb-12 font-medium">
                            Open for full-time roles in AI Engineering. <br />Based in Pune, available globally.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                            <a
                                onClick={handleEmailClick}
                                className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-105 transition-transform"
                            >
                                <Mail size={24} />
                                Send Email
                            </a>
                            <a
                                href="https://linkedin.com/in/ashish-kharde1"
                                className="group bg-black/20 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-black/30 transition-all border border-white/10"
                            >
                                <Linkedin size={24} />
                                LinkedIn
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
