export interface IStory {
    id: string;
    name: string;
    poster: string;
    author: string;
    description: string;
    likes: number;
    views: number;
    chapters: number;
    createdAt: string;
    updatedAt: string;
    mature: boolean;
    tags: string[];
    stars: number;
    reads: number;
}