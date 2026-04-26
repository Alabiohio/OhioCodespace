import React from "react";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    skillsUsed?: string[];
    keyFeatures?: string[];
    images?: string[];
    status?: "ongoing" | "completed";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl, skillsUsed, keyFeatures, images, status }) => {
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
        }, 4000); // 4 seconds for a premium feel

        return () => clearInterval(interval);
    }, [displayImages]);

    return (
        <div className="bg-card-bg border border-glass-border rounded-3xl shadow-xl overflow-hidden hover:shadow-accent/10 transition-all duration-500 group flex flex-col h-full">
            <div className="relative h-72 sm:h-80 md:h-[400px] overflow-hidden bg-muted/5 p-4 flex items-center justify-center">
                {displayImages.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={title}
                        className={`absolute inset-0 w-full h-full object-contain p-2 transition-all duration-1000 ${
                            activeImage === img 
                                ? "opacity-100 scale-100" 
                                : "opacity-0 scale-95"
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {status === "ongoing" && (
                    <div className="absolute top-4 right-4 z-30">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 backdrop-blur-lg border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            Ongoing
                        </div>
                    </div>
                )}
                
                {/* Image Selection Indicators */}
                {displayImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {displayImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setActiveImage(img);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    activeImage === img 
                                        ? "bg-accent w-6" 
                                        : "bg-white/40 hover:bg-white/60"
                                }`}
                                aria-label={`View image ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
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
