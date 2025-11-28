import React from "react";


import "./App.css";

import "./App.css";

function App() {
  return (
    <>
      <header>
        Main Page
      </header>

      <main className="main">

        <aside className="leftMenu">
          <div className="leftMenuTitle">FreeTalk</div>

          <div className="leftMenuItem">
            <span>📄</span> Posts
          </div>

          <div className="leftMenuItem">
            <span>👤</span> Profile
          </div>
        </aside>

        <div className="contentArea">
          <div className="postCard">
            <div className="postCardHeader">
              <div className="avatarPlaceholder"></div>
              <span className="likes">19.3k</span>
            </div>

            <p className="postText">Hello this my dog</p>

            <img
              className="postImage"
              src="/images/dog.jpg"
              alt="Dog"
            />
          </div>
        </div>

      </main>
    </>
  );
}

export default App;
