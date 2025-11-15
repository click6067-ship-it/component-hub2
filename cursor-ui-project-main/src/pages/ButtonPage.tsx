import { Button } from '@/components/ui/Button';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock, CodeTabs } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

export function ButtonPage() {
  const buttonProps = [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'ghost'",
      default: "'primary'",
      description: '버튼의 스타일 변형을 지정합니다.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: '버튼의 크기를 지정합니다.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: '버튼을 비활성화 상태로 만듭니다.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: '버튼 내부에 표시될 내용입니다.',
    },
  ];

  const usageCode = `import { Button } from '@/components/ui/Button';

function MyComponent() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}`;

  const variantsCode = `// Primary Button
<Button variant="primary">Primary Button</Button>

// Secondary Button
<Button variant="secondary">Secondary Button</Button>

// Ghost Button
<Button variant="ghost">Ghost Button</Button>`;

  const sizesCode = `// Small
<Button size="sm">Small Button</Button>

// Medium (default)
<Button size="md">Medium Button</Button>

// Large
<Button size="lg">Large Button</Button>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Button</h1>
      <p className="text-lg text-text-secondary mb-12">
        버튼은 사용자 액션을 트리거하는 상호작용 요소입니다. 다양한 변형과 크기를 지원합니다.
      </p>

      {/* Preview - Variants */}
      <ComponentPreview
        title="Variants"
        description="버튼의 다양한 스타일 변형입니다."
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={variantsCode} language="tsx" />
      </div>

      {/* Preview - Sizes */}
      <ComponentPreview
        title="Sizes"
        description="버튼의 다양한 크기입니다."
      >
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={sizesCode} language="tsx" />
      </div>

      {/* Preview - States */}
      <ComponentPreview
        title="States"
        description="버튼의 다양한 상태입니다."
      >
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </ComponentPreview>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Usage
        </h2>
        <CodeTabs
          tabs={[
            { label: 'React', code: usageCode, language: 'tsx' },
            {
              label: 'HTML',
              code: `<button class="btn btn-primary">Click me</button>`,
              language: 'html',
            },
          ]}
        />
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Props
        </h2>
        <PropsTable data={buttonProps} />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 주요 액션에는 primary 버튼을 사용하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 버튼 텍스트는 명확하고 액션 지향적으로 작성하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 한 화면에 너무 많은 primary 버튼을 사용하지 마세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

