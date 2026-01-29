import { IUpdateUserPayload } from "../../../shared/Types/types";
import { IUser } from "../../Posts/post.types";
import styles from "./Profile.module.css";

interface ProfileProps {
  user: IUpdateUserPayload;
}



const Profile = ({ user }: ProfileProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Картка профілю</h2>
          <button className={styles.editButton}>
            ✏️ Редагувати інформацію
          </button>
        </div>

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Імʼя</label>
            <input className={styles.input} value={user.firstName} disabled />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Прізвище</label>
            <input className={styles.input} value={user.lastName} disabled />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Електронна адреса</label>
            <input className={styles.input} value={user.email} disabled />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Пароль</label>
            <input className={styles.input} value="********" disabled />
          </div>

          <div className={styles.avatarBlock}>
            <span className={styles.avatarName}>{user.lastName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};