/**
 * Mathematical utilities and calculations for Cambridge AS & A Level Pure Mathematics 1
 */

export interface QuadraticResult {
  discriminant: number;
  rootCount: 0 | 1 | 2;
  roots: number[];
  vertex: { x: number; y: number };
  completedSquare: {
    a: number;
    p: number; // in form a(x + p)^2 + q
    q: number;
  };
  nature: 'two distinct real roots' | 'one repeated real root' | 'no real roots';
}

export function solveQuadratic(a: number, b: number, c: number): QuadraticResult {
  if (a === 0) {
    throw new Error('Coefficient "a" cannot be 0 in a quadratic equation.');
  }

  const discriminant = b * b - 4 * a * c;
  const p = b / (2 * a);
  const q = c - (b * b) / (4 * a);
  const vertex = { x: -p, y: q };

  let rootCount: 0 | 1 | 2 = 0;
  let roots: number[] = [];
  let nature: 'two distinct real roots' | 'one repeated real root' | 'no real roots' = 'no real roots';

  const EPSILON = 1e-9;
  if (Math.abs(discriminant) < EPSILON) {
    rootCount = 1;
    roots = [-b / (2 * a)];
    nature = 'one repeated real root';
  } else if (discriminant > 0) {
    rootCount = 2;
    const sqrtD = Math.sqrt(discriminant);
    roots = [(-b - sqrtD) / (2 * a), (-b + sqrtD) / (2 * a)].sort((x, y) => x - y);
    nature = 'two distinct real roots';
  } else {
    rootCount = 0;
    roots = [];
    nature = 'no real roots';
  }

  return {
    discriminant,
    rootCount,
    roots,
    vertex,
    completedSquare: { a, p, q },
    nature,
  };
}

export interface LineQuadraticIntersection {
  discriminant: number;
  relationship: 'two intersection points (secant)' | 'one point of contact (tangent)' | 'no intersection';
  points: { x: number; y: number }[];
}

export function lineQuadraticIntersection(
  a: number,
  b: number,
  c: number,
  m: number,
  k: number
): LineQuadraticIntersection {
  // ax^2 + bx + c = mx + k  =>  ax^2 + (b - m)x + (c - k) = 0
  const B = b - m;
  const C = c - k;
  const sol = solveQuadratic(a, B, C);

  let relationship: 'two intersection points (secant)' | 'one point of contact (tangent)' | 'no intersection';
  if (sol.rootCount === 2) {
    relationship = 'two intersection points (secant)';
  } else if (sol.rootCount === 1) {
    relationship = 'one point of contact (tangent)';
  } else {
    relationship = 'no intersection';
  }

  const points = sol.roots.map((x) => ({
    x,
    y: m * x + k,
  }));

  return {
    discriminant: sol.discriminant,
    relationship,
    points,
  };
}

export function formatQuadraticTeX(a: number, b: number, c: number): string {
  const parts: string[] = [];

  // x^2 term
  if (a === 1) parts.push('x^2');
  else if (a === -1) parts.push('-x^2');
  else parts.push(`${a}x^2`);

  // x term
  if (b !== 0) {
    const sign = b > 0 ? (parts.length > 0 ? '+ ' : '') : '- ';
    const absB = Math.abs(b);
    const term = absB === 1 ? 'x' : `${absB}x`;
    parts.push(`${sign}${term}`);
  }

  // constant term
  if (c !== 0 || parts.length === 0) {
    const sign = c > 0 ? (parts.length > 0 ? '+ ' : '') : '- ';
    const absC = Math.abs(c);
    parts.push(`${sign}${absC}`);
  }

  return parts.join(' ');
}
