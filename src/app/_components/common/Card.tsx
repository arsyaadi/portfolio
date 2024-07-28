import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

export default function Card({
  children,
  className = "",
  ...others
}: CardProps) {
  return (
    <div
      className={`rounded-xl shadow-lg transition-all duration lg:hover:shadow-md ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}
