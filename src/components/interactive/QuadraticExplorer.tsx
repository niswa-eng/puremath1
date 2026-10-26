import React, { useState, useMemo } from 'react';
import { solveQuadratic, lineQuadraticIntersection, formatQuadraticTeX } from '../../utils/mathEngine';
import { MathView } from '../MathView';
import { RotateCcw, Sliders, Eye } from 'lucide-react';

interface QuadraticExplorerProps {
  initialA?: number;
  initialB?: number;
  initialC?: number;
  showLineMode?: boolean;
}

export const QuadraticExplorer: React.FC<QuadraticExplorerProps> = ({
  initialA = 1,
  initialB = -2,
  initialC = -3,
  showLineMode = false,
}) => {
  const [a, setA] = useState<number>(initialA);
  const [b, setB] = useState<number>(initialB);
  const [c, setC] = useState<number>(initialC);

  const [enableLine, setEnableLine] = useState<boolean>(showLineMode);
  const [m, setM] = useState<number>(1);
  const [k, setK] = useState<number>(-4);

  // Math calculations
  const safeA = a === 0 ? 0.1 : a;
  const quadData = useMemo(() => solveQuadratic(safeA, b, c), [safeA, b, c]);
  const lineData = useMemo(
    () => (enableLine ? lineQuadraticIntersection(safeA, b, c, m, k) : null),
    [enableLine, safeA, b, c, m, k]
  );

  // Coordinate system mapping: SVG width 460, height 260
  // Math domain: x from -7 to 7, y from -8 to 8
  const svgWidth = 460;
  const svgHeight = 250;
  const xMin = -6;
  const xMax = 6;
  const yMin = -8;
  const yMax = 8;

  const toSvgX = (xVal: number) => ((xVal - xMin) / (xMax - xMin)) * svgWidth;
  const toSvgY = (yVal: number) => svgHeight - ((yVal - yMin) / (yMax - yMin)) * svgHeight;

  // Generate curve path
  const curvePath = useMemo(() => {
    const points: string[] = [];
    const steps = 100;
    const dx = (xMax - xMin) / steps;

    for (let i = 0; i <= steps; i++) {
      const x = xMin + i * dx;
      const y = safeA * x * x + b * x + c;
      const sx = toSvgX(x);
      const sy = toSvgY(y);
      if (i === 0) points.push(`M ${sx.toFixed(1)} ${sy.toFixed(1)}`);
      else points.push(`L ${sx.toFixed(1)} ${sy.toFixed(1)}`);
    }
    return points.join(' ');
  }, [safeA, b, c]);

  // Generate line path
  const linePath = useMemo(() => {
    if (!enableLine) return '';
    const x1 = xMin;
    const y1 = m * x1 + k;
    const x2 = xMax;
    const y2 = m * x2 + k;
    return `M ${toSvgX(x1).toFixed(1)} ${toSvgY(y1).toFixed(1)} L ${toSvgX(x2).toFixed(1)} ${toSvgY(y2).toFixed(1)}`;
  }, [enableLine, m, k]);

  const discColor =
    quadData.discriminant > 0
      ? 'text-emerald-700 bg-emerald-50 border-emerald-300'
      : quadData.discriminant === 0
      ? 'text-amber-700 bg-amber-50 border-amber-300'
      : 'text-rose-700 bg-rose-50 border-rose-300';

  const resetAll = () => {
    setA(1);
    setB(-2);
    setC(-3);
    setEnableLine(false);
    setM(1);
    setK(-4);
  };

  return (
    <div className="bg-[#FAF8F3] border border-[#E3DED4] rounded-lg p-3 my-3 shadow-xs">
      <div className="flex items-center justify-between border-b border-[#E3DED4] pb-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-blue-100 text-blue-800 text-xs font-semibold flex items-center gap-1">
            <Sliders size={13} />
            Visual Explorer
          </span>
          <h4 className="text-sm font-bold text-[#0F1E36]">Quadratic Graph & Roots</h4>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setEnableLine(!enableLine)}
            className={`text-xs px-2 py-0.5 rounded font-medium border transition-colors ${
              enableLine
                ? 'bg-purple-100 text-purple-800 border-purple-300'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {enableLine ? 'Line: ON' : '+ Add Line'}
          </button>
          <button
            onClick={resetAll}
            title="Reset Graph"
            className="text-xs p-1 rounded text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative w-full overflow-hidden bg-white rounded border border-[#E3DED4] shadow-inner mb-2.5">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto block select-none pointer-events-none"
        >
          {/* Grid lines */}
          {[-4, -2, 2, 4].map((gridX) => (
            <line
              key={`gx-${gridX}`}
              x1={toSvgX(gridX)}
              y1={0}
              x2={toSvgX(gridX)}
              y2={svgHeight}
              stroke="#F1EFEA"
              strokeWidth="1"
            />
          ))}
          {[-6, -4, -2, 2, 4, 6].map((gridY) => (
            <line
              key={`gy-${gridY}`}
              x1={0}
              y1={toSvgY(gridY)}
              x2={svgWidth}
              y2={toSvgY(gridY)}
              stroke="#F1EFEA"
              strokeWidth="1"
            />
          ))}

          {/* Coordinate Axes */}
          <line
            x1={0}
            y1={toSvgY(0)}
            x2={svgWidth}
            y2={toSvgY(0)}
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <line
            x1={toSvgX(0)}
            y1={0}
            x2={toSvgX(0)}
            y2={svgHeight}
            stroke="#94A3B8"
            strokeWidth="1.5"
          />

          {/* Origin and Axis Labels */}
          <text x={toSvgX(0) + 4} y={toSvgY(0) + 12} fontSize="10" fill="#64748B">
            0
          </text>
          <text x={svgWidth - 14} y={toSvgY(0) - 4} fontSize="11" fontWeight="bold" fill="#475569">
            x
          </text>
          <text x={toSvgX(0) + 6} y={14} fontSize="11" fontWeight="bold" fill="#475569">
            y
          </text>

          {/* Axis of Symmetry (Dashed) */}
          <line
            x1={toSvgX(quadData.vertex.x)}
            y1={0}
            x2={toSvgX(quadData.vertex.x)}
            y2={svgHeight}
            stroke="#93C5FD"
            strokeWidth="1.2"
            strokeDasharray="4,4"
          />

          {/* Parabola Curve */}
          <path d={curvePath} fill="none" stroke="#2563EB" strokeWidth="2.5" />

          {/* Line (if enabled) */}
          {enableLine && (
            <path d={linePath} fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6,2" />
          )}

          {/* Vertex Point */}
          {quadData.vertex.x >= xMin &&
            quadData.vertex.x <= xMax &&
            quadData.vertex.y >= yMin &&
            quadData.vertex.y <= yMax && (
              <g>
                <circle
                  cx={toSvgX(quadData.vertex.x)}
                  cy={toSvgY(quadData.vertex.y)}
                  r="4.5"
                  fill="#DC2626"
                />
                <text
                  x={toSvgX(quadData.vertex.x) + 6}
                  y={toSvgY(quadData.vertex.y) + (safeA > 0 ? 12 : -6)}
                  fontSize="9.5"
                  fill="#991B1B"
                  fontWeight="bold"
                >
                  V({quadData.vertex.x.toFixed(1)}, {quadData.vertex.y.toFixed(1)})
                </text>
              </g>
            )}

          {/* Roots points */}
          {quadData.roots.map((root, idx) => (
            <g key={`root-${idx}`}>
              <circle cx={toSvgX(root)} cy={toSvgY(0)} r="4" fill="#059669" />
              <text
                x={toSvgX(root) - 8}
                y={toSvgY(0) + (safeA > 0 ? -7 : 14)}
                fontSize="9.5"
                fill="#047857"
                fontWeight="bold"
              >
                x={root.toFixed(2)}
              </text>
            </g>
          ))}

          {/* Line-Quadratic Intersection Points */}
          {enableLine &&
            lineData &&
            lineData.points.map((pt, idx) => (
              <g key={`int-${idx}`}>
                <circle cx={toSvgX(pt.x)} cy={toSvgY(pt.y)} r="5" fill="#7C3AED" stroke="#FFF" strokeWidth="1.5" />
                <text
                  x={toSvgX(pt.x) + 7}
                  y={toSvgY(pt.y) - 5}
                  fontSize="9.5"
                  fill="#6D28D9"
                  fontWeight="bold"
                >
                  ({pt.x.toFixed(1)}, {pt.y.toFixed(1)})
                </text>
              </g>
            ))}
        </svg>

        {/* Live Equation Badge overlay */}
        <div className="absolute top-1.5 left-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-xs border border-gray-200 font-mono shadow-xs">
          <span className="text-blue-700 font-bold">y = {formatQuadraticTeX(a, b, c)}</span>
          {enableLine && (
            <span className="ml-2 text-purple-700 font-bold border-l pl-2 border-gray-300">
              y = {m === 1 ? '' : m === -1 ? '-' : m}x {k >= 0 ? `+ ${k}` : `- ${Math.abs(k)}`}
            </span>
          )}
        </div>
      </div>

      {/* Real-time Math Property Chips */}
      <div className="grid grid-cols-3 gap-2 mb-2 text-xs">
        <div className={`p-1.5 rounded border ${discColor} flex flex-col justify-center`}>
          <div className="font-semibold flex items-center justify-between">
            <span>Discriminant (Δ)</span>
            <span>{quadData.discriminant.toFixed(1)}</span>
          </div>
          <span className="text-[11px] font-medium leading-tight mt-0.5">
            {quadData.discriminant > 0
              ? 'b²-4ac > 0 (2 Roots)'
              : quadData.discriminant === 0
              ? 'b²-4ac = 0 (1 Repeated)'
              : 'b²-4ac < 0 (No Real Roots)'}
          </span>
        </div>

        <div className="p-1.5 rounded border border-blue-200 bg-blue-50/60 text-blue-900 flex flex-col justify-center">
          <div className="font-semibold flex items-center justify-between">
            <span>Vertex ({safeA > 0 ? 'Min' : 'Max'})</span>
            <span className="font-mono">
              ({quadData.vertex.x.toFixed(2)}, {quadData.vertex.y.toFixed(2)})
            </span>
          </div>
          <span className="text-[11px] text-blue-800 mt-0.5">
            Symmetry: x = {quadData.vertex.x.toFixed(2)}
          </span>
        </div>

        <div className="p-1.5 rounded border border-amber-200 bg-amber-50/60 text-amber-900 flex flex-col justify-center">
          <div className="font-semibold">Completed Square</div>
          <div className="font-mono text-[11px] mt-0.5 truncate">
            {safeA !== 1 ? `${safeA}` : ''}(x {quadData.completedSquare.p >= 0 ? `+ ${quadData.completedSquare.p.toFixed(1)}` : `- ${Math.abs(quadData.completedSquare.p).toFixed(1)}`})² {quadData.completedSquare.q >= 0 ? `+ ${quadData.completedSquare.q.toFixed(1)}` : `- ${Math.abs(quadData.completedSquare.q).toFixed(1)}`}
          </div>
        </div>
      </div>

      {/* Sliders Control Panel */}
      <div className="bg-white rounded p-2 border border-[#E3DED4] space-y-1.5 text-xs">
        {/* Slider a */}
        <div className="flex items-center gap-3">
          <span className="w-12 font-semibold text-gray-700 font-mono">a = {a}</span>
          <input
            type="range"
            min="-3"
            max="3"
            step="0.5"
            value={a}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setA(val === 0 ? 0.5 : val);
            }}
            className="flex-1 accent-blue-600 h-1.5 bg-gray-200 rounded cursor-pointer"
          />
          <span className="text-[10px] text-gray-400">{a > 0 ? '∪ (Min)' : '∩ (Max)'}</span>
        </div>

        {/* Slider b */}
        <div className="flex items-center gap-3">
          <span className="w-12 font-semibold text-gray-700 font-mono">b = {b}</span>
          <input
            type="range"
            min="-6"
            max="6"
            step="0.5"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
            className="flex-1 accent-blue-600 h-1.5 bg-gray-200 rounded cursor-pointer"
          />
          <span className="text-[10px] text-gray-400">shifts vertex</span>
        </div>

        {/* Slider c */}
        <div className="flex items-center gap-3">
          <span className="w-12 font-semibold text-gray-700 font-mono">c = {c}</span>
          <input
            type="range"
            min="-6"
            max="6"
            step="0.5"
            value={c}
            onChange={(e) => setC(parseFloat(e.target.value))}
            className="flex-1 accent-blue-600 h-1.5 bg-gray-200 rounded cursor-pointer"
          />
          <span className="text-[10px] text-gray-400">y-intercept</span>
        </div>

        {/* Optional Line Controls */}
        {enableLine && (
          <div className="pt-1.5 mt-1 border-t border-purple-100 flex items-center gap-4 text-purple-900">
            <div className="flex items-center gap-2 flex-1">
              <span className="font-semibold font-mono text-[11px]">m = {m}</span>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={m}
                onChange={(e) => setM(parseFloat(e.target.value))}
                className="flex-1 accent-purple-600 h-1.5 bg-purple-100 rounded cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className="font-semibold font-mono text-[11px]">k = {k}</span>
              <input
                type="range"
                min="-6"
                max="6"
                step="0.5"
                value={k}
                onChange={(e) => setK(parseFloat(e.target.value))}
                className="flex-1 accent-purple-600 h-1.5 bg-purple-100 rounded cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>

      {/* Quick Presets */}
      <div className="flex items-center gap-1.5 mt-2 overflow-x-auto text-[11px]">
        <span className="text-gray-500 font-medium whitespace-nowrap">Presets:</span>
        <button
          onClick={() => {
            setA(1);
            setB(-2);
            setC(-3);
            setEnableLine(false);
          }}
          className="px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium whitespace-nowrap"
        >
          2 Real Roots
        </button>
        <button
          onClick={() => {
            setA(1);
            setB(-4);
            setC(4);
            setEnableLine(false);
          }}
          className="px-2 py-0.5 rounded bg-amber-50 hover:bg-amber-100 text-amber-800 font-medium whitespace-nowrap border border-amber-200"
        >
          Tangency (Δ = 0)
        </button>
        <button
          onClick={() => {
            setA(1);
            setB(2);
            setC(4);
            setEnableLine(false);
          }}
          className="px-2 py-0.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-800 font-medium whitespace-nowrap border border-rose-200"
        >
          No Real Roots (Δ &lt; 0)
        </button>
        <button
          onClick={() => {
            setA(-1);
            setB(2);
            setC(3);
            setEnableLine(false);
          }}
          className="px-2 py-0.5 rounded bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium whitespace-nowrap border border-blue-200"
        >
          Inverted (Max)
        </button>
        <button
          onClick={() => {
            setA(1);
            setB(0);
            setC(0);
            setEnableLine(true);
            setM(2);
            setK(-1);
          }}
          className="px-2 py-0.5 rounded bg-purple-50 hover:bg-purple-100 text-purple-800 font-medium whitespace-nowrap border border-purple-200"
        >
          Line Tangent
        </button>
      </div>
    </div>
  );
};
