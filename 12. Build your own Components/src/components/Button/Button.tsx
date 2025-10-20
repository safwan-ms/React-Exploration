import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode | ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
