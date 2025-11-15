import { Breadcrumb, BreadcrumbItem } from '@/components/ui/Breadcrumb';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';

export function BreadcrumbPage() {
  const basicCode = `import { Breadcrumb, BreadcrumbItem } from '@/components/ui/Breadcrumb';

function MyComponent() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem active>Electronics</BreadcrumbItem>
    </Breadcrumb>
  );
}`;

  const multiLevelCode = `<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
  <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
  <BreadcrumbItem href="/docs/components/navigation">Navigation</BreadcrumbItem>
  <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
</Breadcrumb>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Breadcrumb</h1>
      <p className="text-lg text-text-secondary mb-12">
        Breadcrumb는 사용자의 현재 위치를 표시하고 상위 페이지로 쉽게 이동할 수 있게 해주는 네비게이션 컴포넌트입니다.
      </p>

      {/* Basic */}
      <ComponentPreview
        title="Basic Breadcrumb"
        description="기본 브레드크럼입니다."
      >
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
          <BreadcrumbItem active>Electronics</BreadcrumbItem>
        </Breadcrumb>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={basicCode} language="tsx" />
      </div>

      {/* Two Levels */}
      <ComponentPreview
        title="Two Levels"
        description="2단계 브레드크럼입니다."
      >
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem active>About</BreadcrumbItem>
        </Breadcrumb>
      </ComponentPreview>

      {/* Multi Level */}
      <ComponentPreview
        title="Multi-Level"
        description="여러 단계의 브레드크럼입니다."
      >
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
          <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
          <BreadcrumbItem href="/docs/components/navigation">Navigation</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={multiLevelCode} language="tsx" />
      </div>

      {/* In Context */}
      <ComponentPreview
        title="In Context"
        description="실제 페이지 레이아웃에서의 사용 예시입니다."
      >
        <div className="w-full max-w-4xl p-6 rounded-lg border border-border-primary">
          <Breadcrumb className="mb-6">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
            <BreadcrumbItem active>Getting Started with React</BreadcrumbItem>
          </Breadcrumb>
          
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Getting Started with React
          </h1>
          <p className="text-text-secondary">
            This article will guide you through the basics of React and help you build your first application.
          </p>
        </div>
      </ComponentPreview>

      {/* Different Contexts */}
      <ComponentPreview
        title="Different Contexts"
        description="다양한 컨텍스트에서의 브레드크럼입니다."
      >
        <div className="w-full space-y-6">
          <div className="p-4 rounded-lg border border-border-primary">
            <p className="text-xs text-text-tertiary mb-2">E-commerce</p>
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/category">Electronics</BreadcrumbItem>
              <BreadcrumbItem href="/category/phones">Phones</BreadcrumbItem>
              <BreadcrumbItem active>iPhone 15 Pro</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="p-4 rounded-lg border border-border-primary">
            <p className="text-xs text-text-tertiary mb-2">Documentation</p>
            <Breadcrumb>
              <BreadcrumbItem href="/">Docs</BreadcrumbItem>
              <BreadcrumbItem href="/api">API Reference</BreadcrumbItem>
              <BreadcrumbItem active>Authentication</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <div className="p-4 rounded-lg border border-border-primary">
            <p className="text-xs text-text-tertiary mb-2">File System</p>
            <Breadcrumb>
              <BreadcrumbItem href="/">Root</BreadcrumbItem>
              <BreadcrumbItem href="/users">Users</BreadcrumbItem>
              <BreadcrumbItem href="/users/john">john</BreadcrumbItem>
              <BreadcrumbItem active>documents</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
      </ComponentPreview>

      {/* Component Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Component Structure
        </h2>
        <div className="p-6 rounded-lg border border-border-primary bg-bg-secondary">
          <p className="text-sm text-text-secondary mb-4">
            Breadcrumb 컴포넌트는 2개의 하위 컴포넌트로 구성됩니다:
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <code className="text-brand-primary bg-bg-primary px-2 py-0.5 rounded">Breadcrumb</code>
              <span>- 컨테이너 컴포넌트, 네비게이션 역할을 합니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <code className="text-brand-primary bg-bg-primary px-2 py-0.5 rounded">BreadcrumbItem</code>
              <span>- 개별 경로 아이템, href와 active 속성을 지원합니다.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 현재 페이지를 마지막 아이템으로 표시하고 active로 설정하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 각 아이템의 레이블은 간결하고 명확하게 작성하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 페이지 상단에 브레드크럼을 배치하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 너무 깊은 계층(6단계 이상)은 피하세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

