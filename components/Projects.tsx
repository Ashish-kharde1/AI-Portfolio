"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, FileCode, Cpu } from "lucide-react";

interface EngineeringNotes {
    architecture?: string;
    modelChoice: string;
}

interface ProjectData {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
    links: { github: string; demo: string };
    color: string;
    textColor: string;
    notes: EngineeringNotes;
}

const projects: ProjectData[] = [
    {
        title: "Qwen3 Micro-Reasoner",
        subtitle: "Lightweight Reasoning-Enhanced LLM",
        tags: ["PyTorch", "LoRA", "Unsloth", "4-bit Inference"],
        description: "Built a compact reasoning-capable LLM by LoRA fine-tuning Qwen3-4B (~0.8% trainable params) to explicitly generate chain-of-thought (<think>) reasoning while remaining efficient on consumer GPUs.",
        links: {
            github: "https://github.com/Ashish-kharde1/Micro-Reasoner-Qwen",
            demo: "https://huggingface.co/Ashish-kharde1/Qwen3-Micro-Reasoner"
        },
        color: "bg-white",
        textColor: "text-black",
        notes: {
            architecture: "User → Streamlit Chat UI → Chat Template (Thinking Enabled) → Tokenizer → Qwen3-4B + LoRA Adapters (4-bit) → Explicit <think> Reasoning → Final Answer",
            modelChoice: "Selected Qwen3-4B for strong instruction-following and reasoning capability relative to model size. Applied parameter-efficient LoRA fine-tuning using Unsloth to enable training and inference on a single consumer GPU (6–12 GB VRAM)."
        }
    },
    {
        title: "JobMatchr",
        subtitle: "AI-Powered Resume–JD Matching System",
        tags: ["RAG", "LangChain", "Flask", "Gemini", "FAISS"],
        description: "Built an AI-driven resume evaluation platform that compares resumes against job descriptions using RAG. The system extracts text from PDFs with OCR fallback, retrieves relevant resume context via FAISS, and uses Gemini to generate ATS-style evaluations, missing keyword analysis, and dynamic match percentages.",
        links: {
            github: "https://github.com/Ashish-kharde1/JobMatchr",
            demo: "https://jobmatchr-theta.vercel.app/"
        },
        color: "bg-orange-500",
        textColor: "text-white",
        notes: {
            architecture: "Web UI → Flask API → Resume Parsing (pdfplumber → OCR fallback) → Text Chunking → FAISS Vector Store → LangChain Retrieval → Gemini LLM → ATS-Style Evaluation Output",
            modelChoice: "Used Gemini (via langchain-google-genai) for reliable instruction-following and structured analytical responses suitable for resume screening and ATS-like evaluations."
        }
    },
    {
        title: "Semantic Book Recommender",
        subtitle: "Emotion-Aware Recommendation Engine",
        tags: ["GenAI", "ChromaDB", "LangChain", "Gradio"],
        description: "Built a semantic book recommendation system that combines embedding-based retrieval with emotion-aware ranking. User queries are matched using Google Generative AI embeddings, then refined using category filters and emotion scores derived from transformer-based sentiment models.",
        links: {
            github: "https://github.com/Ashish-kharde1/book-recommendation",
            demo: "https://huggingface.co/spaces/Ashish-kharde1/book-recommendation"
        },
        color: "bg-[#ccfd50]", // Lime
        textColor: "text-black",
        notes: {
            architecture: "User Query → Google Generative AI Embeddings → ChromaDB Similarity Search → Category Filter → Emotion-Based Re-Ranking → Gradio UI",
            modelChoice: "Used Google Generative AI embeddings (models/embedding-001) for semantic retrieval, combined with DistilRoBERTa-based emotion classification and BART zero-shot category tagging to capture both intent and emotional tone."
        }
    },
    {
        title: "Sentiment Analyzer (LSTM)",
        subtitle: "Classic Deep Learning NLP System",
        tags: ["LSTM", "TensorFlow", "Keras", "Streamlit"],
        description: "Built an end-to-end sentiment analysis application using a stacked LSTM model trained on the IMDB 50K movie reviews dataset, achieving ~86% test accuracy with real-time inference and confidence scoring via a Streamlit UI.",
        links: {
            github: "https://github.com/Ashish-kharde1/Sentiment-Analyzer-IMDB",
            demo: "https://sentiment-analyzer-imdb.streamlit.app/"
        },
        color: "bg-blue-600",
        textColor: "text-white",
        notes: {
            architecture: "Input Text → Tokenization → Padding (max_len=200) → Embedding Layer (128-dim) → Stacked LSTM Layers → Dense → Sigmoid Output",
            modelChoice: "Used a stacked LSTM architecture to model long-range sequential dependencies in text while remaining computationally efficient compared to Transformer-based models for mid-sized datasets."
        }
    },
    {
        title: "Sentiment Analyzer (BERT)",
        subtitle: "Transformer-Based NLP Application",
        tags: ["DistilBERT", "PyTorch", "Hugging Face", "Streamlit"],
        description: "Built a high-accuracy movie review sentiment analysis system by fine-tuning DistilBERT on the IMDB 50K dataset using PyTorch, achieving ~93% test accuracy with real-time inference and calibrated confidence scoring via a Streamlit UI.",
        links: {
            github: "https://github.com/Ashish-kharde1/Sentiment-Analyzer-Transformer",
            demo: "https://sentiment-analyzer-transformer.streamlit.app/"
        },
        color: "bg-white",
        textColor: "text-black",
        notes: {
            architecture: "Input Text → Text Cleaning → WordPiece Tokenization → DistilBERT Encoder → Classification Head → Softmax → Confidence Score",
            modelChoice: "Chose DistilBERT (distilbert-base-uncased) to balance strong contextual understanding with reduced model size and faster inference, retaining most of BERT’s performance while being more suitable for real-time web deployment."
        }
    },
    {
        title: "Credit Card Fraud Detection",
        subtitle: "Financial Risk ML System",
        tags: ["LightGBM", "Feature Engineering", "Streamlit"],
        description: "Built a fraud detection application using a pre-trained LightGBM classifier with extensive feature engineering (geospatial distance, temporal signals, and encoded categorical variables) to estimate fraud probability for credit card transactions via an interactive Streamlit UI.",
        links: {
            github: "https://github.com/Ashish-kharde1/credit-card-fraud-detection",
            demo: "https://credit-card-fraud-detection-mlp.streamlit.app/"
        },
        color: "bg-orange-500",
        textColor: "text-white",
        notes: {
            architecture: "User Input → Feature Engineering (Haversine Distance, Time Features) → Categorical Encoding → LightGBM Inference → Fraud Probability Output",
            modelChoice: "Selected LightGBM for its strong performance on tabular data, efficient tree-based learning, and ability to model complex nonlinear interactions common in financial fraud signals."
        }
    }
];

