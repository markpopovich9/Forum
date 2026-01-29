import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../../../hooks/UseLogin";
import styles from "./Login.module.css";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { login, isLoading } = useLogin();

  const onSubmit = (data: LoginForm) => {
    login(data);
  };

  return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
            placeholder="Email"
            {...register("email")}
        />

        <input
            type="password"
            placeholder="Пароль"
            {...register("password")}
        />

        <button type="submit" disabled={isLoading}>
            AUTHORIZATION
        </button>
        </form>
    );
};

export default Login;