import { useForm } from "react-hook-form";
import { RegisterForm } from "../../../shared/Types/types";
import { useAuth } from "../../../context/AuthContext";
import styles from "../Login/Login.module.css";

const Register = () => {
  const { register: registerUser } = useAuth();

  const { register, handleSubmit } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    registerUser(data);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.input} placeholder="Username" {...register("username")} />
        <input className={styles.input} placeholder="Email" {...register("email")} />
        <input className={styles.input} type="password" placeholder="Password" {...register("password")} />

        <button className={styles.button}>REGISTRATION</button>
      </form>
    </div>
  );
};

export default Register;
