"use client";

import React from "react";
import SkillBadge from "./SkillBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBriefcase, faBolt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    skillsUsed?: string[];
    keyFeatures?: string[];
    images?: string[];
    status?: "ongoing" | "completed";
    liveUrl?: string;
    githubUrl?: string;
    role?: string;
    impact?: string;
    category?: string;
    date?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title, description, imgUrl, skillsUsed, keyFeatures, images, status,
    liveUrl, githubUrl, role, impact, category, date
}) => {
    const [activeImage, setActiveImage] = React.useState(imgUrl);

    React.useEffect(() => {
        setActiveImage(imgUrl);
    }, [imgUrl]);

    const displayImages = images && images.length > 0 ? images : [imgUrl];

    React.useEffect(() => {
        if (displayImages.length <= 1) return;
        const interval = setInterval(() => {
            setActiveImage((prev) => {
                const currentIndex = displayImages.indexOf(prev);
                const nextIndex = (currentIndex + 1) % displayImages.length;
                return displayImages[nextIndex];
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [displayImages]);

    return (
        <div className="bg-card-bg border border-glass-border rounded-3xl overflow-hidden hover:border-accent/20 transition-all duration-500 group flex flex-col h-full">
            {/* Image */}
            <div className="relative h-64 sm:h-72 md:h-[340px] overflow-hidden bg-muted/5 flex items-center justify-center">
                {displayImages.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={title}
                        className={`absolute inset-0 w-full h-full object-contain p-3 transition-all duration-1000 ${
                            activeImage === img ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

                {/* Category badge */}
                {category && (
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-glass-border text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            {category}
                        </span>
                    </div>
                )}

                {status === "ongoing" && (
                    <div className="absolute top-4 right-4 z-30">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 backdrop-blur-lg border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Live
                        </div>
                    </div>
                )}

                {/* Image dots */}
                {displayImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {displayImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveImage(img); }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeImage === img ? "bg-accent w-6" : "bg-white/40 w-1.5 hover:bg-white/60"}`}
                                aria-label={`View image ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Role & Date row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                    {role && (
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faBriefcase} className="text-accent text-xs" />
                            <span className="text-xs font-bold text-accent uppercase tracking-wider">{role}</span>
                        </div>
                    )}
                    {date && (
                        <span className="text-[16px] font-mono text-muted-foreground/60 uppercase tracking-tighter">{date}</span>
                    )}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors leading-tight">
                    {title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">{description}</p>

                {/* Impact highlight */}
                {impact && (
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-accent/5 border border-accent/10 mb-5">
                        <FontAwesomeIcon icon={faBolt} className="text-accent text-sm mt-0.5 shrink-0" />
                        <p className="text-sm text-foreground/80 leading-relaxed">{impact}</p>
                    </div>
                )}

                {/* Key features */}
                {keyFeatures && keyFeatures.length > 0 && (
                    <ul className="text-muted-foreground mb-5 leading-relaxed list-none space-y-1.5">
                        {keyFeatures.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm flex items-start gap-2">
                                <span className="text-accent mt-1 text-xs shrink-0">▸</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Skills */}
                {skillsUsed && skillsUsed.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                        {skillsUsed.map((skill, index) => (
                            <SkillBadge key={index} name={skill} />
                        ))}
                    </div>
                )}

                {/* Action Buttons */}
                {((liveUrl && liveUrl.trim() !== "") || (githubUrl && githubUrl.trim() !== "")) && (
                    <div className="flex gap-3 pt-4 border-t border-foreground/5">
                        {liveUrl && liveUrl.trim() !== "" && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-xl font-bold text-sm hover:bg-accent/90 transition-all active:scale-95"
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                                Live Demo
                            </a>
                        )}
                        {githubUrl && githubUrl.trim() !== "" && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground/5 border border-foreground/10 text-foreground rounded-xl font-bold text-sm hover:bg-foreground/10 transition-all"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                Source
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
