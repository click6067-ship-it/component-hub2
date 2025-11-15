import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, Palette, Layout } from 'lucide-react';
import clsx from 'clsx';

interface SearchItem {
  id: string;
  label: string;
  path: string;
  category: string;
  icon?: string;
}

const searchItems: SearchItem[] = [
  // Getting Started
  { id: 'intro', label: 'Introduction', path: '/', category: 'Getting Started', icon: '📦' },
  { id: 'install', label: 'Installation', path: '/installation', category: 'Getting Started', icon: '📦' },
  { id: 'quick', label: 'Quick Start', path: '/quick-start', category: 'Getting Started', icon: '📦' },
  
  // Foundations
  { id: 'colors', label: 'Colors', path: '/foundations/colors', category: 'Foundations', icon: '🎨' },
  { id: 'typography', label: 'Typography', path: '/foundations/typography', category: 'Foundations', icon: '🎨' },
  { id: 'spacing', label: 'Spacing', path: '/foundations/spacing', category: 'Foundations', icon: '🎨' },
  
  // Components
  { id: 'button', label: 'Button', path: '/components/button', category: 'Components', icon: '🧩' },
  { id: 'input', label: 'Input', path: '/components/input', category: 'Components', icon: '🧩' },
  { id: 'card', label: 'Card', path: '/components/card', category: 'Components', icon: '🧩' },
  { id: 'checkbox', label: 'Checkbox', path: '/components/checkbox', category: 'Components', icon: '🧩' },
  { id: 'switch', label: 'Switch', path: '/components/switch', category: 'Components', icon: '🧩' },
  { id: 'badge', label: 'Badge', path: '/components/badge', category: 'Components', icon: '🧩' },
  { id: 'avatar', label: 'Avatar', path: '/components/avatar', category: 'Components', icon: '🧩' },
  { id: 'tabs', label: 'Tabs', path: '/components/tabs', category: 'Components', icon: '🧩' },
  { id: 'breadcrumb', label: 'Breadcrumb', path: '/components/breadcrumb', category: 'Components', icon: '🧩' },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filteredItems = query
    ? searchItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems;

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, SearchItem[]>);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filteredItems.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
        e.preventDefault();
        navigate(filteredItems[selectedIndex].path);
        onClose();
        setQuery('');
        setSelectedIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
    setSelectedIndex(0);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-start justify-center pt-[20vh] z-[999] pointer-events-none">
        <div className="w-full max-w-2xl mx-4 bg-bg-elevated border border-border-primary rounded-xl shadow-xl overflow-hidden pointer-events-auto">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-border-primary">
            <Search className="w-5 h-5 text-text-tertiary flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Search components, pages..."
              className="flex-1 bg-transparent text-text-primary placeholder:text-text-tertiary focus:outline-none"
            />
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-bg-hover rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-text-secondary" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[400px] overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-text-secondary">
                <p>No results found</p>
              </div>
            ) : (
              <div className="py-2">
                {Object.entries(groupedItems).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <div className="px-4 py-2 text-xs font-semibold text-text-tertiary uppercase">
                      {category}
                    </div>
                    {items.map((item, index) => {
                      const globalIndex = filteredItems.findIndex((i) => i.id === item.id);
                      const isSelected = globalIndex === selectedIndex;
                      
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleItemClick(item.path)}
                          className={clsx(
                            'w-full px-4 py-3 flex items-center gap-3 text-left transition-colors',
                            isSelected
                              ? 'bg-bg-hover text-text-primary'
                              : 'text-text-secondary hover:bg-bg-hover hover:text-text-primary'
                          )}
                        >
                          <div className="w-5 h-5 flex items-center justify-center text-sm">
                            {item.icon || '📄'}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{item.label}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-border-primary bg-bg-secondary flex items-center justify-between text-xs text-text-tertiary">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-bg-tertiary border border-border-primary">↑↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-bg-tertiary border border-border-primary">↵</kbd>
                <span>Select</span>
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-bg-tertiary border border-border-primary">Esc</kbd>
              <span>Close</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

