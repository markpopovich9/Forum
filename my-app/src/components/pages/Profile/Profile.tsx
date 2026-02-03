import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import styles from "./profile.module.css";
import { User } from "../../../shared/Types/types";

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEdit, setIsEdit] = useState(false);

  const {register,handleSubmit,formState: { errors },} = useForm<User>({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      avatar: user?.avatar,
    },
  });

  if (!user) {
    return <p className={styles.empty}>User not found</p>;
  }

  const onSubmit = (data: User) => {
    updateProfile({
      username: data.username,
      avatar: data.avatar,
    });
    setIsEdit(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
        
          <div className={styles.header}>
            <h2 className={styles.title}>Картка профілю</h2>
            <button
              className={styles.editBtn}
              onClick={() => setIsEdit(prev => !prev)}
              type="button"
            >
              Редагувати інформацію
            </button>
          </div>

          
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.field}>
              <label>Імʼя</label>
              <input
                disabled={!isEdit}
                {...register("username", {
                  required: "Імʼя обовʼязкове",
                  minLength: 2,
                })}
              />
              {errors.username && (
                <span className={styles.error}>
                  {errors.username.message}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label>Електронна адреса</label>
              <input disabled {...register("email")} />
            </div>

            <div className={styles.field}>
              <label>Avatar URL</label>
              <input
                disabled={!isEdit}
                {...register("avatar")}
              />
            </div>

            {isEdit && (
              <button className={styles.saveBtn} type="submit">
                Зберегти
              </button>
            )}
          </form>

         
          <div className={styles.avatarBlock}>
            <img
              className={styles.avatar}
              src={user.avatar || "/avatar.png"}
              alt="avatar"
            />
            <p className={styles.name}>{user.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
