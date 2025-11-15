import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: ReactNode;
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
        {
          'bg-brand-primary/15 text-brand-primary border-brand-primary/30':
            variant === 'default',
          'bg-brand-success/15 text-brand-success border-brand-success/30':
            variant === 'success',
          'bg-brand-warning/15 text-brand-warning border-brand-warning/30':
            variant === 'warning',
          'bg-brand-error/15 text-brand-error border-brand-error/30':
            variant === 'error',
          'bg-brand-info/15 text-brand-info border-brand-info/30':
            variant === 'info',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

