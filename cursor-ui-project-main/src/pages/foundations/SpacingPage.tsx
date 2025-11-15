import { CodeBlock } from '@/components/docs/CodeBlock';

export function SpacingPage() {
  const usage = `/* CSS */
.my-component {
  padding: 1rem; /* 16px */
  margin-bottom: 1.5rem; /* 24px */
  gap: 0.5rem; /* 8px */
}

/* Tailwind */
<div className="p-4 mb-6 gap-2">
  Content
</div>`;

  const spacingScale = [
    { name: '0', value: '0px', rem: '0' },
    { name: '1', value: '4px', rem: '0.25rem' },
    { name: '2', value: '8px', rem: '0.5rem' },
    { name: '3', value: '12px', rem: '0.75rem' },
    { name: '4', value: '16px', rem: '1rem' },
    { name: '5', value: '20px', rem: '1.25rem' },
    { name: '6', value: '24px', rem: '1.5rem' },
    { name: '8', value: '32px', rem: '2rem' },
    { name: '10', value: '40px', rem: '2.5rem' },
    { name: '12', value: '48px', rem: '3rem' },
    { name: '16', value: '64px', rem: '4rem' },
    { name: '20', value: '80px', rem: '5rem' },
    { name: '24', value: '96px', rem: '6rem' },
  ];

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Spacing</h1>
      <p className="text-lg text-text-secondary mb-12">
        ComponentHub는 4px 기반 단위의 일관된 간격 시스템을 사용합니다.
      </p>

      {/* Spacing Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Spacing Scale
        </h2>
        <p className="text-text-secondary mb-6">
          모든 간격은 4px의 배수입니다. 이는 시각적 일관성과 정렬을 보장합니다.
        </p>
        <div className="space-y-4">
          {spacingScale.map((space) => (
            <div
              key={space.name}
              className="p-4 rounded-lg border border-border-primary"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <code className="text-sm font-mono text-brand-primary font-semibold w-8">
                    {space.name}
                  </code>
                  <span className="text-sm text-text-secondary">
                    {space.value}
                  </span>
                  <span className="text-sm text-text-tertiary">
                    ({space.rem})
                  </span>
                </div>
                <div className="flex gap-2 text-xs font-mono text-text-tertiary">
                  <span>p-{space.name}</span>
                  <span>m-{space.name}</span>
                  <span>gap-{space.name}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="bg-brand-primary rounded"
                  style={{ width: space.value, height: '24px' }}
                />
                <span className="text-xs text-text-tertiary">{space.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Padding Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Padding Examples
        </h2>
        <div className="space-y-4">
          <div className="border border-border-primary rounded-lg">
            <div className="p-2 bg-bg-secondary">
              <div className="bg-brand-primary/20 text-text-primary text-sm">
                p-2 (8px padding)
              </div>
            </div>
          </div>
          <div className="border border-border-primary rounded-lg">
            <div className="p-4 bg-bg-secondary">
              <div className="bg-brand-primary/20 text-text-primary text-sm">
                p-4 (16px padding)
              </div>
            </div>
          </div>
          <div className="border border-border-primary rounded-lg">
            <div className="p-6 bg-bg-secondary">
              <div className="bg-brand-primary/20 text-text-primary text-sm">
                p-6 (24px padding)
              </div>
            </div>
          </div>
          <div className="border border-border-primary rounded-lg">
            <div className="p-8 bg-bg-secondary">
              <div className="bg-brand-primary/20 text-text-primary text-sm">
                p-8 (32px padding)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Margin Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Margin Examples
        </h2>
        <div className="p-6 rounded-lg border border-border-primary bg-bg-secondary">
          <div className="space-y-0">
            <div className="mb-2 p-3 bg-brand-primary/20 text-text-primary text-sm">
              mb-2 (8px bottom margin)
            </div>
            <div className="mb-4 p-3 bg-brand-primary/20 text-text-primary text-sm">
              mb-4 (16px bottom margin)
            </div>
            <div className="mb-6 p-3 bg-brand-primary/20 text-text-primary text-sm">
              mb-6 (24px bottom margin)
            </div>
            <div className="mb-8 p-3 bg-brand-primary/20 text-text-primary text-sm">
              mb-8 (32px bottom margin)
            </div>
            <div className="p-3 bg-brand-primary/20 text-text-primary text-sm">
              Last item (no margin)
            </div>
          </div>
        </div>
      </section>

      {/* Gap Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Gap Examples (Flexbox/Grid)
        </h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border-primary bg-bg-secondary">
            <p className="text-sm text-text-secondary mb-3">gap-2 (8px)</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 p-3 bg-brand-primary/20 text-text-primary text-sm text-center">
                  Item {i}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border-primary bg-bg-secondary">
            <p className="text-sm text-text-secondary mb-3">gap-4 (16px)</p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 p-3 bg-brand-primary/20 text-text-primary text-sm text-center">
                  Item {i}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border-primary bg-bg-secondary">
            <p className="text-sm text-text-secondary mb-3">gap-6 (24px)</p>
            <div className="flex gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 p-3 bg-brand-primary/20 text-text-primary text-sm text-center">
                  Item {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Common Spacing Patterns
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border-primary">
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              Component Spacing
            </h3>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Button padding: <code className="text-brand-primary">px-5 py-2.5</code> (20px × 10px)</li>
              <li>• Input padding: <code className="text-brand-primary">px-3 py-2.5</code> (12px × 10px)</li>
              <li>• Card padding: <code className="text-brand-primary">p-6</code> (24px)</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-border-primary">
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              Section Spacing
            </h3>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Between sections: <code className="text-brand-primary">mb-12</code> (48px)</li>
              <li>• Between elements: <code className="text-brand-primary">mb-4</code> or <code className="text-brand-primary">mb-6</code> (16-24px)</li>
              <li>• Between paragraphs: <code className="text-brand-primary">mb-4</code> (16px)</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-border-primary">
            <h3 className="text-sm font-semibold text-text-primary mb-2">
              Layout Spacing
            </h3>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Page padding: <code className="text-brand-primary">px-6 lg:px-12 py-8</code></li>
              <li>• Grid gap: <code className="text-brand-primary">gap-4</code> or <code className="text-brand-primary">gap-6</code> (16-24px)</li>
              <li>• Container max-width: <code className="text-brand-primary">max-w-5xl</code> (1024px)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Usage
        </h2>
        <CodeBlock code={usage} language="css" />
      </section>
    </div>
  );
}

