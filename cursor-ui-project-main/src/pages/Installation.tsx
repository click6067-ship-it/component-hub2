import { CodeBlock } from '@/components/docs/CodeBlock';

export function Installation() {
  const npmInstall = `npm install componenthub`;
  const yarnInstall = `yarn add componenthub`;
  const pnpmInstall = `pnpm add componenthub`;
  
  const setupCode = `import 'componenthub/dist/styles.css';`;
  
  const tailwindConfig = `// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/componenthub/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          // ... more colors
        },
      },
    },
  },
};`;

  const themeSetup = `// Add to your root HTML file
<html data-theme="dark">
  <!-- Your app -->
</html>`;

  return (
    <div className="max-w-5xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">
        Installation
      </h1>
      <p className="text-lg text-text-secondary mb-12">
        ComponentHub를 프로젝트에 설치하고 설정하는 방법을 안내합니다.
      </p>

      {/* Install */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          패키지 설치
        </h2>
        <p className="text-text-secondary mb-4">
          선호하는 패키지 매니저를 사용하여 ComponentHub를 설치하세요.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-text-secondary mb-2">npm</h3>
            <CodeBlock code={npmInstall} language="bash" />
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-text-secondary mb-2">yarn</h3>
            <CodeBlock code={yarnInstall} language="bash" />
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-text-secondary mb-2">pnpm</h3>
            <CodeBlock code={pnpmInstall} language="bash" />
          </div>
        </div>
      </section>

      {/* Setup CSS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          CSS 설정
        </h2>
        <p className="text-text-secondary mb-4">
          애플리케이션의 진입점에서 ComponentHub의 CSS 파일을 import하세요.
        </p>
        <CodeBlock code={setupCode} language="tsx" />
      </section>

      {/* Tailwind Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Tailwind CSS 설정
        </h2>
        <p className="text-text-secondary mb-4">
          Tailwind CSS를 사용하는 경우, ComponentHub 파일을 content 경로에 추가하세요.
        </p>
        <CodeBlock code={tailwindConfig} language="javascript" />
      </section>

      {/* Theme Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          테마 설정
        </h2>
        <p className="text-text-secondary mb-4">
          다크/라이트 테마를 사용하려면 HTML 루트 요소에 data-theme 속성을 추가하세요.
        </p>
        <CodeBlock code={themeSetup} language="html" />
      </section>

      {/* Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          요구사항
        </h2>
        <div className="p-6 rounded-xl bg-bg-secondary border border-border-primary">
          <ul className="space-y-2 text-text-secondary">
            <li className="flex items-start gap-2">
              <span className="text-brand-success mt-1">✓</span>
              <span>React 18.0 이상</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-success mt-1">✓</span>
              <span>TypeScript 5.0 이상 (선택사항)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-success mt-1">✓</span>
              <span>Tailwind CSS 3.0 이상 (선택사항)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          다음 단계
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/quick-start"
            className="p-6 rounded-xl bg-bg-secondary border border-border-primary hover:border-border-hover transition-colors block"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Quick Start →
            </h3>
            <p className="text-sm text-text-secondary">
              첫 컴포넌트를 만들어보세요
            </p>
          </a>
          
          <a
            href="/components/button"
            className="p-6 rounded-xl bg-bg-secondary border border-border-primary hover:border-border-hover transition-colors block"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              컴포넌트 둘러보기 →
            </h3>
            <p className="text-sm text-text-secondary">
              사용 가능한 모든 컴포넌트 확인
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}

