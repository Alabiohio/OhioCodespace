import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
    title: "Ohio Codespace",
    description: "Professional websites and Google Business Profile optimization built to improve search visibility, customer trust, and long-term business growth.",
    keywords: [
        "Ohio Codespace",
        "digital solutions for businesses",
        "professional web development",
        "modern business websites",
        "high-performance websites",
        "frontend web development",
        "React and Next.js development",
        "UI UX design for websites",
        "SEO-friendly web design",
        "Google Business Profile optimization",
        "local SEO services",
        "website performance optimization",
        "responsive website design",
        "conversion-focused web design",
        "scalable web applications"
    ],
    authors: [{ name: "Ohiocheoya Alabi" }],
    creator: "Ohiocheoya Alabi",

    openGraph: {
        title: "Ohio Codespace",
        description:
            "Get professional websites and Google Business Profile optimization built to improve search visibility, customer trust, and long-term business growth.",
        url: "https://ohiocodespace.vercel.app/portfolio",
        siteName: "Ohio Codespace",
        images: [
            {
                url: "https://ohiocodespace.vercel.app/ogImg.jpeg",
                width: 1200,
                height: 630,
                alt: "og image",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Ohio Codespace",
        description:
            "Get professional websites and Google Business Profile optimization built to improve search visibility, customer trust, and long-term business growth.",
        images: ["https://ohiocodespace.vercel.app/ogImg.jpeg"],
    },

    robots: {
        index: true,
        follow: true,
    },

};

const Home: React.FC = () => {
    return <HomeClient />;
};

export default Home;
