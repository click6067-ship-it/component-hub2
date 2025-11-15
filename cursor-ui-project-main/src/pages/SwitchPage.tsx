import { Switch } from '@/components/ui/Switch';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

export function SwitchPage() {
  const switchProps = [
    {
      name: 'label',
      type: 'string',
      description: '스위치 옆에 표시될 레이블입니다.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: '스위치의 선택 상태입니다.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: '스위치를 비활성화 상태로 만듭니다.',
    },
    {
      name: 'onChange',
      type: '(e: ChangeEvent) => void',
      description: '상태가 변경될 때 호출되는 함수입니다.',
    },
  ];

  const basicCode = `import { Switch } from '@/components/ui/Switch';

function MyComponent() {
  return <Switch label="Enable notifications" />;
}`;

  const controlledCode = `import { Switch } from '@/components/ui/Switch';
import { useState } from 'react';

function MyComponent() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      label="Dark mode"
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
    />
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Switch</h1>
      <p className="text-lg text-text-secondary mb-12">
        스위치는 즉시 적용되는 설정을 토글하는 컴포넌트입니다.
      </p>

      {/* Basic */}
      <ComponentPreview
        title="Basic Switch"
        description="기본 스위치입니다."
      >
        <Switch label="Enable feature" />
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={basicCode} language="tsx" />
      </div>

      {/* With Labels */}
      <ComponentPreview
        title="With Labels"
        description="레이블이 있는 스위치입니다."
      >
        <div className="space-y-4">
          <Switch label="Enable notifications" />
          <Switch label="Dark mode" />
          <Switch label="Auto-save" />
          <Switch label="Show status" />
        </div>
      </ComponentPreview>

      {/* Checked States */}
      <ComponentPreview
        title="States"
        description="다양한 상태의 스위치입니다."
      >
        <div className="space-y-4">
          <Switch label="Off (default)" />
          <Switch label="On" defaultChecked />
        </div>
      </ComponentPreview>

      {/* Disabled */}
      <ComponentPreview
        title="Disabled State"
        description="비활성화된 스위치입니다."
      >
        <div className="space-y-4">
          <Switch label="Disabled off" disabled />
          <Switch label="Disabled on" disabled defaultChecked />
        </div>
      </ComponentPreview>

      {/* Without Labels */}
      <ComponentPreview
        title="Without Labels"
        description="레이블 없는 스위치입니다."
      >
        <div className="flex gap-4">
          <Switch />
          <Switch defaultChecked />
          <Switch disabled />
        </div>
      </ComponentPreview>

      {/* Controlled */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Controlled Component
        </h2>
        <p className="text-text-secondary mb-4">
          React state로 스위치를 제어하는 예제입니다.
        </p>
        <CodeBlock code={controlledCode} language="tsx" />
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Props
        </h2>
        <PropsTable data={switchProps} />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 즉시 적용되는 설정에 스위치를 사용하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 레이블은 현재 상태가 아닌 기능을 설명하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 폼 제출이 필요한 옵션에는 체크박스를 사용하세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

