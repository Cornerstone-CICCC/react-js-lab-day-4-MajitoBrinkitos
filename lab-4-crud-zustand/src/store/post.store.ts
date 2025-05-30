import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export type Post ={
    id: string,
    title: string,
    content: string,
    published: boolean;
};

type PostStore = {
    posts: Post[];
    addPost:(post: Omit<Post, 'id'>) => void;
    updatePost: (id: string, updated: Partial<Post>) => void;
    deletePost: (id: string) => void;
}

const usePostStore = create<PostStore>((set) => ({
    posts:[],
    addPost: (post) =>
        set((state) => ({
            posts: [...state.posts, { ...post, id: uuidv4() }],
        })),
        updatePost: (id, updated) =>
            set((state) => ({
                posts: state.posts.map((p) => (p.id === id ? { ...p, ...updated } : p)),
            })),
        deletePost: (id) =>
            set((state) => ({
                posts: state.posts.filter((p) => p.id !== id),
            })),
}));