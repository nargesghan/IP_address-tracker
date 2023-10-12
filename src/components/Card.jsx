import React from "react";
import styles from "./Card.module.css"

const Card = ({ title, data }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.data}>{data}</div>
    </div>
  );
};

export default Card;
