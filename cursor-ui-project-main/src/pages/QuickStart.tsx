import { CodeBlock } from '@/components/docs/CodeBlock';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export function QuickStart() {
  const basicExample = `import { Button } from 'componenthub';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`;

  const formExample = `import { Button, Input } from 'componenthub';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
      />
      
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />
      
      <Button type="submit" variant="primary">
        Sign In
      </Button>
    </form>
  );
}`;

  const cardExample = `import { Card, Button } from 'componenthub';

function ProductCard() {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-2">
        Premium Plan
      </h3>
      <p className="text-text-secondary mb-4">
        Get access to all features
      </p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-3xl font-bold">$29</span>
        <span className="text-text-secondary">/month</span>
      </div>
      <Button variant="primary" className="w-full">
        Get Started
      </Button>
    </Card>
  );
}`;

  const themeToggle = `import { useTheme } from 'componenthub';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">
        Quick Start
      </h1>
      <p className="text-lg text-text-secondary mb-12">
        ComponentHub를 사용하여 첫 UI를 만들어보세요. 5분 안에 시작할 수 있습니다.
      </p>

      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          기본 사용법
        </h2>
        <p className="text-text-secondary mb-4">
          가장 간단한 예제부터 시작해봅시다. Button 컴포넌트를 import하고 사용하세요.
        </p>
        
        <div className="mb-6 p-8 rounded-xl bg-bg-primary border border-border-primary flex justify-center">
          <Button variant="primary">Click me</Button>
        </div>
        
        <CodeBlock code={basicExample} language="tsx" />
      </section>

      {/* Form Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          폼 만들기
        </h2>
        <p className="text-text-secondary mb-4">
          Input과 Button을 조합하여 로그인 폼을 만들어봅시다.
        </p>
        
        <div className="mb-6 p-8 rounded-xl bg-bg-primary border border-border-primary">
          <div className="max-w-sm mx-auto space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            <Button variant="primary" className="w-full">
              Sign In
            </Button>
          </div>
        </div>
        
        <CodeBlock code={formExample} language="tsx" />
      </section>

      {/* Card Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          카드 레이아웃
        </h2>
        <p className="text-text-secondary mb-4">
          Card 컴포넌트를 사용하여 콘텐츠를 구조화하세요.
        </p>
        
        <div className="mb-6 p-8 rounded-xl bg-bg-primary border border-border-primary flex justify-center">
          <Card className="max-w-sm w-full">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Premium Plan
            </h3>
            <p className="text-text-secondary mb-4">
              Get access to all features
            </p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-bold text-text-primary">$29</span>
              <span className="text-text-secondary">/month</span>
            </div>
            <Button variant="primary" className="w-full">
              Get Started
            </Button>
          </Card>
        </div>
        
        <CodeBlock code={cardExample} language="tsx" />
      </section>

      {/* Theme Toggle */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          테마 전환
        </h2>
        <p className="text-text-secondary mb-4">
          useTheme 훅을 사용하여 다크/라이트 모드를 전환할 수 있습니다.
        </p>
        <CodeBlock code={themeToggle} language="tsx" />
      </section>

      {/* Next Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          다음 단계
        </h2>
        <div className="p-6 rounded-xl bg-brand-primary/10 border border-brand-primary/30">
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            더 많은 컴포넌트 탐색하기
          </h3>
          <ul className="space-y-2 text-text-secondary mb-4">
            <li className="flex items-start gap-2">
              <span className="text-brand-primary mt-1">→</span>
              <a href="/components/button" className="hover:text-text-primary transition-colors">
                Button - 다양한 버튼 스타일
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary mt-1">→</span>
              <a href="/components/input" className="hover:text-text-primary transition-colors">
                Input - 폼 입력 필드
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary mt-1">→</span>
              <a href="/components/card" className="hover:text-text-primary transition-colors">
                Card - 콘텐츠 컨테이너
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary mt-1">→</span>
              <a href="/foundations/colors" className="hover:text-text-primary transition-colors">
                Foundations - 디자인 시스템 기초
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

