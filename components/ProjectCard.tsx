import React from "react";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    skillsUsed?: string[];
    keyFeatures?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, skillsUsed, keyFeatures }) => {
    return (
        <div className="bg-card-bg border border-glass-border rounded-3xl shadow-xl overflow-hidden hover:shadow-accent/10 transition-all duration-500 group">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
                {keyFeatures && keyFeatures.length > 0 && (
                    <ul className="text-muted-foreground mb-6 leading-relaxed list-disc list-outside ml-5 space-y-1">
                        {keyFeatures.map((feature, index) => (
                            <li key={index} className="text-sm md:text-base text-left">
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
                {skillsUsed && skillsUsed.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {skillsUsed.map((skill, index) => (
                            <SkillBadge key={index} name={skill} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
