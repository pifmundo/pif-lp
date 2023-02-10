import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Button = ({
  style,
  children,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  return (
    <button style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </button>
  );
};
export default Button;
