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
    impact?: string;
    category?: string;
    images?: string[];
    isFeatured?: boolean;
    status?: "ongoing" | "completed";
    date?: string;
}
