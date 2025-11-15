import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, hover = true, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'p-6 rounded-xl bg-bg-secondary border border-border-primary shadow-base transition-all duration-200',
        hover && 'hover:border-border-hover hover:shadow-md hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

