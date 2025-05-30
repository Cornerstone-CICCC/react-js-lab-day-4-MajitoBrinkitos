import { create } from 'zustand';
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

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  addPost: (text) =>
    set((state) => ({
      posts: [...state.posts, { id: uuidv4(), text }],
    })),
  updatePost: (id, text) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, text } : post
      ),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
