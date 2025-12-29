"use client";

import { motion } from "framer-motion";
import { Users, Calendar, MapPin, ArrowUpRight } from "lucide-react";

export const Community = () => {
    return (
        <section id="community" className="py-20 bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left: Google Brand Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-white rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden shadow-2xl"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                {/* Google G Logo SVG */}
                                <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.52H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="text-xl font-bold text-gray-500 tracking-tight">Google Student Ambassador</span>
                            </div>

                            <h2 className="text-5xl font-black text-black leading-[0.9] tracking-tighter mb-6">
                                Building<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]">Community</span><br />
                                Impact.
                            </h2>

                            <p className="text-gray-600 font-medium text-lg mb-8">
                                Leading the next generation of developers through Cloud & AI workshops.
                            </p>

                            <div className="flex gap-2">
                                <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-700">Google Cloud</div>
                                <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-700">GenAI</div>
                            </div>
                        </div>

                        {/* Decorative Google Colors Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10 rounded-bl-full"></div>
                    </motion.div>

                    {/* Right: Stats & Details Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Stat Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#1a1a1a] rounded-[2rem] p-8 flex flex-col justify-center border border-white/10"
                        >
                            <Users className="text-[#4285F4] mb-4" size={32} />
                            <h3 className="text-4xl font-black text-white mb-2">+400</h3>
                            <p className="text-gray-400 font-medium uppsercase tracking-wider">Students Mentored</p>
                        </motion.div>

                        {/* Stat Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#1a1a1a] rounded-[2rem] p-8 flex flex-col justify-center border border-white/10"
                        >
                            <Calendar className="text-[#34A853] mb-4" size={32} />
                            <h3 className="text-4xl font-black text-white mb-2">10+</h3>
                            <p className="text-gray-400 font-medium uppsercase tracking-wider">Technical Events</p>
                        </motion.div>

                        {/* Description Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-2 bg-[#1a1a1a] rounded-[2rem] p-8 border border-white/10"
                        >
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <MapPin size={20} className="text-[#EA4335]" />
                                Google Developer Student Clubs
                            </h4>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Organized and led hands-on sessions on <span className="text-white font-bold">TensorFlow, Google Cloud Platform, and Generative AI</span>. Facilitated study jams that helped students earn Google Cloud certifications.
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-[#4285F4] font-bold hover:underline">
                                View Community Work <ArrowUpRight size={18} />
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
