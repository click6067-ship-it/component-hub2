import { ReactNode } from 'react';

interface ComponentPreviewProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function ComponentPreview({
  children,
  title,
  description,
}: ComponentPreviewProps) {
  return (
    <div className="mb-8">
      {title && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-text-primary mb-2">{title}</h2>
          {description && (
            <p className="text-text-secondary">{description}</p>
          )}
        </div>
      )}
      <div className="min-h-[300px] p-12 rounded-xl bg-bg-primary border border-border-primary flex items-center justify-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}

