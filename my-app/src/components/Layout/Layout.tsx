import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react"
export interface ITagOnPost{
    postId: number,
    tagId: number,
    tag: {
        id: number,
        name: string
    }
}
export interface IPost {
    id: number;
    title: string;
    description: string;
    image: string;
    userId: number;
    likes: number;
    tags?: ITagOnPost[];
}

export default function Layout() {
  const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch("http://localhost:8000/posts")
                const allPosts: IPost[] = await response.json()
                setPosts(allPosts)
            } catch (error) {
                console.log(error)
            }
        }

        getAllPosts()
    }, [])
  return (
    <div style={{ padding: "20px" }}>
      <header style={{ marginBottom: "20px" }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
