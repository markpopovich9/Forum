import { Outlet, Link } from "react-router-dom";

export default function Layout() {
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
