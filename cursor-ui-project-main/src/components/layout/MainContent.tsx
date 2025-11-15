import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="pt-[60px] lg:pl-[280px] min-h-screen bg-bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-8 lg:py-8">
        {children}
      </div>
    </main>
  );
}

