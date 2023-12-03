'use client';
import React from "react";

interface IButtonProps { 
  text: string;
  onClick: () => void;
  className?: string;
}


const Button = ({text, onClick, className}: IButtonProps) => {
  return (
    <div className={`button ${className ?? ''}`}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;