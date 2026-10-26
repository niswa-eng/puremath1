export type WhiteboardTool =
  | 'touch'
  | 'pen'
  | 'highlighter'
  | 'eraser'
  | 'line'
  | 'rectangle'
  | 'circle'
  | 'dashed_line'
  | 'ruler';

export type PaperGridType =
  | 'grid'        // Square Math Grid
  | 'lined'       // Lined / Ruled Paper
  | 'dot'         // Dot Grid
  | 'plain'       // Plain White Board
  | 'axes';       // Coordinate Graph Axes

export type StrokeWidth = 2 | 4 | 8;

export interface Point {
  x: number;
  y: number;
  pressure?: number;
}

export interface DrawingStroke {
  id: string;
  tool: WhiteboardTool;
  color: string;
  width: number;
  points: Point[];
  isDashed?: boolean;
}

export interface WhiteboardState {
  mode: 'draw' | 'touch';
  activeTool: WhiteboardTool;
  color: string;
  strokeWidth: StrokeWidth;
  gridType: PaperGridType;
  showRuler: boolean;
  rulerAngle: number;
  rulerPosition: { x: number; y: number };
}
