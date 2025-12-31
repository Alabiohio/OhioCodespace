"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Projects data
interface Project {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    skillsUsed: string[];
}

interface PortfolioClientProps {
    projects: Project[];
}

const PortfolioClient: React.FC<PortfolioClientProps> = ({ projects }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative">
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
                        <div className="absolute top-0 left-0 w-[40%] h-full bg-accent/5 backdrop-blur-[2px] border-r border-white/5" />
                        <div className="absolute top-20 left-40 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                        {/* Left: Developer Profile Visual */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="relative"
                        >
                            <div className="relative p-1 rounded-[3rem] bg-gradient-to-br from-white/10 via-transparent to-accent/20 border border-white/10 backdrop-blur-xl overflow-hidden group">
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Mock Developer Card */}
                                <div className="bg-background/90 p-12 rounded-[2.8rem] space-y-8 relative z-10">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div>
                                            <h3 className="text-2xl font-black text-white mb-1" data-aos="fade-up" data-aos-duration="500" data-aos-delay="50">Ohiocheoya Alabi</h3>
                                            <p className="text-accent font-mono text-sm" data-aos="fade-left" data-aos-duration="2000">Full-Stack Developer</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { label: "Specialization", value: "React & Next.js", aosLabel: "fade-left", aosDuration: "1500", },
                                            { label: "Experience", value: "3+ Years", aosLabel: "fade-left", aosDuration: "1800", },
                                            { label: "Portfolio", value: "15+ Completed", aosLabel: "fade-left", aosDuration: "2000", }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <span className="text-sm text-gray-500 uppercase tracking-wider" data-aos={item.aosLabel} data-aos-duration={item.aosDuration}>{item.label}</span>
                                                <span className="font-bold text-white" data-aos="fade-right" data-aos-duration={item.aosDuration}>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex gap-3">
                                        <a
                                            href="https://github.com/Alabiohio"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            data-aos="fade-right"
                                            data-aos-duration="2000"
                                            className="flex-grow p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center font-bold text-white flex items-center justify-center gap-2"
                                        >
                                            <FontAwesomeIcon icon={faGithub} /> GitHub
                                        </a>
                                        <a
                                            href="mailto:ohioalabi@gmail.com"
                                            data-aos="fade-left"
                                            data-aos-duration="2000"
                                            className="flex-grow p-4 rounded-2xl bg-accent text-accent-foreground text-center font-bold shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
                                        >
                                            <FontAwesomeIcon icon={faEnvelope} /> Email
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Mission Statement */}
                        <div>
                            <div className="flex items-center gap-3 mb-8" data-aos="fade-left"
                                data-aos-duration="1000">
                                <div className="w-10 h-[2px] bg-accent" />
                                <span className="text-accent font-bold tracking-widest uppercase text-xs">Portfolio & Projects</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter" data-aos="zoom-out"
                                data-aos-duration="1000">
                                Building <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Web Experiences</span> Users Love
                            </h1>


                            <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed" data-aos="fade-up"
                                data-aos-duration="1000">
                                I help businesses elevate their online presence with
                                <span className="text-white font-medium"> clean, responsive websites </span>
                                that captivate users and drive meaningful results. Each project blends modern design with technical precision.
                            </p>


                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="#projects"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="px-10 py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg shadow-2xl shadow-accent/30 text-center transition-all hover:scale-105 active:scale-95"
                                >
                                    View My Work
                                </a>
                                <a
                                    href="#about"
                                    data-aos="fade-up"
                                    data-aos-duration="1300"
                                    className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all text-center backdrop-blur-sm"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-24 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div>
                            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3" data-aos="zoom-out"
                                data-aos-duration="1000">About Me</h2>

                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto" data-aos="fade-up"
                                data-aos-duration="1000">
                                I help businesses grow online through web development, graphic design, and Google My Business optimization. My solutions range from responsive websites to eye-catching visuals and enhanced GMB profiles that drive engagement and visibility.
                            </p>
                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/5">
                                {[
                                    { label: "Experience", value: "3+ Years", aos: "fade-up-right", aosDuration: "1000" },
                                    { label: "Completed", value: "15+ Projects", aos: "fade-up", aosDuration: "1300" },
                                    { label: "Satisfaction", value: "100% Client Focus", aos: "fade-down", aosDuration: "1600" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-black text-white mb-1" data-aos={stat.aos} data-aos-duration={stat.aosDuration}>{stat.value}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-widest" data-aos={stat.aos} data-aos-duration={stat.aosDuration}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
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

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-24">
                            <div
                                className="inline-block px-5 py-2 mb-8 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.4em] backdrop-blur-md"
                                data-aos="fade-down"
                                data-aos-duration="1000"
                            >
                                Tech Ecosystem
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter" data-aos="zoom-out" data-aos-duration="1300">
                                Engineered with <span className="text-white italic font-serif" style={{ fontFamily: 'var(--font-familyIII)' }}>Precision</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light" data-aos="fade-up" data-aos-duration="1500">
                                A curated selection of modern technologies and architectural patterns used to build high-performance, scalable digital experiences.
                            </p>
                            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-12 rounded-full" data-aos="fade-left" data-aos-duration="1600" />
                        </div>

                        <div className="space-y-32">
                            {[
                                {
                                    title: "Core Technologies",
                                    aosTitle: "fade-left",
                                    aosDuration: "1000",
                                    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Foundation 6", "Bootstrap", "PostgreSQL"],
                                    accent: "bg-accent/5"
                                },
                                {
                                    title: "Specialized Expertise",
                                    aosTitle: "fade-left",
                                    aosDuration: "1300",
                                    skills: ["UI/UX Principles", "SEO Optimization", "Chatbot Development", "Performance Tuning"],
                                    accent: "bg-secondary/5"
                                },
                                {
                                    title: "Tools & Workflow",
                                    aosTitle: "fade-left",
                                    aosDuration: "1600",
                                    skills: ["Git / GitHub", "Vercel", "Firebase", "Adobe Creative Suite"],
                                    accent: "bg-white/5"
                                }
                            ].map((group, i) => (
                                <div
                                    key={i}
                                    className="relative px-4"
                                >
                                    {/* Group Background Accent */}
                                    <div className={`absolute -inset-8 ${group.accent} rounded-[4rem] blur-3xl -z-10 opacity-30`} />

                                    <h4 className="text-white font-bold text-center mb-16 text-xs md:text-sm tracking-[0.5em] uppercase" data-aos={group.aosTitle}
                                        data-aos-duration={group.aosDuration}>
                                        <span className="px-8 py-3 border-x border-white/10 bg-black/20 backdrop-blur-sm rounded-sm">{group.title}</span>
                                    </h4>
                                    <div className="flex flex-wrap gap-10 md:gap-20 justify-center items-center">
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
                <section id="projects" className="py-24 px-4 bg-accent/5 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-accent font-semibold tracking-widest uppercase text-sm mb-3" data-aos="fade-up" data-aos-duration="1600">Selected Works</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6" data-aos="zoom-out" data-aos-duration="1600">Proven Digital Success</h3>
                            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" data-aos="fade-left" data-aos-duration="1600" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <ProjectCard {...project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA: Let's Connect */}
                <section className="py-24 px-4 bg-background">
                    <div className="max-w-6xl mx-auto overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 md:p-16">
                            {/* Left: Message */}
                            <div
                                data-aos="fade-right"
                                className="flex flex-col justify-center"
                            >
                                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" data-aos="zoom-out" data-aos-duration="1600">
                                    Let's Build Something <span className="text-accent">Amazing</span>
                                </h2>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed" data-aos="fade-up" data-aos-duration="1600">
                                    Have a project in mind? Whether it's a new website, a redesign, or custom development work, I'm here to help bring your vision to life.
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
                                        data-aos-duration="1600"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
                                    >
                                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                                        <div className="text-left">
                                            <div className="text-sm text-gray-500">View Code</div>
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
                                    <h3 className="text-2xl font-bold text-white mb-2" data-aos="zoom-out" data-aos-duration="1600">Why Work With Me?</h3>
                                    <p className="text-gray-500 text-sm" data-aos="fade-up" data-aos-duration="1600">Proven results and dedicated service</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: "⚡", label: "Fast Delivery", value: "On Time" },
                                        { icon: "💎", label: "Quality Code", value: "Clean & Tested" },
                                        { icon: "🎯", label: "Client Focus", value: "100%" },
                                        { icon: "🚀", label: "Modern Stack", value: "Latest Tech" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all">
                                            <div className="text-3xl mb-2" data-aos="fade-up" data-aos-duration="1600">{item.icon}</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1" data-aos="fade-left" data-aos-duration="1600">{item.label}</div>
                                            <div className="font-bold text-white text-sm" data-aos="fade-up" data-aos-duration="1600">{item.value}</div>
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
