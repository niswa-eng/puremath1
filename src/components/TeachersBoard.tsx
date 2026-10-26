import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  WhiteboardTool,
  PaperGridType,
  StrokeWidth,
  DrawingStroke,
  Point,
} from '../types/whiteboard';
import {
  Grid,
  AlignLeft,
  CircleDot,
  Square,
  Crosshair,
  Trash2,
  Undo2,
  Redo2,
  Compass,
} from 'lucide-react';

interface TeachersBoardProps {
  slideKey: string;
  tool: WhiteboardTool;
  color: string;
  strokeWidth: StrokeWidth;
  mode: 'draw' | 'touch';
  gridType: PaperGridType;
  onGridChange: (grid: PaperGridType) => void;
  undoTrigger?: number;
  redoTrigger?: number;
  clearTrigger?: number;
  canUndo?: boolean;
  canRedo?: boolean;
  onUndoRedoStateChange?: (canUndo: boolean, canRedo: boolean) => void;
}

export const TeachersBoard: React.FC<TeachersBoardProps> = ({
  slideKey,
  tool,
  color,
  strokeWidth,
  mode,
  gridType,
  onGridChange,
  undoTrigger,
  redoTrigger,
  clearTrigger,
  onUndoRedoStateChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [strokes, setStrokes] = useState<DrawingStroke[]>([]);
  const [redoStack, setRedoStack] = useState<DrawingStroke[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [currentStroke, setCurrentStroke] = useState<DrawingStroke | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  // Ruler state
  const [showRuler, setShowRuler] = useState<boolean>(false);
  const [rulerPos, setRulerPos] = useState<{ x: number; y: number }>({ x: 80, y: 120 });
  const [rulerAngle, setRulerAngle] = useState<number>(0);
  const isDraggingRuler = useRef<boolean>(false);
  const rulerDragStart = useRef<{ mouseX: number; mouseY: number; initialX: number; initialY: number }>({
    mouseX: 0,
    mouseY: 0,
    initialX: 0,
    initialY: 0,
  });

  // Toggle ruler when ruler tool is selected
  useEffect(() => {
    if (tool === 'ruler') {
      setShowRuler(true);
    }
  }, [tool]);

  // Load strokes when slideKey changes
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`board_${slideKey}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        setStrokes(parsed);
      } else {
        setStrokes([]);
      }
    } catch {
      setStrokes([]);
    }
    setRedoStack([]);
  }, [slideKey]);

  // Save strokes when they change
  useEffect(() => {
    try {
      localStorage.setItem(`board_${slideKey}`, JSON.stringify(strokes));
    } catch {
      // ignore storage quota errors
    }
    if (onUndoRedoStateChange) {
      onUndoRedoStateChange(strokes.length > 0, redoStack.length > 0);
    }
  }, [strokes, redoStack, slideKey, onUndoRedoStateChange]);

  // Handle external Undo trigger
  useEffect(() => {
    if (undoTrigger && undoTrigger > 0) {
      handleUndo();
    }
  }, [undoTrigger]);

  // Handle external Redo trigger
  useEffect(() => {
    if (redoTrigger && redoTrigger > 0) {
      handleRedo();
    }
  }, [redoTrigger]);

  // Handle external Clear trigger
  useEffect(() => {
    if (clearTrigger && clearTrigger > 0) {
      setShowClearConfirm(true);
    }
  }, [clearTrigger]);

  const handleUndo = useCallback(() => {
    setStrokes((prev) => {
      if (prev.length === 0) return prev;
      const last = prev[prev.length - 1];
      setRedoStack((r) => [...r, last]);
      return prev.slice(0, -1);
    });
  }, []);

  const handleRedo = useCallback(() => {
    setRedoStack((prev) => {
      if (prev.length === 0) return prev;
      const next = prev[prev.length - 1];
      setStrokes((s) => [...s, next]);
      return prev.slice(0, -1);
    });
  }, []);

  const handleClear = () => {
    setStrokes([]);
    setRedoStack([]);
    setShowClearConfirm(false);
    try {
      localStorage.removeItem(`board_${slideKey}`);
    } catch {
      // ignore
    }
  };

  // Redraw canvas whenever strokes, currentStroke, or gridType changes
  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Draw background grid
    drawGrid(ctx, width, height, gridType);

    // Render completed strokes
    const allStrokes = currentStroke ? [...strokes, currentStroke] : strokes;

    for (const s of allStrokes) {
      drawStroke(ctx, s);
    }
  }, [strokes, currentStroke, gridType]);

  // Resize canvas according to container
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      redraw();
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    return () => observer.disconnect();
  }, [redraw]);

  // Redraw on state update
  useEffect(() => {
    redraw();
  }, [redraw]);

  // Grid drawing function
  function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number, type: PaperGridType) {
    ctx.save();
    const dpr = window.devicePixelRatio || 1;
    const width = w / dpr;
    const height = h / dpr;

    if (type === 'grid') {
      // Square Math Grid
      const step = 28;
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = '#E2E8F0';

      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    } else if (type === 'lined') {
      // Ruled lined paper
      const step = 30;
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = '#E2E8F0';

      // Left margin line
      ctx.beginPath();
      ctx.moveTo(48, 0);
      ctx.lineTo(48, height);
      ctx.strokeStyle = '#FECACA';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 0.75;
      for (let y = step + 15; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    } else if (type === 'dot') {
      // Dot Grid
      const step = 26;
      ctx.fillStyle = '#CBD5E1';
      for (let x = 16; x < width; x += step) {
        for (let y = 16; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 1.25, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (type === 'axes') {
      // Coordinate Graph Axes
      const cx = Math.floor(width / 2);
      const cy = Math.floor(height / 2);
      const step = 32;

      // Subtle background grid
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#F1F5F9';
      for (let x = cx % step; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = cy % step; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Main Axes
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#64748B';

      // X-Axis
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();

      // Y-Axis
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke();

      // Tick marks
      ctx.lineWidth = 1;
      ctx.fillStyle = '#64748B';
      ctx.font = '10px monospace';

      for (let x = cx + step; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, cy - 4);
        ctx.lineTo(x, cy + 4);
        ctx.stroke();
      }
      for (let x = cx - step; x > 0; x -= step) {
        ctx.beginPath();
        ctx.moveTo(x, cy - 4);
        ctx.lineTo(x, cy + 4);
        ctx.stroke();
      }
      for (let y = cy + step; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(cx - 4, y);
        ctx.lineTo(cx + 4, y);
        ctx.stroke();
      }
      for (let y = cy - step; y > 0; y -= step) {
        ctx.beginPath();
        ctx.moveTo(cx - 4, y);
        ctx.lineTo(cx + 4, y);
        ctx.stroke();
      }

      // Arrows
      ctx.fillText('x', width - 14, cy - 6);
      ctx.fillText('y', cx + 6, 14);
      ctx.fillText('O', cx - 12, cy + 12);
    }

    ctx.restore();
  }

  // Individual stroke drawing
  function drawStroke(ctx: CanvasRenderingContext2D, s: DrawingStroke) {
    if (!s.points || s.points.length === 0) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (s.tool === 'highlighter') {
      ctx.strokeStyle = s.color;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = s.width * 2.8;
    } else if (s.tool === 'eraser') {
      ctx.strokeStyle = '#FAF8F3';
      ctx.lineWidth = s.width * 4;
      ctx.globalAlpha = 1.0;
    } else {
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.globalAlpha = 1.0;
    }

    if (s.isDashed) {
      ctx.setLineDash([8, 6]);
    } else {
      ctx.setLineDash([]);
    }

    if (s.tool === 'rectangle') {
      const p1 = s.points[0];
      const p2 = s.points[s.points.length - 1];
      ctx.beginPath();
      ctx.rect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
      ctx.stroke();
    } else if (s.tool === 'circle') {
      const p1 = s.points[0];
      const p2 = s.points[s.points.length - 1];
      const radius = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      ctx.beginPath();
      ctx.arc(p1.x, p1.y, radius, 0, Math.PI * 2);
      ctx.stroke();
    } else if (s.tool === 'line' || s.tool === 'dashed_line') {
      const p1 = s.points[0];
      const p2 = s.points[s.points.length - 1];
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    } else {
      // Freehand pen or highlighter
      ctx.beginPath();
      ctx.moveTo(s.points[0].x, s.points[0].y);

      if (s.points.length === 1) {
        ctx.arc(s.points[0].x, s.points[0].y, s.width / 2, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
      } else {
        for (let i = 1; i < s.points.length; i++) {
          const pt = s.points[i];
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  // Pointer event helpers for drawing
  const getCanvasPoint = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: e.pressure || 0.5,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (mode === 'touch' || tool === 'touch') return;

    // Palm rejection: Ignore touch if a stylus/pen is currently in use or if user is panning
    if (e.pointerType === 'touch' && mode !== 'draw') return;

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore pointer capture if unsupported or synthetic
    }
    setIsDrawing(true);

    const pt = getCanvasPoint(e);
    const newStroke: DrawingStroke = {
      id: `${Date.now()}_${Math.random()}`,
      tool,
      color,
      width: strokeWidth,
      points: [pt],
      isDashed: tool === 'dashed_line',
    };

    setCurrentStroke(newStroke);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;

    const pt = getCanvasPoint(e);

    if (
      tool === 'line' ||
      tool === 'dashed_line' ||
      tool === 'rectangle' ||
      tool === 'circle'
    ) {
      setCurrentStroke({
        ...currentStroke,
        points: [currentStroke.points[0], pt],
      });
    } else {
      setCurrentStroke((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          points: [...prev.points, pt],
        };
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    setIsDrawing(false);
    setStrokes((prev) => [...prev, currentStroke]);
    setCurrentStroke(null);
    setRedoStack([]);
  };

  // Grid options config
  const gridOptions: { type: PaperGridType; label: string; icon: React.ReactNode }[] = [
    { type: 'grid', label: 'Math Grid', icon: <Grid size={14} /> },
    { type: 'lined', label: 'Lined', icon: <AlignLeft size={14} /> },
    { type: 'dot', label: 'Dot Grid', icon: <CircleDot size={14} /> },
    { type: 'plain', label: 'Plain Board', icon: <Square size={14} /> },
    { type: 'axes', label: 'Axes', icon: <Crosshair size={14} /> },
  ];

  return (
    <div className="h-full w-full flex flex-col bg-[#FAF8F3] relative overflow-hidden select-none">
      {/* Board Top Header */}
      <div className="h-10 px-3 bg-white/80 border-b border-[#E3DED4] flex items-center justify-between shrink-0 z-10 backdrop-blur-xs">
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-semibold text-xs tracking-wider uppercase text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            Teacher's Board
          </span>
          <span className="text-xs text-gray-400 font-mono hidden xl:inline">
            Slide notes auto-saved
          </span>
        </div>

        {/* Paper Grid Switcher */}
        <div className="flex items-center gap-1 bg-[#F1EFEA] p-0.5 rounded-md border border-[#E3DED4]">
          {gridOptions.map((opt) => (
            <button
              key={opt.type}
              onClick={() => onGridChange(opt.type)}
              title={opt.label}
              className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all ${
                gridType === opt.type
                  ? 'bg-white text-blue-900 shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {opt.icon}
              <span className="hidden md:inline">{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Local Fast Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowRuler(!showRuler)}
            title="Toggle Ruler Overlay"
            className={`p-1.5 rounded text-xs transition-colors border ${
              showRuler
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-white text-gray-600 border-[#E3DED4] hover:bg-gray-100'
            }`}
          >
            <Compass size={14} />
          </button>
          <button
            onClick={handleUndo}
            disabled={strokes.length === 0}
            title="Undo stroke"
            className="p-1.5 rounded bg-white border border-[#E3DED4] text-gray-700 disabled:opacity-40 hover:bg-gray-100 transition-colors"
          >
            <Undo2 size={14} />
          </button>
          <button
            onClick={handleRedo}
            disabled={redoStack.length === 0}
            title="Redo stroke"
            className="p-1.5 rounded bg-white border border-[#E3DED4] text-gray-700 disabled:opacity-40 hover:bg-gray-100 transition-colors"
          >
            <Redo2 size={14} />
          </button>
          <button
            onClick={() => setShowClearConfirm(true)}
            disabled={strokes.length === 0}
            title="Clear this slide's notes"
            className="flex items-center gap-1 px-2 py-1 rounded bg-rose-50 text-rose-700 border border-rose-200 disabled:opacity-40 hover:bg-rose-100 transition-colors text-xs font-medium"
          >
            <Trash2 size={13} />
            <span className="hidden lg:inline">Clear Board</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div
        ref={containerRef}
        className="flex-1 w-full relative touch-none cursor-crosshair overflow-hidden bg-[#FAF8F3]"
      >
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="absolute inset-0 w-full h-full block"
          style={{
            touchAction: 'none',
            cursor:
              mode === 'touch' || tool === 'touch'
                ? 'default'
                : tool === 'eraser'
                ? 'cell'
                : 'crosshair',
          }}
        />

        {/* Interactive Floating Ruler Overlay */}
        {showRuler && (
          <div
            style={{
              transform: `translate(${rulerPos.x}px, ${rulerPos.y}px) rotate(${rulerAngle}deg)`,
              transformOrigin: 'top left',
            }}
            className="absolute z-20 w-80 h-14 bg-amber-50/90 border border-amber-400 rounded shadow-md backdrop-blur-xs select-none cursor-move flex flex-col justify-between p-1"
            onPointerDown={(e) => {
              e.stopPropagation();
              isDraggingRuler.current = true;
              rulerDragStart.current = {
                mouseX: e.clientX,
                mouseY: e.clientY,
                initialX: rulerPos.x,
                initialY: rulerPos.y,
              };

              const handleMove = (ev: PointerEvent) => {
                if (!isDraggingRuler.current) return;
                const dx = ev.clientX - rulerDragStart.current.mouseX;
                const dy = ev.clientY - rulerDragStart.current.mouseY;
                setRulerPos({
                  x: rulerDragStart.current.initialX + dx,
                  y: rulerDragStart.current.initialY + dy,
                });
              };

              const handleUp = () => {
                isDraggingRuler.current = false;
                window.removeEventListener('pointermove', handleMove);
                window.removeEventListener('pointerup', handleUp);
              };

              window.addEventListener('pointermove', handleMove);
              window.addEventListener('pointerup', handleUp);
            }}
          >
            {/* Top ruler markings */}
            <div className="flex justify-between items-start border-b border-amber-300 pb-0.5">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((cm) => (
                <div key={cm} className="flex flex-col items-center">
                  <div className="w-[1px] h-2.5 bg-amber-700" />
                  <span className="text-[8px] font-mono text-amber-900 leading-none">{cm}</span>
                </div>
              ))}
            </div>

            {/* Ruler controls (rotate & close) */}
            <div className="flex items-center justify-between text-[10px] text-amber-900 px-1">
              <span className="font-semibold">Math Ruler (cm)</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRulerAngle((a) => (a + 15) % 360);
                  }}
                  className="px-1 py-0.5 bg-amber-200 hover:bg-amber-300 rounded font-mono"
                >
                  {rulerAngle}°
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowRuler(false);
                  }}
                  className="px-1 py-0.5 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Clear Confirmation Modal */}
        {showClearConfirm && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center z-30 p-4">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 max-w-xs w-full p-4 animate-in fade-in zoom-in-95 duration-100">
              <h3 className="text-sm font-bold text-gray-900 mb-1">Clear Teacher's Board?</h3>
              <p className="text-xs text-gray-600 mb-4">
                This will delete all handwritten notes and drawings on this slide. This action cannot be undone.
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClear}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded shadow-xs"
                >
                  Clear Notes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
