import styles from "./PostForm.module.css";

const CreatePostForm = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Створення поста</h2>

      <p className={styles.name}>Назва публікації</p>
      <input type="text" />

      <label className={styles.name}>Опис Поста</label>
      <textarea />

      <div className={styles.tags}>
        <span>#життя</span>
        <span>#натхнення</span>
        <button>+</button>
      </div>

      <div className={styles.imageBlock}>
        <p className={styles.name}>Додати картинку</p>
        <div className={styles.imagePlaceholder}></div>
      </div>

      <button className={styles.submit}>Створити Пост</button>
    </div>
  );
};

export default CreatePostForm;