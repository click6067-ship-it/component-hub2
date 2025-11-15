# ComponentHub 개발 컨텍스트

## 프로젝트 개요

**프로젝트명**: ComponentHub - Interactive UI Component Library
**목적**: 현대적인 UI 컴포넌트 라이브러리 문서 사이트 구축
**시작일**: 2025-10-27

## 기술 스택

### Core
- **React**: 18.2.0
- **TypeScript**: 5.3.3
- **Vite**: 5.0.8 (빌드 도구)

### Styling
- **Tailwind CSS**: 3.4.0
- **PostCSS**: 8.4.32
- **Autoprefixer**: 10.4.16

### Libraries
- **React Router DOM**: 6.20.0 (라우팅)
- **Lucide React**: 0.294.0 (아이콘)
- **clsx**: 2.0.0 (클래스 병합)
- **Prism.js**: 1.29.0 (코드 하이라이팅)

## 개발 프로세스

### Phase 1: 프로젝트 초기화 ✅
- Vite + React + TypeScript 프로젝트 생성
- 필수 패키지 설치 및 설정
- Tailwind CSS 구성
- TypeScript 설정 (strict mode)
- Vite 설정 (alias 경로 설정)

### Phase 2: 테마 시스템 구축 ✅
**파일 구조**:
- `src/styles/themes.css`: CSS Variables 정의
- `src/styles/index.css`: Tailwind imports + themes
- `src/hooks/useTheme.ts`: 테마 토글 훅

**구현 내용**:
- CSS Custom Properties 기반 다크/라이트 테마
- COLOR-THEMES-4.json 스펙 준수
- localStorage를 통한 테마 설정 영구 저장
- 시스템 테마 자동 감지 (prefers-color-scheme)
- 테마 전환 시 즉시 반영 (data-theme 속성)

**테마 변수**:
```css
/* Dark Theme */
--bg-primary: #1A1A1A
--text-primary: #FFFFFF
--brand-primary: #3B9EFF

/* Light Theme */
--bg-primary: #FFFFFF
--text-primary: #1A1A1A
--brand-primary: #0969DA
```

### Phase 3: 기본 레이아웃 구현 ✅
**컴포넌트**:
1. `Header.tsx` (60px 고정 높이)
   - 로고 (ComponentHub)
   - 검색바 (중앙, 400px)
   - 테마 토글 버튼
   - GitHub 링크
   - 모바일 햄버거 메뉴

2. `Sidebar.tsx` (280px 너비)
   - 트리 구조 네비게이션
   - 확장/축소 가능한 카테고리
   - 활성 항목 하이라이트
   - 모바일: drawer 형태 (오버레이 포함)
   - React Router Link 연동

3. `MainContent.tsx`
   - 최대 너비 1200px
   - 상단 60px padding (Header 높이)
   - 좌측 280px padding (Sidebar 너비, 데스크톱)
   - 반응형 padding 조정

