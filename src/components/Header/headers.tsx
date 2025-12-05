import styles from "./headers.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>FreeTalk</h1>

      <nav className={styles.nav}>
        <a>Posts</a>
        <a>Profile</a>
      </nav>
    </header>
  );
}
