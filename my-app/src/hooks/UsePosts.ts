import { useFetch } from './UseFetch';
import { IPost } from "../components/Posts/post.types";

export const usePosts = () => {
  return useFetch<IPost[]>(
    "http://127.0.0.1:8000/posts?skip=0&take=10",
    []
  );
};