import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';

export function TabsPage() {
  const basicCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';

function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tab1">
        Content for Tab 1
      </TabsContent>
      <TabsContent value="tab2">
        Content for Tab 2
      </TabsContent>
      <TabsContent value="tab3">
        Content for Tab 3
      </TabsContent>
    </Tabs>
  );
}`;

  const withContentCode = `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
  
  <TabsContent value="account" className="mt-6">
    <div className="space-y-4">
      <Input label="Username" />
      <Input label="Email" type="email" />
      <Button>Save Changes</Button>
    </div>
  </TabsContent>
  
  <TabsContent value="password" className="mt-6">
    <div className="space-y-4">
      <Input label="Current Password" type="password" />
      <Input label="New Password" type="password" />
      <Button>Update Password</Button>
    </div>
  </TabsContent>
  
  <TabsContent value="notifications" className="mt-6">
    <div className="space-y-3">
      <Switch label="Email notifications" />
      <Switch label="Push notifications" />
      <Switch label="SMS notifications" />
    </div>
  </TabsContent>
</Tabs>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">Tabs</h1>
      <p className="text-lg text-text-secondary mb-12">
        탭은 관련된 콘텐츠를 그룹화하여 한 번에 하나씩 표시하는 컴포넌트입니다.
      </p>

      {/* Basic */}
      <ComponentPreview
        title="Basic Tabs"
        description="기본 탭 컴포넌트입니다."
      >
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tab1" className="mt-4 p-4 rounded-lg border border-border-primary">
            <p className="text-text-secondary">Content for Tab 1</p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4 p-4 rounded-lg border border-border-primary">
            <p className="text-text-secondary">Content for Tab 2</p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4 p-4 rounded-lg border border-border-primary">
            <p className="text-text-secondary">Content for Tab 3</p>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <div className="mb-12">
        <CodeBlock code={basicCode} language="tsx" />
      </div>

      {/* With Rich Content */}
      <ComponentPreview
        title="With Rich Content"
        description="다양한 콘텐츠가 포함된 탭입니다."
      >
        <Tabs defaultValue="overview" className="w-full max-w-2xl">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="p-6 rounded-lg border border-border-primary space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">
                Project Overview
              </h3>
              <p className="text-text-secondary">
                Welcome to your project dashboard. Here you can see an overview of your project's status and recent activity.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 rounded bg-bg-secondary text-center">
                  <div className="text-2xl font-bold text-text-primary">24</div>
                  <div className="text-xs text-text-tertiary">Total Tasks</div>
                </div>
                <div className="p-3 rounded bg-bg-secondary text-center">
                  <div className="text-2xl font-bold text-brand-success">18</div>
                  <div className="text-xs text-text-tertiary">Completed</div>
                </div>
                <div className="p-3 rounded bg-bg-secondary text-center">
                  <div className="text-2xl font-bold text-brand-warning">6</div>
                  <div className="text-xs text-text-tertiary">Pending</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <div className="p-6 rounded-lg border border-border-primary">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Analytics Dashboard
              </h3>
              <p className="text-text-secondary">
                View detailed analytics and metrics for your project.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <div className="p-6 rounded-lg border border-border-primary">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Project Settings
              </h3>
              <p className="text-text-secondary">
                Configure your project settings and preferences.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      {/* Full Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Full Example with Forms
        </h2>
        <p className="text-text-secondary mb-4">
          실제 폼과 함께 사용하는 예제입니다.
        </p>
        <CodeBlock code={withContentCode} language="tsx" />
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Component Structure
        </h2>
        <div className="p-6 rounded-lg border border-border-primary bg-bg-secondary">
          <p className="text-sm text-text-secondary mb-4">
            Tabs 컴포넌트는 4개의 하위 컴포넌트로 구성됩니다:
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <code className="text-brand-primary bg-bg-primary px-2 py-0.5 rounded">Tabs</code>
              <span>- 컨테이너 컴포넌트, defaultValue를 지정합니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <code className="text-brand-primary bg-bg-primary px-2 py-0.5 rounded">TabsList</code>
              <span>- 탭 버튼들을 감싸는 컨테이너입니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <code className="text-brand-primary bg-bg-primary px-2 py-0.5 rounded">TabsTrigger</code>
              <span>- 개별 탭 버튼, value로 식별합니다.</span>
            </li>
            <li className="flex items-start gap-2">
              <code className="text-brand-primary bg-bg-primary px-2 py-0.5 rounded">TabsContent</code>
              <span>- 각 탭의 콘텐츠, value로 연결됩니다.</span>
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
              ✅ 관련된 콘텐츠를 논리적으로 그룹화하세요.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-success/10 border border-brand-success/30">
            <p className="text-sm text-text-primary">
              ✅ 탭 레이블은 간결하고 설명적이어야 합니다.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-brand-error/10 border border-brand-error/30">
            <p className="text-sm text-text-primary">
              ❌ 너무 많은 탭(5개 이상)을 사용하지 마세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

