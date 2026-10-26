import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math?: string;
  children?: string;
  block?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({ math, children, block = false, className = '' }) => {
  const text = math || children || '';

  const html = useMemo(() => {
    if (!text) return '';
    try {
      return katex.renderToString(text, {
        displayMode: block,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return text;
    }
  }, [text, block]);

  if (block) {
    return (
      <div
        className={`my-2 overflow-x-auto text-center py-1.5 px-2 bg-amber-50/50 rounded border border-amber-100/60 font-serif ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`inline-block px-0.5 align-middle font-serif ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * TextWithMath parses inline LaTeX surrounded by $...$ and block math $$...$$
 */
export const TextWithMath: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const parts = useMemo(() => {
    if (!text) return [];

    // Split text by $$...$$ first, then $...$
    const result: { type: 'text' | 'inline_math' | 'block_math'; content: string }[] = [];
    const blockRegex = /\$\$([\s\S]*?)\$\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = blockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parseInline(text.substring(lastIndex, match.index), result);
      }
      result.push({ type: 'block_math', content: match[1] });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parseInline(text.substring(lastIndex), result);
    }

    return result;
  }, [text]);

  function parseInline(
    subtext: string,
    out: { type: 'text' | 'inline_math' | 'block_math'; content: string }[]
  ) {
    const inlineRegex = /\$([^$]+?)\$/g;
    let lIdx = 0;
    let m: RegExpExecArray | null;

    while ((m = inlineRegex.exec(subtext)) !== null) {
      if (m.index > lIdx) {
        out.push({ type: 'text', content: subtext.substring(lIdx, m.index) });
      }
      out.push({ type: 'inline_math', content: m[1] });
      lIdx = m.index + m[0].length;
    }

    if (lIdx < subtext.length) {
      out.push({ type: 'text', content: subtext.substring(lIdx) });
    }
  }

  return (
    <span className={className}>
      {parts.map((p, idx) => {
        if (p.type === 'block_math') {
          return <MathView key={idx} math={p.content} block />;
        }
        if (p.type === 'inline_math') {
          return <MathView key={idx} math={p.content} block={false} />;
        }
        return <span key={idx}>{p.content}</span>;
      })}
    </span>
  );
};
