"use client";

import React, { useState } from "react";
import { login } from "@/app/actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await login(formData);

        if (result?.error) {
            setError(result.error);
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground relative selection:bg-accent selection:text-accent-foreground">
            {/* Background Animations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot glow-accent top-[10%] right-[10%] animate-float" />
                <div className="glow-spot glow-secondary bottom-[10%] left-[10%] animate-float-reverse" />
            </div>

            <Navbar />

            <main className="flex-grow flex items-center justify-center px-4 relative z-10 py-32">
                <div
                    className="w-full max-w-md"
                    data-aos="fade-up"
                >
                    <div className="text-center mb-10">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]">
                            Admin Access
                        </div>
                        <h1 className="text-4xl font-black mb-4 tracking-tighter">
                            Welcome <span className="text-white italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Back</span>
                        </h1>
                        <p className="text-gray-400">Sign in to manage your empire.</p>
                    </div>

                    <div className="glass-card p-10 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest flex items-center gap-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-accent/50 text-xs" /> Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="admin@ohiocodespace.com"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 ml-1 uppercase tracking-widest flex items-center gap-2">
                                    <FontAwesomeIcon icon={faLock} className="text-accent/50 text-xs" /> Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all font-medium"
                                />
                            </div>

                            {error && (
                                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium animate-pulse">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group w-full py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                        Authenticating...
                                    </>
                                ) : (
                                    "Sign In"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
