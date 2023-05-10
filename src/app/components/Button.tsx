"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  danger,
  disabled,
  fullWidth,
  onClick,
  secondary,
  type
}) => {
  return <div>Button</div>;
};

export default Button;
