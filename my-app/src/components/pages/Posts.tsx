import { IPost } from "../Posts/post.types";
import  Post  from "../Posts/posts";
import { useEffect, useState } from "react";
export default function PostsPage() {
    const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/posts?skip=0&take=5")
      .then(res => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>Posts</h1>
        {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
