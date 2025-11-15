# Product Requirements Document (PRD)
# UI Component Library & Documentation Site

## Project Overview

**Project Name**: ComponentHub - Interactive UI Component Library

**Version**: 1.0

**Purpose**: A modern, interactive documentation site for UI components with live previews, code examples, and copy-paste functionality. Users can explore components, view them in action, and copy the source code directly to their projects.

**Target Users**: 
- Frontend developers
- UI/UX designers
- Product teams
- Engineering teams building design systems

---

## Executive Summary

ComponentHub is a comprehensive UI component library documentation site inspired by GitBook, Linear, Tailwind UI, and shadcn/ui. It features a sidebar navigation with component categories, a main content area with live component previews, interactive code examples, and theme toggle functionality (dark/light mode).

---

## Core Features

### 1. Layout Structure

#### 1.1 Sidebar Navigation (Left Panel)
- **Width**: 280px (desktop), collapsible on mobile
- **Background**: Dark theme (#242424) / Light theme (#F7F7F7)
- **Structure**: Tree-style hierarchical navigation
- **Functionality**:
  - Expandable/collapsible categories
  - Active state indication
  - Smooth scroll to section
  - Search functionality at top of sidebar

**Component Categories**:
```
📦 Getting Started
  - Introduction
  - Installation
  - Quick Start
  - Theme Setup

🎨 Foundations
  - Colors
  - Typography
  - Spacing
  - Shadows
  - Border Radius
  - Breakpoints

🧩 Components
  ├─ Form Elements
  │  - Button
  │  - Input
  │  - Select
  │  - Checkbox
  │  - Radio
  │  - Switch/Toggle
  │  - Textarea
  │  - File Upload
  │
  ├─ Navigation
  │  - Navbar
  │  - Sidebar
  │  - Breadcrumb
  │  - Tabs
  │  - Pagination
  │  - Menu/Dropdown
  │
  ├─ Data Display
  │  - Card
  │  - Table
  │  - List
  │  - Badge
  │  - Avatar
  │  - Tag
  │  - Accordion
  │  - Tooltip
  │  - Progress
  │
  ├─ Feedback
  │  - Alert
  │  - Toast/Notification
  │  - Modal/Dialog
  │  - Spinner/Loader
  │  - Skeleton
  │
  └─ Layout
     - Container
     - Grid
     - Flex
     - Divider
     - Spacer

🎯 Patterns
  - Authentication Forms
  - Dashboard Layouts
  - Data Tables
  - Settings Pages
  - Profile Pages

📚 Resources
  - Design Tokens
  - Icons
  - Best Practices
  - Accessibility
  - Changelog
```

#### 1.2 Header/Navigation Bar (Top)
- **Height**: 60px
- **Position**: Fixed, sticky to top
- **Elements**:
  - Logo/Brand (left)
  - Search bar (center, 400px width)
  - Theme toggle button (right)
  - GitHub link (right)
  - Version selector (optional, right)

#### 1.3 Main Content Area (Center)
- **Max Width**: 1200px
- **Padding**: 32px 48px
- **Structure**:
  - Component title (H1)
  - Component description/overview
  - Live preview section
  - Code examples section
  - Props/API documentation
  - Related components section

---

## Feature Specifications

### 2. Component Preview System

#### 2.1 Live Preview Container
```
┌─────────────────────────────────────────┐
│ [Preview] [Code]                   [⚙️]  │ ← Tab Navigation
├─────────────────────────────────────────┤
│                                         │
│     🎨 Live Component Rendering         │
│     (Interactive Preview Area)          │
│                                         │
│     [Button Example Here]               │
│                                         │
└─────────────────────────────────────────┘
```

**Features**:
- Real-time rendering of component
- Interactive elements (clickable, hoverable)
- Isolated styling (iframe or shadow DOM)
- Responsive preview (mobile/tablet/desktop toggle)
- Background color toggle (light/dark/custom)

**Visual Specifications**:
```css
preview-container {
  min-height: 300px;
  padding: 48px;
  border-radius: 12px;
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
```

#### 2.2 Code Display Section
```
┌─────────────────────────────────────────┐
│ [React] [Vue] [HTML/CSS]   [📋 Copy]    │ ← Language Tabs
├─────────────────────────────────────────┤
│ import { Button } from './components'   │
│                                         │
│ export default function Example() {    │
│   return (                              │
│     <Button variant="primary">         │
│       Click me                          │
│     </Button>                           │
│   )                                     │
│ }                                       │
└─────────────────────────────────────────┘
```

**Features**:
- Syntax-highlighted code blocks
- Multiple framework support (React, Vue, HTML/CSS, Tailwind)
- Copy to clipboard button
- Line numbers
- Collapsible sections for long code
- Dark/light theme syntax highlighting

**Visual Specifications**:
```css
code-block {
  background: #1E1E1E; /* dark theme */
  border-radius: 8px;
  border: 1px solid var(--border-primary);
  padding: 16px;
  overflow-x: auto;
  font-family: 'SF Mono', Monaco, monospace;
  font-size: 13px;
  line-height: 1.6;
  position: relative;
}

copy-button {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: #FFFFFF;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}

copy-button:hover {
  background: rgba(255, 255, 255, 0.15);
}
```

#### 2.3 Component Variants/Examples
Display multiple variations of the same component:

```
Button Variants
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Primary  │ │Secondary │ │  Ghost   │
└──────────┘ └──────────┘ └──────────┘

Button Sizes
┌────┐ ┌──────┐ ┌────────┐
│ SM │ │  MD  │ │   LG   │
└────┘ └──────┘ └────────┘
```

**Layout**:
- Horizontal arrangement with spacing
- Each variant labeled clearly
- Responsive wrapping on mobile

---

### 3. Search Functionality

#### 3.1 Search Input (Header)
```
┌──────────────────────────────────────┐
│ 🔍  Search components...       ⌘K   │
└──────────────────────────────────────┘
```

**Features**:
- Keyboard shortcut (Cmd+K or Ctrl+K)
- Fuzzy search across component names and descriptions
- Instant results dropdown
- Recent searches
- Keyboard navigation (arrow keys, enter)

#### 3.2 Search Results Dropdown
```
┌────────────────────────────────────┐
│ 🧩 Components                       │
│   → Button - Primary action element│
│   → Badge - Status indicator       │
│                                    │
│ 🎨 Foundations                      │
│   → Colors - Color palette         │
└────────────────────────────────────┘
```

**Visual Specifications**:
```css
search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 8px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  box-shadow: var(--shadow-xl);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
}

search-result-item {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background 0.15s;
}

search-result-item:hover {
  background: var(--bg-hover);
}
```

---

### 4. Theme Toggle System

#### 4.1 Theme Toggle Button (Header)
```
┌──────┐
│ 🌙  │  ← Dark mode icon
└──────┘

┌──────┐
│ ☀️  │  ← Light mode icon
└──────┘
```

**Functionality**:
- Toggle between dark and light themes
- Persist theme preference in localStorage
- Smooth transition (no jarring flash)
- System preference detection on first visit

**Implementation**:
```javascript
// Theme toggle logic
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

// Initialize theme
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' 
    : 'light';
  
  const theme = savedTheme || systemTheme;
  document.documentElement.setAttribute('data-theme', theme);
};
```

#### 4.2 Theme CSS Variables
All color values must use CSS custom properties:

```css
:root[data-theme="dark"] {
  --bg-primary: #1A1A1A;
  --bg-secondary: #242424;
  --text-primary: #FFFFFF;
  --text-secondary: #B4B4B4;
  --border-primary: #3A3A3A;
  --brand-primary: #3B9EFF;
  /* ... all theme variables */
}

:root[data-theme="light"] {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F7F7F7;
  --text-primary: #1A1A1A;
  --text-secondary: #5A5A5A;
  --border-primary: #E0E0E0;
  --brand-primary: #0969DA;
  /* ... all theme variables */
}

/* All components use variables */
.button {
  background: var(--brand-primary);
  color: var(--text-inverse);
  border: 1px solid var(--border-primary);
}
```

---

### 5. Component Documentation Structure

Each component page should follow this structure:

#### 5.1 Component Page Template
```markdown
# Component Name

[Brief description of what the component does]

## Preview
[Live interactive preview]

## Installation
[Code snippet showing how to install/import]

## Usage
[Basic usage example with code]

## Variants
[Different variations of the component]

## Props / API
[Table of props/attributes with descriptions]

## Examples
[Multiple real-world examples]

## Accessibility
[ARIA attributes, keyboard navigation]

## Best Practices
[Do's and don'ts]

## Related Components
[Links to similar components]
```

#### 5.2 Props/API Table
```
┌──────────┬────────┬──────────┬─────────────────┐
│ Prop     │ Type   │ Default  │ Description     │
├──────────┼────────┼──────────┼─────────────────┤
│ variant  │ string │ 'primary'│ Button style    │
│ size     │ string │ 'md'     │ Button size     │
│ disabled │ boolean│ false    │ Disabled state  │
└──────────┴────────┴──────────┴─────────────────┘
```

**Visual Specifications**:
```css
props-table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
}

props-table th {
  background: var(--bg-secondary);
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid var(--border-primary);
}

props-table td {
  padding: 12px 16px;
  border: 1px solid var(--border-primary);
  font-size: 14px;
}

props-table code {
  background: var(--bg-inline-code);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 13px;
}
```

---

### 6. Interactive Features

#### 6.1 Copy to Clipboard
**Functionality**:
- Click "Copy" button on code blocks
- Show success feedback ("Copied!")
- Auto-reset after 2 seconds
- Support for multiple code blocks per page

**Visual Feedback**:
```css
copy-button.copied {
  background: #00D084;
  color: #FFFFFF;
}

copy-button.copied::after {
  content: "✓ Copied!";
}
```

#### 6.2 Responsive Preview Toggle
```
┌─────────────────────────────────┐
│ [📱 Mobile] [📱 Tablet] [💻 Desktop] │
└─────────────────────────────────┘
```

**Functionality**:
- Toggle preview container width
- Mobile: 375px
- Tablet: 768px
- Desktop: 100% (max 1200px)

#### 6.3 Component Customizer (Advanced)
Interactive controls to modify component props in real-time:

```
Button Customizer
┌─────────────────────────────────┐
│ Variant:   [Primary ▼]          │
│ Size:      [Medium ▼]           │
│ Disabled:  [☐]                  │
│ Loading:   [☐]                  │
└─────────────────────────────────┘

Preview: [Button Sample]
```

---

### 7. Mobile Responsive Behavior

#### 7.1 Mobile Layout (< 768px)
- Sidebar: Hidden by default, accessible via hamburger menu
- Sidebar opens as drawer overlay
- Content: Full width with reduced padding (16px)
- Header: Simplified (logo + hamburger + theme toggle)
- Search: Full-width modal on mobile

#### 7.2 Tablet Layout (768px - 1024px)
- Sidebar: Collapsible (icon-only mode)
- Content: Adjusted max-width
- All features functional

#### 7.3 Desktop Layout (> 1024px)
- Full sidebar visible
- Optimal content width
- All features visible

---

## Technical Requirements

### 8. Technology Stack Recommendations

#### 8.1 Frontend Framework
**Recommended**: React 18+ with TypeScript

**Alternatives**:
- Next.js 14+ (for SSG/SSR)
- Vue 3 + Vite
- Plain HTML/CSS/JS (for maximum compatibility)

#### 8.2 Styling Solution
**Recommended**: Tailwind CSS 3+ with custom theme

**Alternatives**:
- CSS Modules
- Styled Components
- Plain CSS with BEM methodology

#### 8.3 Component Library Base
**Recommended**: Headless UI or Radix UI for accessible primitives

#### 8.4 Code Highlighting
**Recommended**: Prism.js or Shiki

```javascript
// Example Prism.js setup
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
```

#### 8.5 Copy to Clipboard
**Recommended**: Navigator Clipboard API

```javascript
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};
```

#### 8.6 Search Implementation
**Recommended**: Fuse.js for fuzzy search

```javascript
import Fuse from 'fuse.js';

const fuse = new Fuse(components, {
  keys: ['name', 'description', 'category'],
  threshold: 0.3
});

const results = fuse.search(query);
```

---

## Design Specifications

### 9. Visual Design Guidelines

#### 9.1 Spacing System
- Use 4px base unit
- Component spacing: 16px, 24px, 32px
- Section spacing: 48px, 64px

#### 9.2 Typography Scale
- Page title (H1): 36px, font-weight 700
- Section title (H2): 24px, font-weight 600
- Subsection (H3): 20px, font-weight 600
- Body text: 16px, font-weight 400
- Code: 13px, monospace

#### 9.3 Color Usage
- Primary actions: `--brand-primary`
- Text: `--text-primary`, `--text-secondary`
- Backgrounds: `--bg-primary`, `--bg-secondary`
- Borders: `--border-primary`
- Success: `#00D084`
- Warning: `#FFAB00`
- Error: `#FF5C5C`

#### 9.4 Component States
All interactive components must have:
- Default state
- Hover state (+5% brightness)
- Active state (-5% brightness)
- Focus state (outline ring)
- Disabled state (50% opacity)

---

## Content Requirements

### 10. Documentation Content

#### 10.1 Getting Started Pages
1. **Introduction**
   - What is ComponentHub
   - Key features
   - Design philosophy

2. **Installation**
   - npm/yarn install commands
   - CDN links
   - Manual download

3. **Quick Start**
   - Basic setup
   - First component
   - Theme configuration

4. **Theme Setup**
   - CSS variables explanation
   - Custom theme creation
   - Dark/light mode implementation

#### 10.2 Foundation Pages
1. **Colors** - Color palette with hex values and usage examples
2. **Typography** - Font scales, weights, line heights
3. **Spacing** - Spacing scale with visual examples
4. **Shadows** - Shadow scale with examples
5. **Border Radius** - Radius scale with examples
6. **Breakpoints** - Responsive breakpoints

#### 10.3 Component Pages
Each component needs:
- Working preview
- 3+ usage examples
- Props documentation
- Accessibility notes
- Best practices
- Related components

#### 10.4 Pattern Pages
Real-world implementation examples:
- Login form
- Registration form
- Dashboard layout
- Settings page
- Profile page
- Data table with filters
- Pricing page

---

## User Flows

### 11. Key User Journeys

#### 11.1 Finding a Component
1. User lands on homepage
2. User clicks search or uses Cmd+K
3. User types component name (e.g., "button")
4. User sees instant results
5. User clicks result
6. User arrives at component page

#### 11.2 Using a Component
1. User navigates to component page
2. User views live preview
3. User clicks "Code" tab
4. User selects framework (React/Vue/HTML)
5. User clicks "Copy" button
6. User pastes code into their project
7. User customizes as needed

#### 11.3 Exploring Components
1. User opens sidebar
2. User expands "Form Elements" category
3. User clicks "Button"
4. User scrolls through variants
5. User clicks "Related: Badge"
6. User explores related component

#### 11.4 Switching Themes
1. User clicks theme toggle in header
2. Site instantly switches to dark/light mode
3. All components update
4. Preference saved to localStorage

---

## Success Metrics

### 12. KPIs (Key Performance Indicators)

#### 12.1 Performance Metrics
- Page load time: < 2 seconds
- Time to Interactive: < 3 seconds
- Lighthouse score: > 90
- Core Web Vitals: All "Good"

#### 12.2 User Engagement
- Average time on site: > 5 minutes
- Pages per session: > 3
- Bounce rate: < 40%
- Copy button clicks per session: > 2

#### 12.3 SEO Metrics
- Search visibility for "[framework] components"
- Organic traffic growth: 20% MoM
- Backlinks from developer communities

---

## Development Phases

### 13. Implementation Roadmap

#### Phase 1: Foundation (Week 1-2)
- [ ] Set up project structure
- [ ] Implement theme system (dark/light)
- [ ] Create base layout (header, sidebar, content)
- [ ] Implement navigation tree
- [ ] Set up routing

#### Phase 2: Core Features (Week 3-4)
- [ ] Build component preview system
- [ ] Implement code highlighting
- [ ] Add copy to clipboard functionality
- [ ] Create search functionality
- [ ] Implement theme toggle

#### Phase 3: Components (Week 5-8)
- [ ] Document form components (8 components)
- [ ] Document navigation components (6 components)
- [ ] Document data display components (9 components)
- [ ] Document feedback components (5 components)
- [ ] Document layout components (4 components)

#### Phase 4: Polish (Week 9-10)
- [ ] Add responsive preview toggle
- [ ] Implement component customizer
- [ ] Add keyboard shortcuts
- [ ] Optimize performance
- [ ] Add animations and transitions

#### Phase 5: Content (Week 11-12)
- [ ] Write Getting Started guides
- [ ] Create Foundation pages
- [ ] Add usage examples
- [ ] Write best practices
- [ ] Create pattern examples

#### Phase 6: Testing & Launch (Week 13-14)
- [ ] Cross-browser testing
- [ ] Mobile responsive testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Deploy to production

---

## Technical Constraints & Considerations

### 14. Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Android 90+

### 15. Performance Requirements
- Initial bundle size: < 200KB (gzipped)
- Code splitting for component demos
- Lazy loading for code blocks
- Image optimization
- Font subsetting

### 16. Accessibility Requirements
- WCAG 2.1 Level AA compliance
- Keyboard navigation for all features
- Screen reader compatibility
- Focus management
- Color contrast ratios: 4.5:1 minimum

### 17. SEO Requirements
- Semantic HTML structure
- Meta descriptions for all pages
- Open Graph tags
- Sitemap.xml
- Robots.txt
- Canonical URLs

---

## API & Integration

### 18. Optional Features

#### 18.1 Component Playground API
Embed component previews in external sites:

```html
<iframe 
  src="https://componenthub.com/embed/button?variant=primary"
  width="100%" 
  height="200"
></iframe>
```

#### 18.2 GitHub Integration
- Link to GitHub repository
- Show star count
- Link to issues
- Show latest release version

#### 18.3 npm Package Integration
- Show npm download stats
- Link to npm package
- Show current version
- Quick install command

---

## Content Structure for AI Agent

### 19. Prompt-Ready Structure

When providing this PRD to AI agents (v0, lovable, etc.), use this format:

```
I want to build a UI component library documentation site with these features:

LAYOUT:
- Left sidebar (280px) with tree navigation
- Top header (60px) with logo, search, and theme toggle
- Center content area (max-width: 1200px)

SIDEBAR STRUCTURE:
[Provide the component tree from section 1.1]

COMPONENT PAGE STRUCTURE:
1. Title and description
2. Live preview container with interactive component
3. Code tabs (React, Vue, HTML) with syntax highlighting
4. Copy button for each code block
5. Props/API documentation table
6. Examples section
7. Related components

THEME SYSTEM:
- Dark mode and light mode
- Toggle button in header
- Use CSS custom properties
- Colors: [provide color palette from STYLE_GUIDE.md]

KEY INTERACTIONS:
1. Clicking sidebar item navigates to component
2. Clicking "Copy" copies code to clipboard
3. Clicking theme toggle switches between dark/light
4. Cmd+K opens search modal
5. Typing in search shows instant results

TECH STACK:
- React + TypeScript
- Tailwind CSS for styling
- Prism.js for syntax highlighting
- Headless UI for accessible components

PRIORITY COMPONENTS TO BUILD FIRST:
1. Button (primary, secondary, ghost variants)
2. Input (with focus states)
3. Card (with hover effects)
4. Badge (multiple colors)
5. Modal/Dialog

Please create a fully functional site with these specifications.
```

---

## Acceptance Criteria

### 20. Definition of Done

A feature is considered complete when:

✅ **Functionality**
- All specified features work as described
- No console errors or warnings
- Smooth transitions and animations

✅ **Design**
- Matches style guide specifications
- Consistent spacing and typography
- Both themes (dark/light) work perfectly

✅ **Code Quality**
- TypeScript types defined
- Components are reusable
- Code is documented
- No accessibility violations

✅ **Testing**
- Works on all supported browsers
- Responsive on all screen sizes
- Keyboard navigation functional
- Screen reader compatible

✅ **Performance**
- Lighthouse score > 90
- Bundle size within limits
- No layout shifts

✅ **Documentation**
- Code examples provided
- Props documented
- Usage guidelines clear

---

## Appendix

### A. Example Component: Button

#### A.1 Button Variants to Implement
```tsx
// Primary Button
<Button variant="primary">Primary</Button>

// Secondary Button
<Button variant="secondary">Secondary</Button>

// Ghost Button
<Button variant="ghost">Ghost</Button>

// Danger Button
<Button variant="danger">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button icon={<Icon />}>With Icon</Button>
```

#### A.2 Button Props Interface
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### B. File Structure

```
componenthub/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Content.tsx
│   │   │   └── Footer.tsx
│   │   ├── navigation/
│   │   │   ├── NavItem.tsx
│   │   │   ├── NavGroup.tsx
│   │   │   └── TreeNav.tsx
│   │   ├── preview/
│   │   │   ├── ComponentPreview.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── CopyButton.tsx
│   │   │   └── TabNav.tsx
│   │   ├── search/
│   │   │   ├── SearchInput.tsx
│   │   │   ├── SearchModal.tsx
│   │   │   └── SearchResults.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── [all UI components]
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── getting-started/
│   │   ├── foundations/
│   │   ├── components/
│   │   └── patterns/
│   ├── styles/
│   │   ├── globals.css
│   │   ├── themes.css
│   │   └── syntax-highlighting.css
│   ├── utils/
│   │   ├── clipboard.ts
│   │   ├── theme.ts
│   │   └── search.ts
│   ├── data/
│   │   ├── components.json
│   │   └── navigation.json
│   └── App.tsx
├── public/
│   ├── icons/
│   └── images/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### C. Color Reference Quick Access

**Dark Theme Primary Colors**
```css
--bg-primary: #1A1A1A;
--bg-secondary: #242424;
--text-primary: #FFFFFF;
--text-secondary: #B4B4B4;
--brand-primary: #3B9EFF;
--border-primary: #3A3A3A;
```

**Light Theme Primary Colors**
```css
--bg-primary: #FFFFFF;
--bg-secondary: #F7F7F7;
--text-primary: #1A1A1A;
--text-secondary: #5A5A5A;
--brand-primary: #0969DA;
--border-primary: #E0E0E0;
```

### D. Animation Presets

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide in from left */
@keyframes slideInLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

/* Scale up */
@keyframes scaleUp {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Usage */
.animate-fade-in {
  animation: fadeIn 0.2s ease-out;
}

.animate-slide-in {
  animation: slideInLeft 0.3s ease-out;
}

.animate-scale-up {
  animation: scaleUp 0.2s ease-out;
}
```

---

## Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-27 | Initial | First version of PRD |

---

## Approval & Sign-off

**Product Owner**: _________________ Date: _________

**Engineering Lead**: _________________ Date: _________

**Design Lead**: _________________ Date: _________

---

## Contact & Questions

For questions about this PRD, please contact the product team or create an issue in the project repository.

---

**END OF DOCUMENT**
