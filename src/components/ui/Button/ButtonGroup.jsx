import React from "react";
import styles from "./ButtonGroup.module.css";

const ButtonGroup = ({
  children,
  variant = "outline",
  size = "md",
  vertical = false,
  segmented = false,
  ...props
}) => {
  return (
    <div
      className={`
        ${styles.buttonGroup}
        ${vertical ? styles.vertical : styles.horizontal}
        ${segmented ? styles.segmented : ""}
      `}
      role="group"
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            variant: child.props.variant || variant,
            size: child.props.size || size,
            className: `
              ${styles.groupItem}
              ${child.props.className || ""}
            `,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ButtonGroup;
