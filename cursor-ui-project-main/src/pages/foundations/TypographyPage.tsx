import { CodeBlock } from '@/components/docs/CodeBlock';

export function TypographyPage() {
  const fontStack = `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  'Noto Sans', Helvetica, Arial, sans-serif;`;

  const monoStack = `font-family: 'SF Mono', Monaco, 'Cascadia Code', 
  'Roboto Mono', Consolas, 'Courier New', monospace;`;

  const usage = `/* CSS */
h1 {
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  line-height: 1.25;
}

/* Tailwind */
<h1 className="text-4xl font-bold leading-tight">
  Heading
</h1>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Typography</h1>
      <p className="text-lg text-text-secondary mb-12">
        ComponentHub의 타이포그래피 시스템은 가독성과 시각적 위계를 제공합니다.
      </p>

      {/* Font Families */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Font Families
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-border-primary">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Sans-serif (Default)
            </h3>
            <p className="text-2xl text-text-primary mb-4">
              The quick brown fox jumps over the lazy dog
            </p>
            <CodeBlock code={fontStack} language="css" />
          </div>

          <div className="p-6 rounded-lg border border-border-primary">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Monospace (Code)
            </h3>
            <p className="text-2xl text-text-primary mb-4 font-mono">
              The quick brown fox jumps over the lazy dog
            </p>
            <CodeBlock code={monoStack} language="css" />
          </div>
        </div>
      </section>

      {/* Font Sizes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Font Sizes
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-xs text-text-primary">text-xs (12px)</span>
            <code className="text-sm font-mono text-text-tertiary">0.75rem</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-sm text-text-primary">text-sm (14px)</span>
            <code className="text-sm font-mono text-text-tertiary">0.875rem</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-base text-text-primary">text-base (16px)</span>
            <code className="text-sm font-mono text-text-tertiary">1rem</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-lg text-text-primary">text-lg (18px)</span>
            <code className="text-sm font-mono text-text-tertiary">1.125rem</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-xl text-text-primary">text-xl (20px)</span>
            <code className="text-sm font-mono text-text-tertiary">1.25rem</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-2xl text-text-primary">text-2xl (24px)</span>
            <code className="text-sm font-mono text-text-tertiary">1.5rem</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-3xl text-text-primary">text-3xl (30px)</span>
            <code className="text-sm font-mono text-text-tertiary">1.875rem</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-4xl text-text-primary">text-4xl (36px)</span>
            <code className="text-sm font-mono text-text-tertiary">2.25rem</code>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Font Weights
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-lg font-normal text-text-primary">Regular (400)</span>
            <code className="text-sm font-mono text-text-tertiary">font-normal</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-lg font-medium text-text-primary">Medium (500)</span>
            <code className="text-sm font-mono text-text-tertiary">font-medium</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-lg font-semibold text-text-primary">Semibold (600)</span>
            <code className="text-sm font-mono text-text-tertiary">font-semibold</code>
          </div>
          <div className="p-4 rounded-lg border border-border-primary flex items-center justify-between">
            <span className="text-lg font-bold text-text-primary">Bold (700)</span>
            <code className="text-sm font-mono text-text-tertiary">font-bold</code>
          </div>
        </div>
      </section>

      {/* Line Heights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Line Heights
        </h2>
        <div className="space-y-6">
          <div className="p-4 rounded-lg border border-border-primary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Tight (1.25)</span>
              <code className="text-sm font-mono text-text-tertiary">leading-tight</code>
            </div>
            <p className="leading-tight text-text-secondary">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border-primary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Normal (1.5)</span>
              <code className="text-sm font-mono text-text-tertiary">leading-normal</code>
            </div>
            <p className="leading-normal text-text-secondary">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-border-primary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">Relaxed (1.625)</span>
              <code className="text-sm font-mono text-text-tertiary">leading-relaxed</code>
            </div>
            <p className="leading-relaxed text-text-secondary">
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </p>
          </div>
        </div>
      </section>

      {/* Typography Scale Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Typography Scale in Action
        </h2>
        <div className="p-8 rounded-lg border border-border-primary bg-bg-secondary space-y-4">
          <h1 className="text-4xl font-bold text-text-primary">
            Heading 1
          </h1>
          <h2 className="text-3xl font-semibold text-text-primary">
            Heading 2
          </h2>
          <h3 className="text-2xl font-semibold text-text-primary">
            Heading 3
          </h3>
          <h4 className="text-xl font-semibold text-text-primary">
            Heading 4
          </h4>
          <p className="text-base text-text-secondary leading-relaxed">
            Body text uses text-base (16px) with relaxed line height for comfortable reading. 
            This is the default text style for paragraphs and content blocks.
          </p>
          <p className="text-sm text-text-tertiary">
            Small text uses text-sm (14px) for captions, helper text, and secondary information.
          </p>
          <code className="text-sm font-mono text-brand-primary bg-bg-primary px-2 py-1 rounded">
            Code uses monospace font
          </code>
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

