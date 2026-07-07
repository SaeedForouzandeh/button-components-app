import React, { useState } from "react";
import styles from "./IconButton.module.css";

const IconButton = ({
  icon: Icon,
  label,
  variant = "default",
  size = "md",
  badge,
  active = false,
  ripple = true,
  ...props
}) => {
  const [rippleEffect, setRippleEffect] = useState({});

  const handleClick = (e) => {
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setRippleEffect({
        x,
        y,
        active: true,
      });

      setTimeout(() => {
        setRippleEffect({ active: false });
      }, 600);
    }

    props.onClick?.(e);
  };

  return (
    <button
      className={`
        ${styles.iconButton}
        ${styles[variant]}
        ${styles[size]}
        ${active ? styles.active : ""}
      `}
      aria-label={label}
      onClick={handleClick}
      {...props}
    >
      <Icon className={styles.icon} />
      {badge > 0 && (
        <span className={styles.badge}>{badge > 99 ? "99+" : badge}</span>
      )}
      {rippleEffect.active && (
        <span
          className={styles.ripple}
          style={{
            left: rippleEffect.x,
            top: rippleEffect.y,
          }}
        />
      )}
      <span className={styles.tooltip}>{label}</span>
    </button>
  );
};

export default IconButton;
