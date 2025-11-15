# UI Component Library - Style Guide

## Overview

이 스타일 가이드는 GitBook, Linear, GitHub Pages에서 영감을 받은 다크/라이트 테마 UI 컴포넌트 라이브러리의 디자인 시스템입니다.

---

## Color Palette

### Dark Theme Colors

#### Background Colors
```json
{
  "bg-primary": "#1A1A1A",           // Main background
  "bg-secondary": "#242424",         // Secondary background (sidebar, cards)
  "bg-tertiary": "#2D2D2D",          // Tertiary background (hover states)
  "bg-elevated": "#303030",          // Elevated elements (modals, dropdowns)
  "bg-code": "#1E1E1E",              // Code blocks background
  "bg-inline-code": "rgba(255, 255, 255, 0.1)",  // Inline code background
  "bg-hover": "rgba(255, 255, 255, 0.05)",       // Hover overlay
  "bg-active": "rgba(255, 255, 255, 0.08)"       // Active/pressed state
}
```

#### Text Colors
```json
{
  "text-primary": "#FFFFFF",         // Primary text
  "text-secondary": "#B4B4B4",       // Secondary text
  "text-tertiary": "#8A8A8A",        // Tertiary text (muted)
  "text-disabled": "#5A5A5A",        // Disabled text
  "text-inverse": "#1A1A1A",         // Text on light backgrounds
  "text-link": "#3B9EFF",            // Link text
  "text-link-hover": "#5AAFFF"       // Link hover state
}
```

#### Border Colors
```json
{
  "border-primary": "#3A3A3A",       // Primary border
  "border-secondary": "#2D2D2D",     // Secondary border
  "border-hover": "#4A4A4A",         // Hover state border
  "border-focus": "#3B9EFF",         // Focus state border
  "border-divider": "rgba(255, 255, 255, 0.1)"  // Subtle dividers
}
```

#### Brand Colors
```json
{
  "brand-primary": "#3B9EFF",        // Primary brand color (blue)
  "brand-primary-hover": "#2B8EEF",  // Primary hover
  "brand-primary-active": "#1B7EDF", // Primary active
  "brand-secondary": "#7B61FF",      // Secondary brand (purple)
  "brand-success": "#00D084",        // Success green
  "brand-warning": "#FFAB00",        // Warning amber
  "brand-error": "#FF5C5C",          // Error red
  "brand-info": "#3B9EFF"            // Info blue
}
```

#### Accent Colors (Pastel for Cards/Highlights)
```json
{
  "accent-blue": "#E3F2FF",          // Light blue accent
  "accent-purple": "#F0EBFF",        // Light purple accent
  "accent-green": "#D4F7E7",         // Light green accent
  "accent-red": "#FFE8E8",           // Light red accent
  "accent-yellow": "#FFF4D4",        // Light yellow accent
  "accent-cyan": "#D4F7F7"           // Light cyan accent
}
```

#### Semantic Colors (Dark Theme)
```json
{
  "success-bg": "rgba(0, 208, 132, 0.15)",
  "success-border": "#00D084",
  "success-text": "#00F09D",
  
  "warning-bg": "rgba(255, 171, 0, 0.15)",
  "warning-border": "#FFAB00",
  "warning-text": "#FFC940",
  
  "error-bg": "rgba(255, 92, 92, 0.15)",
  "error-border": "#FF5C5C",
  "error-text": "#FF7979",
  
  "info-bg": "rgba(59, 158, 255, 0.15)",
  "info-border": "#3B9EFF",
  "info-text": "#5AAFFF"
}
```

---

### Light Theme Colors

#### Background Colors
```json
{
  "bg-primary": "#FFFFFF",           // Main background
  "bg-secondary": "#F7F7F7",         // Secondary background (sidebar, cards)
  "bg-tertiary": "#F0F0F0",          // Tertiary background (hover states)
  "bg-elevated": "#FFFFFF",          // Elevated elements (modals, dropdowns)
  "bg-code": "#F5F5F5",              // Code blocks background
  "bg-inline-code": "rgba(0, 0, 0, 0.06)",      // Inline code background
  "bg-hover": "rgba(0, 0, 0, 0.04)",            // Hover overlay
  "bg-active": "rgba(0, 0, 0, 0.08)"            // Active/pressed state
}
```

#### Text Colors
```json
{
  "text-primary": "#1A1A1A",         // Primary text
  "text-secondary": "#5A5A5A",       // Secondary text
  "text-tertiary": "#8A8A8A",        // Tertiary text (muted)
  "text-disabled": "#B4B4B4",        // Disabled text
  "text-inverse": "#FFFFFF",         // Text on dark backgrounds
  "text-link": "#0969DA",            // Link text
  "text-link-hover": "#0550AE"       // Link hover state
}
```

