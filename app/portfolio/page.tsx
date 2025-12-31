import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";
import lizzysunique from '@/assets/img/lizzysunique.png';
import lexa from '@/assets/img/lexa.png';
import unibenClearance from '@/assets/img/uniben-clearance.png';
import destinyArt from '@/assets/img/destiny-art.png';
import engineBlog from '@/assets/img/engineBlog.png';

// Projects data
const projects = [
    {
        id: 5,
        title: "Engine Blog",
        description:
            "Engine Blog is a modern, dynamic web platform designed to keep engineering students updated with campus news, academic resources, and opportunities. Built with a focus on speed, aesthetics, and user experience.",
        imgUrl: engineBlog.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Responsive Design", "UI/UX"],
    },
    {
        id: 4,
        title: "Lexa",
        description:
            "AI-powered chatbot web app built with React and Node.js, featuring text & image inputs, real-time responses, web search integration, and interactive user interface.",
        imgUrl: lexa.src,
        skillsUsed: ["React", "JavaScript", "PostgreSQL", "Node.js", "Foundation 6", "CSS", "APIs", "Web Search Integration"],
    },
    {
        id: 3,
        title: "Lizzy's Unique Palate Website",
        description:
            "Foundation 6 website for a pastry & event planning business featuring a custom full-screen gallery, smooth animations, and a secure contact form integrated with Formspree.",
        imgUrl: lizzysunique.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "Formspree", "SEO"],
    },
    
    {
        id: 2,
        title: "UNIBEN Clearance Assistant",
        description:
            "Web platform designed to assist 100-level UNIBEN students with the clearance process, offering user-friendly navigation, responsive design, and simplified administrative steps.",
        imgUrl: unibenClearance.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "Responsive Design", "UI/UX"],
    },
    {
        id: 1,
        title: "Destiny Art Website",
        description:
            "Foundation 6 website for an art business, featuring a responsive portfolio gallery, smooth image animations, SEO optimization, and fast page load performance.",
        imgUrl: destinyArt.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "SEO"],
    },
];

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
