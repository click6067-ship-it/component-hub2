import { Input } from '@/components/ui/Input';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

export function InputPage() {
  const inputProps = [
    {
      name: 'label',
      type: 'string',
      description: '입력 필드 위에 표시될 레이블입니다.',
    },
    {
      name: 'error',
      type: 'string',
      description: '에러 메시지를 표시합니다.',
    },
    {
      name: 'helperText',
      type: 'string',
      description: '입력 필드 아래에 표시될 도움말 텍스트입니다.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: '입력 필드의 플레이스홀더 텍스트입니다.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: '입력 필드를 비활성화 상태로 만듭니다.',
    },
  ];

  const basicCode = `import { Input } from '@/components/ui/Input';

function MyComponent() {
  return <Input placeholder="Enter text..." />;
}`;

  const withLabelCode = `<Input 
  label="Email" 
  type="email" 
  placeholder="your@email.com" 
/>`;

  const withErrorCode = `<Input 
  label="Username" 
  error="This field is required" 
  placeholder="Enter username" 
/>`;

  const withHelperCode = `<Input 
  label="Password" 
  type="password" 
  helperText="Must be at least 8 characters" 
/>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Input</h1>
      <p className="text-lg text-text-secondary mb-12">
        사용자로부터 텍스트 입력을 받는 폼 요소입니다. 다양한 상태와 스타일을 지원합니다.
      </p>

      {/* Preview - Basic */}
      <ComponentPreview
        title="Basic Input"
        description="기본 입력 필드입니다."
      >
        <div className="w-full max-w-sm">
          <Input placeholder="Enter text..." />
        </div>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={basicCode} language="tsx" />
      </div>

      {/* Preview - With Label */}
      <ComponentPreview
        title="With Label"
        description="레이블이 있는 입력 필드입니다."
      >
        <div className="w-full max-w-sm">
          <Input label="Email" type="email" placeholder="your@email.com" />
        </div>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={withLabelCode} language="tsx" />
      </div>

      {/* Preview - With Error */}
      <ComponentPreview
        title="With Error"
        description="에러 상태의 입력 필드입니다."
      >
        <div className="w-full max-w-sm">
          <Input
            label="Username"
            error="This field is required"
            placeholder="Enter username"
          />
        </div>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={withErrorCode} language="tsx" />
      </div>

      {/* Preview - With Helper Text */}
      <ComponentPreview
        title="With Helper Text"
        description="도움말 텍스트가 있는 입력 필드입니다."
      >
        <div className="w-full max-w-sm">
          <Input
            label="Password"
            type="password"
            helperText="Must be at least 8 characters"
          />
        </div>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={withHelperCode} language="tsx" />
      </div>

      {/* Preview - Disabled */}
      <ComponentPreview
        title="Disabled State"
        description="비활성화된 입력 필드입니다."
      >
        <div className="w-full max-w-sm">
          <Input label="Disabled" disabled placeholder="Cannot edit" />
        </div>
      </ComponentPreview>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Props
        </h2>
        <PropsTable data={inputProps} />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 명확한 레이블을 제공하여 사용자가 무엇을 입력해야 하는지 알 수 있게 하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 에러 메시지는 구체적이고 도움이 되는 내용으로 작성하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 플레이스홀더를 레이블 대신 사용하지 마세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

