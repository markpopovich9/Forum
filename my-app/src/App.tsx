import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/Home";
import PostsPage from "./components/pages/Posts";
import PostPage from "./components/pages/PossProduct/PostPage";
import ProfilePage from "./components/pages/Profile/Profile";
import LoginPage from "./components/pages/Login/Login";
import RegisterPage from "./components/pages/Reg/Reg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />

          <Route path="profile" element={<ProfilePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
