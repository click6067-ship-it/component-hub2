import { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface BreadcrumbProps {
  children: ReactNode;
  className?: string;
}

interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
  active?: boolean;
  className?: string;
}

export function Breadcrumb({ children, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center gap-2">{children}</ol>
    </nav>
  );
}

export function BreadcrumbItem({
  children,
  href,
  active = false,
  className,
}: BreadcrumbItemProps) {
  return (
    <li className="flex items-center gap-2">
      {href && !active ? (
        <a
          href={href}
          className={clsx(
            'text-sm text-text-secondary hover:text-text-primary transition-colors',
            className
          )}
        >
          {children}
        </a>
      ) : (
        <span
          className={clsx(
            'text-sm',
            active ? 'text-text-primary font-medium' : 'text-text-secondary',
            className
          )}
        >
          {children}
        </span>
      )}
      {!active && (
        <ChevronRight className="w-4 h-4 text-text-tertiary" />
      )}
    </li>
  );
}

