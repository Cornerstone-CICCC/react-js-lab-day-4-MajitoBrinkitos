import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export type Post = {
  id: string;
  text: string;
};

type PostStore = {
  posts: Post[];
  addPost: (text: string) => void;
  updatePost: (id: string, text: string) => void;
  deletePost: (id: string) => void;
};

export const usePostStore = create<PostStore>()(
  persist(
    (set) => ({
      posts: [],
      addPost: (text) =>
        set((state) => ({
          posts: [...state.posts, { id: uuidv4(), text }],
        })),
      updatePost: (id, text) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, text } : p
          ),
        })),
      deletePost: (id) =>
        set((state) => ({
          posts: state.posts.filter((p) => p.id !== id),
        })),
    }),
    {
      name: 'post-storage',
    }
  )
);