### Phase 4: UI 컴포넌트 구현 ✅
**1. Button Component** (`src/components/ui/Button.tsx`)
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: ReactNode;
}
```
- Primary: 브랜드 색상 배경
- Secondary: 투명 배경 + 테두리
- Ghost: 투명 배경 + 호버 효과
- 크기: 32px (sm), 40px (md), 48px (lg)
- Focus ring: 2px 브랜드 색상

**2. Input Component** (`src/components/ui/Input.tsx`)
```typescript
interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  // ... HTML input attributes
}
```
- Label 지원
- Error 상태 (빨간색 테두리 + 메시지)
- Helper text (회색 텍스트)
- Focus 상태: 브랜드 색상 ring
- Disabled 상태: 50% opacity

**3. Card Component** (`src/components/ui/Card.tsx`)
```typescript
interface CardProps {
  children: ReactNode;
  hover?: boolean;
}
```
- 기본: padding 24px, border-radius 12px
- Hover 효과: border 색상 변경 + shadow 증가 + translateY
- Shadow: --shadow-base, --shadow-md
- 유연한 콘텐츠 지원

**4. Checkbox Component** (`src/components/ui/Checkbox.tsx`)
- Label 지원
- Checked/Unchecked 상태
- Disabled 상태
- Check 아이콘 애니메이션

**5. Switch Component** (`src/components/ui/Switch.tsx`)
- Toggle 스타일
- Label 지원
- Smooth transition 애니메이션

**6. Badge Component** (`src/components/ui/Badge.tsx`)
- 5가지 variants: default, success, warning, error, info
- 상태 표시, 카운트, 레이블 용도

**7. Avatar Component** (`src/components/ui/Avatar.tsx`)
- 4가지 크기: sm, md, lg, xl
- 이미지 지원
- Fallback 텍스트 (이니셜)

**8. Tabs Component** (`src/components/ui/Tabs.tsx`)
- Tabs, TabsList, TabsTrigger, TabsContent 구조
- Context API 사용
- 탭 전환 애니메이션

**9. Breadcrumb Component** (`src/components/ui/Breadcrumb.tsx`)
- Breadcrumb, BreadcrumbItem 구조
- 계층 구조 표시
- 현재 페이지 active 상태

### Phase 5: 문서 페이지 시스템 구현 ✅
**1. ComponentPreview** (`src/components/docs/ComponentPreview.tsx`)
- 라이브 컴포넌트 미리보기 컨테이너
- 최소 높이 300px
- 중앙 정렬된 콘텐츠
- Title과 Description 지원

**2. CodeBlock & CodeTabs** (`src/components/docs/CodeBlock.tsx`)
- 구문 강조 코드 블록
- 복사 버튼 (우측 상단)
- 탭 전환 (React, Vue, HTML)
- 라인 넘버 옵션
- Monospace 폰트

**3. CopyButton** (`src/components/docs/CopyButton.tsx`)
- Navigator Clipboard API 사용
- "Copy" → "Copied!" 피드백 (2초)
- 아이콘 변경 (Copy → Check)

**4. PropsTable** (`src/components/docs/PropsTable.tsx`)
- Props API 문서 테이블
- 컬럼: Prop, Type, Default, Description
- 코드 스타일링 (inline code)

### Phase 6: 라우팅 & 페이지 구현 ✅
**라우팅 구조** (`src/App.tsx`):
```
Getting Started:
/ → Introduction
/installation → Installation
/quick-start → QuickStart

Foundations:
/foundations/colors → ColorsPage
/foundations/typography → TypographyPage
/foundations/spacing → SpacingPage

Components:
/components/button → ButtonPage
/components/input → InputPage
/components/card → CardPage
/components/checkbox → CheckboxPage
/components/switch → SwitchPage
/components/badge → BadgePage
/components/avatar → AvatarPage
/components/tabs → TabsPage
/components/breadcrumb → BreadcrumbPage
```

**구현된 페이지**:

### Getting Started (3개)
1. **Introduction** (`src/pages/Introduction.tsx`) ✅
2. **Installation** (`src/pages/Installation.tsx`) ✅
3. **Quick Start** (`src/pages/QuickStart.tsx`) ✅

### Foundations (3개)
1. **Colors** (`src/pages/foundations/ColorsPage.tsx`) ✅
2. **Typography** (`src/pages/foundations/TypographyPage.tsx`) ✅
3. **Spacing** (`src/pages/foundations/SpacingPage.tsx`) ✅

### Components (9개)
1. **Button** (`src/pages/ButtonPage.tsx`) ✅
2. **Input** (`src/pages/InputPage.tsx`) ✅
3. **Card** (`src/pages/CardPage.tsx`) ✅
4. **Checkbox** (`src/pages/CheckboxPage.tsx`) ✅
5. **Switch** (`src/pages/SwitchPage.tsx`) ✅
6. **Badge** (`src/pages/BadgePage.tsx`) ✅
7. **Avatar** (`src/pages/AvatarPage.tsx`) ✅
8. **Tabs** (`src/pages/TabsPage.tsx`) ✅
9. **Breadcrumb** (`src/pages/BreadcrumbPage.tsx`) ✅

**총 15개 페이지 모두 구현 완료!**

## 데이터 구조

### Navigation (`src/data/navigation.ts`)
```typescript
interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
  icon?: string;
}
```

**네비게이션 트리**:
```
📦 Getting Started
  - Introduction (/) ✅
  - Installation (/installation) ✅
  - Quick Start (/quick-start) ✅

🎨 Foundations
  - Colors (/foundations/colors) ✅
  - Typography (/foundations/typography) ✅
  - Spacing (/foundations/spacing) ✅

🧩 Components
  ├─ Form Elements
  │  - Button (/components/button) ✅
  │  - Input (/components/input) ✅
  │  - Checkbox (/components/checkbox) ✅
  │  - Switch (/components/switch) ✅
  │
  ├─ Data Display
  │  - Card (/components/card) ✅
  │  - Badge (/components/badge) ✅
  │  - Avatar (/components/avatar) ✅
  │
  └─ Navigation
     - Tabs (/components/tabs) ✅
     - Breadcrumb (/components/breadcrumb) ✅
