import { Badge } from '@/components/ui/Badge';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

export function BadgePage() {
  const badgeProps = [
    {
      name: 'variant',
      type: "'default' | 'success' | 'warning' | 'error' | 'info'",
      default: "'default'",
      description: '뱃지의 스타일 변형을 지정합니다.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: '뱃지 내부에 표시될 내용입니다.',
    },
  ];

  const basicCode = `import { Badge } from '@/components/ui/Badge';

function MyComponent() {
  return <Badge>New</Badge>;
}`;

  const variantsCode = `<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Badge</h1>
      <p className="text-lg text-text-secondary mb-12">
        뱃지는 상태, 카테고리, 카운트 등을 표시하는 작은 레이블 컴포넌트입니다.
      </p>

      {/* Variants */}
      <ComponentPreview
        title="Variants"
        description="다양한 스타일의 뱃지입니다."
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={variantsCode} language="tsx" />
      </div>

      {/* Status Badges */}
      <ComponentPreview
        title="Status Indicators"
        description="상태를 나타내는 뱃지입니다."
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Inactive</Badge>
          <Badge variant="info">Draft</Badge>
        </div>
      </ComponentPreview>

      {/* Count Badges */}
      <ComponentPreview
        title="Count Badges"
        description="숫자를 표시하는 뱃지입니다."
      >
        <div className="flex flex-wrap gap-3">
          <Badge>1</Badge>
          <Badge variant="error">3</Badge>
          <Badge variant="success">12</Badge>
          <Badge variant="warning">99+</Badge>
        </div>
      </ComponentPreview>

      {/* With Icons */}
      <ComponentPreview
        title="With Content"
        description="다양한 콘텐츠가 포함된 뱃지입니다."
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="success">✓ Verified</Badge>
          <Badge variant="warning">⚠ Warning</Badge>
          <Badge variant="error">✕ Closed</Badge>
          <Badge variant="info">ℹ Info</Badge>
          <Badge>⭐ Featured</Badge>
        </div>
      </ComponentPreview>

      {/* In Context */}
      <ComponentPreview
        title="In Context"
        description="실제 사용 예시입니다."
      >
        <div className="max-w-sm p-4 rounded-lg border border-border-primary">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-text-primary">
              Premium Plan
            </h3>
            <Badge variant="success">Active</Badge>
          </div>
          <p className="text-sm text-text-secondary mb-3">
            Full access to all features
          </p>
          <div className="flex gap-2">
            <Badge>Pro</Badge>
            <Badge variant="info">Popular</Badge>
          </div>
        </div>
      </ComponentPreview>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Usage
        </h2>
        <CodeBlock code={basicCode} language="tsx" />
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Props
        </h2>
        <PropsTable data={badgeProps} />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 의미 있는 variant를 선택하세요 (성공, 경고, 오류 등).
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 뱃지 텍스트는 간결하게 유지하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 한 요소에 너무 많은 뱃지를 사용하지 마세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

