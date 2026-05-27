import { useState, useCallback } from 'react';

export default function CodeBlock({ children, className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    // Extract text content from children (array of strings or elements)
    const text = Array.isArray(children)
      ? children.map(c => (typeof c === 'string' ? c : '')).join('\n')
      : children?.toString() || '';
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [children]);

  return (
    <div className="code-block relative">
      <button
        onClick={handleCopy}
        className="copy-btn absolute top-3 right-3 text-xs font-mono text-muted hover:text-accent transition-colors bg-surface/80 px-2 py-1 rounded border border-border"
      >
        {copied ? 'copied!' : 'copy'}
      </button>
      <pre className={className}>{children}</pre>
    </div>
  );
}
