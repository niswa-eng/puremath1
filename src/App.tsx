import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { allUnits } from './content';
import { WhiteboardTool, PaperGridType, StrokeWidth } from './types/whiteboard';
import { TopNav } from './components/TopNav';
import { BottomDock } from './components/BottomDock';
import { LessonMaterial } from './components/LessonMaterial';
import { TeachersBoard } from './components/TeachersBoard';

export default function App() {
  // Navigation State
  const [activeUnitIndex, setActiveUnitIndex] = useState<number>(0);
  const [activeSubtopicIndex, setActiveSubtopicIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  // Viewport & Display State
  const [textSize, setTextSize] = useState<'compact' | 'normal' | 'large'>('compact');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [animSpeed, setAnimSpeed] = useState<'normal' | 'fast' | 'instant'>('normal');

  // Whiteboard State
  const [mode, setMode] = useState<'draw' | 'touch'>('draw');
  const [activeTool, setActiveTool] = useState<WhiteboardTool>('pen');
  const [color, setColor] = useState<string>('#0F1E36');
  const [strokeWidth, setStrokeWidth] = useState<StrokeWidth>(2);
  const [gridType, setGridType] = useState<PaperGridType>('grid');

  // Whiteboard Actions Trigger Counters
  const [undoTrigger, setUndoTrigger] = useState<number>(0);
  const [redoTrigger, setRedoTrigger] = useState<number>(0);
  const [clearTrigger, setClearTrigger] = useState<number>(0);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);

  // Active curriculum entities
  const currentUnit = allUnits[activeUnitIndex] || allUnits[0];
  const currentSubtopics = currentUnit?.subtopics || [];
  const currentSubtopic = currentSubtopics[activeSubtopicIndex] || currentSubtopics[0];
  const currentSteps = currentSubtopic?.steps || [];
  const currentStep = currentSteps[currentStepIndex] || currentSteps[0];

  // Unique slideKey for per-slide localStorage annotations
  const slideKey = useMemo(() => {
    return `${currentUnit.id}_${currentSubtopic.id}_step_${currentStepIndex}`;
  }, [currentUnit.id, currentSubtopic.id, currentStepIndex]);

  // Handle unit selection (resets subtopic and step)
  const handleSelectUnit = (index: number) => {
    setActiveUnitIndex(index);
    setActiveSubtopicIndex(0);
    setCurrentStepIndex(0);
  };

  // Handle subtopic selection (resets step)
  const handleSelectSubtopic = (index: number) => {
    setActiveSubtopicIndex(index);
    setCurrentStepIndex(0);
  };

  // Step change with bounds checking
  const handleSelectStep = useCallback((stepIdx: number) => {
    if (stepIdx >= 0 && stepIdx < currentSteps.length) {
      setCurrentStepIndex(stepIdx);
    }
  }, [currentSteps.length]);

  // Keyboard navigation shortcuts for classroom presentations
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.tagName === 'SELECT'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleSelectStep(currentStepIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handleSelectStep(currentStepIndex - 1);
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        if (e.shiftKey) {
          setRedoTrigger((prev) => prev + 1);
        } else {
          setUndoTrigger((prev) => prev + 1);
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        setRedoTrigger((prev) => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex, handleSelectStep]);

  return (
    <div
      className="flex flex-col h-screen w-screen overflow-hidden bg-[#FAF8F3] text-[#0F1E36] font-sans"
      style={{
        transform: zoomLevel !== 1 ? `scale(${zoomLevel})` : undefined,
        transformOrigin: 'top left',
        width: zoomLevel !== 1 ? `${(1 / zoomLevel) * 100}%` : '100%',
        height: zoomLevel !== 1 ? `${(1 / zoomLevel) * 100}%` : '100%',
      }}
    >
      {/* 1. Top Navigation Bar */}
      <TopNav
        units={allUnits}
        activeUnitIndex={activeUnitIndex}
        activeSubtopicIndex={activeSubtopicIndex}
        onSelectUnit={handleSelectUnit}
        onSelectSubtopic={handleSelectSubtopic}
        textSize={textSize}
        onChangeTextSize={setTextSize}
        zoomLevel={zoomLevel}
        onZoomChange={setZoomLevel}
        animSpeed={animSpeed}
        onChangeAnimSpeed={setAnimSpeed}
      />

      {/* 2. 50/50 Dual Slide Workspace (Fit to Screen - 100dvh) */}
      <main className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden relative">
        {/* Left 50%: Lesson Material Panel */}
        <section
          aria-label="Lesson Material"
          className="w-full md:w-1/2 h-1/2 md:h-full min-h-0 flex flex-col relative z-10"
        >
          {currentStep && (
            <LessonMaterial
              step={currentStep}
              unitNumber={currentUnit.number}
              subtopicNumber={currentSubtopic.number}
              textSize={textSize}
              animSpeed={animSpeed}
            />
          )}
        </section>

        {/* Right 50%: Teacher's Board & Scratchpad */}
        <section
          aria-label="Teacher's Whiteboard"
          className="w-full md:w-1/2 h-1/2 md:h-full min-h-0 flex flex-col relative z-20"
        >
          <TeachersBoard
            slideKey={slideKey}
            tool={activeTool}
            color={color}
            strokeWidth={strokeWidth}
            mode={mode}
            gridType={gridType}
            onGridChange={setGridType}
            undoTrigger={undoTrigger}
            redoTrigger={redoTrigger}
            clearTrigger={clearTrigger}
            canUndo={canUndo}
            canRedo={canRedo}
            onUndoRedoStateChange={(u, r) => {
              setCanUndo(u);
              setCanRedo(r);
            }}
          />
        </section>
      </main>

      {/* 3. Bottom Tool Dock */}
      <BottomDock
        mode={mode}
        onToggleMode={setMode}
        activeTool={activeTool}
        onSelectTool={setActiveTool}
        color={color}
        onSelectColor={setColor}
        strokeWidth={strokeWidth}
        onSelectStrokeWidth={setStrokeWidth}
        onUndo={() => setUndoTrigger((c) => c + 1)}
        onRedo={() => setRedoTrigger((c) => c + 1)}
        onClear={() => setClearTrigger((c) => c + 1)}
        canUndo={canUndo}
        canRedo={canRedo}
        steps={currentSteps}
        currentStepIndex={currentStepIndex}
        onSelectStep={handleSelectStep}
      />
    </div>
  );
}
