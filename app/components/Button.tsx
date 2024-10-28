import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`px-4 py-2  text-white rounded focus:outline-none flex items-center justify-center focus:ring-0 min-w-[123px] transition-transform duration-300 ease-in-out hover:scale-105 bg-brand text-wrap ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