#### Border Colors
```json
{
  "border-primary": "#E0E0E0",       // Primary border
  "border-secondary": "#EBEBEB",     // Secondary border
  "border-hover": "#C0C0C0",         // Hover state border
  "border-focus": "#0969DA",         // Focus state border
  "border-divider": "rgba(0, 0, 0, 0.08)"       // Subtle dividers
}
```

#### Brand Colors (Same as Dark)
```json
{
  "brand-primary": "#0969DA",        // Primary brand color (blue)
  "brand-primary-hover": "#0550AE",  // Primary hover
  "brand-primary-active": "#033D8B", // Primary active
  "brand-secondary": "#6639BA",      // Secondary brand (purple)
  "brand-success": "#1A7F64",        // Success green
  "brand-warning": "#BF8700",        // Warning amber
  "brand-error": "#D1242F",          // Error red
  "brand-info": "#0969DA"            // Info blue
}
```

#### Accent Colors (Pastel for Cards/Highlights) - Light Theme
```json
{
  "accent-blue": "#E3F2FF",          // Light blue accent
  "accent-purple": "#F0EBFF",        // Light purple accent
  "accent-green": "#D4F7E7",         // Light green accent
  "accent-red": "#FFE8E8",           // Light red accent
  "accent-yellow": "#FFF4D4",        // Light yellow accent
  "accent-cyan": "#D4F7F7"           // Light cyan accent
}
```

#### Semantic Colors (Light Theme)
```json
{
  "success-bg": "rgba(26, 127, 100, 0.1)",
  "success-border": "#1A7F64",
  "success-text": "#116149",
  
  "warning-bg": "rgba(191, 135, 0, 0.1)",
  "warning-border": "#BF8700",
  "warning-text": "#7D4E00",
  
  "error-bg": "rgba(209, 36, 47, 0.1)",
  "error-border": "#D1242F",
  "error-text": "#A40E26",
  
  "info-bg": "rgba(9, 105, 218, 0.1)",
  "info-border": "#0969DA",
  "info-text": "#0550AE"
}
```

---

## Typography

### Font Families
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
```

### Font Sizes
```json
{
  "text-xs": "0.75rem",      // 12px - Labels, captions
  "text-sm": "0.875rem",     // 14px - Body small, sidebar items
  "text-base": "1rem",       // 16px - Body text
  "text-lg": "1.125rem",     // 18px - Subheadings
  "text-xl": "1.25rem",      // 20px - Card titles
  "text-2xl": "1.5rem",      // 24px - Section headings
  "text-3xl": "1.875rem",    // 30px - Page titles
  "text-4xl": "2.25rem",     // 36px - Hero headings
  "text-5xl": "3rem"         // 48px - Large displays
}
```

### Font Weights
```json
{
  "font-normal": "400",      // Regular text
  "font-medium": "500",      // Sidebar items, buttons
  "font-semibold": "600",    // Headings, emphasis
  "font-bold": "700"         // Strong headings
}
```

### Line Heights
```json
{
  "leading-tight": "1.25",   // Headings
  "leading-snug": "1.375",   // Compact text
  "leading-normal": "1.5",   // Body text
  "leading-relaxed": "1.625", // Comfortable reading
  "leading-loose": "1.75"    // Spacious text
}
```

---

## Spacing System

### Base Unit: 4px

```json
{
  "spacing-0": "0",
  "spacing-1": "0.25rem",    // 4px
  "spacing-2": "0.5rem",     // 8px
  "spacing-3": "0.75rem",    // 12px
  "spacing-4": "1rem",       // 16px
  "spacing-5": "1.25rem",    // 20px
  "spacing-6": "1.5rem",     // 24px
  "spacing-8": "2rem",       // 32px
  "spacing-10": "2.5rem",    // 40px
  "spacing-12": "3rem",      // 48px
  "spacing-16": "4rem",      // 64px
  "spacing-20": "5rem",      // 80px
  "spacing-24": "6rem"       // 96px
}
```

---

## Border Radius

```json
{
  "radius-none": "0",
  "radius-sm": "0.25rem",    // 4px - Small elements
  "radius-base": "0.375rem", // 6px - Buttons, inputs
  "radius-md": "0.5rem",     // 8px - Cards
  "radius-lg": "0.75rem",    // 12px - Large cards
  "radius-xl": "1rem",       // 16px - Modals
  "radius-2xl": "1.5rem",    // 24px - Hero sections
  "radius-full": "9999px"    // Circular - Pills, avatars
}
```

---

## Shadows

### Dark Theme Shadows
```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.6), 0 1px 2px -1px rgba(0, 0, 0, 0.6);
--shadow-base: 0 2px 4px 0 rgba(0, 0, 0, 0.7);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -2px rgba(0, 0, 0, 0.7);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.8), 0 4px 6px -4px rgba(0, 0, 0, 0.8);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.9), 0 8px 10px -6px rgba(0, 0, 0, 0.9);
```

### Light Theme Shadows
```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-base: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.15);
```

---

## Layout

### Sidebar
```json
{
  "width": "280px",
  "width-collapsed": "64px",
  "padding": "24px 16px",
  "background": "bg-secondary"
}
```

### Content Area
```json
{
  "max-width": "1200px",
  "padding": "32px 48px",
  "margin": "0 auto"
}
```

### Navigation Bar
```json
{
  "height": "60px",
  "padding": "0 24px",
  "background": "bg-primary",
  "border-bottom": "1px solid border-primary"
}
```

---

## Component Specifications

### Button

**Primary Button (Dark Theme)**
```css
padding: 10px 20px;
font-size: 14px;
font-weight: 500;
border-radius: 6px;
background: #3B9EFF;
color: #FFFFFF;
border: none;
min-height: 40px;
transition: all 0.2s;

