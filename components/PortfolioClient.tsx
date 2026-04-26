"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profilePic from "../assets/img/profileImg.png";

import { Project } from "@/types";

interface PortfolioClientProps {
    projects: Project[];
}

const PortfolioClient: React.FC<PortfolioClientProps> = ({ projects }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">
            {/* Background Animations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div
                    className="glow-spot glow-accent top-[20%] right-[-10%] animate-float"
                />
                <div
                    className="glow-spot glow-secondary bottom-[20%] left-[-10%] animate-float-reverse"
                />

                {/* Animated Background Beams */}
                <div className="background-beams">
                    <div className="beam left-[15%] animation-delay-1" style={{ animationDuration: '11s' }}></div>
                    <div className="beam left-[45%] animation-delay-3" style={{ animationDuration: '13s' }}></div>
                    <div className="beam left-[75%] animation-delay-5" style={{ animationDuration: '16s' }}></div>
                </div>
            </div>

            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow relative z-10">
                {/* Portfolio Hero: Developer Spotlight */}
                <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 px-4">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-[40%] h-full bg-accent/5 backdrop-blur-[2px] border-r border-glass-border" />
                        <div className="absolute top-20 left-40 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                        {/* Left: Developer Profile Visual */}
                        <div
                            data-aos="fade-right"
                            className="relative"
                        >
                            <div className="relative p-1 rounded-[3rem] bg-glass-bg border border-glass-border backdrop-blur-xl overflow-hidden group">
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Mock Developer Card */}
                                <div className="bg-background/90 p-12 rounded-[2.8rem] space-y-8 relative z-10">
                                    <div className="flex items-center gap-6 mb-8">
                                        <Image
                                            src={profilePic}
                                            alt="Ohiocheoya Alabi"
                                            width={96}
                                            height={96}
                                            priority
                                            className="w-24 h-24 rounded-full border-2 border-accent object-cover shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-2xl font-acme font-black text-foreground mb-1">Ohiocheoya Alabi</h3>
                                            <p className="text-accent font-mono text-sm">Full-Stack Developer</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { label: "Specialization", value: "React & Next.js" },
                                            { label: "Experience", value: "3+ Years" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-2xl bg-glass-bg border border-glass-border gap-2 sm:gap-0">
                                                <span className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</span>
                                                <span className="font-bold text-foreground">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-foreground/5 flex flex-col sm:flex-row gap-3">
                                        <a
                                            href="https://github.com/Alabiohio"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-grow p-4 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-all text-center font-bold text-foreground flex items-center justify-center gap-2"
                                        >
                                            <FontAwesomeIcon icon={faGithub} /> GitHub
                                        </a>
                                        <a
                                            href="mailto:ohioalabi@gmail.com"
                                            className="flex-grow p-4 rounded-2xl bg-accent text-accent-foreground text-center font-bold shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
                                        >
                                            <FontAwesomeIcon icon={faEnvelope} /> Email
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Mission Statement */}
                        <div data-aos="fade-left">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-[2px] bg-accent" />
                                <span className="text-accent font-bold tracking-widest uppercase text-xs">Portfolio & Projects</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
                                Building <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Web Experiences</span> Users Love
                            </h1>


                            <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
                                I help businesses elevate their online presence with
                                <span className="text-foreground font-medium"> clean, responsive websites </span>
                                that captivate users and drive meaningful results. Each project blends modern design with technical precision.
                            </p>


                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="#projects"
                                    className="px-10 py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/30 text-center transition-all hover:scale-105 active:scale-95"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#about"
                                    className="px-10 py-5 bg-foreground/5 border border-foreground/10 text-foreground rounded-2xl font-bold text-lg hover:bg-foreground/10 transition-all text-center backdrop-blur-sm"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-24 px-4">
                    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                        <div>
                            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">About Me</h2>

                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                                I help businesses grow online through web development, graphic design, and Google My Business optimization. My solutions range from responsive websites to eye-catching visuals and enhanced GMB profiles that drive engagement and visibility.
                            </p>
                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-foreground/5">
                                {[
                                    { label: "Experience", value: "3+ Years" },
                                    { label: "Completed", value: "15+ Projects" },
                                    { label: "Satisfaction", value: "100% Client Focus" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black text-foreground mb-1">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Timeline */}
                <section className="py-24 px-4 bg-background border-t border-foreground/5 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3" data-aos="fade-up" data-aos-duration="1000">My Journey</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6" data-aos="zoom-out" data-aos-duration="1000">Professional Experience</h3>
                            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" data-aos="fade-left" data-aos-duration="1000" />
                        </div>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/20 before:to-transparent">
                            {[
                                { title: "Freelance Full-Stack Developer", company: "Ohio Codespace", desc: "Building performant, accessible, and scalable web applications for a variety of businesses and startups." },
                                { title: "Frontend Developer", company: "Various Clients", desc: "Developed responsive landing pages, e-commerce solutions, and digital portfolios, driving increased client engagement." },
                                { title: "Graphic Designer & Web Consultant", company: "Local Businesses", desc: "Helped businesses establish their initial digital footprint through branding, graphic design, and simple websites." }
                            ].map((job, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group" data-aos="fade-up">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/20 bg-background text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ring-4 ring-background z-10 transition-transform duration-500 group-hover:scale-110">
                                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-glass-bg border border-glass-border hover:border-glass-border-hover hover:bg-glass-bg-hover transition-all duration-300 shadow-xl">
                                        <div className="mb-3">
                                            <h4 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors">{job.title}</h4>
                                        </div>
                                        <div className="text-foreground/70 font-bold mb-4 uppercase text-xs tracking-widest">{job.company}</div>
                                        <p className="text-muted-foreground text-base leading-relaxed">{job.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section (The "Tech Stack" look) */}
                <section className="py-32 px-4 relative overflow-hidden">
                    {/* Technical Background Layer */}
                    <div className="absolute inset-0 z-0">
                        {/* Fixed Grid Pattern - Refined visibility */}
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                backgroundSize: '60px 60px'
                            }}
                        />

                        {/* Ambient Glows */}
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.07] blur-[150px] rounded-full" />
                        <div className="absolute bottom-0 right-10 translate-y-1/4 w-[600px] h-[600px] bg-secondary/[0.07] blur-[150px] rounded-full" />

                        {/* Animated Beams Specifically for this section */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[10%] -left-[10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent -rotate-6 animate-pulse" />
                            <div className="absolute bottom-[20%] -left-[10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent rotate-3 animate-pulse" style={{ animationDelay: '2.5s' }} />
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10" data-aos="fade-up">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                                Engineered with <span className="text-foreground italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Precision</span>
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                                A curated selection of modern technologies and architectural patterns used to build high-performance, scalable digital experiences.
                            </p>
                            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-12 rounded-full" />
                        </div>

                        <div className="space-y-16 lg:space-y-32">
                            {[
                                {
                                    title: "Core Technologies",
                                    skills: ["React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Foundation 6", "Bootstrap"],
                                    accent: "bg-accent/5"
                                },
                                {
                                    title: "Specialized Expertise",
                                    skills: ["UI/UX Principles", "SEO Optimization", "Chatbot Development", "Performance Tuning", "Three.js"],
                                    accent: "bg-secondary/5"
                                },
                                {
                                    title: "Tools & Workflow",
                                    skills: ["Git / GitHub", "Vercel", "Supabase", "Firebase", "Google Search Console", "Bing Search Console", "Google Analytics", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"],
                                    accent: "bg-glass-bg"
                                },
                                {
                                    title: "Soft Skills",
                                    skills: ["Communication", "Teamwork & Collaboration", "Problem Solving", "Time Management", "Critical Thinking", "Leadership"],
                                    accent: "bg-accent/5"
                                }
                            ].map((group, i) => (
                                <div
                                    key={i}
                                    className="relative px-4"
                                >
                                    {/* Group Background Accent */}
                                    <div className={`absolute -inset-4 md:-inset-8 ${group.accent} rounded-[2rem] md:rounded-[4rem] blur-2xl md:blur-3xl -z-10 opacity-30`} />

                                    <h4 className="text-foreground font-bold text-center mb-8 md:mb-16 text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase">
                                        <span className="px-4 py-2 md:px-8 md:py-3 border-x border-glass-border bg-glass-bg backdrop-blur-sm rounded-sm">{group.title}</span>
                                    </h4>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-wrap gap-2 sm:gap-8 lg:gap-20 justify-center items-center justify-items-center">
                                        {group.skills.map((skill) => (
                                            <SkillBadge
                                                key={skill}
                                                name={skill}
                                                large={true}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-32 px-4 bg-accent/5 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3" data-aos="fade-up" data-aos-duration="800">Selected Works</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6" data-aos="zoom-out" data-aos-duration="800">Featured Case Studies</h3>
                            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" data-aos="fade-left" data-aos-duration="800" />
                        </div>

                        {/* Featured Projects - Big Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
                            {projects.filter(p => p.isFeatured).map((project, index) => (
                                <div
                                    key={project.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    data-aos-duration="1200"
                                >
                                    <ProjectCard {...project} />
                                </div>
                            ))}
                        </div>

                        {/* Other Projects - Smaller Grid */}
                        <div className="text-center mb-16">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground/90" data-aos="zoom-out" data-aos-duration="1200">Other Notable Projects</h3>
                            <div className="w-12 h-1 bg-foreground/10 mx-auto mt-6 rounded-full" data-aos="fade-up" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {projects.filter(p => !p.isFeatured).map((project, index) => (
                                <div
                                    key={project.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                    data-aos-duration="1000"
                                >
                                    <ProjectCard {...project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA: Let's Connect */}
                <section className="py-24 px-4 bg-background">
                    <div className="max-w-6xl mx-auto overflow-hidden rounded-[3rem] border border-glass-border bg-gradient-to-br from-accent/10 via-transparent to-secondary/10">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 p-8 sm:p-12 md:p-16">
                            {/* Left: Message */}
                            <div
                                data-aos="fade-right"
                                className="flex flex-col justify-center"
                            >
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight" data-aos="zoom-out" data-aos-duration="900">
                                    Let&apos;s Build Something <span className="text-accent">Amazing</span>
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-aos="fade-up" data-aos-duration="900">
                                    Have a project in mind? Whether it&apos;s a new website, a redesign, or custom development work, I&apos;m here to help bring your vision to life.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href="mailto:ohioalabi@gmail.com,ohiocodespace@gmail.com"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        className="flex items-center gap-4 p-5 bg-accent text-accent-foreground rounded-2xl font-bold shadow-2xl shadow-accent/20 hover:bg-accent/90 transition-all active:scale-95"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                                        <div className="text-left">
                                            <div className="text-sm opacity-80">Email Me</div>
                                            <div>ohioalabi@gmail.com</div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://github.com/Alabiohio"
                                        target="_blank"
                                        data-aos="fade-up"
                                        data-aos-duration="900"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-5 bg-foreground/5 border border-foreground/10 text-foreground rounded-2xl font-bold hover:bg-foreground/10 transition-all"
                                    >
                                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                                        <div className="text-left">
                                            <div className="text-sm text-muted-foreground">View Code</div>
                                            <div>GitHub Profile</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Right: Quick Stats */}
                            <div
                                data-aos="fade-left"
                                className="flex flex-col justify-center space-y-6"
                            >
                                <div className="text-center lg:text-left mb-4">
                                    <h3 className="text-2xl font-bold text-foreground mb-2" data-aos="zoom-out" data-aos-duration="900">Why Work With Me?</h3>
                                    <p className="text-muted-foreground text-sm" data-aos="fade-up" data-aos-duration="900">Proven results and dedicated service</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                    {[
                                        { icon: "⚡", label: "Fast Delivery", value: "On Time" },
                                        { icon: "💎", label: "Quality Code", value: "Clean & Tested" },
                                        { icon: "🎯", label: "Client Focus", value: "100%" },
                                        { icon: "🚀", label: "Modern Stack", value: "Latest Tech" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-glass-bg border border-glass-border text-center hover:bg-glass-bg-hover transition-all">
                                            <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                                            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1 leading-tight">{item.label}</div>
                                            <div className="font-bold text-foreground text-xs sm:text-sm">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
