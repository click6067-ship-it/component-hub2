import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg bg-bg-secondary border border-border-primary flex items-center justify-center hover:bg-bg-hover transition-all duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-text-secondary" />
      ) : (
        <Moon className="w-5 h-5 text-text-secondary" />
      )}
    </button>
  );
}

