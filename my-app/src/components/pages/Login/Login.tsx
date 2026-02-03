import { useForm } from "react-hook-form";
import { LoginForm } from "../../../shared/Types/types";
import { useAuth } from "../../../context/AuthContext";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data);
    } catch (e: any) {
      setApiError(e.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="Email"
          {...register("email", {
            required: "Email обязателен",
            validate: v => v.includes("@") && v.includes("."),
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <input
          className={styles.input}
          type="password"
          placeholder="Пароль"
          {...register("password", { required: "Пароль обязателен" })}
        />

        {apiError && <p className={styles.error}>{apiError}</p>}

        <button className={styles.button}>AUTHORIZATION</button>
      </form>
    </div>
  );
};

export default Login;
