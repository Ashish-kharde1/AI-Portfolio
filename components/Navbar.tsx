"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail, FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const navItems = [
        { name: "Home", href: "#", icon: <Home size={20} /> },
        { name: "About", href: "#about", icon: <User size={20} /> },
        { name: "Experience", href: "#experience", icon: <Briefcase size={20} /> },
        { name: "Projects", href: "#projects", icon: <Code size={20} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-2 px-3 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg">
                {navItems.map((item, index) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="relative p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors group"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {item.icon}

                        {/* Tooltip */}
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs font-medium text-white bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.name}
                        </span>
                    </Link>
                ))}

                <div className="w-[1px] h-6 bg-white/10 mx-1"></div>

                
            </nav>
        </div>
    );
};
