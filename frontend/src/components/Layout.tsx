import React from "react";
import styles from "@/styles/layout.module.css";

interface Cask {
  children: React.ReactNode;
}

const Layout: React.FC<Cask> = ({ children }) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export default Layout;

