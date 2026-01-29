import { useForm } from "react-hook-form";
import { useRegister } from "../../../hooks/UseReg";
import styles from "./Register.module.css";

interface RegisterForm {
  email: string;
  password: string;
  username: string;
  avatar: FileList;
}

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const { registerUser, isLoading } = useRegister();

  const onSubmit = (data: RegisterForm) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("username", data.username);
    formData.append("avatar", data.avatar[0]);

    registerUser(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Ім'я" {...register("username")} />
      <input placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Пароль" {...register("password")} />
      <input type="file" {...register("avatar")} />

      <button type="submit" disabled={isLoading}>
        REGISTRATION
      </button>
    </form>
  );
};

export default Register;