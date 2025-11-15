import { CodeBlock } from '@/components/docs/CodeBlock';

export function ColorsPage() {
  const cssVariables = `/* Dark Theme */
:root[data-theme="dark"] {
  --bg-primary: #1A1A1A;
  --bg-secondary: #242424;
  --text-primary: #FFFFFF;
  --text-secondary: #B4B4B4;
  --brand-primary: #3B9EFF;
}

/* Light Theme */
:root[data-theme="light"] {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F7F7F7;
  --text-primary: #1A1A1A;
  --text-secondary: #5A5A5A;
  --brand-primary: #0969DA;
}`;

  const usage = `/* CSS */
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
}

/* Tailwind */
<div className="bg-bg-primary text-text-primary">
  Content
</div>`;

  const colorPalette = {
    background: [
      { name: 'bg-primary', dark: '#1A1A1A', light: '#FFFFFF', desc: 'Main background' },
      { name: 'bg-secondary', dark: '#242424', light: '#F7F7F7', desc: 'Secondary background' },
      { name: 'bg-tertiary', dark: '#2D2D2D', light: '#F0F0F0', desc: 'Tertiary background' },
      { name: 'bg-elevated', dark: '#303030', light: '#FFFFFF', desc: 'Elevated elements' },
    ],
    text: [
      { name: 'text-primary', dark: '#FFFFFF', light: '#1A1A1A', desc: 'Primary text' },
      { name: 'text-secondary', dark: '#B4B4B4', light: '#5A5A5A', desc: 'Secondary text' },
      { name: 'text-tertiary', dark: '#8A8A8A', light: '#8A8A8A', desc: 'Tertiary text' },
      { name: 'text-disabled', dark: '#5A5A5A', light: '#B4B4B4', desc: 'Disabled text' },
    ],
    border: [
      { name: 'border-primary', dark: '#3A3A3A', light: '#E0E0E0', desc: 'Primary border' },
      { name: 'border-hover', dark: '#4A4A4A', light: '#C0C0C0', desc: 'Hover border' },
      { name: 'border-focus', dark: '#3B9EFF', light: '#0969DA', desc: 'Focus border' },
    ],
    brand: [
      { name: 'brand-primary', dark: '#3B9EFF', light: '#0969DA', desc: 'Primary brand color' },
      { name: 'brand-success', dark: '#00D084', light: '#1A7F64', desc: 'Success color' },
      { name: 'brand-warning', dark: '#FFAB00', light: '#BF8700', desc: 'Warning color' },
      { name: 'brand-error', dark: '#FF5C5C', light: '#D1242F', desc: 'Error color' },
    ],
  };

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Colors</h1>
      <p className="text-lg text-text-secondary mb-12">
        ComponentHub의 색상 시스템은 CSS Variables를 기반으로 하며, 다크/라이트 테마를 완벽하게 지원합니다.
      </p>

      {/* Background Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Background Colors
        </h2>
        <div className="grid gap-4">
          {colorPalette.background.map((color) => (
            <div
              key={color.name}
              className="p-4 rounded-lg border border-border-primary flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className="w-16 h-16 rounded-lg border border-border-primary"
                  style={{ background: `var(--${color.name})` }}
                />
                <div>
                  <code className="text-sm font-mono text-brand-primary">
                    --{color.name}
                  </code>
                  <p className="text-sm text-text-secondary mt-1">{color.desc}</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs font-mono">
                <div>
                  <span className="text-text-tertiary">Dark: </span>
                  <span className="text-text-primary">{color.dark}</span>
                </div>
                <div>
                  <span className="text-text-tertiary">Light: </span>
                  <span className="text-text-primary">{color.light}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Text Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Text Colors
        </h2>
        <div className="grid gap-4">
          {colorPalette.text.map((color) => (
            <div
              key={color.name}
              className="p-4 rounded-lg border border-border-primary flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className="w-16 h-16 rounded-lg border border-border-primary flex items-center justify-center text-2xl font-bold"
                  style={{ color: `var(--${color.name})`, background: 'var(--bg-secondary)' }}
                >
                  Aa
                </div>
                <div>
                  <code className="text-sm font-mono text-brand-primary">
                    --{color.name}
                  </code>
                  <p className="text-sm text-text-secondary mt-1">{color.desc}</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs font-mono">
                <div>
                  <span className="text-text-tertiary">Dark: </span>
                  <span className="text-text-primary">{color.dark}</span>
                </div>
                <div>
                  <span className="text-text-tertiary">Light: </span>
                  <span className="text-text-primary">{color.light}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Border Colors
        </h2>
        <div className="grid gap-4">
          {colorPalette.border.map((color) => (
            <div
              key={color.name}
              className="p-4 rounded-lg border border-border-primary flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className="w-16 h-16 rounded-lg border-4"
                  style={{ borderColor: `var(--${color.name})`, background: 'var(--bg-secondary)' }}
                />
                <div>
                  <code className="text-sm font-mono text-brand-primary">
                    --{color.name}
                  </code>
                  <p className="text-sm text-text-secondary mt-1">{color.desc}</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs font-mono">
                <div>
                  <span className="text-text-tertiary">Dark: </span>
                  <span className="text-text-primary">{color.dark}</span>
                </div>
                <div>
                  <span className="text-text-tertiary">Light: </span>
                  <span className="text-text-primary">{color.light}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Brand Colors
        </h2>
        <div className="grid gap-4">
          {colorPalette.brand.map((color) => (
            <div
              key={color.name}
              className="p-4 rounded-lg border border-border-primary flex items-center justify-between"
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className="w-16 h-16 rounded-lg"
                  style={{ background: `var(--${color.name})` }}
                />
                <div>
                  <code className="text-sm font-mono text-brand-primary">
                    --{color.name}
                  </code>
                  <p className="text-sm text-text-secondary mt-1">{color.desc}</p>
                </div>
              </div>
              <div className="flex gap-4 text-xs font-mono">
                <div>
                  <span className="text-text-tertiary">Dark: </span>
                  <span className="text-text-primary">{color.dark}</span>
                </div>
                <div>
                  <span className="text-text-tertiary">Light: </span>
                  <span className="text-text-primary">{color.light}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSS Variables */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          CSS Variables
        </h2>
        <p className="text-text-secondary mb-4">
          모든 색상은 CSS 커스텀 속성(변수)으로 정의되어 있습니다.
        </p>
        <CodeBlock code={cssVariables} language="css" />
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Usage
        </h2>
        <p className="text-text-secondary mb-4">
          CSS 또는 Tailwind 클래스를 통해 색상을 사용할 수 있습니다.
        </p>
        <CodeBlock code={usage} language="css" />
      </section>
    </div>
  );
}

