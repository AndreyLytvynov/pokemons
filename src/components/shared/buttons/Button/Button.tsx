import { FC } from "react";

import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  buttonClass?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  buttonClass,
}) => {
  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
