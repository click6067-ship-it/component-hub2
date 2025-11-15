import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/30',
        // Variants
        {
          'bg-brand-primary text-text-inverse hover:bg-brand-primary-hover active:bg-brand-primary-active':
            variant === 'primary',
          'bg-transparent text-text-secondary border border-border-primary hover:bg-bg-hover hover:border-border-hover':
            variant === 'secondary',
          'bg-transparent text-text-secondary hover:bg-bg-hover':
            variant === 'ghost',
        },
        // Sizes
        {
          'px-3 py-1.5 text-sm min-h-[32px]': size === 'sm',
          'px-5 py-2.5 text-sm min-h-[40px]': size === 'md',
          'px-6 py-3 text-base min-h-[48px]': size === 'lg',
        },
        // Disabled state
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

