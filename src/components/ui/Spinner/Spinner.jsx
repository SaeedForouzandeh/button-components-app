import React from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ size = "md", className = "" }) => {
  return (
    <div className={`${styles.spinner} ${styles[size]} ${className}`}>
      <svg viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default Spinner;
