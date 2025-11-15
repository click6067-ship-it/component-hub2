import { Checkbox } from '@/components/ui/Checkbox';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

export function CheckboxPage() {
  const checkboxProps = [
    {
      name: 'label',
      type: 'string',
      description: '체크박스 옆에 표시될 레이블입니다.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: '체크박스의 선택 상태입니다.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: '체크박스를 비활성화 상태로 만듭니다.',
    },
    {
      name: 'onChange',
      type: '(e: ChangeEvent) => void',
      description: '체크 상태가 변경될 때 호출되는 함수입니다.',
    },
  ];

  const basicCode = `import { Checkbox } from '@/components/ui/Checkbox';

function MyComponent() {
  return <Checkbox label="Accept terms and conditions" />;
}`;

  const controlledCode = `import { Checkbox } from '@/components/ui/Checkbox';
import { useState } from 'react';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Subscribe to newsletter"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Checkbox</h1>
      <p className="text-lg text-text-secondary mb-12">
        체크박스는 사용자가 옵션을 선택하거나 해제할 수 있는 입력 컴포넌트입니다.
      </p>

      {/* Basic */}
      <ComponentPreview
        title="Basic Checkbox"
        description="기본 체크박스입니다."
      >
        <Checkbox label="Default checkbox" />
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={basicCode} language="tsx" />
      </div>

      {/* With Labels */}
      <ComponentPreview
        title="With Labels"
        description="레이블이 있는 체크박스입니다."
      >
        <div className="space-y-3">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Subscribe to newsletter" />
          <Checkbox label="Enable notifications" />
        </div>
      </ComponentPreview>

      {/* Checked States */}
      <ComponentPreview
        title="Checked States"
        description="체크된 상태의 체크박스입니다."
      >
        <div className="space-y-3">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Disabled */}
      <ComponentPreview
        title="Disabled State"
        description="비활성화된 체크박스입니다."
      >
        <div className="space-y-3">
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
        </div>
      </ComponentPreview>

      {/* Controlled */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Controlled Component
        </h2>
        <p className="text-text-secondary mb-4">
          React state로 체크박스를 제어하는 예제입니다.
        </p>
        <CodeBlock code={controlledCode} language="tsx" />
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Props
        </h2>
        <PropsTable data={checkboxProps} />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 명확한 레이블을 제공하여 체크박스의 목적을 분명히 하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 관련된 체크박스들은 그룹으로 묶으세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 체크박스를 단일 선택에 사용하지 마세요 (라디오 버튼 사용).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

