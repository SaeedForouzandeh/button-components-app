import React, { useState } from "react";
import styles from "./FAB.module.css";

const FAB = ({
  icon: Icon,
  label,
  color = "primary",
  size = "md",
  position = "bottom-right",
  extended = false,
  pulse = true,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        ${styles.fab}
        ${styles[color]}
        ${styles[size]}
        ${styles[position]}
        ${extended ? styles.extended : ""}
        ${pulse ? styles.pulse : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <Icon
        className={`${styles.icon} ${isHovered ? styles.iconRotate : ""}`}
      />
      {extended && <span className={styles.label}>{label}</span>}
      {!extended && <span className={styles.tooltipText}>{label}</span>}
    </button>
  );
};

export default FAB;
