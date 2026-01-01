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
} from "@fortawesome/free-solid-svg-icons";

import BookStackSidePerspective from "@/components/BookSlide";

const HomeClient: React.FC = () => {
    const buttons = [
        {
            label: "Free Consultation",
            icon: faPhoneAlt,
            href: "mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Free%20Consultation&body=Hi,%0D%0AI%20would%20like%20to%20schedule%20a%20free%20consultation.",
            primary: true,
            aos: "fade-up-right",
        },
        {
            label: "Website Review",
            icon: faChartLine,
            href: "mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Website%20Review&body=Hi,%0D%0AI%20would%20like%20to%20request%20a%20website%20review.",
            primary: false,
            aos: "fade-up-left",
        },
    ];

    const services = [

        {
            title: "Frontend Engineering",
            description: "Responsive, high-performance web applications designed to engage users and drive results.",
            icon: faLaptopCode,
            delay: 0.3,
            aos: "fade-up-right",
        },
        {
            title: "Backend Development",
            description: "Secure, scalable backend systems powering APIs, databases, and core application logic.",
            icon: faDatabase,
            delay: 0.4,
            aos: "fade-up-left",
        },
        {
            title: "Graphics Design",
            description: "Creative visual designs, branding assets, and digital graphics that enhance brand identity and engagement.",
            icon: faImage, // you can import from FontAwesome
            delay: 0.1,
            aos: "fade-up-right",
        },
        {
            title: "UI/UX Design",
            description: "Elegant, user-focused interface designs built for clarity, usability, and conversion.",
            icon: faPalette,
            delay: 0.2,
            aos: "fade-up-left",
        },
        {
            title: "Performance Optimization",
            description: "Speed and performance optimization focused on Core Web Vitals and SEO readiness.",
            icon: faTachometerAlt,
            delay: 0.5,
            aos: "fade-up-right",
        },
        {
            title: "Google My Business Optimization",
            description: "Local profile optimization to improve visibility, trust, and customer engagement.",
            icon: faMapMarkerAlt,
            delay: 0.6,
            aos: "fade-up-left",
        },
    ];


    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative">
            {/* Background Animations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div
                    className="glow-spot glow-accent top-[-10%] left-[-10%] animate-float"
                />
                <div
                    className="glow-spot glow-secondary bottom-[-10%] right-[-10%] animate-float-reverse"
                />

                {/* Animated Background Beams */}
                <div className="background-beams">
                    <div className="beam left-[10%] animation-delay-0" style={{ animationDuration: '12s' }}></div>
                    <div className="beam left-[30%] animation-delay-2" style={{ animationDuration: '8s' }}></div>
                    <div className="beam left-[50%] animation-delay-5" style={{ animationDuration: '15s' }}></div>
                    <div className="beam left-[80%] animation-delay-1" style={{ animationDuration: '10s' }}></div>
                </div>

                {/* Floating Decorative Elements */}
                {[
                    { left: '15%', top: '20%', duration: 12 },
                    { left: '75%', top: '15%', duration: 15 },
                    { left: '25%', top: '65%', duration: 18 },
                    { left: '85%', top: '75%', duration: 14 },
                    { left: '45%', top: '35%', duration: 16 },
                    { left: '60%', top: '85%', duration: 13 }
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-accent/20 animate-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            '--particle-duration': `${particle.duration}s`
                        } as React.CSSProperties}
                    />
                ))}
            </div>
            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow relative z-10">
                {/* High-Impact Hero Section: Premium Centered Arrangement */}
                <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-32 pb-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgb(var(--accent-rgb))_0%,_transparent_70%)] opacity-10 pointer-events-none" />

                    <div
                        className="relative z-10 max-w-5xl mx-auto text-center"
                    >
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold mb-8 backdrop-blur-md"
                        >
                            Modern Websites • Real Results
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none" data-aos="zoom-out" data-aos-duration="1000">
                            <span className="block text-foreground">Building</span>
                            <span
                                className="bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic font-serif"
                                style={{ fontFamily: "var(--font-familyIII)" }}
                            >
                                Digital Experiences.
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-duration="1000">
                            Ohio Codespace creates
                            <span className="text-foreground font-medium"> fast, responsive, and conversion-focused websites </span>
                            for businesses and creators who want to stand out online. Every project is built with performance,
                            clarity, and growth in mind.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                            {buttons.map((btn, idx) => (
                                <a
                                    key={idx}
                                    href={btn.href}
                                    data-aos={btn.aos}
                                    data-aos-duration="1000"
                                    className={`group px-10 py-5 rounded-2xl font-bold transition-all text-center flex items-center justify-center gap-3 text-lg hover:scale-105 active:scale-95 hover:-translate-y-0.5 ${btn.primary
                                        ? "bg-accent text-accent-foreground shadow-2xl shadow-accent/30 hover:shadow-accent/40"
                                        : "bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 backdrop-blur-sm"
                                        }`}
                                >
                                    <FontAwesomeIcon
                                        icon={btn.icon}
                                        className="group-hover:rotate-12 transition-transform"
                                    />
                                    {btn.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Visual Layer */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                        className="relative z-10 w-full max-w-screen-2xl mx-auto -mt-10 mb-[-10rem] pointer-events-none select-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 h-full" />
                        <div className="scale-75 md:scale-95 lg:scale-100 opacity-80 hover:opacity-100 transition-opacity">
                            <BookStackSidePerspective />
                        </div>
                    </div>
                </section>

                {/* Interactive Services Grid: Performance Optimized Design */}
                <section id="services" className="py-32 px-4 relative z-10 overflow-hidden bg-background">
                    {/* Layered Background Glows- Optimized */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-indigo-500/5 rounded-full" />
                        <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full" />
                        <div className="absolute -bottom-24 left-1/4 w-[600px] h-[600px] bg-rose-500/5 rounded-full" />

                        {/* Subtle Noise Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-20 relative">
                            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em]" data-aos="fade-left" data-aos-duration="1000">
                                Our Solutions
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter" data-aos="zoom-out" data-aos-duration="1000">
                                Strategic <span className="text-foreground">Expertise</span> for the <span className="text-accent italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Modern</span> Web
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-duration="1000">
                                We combine technical excellence with creative strategy to build digital ecosystems that outperform the competition.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    data-aos={service.aos}
                                    data-aos-delay={service.delay * 1000}
                                    className="glass-card p-10 rounded-[2.5rem] group relative flex flex-col items-start text-left"
                                >
                                    <div className="icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-accent mb-8 border border-white/5 shadow-inner">
                                        <FontAwesomeIcon icon={service.icon} className="text-2xl group-hover:scale-110 transition-transform duration-500" />
                                    </div>

                                    <h4 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h4>

                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>



                                    {/* Accent corner glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us: Architectural Bento Design */}
                <section className="py-32 px-4 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Left Side: Editorial Content */}
                        <div
                            className="lg:col-span-12 xl:col-span-5"
                        >
                            <div className="flex items-center gap-4 mb-6" data-aos="fade-left" data-aos-duration="1000">
                                <div className="w-12 h-[1px] bg-accent" />
                                <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Why Ohio Codespace</span>
                            </div>

                            <h3 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter" data-aos="zoom-out" data-aos-duration="1000">
                                Creative <span className="text-accent italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Design</span> & Smart <span className="text-accent italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Development</span>
                            </h3>


                            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light" data-aos="fade-up" data-aos-duration="1000">
                                We build custom, high-performance websites designed to convert and deliver results. Each site focuses on clean design, fast performance, and a seamless user experience.
                            </p>


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { title: "Conversion Focused", desc: "Every element is designed to drive results.", aosHead: "zoom-in", durationHead: 1000, aosDesc: "fade-left", durationDesc: 1000 },
                                    { title: "Blazing Performance", desc: "Lightning-fast load times across all devices.", aosHead: "zoom-in", durationHead: 1000, aosDesc: "fade-left", durationDesc: 1000 }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <h4 className="text-foreground font-bold flex items-center gap-2" data-aos={item.aosHead} data-aos-duration={item.durationHead}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground" data-aos={item.aosDesc} data-aos-duration={item.durationDesc}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>


                            <Link
                                href="/portfolio"
                                className="group inline-flex items-center gap-4 px-8 py-4 bg-foreground/5 border border-foreground/10 rounded-2xl text-foreground font-bold hover:bg-foreground/10 transition-all overflow-hidden relative"
                            >
                                <span className="relative z-10">Learn More</span>
                                <FontAwesomeIcon icon={faArrowRight} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        {/* Right Side: Premium Bento Grid */}
                        <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[160px]">
                            {/* Feature 1: Large Glass Card */}
                            <div
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                className="md:col-span-2 md:row-span-2 relative p-8 rounded-[2.5rem] bg-gradient-to-br from-foreground/[0.05] to-transparent border border-foreground/10 overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl -mr-32 -mt-32" />
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6">
                                        <FontAwesomeIcon icon={faPalette} size="2x" />
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold text-foreground mb-4 transition-colors group-hover:text-accent">Uncompromising Premium UI</h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Custom interfaces designed for clarity, elegance, and seamless user interaction—setting a high standard for modern web experiences.
                                        </p>                                    </div>
                                </div>
                            </div>

                            {/* Feature 2: Square Card */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="relative p-6 rounded-[2.5rem] bg-foreground/[0.03] border border-foreground/10 flex flex-col items-center justify-center text-center group hover:bg-foreground/[0.06] transition-all"
                            >
                                <FontAwesomeIcon icon={faChartLine} className="text-emerald-400 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-foreground block">SEO Excellence</span>
                                <span className="text-xs text-emerald-400/60 mt-1 uppercase tracking-widest font-mono">+420% Increased Visibility</span>
                            </div>

                            {/* Feature 3: Tall Vertical Card */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="md:row-span-2 relative p-8 rounded-[2.5rem] bg-accent text-accent-foreground overflow-hidden group shadow-2xl shadow-accent/20"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent)]" />
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <FontAwesomeIcon icon={faUsersCog} size="2x" className="mb-6 opacity-80" />
                                    <div>
                                        <h4 className="text-2xl font-black mb-4 leading-tight">Client-First Engineering</h4>
                                        <p className="text-sm font-medium opacity-80">
                                            Dedicated support and direct collaboration with lead engineers to bring your vision to life efficiently and reliably.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4: Long Card */}
                            <div
                                data-aos="fade-up"
                                data-aos-delay="400"
                                className="md:col-span-2 relative p-6 rounded-[2.5rem] bg-foreground/[0.03] border border-foreground/10 flex items-center gap-6 px-10 hover:bg-foreground/[0.06] transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <FontAwesomeIcon icon={faTachometerAlt} />
                                </div>
                                <div className="flex-grow">
                                    <span className="font-bold text-foreground block">Accelerated Delivery</span>
                                    <span className="text-sm text-muted-foreground">Transform your ideas into production-ready websites quickly and efficiently.</span>                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactForm />

                {/* Final CTA: Impact Split Design */}
                <section className="py-24 px-4 bg-background relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                    <div className="max-w-7xl mx-auto overflow-hidden rounded-[3rem] border border-foreground/5 bg-gradient-to-r from-accent/10 to-transparent">
                        <div className="grid grid-cols-1">
                            {/* Left: Message & Action */}
                            <div className="p-12 md:p-20 flex flex-col justify-center items-start text-left relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(16,185,129,0.1),_transparent)] pointer-events-none" />

                                <div
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    className="relative z-10"
                                >
                                    <div className="flex items-center gap-3 mb-8">

                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                                        </span>
                                        <span className="text-accent font-mono text-xs uppercase tracking-widest">Systems Operational / Ready for Deployment</span>
                                    </div>

                                    <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
                                        Ready to Elevate <span className="block text-accent">Your Brand?</span>
                                    </h2>

                                    <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
                                        Transform your online presence with websites designed to captivate, convert, and scale your business effortlessly.
                                    </p>


                                    <div className="flex flex-col sm:flex-row gap-6 w-full">
                                        <a
                                            href="mailto:ohiocodespace@gmail.com"
                                            className="group px-10 py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
                                        >
                                            Initiate Project <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        <Link
                                            href="/business"
                                            className="px-10 py-5 bg-foreground/5 border border-foreground/10 text-foreground rounded-2xl font-bold text-lg hover:bg-foreground/10 transition-all text-center backdrop-blur-sm"
                                        >
                                            Solutions Deck
                                        </Link>
                                    </div>
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

export default HomeClient;
