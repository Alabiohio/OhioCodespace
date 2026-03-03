"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative">
            {/* Background Layer (Consistent with Home Page) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot glow-accent top-[20%] left-[-10%] opacity-10 blur-[100px]" />
                <div className="glow-spot glow-secondary bottom-[20%] right-[-10%] opacity-10 blur-[100px]" />

                {/* Animated Beams */}
                <div className="background-beams opacity-30">
                    <div className="beam left-[25%] animation-delay-0" style={{ animationDuration: '15s' }}></div>
                    <div className="beam left-[75%] animation-delay-2" style={{ animationDuration: '12s' }}></div>
                </div>
            </div>

            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow flex items-center justify-center relative z-10 px-4 pt-32 pb-20">
                <div className="max-w-2xl w-full text-center hero-enter">
                    {/* Large Glitchy 404 */}
                    <div className="relative inline-block mb-8">
                        <h1 className="text-[10rem] md:text-[15rem] font-acme font-black leading-none tracking-tighter text-foreground/5 select-none transition-all duration-700 hover:text-accent/10">
                            404
                        </h1>
                        <div
                            className="absolute inset-0 flex items-center justify-center text-7xl md:text-9xl font-acme font-black bg-gradient-to-b from-accent to-emerald-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            404
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-acme font-bold mb-4 tracking-tight" data-aos="fade-up" data-aos-delay="200">
                        Lost in <span className="text-accent italic font-nova">Digital Space?</span>
                    </h2>

                    <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                        The page you are looking for has been moved, deleted, or never existed in the first place. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5" data-aos="fade-up" data-aos-delay="600">
                        <Link
                            href="/"
                            className="group px-10 py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-base shadow-2xl shadow-accent/25 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 hover:bg-accent/90"
                        >
                            <FontAwesomeIcon icon={faHome} className="group-hover:-translate-y-0.5 transition-transform" />
                            Return Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="px-10 py-4 bg-foreground/5 border border-foreground/10 text-foreground rounded-2xl font-bold text-base hover:bg-foreground/10 backdrop-blur-sm transition-all flex items-center justify-center gap-3"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            Go Back
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
