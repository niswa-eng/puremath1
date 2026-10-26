import React from 'react';
import { WhiteboardTool, StrokeWidth } from '../types/whiteboard';
import { Step } from '../types/content';
import {
  Hand,
  PenTool,
  Highlighter,
  Eraser,
  Slash,
  Square,
  Circle,
  Compass,
  Minus,
  Undo2,
  Redo2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface BottomDockProps {
  // Whiteboard tool props
  mode: 'draw' | 'touch';
  onToggleMode: (mode: 'draw' | 'touch') => void;
  activeTool: WhiteboardTool;
  onSelectTool: (tool: WhiteboardTool) => void;
  color: string;
  onSelectColor: (color: string) => void;
  strokeWidth: StrokeWidth;
  onSelectStrokeWidth: (w: StrokeWidth) => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  canUndo: boolean;
  canRedo: boolean;

  // Lesson navigation props
  steps: Step[];
  currentStepIndex: number;
  onSelectStep: (index: number) => void;
}

const INK_COLORS = [
  { value: '#0F1E36', label: 'Navy Black' },
  { value: '#1E40AF', label: 'Blue Ink' },
  { value: '#DC2626', label: 'Crimson Red' },
  { value: '#16A34A', label: 'Emerald Green' },
  { value: '#D97706', label: 'Amber' },
  { value: '#7C3AED', label: 'Royal Purple' },
];

export const BottomDock: React.FC<BottomDockProps> = ({
  mode,
  onToggleMode,
  activeTool,
  onSelectTool,
  color,
  onSelectColor,
  strokeWidth,
  onSelectStrokeWidth,
  onUndo,
  onRedo,
  onClear,
  canUndo,
  canRedo,
  steps,
  currentStepIndex,
  onSelectStep,
}) => {
  const currentStep = steps[currentStepIndex];
  const totalSteps = steps.length;

  const canGoPrev = currentStepIndex > 0;
  const canGoNext = currentStepIndex < totalSteps - 1;

  // Tools block JSX
  const WhiteboardToolsGroup = (
    <div className="flex items-center gap-1.5 flex-wrap min-[1120px]:flex-nowrap py-1 shrink-0">
      {/* Mode Toggle (Touch / Draw) */}
      <button
        onClick={() => onToggleMode(mode === 'draw' ? 'touch' : 'draw')}
        title={mode === 'draw' ? 'Mode: Drawing (Click to switch to Touch/Select)' : 'Mode: Touch (Click to switch to Drawing)'}
        className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold transition-all border shrink-0 ${
          mode === 'draw'
            ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`}
      >
        {mode === 'draw' ? <PenTool size={13} /> : <Hand size={13} />}
        <span>{mode === 'draw' ? 'Draw' : 'Touch'}</span>
      </button>

      <div className="h-4 w-[1px] bg-gray-300 mx-0.5 shrink-0" />

      {/* Primary Drawing Tools */}
      <div className="flex items-center gap-0.5 bg-gray-100/90 p-0.5 rounded-md border border-gray-200 shrink-0">
        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('pen');
          }}
          title="Pen (Freehand)"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'pen'
              ? 'bg-white text-blue-700 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <PenTool size={14} />
        </button>

        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('highlighter');
          }}
          title="Highlighter (Semi-transparent)"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'highlighter'
              ? 'bg-white text-amber-600 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Highlighter size={14} />
        </button>

        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('eraser');
          }}
          title="Eraser"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'eraser'
              ? 'bg-white text-rose-600 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Eraser size={14} />
        </button>

        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('line');
          }}
          title="Straight Line"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'line'
              ? 'bg-white text-blue-700 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Slash size={14} />
        </button>

        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('dashed_line');
          }}
          title="Dashed Line"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'dashed_line'
              ? 'bg-white text-blue-700 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Minus size={14} className="scale-x-125" />
        </button>

        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('rectangle');
          }}
          title="Rectangle"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'rectangle'
              ? 'bg-white text-blue-700 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Square size={14} />
        </button>

        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('circle');
          }}
          title="Circle"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'circle'
              ? 'bg-white text-blue-700 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Circle size={14} />
        </button>

        <button
          onClick={() => {
            onToggleMode('draw');
            onSelectTool('ruler');
          }}
          title="Math Ruler Tool"
          className={`p-1 rounded transition-all ${
            mode === 'draw' && activeTool === 'ruler'
              ? 'bg-white text-amber-700 shadow-xs font-bold'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Compass size={14} />
        </button>
      </div>

      <div className="h-4 w-[1px] bg-gray-300 mx-0.5 shrink-0" />

      {/* 6 Ink Colors */}
      <div className="flex items-center gap-1 bg-gray-100/90 p-1 rounded-md border border-gray-200 shrink-0">
        {INK_COLORS.map((c) => (
          <button
            key={c.value}
            onClick={() => onSelectColor(c.value)}
            title={c.label}
            className={`w-4 h-4 rounded-full transition-transform shrink-0 ${
              color === c.value
                ? 'scale-125 ring-2 ring-offset-1 ring-blue-500 shadow-xs'
                : 'hover:scale-110 opacity-85'
            }`}
            style={{ backgroundColor: c.value }}
          />
        ))}
      </div>

      {/* 3 Stroke Thicknesses */}
      <div className="flex items-center gap-0.5 bg-gray-100/90 p-0.5 rounded-md border border-gray-200 shrink-0">
        {[
          { w: 2 as StrokeWidth, label: 'Fine', dotSize: 'w-1.5 h-1.5' },
          { w: 4 as StrokeWidth, label: 'Medium', dotSize: 'w-2 h-2' },
          { w: 8 as StrokeWidth, label: 'Broad', dotSize: 'w-2.5 h-2.5' },
        ].map((th) => (
          <button
            key={th.w}
            onClick={() => onSelectStrokeWidth(th.w)}
            title={`Stroke: ${th.label}`}
            className={`w-5 h-5 rounded flex items-center justify-center transition-all shrink-0 ${
              strokeWidth === th.w ? 'bg-white shadow-xs' : 'hover:bg-gray-200'
            }`}
          >
            <span
              className={`rounded-full ${th.dotSize}`}
              style={{ backgroundColor: color }}
            />
          </button>
        ))}
      </div>

      <div className="h-4 w-[1px] bg-gray-300 mx-0.5 shrink-0" />

      {/* Action Buttons: Undo / Redo / Clear */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          title="Undo"
          className="p-1 rounded bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
        >
          <Undo2 size={13} />
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          title="Redo"
          className="p-1 rounded bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 transition-colors"
        >
          <Redo2 size={13} />
        </button>
        <button
          onClick={onClear}
          title="Clear Board"
          className="p-1 rounded bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 transition-colors"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );

  // Navigation Group JSX
  const NavigationGroup = (
    <div className="flex items-center gap-1.5 justify-between min-[1120px]:justify-end py-1 shrink-0">
      {/* Prev Button */}
      <button
        onClick={() => onSelectStep(currentStepIndex - 1)}
        disabled={!canGoPrev}
        className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-[#0F1E36] text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-blue-950 transition-colors shrink-0 shadow-xs"
      >
        <ChevronLeft size={13} />
        <span className="hidden sm:inline">Prev</span>
      </button>

      {/* Step Pills & Title */}
      <div className="flex items-center gap-1 shrink-0">
        {steps.map((st, i) => {
          const isActive = i === currentStepIndex;
          return (
            <button
              key={st.id || i}
              onClick={() => onSelectStep(i)}
              title={`${i + 1}. ${st.title}`}
              className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 shrink-0 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-white text-gray-700 border border-[#E3DED4] hover:bg-gray-100'
              }`}
            >
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${isActive ? 'bg-white text-blue-700' : 'bg-gray-200 text-gray-700'}`}>
                {i + 1}
              </span>
              <span className="hidden xl:inline max-w-[100px] truncate">{st.badge || st.title}</span>
            </button>
          );
        })}
      </div>

      {/* Step Counter Pill */}
      <div className="flex items-center px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-900 font-mono text-[11px] font-semibold shrink-0">
        {currentStepIndex + 1}/{totalSteps}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onSelectStep(currentStepIndex + 1)}
        disabled={!canGoNext}
        className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold bg-[#0F1E36] text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-blue-950 transition-colors shrink-0 shadow-xs"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={13} />
      </button>
    </div>
  );

  return (
    <footer className="bg-white border-t border-[#E3DED4] px-3 z-30 shrink-0 shadow-xs select-none">
      <div className="min-[1120px]:flex min-[1120px]:items-center min-[1120px]:justify-between min-[1120px]:h-11 max-[1119px]:flex max-[1119px]:flex-col max-[1119px]:gap-1 max-[1119px]:py-1">
        <div className="shrink-0">{WhiteboardToolsGroup}</div>
        <div className="shrink-0">{NavigationGroup}</div>
      </div>
    </footer>
  );
};
