import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../shared/Types/types";
import { LoginForm, RegisterForm } from "../shared/Types/types";

interface AuthContextType {
  user: User | null;
  login: (data: LoginForm) => Promise<void>;
  register: (data: RegisterForm) => Promise<void>;
  updateProfile: (data: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (data: LoginForm) => {
    if (!data.email.includes("@")) {
      throw new Error("Неверный email");
    }

    setUser({
      id: "1",
      email: data.email,
      username: "Mark",
    });
  };

  const register = async (data: RegisterForm) => {
    setUser({
      id: "1",
      email: data.email,
      username: data.username,
      avatar: data.avatar,
    });
  };

  const updateProfile = (data: Partial<User>) => {
    setUser(prev => (prev ? { ...prev, ...data } : prev));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
