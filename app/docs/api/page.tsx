"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCode, 
    faServer, 
    faGlobe, 
    faCopy, 
    faCheck,
    faArrowRight,
    faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ApiDocsPage: React.FC = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const endpoints = [
        {
            title: "Personal & Project API",
            path: "/api/ohio",
            file: "/ohio.json",
            method: "GET",
            description: "Fetches comprehensive professional information about Ohiocheoya Alabi, including skills, featured projects, and core specialization.",
            icon: faCode,
            color: "text-blue-400"
        },
        {
            title: "Business & Brand API",
            path: "/api/ohiocodespace",
            file: "/ohiocodespace.json",
            method: "GET",
            description: "Fetches detailed information about Ohio Codespace business solutions, core expertise, metrics, and operational processes.",
            icon: faServer,
            color: "text-emerald-400"
        }
    ];

    const codeSnippet = `// Example: Fetching Ohio Codespace Business Info
fetch('https://ohiocodespace.com/api/ohiocodespace')
  .then(response => response.json())
  .then(data => console.log(data.brand.name))
  .catch(error => console.error('Error:', error));`;

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-[2px] bg-accent" />
                        <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Developer API Docs</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-acme font-black mb-8 leading-[1.1] tracking-tighter">
                        Integrate with <span className="text-accent italic" style={{ fontFamily: 'var(--font-familyIII)' }}>Ohio Codespace</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Access high-performance digital profile data via our lightweight JSON APIs. Built for seamless integration into external portfolios, resumes, and business trackers.
                    </p>
                </motion.div>

                {/* API Endpoints */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {endpoints.map((api, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="glass-card p-8 rounded-[2.5rem] relative group overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-all`} />
                            
                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 border border-glass-border ${api.color}`}>
                                    <FontAwesomeIcon icon={api.icon} size="lg" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{api.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                    {api.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-background/50 rounded-2xl p-4 border border-glass-border flex items-center justify-between group/row">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <span className="text-[10px] font-black bg-accent/20 text-accent px-2 py-1 rounded uppercase tracking-widest">{api.method}</span>
                                            <code className="text-xs text-muted-foreground truncate">{api.path}</code>
                                        </div>
                                        <button 
                                            onClick={() => handleCopy(api.path, api.path)}
                                            className="text-muted-foreground hover:text-accent transition-colors shrink-0"
                                            title="Copy Path"
                                        >
                                            <FontAwesomeIcon icon={copied === api.path ? faCheck : faCopy} />
                                        </button>
                                    </div>

                                    <a 
                                        href={api.path} 
                                        target="_blank"
                                        className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-accent/10"
                                    >
                                        <FontAwesomeIcon icon={faGlobe} />
                                        Try it Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration Guide */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                            <FontAwesomeIcon icon={faTerminal} />
                        </div>
                        <h2 className="text-3xl font-acme font-bold">Quick Integration</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Implementation Details */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center font-bold text-accent text-sm">1</div>
                                    <div>
                                        <h4 className="font-bold mb-1">CORS Support</h4>
                                        <p className="text-sm text-muted-foreground">The API routes are configured to support cross-origin requests from authorized domains.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center font-bold text-accent text-sm">2</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Response Format</h4>
                                        <p className="text-sm text-muted-foreground">Standard JSON format with appropriate <code>Content-Type: application/json</code> headers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center font-bold text-accent text-sm">3</div>
                                    <div>
                                        <h4 className="font-bold mb-1">Versioning</h4>
                                        <p className="text-sm text-muted-foreground">Current version is v1.0. Future updates will be announced in the documentation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Code Block */}
                        <div className="lg:col-span-7">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="relative p-6 rounded-3xl bg-card-bg border border-glass-border backdrop-blur-xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                        <button 
                                            onClick={() => handleCopy(codeSnippet, 'snippet')}
                                            className="text-muted-foreground hover:text-accent transition-colors"
                                        >
                                            <FontAwesomeIcon icon={copied === 'snippet' ? faCheck : faCopy} />
                                        </button>
                                    </div>
                                    <pre className="text-[13px] md:text-sm font-mono text-muted-foreground overflow-x-auto leading-relaxed">
                                        {codeSnippet}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ApiDocsPage;
