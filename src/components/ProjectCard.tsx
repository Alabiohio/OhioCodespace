import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    skillsUsed?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, skillsUsed }) => {
    return (
        <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition hover:scale-105 hover:bg-slate-900 transform transition duration-300 group projectss">
            <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">{title}</h3>
                <p className="text-gray-300 mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">{description}</p>
                {skillsUsed && skillsUsed.length > 0 && (
                    <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                        {skillsUsed.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
