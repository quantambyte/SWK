import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`shadow-lg hover:shadow-xl bg-white dark:bg-brand rounded-2xl p-[43px] w-full ${className}`}
    >
      {children}
    </div>
  );
}
