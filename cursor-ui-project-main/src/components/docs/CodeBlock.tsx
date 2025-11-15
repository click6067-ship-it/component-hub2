import { ReactNode, useState } from 'react';
import { CopyButton } from './CopyButton';
import clsx from 'clsx';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

interface CodeTabsProps {
  tabs: Array<{
    label: string;
    code: string;
    language?: string;
  }>;
}

export function CodeBlock({
  code,
  language = 'tsx',
  title,
  showLineNumbers = false,
}: CodeBlockProps) {
  const lines = code.trim().split('\n');

  return (
    <div className="rounded-lg border border-border-primary bg-bg-code overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-border-primary bg-bg-tertiary">
          <span className="text-sm font-medium text-text-secondary">{title}</span>
        </div>
      )}
      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <CopyButton text={code} />
        </div>
        <pre className="p-4 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.6' }}>
          <code className="text-sm font-mono text-text-primary">
            {showLineNumbers ? (
              <div className="flex">
                <div className="select-none pr-4 text-text-tertiary border-r border-border-primary mr-4">
                  {lines.map((_, i) => (
                    <div key={i} className="text-right">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  {lines.map((line, i) => (
                    <div key={i}>{line || ' '}</div>
                  ))}
                </div>
              </div>
            ) : (
              code.trim()
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}

export function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-lg border border-border-primary overflow-hidden bg-bg-code">
      <div className="flex gap-1 p-1 bg-bg-secondary border-b border-border-primary">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={clsx(
              'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
              activeTab === index
                ? 'bg-bg-code text-text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <CopyButton text={tabs[activeTab].code} />
        </div>
        <pre className="p-4 overflow-x-auto" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '1.6' }}>
          <code className="text-sm font-mono text-text-primary">
            {tabs[activeTab].code.trim()}
          </code>
        </pre>
      </div>
    </div>
  );
}

