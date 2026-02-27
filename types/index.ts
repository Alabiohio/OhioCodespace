export interface Project {
    id: number;
    title: string;
    description: string;
    keyFeatures?: string[];
    imgUrl: string;
    skillsUsed: string[];
    liveUrl?: string;
    githubUrl?: string;
    role?: string;
    isFeatured?: boolean;
}
