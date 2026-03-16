"use client";
import React, { useState, useEffect } from "react";
import NavLink from "@/components/NavLink";
import hdIc from "@/assets/img/ohio.png";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark, faHome, faBriefcase, faRocket, faPaperPlane, faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300
        ${scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"}`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-full blur opacity-25"></div>
                        <Image src={hdIc} alt="Ohio Codespace" className="relative h-10 w-10 object-contain" />
                    </div>
                    <span className="text-2xl font-acme font-bold text-foreground tracking-tight">
                        OHIO<span className="text-accent"> Codespace</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    <NavLink
                        href="/"
                        className="text-muted-foreground hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        href="/portfolio"
                        className="text-muted-foreground hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Portfolio
                    </NavLink>

                    <NavLink
                        href="/business"
                        className="text-muted-foreground hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Business Solutions
                    </NavLink>

                    <NavLink
                        href="/inquiry"
                        className="text-muted-foreground hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Inquiry
                    </NavLink>

                    <a
                        href="mailto:ohiocodespace@gmail.com"
                        className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 px-4 py-2 rounded-lg font-bold transition-all text-sm"
                    >
                        Hire Us
                    </a>
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        title={isOpen ? "Close Menu" : "Open Menu"}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen ? "true" : "false"}
                        aria-controls="mobile-menu"
                        onClick={toggleMenu}
                        className="focus:outline-none transition-transform duration-300 bg-glass-bg p-2 rounded-lg border border-glass-border"
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faXmark : faBarsStaggered}
                            className={`text-xl transition-all duration-300 ${isOpen ? "rotate-90 text-accent" : "text-foreground"}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-background/60 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                />

                {/* Drawer */}
                <div
                    className={`absolute top-0 right-0 h-screen w-[85%] sm:w-[400px] bg-background border-l border-glass-border shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col h-full p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-2">
                                <Image src={hdIc} alt="Ohio Codespace" className="h-8 w-8 object-contain" />
                                <span className="text-xl font-black tracking-tighter">OHIO</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl bg-foreground/5 text-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-xl" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-grow space-y-4">
                            {[
                                { href: "/", label: "Home", icon: faHome, desc: "Back to main landing" },
                                { href: "/portfolio", label: "Portfolio", icon: faBriefcase, desc: "Recent works & projects" },
                                { href: "/business", label: "Business Solutions", icon: faRocket, desc: "Growth & SEO focus" },
                                { href: "/inquiry", label: "Inquiry Form", icon: faPaperPlane, desc: "Send a support request" },
                            ].map((link, i) => (
                                <NavLink
                                    key={i}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-transparent hover:border-accent/20 hover:bg-accent/5 transition-all"
                                    activeClassName="!bg-accent/10 !border-accent/30 !text-accent"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-background border border-glass-border flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={link.icon} className="text-lg group-hover:text-accent" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{link.label}</div>
                                        <div className="text-xs text-muted-foreground">{link.desc}</div>
                                    </div>
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-auto text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </NavLink>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="pt-8 border-t border-glass-border">
                            <div className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Connect</div>
                            <div className="flex gap-4 mb-8 justify-center">
                                {[
                                    { icon: faGithub, href: "https://github.com/Alabiohio" },
                                    { icon: faLinkedin, href: "https://www.linkedin.com/company/ohio-codespace" },
                                    { icon: faEnvelope, href: "mailto:ohiocodespace@gmail.com" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                    </a>
                                ))}
                            </div>
                            <a
                                href="mailto:ohiocodespace@gmail.com"
                                className="block w-full py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-center shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all active:scale-95"
                            >
                                Start a Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