```

## 유틸리티 & 훅

### useTheme Hook
```typescript
const { theme, toggleTheme } = useTheme();
// theme: 'dark' | 'light'
// toggleTheme: () => void
```

### clipboard Utility
```typescript
copyToClipboard(text: string): Promise<boolean>
```

## 디자인 스펙 준수 사항

### COLOR-THEMES-4.json
- ✅ 모든 색상을 CSS Variables로 관리
- ✅ Dark/Light 테마 완전 지원
- ✅ 즉시 전환 (no flash)

### STYLE_GUIDE-4.md
- ✅ Spacing: 4px 기본 단위
- ✅ Typography: -apple-system 폰트 스택
- ✅ Border Radius: 6px (버튼, 인풋), 12px (카드)
- ✅ Shadows: --shadow-base, --shadow-md
- ✅ Transitions: 0.2s cubic-bezier(0.4, 0, 0.2, 1)

### PRD_UI_COMPONENT_LIBRARY-4.md
- ✅ Header: 60px 고정
- ✅ Sidebar: 280px, 트리 네비게이션
- ✅ Content: 1200px max-width
- ✅ 반응형: 모바일 drawer, 데스크톱 고정 사이드바

## 현재 상태

### 완료된 작업 ✅
- [x] 프로젝트 초기화
- [x] 테마 시스템
- [x] 기본 레이아웃 (Header, Sidebar, MainContent)
- [x] UI 컴포넌트 (9개)
  - [x] Button
  - [x] Input
  - [x] Card
  - [x] Checkbox
  - [x] Switch
  - [x] Badge
  - [x] Avatar
  - [x] Tabs
  - [x] Breadcrumb
- [x] 문서 시스템 (Preview, CodeBlock, PropsTable)
- [x] 라우팅 (15개 페이지)
- [x] Getting Started 페이지들 (3개)
- [x] Foundations 페이지들 (3개)
- [x] 컴포넌트 문서 페이지들 (9개)

### 선택적 개선 사항 (미구현)
- [ ] 검색 기능 (Cmd+K)
- [ ] 코드 구문 강조 개선 (Prism.js 통합)
- [ ] 다크 코드 블록 테마
- [ ] 컴포넌트 필터링
- [ ] 즐겨찾기 기능

## 알려진 이슈

### 해결됨
- ✅ CSS @import 순서 문제 (themes.css를 @tailwind 위로 이동)

### 현재 없음

## 성능 최적화

- Code splitting: React Router의 lazy loading (미적용)
- Bundle size: 현재 미최적화
- Image optimization: 아직 이미지 없음
- Font subsetting: 시스템 폰트 사용으로 불필요

## 접근성

- ✅ Semantic HTML 사용
- ✅ ARIA labels (버튼, 입력 필드)
- ✅ Keyboard navigation (Tab, Enter)
- ✅ Focus indicators (모든 인터랙티브 요소)
- ✅ Color contrast: WCAG AA 준수

## 브라우저 지원

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 빌드 & 배포

### 개발 서버
```bash
npm run dev
# http://localhost:5173
```

### 프로덕션 빌드
```bash
npm run build
# dist/ 폴더에 생성
```

### 프리뷰
```bash
npm run preview
```

## 참고 문서

- `AGENTS.md`: AI 에이전트 프롬프트 가이드
- `PRD_UI_COMPONENT_LIBRARY-4.md`: 제품 요구사항 문서
- `STYLE_GUIDE-4.md`: 스타일 가이드
- `COLOR-THEMES-4.json`: 색상 테마 정의
- `README.md`: 프로젝트 README

## 팀 노트

### 개발 원칙
1. 모든 컴포넌트는 TypeScript로 작성
2. Props는 명시적으로 타입 정의
3. CSS Variables만 사용 (하드코딩 금지)
4. 반응형 우선 (Mobile First)
5. 접근성 고려 (WCAG AA)

### 코드 스타일
- 함수형 컴포넌트 + Hooks
- Named exports (default export는 최소화)
- Props destructuring
- Tailwind utility classes 사용
- clsx로 조건부 클래스

---

## 최종 통계

- **총 페이지**: 15개 (모두 구현 완료)
- **총 컴포넌트**: 9개 (모두 구현 완료)
- **총 라우트**: 15개
- **코드 라인**: ~3,000+ 라인
- **개발 시간**: 약 2시간
- **완성도**: 100% (MVP 기준)

---

**마지막 업데이트**: 2025-10-27 22:30
**작성자**: AI Agent
**버전**: 2.0.0 (All Pages Implemented)

