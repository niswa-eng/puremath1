import React, { useState } from 'react';
import {
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  BookOpen,
  Award,
} from 'lucide-react';
import { Step, Block, DefinitionItem, WorkedStepItem } from '../types/content';
import { MathView, TextWithMath } from './MathView';
import { QuadraticExplorer } from './interactive/QuadraticExplorer';

interface LessonMaterialProps {
  step: Step;
  textSize: 'compact' | 'normal' | 'large';
  unitNumber?: number;
  subtopicNumber?: string;
  animSpeed?: 'normal' | 'fast' | 'instant';
}

export const LessonMaterial: React.FC<LessonMaterialProps> = ({
  step,
  textSize,
}) => {
  // Reveal state for individual question worked solutions on exercise slides
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});

  // Reveal step counter for step-by-step worked examples
  const [revealedSteps, setRevealedSteps] = useState<Record<string, number>>({});

  const toggleQuestionAnswer = (qId: string) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const questionsList = step.questions || step.practiceQuestions || [];

  const areAllQuestionsRevealed =
    questionsList.length > 0 &&
    questionsList.every((q) => revealedQuestions[q.id]);

  const toggleRevealAll = () => {
    const shouldReveal = !areAllQuestionsRevealed;
    const newState: Record<string, boolean> = {};
    for (const q of questionsList) {
      newState[q.id] = shouldReveal;
    }
    setRevealedQuestions(newState);
  };

  // Text size classes
  const textSizeClass =
    textSize === 'compact'
      ? 'text-xs leading-relaxed'
      : textSize === 'normal'
      ? 'text-sm leading-relaxed'
      : 'text-base leading-relaxed';

  const headingSizeClass =
    textSize === 'compact' ? 'text-base' : textSize === 'normal' ? 'text-lg' : 'text-xl';

  // Badge styling according to slide type
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'concept':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'worked_example':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'common_mistake':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'exercise_l1':
      case 'test_part_a':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'exercise_l2':
      case 'test_part_b':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'exercise_l3':
      case 'test_part_c':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-rose-100 text-rose-800 border-rose-200';
    }
  };

  return (
    <div className="h-full w-full flex flex-col bg-[#FAF8F3] border-r border-[#E3DED4] overflow-hidden">
      {/* Slide Header */}
      <div className="h-12 px-4 bg-white/90 border-b border-[#E3DED4] flex items-center justify-between shrink-0 backdrop-blur-xs">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border shrink-0 ${getBadgeStyle(
              step.type
            )}`}
          >
            {step.badge}
          </span>
          <h2 className={`font-bold text-[#0F1E36] truncate ${headingSizeClass}`}>
            {step.title}
          </h2>
        </div>

        {/* Global Reveal All Answers Button for Exercise & Test Slides */}
        {questionsList.length > 0 && (
          <button
            onClick={toggleRevealAll}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold border transition-all shrink-0 ${
              areAllQuestionsRevealed
                ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                : 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700 shadow-xs'
            }`}
          >
            {areAllQuestionsRevealed ? <EyeOff size={13} /> : <Eye size={13} />}
            <span>{areAllQuestionsRevealed ? 'Hide All Solutions' : 'Reveal All Answers'}</span>
          </button>
        )}
      </div>

      {/* Scrollable Material Card Area */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Content Blocks */}
          {step.blocks &&
            step.blocks.map((block, idx) => (
              <RenderBlock
                key={idx}
                block={block}
                textSizeClass={textSizeClass}
                revealedStepCount={revealedSteps[block.title || `block_${idx}`] || 1}
                onRevealStep={(count) =>
                  setRevealedSteps((prev) => ({
                    ...prev,
                    [block.title || `block_${idx}`]: count,
                  }))
                }
              />
            ))}

          {/* Dedicated Interactive Tool if present */}
          {step.interactiveToolId === 'quadratic_explorer' && (
            <QuadraticExplorer initialA={1} initialB={-2} initialC={-3} />
          )}
          {step.interactiveToolId === 'completing_square_explorer' && (
            <QuadraticExplorer initialA={2} initialB={8} initialC={3} />
          )}
          {step.interactiveToolId === 'line_quadratic_intersection' && (
            <QuadraticExplorer initialA={1} initialB={0} initialC={0} showLineMode={true} />
          )}

          {/* 3 Dedicated Practice Questions on Exercise Slides */}
          {questionsList.length > 0 && (
            <div className="space-y-4 pt-1">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 border-b border-[#E3DED4] pb-1.5">
                <span className="flex items-center gap-1">
                  <BookOpen size={13} />
                  <span>3 Questions — Displayed directly on slide</span>
                </span>
                <span>Solve on the Teacher's Board</span>
              </div>

              {questionsList.map((q) => (
                <div
                  key={q.id}
                  className="bg-white rounded-lg border border-[#E3DED4] p-3.5 shadow-xs transition-shadow hover:shadow-sm"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#0F1E36] text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                        [{q.number ?? q.questionNumber ?? 1}]
                      </span>
                      {q.marks !== undefined && (
                        <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                          [{q.marks} {q.marks === 1 ? 'mark' : 'marks'}]
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleQuestionAnswer(q.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium border transition-colors ${
                        revealedQuestions[q.id]
                          ? 'bg-gray-100 text-gray-700 border-gray-300'
                          : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                      }`}
                    >
                      {revealedQuestions[q.id] ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      <span>{revealedQuestions[q.id] ? 'Hide Answer' : 'Check Answer'}</span>
                    </button>
                  </div>

                  {/* Question Text */}
                  <div className={`${textSizeClass} text-[#0F1E36] font-medium leading-relaxed mb-2`}>
                    <TextWithMath text={q.question || q.prompt || ''} />
                  </div>

                  {/* Optional Hint */}
                  {q.hint && (
                    <div className="text-[11px] text-gray-500 bg-amber-50/60 p-2 rounded border border-amber-100 flex items-start gap-1.5 mb-2">
                      <Lightbulb size={12} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <TextWithMath text={q.hint} />
                      </span>
                    </div>
                  )}

                  {/* Detailed Solution & Marking Scheme (when revealed) */}
                  {revealedQuestions[q.id] && (
                    <div className="mt-3 pt-3 border-t border-emerald-100 bg-emerald-50/50 -mx-3.5 -mb-3.5 p-3.5 rounded-b-lg animate-in fade-in duration-150">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-2">
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>Worked Solution</span>
                      </div>

                      <div className={`${textSizeClass} text-gray-800 leading-relaxed font-normal`}>
                        <TextWithMath text={q.solution || q.answer || ''} />
                      </div>

                      {/* Cambridge Mark Scheme Breakdown */}
                      {q.markingScheme && q.markingScheme.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-emerald-200/60">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 block mb-1">
                            Cambridge Mark Scheme Breakdown:
                          </span>
                          <div className="space-y-1">
                            {q.markingScheme.map((scheme, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-start gap-2 text-[11px] text-gray-700 bg-white/70 px-2 py-1 rounded border border-emerald-100"
                              >
                                <span className="font-bold text-emerald-800">•</span>
                                <div>
                                  <TextWithMath text={scheme} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper renderer for different content block types
const RenderBlock: React.FC<{
  block: Block;
  textSizeClass: string;
  revealedStepCount: number;
  onRevealStep: (count: number) => void;
}> = ({ block, textSizeClass, revealedStepCount, onRevealStep }) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <div className={`text-gray-800 leading-relaxed ${textSizeClass}`}>
          {block.title && <h3 className="font-bold text-[#0F1E36] mb-1">{block.title}</h3>}
          <TextWithMath text={block.content || ''} />
        </div>
      );

    case 'math_display':
      return (
        <div className="my-3">
          {block.title && <h4 className="text-xs font-bold text-gray-500 mb-1">{block.title}</h4>}
          <MathView math={block.math || block.content || ''} block />
        </div>
      );

    case 'formula_card':
      return (
        <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-3.5 my-2">
          {block.title && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-1.5">
              <Award size={14} className="text-blue-700" />
              <span>{block.title}</span>
            </div>
          )}
          {block.math && <MathView math={block.math} block />}
          {block.content && (
            <div className={`mt-2 text-blue-950 font-medium ${textSizeClass}`}>
              <TextWithMath text={block.content} />
            </div>
          )}
        </div>
      );

    case 'definition':
      return (
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-lg p-3.5 my-2">
          {block.title && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-2">
              <BookOpen size={14} className="text-amber-700" />
              <span>{block.title}</span>
            </div>
          )}
          {block.items &&
            (block.items as DefinitionItem[]).map((item, idx) => (
              <div key={idx} className="mb-2 last:mb-0">
                <span className="font-bold text-amber-950 text-xs block">{item.term}</span>
                <p className={`text-gray-800 ${textSizeClass}`}>
                  <TextWithMath text={item.definition} />
                </p>
                {item.example && (
                  <p className="text-xs text-amber-800/90 font-mono mt-0.5 bg-white/70 p-1 rounded border border-amber-100">
                    <TextWithMath text={`Example: ${item.example}`} />
                  </p>
                )}
              </div>
            ))}
        </div>
      );

    case 'intuition':
      return (
        <div className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-3.5 my-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1.5">
            <Lightbulb size={14} className="text-emerald-700" />
            <span>{block.title || 'Intuition & Visual Concept'}</span>
          </div>
          <div className={`text-emerald-950 ${textSizeClass}`}>
            <TextWithMath text={block.content || ''} />
          </div>
          {block.math && <MathView math={block.math} block />}
        </div>
      );

    case 'warning':
    case 'common_mistake':
      return (
        <div className="bg-rose-50/70 border border-rose-200 rounded-lg p-3.5 my-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 mb-1.5">
            <AlertTriangle size={14} className="text-rose-600" />
            <span>{block.title || 'Common Misconception & Examiner Warning'}</span>
          </div>
          {block.mistake && (
            <div className={`text-rose-950 mb-1.5 ${textSizeClass}`}>
              <span className="font-bold text-rose-800">Common Trap: </span>
              <TextWithMath text={block.mistake} />
            </div>
          )}
          {block.correction && (
            <div className={`text-emerald-950 font-medium mb-1.5 ${textSizeClass}`}>
              <span className="font-bold text-emerald-800">Correction: </span>
              <TextWithMath text={block.correction} />
            </div>
          )}
          {block.content && (
            <div className={`text-rose-950 ${textSizeClass}`}>
              <TextWithMath text={block.content} />
            </div>
          )}
          {(block.notes || block.proTip) && (
            <div className="mt-2 text-xs bg-white/80 p-2 rounded border border-rose-100 text-rose-900 font-medium">
              💡 <span className="font-bold">Pro-Tip / Memory Trick:</span>{' '}
              <TextWithMath text={block.proTip || block.notes || ''} />
            </div>
          )}
        </div>
      );

    case 'worked_steps':
      const stepItems = (block.items || []) as WorkedStepItem[];
      return (
        <div className="bg-white border border-[#E3DED4] rounded-lg p-3.5 my-2 shadow-xs">
          {block.title && (
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
              <span className="text-xs font-bold text-gray-800">
                <TextWithMath text={block.title} />
              </span>
              {revealedStepCount < stepItems.length && (
                <button
                  onClick={() => onRevealStep(revealedStepCount + 1)}
                  className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  Reveal Next Step ({revealedStepCount}/{stepItems.length})
                </button>
              )}
            </div>
          )}

          {block.content && (
            <p className={`text-gray-700 mb-3 ${textSizeClass}`}>
              <TextWithMath text={block.content} />
            </p>
          )}

          <div className="space-y-3">
            {stepItems.slice(0, revealedStepCount).map((stepItem, sIdx) => (
              <div
                key={sIdx}
                className="pl-3 border-l-2 border-emerald-500 py-0.5 animate-in fade-in duration-200"
              >
                <div className="text-xs font-semibold text-emerald-900 mb-1">
                  Step {stepItem.stepNumber}: <TextWithMath text={stepItem.explanation} />
                </div>
                {stepItem.math && (
                  <div className="bg-gray-50/80 p-2 rounded border border-gray-200/60 my-1 overflow-x-auto">
                    <MathView math={stepItem.math} block />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};
