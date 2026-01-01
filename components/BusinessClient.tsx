"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import exeImg from "@/assets/img/exe.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBolt, faMobileAlt, faChartLine, faShoppingCart, faHandshake, faBullseye, faDotCircle } from '@fortawesome/free-solid-svg-icons';


const BusinessClient: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative">
            {/* Background Animations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div
                    className="glow-spot glow-secondary top-[-10%] right-[-10%] animate-float"
                />
                <div
                    className="glow-spot glow-accent bottom-[-10%] left-[-10%] animate-float-reverse"
                />

                {/* Animated Background Beams */}
                <div className="background-beams">
                    <div className="beam left-[20%] animation-delay-2" style={{ animationDuration: '9s' }}></div>
                    <div className="beam left-[60%] animation-delay-4" style={{ animationDuration: '14s' }}></div>
                </div>
            </div>

            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow relative z-10">
                {/* High-Impact Business Hero: The Revenue Split */}
                <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-4">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[50%] h-full bg-accent/5 backdrop-blur-[2px] border-l border-white/5" />
                        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/10 blur-[100px] rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                        {/* Left: Business Growth Engine */}
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-[2px] bg-accent" data-aos="fade-right" data-aos-duration="1000" />
                                <span className="text-accent font-bold tracking-widest uppercase text-xs" data-aos="fade-left" data-aos-duration="1200">Business Optimization</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter" data-aos="zoom-out" data-aos-duration="1400">
                                Driving <span className="text-white">Business Growth</span> with <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Smart Websites</span>
                            </h1>

                            <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed" data-aos="fade-up" data-aos-duration="1600">
                                Every website we build is engineered for <span className="text-white font-medium">performance, visibility, and conversions</span>. From local SEO to Google Business integration, we create digital solutions that help businesses grow, attract customers, and outperform competitors.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="mailto:ohiocodespace@gmail.com?subject=Boost%20My%20Business"
                                    data-aos="fade-up" data-aos-duration="1000"
                                    className="px-10 py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/30 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 group"
                                >
                                    <FontAwesomeIcon icon={faRocket} className="group-hover:translate-y-[-2px] transition-transform" />
                                    Boost My Business
                                </a>
                                <a
                                    href="#gmb-section"
                                    data-aos="fade-up" data-aos-duration="1400"
                                    className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg backdrop-blur-sm transition-all text-center flex items-center justify-center gap-3 hover:bg-white/10"
                                >
                                    <FontAwesomeIcon icon={faBullseye} /> Local SEO Focus
                                </a>
                            </div>
                        </div>

                        {/* Right: Performance Dashboard Visual */}
                        <div data-aos="zoom-in" data-aos-duration="800" className="relative">
                            <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 border border-white/10 backdrop-blur-xl group overflow-hidden">
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Business Performance Dashboard */}
                                <div className="bg-background/80 p-10 rounded-[2.8rem] space-y-8 relative z-10">
                                    {/* Top Traffic Indicators */}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                    </div>

                                    {/* Key Metrics */}
                                    <div className="space-y-6">
                                        {[
                                            { label: "Website Traffic", value: "+32.5%", color: "text-emerald-400", width: "w-[85%]" },
                                            { label: "Lead Conversion", value: "+12.4%", color: "text-blue-400", width: "w-[75%]" },
                                            { label: "Google Business Rank", value: "#1", color: "text-accent", width: "w-[100%]" }
                                        ].map((stat, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-400" data-aos="fade-up" data-aos-duration="1200">{stat.label}</span>
                                                    <span className={`font-bold ${stat.color}`} data-aos="fade-left" data-aos-duration="1400">{stat.value}</span>
                                                </div>
                                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-accent/40 rounded-full transition-all duration-1000 ${stat.width}`}
                                                        style={{ width: '0%', opacity: 0 }}
                                                        data-aos="progress-grow"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Support & Optimization */}
                                    <div className="pt-6 border-t border-white/5 flex gap-4">
                                        <div className="flex-grow p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                                            <div className="text-[10px] uppercase text-gray-500 mb-1">Client Support</div>
                                            <div className="text-xl font-black text-white" data-aos="fade-left" data-aos-duration="1600">24/7 Active</div>
                                        </div>
                                        <div className="flex-grow p-4 rounded-2xl bg-accent text-accent-foreground text-center shadow-lg shadow-accent/20">
                                            <div className="text-[10px] uppercase opacity-60 mb-1">Performance</div>
                                            <div className="text-xl font-black italic" data-aos="fade-right" data-aos-duration="1800">Optimized</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Decorative Icon */}
                                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center shadow-2xl rotate-12 animate-bounce-slow">
                                    <FontAwesomeIcon icon={faChartLine} className="text-white text-3xl" />
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

                {/* Business Solutions: Premium Feature Grid */}
                <section className="py-32 px-4 bg-background relative overflow-hidden">
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-20">
                            <div
                                data-aos="fade-up"
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest mb-6"
                            >
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                Business Solutions
                            </div>
                            <h2
                                data-aos="zoom-out"
                                data-aos-delay="100"
                                className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
                            >
                                How We <span className="text-accent italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Measure</span> Growth
                            </h2>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="text-xl text-gray-400 max-w-3xl mx-auto"
                            >
                                Every decision is focused on performance, visibility, and conversion — so your website supports real business goals, not just aesthetics.
                            </p>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                { icon: faBolt, title: "Speed & Performance", desc: "Fast-loading pages that reduce bounce rates and keep visitors engaged.", color: "from-yellow-500/20 to-orange-500/20", iconColor: "text-yellow-400" },
                                { icon: faMobileAlt, title: "Mobile Optimization", desc: "Designed for mobile users first, ensuring a smooth experience on every screen size.", color: "from-blue-500/20 to-cyan-500/20", iconColor: "text-blue-400" },
                                { icon: faChartLine, title: "Local SEO Visibility", desc: "Structured to improve local search rankings and help customers find you faster.", color: "from-emerald-500/20 to-green-500/20", iconColor: "text-emerald-400" },
                                { icon: faShoppingCart, title: "Online Sales Enablement", desc: "Simple, secure checkout flows that make it easy for customers to take action.", color: "from-purple-500/20 to-pink-500/20", iconColor: "text-purple-400" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-delay={i * 100}
                                    className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                    <div className="relative z-10">
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.iconColor} mb-6 group-hover:scale-110 transition-transform`} data-aos="zoom-in" data-aos-duration="1200">
                                            <FontAwesomeIcon icon={item.icon} size="lg" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-3" data-aos="fade-left" data-aos-duration="1200">{item.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-duration="1400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Card */}
                        <div
                            data-aos="fade-up"
                            className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10"
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-16">
                                {/* Left: Message */}
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight" data-aos="fade-left" data-aos-duration="1200">
                                        Ready to <span className="text-accent">Strengthen </span> Your Online Presence?
                                    </h3>
                                    <p className="text-lg text-gray-400 mb-8 leading-relaxed" data-aos="fade-up" data-aos-duration="1400">
                                        Work with a focused development partner to build a website that supports growth, improves visibility, and converts visitors into customers.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="mailto:ohiocodespace@gmail.com?subject=Business%20Growth%20Consultation"
                                            data-aos="fade-up"
                                            data-aos-duration="1600"
                                            className="px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 group"
                                        >
                                            <FontAwesomeIcon icon={faHandshake} className="group-hover:rotate-12 transition-transform" />
                                            Book Consultation
                                        </a>
                                    </div>
                                </div>

                                {/* Right: Stats Grid */}
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { label: "Performance Improvement", value: "3x Faster", icon: faBolt },
                                        { label: "Client Satisfaction", value: "98%", icon: faHandshake },
                                        { label: "Search Visibility", value: "Top Results", icon: faChartLine },
                                        { label: "Mobile Engagement", value: "+80%", icon: faMobileAlt }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                                            <FontAwesomeIcon icon={stat.icon} className="text-accent text-2xl mb-3" data-aos="fade-left" data-aos-duration="1200" />
                                            <div className="text-2xl font-black text-white mb-1" data-aos="zoom-out" data-aos-duration="1400">{stat.value}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider" data-aos="fade-up" data-aos-duration="1600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local SEO / GMB Section */}
                <section id="gmb-section" className="py-24 px-4 bg-accent/5 overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div
                                data-aos="fade-right"
                            >
                                <h3
                                    className="text-3xl md:text-5xl font-black mb-8 leading-tight"
                                    data-aos="zoom-out"
                                >
                                    Stand Out in <span className="text-accent underline decoration-accent/30">Local Search Results</span>
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Google Business Profile Optimization",
                                            text: "Your profile is carefully optimized to improve visibility on Google Search and Maps."
                                        },
                                        {
                                            title: "Review Growth Strategy",
                                            text: "Proven methods to encourage genuine customer reviews that build trust and credibility."
                                        },
                                        {
                                            title: "Accurate Local Citations",
                                            text: "Your business information is kept consistent across directories to strengthen local rankings."
                                        }
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent" data-aos="zoom-in" data-aos-duration="1200">
                                                <FontAwesomeIcon icon={faDotCircle} className="text-[10px]" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1" data-aos="zoom-in" data-aos-duration="1200">{point.title}</h4>
                                                <p className="text-sm text-gray-400" data-aos="zoom-in" data-aos-duration="1200">{point.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div
                                data-aos="fade-left"
                                className="relative flex justify-center"
                            >
                                <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />
                                <Image
                                    src={exeImg}
                                    alt="Google Business Example"
                                    data-aos="fade-left"
                                    className="relative w-full max-w-sm drop-shadow-2xl transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <ContactForm />
            </main>

            <Footer linkTo="/" linkText="Back to custom websites" />
        </div>
    );
};

export default BusinessClient;
