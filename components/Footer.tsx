import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface FooterProps {
    linkTo?: string;
    linkText?: string;
}

const Footer: React.FC<FooterProps> = ({ linkTo = "/business", linkText = "Business" }) => {
    return (
        <footer className="bg-background py-20" id="footer">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-white tracking-tight" data-aos="zoom-out" data-aos-duration="1600">
                                OHIO<span className="text-accent">Codespace</span>
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-xs leading-relaxed" data-aos="fade-up" data-aos-duration="1600">
                            Crafting high-performance digital experiences that drive growth and leave a lasting impression.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm" data-aos="fade-left" data-aos-duration="1600">Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-accent transition-colors" data-aos="fade-up" data-aos-duration="1200">Home</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-accent transition-colors" data-aos="fade-up" data-aos-duration="1400">Portfolio</Link></li>
                            <li><Link href="/business" className="text-gray-400 hover:text-accent transition-colors" data-aos="fade-up" data-aos-duration="1600">Business Solution</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Get in Touch</h4>
                        <a
                            href="mailto:ohiocodespace@gmail.com"
                            className="flex items-center gap-3 text-gray-400 hover:text-accent transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <span className="font-medium">ohiocodespace@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Ohio Codespace. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">Privacy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
