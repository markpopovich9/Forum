import React from "react";
import Post from "../Posts/posts";
import { usePosts } from "../../hooks/UsePosts";

export default function PostsPage() {
  const { data: posts, loading, error } = usePosts();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>

      {posts?.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
