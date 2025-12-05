import styles from "./posts.module.css";
import DogPhoto from "../../images/dog.jpg";


export default function Posts() {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <span className={styles.likes}>19.3k</span>
      </div>

      <p>Hello this my dog</p>

      <img
        src={DogPhoto}
        alt="Dog"
      />
    </div>
  );
}
