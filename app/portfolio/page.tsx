import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Ohiocheoya Alabi - Portfolio",
    description:
        "Explore a curated portfolio featuring responsive business websites, AI-driven apps, and sleek UI/UX designs crafted to deliver results.",

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
            "Showcasing professional web solutions: responsive business websites, AI-powered applications, and modern UI/UX designs built for performance and engagement.",
        url: "https://ohiocodespace.vercel.app/portfolio",
        siteName: "Ohio Codespace",
        images: [
            {
                url: "https://ohiocodespace.vercel.app/ogImg.jpeg",
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
            "Explore a curated portfolio featuring responsive business websites, AI-driven apps, and sleek UI/UX designs crafted to deliver results.",
        images: ["https://ohiocodespace.vercel.app/ogImg.jpeg"],
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
