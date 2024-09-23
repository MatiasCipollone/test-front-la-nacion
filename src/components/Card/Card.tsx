// components/Card.js
import React from "react";
import styles from "./styles/styles.module.css";
import { CardProps } from "./interface";

export const Card: React.FC<CardProps> = ({
  children,
  background,
  name,
  image,
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.header}
        src={image!}
        alt={name!}
        width={100}
        height={55}
      />
      <div className={styles.content} style={{ background }}>
        {children}
      </div>
    </div>
  );
};
