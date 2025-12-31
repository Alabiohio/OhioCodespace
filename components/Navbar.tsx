"use client";
import React, { useState, useEffect } from "react";
import NavLink from "@/components/NavLink";
import hdIc from "@/assets/img/ohio.png";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300
        ${scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"}`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <Image src={hdIc} alt="Ohio Codespace" className="relative h-10 w-10 object-contain" />
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">
                        OHIO<span className="text-accent">Codespace</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    <NavLink
                        href="/"
                        className="text-gray-300 hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        href="/portfolio"
                        className="text-gray-300 hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Portfolio
                    </NavLink>

                    <NavLink
                        href="/business"
                        className="text-gray-300 hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Business Solutions
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
                        className="focus:outline-none transition-transform duration-300 bg-white/5 p-2 rounded-lg border border-white/10"
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faXmark : faBarsStaggered}
                            className={`text-xl transition-all duration-300 ${isOpen ? "rotate-90 text-accent" : "text-white"}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-glass-border p-6 shadow-2xl space-y-6">
                    <NavLink
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="block text-xl text-gray-300 py-3 px-4 transition-all duration-300 rounded-xl"
                        activeClassName="text-accent font-bold bg-accent/10 border-l-4 border-accent"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        href="/portfolio"
                        onClick={() => setIsOpen(false)}
                        className="block text-xl text-gray-300 py-3 px-4 transition-all duration-300 rounded-xl"
                        activeClassName="text-accent font-bold bg-accent/10 border-l-4 border-accent"
                    >
                        Portfolio
                    </NavLink>

                    <NavLink
                        href="/business"
                        onClick={() => setIsOpen(false)}
                        className="block text-xl text-gray-300 py-3 px-4 transition-all duration-300 rounded-xl"
                        activeClassName="text-accent font-bold bg-accent/10 border-l-4 border-accent"
                    >
                        Business Solutions
                    </NavLink>

                    <a
                        href="mailto:ohiocodespace@gmail.com"
                        className="block w-full bg-accent text-accent-foreground text-center font-bold py-4 rounded-xl shadow-lg shadow-accent/20"
                    >
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
