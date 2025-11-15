# AI Agent Prompt Guide for ComponentHub

## 🎯 Quick Start Prompt for v0, Lovable, Bolt, etc.

Copy and paste this prompt to AI frontend agents to generate the complete site:

## MOST IMPORTANT
### Always include and reference the following documents during all development work.

- @COLOR-THEMES-4.json 
- @PRD_UI_COMPONENT_LIBRARY-4.md 
- @STYLE_GUIDE-4.md**

---

## PRIMARY PROMPT

```
Create a modern UI component library documentation site called "ComponentHub" with the following specifications:

## LAYOUT STRUCTURE

### 1. Fixed Header (Top, 60px height)
- Logo "ComponentHub" on the left
- Search bar in center (400px width, cmd+K shortcut)
- Theme toggle button (sun/moon icon) on the right
- GitHub icon link on the right
- Background: var(--bg-primary)
- Border bottom: 1px solid var(--border-primary)

### 2. Sidebar (Left, 280px width, scrollable)
- Background: var(--bg-secondary)
- Padding: 24px 16px
- Tree navigation with expandable categories
- Active item highlighted with var(--brand-primary)
- Hover effect: var(--bg-hover)

Navigation structure:
```
📦 Getting Started
  - Introduction
  - Installation
  - Quick Start

🎨 Foundations
  - Colors
  - Typography
  - Spacing

🧩 Components
  ├─ Form Elements
  │  - Button
  │  - Input
  │  - Checkbox
  │  - Switch
  │
  ├─ Navigation
  │  - Tabs
  │  - Breadcrumb
  │
  └─ Data Display
     - Card
     - Badge
     - Avatar
