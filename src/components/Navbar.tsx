import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import hdIc from "../assets/img/ohio.png";
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
            className={`w-full fixed top-0 z-50 py-2 px-6 headerNav transition-colors duration-300 ${scrolled ? "bg-slate-900 shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img
                        src={hdIc}
                        loading="lazy"
                        alt="Ohio Codespace Logo"
                        className="h-10 w-10 object-contain"
                        id="hdImg"
                    />
                    <span
                        className={`text-2xl font-bold transition-colors hi duration-300 ${scrolled ? "text-cyan-100" : "text-white"
                            }`}
                    >
                        OHIO Codespace
                    </span>
                </div>

                {/* Desktop Links */}
                <div
                    className={`hidden md:flex space-x-6 font-medium transition-colors duration-300 ${scrolled ? "text-gray-200" : "text-cyan-300"
                        }`}
                >
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:text-cyan-700 transition ${isActive ? "text-yellow-600 font-bold bg-slate-800 px-3 rounded-xl scale-105" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            `hover:text-cyan-700 transition ${isActive ? "text-yellow-600 bg-slate-800 px-3 rounded-xl scale-105" : ""}`
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/business"
                        className={({ isActive }) =>
                            `hover:text-cyan-700 transition ${isActive ? "text-yellow-600 font-bold bg-slate-800 px-3 rounded-xl scale-105" : ""}`
                        }
                    >
                        Business
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        title={isOpen ? "Close Menu" : "Open Menu"}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        onClick={toggleMenu}
                        className="focus:outline-none transition-transform duration-300"
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faXmark : faBarsStaggered}
                            className={`text-2xl transform transition-transform duration-300 ${isOpen ? "rotate-90 scale-110" : ""
                                } ${scrolled ? "text-gray-200" : "text-cyan--200"}`}
                        />
                    </button>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden transition-all duration-500 
    ${isOpen
                        ? "max-h-[500px] opacity-100 mt-4 py-4"
                        : "max-h-0 opacity-0 mt-0 py-0"} 
    bg-slate-900 shadow rounded-lg px-6 flex flex-col space-y-4`}
            >

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-cyan-600 transition block px-4 py-2 ${isActive ? "text-yellow-600 font-bold bg-slate-800 rounded-md" : "text-cyan-300"}`
                    }
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                        `hover:text-cyan-600 transition block px-4 py-2 ${isActive ? "text-yellow-600 font-bold bg-slate-800 rounded-md" : "text-cyan-300"}`
                    }
                    onClick={() => setIsOpen(false)}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="/business"
                    className={({ isActive }) =>
                        `hover:text-cyan-600 transition block px-4 py-2 ${isActive ? "text-yellow-600 font-bold bg-slate-800 rounded-md" : "text-cyan-300"}`
                    }
                    onClick={() => setIsOpen(false)}
                >
                    Business
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
