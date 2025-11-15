import { Card } from '@/components/ui/Card';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

export function CardPage() {
  const cardProps = [
    {
      name: 'children',
      type: 'ReactNode',
      description: '카드 내부에 표시될 내용입니다.',
    },
    {
      name: 'hover',
      type: 'boolean',
      default: 'true',
      description: '호버 효과를 활성화/비활성화합니다.',
    },
  ];

  const basicCode = `import { Card } from '@/components/ui/Card';

function MyComponent() {
  return (
    <Card>
      <h3>Card Title</h3>
      <p>Card content goes here...</p>
    </Card>
  );
}`;

  const withContentCode = `<Card>
  <h3 className="text-xl font-semibold text-text-primary mb-2">
    Card Title
  </h3>
  <p className="text-text-secondary">
    This is a card component with hover effects. 
    It can contain any content you want.
  </p>
</Card>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Card</h1>
      <p className="text-lg text-text-secondary mb-12">
        카드는 관련된 콘텐츠를 그룹화하는 컨테이너 컴포넌트입니다. 호버 효과와 그림자를 지원합니다.
      </p>

      {/* Preview - Basic */}
      <ComponentPreview
        title="Basic Card"
        description="기본 카드 컴포넌트입니다."
      >
        <Card className="w-full max-w-sm">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Card Title
          </h3>
          <p className="text-text-secondary">
            This is a basic card component.
          </p>
        </Card>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={basicCode} language="tsx" />
      </div>

      {/* Preview - With Content */}
      <ComponentPreview
        title="Card with Content"
        description="다양한 콘텐츠가 포함된 카드입니다."
      >
        <Card className="w-full max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
              <span className="text-xl">🎨</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                Design System
              </h3>
              <p className="text-sm text-text-tertiary">Updated 2 hours ago</p>
            </div>
          </div>
          <p className="text-text-secondary mb-4">
            A comprehensive design system with reusable components and guidelines.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-brand-primary/15 text-brand-primary">
              Design
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-brand-success/15 text-brand-success">
              Active
            </span>
          </div>
        </Card>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={withContentCode} language="tsx" />
      </div>

      {/* Preview - Multiple Cards */}
      <ComponentPreview
        title="Multiple Cards"
        description="여러 카드를 그리드로 배치한 예시입니다."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Card 1
            </h3>
            <p className="text-sm text-text-secondary">
              First card content
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Card 2
            </h3>
            <p className="text-sm text-text-secondary">
              Second card content
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Card 3
            </h3>
            <p className="text-sm text-text-secondary">
              Third card content
            </p>
          </Card>
        </div>
      </ComponentPreview>

      {/* Preview - No Hover */}
      <ComponentPreview
        title="Without Hover Effect"
        description="호버 효과가 없는 카드입니다."
      >
        <Card hover={false} className="w-full max-w-sm">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Static Card
          </h3>
          <p className="text-text-secondary">
            This card has no hover effects.
          </p>
        </Card>
      </ComponentPreview>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Props
        </h2>
        <PropsTable data={cardProps} />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 관련된 정보를 논리적으로 그룹화하여 카드에 배치하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 카드 내 콘텐츠는 스캔하기 쉽게 구성하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 카드에 너무 많은 정보를 넣지 마세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

