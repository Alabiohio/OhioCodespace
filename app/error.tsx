"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faRotateRight, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative">
            {/* Background Decorator (Matches Home Page) */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot bg-rose-500/10 top-[-10%] left-[30%] opacity-10 blur-[120px]" />
                <div className="glow-spot bg-amber-500/10 bottom-[-10%] right-[30%] opacity-10 blur-[120px]" />

                {/* Animated Background Beams */}
                <div className="background-beams opacity-20">
                    <div className="beam left-[20%] animation-delay-1" style={{ animationDuration: '10s' }}></div>
                    <div className="beam left-[80%] animation-delay-3" style={{ animationDuration: '15s' }}></div>
                </div>
            </div>

            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow flex items-center justify-center relative z-10 px-4 pt-32 pb-20 overflow-hidden">
                <div className="max-w-3xl w-full text-center hero-enter p-12 glass-card rounded-[3rem] border border-rose-500/20 bg-rose-500/[0.02]">

                    <div className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-rose-500/10 text-rose-500 border border-rose-500/30 animate-pulse">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="text-4xl" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-acme font-black mb-6 leading-tight tracking-tighter">
                        Something <span className="text-rose-500 italic font-nova">Unexpected</span> Happened
                    </h1>

                    <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                        We encountered a technical hurdle while trying to render this page. Don't worry, your data is safe. Let's try and fix this together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <button
                            onClick={() => reset()}
                            className="group px-10 py-5 bg-rose-500 text-white rounded-2xl font-bold text-base shadow-2xl shadow-rose-500/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 hover:bg-rose-600"
                        >
                            <FontAwesomeIcon icon={faRotateRight} className="group-hover:rotate-180 transition-transform duration-700" title="Retry" />
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="px-10 py-5 bg-foreground/5 border border-foreground/10 text-foreground rounded-2xl font-bold text-base hover:bg-foreground/10 backdrop-blur-sm transition-all flex items-center justify-center gap-3"
                        >
                            <FontAwesomeIcon icon={faHome} />
                            Return Home
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-rose-500/10 flex flex-col items-center gap-3">
                        <p className="text-sm text-muted-foreground">If the problem persists, please contact our support desk.</p>
                        <a
                            href="mailto:support@ohiocodespace.com"
                            className="text-accent font-bold text-sm flex items-center gap-2 hover:underline transition-all"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                            support@ohiocodespace.com
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
