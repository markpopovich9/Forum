import React from "react";
import  Header  from "./components/Header/headers";
import  Main  from "./components/Main/main";
import  Footer  from "./components/Footer/footer";
import "./App.css";
import PostPage from "./components/pages/PossProduct/PostPage";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/pages/Home";
import PostsPage from "./components/pages/Posts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


