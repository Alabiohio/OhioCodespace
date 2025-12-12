import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
//import Footer from "../components/Footer";
import TypingText from "../components/Typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDesktop,
    faChartLine,
    faTachometerAlt,
    faUsersCog,
    faPhoneAlt,
    faGlobe,
    faArrowRight,
    faLaptopCode,
    faPalette,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import BookStackSidePerspective from "../components/Slide";

const Home: React.FC = () => {


    const buttons = [
        {
            label: "Free Consultation",
            icon: faPhoneAlt,
            href: "mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Free%20Consultation&body=Hi,%0D%0AI%20would%20like%20to%20schedule%20a%20free%20consultation.",
            aos: "fade-right",
        },
        {
            label: "Website Review",
            icon: faChartLine,
            href: "mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Website%20Review&body=Hi,%0D%0AI%20would%20like%20to%20request%20a%20website%20review.",
            aos: "fade-left",
        },
    ];

    const services = [
        {
            title: "Frontend Development",
            description: "Creating responsive, interactive web applications with React that help businesses attract customers and increase conversions.",
            icon: faLaptopCode,
            aos: "fade-up",
            time: "1000",
        },
        {
            title: "Web Design",
            description: "Designing intuitive and visually appealing websites that enhance user experience and drive business growth.",
            icon: faDesktop,
            aos: "fade-down",
            time: "1200",
        },
        {
            title: "Graphic Design",
            description: "Designing visually appealing graphics and branding materials that strengthen your business identity and engage customers.",
            icon: faPalette,
            aos: "fade-down",
            time: "1200",
        },
        {
            title: "Google My Business",
            description: "Setting up and optimizing your business on Google My Business to increase visibility and attract local customers.",
            icon: faGlobe,
            aos: "fade-down",
            time: "2000",
        },
        {
            title: "SEO & Digital Strategy",
            description: "Optimizing websites for search engines and integrating business strategies for online growth.",
            icon: faChartLine,
            aos: "fade-up",
            time: "1400",
        },
        {
            title: "UI/UX",
            description: "Creating intuitive, visually appealing interfaces and improving user experience across platforms.",
            icon: faPalette,
            aos: "fade-down",
            time: "1200",
        },
        {
            title: "Backend & Hosting",
            description: "Integrating APIs, Firebase, and other backend services for smooth, secure, and scalable web applications.",
            icon: faServer,
            aos: "fade-down",
            time: "1600",
        },
    ];



    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>



            {/* Hero Section */}
            <section className="text-white flex flex-col justify-center items-center text-center px-4" id="brImg">
                <div className="text-2xl font-semibold text-center tyTxt">
                    <TypingText />
                </div>

                <BookStackSidePerspective />

            </section>

            <section id="hero" className="text-center px-4 py-20 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        data-aos="zoom-out"
                        data-aos-duration="1500"
                    >
                        Your Website. <span className="text-indigo-600">Done Right.</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        data-aos="fade-up-left"
                    >
                        Get powerful, mobile-friendly websites that drive real growth for your business. From a
                        simple page refresh to a fully custom web application, every project is designed to perform flawlessly
                        across devices and leave a lasting impression. Make your digital presence count.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a
                            href="mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Website%20Development%20Inquiry&body=Dear%20Ohio%20Codespace,%0A%0AI%20am%20interested%20in%20creating%20a%20webpage%20and%20would%20like%20to%20discuss%20the%20details.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0A%0ABest%20regards,%0A[Your%20Name]"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300 flex items-center justify-center gap-2"
                            data-aos="zoom-in-up"
                        >
                            <i className="fas fa-envelope"></i> Let’s Build Your Website
                        </a>

                        <Link
                            to="/business"
                            rel="noopener noreferrer"
                            className="bg-gray-200 hover:bg-gray-300  font-semibold py-3 px-6 rounded-lg shadow transition duration-300 flex items-center justify-center gap-2 busLnk"
                            data-aos="zoom-in-up"
                        >
                            Lets Grow Your Business <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-4 mt-12" id="service">
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h3
                        className="text-3xl md:text-4xl font-bold mb-6"
                        data-aos="zoom-out"
                        data-aos-duration="1500"
                    >
                        What We Offer
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow p-6 flex-1 min-w-[250px] max-w-xs text-center hover:shadow-lg items"
                            data-aos={service.aos}
                            data-aos-duration={service.time}
                        >
                            <div className="text-lime-600 mb-4">
                                <FontAwesomeIcon icon={service.icon} size="2x" />
                            </div>
                            <h4 className="font-semibold text-xl mb-2">{service.title}</h4>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="about" className="px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        data-aos="zoom-out"
                        data-aos-duration="1200"
                    >
                        Building the Web, Your Way
                    </h2>

                    <p
                        className="text-lg md:text-xl text-gray-300"
                        data-aos="fade-up-right"
                        data-aos-duration="1200"
                    >
                        At <strong>Ohio Codespace</strong>, design meets functionality. We create modern, responsive websites
                        that not only look stunning but also perform flawlessly across all devices.
                        Whether you’re a business, creator, or startup — your online presence deserves to stand out.
                    </p>
                </div>
            </section>

            <section id="services" className="px-4">
                <div className="max-w-4xl mx-auto">
                    <h3
                        className="text-3xl md:text-4xl font-bold text-center mb-8"
                        data-aos="zoom-out"
                        data-aos-duration="1500"
                    >
                        Our Core Strengths
                    </h3>

                    <ul className="space-y-6 text-gray-00 text-lg">
                        <li className="flex items-start gap-4">
                            <span className="text-indigo-600 mt-1">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="lg" />
                            </span>
                            <span>
                                <strong>Modern Design:</strong> Sleek, responsive, and user-focused interfaces that adapt to every screen.
                            </span>
                        </li>

                        <li className="flex items-start gap-4">
                            <span className="text-indigo-600 mt-1">
                                <FontAwesomeIcon className="icon" icon={faChartLine} size="lg" />
                            </span>
                            <span>
                                <strong>SEO Optimization:</strong> Smart structure and metadata that help your website rank and get discovered faster.
                            </span>
                        </li>

                        <li className="flex items-start gap-4">
                            <span className="text-indigo-600 mt-1">
                                <FontAwesomeIcon className="icon" icon={faTachometerAlt} size="lg" />
                            </span>
                            <span>
                                <strong>High Performance:</strong> Blazing-fast load times with clean, efficient code that keeps users engaged.
                            </span>
                        </li>

                        <li className="flex items-start gap-4">
                            <span className="text-indigo-600 mt-1">
                                <FontAwesomeIcon className="icon" icon={faUsersCog} size="lg" />
                            </span>
                            <span>
                                <strong>Collaborative Approach:</strong> Every project is built with your input, vision, and goals in mind.
                            </span>
                        </li>
                    </ul>
                </div>
            </section>

            <section
                id="gmbIntro"
                className="w-full bg-slate-800 py-16 px-6 text-center mt-12"
                data-aos="fade-up"
            >
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-sienna-700 mb-4">
                        Get Found on Google
                    </h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        We optimize your Google Business Profile so customers can easily discover you
                        on Search and Maps. Boost your visibility, rank locally, and attract more clients.
                    </p>

                    <Link
                        to="/business#gmb-section"
                        className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                    >
                        Learn More
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </section>


            <section id="cta" className="mt-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <p
                        className="text-lg md:text-xl text-gray-700 mb-6"
                        data-aos="fade-up-right"
                        data-aos-duration="1100"
                    >
                        Your website should be more than just a page — it should be a powerful tool for growth.
                        Let’s build something remarkable together.
                    </p>

                    <a
                        target="_blank"
                        href="mailto:ohiocodespace@gmail.com,ohioalabi@gmail.com?subject=Website%20Development%20Inquiry"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300 inline-flex items-center gap-2"
                        data-aos="zoom-in-up"
                        data-aos-duration="1100"
                    >
                        <i className="fas fa-envelope"></i> Start Your Project
                    </a>
                </div>

                <div className="max-w-4xl mt-4 mx-auto flex justify-center">
                    {buttons.map((btn, index) => (
                        <a
                            key={index}
                            href={btn.href}
                            aria-label={btn.label}
                            target="_blank"
                            className="flex flex-row items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-6 rounded-lg shadow transition duration-300 w-full sm:w-auto gap-2 secII"
                            data-aos={btn.aos}
                            data-aos-duration="1200"
                        >
                            <FontAwesomeIcon icon={btn.icon} size="lg" />
                            <span>{btn.label}</span>
                        </a>
                    ))}
                </div>
            </section>


            <Footer />

        </div>
    );
};

export default Home;
