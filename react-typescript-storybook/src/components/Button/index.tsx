import React from "react";
import cn from "classnames";
import "./button.scss";

export interface ButtonProps {
  label: string;
  bgColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium", // default
  bgColor = "white",
  label,
  ...props
}) => {
  return (
    <button className={cn("defaultButton", size, bgColor)} {...props}>
      {label}
    </button>
  );
};
