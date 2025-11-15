import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

export function Avatar({ src, alt, size = 'md', fallback, className, ...props }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const initials = fallback || alt?.charAt(0).toUpperCase() || '?';

  return (
    <div
      className={clsx(
        'rounded-full flex items-center justify-center font-semibold overflow-hidden',
        'bg-gradient-to-br from-brand-primary to-brand-secondary',
        'text-white border-2 border-border-primary',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

