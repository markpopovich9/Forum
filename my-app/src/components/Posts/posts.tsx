import React from "react";
import styles from "./posts.module.css";
import { useEffect } from "react";
import {IPropsPostCard} from "./post.types"
const Post = ({ post }: IPropsPostCard) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postCardHeader}>
        <div className={styles.avatarPlaceholder}></div>
        <span className={styles.likes}>{post.likes.length}</span>
      </div>

      <p className={styles.postText}>{post.description}</p>

      <img
        className={styles.postImage}
        src={post.image}
        alt={post.title}
      />
    </div>
  );
};

export default Post;