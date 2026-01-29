import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (data: LoginData) => {
    try {
      setIsLoading(true);

      await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};