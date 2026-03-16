import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPalette,
    faSearch,
    faRobot,
    faTachometerAlt,
    faPenNib,
    faCode,
    faComments,
    faUsers,
    faLightbulb,
    faClock,
    faBrain,
    faChessKnight
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
        if (lower.includes("react")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
        if (lower.includes("next.js") || lower.includes("nextjs")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg";
        if (lower.includes("typescript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
        if (lower.includes("tailwind")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
        if (lower.includes("javascript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
        if (lower.includes("html")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg";
        if (lower.includes("css")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg";
        if (lower.includes("git") && !lower.includes("github")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg";
        if (lower.includes("github")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
        if (lower.includes("vercel")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg";
        if (lower.includes("firebase")) return "/firebase.png";
        if (lower.includes("foundation")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/foundation/foundation-original.svg";
        if (lower.includes("bootstrap")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg";
        if (lower.includes("postgresql") || lower.includes("postgres")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";
        if (lower.includes("supabase")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg";
        if (lower.includes("google analytics")) return "/analytics.png";
        if (lower.includes("search console") && !lower.includes("bing")) return "/gsc.png";
        if (lower.includes("bing")) return "/bing.png";
        if (lower.includes("figma")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";
        if (lower.includes("photoshop")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg";
        if (lower.includes("illustrator")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg";
        if (lower.includes("after effects")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg";
        if (lower.includes("adobe")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg";

        // FontAwesome Icons (Components)
        if (lower.includes("ui/ux")) return faPalette;
        if (lower.includes("seo")) return faSearch;
        if (lower.includes("chatbot")) return faRobot;
        if (lower.includes("performance") || lower.includes("tuning")) return faTachometerAlt;
        if (lower.includes("adobe") || lower.includes("creative")) return faPenNib;
        if (lower.includes("communication")) return faComments;
        if (lower.includes("teamwork") || lower.includes("collaboration")) return faUsers;
        if (lower.includes("problem") || lower.includes("solving")) return faLightbulb;
        if (lower.includes("time") || lower.includes("management")) return faClock;
        if (lower.includes("critical") || lower.includes("thinking") || lower.includes("learning")) return faBrain;
        if (lower.includes("leadership") || lower.includes("management")) return faChessKnight;

        return faCode; // Default
    };

    const icon = getSkillIcon(name);
    const isUrl = typeof icon === "string";

    if (large) {
        return (
            <div className="flex flex-col items-center justify-center p-4 md:p-8 transition-all group w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
                {isUrl ? (
                    <img src={icon} alt={name} className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain group-hover:scale-125 transition-all duration-500 mb-2 md:mb-4" />
                ) : (
                    <FontAwesomeIcon icon={icon} className="text-2xl sm:text-5xl md:text-8xl lg:text-9xl text-accent group-hover:scale-125 transition-all duration-500 mb-2 md:mb-4" />
                )}
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-widest uppercase text-center line-clamp-1">{name}</span>
            </div>
        );
    }

    return (
        <span className="flex items-center gap-2.5 px-4 py-2 bg-glass-bg text-muted-foreground border border-glass-border rounded-xl text-sm font-medium transition-all hover:bg-glass-bg-hover hover:text-foreground group">
            {isUrl ? (
                <img src={icon} alt={name} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
            ) : (
                <FontAwesomeIcon icon={icon} className="text-accent group-hover:scale-110 transition-transform" />
            )}
            {name}
        </span>
    );
};

export default SkillBadge;
