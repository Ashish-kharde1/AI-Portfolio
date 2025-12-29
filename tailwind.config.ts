import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#3b82f6", // blue-500
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#8b5cf6", // violet-500
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#1f2937", // gray-800
                    foreground: "#9ca3af", // gray-400
                },
                accent: {
                    DEFAULT: "#10b981", // emerald-500
                    foreground: "#ffffff",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
