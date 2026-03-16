"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faTachometerAlt,
    faUsersCog,
    faPhoneAlt,
    faArrowRight,
    faLaptopCode,
    faPalette,
    faImage,
    faDatabase,
    faMapMarkerAlt,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

import BookStackSidePerspective from "@/components/BookSlide";

const HomeClient: React.FC = () => {
    const buttons = [
        {
            label: "Free Consultation",
            icon: faPhoneAlt,
            href: "mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Free%20Consultation&body=Hi,%0D%0AI%20would%20like%20to%20schedule%20a%20free%20consultation.",
            primary: true,
        },
        {
            label: "Website Review",
            icon: faChartLine,
            href: "mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Website%20Review&body=Hi,%0D%0AI%20would%20like%20to%20request%20a%20website%20review.",
            primary: false,
        },
    ];

    const services = [
        {
            title: "Frontend Engineering",
            description: "Responsive, high-performance web applications designed to engage users and drive results.",
            icon: faLaptopCode,
            delay: "0.1s",
            accent: "from-emerald-500/20 to-emerald-500/5",
            iconColor: "text-emerald-400",
        },
        {
            title: "Backend Development",
            description: "Secure, scalable backend systems powering APIs, databases, and core application logic.",
            icon: faDatabase,
            delay: "0.2s",
            accent: "from-sky-500/20 to-sky-500/5",
            iconColor: "text-sky-400",
        },
        {
            title: "Graphics Design",
            description: "Creative visual designs, branding assets, and digital graphics that enhance brand identity and engagement.",
            icon: faImage,
            delay: "0.3s",
            accent: "from-purple-500/20 to-purple-500/5",
            iconColor: "text-purple-400",
        },
        {
            title: "UI/UX Design",
            description: "Elegant, user-focused interface designs built for clarity, usability, and conversion.",
            icon: faPalette,
            delay: "0.15s",
            accent: "from-rose-500/20 to-rose-500/5",
            iconColor: "text-rose-400",
        },
        {
            title: "Performance Optimization",
            description: "Speed and performance optimization focused on Core Web Vitals and SEO readiness.",
            icon: faTachometerAlt,
            delay: "0.25s",
            accent: "from-amber-500/20 to-amber-500/5",
            iconColor: "text-amber-400",
        },
        {
            title: "Google My Business",
            description: "Local profile optimization to improve visibility, trust, and customer engagement.",
            icon: faMapMarkerAlt,
            delay: "0.35s",
            accent: "from-teal-500/20 to-teal-500/5",
            iconColor: "text-teal-400",
        },
    ];

    const highlights = [
        "Conversion-optimized layouts",
        "Core Web Vitals excellence",
        "Mobile-first responsive design",
        "Clean, maintainable codebase",
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot glow-accent top-[-10%] left-[-10%] animate-float" />
                <div className="glow-spot glow-secondary bottom-[-10%] right-[-10%] animate-float-reverse" />

                {/* Animated Background Beams */}
                <div className="background-beams">
                    <div className="beam left-[10%] animation-delay-0" style={{ animationDuration: '12s' }}></div>
                    <div className="beam left-[30%] animation-delay-2" style={{ animationDuration: '8s' }}></div>
                    <div className="beam left-[50%] animation-delay-5" style={{ animationDuration: '15s' }}></div>
                    <div className="beam left-[80%] animation-delay-1" style={{ animationDuration: '10s' }}></div>
                </div>

                {/* Floating Particles */}
                {[
                    { left: '15%', top: '20%', duration: 12 },
                    { left: '75%', top: '15%', duration: 15 },
                    { left: '25%', top: '65%', duration: 18 },
                    { left: '85%', top: '75%', duration: 14 },
                    { left: '45%', top: '35%', duration: 16 },
                    { left: '60%', top: '85%', duration: 13 },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-accent/20 animate-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            '--particle-duration': `${particle.duration}s`,
                        } as React.CSSProperties}
                    />
                ))}
            </div>

            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow relative z-10">

                {/* ── HERO ── */}
                <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-32 pb-20">
                    {/* Radial center glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent)] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto text-center hero-enter">

                        <h1 className="text-6xl md:text-8xl font-acme font-black mb-8 tracking-tighter leading-none">
                            <span className="block text-foreground mb-2">Building</span>
                            <span
                                className="bg-gradient-to-r from-accent via-sky-400 to-accent bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic"
                            >
                                Digital Experiences.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-14 max-w-3xl mx-auto leading-relaxed font-light">
                            Ohio Codespace crafts{" "}
                            <span className="text-foreground font-semibold">fast, responsive, and conversion-focused websites</span>{" "}
                            for businesses and creators who want to stand out online.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
                            {buttons.map((btn, idx) => (
                                <a
                                    key={idx}
                                    href={btn.href}
                                    className={`group px-10 py-4 rounded-2xl font-bold transition-all text-center flex items-center justify-center gap-3 text-base hover:scale-105 active:scale-95 hover:-translate-y-0.5 ${btn.primary
                                        ? "bg-accent text-accent-foreground shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:bg-accent/90"
                                        : "bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 backdrop-blur-sm"
                                        }`}
                                >
                                    <FontAwesomeIcon icon={btn.icon} className="group-hover:rotate-12 transition-transform duration-300" />
                                    {btn.label}
                                </a>
                            ))}
                        </div>

                        {/* Trusted stats strip */}
                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground mb-6">
                            {["No contracts", "Fast turnaround", "Satisfaction guaranteed"].map((t, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCheck} className="text-accent text-xs" />
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Visual Hero Layer */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-delay="200"
                        className="relative z-10 w-full max-w-screen-2xl mx-auto -mt-10 mb-[-10rem] pointer-events-none select-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 h-full" />
                        <div className="scale-75 md:scale-95 lg:scale-100 opacity-80 hover:opacity-100 transition-opacity">
                            <BookStackSidePerspective />
                        </div>
                    </div>
                </section>

                {/* ── SERVICES ── */}
                <section id="services" className="py-32 px-4 relative z-10 overflow-hidden">
                    {/* Layered glows */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl" />
                        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Section header */}
                        <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="700">
                            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]">
                                Our Solutions
                            </div>
                            <h2 className="text-5xl md:text-6xl font-acme font-black mb-6 tracking-tighter">
                                Strategic <span className="text-foreground">Expertise</span> for the{" "}
                                <span className="text-accent italic" style={{ fontFamily: "var(--font-familyIII)" }}>Modern</span> Web
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                                We combine technical excellence with creative strategy to build digital ecosystems that outperform the competition.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="service-card-enter group relative p-8 rounded-[2rem] border border-glass-border bg-glass-bg hover:bg-glass-bg-hover hover:border-glass-border-hover transition-all duration-500 overflow-hidden flex flex-col"
                                    style={{ animationDelay: service.delay }}
                                >
                                    {/* Corner radial */}
                                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${service.accent} blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 border border-glass-border`}>
                                        <FontAwesomeIcon icon={service.icon} className={`text-xl ${service.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                                    </div>

                                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                                        {service.title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Bottom accent line */}
                                    <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent/60 to-transparent transition-all duration-500 rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WHY US ── */}
                <section className="py-32 px-4 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left Column */}
                        <div className="lg:col-span-12 xl:col-span-5" data-aos="fade-right" data-aos-duration="700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-px bg-accent" />
                                <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Why Ohio Codespace</span>
                            </div>

                            <h3 className="text-5xl md:text-6xl font-acme font-black mb-8 leading-[1.1] tracking-tighter">
                                Creative{" "}
                                <span className="text-accent italic" style={{ fontFamily: "var(--font-familyIII)" }}>Design</span>
                                {" "}&amp;{" "}
                                Smart{" "}
                                <span className="text-accent italic" style={{ fontFamily: "var(--font-familyIII)" }}>Development</span>
                            </h3>

                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
                                We build custom, high-performance websites designed to convert and deliver results. Each site focuses on clean design, fast performance, and a seamless user experience.
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-3 mb-12">
                                {highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCheck} className="text-accent text-[10px]" />
                                        </div>
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/portfolio"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl text-foreground font-bold hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                            >
                                <span>View Our Work</span>
                                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right Column: Bento Grid */}
                        <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[160px]">
                            {/* Card 1: Large */}
                            <div className="md:col-span-2 md:row-span-2 relative p-8 rounded-[2.5rem] bg-glass-bg border border-glass-border overflow-hidden group hover:border-glass-border-hover hover:bg-glass-bg-hover transition-all duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl -mr-32 -mt-32 group-hover:bg-accent/20 transition-all duration-700" />
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/20 border border-accent/20 flex items-center justify-center text-accent mb-6">
                                        <FontAwesomeIcon icon={faPalette} size="lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                                            Uncompromising Premium UI
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            Custom interfaces designed for clarity, elegance, and seamless interaction—setting a high standard for modern web experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: SEO */}
                            <div className="relative p-6 rounded-[2.5rem] bg-glass-bg border border-glass-border flex flex-col items-center justify-center text-center group hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                                    <FontAwesomeIcon icon={faChartLine} className="text-emerald-400 text-sm" />
                                </div>
                                <span className="font-bold text-foreground text-sm block">SEO Excellence</span>
                                <span className="text-xs text-emerald-400/70 mt-1 uppercase tracking-widest font-mono">+420% Visibility</span>
                            </div>

                            {/* Card 3: Accent tall */}
                            <div className="md:row-span-2 relative p-8 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent/80 text-accent-foreground overflow-hidden group shadow-2xl shadow-accent/25">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]" />
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-accent-foreground/10 flex items-center justify-center mb-4">
                                        <FontAwesomeIcon icon={faUsersCog} className="text-sm" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black mb-3 leading-tight">Client-First Engineering</h4>
                                        <p className="text-xs font-medium opacity-80 leading-relaxed">
                                            Direct collaboration with lead engineers to bring your vision to life efficiently and reliably.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: Wide */}
                            <div className="md:col-span-2 relative p-6 rounded-[2.5rem] bg-glass-bg border border-glass-border flex items-center gap-5 px-8 group hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300">
                                <div className="w-11 h-11 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <FontAwesomeIcon icon={faTachometerAlt} />
                                </div>
                                <div className="flex-grow">
                                    <span className="font-bold text-foreground block text-sm">Accelerated Delivery</span>
                                    <span className="text-xs text-muted-foreground">Production-ready websites, delivered fast.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactForm />

                {/* ── FINAL CTA ── */}
                <section className="py-24 px-4 bg-background relative overflow-hidden">
                    {/* Subtle noise */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] pointer-events-none" />

                    <div className="max-w-7xl mx-auto overflow-hidden rounded-[3rem] border border-accent/15 bg-gradient-to-br from-accent/10 via-transparent to-sky-500/5 relative">
                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />

                        <div className="p-12 md:p-20 flex flex-col justify-center items-start text-left relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                                </span>
                                <span className="text-accent font-mono text-xs uppercase tracking-widest">Systems Operational · Ready for Deployment</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
                                Ready to Elevate{" "}
                                <span className="block text-accent">Your Brand?</span>
                            </h2>

                            <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                                Transform your online presence with websites designed to captivate, convert, and scale your business effortlessly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <a
                                    href="mailto:ohiocodespace@gmail.com"
                                    className="group px-10 py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-base shadow-2xl shadow-accent/25 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 hover:bg-accent/90 hover:shadow-accent/40"
                                >
                                    Initiate Project
                                    <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <Link
                                    href="/business"
                                    className="px-10 py-4 bg-foreground/5 border border-foreground/10 text-foreground rounded-2xl font-bold text-base hover:bg-foreground/10 transition-all text-center backdrop-blur-sm"
                                >
                                    Solutions Deck
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HomeClient;
