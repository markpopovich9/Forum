import { useState } from "react";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (formData: FormData) => {
    try {
      setIsLoading(true);

      await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        body: formData,
      });

    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { registerUser, isLoading };
};