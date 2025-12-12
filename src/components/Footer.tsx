import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface FooterProps {
    linkTo?: string;
    linkText?: string;
}

const Footer: React.FC<FooterProps> = ({ linkTo = "/business", linkText = "Business" }) => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16" id="footer">
            <div data-aos="fade-up" className="max-w-4xl mx-auto px-4">

                {/* Contact Box */}
                <div className="text-center mb-8">
                    <h2 className="mb-2">Contact Ohio</h2>

                    <div className="flex justify-center">
                        <a
                            href="mailto:ohiocodespace@gmail.com"
                            aria-label="Email us"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center font-bold gap-3 text-lg text-cyan-200 hover:text-indigo-400 transition"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                            <span>ohiocodespace@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center space-y-2">
                    <Link
                        to={linkTo}
                        className="text-cyan-200 font-bold hover:text-indigo-400 transition block"
                    >
                        {linkText}
                    </Link>

                    <p className="text-gray-400 text-sm">
                        &copy; Ohio 2025. All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
