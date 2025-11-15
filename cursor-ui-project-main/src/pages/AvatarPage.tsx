import { Avatar } from '@/components/ui/Avatar';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

export function AvatarPage() {
  const avatarProps = [
    {
      name: 'src',
      type: 'string',
      description: '아바타 이미지의 URL입니다.',
    },
    {
      name: 'alt',
      type: 'string',
      description: '이미지의 대체 텍스트입니다.',
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl'",
      default: "'md'",
      description: '아바타의 크기를 지정합니다.',
    },
    {
      name: 'fallback',
      type: 'string',
      description: '이미지가 없을 때 표시할 텍스트입니다.',
    },
  ];

  const basicCode = `import { Avatar } from '@/components/ui/Avatar';

function MyComponent() {
  return <Avatar alt="John Doe" fallback="JD" />;
}`;

  const withImageCode = `<Avatar 
  src="https://i.pravatar.cc/150?img=1" 
  alt="User Name" 
/>`;

  const sizesCode = `<Avatar size="sm" alt="Small" fallback="SM" />
<Avatar size="md" alt="Medium" fallback="MD" />
<Avatar size="lg" alt="Large" fallback="LG" />
<Avatar size="xl" alt="Extra Large" fallback="XL" />`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Avatar</h1>
      <p className="text-lg text-text-secondary mb-12">
        아바타는 사용자 또는 엔티티를 시각적으로 표현하는 컴포넌트입니다.
      </p>

      {/* Sizes */}
      <ComponentPreview
        title="Sizes"
        description="다양한 크기의 아바타입니다."
      >
        <Avatar size="sm" alt="Small" fallback="SM" />
        <Avatar size="md" alt="Medium" fallback="MD" />
        <Avatar size="lg" alt="Large" fallback="LG" />
        <Avatar size="xl" alt="Extra Large" fallback="XL" />
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={sizesCode} language="tsx" />
      </div>

      {/* With Fallback */}
      <ComponentPreview
        title="With Fallback Text"
        description="이미지가 없을 때 이니셜을 표시합니다."
      >
        <Avatar alt="John Doe" fallback="JD" />
        <Avatar alt="Sarah Smith" fallback="SS" />
        <Avatar alt="Mike Johnson" fallback="MJ" />
        <Avatar alt="Emma Wilson" fallback="EW" />
      </ComponentPreview>

      {/* With Images */}
      <ComponentPreview
        title="With Images"
        description="이미지가 있는 아바타입니다."
      >
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
      </ComponentPreview>

      {/* Avatar Group */}
      <ComponentPreview
        title="Avatar Group"
        description="여러 아바타를 그룹으로 표시합니다."
      >
        <div className="flex -space-x-2">
          <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 1" size="md" />
          <Avatar src="https://i.pravatar.cc/150?img=6" alt="User 2" size="md" />
          <Avatar src="https://i.pravatar.cc/150?img=7" alt="User 3" size="md" />
          <Avatar src="https://i.pravatar.cc/150?img=8" alt="User 4" size="md" />
          <Avatar fallback="+5" size="md" />
        </div>
      </ComponentPreview>

      {/* In Context */}
      <ComponentPreview
        title="In Context"
        description="실제 사용 예시입니다."
      >
        <div className="max-w-sm p-4 rounded-lg border border-border-primary">
          <div className="flex items-center gap-3 mb-3">
            <Avatar src="https://i.pravatar.cc/150?img=9" alt="Jane Cooper" />
            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                Jane Cooper
              </h3>
              <p className="text-xs text-text-tertiary">
                jane.cooper@example.com
              </p>
            </div>
          </div>
          <p className="text-sm text-text-secondary">
            UI/UX Designer at ComponentHub
          </p>
        </div>
      </ComponentPreview>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Usage
        </h2>
        <CodeBlock code={basicCode} language="tsx" />
      </section>

      {/* With Image */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          With Image
        </h2>
        <CodeBlock code={withImageCode} language="tsx" />
      </section>

      {/* Props */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Props
        </h2>
        <PropsTable data={avatarProps} />
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 항상 alt 텍스트를 제공하여 접근성을 보장하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 이미지가 없을 때를 대비해 fallback을 제공하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 너무 작은 이미지를 사용하여 품질이 저하되지 않도록 하세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

