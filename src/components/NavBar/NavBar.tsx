import React from "react";
import styles from "./styles/styles.module.css";
import {
  BellIcon,
  ClubIcon,
  EmojiIcon,
  HeartIcon,
  LensIcon,
  MenuIcon,
} from "../Icons";

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <MenuIcon />
        <ClubIcon />
      </div>
      <div className={styles.center}>
        <input
          type="text"
          placeholder="Busca un comercio..."
          className={styles.input}
          style={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        />
        <input
          type="text"
          placeholder="Ingresa una ubicación..."
          className={styles.input}
          style={{
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        />
        <div className={styles.searchCircle}>
          <LensIcon />
        </div>
      </div>
      <div className={styles.right}>
        <BellIcon />
        <HeartIcon />
        <EmojiIcon />
      </div>
    </nav>
  );
};
