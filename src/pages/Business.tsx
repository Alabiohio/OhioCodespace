import React from "react";
import Navbar from "../components/Navbar";
import TypingText from "../components/Typewriter";
import BookStackSidePerspective from "../components/BookSlide";
import Footer from "../components/Footer";
import exeImg from "../assets/img/exe.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBolt, faMobileAlt, faChartLine, faShoppingCart, faHeadset, faHandshake, faBullseye } from '@fortawesome/free-solid-svg-icons';

const Business: React.FC = () => {
    return (
        <div className="w-full">

            <header>
                <Navbar />
            </header>


            <main>

                <section className="text-white flex flex-col justify-center items-center text-center px-4" id="brImg">
                    <div className="text-2xl font-semibold text-center tyTxt">
                        <TypingText bizPage />
                    </div>
                    <BookStackSidePerspective />

                </section>

                {/* Hero Section */}
                <section className="py-16 px-6 text-center business-hero">
                    <div className="max-w-3xl mx-auto">
                        <h1
                            className="text-4xl font-extrabold mb-4"
                            data-aos="zoom-out"
                        >
                            The Digital Engine for Your Revenue.
                        </h1>

                        <p
                            className="text-gray-300 text-lg leading-relaxed mb-6"
                            data-aos="fade-up-left"
                        >
                            Stop leaving money on the table. We engineer high-performance web platforms
                            designed to convert visitors into clients, drive sales, and scale your
                            operations.
                        </p>

                        <a
                            href="mailto:ohiocodespace@gmail.com?subject=I%20Want%20To%20Boost%20My%20Business"
                            className="inline-flex items-center gap-2 text-white py-3 px-6 rounded-lg hover:bg-indigo-800 transition button"
                            data-aos="fade-up"
                        >
                            <FontAwesomeIcon icon={faRocket} /> Launch Your Growth
                        </a>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 px-6 business-benefits">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2
                            className="text-3xl font-bold mb-8"
                            data-aos="zoom-out"
                        >
                            How We Help Your Business Grow
                        </h2>

                        <ul
                            className="space-y-4 text-left text-gray-300"
                            data-aos="fade-up-right"
                        >
                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faBolt} className="service-icon mt-1" />
                                Lightning-fast websites that keep customers engaged
                            </li>

                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faMobileAlt} className="service-icon mt-1" />
                                Mobile-first layouts that look great on all screens
                            </li>

                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faChartLine} className="service-icon mt-1" />
                                SEO-optimized structure to improve online visibility
                            </li>

                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faShoppingCart} className="service-icon mt-1" />
                                Seamless eCommerce integration for smarter online sales
                            </li>

                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faHeadset} className="service-icon mt-1" />
                                Dedicated support to keep your business running smoothly
                            </li>
                        </ul>

                    </div>
                </section>

                {/* Start Now */}
                <section className="py-16 px-6 text-center startNow">
                    <div className="max-w-3xl mx-auto">
                        <h3
                            className="text-3xl font-bold text-indigo-700 mb-4"
                            data-aos="zoom-out"
                        >
                            Your Next Level Starts Now.
                        </h3>

                        <p
                            className="text-gray-700 text-lg leading-relaxed mb-6"
                            data-aos="fade-up-right"
                        >
                            Don’t let a weak website hold back your business. Unlock the potential of a
                            custom, high-converting platform.
                        </p>

                        <a
                            href="mailto:ohiocodespace@gmail.com?subject=I%20Want%20To%20Boost%20My%20Business"
                            className="inline-flex items-center gap-2 button text-white py-3 px-6 rounded-lg hover:bg-indigo-800 transition"
                            data-aos="zoom-in-up"
                        >
                            <FontAwesomeIcon icon={faHandshake} /> Claim Your Consultation
                        </a>
                    </div>
                </section>

                {/* Google My Business Section */}
                <section className="py-20 px-6 bg-indigo-50 gmb-ads" id="gmb-section">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2
                            className="text-3xl font-bold text-indigo-700 mb-4"
                            data-aos="zoom-out"
                        >
                            Dominate Local Search & Maps
                        </h2>

                        <p
                            className="text-gray-700 text-lg mb-4"
                            data-aos="fade-up-right"
                        >
                            We <strong>optimize your Google Business Profile</strong> for local SEO
                            dominance — ensuring your brand is seen first when customers search near you.
                        </p>

                        <p
                            className="text-gray-600"
                            data-aos="fade-up-left"
                        >
                            <strong>Be the trusted answer</strong> the moment they need your service.
                        </p>

                        <div className="mt-10 flex justify-center">
                            <img
                                src={exeImg}
                                alt="Google Business Example"
                                className="w-48"
                                data-aos="fade-up-right"
                            />
                        </div>

                        <a
                            href="mailto:ohiocodespace@gmail.com?subject=Google%20My%20Business%20Setup"
                            className="inline-flex items-center gap-2 bg-yellow-700 text-white py-3 px-6 rounded-lg hover:bg-indigo-800 transition mt-10"
                        >
                            <FontAwesomeIcon icon={faBullseye} /> Start Ranking Locally Now
                        </a>
                    </div>
                </section>
            </main>

            <Footer linkTo="/" linkText="Custom websites" />
        </div>
    );
};

export default Business;
