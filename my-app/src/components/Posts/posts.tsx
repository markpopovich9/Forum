import React from "react";
import styles from "./posts.module.css";

export const Post = () => {
  return (
    <div className={styles.postCard}>
      
      <div className={styles.postCardHeader}>
        <div className={styles.avatarPlaceholder}></div>
        <span className={styles.likes}>19.3k</span>
      </div>

      <p className={styles.postText}>Hello this my dog</p>

      <img
        className={styles.postImage}
        src="/images/dog.jpg"
        alt="Dog"
      />
    </div>
  );
};