```

### 3. Main Content Area (Center, max-width: 1200px)
- Padding: 32px 48px
- Background: var(--bg-primary)
- Contains component documentation

## COMPONENT PAGE LAYOUT

Each component page should have:

1. **Title Section**
   - H1 with component name (36px, font-weight 700)
   - Brief description paragraph

2. **Live Preview Container**
   ```
   - Min-height: 300px
   - Padding: 48px
   - Border-radius: 12px
   - Background: var(--bg-primary)
   - Border: 1px solid var(--border-primary)
   - Center aligned content
   - Shows the actual working component
   ```

3. **Code Block Section**
   ```
   - Tabs: [React] [Vue] [HTML]
   - Syntax highlighted code (dark theme: Dracula style)
   - Copy button (top-right, with "Copied!" feedback)
   - Background: #1E1E1E
   - Border-radius: 8px
   - Font: monospace, 13px
   ```

4. **Props Table**
   ```
   | Prop     | Type    | Default   | Description          |
   |----------|---------|-----------|---------------------|
   | variant  | string  | 'primary' | Button style variant |
   | size     | string  | 'md'      | Button size          |
   | disabled | boolean | false     | Disabled state       |
   ```

5. **Variants Section**
   - Show different variations of the component
   - Display horizontally with spacing
   - Each with label

## THEME SYSTEM (CRITICAL)

Implement dark/light theme toggle using CSS custom properties:

### Dark Theme Colors:
```css
:root[data-theme="dark"] {
  --bg-primary: #1A1A1A;
  --bg-secondary: #242424;
  --bg-tertiary: #2D2D2D;
  --bg-hover: rgba(255, 255, 255, 0.05);
  --text-primary: #FFFFFF;
  --text-secondary: #B4B4B4;
  --text-tertiary: #8A8A8A;
  --border-primary: #3A3A3A;
  --border-hover: #4A4A4A;
  --border-focus: #3B9EFF;
  --brand-primary: #3B9EFF;
  --brand-primary-hover: #2B8EEF;
  --brand-success: #00D084;
  --brand-error: #FF5C5C;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.7);
}
```

### Light Theme Colors:
```css
:root[data-theme="light"] {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F7F7F7;
  --bg-tertiary: #F0F0F0;
  --bg-hover: rgba(0, 0, 0, 0.04);
  --text-primary: #1A1A1A;
  --text-secondary: #5A5A5A;
  --text-tertiary: #8A8A8A;
  --border-primary: #E0E0E0;
  --border-hover: #C0C0C0;
  --border-focus: #0969DA;
  --brand-primary: #0969DA;
  --brand-primary-hover: #0550AE;
  --brand-success: #1A7F64;
  --brand-error: #D1242F;
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Theme Toggle Implementation:
```javascript
const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

// Initialize on load
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
```

## COMPONENTS TO BUILD (Priority Order)

### 1. Button Component
Create with these variants:
```jsx
// Primary
<Button variant="primary">Primary Button</Button>

// Secondary
<Button variant="secondary">Secondary Button</Button>

// Ghost
<Button variant="ghost">Ghost Button</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>
```

Styling:
```css
.button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.button-primary {
  background: var(--brand-primary);
  color: white;
}

.button-primary:hover {
  background: var(--brand-primary-hover);
}

.button-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-primary);
}

.button-secondary:hover {
  background: var(--bg-hover);
  border-color: var(--border-hover);
}
```

### 2. Input Component
```jsx
<Input placeholder="Enter text..." />
<Input type="email" label="Email" />
<Input error="This field is required" />
```

Styling:
```css
.input {
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 6px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  width: 100%;
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(59, 158, 255, 0.2);
}

.input::placeholder {
  color: var(--text-tertiary);
}
```

### 3. Card Component
```jsx
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>
```

Styling:
```css
.card {
  padding: 24px;
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-md);
  transition: all 0.2s;
}

.card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px);
}
```

### 4. Badge Component
```jsx
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

### 5. Switch/Toggle Component
```jsx
<Switch checked={true} onChange={handleChange} />
<Switch label="Enable notifications" />
```

## KEY INTERACTIONS

1. **Search Functionality (Cmd+K)**
   - Opens modal overlay
   - Fuzzy search through all components
   - Shows instant results
   - Navigate with arrow keys
   - ESC to close

2. **Copy to Clipboard**
   - Copy button on all code blocks
   - Show "Copied!" for 2 seconds
   - Then revert to "Copy"

3. **Theme Toggle**
   - Click sun/moon icon in header
   - Smoothly transition colors
   - Save preference to localStorage
   - Apply on page load

4. **Sidebar Navigation**
   - Click category to expand/collapse
   - Click item to navigate
   - Highlight active item
   - Smooth scroll to content

5. **Code Tabs**
   - Switch between React/Vue/HTML
   - Maintain syntax highlighting
   - Each tab shows appropriate code

## RESPONSIVE BEHAVIOR

Mobile (< 768px):
- Sidebar: Hidden, toggle with hamburger menu
- Header: Simplified (logo + hamburger + theme)
- Content: Full width, padding 16px
- Search: Full-screen modal

Tablet (768px - 1024px):
- Sidebar: Collapsible
- Content: Adjusted padding
- All features functional

Desktop (> 1024px):
- Full layout as designed
- Sidebar always visible
- Optimal spacing

## TECH STACK TO USE

- React 18+ with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Prism.js for syntax highlighting
- react-syntax-highlighter (alternative)
- Headless UI for accessible components (optional)

## STARTER PAGES TO CREATE

1. **Homepage (Introduction)**
   - Hero section with tagline
   - Feature cards
   - Get started button

2. **Button Page**
   - Complete button documentation
   - All variants and examples
   - Props table
   - Usage code

3. **Input Page**
   - Input field documentation
   - Different states (normal, error, disabled)
   - Label examples

4. **Card Page**
   - Card component examples
   - Different layouts
   - Hover effects

## IMPORTANT NOTES

✅ DO:
- Use CSS custom properties for all colors
- Implement smooth transitions (0.2s)
- Make all interactive elements keyboard accessible
- Add focus states to all interactive elements
- Use semantic HTML
- Test both themes thoroughly

❌ DON'T:
- Hard-code color values
- Forget hover/focus states
- Mix spacing values outside the 4px system
- Ignore mobile responsiveness
- Skip accessibility features

## SUCCESS CRITERIA

The site is complete when:
✓ Theme toggle works perfectly (no flash, persists)
✓ All components render correctly in both themes
✓ Code blocks have syntax highlighting and copy button
✓ Search functionality works (bonus if implemented)
✓ Sidebar navigation is functional
✓ Responsive on mobile/tablet/desktop
✓ All interactive elements have proper states (hover, focus, active)
✓ Typography and spacing are consistent

Please create a fully functional, beautiful UI component library site with these specifications. Start with the core layout, theme system, and at least 3-5 components (Button, Input, Card are priority).
```

---

## ALTERNATIVE SHORTER PROMPT (For Quick Generation)

```
Build a UI component documentation site with:

LAYOUT:
- Fixed header (60px) with logo, search, theme toggle
- Left sidebar (280px) with tree navigation
- Center content (max-width: 1200px)

THEME SYSTEM:
- Dark & Light mode toggle
- Use CSS variables for all colors
- Dark: --bg-primary: #1A1A1A, --text-primary: #FFFFFF
- Light: --bg-primary: #FFFFFF, --text-primary: #1A1A1A

COMPONENTS TO BUILD:
1. Button (primary, secondary, ghost variants)
2. Input (with focus states)
3. Card (with hover effects)
4. Badge (success, warning, error)

FEATURES:
- Live component preview
- Syntax-highlighted code blocks with copy button
- Props documentation table
- Responsive (mobile hamburger menu)

STYLING:
- Tailwind CSS with custom theme
- 6px border radius
- Smooth 0.2s transitions
- Shadow on hover

Start with Button component page showing all variants, code examples, and props table.
```

---

## PROMPT FOR SPECIFIC COMPONENTS

### Button Component Only
```
Create a comprehensive Button component page for a UI library with:

1. LIVE PREVIEW SECTION
Show these button variants in a grid:
- Primary (blue background)
- Secondary (outlined)
- Ghost (transparent)
- Danger (red)

Show these sizes:
- Small (32px height)
- Medium (40px height)
- Large (48px height)

2. CODE BLOCKS
Provide React, Vue, and HTML/CSS code examples with syntax highlighting.

3. PROPS TABLE
| Prop | Type | Default | Description |
[List all props]

4. STYLING
Dark theme:
- Primary: background #3B9EFF, hover #2B8EEF
- Secondary: border #3A3A3A, hover rgba(255,255,255,0.05)

Light theme:
- Primary: background #0969DA, hover #0550AE
- Secondary: border #E0E0E0, hover rgba(0,0,0,0.04)

Make the buttons fully interactive and accessible.
```

---

## TIPS FOR BEST RESULTS

1. **Start with Layout First**
   - Get the header, sidebar, and content structure right
   - Then add theme toggle
   - Then populate with components

2. **Theme System is Critical**
   - Make sure CSS variables are set up correctly
   - Test toggle functionality immediately
   - Ensure no hard-coded colors

3. **Component Isolation**
   - Build one component page at a time
   - Test in both themes
   - Then move to next component

4. **Code Highlighting**
   - Use Prism.js or react-syntax-highlighter
   - Configure for dark theme
   - Add copy button early

5. **Iteration Strategy**
   - Version 1: Basic layout + theme toggle + 1 component
   - Version 2: Add 2-3 more components
   - Version 3: Add search and advanced features

---

## EXAMPLE COMPONENT PAGE STRUCTURE

```jsx
// Button.tsx
export default function ButtonPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-primary mb-4">Button</h1>
      <p className="text-secondary mb-8">
        Buttons trigger actions and events across your application.
      </p>

      {/* Preview */}
      <div className="preview-container">
        <h2>Preview</h2>
        <div className="preview-box">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* Code */}
      <div className="code-container">
        <div className="code-tabs">
          <button>React</button>
          <button>Vue</button>
          <button>HTML</button>
        </div>
        <pre><code>{codeExample}</code></pre>
        <button className="copy-btn">Copy</button>
      </div>

      {/* Props */}
      <div className="props-section">
        <h2>Props</h2>
        <table>{/* Props table */}</table>
      </div>

      {/* Examples */}
      <div className="examples-section">
        <h2>Examples</h2>
        {/* More examples */}
      </div>
    </div>
  );
}
```

---

## TESTING CHECKLIST

Before considering the site complete, test:

- [ ] Theme toggle works without page flash
- [ ] Theme preference persists on reload
- [ ] All components visible in dark mode
- [ ] All components visible in light mode
- [ ] Copy button works for code blocks
- [ ] Sidebar navigation works
- [ ] Active menu item is highlighted
- [ ] Search opens with Cmd+K (bonus feature)
- [ ] Mobile sidebar toggles properly
- [ ] All hover states work
- [ ] All focus states are visible
- [ ] Typography is consistent
- [ ] Spacing follows 4px grid
- [ ] No console errors
- [ ] Fast page load (< 3 seconds)

---

## DEPLOYMENT TIPS

After generation:
1. Review generated code for quality
2. Test theme toggle thoroughly
3. Add more components incrementally
4. Deploy to Vercel/Netlify
5. Share with team for feedback

---

**Use this guide to generate a production-ready UI component library documentation site with any AI coding agent!**
