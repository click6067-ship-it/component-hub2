export function Introduction() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-text-primary mb-4">
        ComponentHub
      </h1>
      <p className="text-lg text-text-secondary mb-8">
        현대적인 UI 컴포넌트 라이브러리 문서 사이트입니다. 다크/라이트 테마를 지원하며,
        재사용 가능한 컴포넌트들을 제공합니다.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="p-6 rounded-xl bg-bg-secondary border border-border-primary">
          <div className="w-12 h-12 rounded-lg bg-brand-primary/15 flex items-center justify-center mb-4">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            테마 시스템
          </h3>
          <p className="text-text-secondary">
            다크 모드와 라이트 모드를 지원하는 포괄적인 테마 시스템
          </p>
        </div>

        <div className="p-6 rounded-xl bg-bg-secondary border border-border-primary">
          <div className="w-12 h-12 rounded-lg bg-brand-primary/15 flex items-center justify-center mb-4">
            <span className="text-2xl">🧩</span>
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            재사용 가능한 컴포넌트
          </h3>
          <p className="text-text-secondary">
            프로젝트에 바로 사용할 수 있는 완성도 높은 UI 컴포넌트
          </p>
        </div>

        <div className="p-6 rounded-xl bg-bg-secondary border border-border-primary">
          <div className="w-12 h-12 rounded-lg bg-brand-primary/15 flex items-center justify-center mb-4">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            TypeScript 지원
          </h3>
          <p className="text-text-secondary">
            완전한 타입 안정성을 제공하는 TypeScript 기반 컴포넌트
          </p>
        </div>

        <div className="p-6 rounded-xl bg-bg-secondary border border-border-primary">
          <div className="w-12 h-12 rounded-lg bg-brand-primary/15 flex items-center justify-center mb-4">
            <span className="text-2xl">📱</span>
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            반응형 디자인
          </h3>
          <p className="text-text-secondary">
            모바일부터 데스크톱까지 완벽하게 작동하는 반응형 레이아웃
          </p>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-brand-primary/10 border border-brand-primary/30">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          시작하기
        </h3>
        <p className="text-text-secondary mb-4">
          왼쪽 사이드바에서 원하는 컴포넌트를 선택하여 라이브 미리보기와 코드 예제를 확인하세요.
        </p>
        <div className="flex gap-3">
          <a
            href="/components/button"
            className="px-4 py-2 rounded-lg bg-brand-primary text-text-inverse font-medium hover:bg-brand-primary-hover transition-colors"
          >
            컴포넌트 둘러보기
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-bg-secondary border border-border-primary text-text-primary font-medium hover:bg-bg-hover transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

