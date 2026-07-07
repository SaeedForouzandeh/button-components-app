import React from "react";
import styles from "./Button.module.css";
import Spinner from "../Spinner";

const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  const buttonClasses = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${loading ? styles.loading : ""}
    ${className}
  `.trim();

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {loading && <Spinner size="sm" className={styles.spinner} />}
      {Icon && iconPosition === "left" && !loading && (
        <Icon className={styles.icon} />
      )}
      <span className={loading ? styles.hiddenText : ""}>{children}</span>
      {Icon && iconPosition === "right" && !loading && (
        <Icon className={`${styles.icon} ${styles.iconRight}`} />
      )}
    </button>
  );
};

export default Button;
