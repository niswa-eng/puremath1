import React, { useState } from 'react';
import { Unit, Subtopic } from '../types/content';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  HelpCircle,
  Zap,
  RotateCcw,
  BookOpen,
  ChevronDown,
  Layers,
  Sparkles,
} from 'lucide-react';

interface TopNavProps {
  units: Unit[];
  activeUnitIndex: number;
  activeSubtopicIndex: number;
  onSelectUnit: (index: number) => void;
  onSelectSubtopic: (index: number) => void;
  textSize: 'compact' | 'normal' | 'large';
  onChangeTextSize: (size: 'compact' | 'normal' | 'large') => void;
  zoomLevel: number;
  onZoomChange: (zoom: number) => void;
  animSpeed: 'normal' | 'fast' | 'instant';
  onChangeAnimSpeed: (speed: 'normal' | 'fast' | 'instant') => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  units,
  activeUnitIndex,
  activeSubtopicIndex,
  onSelectUnit,
  onSelectSubtopic,
  textSize,
  onChangeTextSize,
  zoomLevel,
  onZoomChange,
  animSpeed,
  onChangeAnimSpeed,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showObjectives, setShowObjectives] = useState(false);

  const currentUnit = units[activeUnitIndex];
  const currentSubtopics = currentUnit?.subtopics || [];
  const currentSubtopic = currentSubtopics[activeSubtopicIndex];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleFitScreen = () => {
    onZoomChange(1);
    onChangeTextSize('compact');
  };

  return (
    <header className="h-12 bg-white border-b border-[#E3DED4] px-3 flex items-center justify-between shrink-0 select-none shadow-xs z-30">
      {/* Left: Branding & Selectors */}
      <div className="flex items-center gap-2 min-w-0 max-w-[62%]">
        {/* Coursebook Badge */}
        <div className="hidden xl:flex items-center gap-1.5 px-2 py-1 rounded bg-[#0F1E36] text-white shrink-0">
          <BookOpen size={14} className="text-amber-400" />
          <span className="text-[11px] font-bold tracking-tight">Cambridge 9709 P1</span>
        </div>

        {/* Unit Selector */}
        <div className="relative shrink-0 max-w-[210px] sm:max-w-[240px]">
          <select
            value={activeUnitIndex}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!Number.isNaN(val)) onSelectUnit(val);
            }}
            className="w-full text-xs font-semibold bg-[#FAF8F3] hover:bg-[#F3EFE6] border border-[#E3DED4] text-[#0F1E36] rounded-md py-1.5 pl-2.5 pr-7 appearance-none cursor-pointer truncate transition-colors focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
          >
            {units.map((u, i) => (
              <option key={u.id} value={i}>
                Unit {u.number}: {u.title}
              </option>
            ))}
          </select>
          <ChevronDown
            size={13}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>

        {/* Subtopic Selector */}
        <div className="relative min-w-0 max-w-[260px] sm:max-w-[340px]">
          <select
            value={activeSubtopicIndex}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!Number.isNaN(val)) onSelectSubtopic(val);
            }}
            className="w-full text-xs font-medium bg-[#FAF8F3] hover:bg-[#F3EFE6] border border-[#E3DED4] text-[#0F1E36] rounded-md py-1.5 pl-2.5 pr-7 appearance-none cursor-pointer truncate transition-colors focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
          >
            {currentSubtopics.map((s, i) => (
              <option key={s.id} value={i}>
                {s.type === 'unitTest' ? `📝 ${s.title}` : `${s.number} ${s.title}`}
              </option>
            ))}
          </select>
          <ChevronDown
            size={13}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>

        {/* Objectives Badge Button */}
        <button
          onClick={() => setShowObjectives(true)}
          title="View Syllabus Learning Objectives"
          className="hidden md:flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded px-2 py-1 transition-colors whitespace-nowrap shrink-0"
        >
          <Sparkles size={12} />
          <span>Objectives ({currentUnit?.learningObjectives?.length || 0})</span>
        </button>
      </div>

      {/* Right: Quick Utility Buttons */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* Text Size (A- / A+) */}
        <div className="flex items-center border border-[#E3DED4] rounded-md overflow-hidden bg-[#FAF8F3]">
          <button
            onClick={() => {
              if (textSize === 'large') onChangeTextSize('normal');
              else if (textSize === 'normal') onChangeTextSize('compact');
            }}
            disabled={textSize === 'compact'}
            title="Decrease text size"
            className="px-1.5 py-1 text-[11px] font-bold text-gray-600 hover:text-gray-900 disabled:opacity-40 transition-colors"
          >
            A-
          </button>
          <span className="text-[10px] font-mono text-gray-400 px-1 border-x border-[#E3DED4]">
            {textSize === 'compact' ? 'S' : textSize === 'normal' ? 'M' : 'L'}
          </span>
          <button
            onClick={() => {
              if (textSize === 'compact') onChangeTextSize('normal');
              else if (textSize === 'normal') onChangeTextSize('large');
            }}
            disabled={textSize === 'large'}
            title="Increase text size"
            className="px-1.5 py-1 text-[11px] font-bold text-gray-600 hover:text-gray-900 disabled:opacity-40 transition-colors"
          >
            A+
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="hidden sm:flex items-center border border-[#E3DED4] rounded-md overflow-hidden bg-[#FAF8F3]">
          <button
            onClick={() => onZoomChange(Math.max(0.8, zoomLevel - 0.1))}
            disabled={zoomLevel <= 0.8}
            title="Zoom Out"
            className="p-1.5 text-gray-600 hover:text-gray-900 disabled:opacity-40"
          >
            <ZoomOut size={13} />
          </button>
          <button
            onClick={() => onZoomChange(1)}
            title="Reset Zoom (100%)"
            className="px-1.5 text-[10px] font-mono font-medium text-gray-600 border-x border-[#E3DED4] hover:bg-white"
          >
            {Math.round(zoomLevel * 100)}%
          </button>
          <button
            onClick={() => onZoomChange(Math.min(1.4, zoomLevel + 0.1))}
            disabled={zoomLevel >= 1.4}
            title="Zoom In"
            className="p-1.5 text-gray-600 hover:text-gray-900 disabled:opacity-40"
          >
            <ZoomIn size={13} />
          </button>
        </div>

        {/* Dedicated "Fit Screen" Button */}
        <button
          onClick={handleFitScreen}
          title="Fit view to screen (100%)"
          className="flex items-center gap-1 text-[11px] font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2 py-1 rounded-md transition-colors"
        >
          <RotateCcw size={12} />
          <span className="hidden lg:inline">Fit Screen</span>
        </button>

        {/* Animation Speed Toggle */}
        <button
          onClick={() => {
            const next = animSpeed === 'normal' ? 'fast' : animSpeed === 'fast' ? 'instant' : 'normal';
            onChangeAnimSpeed(next);
          }}
          title={`Animation Speed: ${animSpeed}`}
          className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-gray-700 bg-[#FAF8F3] hover:bg-gray-100 border border-[#E3DED4] px-1.5 py-1 rounded-md transition-colors"
        >
          <Zap size={12} className={animSpeed !== 'normal' ? 'text-amber-500 fill-amber-500' : 'text-gray-400'} />
          <span className="font-mono text-[10px] uppercase">{animSpeed}</span>
        </button>

        {/* Help Modal Toggle */}
        <button
          onClick={() => setShowHelp(true)}
          title="Classroom Whiteboard Help & Shortcuts"
          className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-[#FAF8F3] border border-transparent hover:border-[#E3DED4] rounded-md transition-colors"
        >
          <HelpCircle size={15} />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-[#FAF8F3] border border-transparent hover:border-[#E3DED4] rounded-md transition-colors"
        >
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </button>
      </div>

      {/* Learning Objectives Modal */}
      {showObjectives && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-lg w-full p-5 max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg">
                  <Sparkles size={16} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Unit {currentUnit?.number}: {currentUnit?.title}
                  </h3>
                  <p className="text-xs text-gray-500">Cambridge Syllabus 9709 Learning Objectives</p>
                </div>
              </div>
              <button
                onClick={() => setShowObjectives(false)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar text-xs">
              {currentUnit?.learningObjectives.map((obj, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-100 flex items-start gap-2">
                  <span className="font-mono font-bold text-emerald-800 shrink-0">✓</span>
                  <span className="text-gray-800 leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setShowObjectives(false)}
                className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-md w-full p-5">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 mb-3">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                <HelpCircle size={16} className="text-blue-600" />
                Interactive Whiteboard Guide
              </h3>
              <button
                onClick={() => setShowHelp(false)}
                className="p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-3 text-gray-700">
              <div>
                <span className="font-bold text-blue-900 block mb-0.5">📐 50/50 Dual Slide Workspace</span>
                <p>The left side provides curriculum material, LaTeX notes, and interactive math explorers. The right side is your live whiteboard scratchpad.</p>
              </div>

              <div>
                <span className="font-bold text-blue-900 block mb-0.5">✍️ Per-Slide Whiteboard Memory</span>
                <p>Notes drawn on the Teacher's Board are automatically saved to your browser per slide, so moving between slides preserves your blackboard work.</p>
              </div>

              <div>
                <span className="font-bold text-blue-900 block mb-0.5">🖊️ Whiteboard Tools</span>
                <p>Select Pen, Highlighter, Eraser, Straight Line, Circle, Rectangle, Dashed Line, or Math Ruler. Switch between 6 ink colors and 3 stroke widths.</p>
              </div>

              <div>
                <span className="font-bold text-blue-900 block mb-0.5">🎯 3-Question Exercises & Unit Tests</span>
                <p>All questions are displayed directly on the slide. Click "Check Answer" individually or toggle "Reveal All Answers" for group classroom review.</p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setShowHelp(false)}
                className="px-4 py-1.5 bg-[#0F1E36] text-white rounded-md text-xs font-semibold hover:bg-blue-950"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
