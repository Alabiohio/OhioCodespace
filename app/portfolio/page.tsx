import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Ohiocheoya Alabi - Portfolio",
    description:
        "Full-Stack Developer specializing in React & Next.js — building fast, scalable websites that drives growth.",

    keywords: [
        "Ohiocheoya Alabi",
        "Ohio Codespace",
        "Frontend Developer",
        "React Developer",
        "Full-Stack Web Developer",
        "Portfolio Website",
        "Web Developer Nigeria",
        "Business Websites Nigeria",
        "AI Chatbot Projects",
        "Responsive Web Design",
        "Modern Web Development",
        "High-Performance Websites",
        "Graphic Design Services",
        "Google My Business Optimization",
        "Digital Solutions for Businesses",
    ],


    authors: [{ name: "Ohiocheoya Alabi" }],
    creator: "Ohiocheoya Alabi",

    openGraph: {
        title: "Ohiocheoya Alabi — Portfolio",
        description:
            "Full-Stack Developer specializing in React & Next.js — building fast, scalable websites that drives growth.",
        url: "assets/images/profile.png",
        siteName: "Ohio Codespace",
        images: [
            {
                url: "assets/images/profile.png",
                width: 1200,
                height: 630,
                alt: "Og image",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Ohiocheoya Alabi — Portfolio",
        description:
            "Full-Stack Developer specializing in React & Next.js — building fast, scalable websites that drives growth.",
        images: ["assets/images/profile.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};


const Portfolio: React.FC = () => {
    return <PortfolioClient projects={projects} />;
};

export default Portfolio;