const NotesModal = ({ project, onClose }: { project: ProjectData; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#111] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`p-8 ${project.color} ${project.textColor} relative`}>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{project.title}</h3>
                    <p className="font-bold opacity-80 uppercase tracking-widest text-sm">Technical Architecture</p>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto text-gray-300">

                    {/* Architecture */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-orange-500 mb-2">
                            <FileCode size={20} />
                            <h4 className="font-bold uppercase tracking-wider text-sm">Architecture</h4>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 font-mono text-sm leading-relaxed">
                            {project.notes.architecture || "Architecture details not available."}
                        </div>
                    </div>

                    {/* Model Choice */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-blue-400 mb-2">
                            <Cpu size={20} />
                            <h4 className="font-bold uppercase tracking-wider text-sm">Why this Stack?</h4>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            {project.notes.modelChoice}
                        </p>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });
    const x = useMotionValue(0);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    useEffect(() => {
        const updateConstraints = () => {
            if (scrollRef.current && containerRef.current) {
                const scrollWidth = scrollRef.current.scrollWidth;
                const containerWidth = containerRef.current.offsetWidth;
                setConstraints({ left: -(scrollWidth - containerWidth + 100), right: 0 });
            }
        };

        updateConstraints();
        window.addEventListener("resize", updateConstraints);
        return () => window.removeEventListener("resize", updateConstraints);
    }, []);

    return (
        <section id="projects" className="py-32 bg-[#0a0a0a] overflow-hidden relative">
            <div className="container mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="w-20 h-2 bg-orange-500 rounded-full mb-6"></div>
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                        Featured<br />Projects
                    </h2>
                    <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
                        Drag to explore
                    </p>
                </motion.div>
            </div>

            {/* Horizontal Scroll Area */}
            <div
                ref={containerRef}
                className="relative group active:cursor-grabbing"
            >
                <motion.div
                    ref={scrollRef}
                    drag="x"
                    dragConstraints={constraints}
                    style={{ x }}
                    dragTransition={{ power: 0.2, timeConstant: 200 }}
                    dragElastic={0.1}
                    className="flex gap-8 px-6 md:px-[10vw] cursor-grab active:cursor-grabbing w-fit"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`${project.color} rounded-[2.5rem] p-10 flex flex-col justify-between w-[350px] md:w-[450px] min-h-[550px] shadow-2xl relative overflow-hidden shrink-0`}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Header: Deployed (Left), GitHub (Right) */}
                            <div className="flex justify-between items-start mb-8 z-10 relative">
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors ${project.textColor === 'text-white' ? 'bg-white/10 hover:bg-white/20' : ''}`}
                                >
                                    <div className={`p-2 rounded-full bg-white/10 ${project.textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
                                        <ExternalLink size={20} />
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-wider ${project.textColor}`}>Live Demo</span>
                                </a>

                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full hover:bg-black/5 transition-all hover:scale-110 ${project.textColor} ${project.textColor === 'text-white' ? 'hover:bg-white/10' : ''}`}
                                >
                                    <Github size={28} />
                                </a>
                            </div>

                            <div className="z-10 relative">
                                <h3 className={`text-4xl md:text-5xl font-black uppercase leading-[0.8] mb-4 tracking-tighter ${project.textColor}`}>
                                    {project.title}
                                </h3>

                                <p className={`text-sm font-black uppercase mb-8 tracking-widest opacity-60 ${project.textColor}`}>
                                    {project.subtitle}
                                </p>

                                <p className={`text-lg md:text-xl font-medium leading-tight mb-8 ${project.textColor} opacity-90`}>
                                    {project.description}
                                </p>

                                {/* Technical Architecture Button */}
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-current pb-1 hover:opacity-70 transition-opacity w-fit ${project.textColor}`}
                                >
                                    <FileCode size={16} />
                                    Technical Architecture
                                </button>
                            </div>

                            {/* Tags at bottom */}
                            <div className="mt-8 flex flex-wrap gap-2 z-10 relative">
                                {project.tags.map(tag => (
                                    <span key={tag} className={`text-xs font-black uppercase px-4 py-1.5 rounded-full border-2 border-current opacity-40 ${project.textColor}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Decorative Blur */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Custom Navigation Hints */}
            <div className="container mx-auto px-6 mt-12 flex justify-center items-center opacity-30">
                <div className="flex items-center gap-4">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Dragging Enabled</span>
                    <div className="w-12 h-[2px] bg-white"></div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <NotesModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};