hover: background #2B8EEF;
active: background #1B7EDF;
focus: box-shadow 0 0 0 3px rgba(59, 158, 255, 0.3);
```

**Secondary Button (Dark Theme)**
```css
padding: 10px 20px;
font-size: 14px;
font-weight: 500;
border-radius: 6px;
background: transparent;
color: #B4B4B4;
border: 1px solid #3A3A3A;
min-height: 40px;

hover: background rgba(255, 255, 255, 0.05);
       border-color #4A4A4A;
```

### Input Field

**Text Input (Dark Theme)**
```css
padding: 10px 12px;
font-size: 14px;
border-radius: 6px;
background: #242424;
color: #FFFFFF;
border: 1px solid #3A3A3A;
min-height: 40px;

placeholder: color #5A5A5A;
hover: border-color #4A4A4A;
focus: border-color #3B9EFF;
       box-shadow 0 0 0 3px rgba(59, 158, 255, 0.2);
       outline none;
```

### Search Input

```css
padding: 8px 12px 8px 36px;
font-size: 14px;
border-radius: 6px;
background: bg-secondary;
border: 1px solid border-primary;
background-image: url('search-icon.svg');
background-position: 12px center;
background-repeat: no-repeat;
min-width: 300px;
```

### Card

**Default Card (Dark Theme)**
```css
padding: 24px;
border-radius: 12px;
background: #242424;
border: 1px solid #3A3A3A;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.7);
transition: all 0.2s;

hover: border-color #4A4A4A;
       box-shadow 0 4px 6px -1px rgba(0, 0, 0, 0.7);
```

**Featured Card (with accent)**
```css
padding: 24px;
border-radius: 12px;
background: linear-gradient(135deg, #242424 0%, #2D2D2D 100%);
border: 1px solid #3A3A3A;
position: relative;
overflow: hidden;

::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3B9EFF 0%, #7B61FF 100%);
}
```

### Sidebar Item

**Navigation Item (Dark Theme)**
```css
padding: 8px 12px;
font-size: 14px;
font-weight: 400;
border-radius: 6px;
color: #B4B4B4;
display: flex;
align-items: center;
gap: 12px;
transition: all 0.15s;
cursor: pointer;

hover: background rgba(255, 255, 255, 0.05);
       color #FFFFFF;

active: background rgba(59, 158, 255, 0.15);
        color #3B9EFF;
        font-weight 500;
```

### Code Block

**Code Block Container (Dark Theme)**
```css
padding: 16px;
border-radius: 8px;
background: #1E1E1E;
border: 1px solid #3A3A3A;
font-family: var(--font-mono);
font-size: 13px;
line-height: 1.6;
overflow-x: auto;
position: relative;
```

**Inline Code (Dark Theme)**
```css
padding: 2px 6px;
border-radius: 4px;
background: rgba(255, 255, 255, 0.1);
font-family: var(--font-mono);
font-size: 13px;
color: #FF79C6;
```

### Badge

**Default Badge (Dark Theme)**
```css
padding: 4px 10px;
font-size: 12px;
font-weight: 500;
border-radius: 12px;
background: rgba(59, 158, 255, 0.15);
color: #3B9EFF;
border: 1px solid rgba(59, 158, 255, 0.3);
display: inline-flex;
align-items: center;
gap: 4px;
```

### Tab Navigation

```css
display: flex;
gap: 4px;
padding: 4px;
background: bg-secondary;
border-radius: 8px;
border: 1px solid border-primary;

tab-item {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  color: text-secondary;
  transition: all 0.2s;
  
  hover: color text-primary;
         background bg-hover;
  
  active: background bg-primary;
          color text-primary;
          box-shadow shadow-sm;
}
```

### Modal/Dialog

```css
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 90%;
max-width: 600px;
padding: 32px;
background: bg-elevated;
border-radius: 16px;
box-shadow: shadow-xl;
border: 1px solid border-primary;
z-index: 1000;

backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 999;
}
```

### Tooltip

```css
padding: 6px 10px;
font-size: 12px;
border-radius: 6px;
background: #242424;
color: #FFFFFF;
border: 1px solid #3A3A3A;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.7);
white-space: nowrap;
position: absolute;
z-index: 1400;
```

### Avatar

```css
width: 32px;
height: 32px;
border-radius: 50%;
background: linear-gradient(135deg, #3B9EFF 0%, #7B61FF 100%);
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
font-size: 14px;
color: #FFFFFF;
border: 2px solid border-primary;
```

---

## Icons

### Icon Sizes
```json
{
  "icon-xs": "12px",
  "icon-sm": "16px",
  "icon-base": "20px",
  "icon-md": "24px",
  "icon-lg": "32px",
  "icon-xl": "40px"
}
```

### Icon Colors
- Default: `text-secondary`
- Hover: `text-primary`
- Active: `brand-primary`

---

## Animation & Transitions

### Duration
```json
{
  "duration-fast": "150ms",
  "duration-base": "200ms",
  "duration-slow": "300ms",
  "duration-slower": "500ms"
}
```

### Easing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Transitions
```css
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: color 0.2s ease, background-color 0.2s ease;
transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## Accessibility

### Focus States
- All interactive elements must have visible focus indicators
- Focus ring: `box-shadow: 0 0 0 3px rgba(59, 158, 255, 0.3)`
- Minimum focus indicator size: 2px

### Color Contrast Ratios
- Normal text (16px+): 4.5:1 minimum
- Large text (24px+): 3:1 minimum
- UI components: 3:1 minimum

### Touch Targets
- Minimum size: 44x44px
- Recommended spacing: 8px between targets

---

## Breakpoints

```json
{
  "mobile": "320px",
  "mobile-lg": "480px",
  "tablet": "768px",
  "desktop": "1024px",
  "desktop-lg": "1280px",
  "desktop-xl": "1536px"
}
```

### Responsive Layout Rules
- Mobile: Single column, full-width sidebar (drawer)
- Tablet: Collapsible sidebar, adjusted padding
- Desktop: Full sidebar visible, optimal content width
- Desktop-lg: Maximum content width with margins

---

## Z-Index Scale

```json
{
  "base": "0",
  "sticky": "100",
  "sidebar": "200",
  "header": "300",
  "dropdown": "400",
  "overlay": "500",
  "modal-backdrop": "999",
  "modal": "1000",
  "popover": "1100",
  "tooltip": "1400"
}
```

---

## Theme Toggle Implementation

### CSS Variables Structure
```css
:root[data-theme="light"] {
  --bg-primary: #FFFFFF;
  --text-primary: #1A1A1A;
  /* ... all light theme variables */
}

:root[data-theme="dark"] {
  --bg-primary: #1A1A1A;
  --text-primary: #FFFFFF;
  /* ... all dark theme variables */
}
```

### Toggle Button
```css
width: 40px;
height: 40px;
border-radius: 8px;
background: bg-secondary;
border: 1px solid border-primary;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.2s;

hover: background bg-hover;
```

---

## Code Syntax Highlighting (Dark Theme)

```json
{
  "keyword": "#FF79C6",        // Pink
  "string": "#50FA7B",         // Green
  "function": "#8BE9FD",       // Cyan
  "number": "#BD93F9",         // Purple
  "comment": "#6272A4",        // Blue-grey
  "variable": "#F8F8F2",       // White
  "operator": "#FF79C6",       // Pink
  "tag": "#FF79C6",            // Pink
  "attribute": "#50FA7B"       // Green
}
```

---

## Usage Guidelines

### Do's
✓ Use consistent spacing from the spacing system
✓ Maintain proper color contrast ratios
✓ Provide smooth transitions for theme switching
✓ Use semantic color tokens instead of hard-coded values
✓ Ensure all interactive elements have hover and focus states

### Don'ts
✗ Don't mix spacing values outside the system
✗ Don't use colors that don't pass accessibility checks
✗ Don't animate theme transitions (causes jarring effect)
✗ Don't create custom shadows outside the defined scale
✗ Don't forget to test both theme modes

---

## Implementation Priority

1. **Phase 1**: Core colors, typography, spacing
2. **Phase 2**: Basic components (buttons, inputs, cards)
3. **Phase 3**: Navigation, sidebar, layout
4. **Phase 4**: Advanced components (modals, tooltips, dropdowns)
5. **Phase 5**: Animations, transitions, interactions
6. **Phase 6**: Theme toggle functionality
7. **Phase 7**: Responsive behavior, accessibility refinements

---

## References

- GitBook Design System
- Linear Design Language
- GitHub Primer Design System
- Tailwind CSS Color Palette
- shadcn/ui Component Library
