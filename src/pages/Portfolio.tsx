import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";
import lizzysunique from '../assets/img/lizzysunique.png';
import lexa from '../assets/img/lexa.png';
import unibenClearance from '../assets/img/uniben-clearance.png';
import destinyArt from '../assets/img/destiny-art.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";



// Projects with AOS animation added
const projects = [
    {
        id: 2,
        title: "Lizzy's Unique Palate Website",
        description:
            "Foundation 6 website for a pastry & event planning business featuring a custom full-screen gallery, smooth AOS animations, and a secure contact form integrated with Formspree.",
        imgUrl: lizzysunique,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "AOS", "Formspree", "SEO"],
        aos: "fade-right",
    },
    {
        id: 7,
        title: "Lexa",
        description:
            "AI-powered chatbot web app built with React and Node.js, featuring text & image inputs, real-time responses, web search integration, and interactive user interface.",
        imgUrl: lexa,
        skillsUsed: ["React", "JavaScript", "CSS", "APIs", "Web Search Integration"],
        aos: "fade-left",
    },
    {
        id: 4,
        title: "UNIBEN Clearance Assistant",
        description:
            "Web platform designed to assist 100-level UNIBEN students with the clearance process, offering user-friendly navigation, responsive design, and simplified administrative steps.",
        imgUrl: unibenClearance,
        skillsUsed: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
        aos: "zoom-in",
    },
    {
        id: 5,
        title: "Destiny Art Website",
        description:
            "Foundation 6 website for an art business, featuring a responsive portfolio gallery, smooth image animations with AOS, SEO optimization, and fast page load performance.",
        imgUrl: destinyArt,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "AOS", "SEO"],
        aos: "fade-up",
    },
];

const Portfolio: React.FC = () => {

    return (
        <div className="bg-transparent portfolio">
            {/* Top-right floating menu */}
            <div className="fixed top-4 right-4 flex flex-row gap-4 z-50">
                {/* GitHub Button */}
                <a
                    href="https://github.com/Alabiohio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center bg-slate-800 text-white rounded-full shadow-lg px-3 py-3 overflow-hidden transition-all duration-300 hover:px-6"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    <span className="ml-2 text-sm font-medium max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs">
                        GitHub
                    </span>
                </a>

                {/* Home Button */}
                <a
                    href="/"
                    className="group flex items-center bg-slate-800 text-white rounded-full shadow-lg px-3 py-3 overflow-hidden transition-all duration-300 hover:px-6"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                >
                    <FontAwesomeIcon icon={faHome} size="lg" />
                    <span className="ml-2 text-sm font-medium max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-xs">
                        Home
                    </span>
                </a>
            </div>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 hero">
                <h1 className="text-5xl md:text-6xl font-bold mb-4" data-aos="zoom-out" data-aos-duration="1500">Hi, I’m Ohio</h1>
                <p className="text-lg md:text-2xl mb-6 max-w-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    I help businesses improve their online presence with clean, responsive websites designed to engage customers and boost conversions.
                </p>
                <a
                    href="#projects"
                    className="px-6 py-3 bg-lime-500 text-black rounded-lg hover:bg-lime-800 hover:text-white transition"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    View My Work
                </a>
            </section>

            {/* About Section */}
            <section className="py-20 bg-slate-800 text-gray-300 about">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4" data-aos="zoom-out" data-aos-duration="1000">About Me</h2>
                        <p className="mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            I’m an experienced React developer with a proven track record of building modern, responsive, and high-performance web applications.
                            Over the years, I’ve crafted scalable and intuitive interfaces for a variety of projects, focusing on seamless user experiences and maintainable, efficient code.
                            I thrive on transforming complex ideas into interactive, polished applications that delight users and drive business results.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">

                            {/* Frontend Development */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">Frontend Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge name="React" />
                                    <SkillBadge name="Tailwind CSS" />
                                    <SkillBadge name="JavaScript" />
                                    <SkillBadge name="TypeScript" />
                                    <SkillBadge name="HTML" />
                                    <SkillBadge name="CSS" />
                                    <SkillBadge name="Bootstrap" />
                                    <SkillBadge name="ZURB Foundation" />
                                    <SkillBadge name="AOS Animation" />
                                </div>
                            </div>

                            {/* UI/UX & Design */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">UI/UX & Design</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge name="Web Design" />
                                    <SkillBadge name="UI/UX Principles" />
                                    <SkillBadge name="Graphic Design" />
                                    <SkillBadge name="Responsive Design" />
                                    <SkillBadge name="Landing Page Optimization" />
                                </div>
                            </div>

                            {/* Business & Marketing */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">Business & Marketing</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge name="SEO Optimization" />
                                    <SkillBadge name="Open Graph SEO" />
                                    <SkillBadge name="Google My Business" />
                                    <SkillBadge name="Business Website Strategy" />
                                </div>
                            </div>

                            {/* Backend, Hosting & Integration */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">Backend, Hosting & Integration</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge name="API Integration" />
                                    <SkillBadge name="Firebase" />
                                    <SkillBadge name="Firebase Auth" />
                                    <SkillBadge name="Firebase Firestore" />
                                    <SkillBadge name="Firebase Hosting" />
                                    <SkillBadge name="Website Management" />
                                </div>
                            </div>

                            {/* Tools & Workflow */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">Developer Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge name="Git" />
                                    <SkillBadge name="GitHub" />
                                    <SkillBadge name="Vercel Deployment" />
                                    <SkillBadge name="Netlify Deployment" />
                                    <SkillBadge name="Vite" />
                                    <SkillBadge name="npm / yarn" />
                                </div>
                            </div>

                            {/* AI & Automation */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">AI & Automation</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge name="Chatbot Development" />
                                    <SkillBadge name="Google Gemini API" />
                                    <SkillBadge name="Web Search Integration" />
                                    <SkillBadge name="Prompt Engineering" />
                                </div>
                            </div>

                            {/* Engineering Skills (Bonus) */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">Electronics & Arduino</h3>
                                <div className="flex flex-wrap gap-2">
                                    <SkillBadge name="Arduino Basics" />
                                    <SkillBadge name="PWM Control" />
                                    <SkillBadge name="Sensors & Actuators" />
                                    <SkillBadge name="Circuit Building" />
                                    <SkillBadge name="Tinkercad Simulation" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 text-orange-400">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold mb-10 text-center" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} data-aos={project.aos}>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-slate-900 text-gray-300 touch">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-4xl font-extrabold mb-4" data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="100">Get In Touch</h2>
                    <p className="mb-8 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                        I’m open to freelance projects or full-time opportunities. Whether you have an idea, a project, or just want to connect, feel free to reach out!
                    </p>
                    <a
                        href="mailto:ohioalabi@gmail.com,ohiocodespace@gmail.com,ohioalabi1@gmail.com"
                        className="inline-block px-8 py-4 bg-lime-500 text-black font-semibold rounded-lg shadow-lg hover:bg-lime-800 hover:text-white transition-colors duration-300"
                        data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100"
                    >
                        Email Me
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Portfolio;
