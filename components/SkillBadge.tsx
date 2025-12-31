import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPalette,
    faSearch,
    faRobot,
    faTachometerAlt,
    faPenNib,
    faCode
} from "@fortawesome/free-solid-svg-icons";

interface SkillBadgeProps {
    name: string;
    large?: boolean;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, large }) => {
    // Mapping of skill names to Devicon slug or FontAwesome icon
    const getSkillIcon = (skill: string) => {
        const lower = skill.toLowerCase();

        // Devicons (CDN)
        if (lower.includes("react")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
        if (lower.includes("next.js") || lower.includes("nextjs")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
        if (lower.includes("typescript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
        if (lower.includes("tailwind")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg";
        if (lower.includes("javascript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
        if (lower.includes("html")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
        if (lower.includes("css")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
        if (lower.includes("git") && !lower.includes("github")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
        if (lower.includes("github")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
        if (lower.includes("vercel")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg";
        if (lower.includes("firebase")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg";
        if (lower.includes("foundation")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original.svg";
        if (lower.includes("bootstrap")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
        if (lower.includes("postgresql") || lower.includes("postgres")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
        if (lower.includes("figma")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
        if (lower.includes("adobe") || lower.includes("photoshop")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg";

        // FontAwesome Icons (Components)
        if (lower.includes("ui/ux")) return faPalette;
        if (lower.includes("seo")) return faSearch;
        if (lower.includes("chatbot")) return faRobot;
        if (lower.includes("performance") || lower.includes("tuning")) return faTachometerAlt;
        if (lower.includes("adobe") || lower.includes("creative")) return faPenNib;

        return faCode; // Default
    };

    const icon = getSkillIcon(name);
    const isUrl = typeof icon === "string";

    if (large) {
        return (
            <div className="flex flex-col items-center justify-center p-8 transition-all group w-36 h-36 md:w-48 md:h-48">
                {isUrl ? (
                    <img src={icon} alt={name} className="w-16 h-16 md:w-24 md:h-24 object-contain group-hover:scale-110 transition-all duration-500 mb-4" data-aos="fade-up" data-aos-duration="1000" />
                ) : (
                    <FontAwesomeIcon icon={icon} className="text-4xl md:text-7xl text-accent group-hover:scale-110 transition-all duration-500 mb-4" />
                )}
                <span className="text-xs md:text-sm font-bold text-gray-400 group-hover:text-white transition-colors tracking-widest uppercase" data-aos="fade-left" data-aos-duration="1600">{name}</span>
            </div>
        );
    }

    return (
        <span className="flex items-center gap-2.5 px-4 py-2 bg-white/5 text-gray-300 rounded-xl text-sm font-medium transition-all hover:bg-accent/10 hover:text-white group" data-aos="fade-up" data-aos-duration="1600">
            {isUrl ? (
                <img src={icon} alt={name} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" data-aos="fade-up" data-aos-duration="1600" />
            ) : (
                <FontAwesomeIcon icon={icon} className="text-accent group-hover:scale-110 transition-transform" data-aos="fade-left" data-aos-duration="1600" />
            )}
            {name}
        </span>
    );
};

export default SkillBadge;
