import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../../shared/Modal/Modax";
import CreatePostForm from "../PostForm/PostForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header style={{ marginBottom: "20px" }}>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>

        
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>

        <button onClick={() => setIsModalOpen(true)}>
          Створити пост
        </button>
      </nav>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        doCloseOnClickOutside
      >
        <CreatePostForm />
      </Modal>
    </header>
  );
};

export default Header;
