import { InputHTMLAttributes, forwardRef } from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer group">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          <div
            className={clsx(
              'w-5 h-5 rounded border-2 transition-all duration-200',
              'peer-checked:bg-brand-primary peer-checked:border-brand-primary',
              'peer-focus:ring-2 peer-focus:ring-brand-primary/30',
              'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
              'border-border-primary group-hover:border-border-hover',
              className
            )}
          >
            <Check
              className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"
            />
          </div>
        </div>
        {label && (
          <span className="text-sm text-text-primary select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

