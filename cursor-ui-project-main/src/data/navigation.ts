
export interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
  icon?: string;
}

export const navigationData: NavItem[] = [
  {
    id: 'getting-started',
    label: '📦 Getting Started',
    children: [
      { id: 'introduction', label: 'Introduction', path: '/' },
      { id: 'installation', label: 'Installation', path: '/installation' },
      { id: 'quick-start', label: 'Quick Start', path: '/quick-start' },
    ],
  },
  {
    id: 'foundations',
    label: '🎨 Foundations',
    children: [
      { id: 'colors', label: 'Colors', path: '/foundations/colors' },
      { id: 'typography', label: 'Typography', path: '/foundations/typography' },
      { id: 'spacing', label: 'Spacing', path: '/foundations/spacing' },
    ],
  },
  {
    id: 'components',
    label: '🧩 Components',
    children: [
      {
        id: 'form-elements',
        label: 'Form Elements',
        children: [
          { id: 'button', label: 'Button', path: '/components/button' },
          { id: 'input', label: 'Input', path: '/components/input' },
          { id: 'checkbox', label: 'Checkbox', path: '/components/checkbox' },
          { id: 'switch', label: 'Switch', path: '/components/switch' },
        ],
      },
      {
        id: 'data-display',
        label: 'Data Display',
        children: [
          { id: 'card', label: 'Card', path: '/components/card' },
          { id: 'badge', label: 'Badge', path: '/components/badge' },
          { id: 'avatar', label: 'Avatar', path: '/components/avatar' },
        ],
      },
      {
        id: 'navigation',
        label: 'Navigation',
        children: [
          { id: 'tabs', label: 'Tabs', path: '/components/tabs' },
          { id: 'breadcrumb', label: 'Breadcrumb', path: '/components/breadcrumb' },
        ],
      },
    ],
  },
];

