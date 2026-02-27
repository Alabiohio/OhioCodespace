import { Project } from "@/types";
import lizzysunique from '@/assets/img/lizzysunique.png';
import lexa from '@/assets/img/lexa.png';
import unibenClearance from '@/assets/img/uniben-clearance.png';
import destinyArt from '@/assets/img/destiny-art.png';
import engineBlog from '@/assets/img/engineBlog.png';
import creativeGene from '@/assets/img/creativegene.png';

export const projects: Project[] = [
    {
        id: 6,
        title: "Creative Gene",
        description: "A professional landing page with a custom registration dashboard and Supabase integration.",
        keyFeatures: [
            "Designed and developed the responsive landing page",
            "Connected the frontend to Supabase for registration and data storage",
            "Built a custom dashboard for viewing and managing registrations",
            "Implemented full CRUD functionality, making the page fully interactive"
        ],
        imgUrl: creativeGene.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Responsive Design", "UI/UX"],
        isFeatured: true,
    },
    {
        id: 5,
        title: "Engine Blog",
        description: "Engine Blog is a modern, dynamic web platform designed to keep engineering students updated with campus news, academic resources, and opportunities.",
        keyFeatures: [
            "Designed and built a responsive blog platform using Next.js & React",
            "Implemented authentication and user management with Clerk",
            "Integrated Sanity CMS for dynamic content management",
            "Built comments and reactions system using Supabase (PostgreSQL & RLS)",
            "Implemented search, categories, and filtering for posts",
            "Optimized pages for SEO(metadata, slugs, performance)",
            "Developed profile management with image upload",
            "Applied secure access control using database policies (RLS)",
            "Deployed and maintained the application",
            "Ensured mobile-first, accessible UI with Tailwind CSS"
        ],
        imgUrl: engineBlog.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Sanity CMS", "Clerk", "Responsive Design", "UI/UX"],
        isFeatured: true,
    },
    {
        id: 4,
        title: "Lexa",
        description: "AI-powered chatbot web app built with React and Node.js, featuring text & image inputs, real-time responses, web search integration, and interactive user interface.",
        imgUrl: lexa.src,
        skillsUsed: ["React", "JavaScript", "PostgreSQL", "Node.js", "Foundation 6", "CSS", "APIs", "Web Search Integration"],
        isFeatured: false,
    },
    {
        id: 3,
        title: "Lizzy's Unique Palate Website",
        description: "Foundation 6 website for a pastry & event planning business featuring a custom full-screen gallery, smooth animations, and a secure contact form integrated with Formspree.",
        imgUrl: lizzysunique.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "Formspree", "SEO"],
        isFeatured: false,
    },
    {
        id: 2,
        title: "UNIBEN Clearance Assistant",
        description: "Web platform designed to assist 100-level UNIBEN students with the clearance process, offering user-friendly navigation, responsive design, and simplified administrative steps.",
        imgUrl: unibenClearance.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "Responsive Design", "UI/UX"],
        isFeatured: false,
    },
    {
        id: 1,
        title: "Destiny Art Website",
        description: "Foundation 6 website for an art business, featuring a responsive portfolio gallery, smooth image animations, SEO optimization, and fast page load performance.",
        imgUrl: destinyArt.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "SEO"],
        isFeatured: false,
    },
];
