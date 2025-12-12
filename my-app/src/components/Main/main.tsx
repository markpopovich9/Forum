


import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./main.module.css";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return (
    <main className={isTablet ? styles.mainTablet : styles.main}>
      {children}
    </main>
  );
};

export default Main;

