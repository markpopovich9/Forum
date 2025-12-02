import React from "react";
import  Header  from "./components/Header/headers";
import { Main } from "./components/Main/main";
import  Footer  from "./components/Footer/footer";
import "./App.css";

import { Post } from "./components/Posts/posts";

function App() {
  return (
    <>
      <Header />

      <Main>
        <Post />
      </Main>

      <Footer />
    </>
  );
}

export default App;
