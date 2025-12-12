import React from "react";

interface SkillBadgeProps {
    name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
    return (
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            {name}
        </span>
    );
};

export default SkillBadge;
