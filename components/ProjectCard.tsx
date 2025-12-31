import React from "react";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    skillsUsed?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, skillsUsed }) => {
    return (
        <div className="bg-card-bg border border-glass-border rounded-3xl shadow-xl overflow-hidden hover:shadow-accent/10 transition-all duration-500 group">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={imgUrl}
                    alt={title}
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors" data-aos="fade-up" data-aos-duration="1200">{title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3" data-aos="fade-up" data-aos-duration="1400">{description}</p>
                {skillsUsed && skillsUsed.length > 0 && (
                    <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-duration="1600">
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
