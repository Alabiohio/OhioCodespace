import type { Metadata } from "next";
import BusinessClient from "@/components/BusinessClient";

export const metadata: Metadata = {
    title: "Business Solutions | Ohio Codespace",
    description:
        "High-performance websites and local SEO solutions designed to help businesses attract customers, increase visibility, and grow revenue.",
    keywords: [
        "web design for businesses",
        "business website development",
        "local SEO services",
        "Google My Business optimization",
        "high-performance websites",
        "responsive business websites",
        "SEO-friendly web design",
        "frontend web development",
        "React business websites",
        "digital solutions for businesses",
        "online visibility for businesses",
        "small business web solutions",
        "modern business websites",
        "conversion-focused web design",
        "Ohio Codespace"
    ],
    authors: [{ name: "Ohiocheoya Alabi" }],
    creator: "Ohiocheoya Alabi",

    openGraph: {
        title: "Business Solutions | Ohio Codespace",
        description:
            "Web solutions and Google Business Profile optimization built to improve visibility, drive conversions, and grow modern businesses.",
        url: "https://ohiocodespace.vercel.app/business",
        siteName: "Ohio Codespace",
        images: [
            {
                url: "https://ohiocodespace.vercel.app/ogImg.jpeg",
                width: 1200,
                height: 630,
                alt: "Ohio Codespace Business Solutions Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Business Solutions | Ohio Codespace",
        description:
            "Websites and local SEO strategies that help businesses get found, earn trust, and grow online.",
        images: ["https://ohiocodespace.vercel.app/ogImg.jpeg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};


const Business: React.FC = () => {
    return <BusinessClient />;
};

export default Business;
