import { Project } from "@/types";
import lizzysunique from '@/assets/img/lizzysunique.png';
import lexa from '@/assets/img/lexa.png';
import unibenClearance from '@/assets/img/uniben-clearance.png';
import destinyArt from '@/assets/img/destiny-art.png';
import engineBlog from '@/assets/img/engineBlog.png';
import creativeGene from '@/assets/img/creativegene.png';
import ccbSite from '@/assets/img/ccbSite.png';
import ccbDashboard from '@/assets/img/ccbDashboard.png';
import bciHero from '@/assets/img/bci/hero.png';
import bciFooter from '@/assets/img/bci/footer.png';
import bciPrograms from '@/assets/img/bci/programs.png';
import bthHero from '@/assets/img/bth/hero.png';


export const projects: Project[] = [
    {
        id: 9,
        title: "Benin Tech Hangout 2.0",
        description: "A high-performance event landing page for Benin's largest tech gathering, featuring immersive 3D animations and a multi-path registration system.",
        role: "Lead Developer & UI Designer",
        impact: "Enabled seamless multi-category event registration for attendees, speakers, volunteers, and exhibitors — delivered on a tight deadline for a live public event.",
        category: "Event / Landing Page",
        date: "Apr 2026 - Present",
        keyFeatures: [
            "Designed and developed a premium, responsive landing page with a modern dark-themed tech aesthetic.",
            "Implemented interactive 3D elements using Three.js and React Three Fiber for a dynamic user experience.",
            "Built a multi-category registration system to manage attendees, speakers, volunteers, and exhibitors.",
            "Integrated layered motion and refined interface transitions to enhance visual engagement.",
            "Developed dynamic components including a real-time countdown timer, event roadmap, and interactive FAQ."
        ],
        imgUrl: bthHero.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "Three.js", "Responsive Design", "UI/UX"],
        liveUrl: "",
        isFeatured: true,
        status: "ongoing",
    },
    {
        id: 7,
        title: "CCB Farms",
        description: "A premium agricultural e-commerce platform with a sophisticated international booking engine and a comprehensive admin management system.",
        role: "Full-Stack Developer",
        impact: "Delivered a complete business system — from customer-facing storefront to a full admin dashboard — enabling the client to manage orders, pricing, and inventory end-to-end.",
        category: "E-Commerce / Admin Dashboard",
        date: "Feb 2025 - Present",
        keyFeatures: [
            "Designed and developed a premium, mobile-first storefront with high-end visual aesthetics",
            "Connected the frontend to a PostgreSQL database for real-time product management and order storage",
            "Engineered a robust admin dashboard for managing orders, products, and price catalogs",
            "Implemented automated professional email communication pipelines for order confirmations"
        ],
        imgUrl: ccbSite.src,
        images: [ccbSite.src, ccbDashboard.src],
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Responsive Design", "UI/UX"],
        liveUrl: "",
        isFeatured: true,
        status: "ongoing",
    },
    {
        id: 8,
        title: "Biome Conserve Initiative",
        description: "A professional NGO platform for environmental conservation and sustainable ecosystem management.",
        role: "Full-Stack Developer",
        impact: "Built a production-ready NGO platform that expanded the organization's global digital presence and community engagement channels.",
        category: "NGO / Non-Profit",
        date: "Apr 2026 - May 2026",
        keyFeatures: [
            "Designed and developed the responsive NGO website",
            "Integrated dynamic pages to showcase conservation field work",
            "Built a custom administrative dashboard for real-time project updates and impact tracking",
            "Optimized performance and SEO for global environmental advocacy"
        ],
        imgUrl: bciHero.src,
        images: [bciHero.src, bciFooter.src, bciPrograms.src],
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX"],
        liveUrl: "",
        isFeatured: true,
        status: "ongoing",
    },
    {
        id: 6,
        title: "Creative Gene",
        description: "A professional landing page with a custom registration dashboard and Supabase integration.",
        role: "Frontend Developer & Backend Integrator",
        impact: "Replaced a manual registration process with a fully automated, database-backed system that streamlined participant management.",
        category: "Landing Page / Dashboard",
        date: "Jan 2026 - Feb 2026",
        keyFeatures: [
            "Designed and developed the responsive landing page",
            "Connected the frontend to Supabase for registration and data storage",
            "Built a custom dashboard for viewing and managing registrations",
            "Implemented full CRUD functionality, making the page fully interactive"
        ],
        imgUrl: creativeGene.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Responsive Design", "UI/UX"],
        liveUrl: "https://creativefestcon.vercel.app",
        isFeatured: true,
    },
    {
        id: 5,
        title: "Engine Blog",
        description: "A modern, dynamic web platform designed to keep engineering students updated with campus news, academic resources, and opportunities.",
        role: "Full-Stack Developer",
        impact: "Built a fully-featured community blogging platform from scratch — complete with auth, CMS, comments, and search — serving an active student community.",
        category: "Full-Stack Web App",
        date: "Dec 2025 - Jan 2026",
        keyFeatures: [
            "Designed and built a responsive blog platform using Next.js & React",
            "Implemented authentication and user management with Clerk",
            "Integrated Sanity CMS for dynamic content management",
            "Built comments and reactions system using Supabase (PostgreSQL & RLS)",
            "Implemented search, categories, and filtering for posts",
            "Optimized pages for SEO (metadata, slugs, performance)",
            "Developed profile management with image upload",
            "Applied secure access control using database policies (RLS)",
            "Ensured mobile-first, accessible UI with Tailwind CSS"
        ],
        imgUrl: engineBlog.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Sanity CMS", "Clerk", "Responsive Design", "UI/UX"],
        liveUrl: "https://engineblog.live",
        isFeatured: true,
    },
    {
        id: 2,
        title: "UNIBEN Clearance Assistant",
        description: "Web platform designed to assist 100-level UNIBEN students with the clearance process, offering user-friendly navigation, responsive design, and simplified administrative steps.",
        role: "Developer",
        impact: "Simplified a complex administrative process for hundreds of incoming university students with clear, step-by-step digital guidance.",
        category: "Educational Tool",
        date: "June 2025 - Aug 2025",
        imgUrl: unibenClearance.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "Responsive Design", "UI/UX"],
        isFeatured: false,
    },
    {
        id: 4,
        title: "Lexa",
        description: "AI-powered chatbot web app built with React and Node.js, featuring text & image inputs, real-time responses, web search integration, and interactive user interface.",
        role: "Full-Stack Developer",
        impact: "Delivered a functional AI assistant with real-time search grounding and image input capabilities, demonstrating end-to-end API integration skills.",
        category: "AI / Web App",
        date: "March 2025 - May 2025",
        imgUrl: lexa.src,
        skillsUsed: ["React", "JavaScript", "PostgreSQL", "Node.js", "Foundation 6", "CSS", "APIs", "Web Search Integration"],
        isFeatured: false,
    },
    {
        id: 3,
        title: "Lizzy's Unique Palate",
        description: "Foundation 6 website for a pastry & event planning business featuring a custom full-screen gallery, smooth animations, and a secure contact form integrated with Formspree.",
        role: "Frontend Developer",
        impact: "Gave a local business their first professional web presence, featuring a full-screen gallery and a live contact form integration.",
        category: "Business Website",
        date: "Dec 2024 - Jan 2025",
        imgUrl: lizzysunique.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "Formspree", "SEO"],
        isFeatured: false,
    },
    {
        id: 1,
        title: "Destiny Art Website",
        description: "Foundation 6 website for an art business, featuring a responsive portfolio gallery, smooth image animations, SEO optimization, and fast page load performance.",
        role: "Frontend Developer",
        impact: "Established an artist's online portfolio, resulting in improved discoverability and client inquiries.",
        category: "Business Website",
        date: "Jan 2025",
        imgUrl: destinyArt.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "SEO"],
        isFeatured: false,
    },
];
