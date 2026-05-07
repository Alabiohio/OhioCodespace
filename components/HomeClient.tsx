"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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

    const heroMetrics = [
        { value: "48hr", label: "Typical first response" },
        { value: "SEO-ready", label: "Structured for search visibility" },
        { value: "Custom", label: "Designed around your business" },
    ];

    return (
        <div className="w-full min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: "url('/assets/images/bg-images/light_down1.png')" }} />
                <div className="absolute inset-0 w-full h-full hero-scrim z-10" />

                <div className="relative z-20 flex-grow flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-3xl font-acme font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-5xl xl:text-[3rem]"
                    >
                        Websites and digital products that make you stand out.
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
                    >
                        {buttons.map((btn, idx) => (
                            <a
                                key={idx}
                                href={btn.href}
                                className={`group w-full sm:w-auto px-8 py-4 rounded-2xl font-bold transition-all text-center flex items-center justify-center gap-3 text-base ${btn.primary
                                    ? "bg-accent text-accent-foreground shadow-[0_0_40px_-10px_rgba(var(--accent-rgb),0.5)] hover:bg-accent/80 hover:shadow-[0_0_60px_-15px_rgba(var(--accent-rgb),0.6)] hover:-translate-y-1"
                                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md hover:-translate-y-1"
                                    }`}
                            >
                                <FontAwesomeIcon icon={btn.icon} className="transition-transform duration-300 group-hover:scale-110" />
                                {btn.label}
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Hero Metrics 
                <div className="hero-enter relative z-20 w-full max-w-4xl mx-auto px-4" style={{ animationDelay: '400ms' }}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-10">
                        {heroMetrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <span className="text-3xl md:text-4xl font-black text-white mb-2 font-acme tracking-tight">{metric.value}</span>
                                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 font-bold">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>*/}
            </section>

            <main className="relative z-10">
                {/* Services Section */}
                <section className="py-32 px-4 bg-background relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-glass-border pb-10">
                            <div>
                                <h2 className="text-5xl md:text-6xl font-acme font-black tracking-tight mb-4">Our Expertise</h2>
                                <p className="text-muted-foreground max-w-lg text-lg">We deliver high-impact digital solutions that combine modern aesthetics with robust engineering.</p>
                            </div>
                            <Link href="/portfolio" className="hidden md:inline-flex items-center gap-3 text-sm font-bold text-foreground hover:text-accent transition-colors group px-6 py-3 rounded-full border border-glass-border hover:bg-glass-bg mt-6 md:mt-0">
                                Explore Portfolio <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-12 md:gap-y-20 mt-12 md:mt-0">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: parseFloat(service.delay), ease: "easeOut" }}
                                    className={`group relative flex flex-col overflow-hidden md:overflow-visible ${idx % 2 === 1 ? 'mt-10 md:mt-0' : ''}`}
                                >
                                    {/* Giant background icon (Desktop only) */}
                                    <div className="hidden md:block absolute -top-8 -left-6 text-[8rem] leading-none text-foreground/[0.03] select-none group-hover:text-accent/[0.06] transition-colors duration-700 z-0 pointer-events-none">
                                        <FontAwesomeIcon icon={service.icon} />
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Gradient accent bar (Mobile only) */}
                                        <div className="md:hidden h-[3px] w-10 rounded-full bg-gradient-to-r from-accent to-accent/20 group-hover:w-full transition-all duration-700 ease-out mb-5" />

                                        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                                            <div className="hidden md:flex w-12 h-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 group-hover:scale-110 group-hover:border-accent/30 transition-all duration-500 shadow-inner">
                                                <FontAwesomeIcon icon={service.icon} className={`text-lg text-foreground group-hover:${service.iconColor} transition-colors duration-500`} />
                                            </div>

                                            {/* Small inline icon (Mobile only) */}
                                            <div className="md:hidden text-accent/60 group-hover:text-accent transition-colors duration-500">
                                                <FontAwesomeIcon icon={service.icon} className="text-base" />
                                            </div>

                                            <h4 className="text-[16px] md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-500 leading-tight">
                                                {service.title}
                                            </h4>
                                        </div>

                                        <p className="text-muted-foreground/80 leading-[1.75] text-[12px] md:text-base flex-grow md:pl-[4rem]">
                                            {service.description}
                                        </p>

                                        <div className="hidden md:block w-full h-[2px] bg-glass-border mt-10 relative overflow-hidden md:ml-[4rem] md:w-[calc(100%-4rem)]">
                                            <div className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-700 ease-out md:group-hover:w-full" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-32 px-4 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-12 xl:col-span-5"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-px bg-accent" />
                                <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Why Ohio Codespace</span>
                            </div>

                            <h3 className="text-5xl md:text-6xl font-acme font-black mb-8 leading-[1.1] tracking-tighter">
                                Creative{" "}
                                <span className="text-accent italic" style={{ fontFamily: "var(--font-familyIII)" }}>Design</span>
                                {" "}&amp; Smart{" "}
                                <span className="text-accent italic" style={{ fontFamily: "var(--font-familyIII)" }}>Development</span>
                            </h3>

                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
                                We build custom, high-performance websites designed to convert and deliver results. Each site focuses on clean design, fast performance, and a seamless user experience.
                            </p>

                            <ul className="space-y-3 mb-12">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faCheck} className="text-accent text-[10px]" />
                                        </div>
                                        {item}
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
                        </motion.div>

                        <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[160px]">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="md:col-span-2 md:row-span-2 relative p-8 rounded-[2.5rem] bg-glass-bg border border-glass-border overflow-hidden group hover:border-glass-border-hover hover:bg-glass-bg-hover transition-all duration-500"
                            >
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
                                            Custom interfaces designed for clarity, elegance, and seamless interaction, setting a high standard for modern web experiences.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative p-6 rounded-[2.5rem] bg-glass-bg border border-glass-border flex flex-col items-center justify-center text-center group hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                                    <FontAwesomeIcon icon={faChartLine} className="text-emerald-400 text-sm" />
                                </div>
                                <span className="font-bold text-foreground text-sm block">SEO Excellence</span>
                                <span className="text-xs text-emerald-400/70 mt-1 uppercase tracking-widest font-mono">+100% Visibility</span>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="md:row-span-2 relative p-8 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent/80 text-accent-foreground overflow-hidden group shadow-2xl shadow-accent/25"
                            >
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
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="md:col-span-2 relative p-6 rounded-[2.5rem] bg-glass-bg border border-glass-border flex items-center gap-5 px-8 group hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <FontAwesomeIcon icon={faTachometerAlt} />
                                </div>
                                <div className="flex-grow">
                                    <span className="font-bold text-foreground block text-sm">Accelerated Delivery</span>
                                    <span className="text-xs text-muted-foreground">Production-ready websites, delivered fast.</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <ContactForm />

                <section className="py-24 px-4 bg-background relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] pointer-events-none" />

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-7xl mx-auto overflow-hidden rounded-[3rem] border border-accent/15 bg-gradient-to-br from-accent/10 via-transparent to-sky-500/5 relative"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(180,138,90,0.18),transparent_60%)] pointer-events-none" />

                        <div className="p-12 md:p-20 flex flex-col justify-center items-start text-left relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                                </span>
                                <span className="text-accent font-mono text-xs uppercase tracking-widest">Systems operational and ready for deployment</span>
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
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HomeClient;
