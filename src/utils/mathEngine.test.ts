import test from 'node:test';
import assert from 'node:assert/strict';
import { solveQuadratic, lineQuadraticIntersection, formatQuadraticTeX } from './mathEngine';

test('solveQuadratic calculates roots and discriminant correctly for 2 roots', () => {
  // x^2 - 5x + 6 = 0 -> roots 2 and 3
  const res = solveQuadratic(1, -5, 6);
  assert.equal(res.discriminant, 1);
  assert.equal(res.rootCount, 2);
  assert.deepEqual(res.roots, [2, 3]);
  assert.equal(res.vertex.x, 2.5);
  assert.equal(res.vertex.y, -0.25);
  assert.equal(res.nature, 'two distinct real roots');
});

test('solveQuadratic calculates repeated root correctly', () => {
  // x^2 - 6x + 9 = 0 -> root 3 (repeated)
  const res = solveQuadratic(1, -6, 9);
  assert.equal(res.discriminant, 0);
  assert.equal(res.rootCount, 1);
  assert.equal(res.roots[0], 3);
  assert.equal(res.nature, 'one repeated real root');
});

test('solveQuadratic handles negative discriminant', () => {
  // x^2 + 2x + 5 = 0 -> D = 4 - 20 = -16
  const res = solveQuadratic(1, 2, 5);
  assert.equal(res.discriminant, -16);
  assert.equal(res.rootCount, 0);
  assert.equal(res.nature, 'no real roots');
});

test('completing the square parameters are accurate', () => {
  // 2x^2 + 8x + 3 = 2(x + 2)^2 - 5
  const res = solveQuadratic(2, 8, 3);
  assert.equal(res.completedSquare.a, 2);
  assert.equal(res.completedSquare.p, 2);
  assert.equal(res.completedSquare.q, -5);
});

test('lineQuadraticIntersection detects tangency and secant lines', () => {
  // Parabola y = x^2, Line y = 2x - 1 (tangent at x = 1)
  const tangent = lineQuadraticIntersection(1, 0, 0, 2, -1);
  assert.equal(tangent.discriminant, 0);
  assert.equal(tangent.relationship, 'one point of contact (tangent)');
  assert.equal(tangent.points.length, 1);
  assert.equal(tangent.points[0].x, 1);
  assert.equal(tangent.points[0].y, 1);

  // Parabola y = x^2, Line y = x + 2 (secant at x = -1, 2)
  const secant = lineQuadraticIntersection(1, 0, 0, 1, 2);
  assert.equal(secant.discriminant, 9);
  assert.equal(secant.relationship, 'two intersection points (secant)');
  assert.equal(secant.points.length, 2);
});

test('formatQuadraticTeX produces clean standard LaTeX strings', () => {
  assert.equal(formatQuadraticTeX(1, -5, 6), 'x^2 - 5x + 6');
  assert.equal(formatQuadraticTeX(-1, 4, -3), '-x^2 + 4x - 3');
  assert.equal(formatQuadraticTeX(2, 0, -8), '2x^2 - 8');
});
