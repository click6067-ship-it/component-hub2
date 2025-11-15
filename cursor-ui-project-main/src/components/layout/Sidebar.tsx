import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { navigationData, type NavItem } from '@/data/navigation';
import clsx from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function NavItemComponent({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.path === location.pathname;

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={clsx(
            'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
            depth === 0 ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
          )}
          style={{ paddingLeft: `${depth * 12 + 12}px` }}
        >
          {hasChildren && (
            <ChevronRight
              className={clsx(
                'w-4 h-4 transition-transform',
                isExpanded && 'rotate-90'
              )}
            />
          )}
          {item.label}
        </button>
        {isExpanded && (
          <div className="mt-1">
            {item.children?.map((child) => (
              <NavItemComponent key={child.id} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (item.path) {
    return (
      <Link
        to={item.path}
        className={clsx(
          'block px-3 py-2 rounded-lg text-sm transition-colors mb-1',
          isActive
            ? 'bg-brand-primary/15 text-brand-primary font-medium'
            : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
        )}
        style={{ paddingLeft: `${depth * 12 + 12}px` }}
      >
        {item.label}
      </Link>
    );
  }

  return null;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[199] lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-[60px] left-0 bottom-0 w-[280px] bg-bg-secondary border-r border-border-primary overflow-y-auto z-[200] transition-transform duration-300',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <nav className="py-6 px-4">
          {navigationData.map((item) => (
            <NavItemComponent key={item.id} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
}

