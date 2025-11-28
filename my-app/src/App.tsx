import React from "react";


export  function App() {
  return (
    <>

      <header>
        <h1>Main Page</h1>
      </header>


      <main>
          <nav>
            <h2>FreeTalk</h2>

            <ul>
              <li>
                <span>Posts</span>
              </li>
              <li>
                <span>Profile</span>
              </li>
            </ul>
          </nav>


        <section>
          <article>
            <header>
              <div>
                
              </div>
              <span>19.3k</span>
            </header>

            <p>Hello this my dog</p>

            
              <img src="/images/dog.jpg"/>
          </article>
        </section>
      </main>

      
      <footer>
        <p>FreeTalk © 2025</p>
      </footer>
    </>
  );
}
export default App;