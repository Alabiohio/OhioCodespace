"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload, faArrowRight, faMapMarkerAlt, faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../assets/img/profileImg.png";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface PortfolioClientProps {
    projects: Project[];
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.65, ease: "easeOut", delay },
} as any);

const PortfolioClient: React.FC<PortfolioClientProps> = ({ projects }) => {
    const featured = projects.filter((p) => p.isFeatured);
    const others = projects.filter((p) => !p.isFeatured);

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot glow-accent top-[20%] right-[-10%]" />
                <div className="glow-spot glow-secondary bottom-[20%] left-[-10%]" />
                <div className="background-beams">
                    <div className="beam left-[15%] animation-delay-1" style={{ animationDuration: "11s" }} />
                    <div className="beam left-[45%] animation-delay-3" style={{ animationDuration: "13s" }} />
                    <div className="beam left-[75%] animation-delay-5" style={{ animationDuration: "16s" }} />
                </div>
            </div>

            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow relative z-10">

                {/* ─── HERO ─────────────────────────────────────────────── */}
                <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-10">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-20 left-40 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-10 right-20 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto w-full">
                        {/* Name + headline */}
                        <motion.div {...fadeUp(0.1)} className="text-center mb-6">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-6">
                                Ohiocheoya{" "}
                                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                                    Alabi
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                                Full-Stack Developer specializing in{" "}
                                <span className="text-foreground font-medium">React & Next.js</span> — building
                                fast, beautiful web experiences that help businesses grow.
                            </p>
                        </motion.div>

                        {/* Meta row */}
                        <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
                            <span className="flex items-center gap-1.5">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-accent text-xs" />
                                Lagos State, Nigeria · Remote
                            </span>
                            <span className="w-1 h-1 rounded-full bg-foreground/20" />
                            <span className="flex items-center gap-1.5">
                                <FontAwesomeIcon icon={faBriefcase} className="text-accent text-xs" />
                                3+ Years Experience
                            </span>
                            <span className="w-1 h-1 rounded-full bg-foreground/20" />
                            <span className="flex items-center gap-1.5">
                                <FontAwesomeIcon icon={faCode} className="text-accent text-xs" />
                                15+ Projects Shipped
                            </span>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-base hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                            >
                                View My Work <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="px-8 py-4 bg-foreground/5 border border-foreground/15 text-foreground rounded-2xl font-bold text-base hover:bg-foreground/10 transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <FontAwesomeIcon icon={faDownload} className="text-accent text-sm" />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Profile card */}
                        <motion.div {...fadeUp(0.4)} className="max-w-xl mx-auto">
                            <div className="p-1 rounded-3xl bg-glass-bg border border-glass-border backdrop-blur-xl overflow-hidden">
                                <div className="bg-background/80 p-6 rounded-[calc(1.5rem-4px)] flex items-center gap-5">
                                    <Image
                                        src={profilePic}
                                        alt="Ohiocheoya Alabi"
                                        width={72}
                                        height={72}
                                        priority
                                        className="w-16 h-16 rounded-full border-2 border-accent object-cover shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-foreground text-base">Ohiocheoya Alabi</p>
                                        <p className="text-accent text-sm font-mono">Full-Stack Developer</p>
                                        <p className="text-muted-foreground text-xs mt-1 truncate">ohioalabi@gmail.com</p>
                                    </div>
                                    <div className="flex gap-3 shrink-0">
                                        <a href="https://github.com/Alabiohio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground hover:bg-foreground/10 transition-all">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href="mailto:ohioalabi@gmail.com" className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-all">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ─── ABOUT ────────────────────────────────────────────── */}
                <section id="about" className="py-8 px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div {...fadeUp(0)} className="mb-4">
                            <span className="text-accent font-bold tracking-widest uppercase text-xs">About Me</span>
                        </motion.div>
                        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                            I build products <br />
                            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">people actually use.</span>
                        </motion.h2>
                        <motion.p {...fadeUp(0.1)} className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            I&apos;m a self-driven Full-Stack Developer based in Lagos State, Nigeria, with 3+ years of hands-on experience building production web applications. My work spans e-commerce platforms, NGO websites, AI chatbots, and event systems — always with a focus on clean code, great UX, and measurable impact.
                        </motion.p>
                        <motion.p {...fadeUp(0.15)} className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl">
                            I&apos;m currently seeking roles where I can contribute to meaningful products, collaborate with strong teams, and continue growing as an engineer.
                        </motion.p>

                        {/* Stats */}
                        <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-foreground/5">
                            {[
                                { value: "3+", label: "Years of Experience" },
                                { value: "15+", label: "Projects Shipped" },
                                { value: "100%", label: "Client Satisfaction" },
                            ].map((s, i) => (
                                <div key={i} className="text-center p-4 rounded-2xl bg-glass-bg border border-glass-border">
                                    <div className="text-3xl font-black text-accent mb-1">{s.value}</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest leading-tight">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ─── EXPERIENCE ───────────────────────────────────────── */}
                <section className="py-8 px-4 bg-background">
                    <div className="max-w-3xl mx-auto">
                        <motion.div {...fadeUp(0)} className="mb-12">
                            <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-3">Experience</span>
                            <h2 className="text-3xl md:text-4xl font-black">Professional Journey</h2>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Freelance Full-Stack Developer",
                                    company: "Ohio Codespace",
                                    period: "2022 – Present",
                                    type: "Freelance",
                                    bullets: [
                                        "Designed and shipped 9+ production web applications across e-commerce, NGO, AI, and event sectors.",
                                        "Built full-stack solutions with Next.js, React, TypeScript, and PostgreSQL.",
                                        "Delivered end-to-end: UI design, development, database integration, deployment, and SEO.",
                                    ],
                                },
                                {
                                    title: "Frontend Developer",
                                    company: "Various Clients",
                                    period: "2022 – 2023",
                                    type: "Contract",
                                    bullets: [
                                        "Built responsive landing pages and e-commerce solutions for small businesses.",
                                        "Improved client digital presence through performance optimization and SEO.",
                                    ],
                                },
                                {
                                    title: "Graphic Designer & Web Consultant",
                                    period: "2021 – 2022",
                                    type: "Freelance",
                                    bullets: [
                                        "Helped businesses establish their first digital footprint through branding and simple websites.",
                                        "Designed marketing collateral using Adobe Photoshop and Illustrator.",
                                    ],
                                },
                            ].map((job, i) => (
                                <motion.div key={i} {...fadeUp(i * 0.08)} className="p-6 md:p-8 rounded-3xl bg-glass-bg border border-glass-border hover:border-accent/20 transition-all group">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{job.title}</h3>
                                            <p className="text-accent text-sm font-mono">{job.company}</p>
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            <span className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-bold text-muted-foreground">{job.period}</span>
                                            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent">{job.type}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2">
                                        {job.bullets.map((b, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <span className="text-accent shrink-0 mt-0.5 text-xs">▸</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Resume CTA */}
                        <motion.div {...fadeUp(0.3)} className="mt-10 text-center">
                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground/5 border border-foreground/15 text-foreground rounded-2xl font-bold hover:bg-foreground/10 transition-all"
                            >
                                <FontAwesomeIcon icon={faDownload} className="text-accent" />
                                Download Full Resume (PDF)
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* ─── SKILLS ───────────────────────────────────────────── */}
                <section className="py-14 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] blur-[120px] rounded-full" />
                    </div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <motion.div {...fadeUp(0)} className="mb-4">
                            <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-3">Tech Stack</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Engineered with <em className="not-italic text-accent">Precision</em></h2>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed">Modern technologies and architectural patterns I use to ship high-quality, scalable products.</p>
                        </motion.div>

                        <div className="mt-16 space-y-14">
                            {[
                                { title: "Core Technologies", skills: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Foundation 6", "Bootstrap"], accent: "bg-accent/5" },
                                { title: "Specialized Expertise", skills: ["UI/UX Principles", "SEO Optimization", "Chatbot Development", "Performance Tuning", "Three.js"], accent: "bg-secondary/5" },
                                { title: "Tools & Workflow", skills: ["Git / GitHub", "Vercel", "Supabase", "Firebase", "Google Search Console", "Google Analytics", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"], accent: "bg-glass-bg" },
                            ].map((group, i) => (
                                <motion.div key={i} {...fadeUp(i * 0.1)} className="relative px-4">
                                    <div className={`absolute -inset-4 md:-inset-8 ${group.accent} rounded-[2rem] blur-2xl -z-10 opacity-30`} />
                                    <h4 className="text-foreground font-bold text-center mb-8 text-[10px] md:text-sm tracking-[0.4em] uppercase">
                                        <span className="px-4 py-2 border-x border-glass-border bg-glass-bg backdrop-blur-sm rounded-sm">{group.title}</span>
                                    </h4>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-wrap gap-2 sm:gap-6 lg:gap-12 justify-center items-center">
                                        {group.skills.map((skill) => (
                                            <SkillBadge key={skill} name={skill} large={true} />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── PROJECTS ─────────────────────────────────────────── */}
                <section id="projects" className="py-18 px-4 bg-accent/5">
                    <div className="max-w-6xl mx-auto">
                        <motion.div {...fadeUp(0)} className="mb-4">
                            <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-3">Selected Work</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Featured Projects</h2>
                            <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                Production applications built end-to-end — from design to deployment. Each card shows my role, the outcome, and links to a live demo.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-14 mb-20">
                            {featured.map((project, index) => (
                                <motion.div key={project.id} {...fadeUp(index * 0.08)}>
                                    <ProjectCard {...project} />
                                </motion.div>
                            ))}
                        </div>

                        {others.length > 0 && (
                            <>
                                <motion.div {...fadeUp(0)} className="mb-10">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground/90">Other Notable Projects</h3>
                                    <div className="w-12 h-1 bg-foreground/10 mt-4 rounded-full" />
                                </motion.div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {others.map((project, index) => (
                                        <motion.div key={project.id} {...fadeUp(index * 0.07)}>
                                            <ProjectCard {...project} />
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>

                {/* ─── CONTACT CTA ──────────────────────────────────────── */}
                <section className="py-24 px-4 bg-background border-t border-foreground/5">
                    <div className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-glass-border bg-gradient-to-br from-accent/10 via-transparent to-secondary/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12 md:p-16">
                            <motion.div {...fadeUp(0)} className="flex flex-col justify-center">
                                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Let&apos;s Connect</span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 leading-tight">
                                    Ready to build something <span className="text-accent">great?</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    I&apos;m actively looking for full-time roles and freelance projects. If you&apos;re hiring or have an interesting project, let&apos;s talk.
                                </p>
                                <div className="space-y-3">
                                    <a href="mailto:ohioalabi@gmail.com" className="flex items-center gap-4 p-4 bg-accent text-accent-foreground rounded-2xl font-bold hover:bg-accent/90 transition-all active:scale-95">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                                        <div className="text-left">
                                            <div className="text-xs opacity-75">Email Me Directly</div>
                                            <div className="text-sm">ohioalabi@gmail.com</div>
                                        </div>
                                    </a>
                                    <a href="https://github.com/Alabiohio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-foreground/5 border border-foreground/10 text-foreground rounded-2xl font-bold hover:bg-foreground/10 transition-all">
                                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                                        <div className="text-left">
                                            <div className="text-xs text-muted-foreground">Browse My Code</div>
                                            <div className="text-sm">GitHub · Alabiohio</div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp(0.15)} className="flex flex-col justify-center">
                                <h3 className="text-xl font-bold mb-6">Why hire me?</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {[
                                        { icon: "⚡", title: "Ships Fast", desc: "I deliver on deadline, every time." },
                                        { icon: "🏗️", title: "Full-Stack", desc: "Frontend, backend, DB — one developer." },
                                        { icon: "🎨", title: "Design-Aware", desc: "I care deeply about UI/UX quality." },
                                        { icon: "📈", title: "Results-Driven", desc: "I build for outcomes, not just features." },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-glass-bg border border-glass-border hover:bg-glass-bg-hover transition-all">
                                            <div className="text-2xl shrink-0">{item.icon}</div>
                                            <div>
                                                <div className="font-bold text-foreground text-sm">{item.title}</div>
                                                <div className="text-xs text-muted-foreground">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <ContactForm />
            </main>

            <Footer linkTo="/business" linkText="Business Solutions" />
        </div>
    );
};

export default PortfolioClient;
