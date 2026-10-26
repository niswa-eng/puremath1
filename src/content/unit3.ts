import { Unit } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 3: Coordinate Geometry
 * ============================================================================
 */

export const unit3: Unit = {
  id: 'unit_3',
  number: 3,
  title: 'Coordinate geometry',
  learningObjectives: [
    '1.3.1: find the length of a line segment and the coordinates of the midpoint of a line segment from the coordinates of its endpoints',
    '1.3.2: understand the relationship between the gradients of parallel and perpendicular lines',
    '1.3.3: find the equation of a straight line given sufficient information (e.g. the coordinates of two points on the line, or one point on the line and its gradient)',
    '1.3.4: find the equation of a circle given sufficient information and understand the relationship between the equation of a circle and its geometrical properties',
    '1.3.5: find the coordinates of the points of intersection of a straight line with a circle and determine whether a given line intersects a given circle',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 3.1 Length of a line segment and midpoint
    // ------------------------------------------------------------------------
    {
      id: 'sub_3_1',
      number: '3.1',
      title: 'Length of a line segment and midpoint',
      type: 'lesson',
      steps: [
        {
          id: '3_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Pythagoras and Averages',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Walking Across a City Grid',
              content:
                'Imagine two street corners in a grid system $(x_1, y_1)$ and $(x_2, y_2)$. The direct distance between them is the hypotenuse of a right-angled triangle whose horizontal leg is the difference in $x$ and vertical leg is the difference in $y$. The midpoint is simply the mathematical average of the two street numbers and two avenues!',
            },
            {
              type: 'formula_card',
              title: 'Distance and Midpoint Formulas',
              math: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \\quad M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)',
              content: 'Always keep distances in exact simplified surd form unless decimal approximation is requested.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Line Segment',
                  definition: 'A straight line path connecting two distinct endpoints.',
                },
                {
                  term: 'Perpendicular Bisector',
                  definition: 'The line that passes through the midpoint of a segment at a 90° right angle.',
                },
              ],
            },
          ],
        },
        {
          id: '3_1_s2',
          stepNumber: 2,
          title: 'Worked Example: Distance and Midpoint',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the exact length and midpoint of the segment joining $A(-3, 5)$ and $B(5, -1)$',
              content: 'Exam-style step-by-step layout:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Identify the coordinates: $x_1 = -3, y_1 = 5, x_2 = 5, y_2 = -1$.',
                  math: 'x_2 - x_1 = 5 - (-3) = 8, \\quad y_2 - y_1 = -1 - 5 = -6',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute into distance formula.',
                  math: 'AB = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10',
                },
                {
                  stepNumber: 3,
                  explanation: 'Calculate the midpoint coordinates.',
                  math: 'M = \\left(\\frac{-3 + 5}{2}, \\frac{5 + (-1)}{2}\\right) = \\left(\\frac{2}{2}, \\frac{4}{2}\\right) = (1, 2)',
                },
              ],
            },
          ],
        },
        {
          id: '3_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Subtracting coordinates when finding the midpoint',
              content:
                'Students frequently confuse the minus sign in the distance formula with the midpoint formula, writing $\\frac{x_2 - x_1}{2}$. The midpoint is an AVERAGE, so you must ADD coordinates: $\\frac{x_1 + x_2}{2}$.',
            },
            {
              type: 'warning',
              title: 'Negative signs inside squares',
              content:
                'Writing $(-6)^2 = -36$. Remember that any real difference squared is strictly positive: $(-6)^2 = +36$.',
            },
          ],
        },
        {
          id: '3_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Calculate lengths and midpoints of segments.',
            },
          ],
          questions: [
            {
              id: '3_1_q1',
              number: 1,
              question: 'Find the exact length of the line segment joining $(1, 4)$ and $(4, 8)$.',
              marks: 2,
              solution: '$d = \\sqrt{(4 - 1)^2 + (8 - 4)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
              markingScheme: ['M1: $\\sqrt{3^2 + 4^2}$', 'A1: Length $= 5$'],
            },
            {
              id: '3_1_q2',
              number: 2,
              question: 'Find the midpoint of the line segment joining $(-4, 7)$ and $(6, -3)$.',
              marks: 2,
              solution: '$M = \\left(\\frac{-4 + 6}{2}, \\frac{7 + (-3)}{2}\\right) = \\left(\\frac{2}{2}, \\frac{4}{2}\\right) = (1, 2)$.',
              markingScheme: ['M1: $\\left(\\frac{-4 + 6}{2}, \\frac{7 - 3}{2}\\right)$', 'A1: Midpoint $(1, 2)$'],
            },
            {
              id: '3_1_q3',
              number: 3,
              question: 'The midpoint of the line segment joining $A(2, p)$ and $B(q, -5)$ is $(5, 1)$. Find the values of $p$ and $q$.',
              marks: 2,
              solution: '$\\frac{2 + q}{2} = 5 \\implies 2 + q = 10 \\implies q = 8$.\n$\\frac{p + (-5)}{2} = 1 \\implies p - 5 = 2 \\implies p = 7$.',
              markingScheme: ['B1: $q = 8$', 'B1: $p = 7$'],
            },
          ],
        },
        {
          id: '3_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Geometric classification of triangles and quadrilaterals.',
            },
          ],
          questions: [
            {
              id: '3_1_q4',
              number: 1,
              question: 'The vertices of a triangle are $P(1, 2)$, $Q(4, 6)$, and $R(-3, 5)$. Show that triangle $PQR$ is isosceles.',
              marks: 3,
              solution: '$PQ = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.\n$PR = \\sqrt{(-3 - 1)^2 + (5 - 2)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\n$QR = \\sqrt{(-3 - 4)^2 + (5 - 6)^2} = \\sqrt{49 + 1} = \\sqrt{50} = 5\\sqrt{2}$.\nSince $PQ = PR = 5$, two sides are equal in length; hence triangle $PQR$ is isosceles.',
              markingScheme: ['M1: Calculate length $PQ = 5$', 'M1: Calculate length $PR = 5$', 'A1: State $PQ = PR = 5$ hence isosceles'],
            },
            {
              id: '3_1_q5',
              number: 2,
              question: 'The points $A(-1, 3)$ and $B(5, k)$ are a distance of 10 units apart. Find the two possible values of $k$.',
              marks: 3,
              solution: '$AB^2 = (5 - (-1))^2 + (k - 3)^2 = 10^2 \\implies 6^2 + (k - 3)^2 = 100 \\implies 36 + (k - 3)^2 = 100 \\implies (k - 3)^2 = 64 \\implies k - 3 = \\pm 8$. Thus $k = 3 + 8 = 11$ or $k = 3 - 8 = -5$.',
              markingScheme: ['M1: Set $6^2 + (k - 3)^2 = 100$', 'M1: Solve $(k - 3)^2 = 64$', 'A1: $k = 11$ and $k = -5$'],
            },
            {
              id: '3_1_q6',
              number: 3,
              question: 'Three vertices of a parallelogram $ABCD$ are $A(1, 2)$, $B(5, 3)$, and $C(7, 8)$. Use the property that the diagonals bisect each other to find the coordinates of $D$.',
              marks: 3,
              solution: 'Midpoint of diagonal $AC = \\left(\\frac{1 + 7}{2}, \\frac{2 + 8}{2}\\right) = (4, 5)$. The diagonal $BD$ must share the same midpoint: $\\left(\\frac{5 + x_D}{2}, \\frac{3 + y_D}{2}\\right) = (4, 5) \\implies 5 + x_D = 8 \\implies x_D = 3$; $3 + y_D = 10 \\implies y_D = 7$. Coordinates of $D$ are $(3, 7)$.',
              markingScheme: ['M1: Find midpoint of $AC = (4, 5)$', 'M1: Equate to midpoint of $BD$', 'A1: $D(3, 7)$'],
            },
          ],
        },
        {
          id: '3_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on distance, midpoints, and collinearity.',
            },
          ],
          questions: [
            {
              id: '3_1_q7',
              number: 1,
              question: 'The point $P(x, y)$ is equidistant from $A(1, 2)$ and $B(7, 4)$. Show that the coordinates of $P$ satisfy the linear equation $3x + y = 15$. [4 marks]',
              marks: 4,
              solution: '$PA^2 = PB^2 \\implies (x - 1)^2 + (y - 2)^2 = (x - 7)^2 + (y - 4)^2 \\implies x^2 - 2x + 1 + y^2 - 4y + 4 = x^2 - 14x + 49 + y^2 - 8y + 16 \\implies -2x - 4y + 5 = -14x - 8y + 65 \\implies 12x + 4y = 60$. Divide by 4: $3x + y = 15$. (This is the equation of the perpendicular bisector of $AB$).',
              markingScheme: ['M1: Set up $(x - 1)^2 + (y - 2)^2 = (x - 7)^2 + (y - 4)^2$', 'M1: Expand both sides correctly', 'M1: Collect terms to $12x + 4y = 60$', 'A1: Conclude $3x + y = 15$'],
            },
            {
              id: '3_1_q8',
              number: 2,
              question: 'A line segment has endpoints $A(k, 2)$ and $B(3, k + 1)$. Given that the length of $AB$ is $\\sqrt{26}$, find the possible values of the constant $k$. [4 marks]',
              marks: 4,
              solution: '$AB^2 = (3 - k)^2 + ((k + 1) - 2)^2 = 26 \\implies (3 - k)^2 + (k - 1)^2 = 26 \\implies 9 - 6k + k^2 + k^2 - 2k + 1 = 26 \\implies 2k^2 - 8k + 10 = 26 \\implies 2k^2 - 8k - 16 = 0 \\implies k^2 - 4k - 8 = 0$. $k = \\frac{4 \\pm \\sqrt{16 - 4(1)(-8)}}{2} = \\frac{4 \\pm \\sqrt{48}}{2} = \\frac{4 \\pm 4\\sqrt{3}}{2} = 2 \\pm 2\\sqrt{3}$.',
              markingScheme: ['M1: Set $(3 - k)^2 + (k - 1)^2 = 26$', 'M1: Expand to $2k^2 - 8k - 16 = 0$', 'M1: Solve quadratic $k^2 - 4k - 8 = 0$', 'A1: Exact values $k = 2 \\pm 2\\sqrt{3}$'],
            },
            {
              id: '3_1_q9',
              number: 3,
              question: 'The point $C(2, 5)$ lies on the line segment joining $A(-1, 2)$ and $B(5, 8)$. Show that $C$ is the midpoint of $AB$, and find the coordinates of point $D$ on the line produced such that $B$ is the midpoint of $AD$. [4 marks]',
              marks: 4,
              solution: 'Midpoint of $AB = \\left(\\frac{-1 + 5}{2}, \\frac{2 + 8}{2}\\right) = \\left(\\frac{4}{2}, \\frac{10}{2}\\right) = (2, 5) = C$. Hence $C$ is the midpoint of $AB$.\nFor $B(5, 8)$ to be the midpoint of $AD$: $\\left(\\frac{-1 + x_D}{2}, \\frac{2 + y_D}{2}\\right) = (5, 8) \\implies -1 + x_D = 10 \\implies x_D = 11$; $2 + y_D = 16 \\implies y_D = 14$. Point $D$ is $(11, 14)$.',
              markingScheme: ['B1: Show midpoint of $AB$ is $(2, 5)$', 'M1: Set $\\frac{-1 + x_D}{2} = 5$', 'M1: Set $\\frac{2 + y_D}{2} = 8$', 'A1: $D(11, 14)$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 3.2 Parallel and perpendicular lines
    // ------------------------------------------------------------------------
    {
      id: 'sub_3_2',
      number: '3.2',
      title: 'Parallel and perpendicular lines',
      type: 'lesson',
      steps: [
        {
          id: '3_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Gradient Relationships',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Ski Slope and Right Angle Turning',
              content:
                '• **Parallel lines**: Two skiers descending side by side with identical steepness never collide ($m_1 = m_2$).\n• **Perpendicular lines**: Making a sharp 90° turn rotates the slope vector $(1, m)$ into $(-m, 1)$, giving the negative reciprocal gradient: $m_2 = -\\frac{1}{m_1}$. Their product is always $m_1 m_2 = -1$!',
            },
            {
              type: 'formula_card',
              title: 'Gradient Rules',
              math: 'm = \\frac{y_2 - y_1}{x_2 - x_1}\\\\ \\text{Parallel: } m_1 = m_2\\\\ \\text{Perpendicular: } m_1 m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}',
              content: 'If a line has gradient $\\frac{a}{b}$, any perpendicular line has gradient $-\\frac{b}{a}$.',
            },
            {
              type: 'definition',
              title: 'Special Vertical / Horizontal Cases',
              items: [
                {
                  term: 'Horizontal Line (m = 0)',
                  definition: 'Equation $y = c$. Perpendicular to a vertical line ($x = k$) whose gradient is undefined.',
                },
              ],
            },
          ],
        },
        {
          id: '3_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Perpendicular Bisector',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the equation of the perpendicular bisector of the line segment joining $A(1, -2)$ and $B(7, 6)$',
              content: 'Standard Cambridge method:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the gradient of line segment $AB$.',
                  math: 'm_{AB} = \\frac{6 - (-2)}{7 - 1} = \\frac{8}{6} = \\frac{4}{3}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Find the perpendicular gradient using $m_1 m_2 = -1$.',
                  math: 'm_{\\perp} = -\\frac{1}{4/3} = -\\frac{3}{4}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Find the midpoint $M$ of $AB$.',
                  math: 'M = \\left(\\frac{1 + 7}{2}, \\frac{-2 + 6}{2}\\right) = (4, 2)',
                },
                {
                  stepNumber: 4,
                  explanation: 'Use point-slope form $y - y_1 = m(x - x_1)$ through $M(4, 2)$.',
                  math: 'y - 2 = -\\frac{3}{4}(x - 4) \\implies 4(y - 2) = -3(x - 4) \\implies 4y - 8 = -3x + 12 \\implies 3x + 4y = 20',
                },
              ],
            },
          ],
        },
        {
          id: '3_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Using point A or B instead of the midpoint',
              content:
                'In perpendicular bisector questions, students often calculate the perpendicular gradient correctly but then substitute point $A$ or point $B$. A bisector MUST pass through the MIDPOINT!',
            },
            {
              type: 'warning',
              title: 'Forgetting the negative sign in the perpendicular gradient',
              content:
                'Writing $m_{\\perp} = \\frac{3}{4}$ instead of $-\\frac{3}{4}$. Remember: perpendicular lines slant in opposite directions, so their signs must be opposite.',
            },
          ],
        },
        {
          id: '3_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Identify parallel and perpendicular gradients.',
            },
          ],
          questions: [
            {
              id: '3_2_q1',
              number: 1,
              question: 'Find the gradient of a line perpendicular to $2x + 5y = 10$.',
              marks: 2,
              solution: '$5y = -2x + 10 \\implies y = -\\frac{2}{5}x + 2$. Line gradient is $m = -\\frac{2}{5}$. Perpendicular gradient is $m_\\perp = +\\frac{5}{2} = 2.5$.',
              markingScheme: ['M1: Find slope $m = -2/5$', 'A1: Perpendicular slope $5/2$'],
            },
            {
              id: '3_2_q2',
              number: 2,
              question: 'Line $L_1$ passes through $(1, 3)$ and $(4, -3)$. Line $L_2$ passes through $(0, 2)$ and $(6, k)$. Given that $L_1$ and $L_2$ are parallel, find $k$.',
              marks: 2,
              solution: 'Gradient $m_1 = \\frac{-3 - 3}{4 - 1} = \\frac{-6}{3} = -2$. For parallel, $m_2 = m_1 = -2 \\implies \\frac{k - 2}{6 - 0} = -2 \\implies k - 2 = -12 \\implies k = -10$.',
              markingScheme: ['M1: $m_1 = -2$', 'A1: $k = -10$'],
            },
            {
              id: '3_2_q3',
              number: 3,
              question: 'Show that the line joining $A(-2, 1)$ and $B(4, 3)$ is perpendicular to the line joining $C(2, 5)$ and $D(1, 8)$.',
              marks: 2,
              solution: '$m_{AB} = \\frac{3 - 1}{4 - (-2)} = \\frac{2}{6} = \\frac{1}{3}$. $m_{CD} = \\frac{8 - 5}{1 - 2} = \\frac{3}{-1} = -3$. Product: $m_{AB} \\times m_{CD} = \\frac{1}{3} \\times (-3) = -1$. Since product is $-1$, the lines are perpendicular.',
              markingScheme: ['M1: Find $m_{AB} = 1/3$ and $m_{CD} = -3$', 'A1: Conclude $m_1 m_2 = -1$ hence perpendicular'],
            },
          ],
        },
        {
          id: '3_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Perpendicular bisectors and altitudes in geometry.',
            },
          ],
          questions: [
            {
              id: '3_2_q4',
              number: 1,
              question: 'Find the equation of the line passing through $(3, -1)$ that is parallel to $4x - 2y = 7$.',
              marks: 2,
              solution: '$2y = 4x - 7 \\implies y = 2x - 3.5$, so $m = 2$. Parallel line: $y - (-1) = 2(x - 3) \\implies y + 1 = 2x - 6 \\implies y = 2x - 7$.',
              markingScheme: ['M1: Identify gradient $m = 2$', 'A1: $y = 2x - 7$'],
            },
            {
              id: '3_2_q5',
              number: 2,
              question: 'Find the equation of the perpendicular bisector of the line segment joining $P(-2, 4)$ and $Q(6, 0)$. Express your answer in the form $ax + by + c = 0$.',
              marks: 4,
              solution: 'Midpoint $M = \\left(\\frac{-2 + 6}{2}, \\frac{4 + 0}{2}\\right) = (2, 2)$. Gradient $m_{PQ} = \\frac{0 - 4}{6 - (-2)} = \\frac{-4}{8} = -\\frac{1}{2}$. Perpendicular gradient $m_\\perp = +2$. Equation: $y - 2 = 2(x - 2) \\implies y - 2 = 2x - 4 \\implies 2x - y - 2 = 0$.',
              markingScheme: ['B1: Midpoint $(2, 2)$', 'M1: Gradient $m = -1/2$', 'M1: Perpendicular gradient 2', 'A1: $2x - y - 2 = 0$ (or $y = 2x - 2$)'],
            },
            {
              id: '3_2_q6',
              number: 3,
              question: 'In triangle $ABC$, the vertices are $A(0, 0)$, $B(4, 8)$, and $C(10, 0)$. Find the equation of the altitude from $B$ to side $AC$.',
              marks: 3,
              solution: 'Side $AC$ lies on the $x$-axis ($y = 0$, horizontal). The altitude from $B$ is perpendicular to $AC$, so it must be a vertical line passing through $B(4, 8)$. Therefore, the equation of the altitude is $x = 4$.',
              markingScheme: ['M1: Identify $AC$ has gradient 0', 'M1: Conclude altitude is vertical line through $B$', 'A1: $x = 4$'],
            },
          ],
        },
        {
          id: '3_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on perpendicular bisectors and rhombuses.',
            },
          ],
          questions: [
            {
              id: '3_2_q7',
              number: 1,
              question: 'The coordinates of $A$ and $B$ are $(1, 3)$ and $(5, 1)$ respectively. The perpendicular bisector of $AB$ intersects the $x$-axis at $C$. Find the coordinates of $C$. [5 marks]',
              marks: 5,
              solution: 'Midpoint $M = \\left(\\frac{1 + 5}{2}, \\frac{3 + 1}{2}\\right) = (3, 2)$.\nGradient $m_{AB} = \\frac{1 - 3}{5 - 1} = \\frac{-2}{4} = -\\frac{1}{2}$.\nPerpendicular gradient $m_\\perp = +2$.\nEquation of bisector: $y - 2 = 2(x - 3) \\implies y = 2x - 4$.\nIntersects the $x$-axis where $y = 0$: $0 = 2x - 4 \\implies 2x = 4 \\implies x = 2$.\nCoordinates of $C$ are $(2, 0)$.',
              markingScheme: ['B1: Midpoint $M(3, 2)$', 'M1: Gradient $m_{AB} = -0.5$', 'M1: Perpendicular bisector equation $y = 2x - 4$', 'M1: Set $y = 0$', 'A1: $C(2, 0)$'],
            },
            {
              id: '3_2_q8',
              number: 2,
              question: 'The line $L_1$ has equation $3x - 2y = 8$. The line $L_2$ is perpendicular to $L_1$ and passes through $(4, 1)$. Find the coordinates of the point of intersection of $L_1$ and $L_2$. [5 marks]',
              marks: 5,
              solution: 'Gradient of $L_1$: $2y = 3x - 8 \\implies y = \\frac{3}{2}x - 4$, so $m_1 = \\frac{3}{2}$.\nPerpendicular gradient $m_2 = -\\frac{2}{3}$.\nEquation of $L_2$: $y - 1 = -\\frac{2}{3}(x - 4) \\implies 3(y - 1) = -2(x - 4) \\implies 3y - 3 = -2x + 8 \\implies 2x + 3y = 11$.\nSolve simultaneously: $3x - 2y = 8$ (eq 1) and $2x + 3y = 11$ (eq 2).\nMultiply eq 1 by 3: $9x - 6y = 24$. Multiply eq 2 by 2: $4x + 6y = 22$.\nAdd: $13x = 46 \\implies x = \\frac{46}{13}$.\nSubstitute into eq 1: $3\\left(\\frac{46}{13}\\right) - 2y = 8 \\implies \\frac{138}{13} - 8 = 2y \\implies 2y = \\frac{34}{13} \\implies y = \\frac{17}{13}$.\nPoint is $\\left(\\frac{46}{13}, \\frac{17}{13}\\right)$.',
              markingScheme: ['M1: Perpendicular gradient $-2/3$', 'A1: Equation $2x + 3y = 11$', 'M1: Eliminate $y$ or $x$', 'A1: $x = 46/13$', 'A1: $y = 17/13$'],
            },
            {
              id: '3_2_q9',
              number: 3,
              question: 'Points $A(2, 1)$ and $C(6, 7)$ are opposite vertices of a rhombus $ABCD$. Show that the diagonal $BD$ has equation $2x + 3y = 20$. [4 marks]',
              marks: 4,
              solution: 'In any rhombus, the diagonals are perpendicular bisectors of each other. Hence the diagonal $BD$ is the perpendicular bisector of $AC$.\nMidpoint of $AC$: $M = \\left(\\frac{2 + 6}{2}, \\frac{1 + 7}{2}\\right) = (4, 4)$.\nGradient of $AC$: $m_{AC} = \\frac{7 - 1}{6 - 2} = \\frac{6}{4} = \\frac{3}{2}$.\nPerpendicular gradient for $BD$: $m_{BD} = -\\frac{2}{3}$.\nEquation of $BD$: $y - 4 = -\\frac{2}{3}(x - 4) \\implies 3(y - 4) = -2(x - 4) \\implies 3y - 12 = -2x + 8 \\implies 2x + 3y = 20$.',
              markingScheme: ['B1: State that diagonals of rhombus bisect at $90^\\circ$', 'M1: Midpoint $(4, 4)$', 'M1: Perpendicular gradient $-2/3$', 'A1: Conclude $2x + 3y = 20$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 3.3 Equations of straight lines
    // ------------------------------------------------------------------------
    {
      id: 'sub_3_3',
      number: '3.3',
      title: 'Equations of straight lines',
      type: 'lesson',
      steps: [
        {
          id: '3_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Linear Forms and Intercepts',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Constant Rate of Climb',
              content:
                'A straight line represents a constant rate of change. Every time you move 1 unit to the right ($+1$), the height changes by exactly $m$ units. Knowing just ONE anchor point $(x_1, y_1)$ and this slope $m$ fixes the entire infinite line uniquely.',
            },
            {
              type: 'formula_card',
              title: 'Forms of the Straight Line Equation',
              math: 'y - y_1 = m(x - x_1) \\quad \\text{(Point-Slope)}\\\\ y = mx + c \\quad \\text{(Slope-Intercept)}\\\\ ax + by + c = 0 \\quad \\text{(General Integer Form)}',
              content: 'Point-slope form $y - y_1 = m(x - x_1)$ is the fastest and least error-prone method in Cambridge examinations.',
            },
          ],
        },
        {
          id: '3_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Line Through Two Points',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the equation of the line passing through $(2, -3)$ and $(6, 5)$ in the form $ax + by + c = 0$',
              content: 'Demonstrating step-by-step exam working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Calculate the gradient $m$.',
                  math: 'm = \\frac{5 - (-3)}{6 - 2} = \\frac{8}{4} = 2',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute into point-slope form using $(2, -3)$.',
                  math: 'y - (-3) = 2(x - 2) \\implies y + 3 = 2x - 4',
                },
                {
                  stepNumber: 3,
                  explanation: 'Rearrange all terms to one side in integer form $ax + by + c = 0$.',
                  math: '2x - y - 7 = 0',
                },
              ],
            },
          ],
        },
        {
          id: '3_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Leaving fractional coefficients when integer form is requested',
              content:
                'Leaving an answer as $y = \\frac{2}{3}x - \\frac{5}{3}$ when the question specifies $ax + by + c = 0$ with $a, b, c \\in \\mathbb{Z}$. Always multiply through by the common denominator: $2x - 3y - 5 = 0$.',
            },
            {
              type: 'warning',
              title: 'Swapping delta y and delta x',
              content:
                'Writing $m = \\frac{x_2 - x_1}{y_2 - y_1}$. Gradient is ALWAYS "rise over run": $\\frac{\\Delta y}{\\Delta x}$.',
            },
          ],
        },
        {
          id: '3_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Form equations of straight lines in specified forms.',
            },
          ],
          questions: [
            {
              id: '3_3_q1',
              number: 1,
              question: 'Find the equation of the line with gradient $-3$ passing through $(2, 1)$.',
              marks: 2,
              solution: '$y - 1 = -3(x - 2) \\implies y - 1 = -3x + 6 \\implies y = -3x + 7$.',
              markingScheme: ['M1: Use $y - 1 = -3(x - 2)$', 'A1: $y = -3x + 7$'],
            },
            {
              id: '3_3_q2',
              number: 2,
              question: 'Find the equation of the line passing through $(3, 4)$ and $(-1, 2)$ in the form $y = mx + c$.',
              marks: 2,
              solution: '$m = \\frac{2 - 4}{-1 - 3} = \\frac{-2}{-4} = \\frac{1}{2}$. $y - 4 = \\frac{1}{2}(x - 3) \\implies y = \\frac{1}{2}x - \\frac{3}{2} + 4 = \\frac{1}{2}x + \\frac{5}{2}$.',
              markingScheme: ['M1: $m = 1/2$', 'A1: $y = \\frac{1}{2}x + \\frac{5}{2}$'],
            },
            {
              id: '3_3_q3',
              number: 3,
              question: 'Find the coordinates of the intercepts of the line $3x - 4y = 24$ with the coordinate axes.',
              marks: 2,
              solution: '$x$-intercept (set $y = 0$): $3x = 24 \\implies x = 8$, so $(8, 0)$.\n$y$-intercept (set $x = 0$): $-4y = 24 \\implies y = -6$, so $(0, -6)$.',
              markingScheme: ['B1: $(8, 0)$', 'B1: $(0, -6)$'],
            },
          ],
        },
        {
          id: '3_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Lines forming triangles and geometric areas.',
            },
          ],
          questions: [
            {
              id: '3_3_q4',
              number: 1,
              question: 'The line $2x + 3y = 12$ intersects the $x$-axis at $A$ and the $y$-axis at $B$. Find the area of triangle $OAB$, where $O$ is the origin.',
              marks: 3,
              solution: 'At $A$ ($y = 0$): $2x = 12 \\implies x = 6$, so $A(6, 0)$. At $B$ ($x = 0$): $3y = 12 \\implies y = 4$, so $B(0, 4)$. The triangle is right-angled at $O$ with base 6 and height 4. $\\text{Area} = \\frac{1}{2} \\times 6 \\times 4 = 12$.',
              markingScheme: ['M1: Find intercepts $A(6, 0)$ and $B(0, 4)$', 'M1: $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$', 'A1: Area $= 12$'],
            },
            {
              id: '3_3_q5',
              number: 2,
              question: 'Find the equation of the line passing through the intersection of $x + y = 5$ and $2x - y = 4$ that is perpendicular to $3x + y = 2$.',
              marks: 4,
              solution: 'Add the two equations: $3x = 9 \\implies x = 3$. Substitute into $x + y = 5 \\implies y = 2$. Intersection point is $(3, 2)$. The given line has gradient $-3$, so the perpendicular gradient is $m_\\perp = +\\frac{1}{3}$. Equation: $y - 2 = \\frac{1}{3}(x - 3) \\implies 3y - 6 = x - 3 \\implies x - 3y + 3 = 0$.',
              markingScheme: ['M1: Solve for intersection $(3, 2)$', 'M1: Gradient $m_\\perp = 1/3$', 'A1: $x - 3y + 3 = 0$ (or $y = \\frac{1}{3}x + 1$)'],
            },
            {
              id: '3_3_q6',
              number: 3,
              question: 'A line has gradient $m$ and passes through $(1, 4)$. Given that the area of the triangle formed by the line and the positive coordinate axes is 9, find the possible values of $m$.',
              marks: 4,
              solution: 'Equation: $y - 4 = m(x - 1) \\implies y = mx + (4 - m)$. $y$-intercept is $(0, 4 - m)$. $x$-intercept (set $y = 0$): $mx + 4 - m = 0 \\implies x = \\frac{m - 4}{m} = 1 - \\frac{4}{m}$. Area $= \\frac{1}{2}(1 - \\frac{4}{m})(4 - m) = 9 \\implies \\frac{(4 - m)(- (4 - m))}{2m} = 9 \\implies -\\frac{(4 - m)^2}{2m} = 9 \\implies (4 - m)^2 = -18m \\implies 16 - 8m + m^2 = -18m \\implies m^2 + 10m + 16 = 0 \\implies (m + 2)(m + 8) = 0 \\implies m = -2$ or $m = -8$.',
              markingScheme: ['M1: Intercepts in terms of $m$: $(0, 4-m)$ and $(\\frac{m-4}{m}, 0)$', 'M1: Set area $= 9 \\implies m^2 + 10m + 16 = 0$', 'A1: $m = -2$', 'A1: $m = -8$'],
            },
          ],
        },
        {
          id: '3_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on straight line equations and geometric proofs.',
            },
          ],
          questions: [
            {
              id: '3_3_q7',
              number: 1,
              question: 'The line $L$ passes through the points $A(-2, 7)$ and $B(6, 3)$. (i) Find the equation of $L$ in the form $ax + by = c$, where $a, b, c$ are integers. [3 marks]\n(ii) Find the length of the line segment $AB$. [2 marks]',
              marks: 5,
              solution: '(i) $m = \\frac{3 - 7}{6 - (-2)} = \\frac{-4}{8} = -\\frac{1}{2}$.\n$y - 3 = -\\frac{1}{2}(x - 6) \\implies 2(y - 3) = -(x - 6) \\implies 2y - 6 = -x + 6 \\implies x + 2y = 12$.\n(ii) $AB = \\sqrt{(6 - (-2))^2 + (3 - 7)^2} = \\sqrt{8^2 + (-4)^2} = \\sqrt{64 + 16} = \\sqrt{80} = 4\\sqrt{5}$.',
              markingScheme: ['M1: Gradient $m = -1/2$', 'A1: $x + 2y = 12$', 'M1: $\\sqrt{8^2 + 4^2}$', 'A1: $4\\sqrt{5}$ (or $\\sqrt{80}$)'],
            },
            {
              id: '3_3_q8',
              number: 2,
              question: 'The points $A(1, 2)$, $B(5, 4)$, and $C(3, 8)$ form a triangle. Find the equation of the line passing through $B$ parallel to side $AC$. [3 marks]',
              marks: 3,
              solution: 'Gradient of $AC$: $m_{AC} = \\frac{8 - 2}{3 - 1} = \\frac{6}{2} = 3$. The line parallel to $AC$ through $B(5, 4)$ has gradient 3. Equation: $y - 4 = 3(x - 5) \\implies y - 4 = 3x - 15 \\implies y = 3x - 11$.',
              markingScheme: ['M1: Gradient $m_{AC} = 3$', 'M1: Use $y - 4 = 3(x - 5)$', 'A1: $y = 3x - 11$'],
            },
            {
              id: '3_3_q9',
              number: 3,
              question: 'A straight line has equation $y = mx + c$. Given that the line passes through $(2, 3)$ and that the product of its $x$- and $y$-intercepts is $-18$, find the possible values of $m$. [5 marks]',
              marks: 5,
              solution: 'Since it passes through $(2, 3)$: $3 = 2m + c \\implies c = 3 - 2m$.\n$y$-intercept is $c = 3 - 2m$.\n$x$-intercept (set $y = 0$): $mx + c = 0 \\implies x = -\\frac{c}{m} = -\\frac{3 - 2m}{m} = \\frac{2m - 3}{m}$.\nProduct of intercepts $= c \\times x_{\\text{int}} = (3 - 2m)\\left(\\frac{2m - 3}{m}\\right) = -\\frac{(2m - 3)^2}{m} = -18$.\nSo $\\frac{(2m - 3)^2}{m} = 18 \\implies 4m^2 - 12m + 9 = 18m \\implies 4m^2 - 30m + 9 = 0$.\n$m = \\frac{30 \\pm \\sqrt{900 - 4(4)(9)}}{8} = \\frac{30 \\pm \\sqrt{900 - 144}}{8} = \\frac{30 \\pm \\sqrt{756}}{8} = \\frac{30 \\pm 6\\sqrt{21}}{8} = \\frac{15 \\pm 3\\sqrt{21}}{4}$.',
              markingScheme: ['M1: Express $c = 3 - 2m$', 'M1: Express $x$-intercept as $\\frac{2m-3}{m}$', 'M1: Form quadratic $4m^2 - 30m + 9 = 0$', 'A1: Solve using formula', 'A1: $m = \\frac{15 \\pm 3\\sqrt{21}}{4}$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 3.4 The equation of a circle
    // ------------------------------------------------------------------------
    {
      id: 'sub_3_4',
      number: '3.4',
      title: 'The equation of a circle',
      type: 'lesson',
      steps: [
        {
          id: '3_4_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Pythagoras Centered Anywhere',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'The Compass and String Analogy',
              content:
                'Fix a pin at center $(a, b)$ and stretch a string of length $r$. Every point $(x, y)$ traced by the pencil has a distance to $(a, b)$ equal to $r$. By Pythagoras\' theorem, the horizontal distance squared plus vertical distance squared equals $r^2$!',
            },
            {
              type: 'formula_card',
              title: 'Standard Form of Circle Equation',
              math: '(x - a)^2 + (y - b)^2 = r^2',
              content: 'Center is $(a, b)$ and radius is $r = \\sqrt{r^2}$. Notice the signs inside the brackets are inverted: $-a$ means center $x = +a$.',
            },
            {
              type: 'definition',
              title: 'Expanded General Form',
              items: [
                {
                  term: 'x² + y² + 2gx + 2fy + c = 0',
                  definition: 'Center is $(-g, -f)$ and radius is $r = \\sqrt{g^2 + f^2 - c}$. Found by completing the square on both $x$ and $y$.',
                },
              ],
            },
          ],
        },
        {
          id: '3_4_s2',
          stepNumber: 2,
          title: 'Worked Example: Completing the Square to Find Center & Radius',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the center and radius of the circle $x^2 + y^2 - 6x + 8y - 11 = 0$',
              content: 'Demonstrating complete exam working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Group the $x$ terms and $y$ terms together.',
                  math: '(x^2 - 6x) + (y^2 + 8y) = 11',
                },
                {
                  stepNumber: 2,
                  explanation: 'Complete the square for $x$: $(x - 3)^2 - 9$.',
                  math: 'x^2 - 6x = (x - 3)^2 - 9',
                },
                {
                  stepNumber: 3,
                  explanation: 'Complete the square for $y$: $(y + 4)^2 - 16$.',
                  math: 'y^2 + 8y = (y + 4)^2 - 16',
                },
                {
                  stepNumber: 4,
                  explanation: 'Collect constants on the RHS and identify center and radius.',
                  math: '(x - 3)^2 - 9 + (y + 4)^2 - 16 = 11 \\implies (x - 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36',
                },
                {
                  stepNumber: 5,
                  explanation: 'State center and radius.',
                  math: '\\text{Center is } (3, -4), \\quad \\text{Radius } r = \\sqrt{36} = 6.',
                },
              ],
            },
          ],
        },
        {
          id: '3_4_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Sign errors in center coordinates',
              content:
                'For $(x - 5)^2 + (y + 2)^2 = 49$, writing center $(-5, 2)$ instead of $(5, -2)$. Always remember: $x - a = 0 \\implies x = a$ and $y - b = 0 \\implies y = b$.',
            },
            {
              type: 'warning',
              title: 'Forgetting to take the square root of the RHS',
              content:
                'Stating the radius is 36 instead of $\\sqrt{36} = 6$. The equation has $r^2$ on the RHS, not $r$.',
            },
          ],
        },
        {
          id: '3_4_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Identify center and radius and write circle equations.',
            },
          ],
          questions: [
            {
              id: '3_4_q1',
              number: 1,
              question: 'Write down the equation of the circle with center $(-2, 5)$ and radius 4.',
              marks: 2,
              solution: '$(x - (-2))^2 + (y - 5)^2 = 4^2 \\implies (x + 2)^2 + (y - 5)^2 = 16$.',
              markingScheme: ['M1: $(x + 2)^2 + (y - 5)^2$', 'A1: $= 16$'],
            },
            {
              id: '3_4_q2',
              number: 2,
              question: 'Find the center and radius of the circle $(x - 7)^2 + y^2 = 50$.',
              marks: 2,
              solution: 'Center is $(7, 0)$. Radius is $r = \\sqrt{50} = 5\\sqrt{2}$.',
              markingScheme: ['B1: Center $(7, 0)$', 'B1: Radius $5\\sqrt{2}$ (or $\\sqrt{50}$)'],
            },
            {
              id: '3_4_q3',
              number: 3,
              question: 'Find the center and radius of $x^2 + y^2 - 10x - 4y + 20 = 0$.',
              marks: 3,
              solution: '$(x - 5)^2 - 25 + (y - 2)^2 - 4 + 20 = 0 \\implies (x - 5)^2 + (y - 2)^2 = 9$. Center is $(5, 2)$, radius is $\\sqrt{9} = 3$.',
              markingScheme: ['M1: Complete squares $(x - 5)^2 + (y - 2)^2 = 9$', 'A1: Center $(5, 2)$', 'A1: Radius 3'],
            },
          ],
        },
        {
          id: '3_4_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Circles defined by diameters and geometric tangents.',
            },
          ],
          questions: [
            {
              id: '3_4_q4',
              number: 1,
              question: 'The points $A(-1, 4)$ and $B(5, -4)$ are the endpoints of a diameter of a circle. Find the equation of the circle.',
              marks: 4,
              solution: 'Center is the midpoint of diameter $AB$: $C = \\left(\\frac{-1 + 5}{2}, \\frac{4 + (-4)}{2}\\right) = (2, 0)$. Radius squared $r^2 = (2 - (-1))^2 + (0 - 4)^2 = 3^2 + (-4)^2 = 9 + 16 = 25$. Equation: $(x - 2)^2 + y^2 = 25$.',
              markingScheme: ['M1: Midpoint $C(2, 0)$', 'M1: Radius squared $r^2 = 25$', 'A1: $(x - 2)^2 + y^2 = 25$'],
            },
            {
              id: '3_4_q5',
              number: 2,
              question: 'A circle with center $(3, -2)$ touches the $x$-axis. Write down the equation of the circle.',
              marks: 2,
              solution: 'Distance from center $(3, -2)$ to the $x$-axis ($y = 0$) is $|-2| = 2$. Therefore the radius is $r = 2$. Equation is $(x - 3)^2 + (y + 2)^2 = 4$.',
              markingScheme: ['B1: Radius $r = 2$', 'A1: $(x - 3)^2 + (y + 2)^2 = 4$'],
            },
            {
              id: '3_4_q6',
              number: 3,
              question: 'Determine whether the point $P(6, 5)$ lies inside, on, or outside the circle $(x - 2)^2 + (y - 1)^2 = 30$.',
              marks: 2,
              solution: 'Substitute $(6, 5)$ into the LHS: $(6 - 2)^2 + (5 - 1)^2 = 4^2 + 4^2 = 16 + 16 = 32$. Since $32 > 30$, the point lies OUTSIDE the circle.',
              markingScheme: ['M1: Compute distance squared $= 32$', 'A1: State $32 > 30$, hence outside'],
            },
          ],
        },
        {
          id: '3_4_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on circle equations and geometric properties.',
            },
          ],
          questions: [
            {
              id: '3_4_q7',
              number: 1,
              question: 'A circle passes through the points $A(0, 0)$, $B(0, 6)$, and $C(8, 0)$. (i) Explain why the line segment $BC$ is a diameter of the circle. [1 mark]\n(ii) Find the equation of the circle. [4 marks]',
              marks: 5,
              solution: '(i) Angle $\\angle BAC = 90^\\circ$ because the axes are perpendicular. By the converse of the angle in a semicircle theorem, $BC$ must be a diameter.\n(ii) Center is midpoint of $BC$: $M = \\left(\\frac{0 + 8}{2}, \\frac{6 + 0}{2}\\right) = (4, 3)$. Radius squared $r^2 = (4 - 0)^2 + (3 - 0)^2 = 16 + 9 = 25$. Equation: $(x - 4)^2 + (y - 3)^2 = 25$ (or $x^2 + y^2 - 8x - 6y = 0$).',
              markingScheme: ['B1: Angle in a semicircle is $90^\\circ$', 'M1: Midpoint of $BC = (4, 3)$', 'M1: Radius squared $= 25$', 'A1: $(x - 4)^2 + (y - 3)^2 = 25$'],
            },
            {
              id: '3_4_q8',
              number: 2,
              question: 'Find the equation of the tangent to the circle $x^2 + y^2 - 4x + 6y - 12 = 0$ at the point $P(5, 1)$. [5 marks]',
              marks: 5,
              solution: 'Complete the square: $(x - 2)^2 - 4 + (y + 3)^2 - 9 - 12 = 0 \\implies (x - 2)^2 + (y + 3)^2 = 25$. Center is $C(2, -3)$.\nRadius $CP$ gradient: $m_{\\text{radius}} = \\frac{1 - (-3)}{5 - 2} = \\frac{4}{3}$.\nThe tangent is perpendicular to the radius at the point of contact, so $m_{\\text{tangent}} = -\\frac{3}{4}$.\nEquation of tangent through $P(5, 1)$: $y - 1 = -\\frac{3}{4}(x - 5) \\implies 4(y - 1) = -3(x - 5) \\implies 4y - 4 = -3x + 15 \\implies 3x + 4y = 19$.',
              markingScheme: ['B1: Center $(2, -3)$', 'M1: Gradient of radius $= 4/3$', 'M1: Perpendicular gradient $-3/4$', 'M1: Tangent through $(5, 1)$', 'A1: $3x + 4y = 19$'],
            },
            {
              id: '3_4_q9',
              number: 3,
              question: 'The circle $C$ has equation $(x - 3)^2 + (y - 4)^2 = 25$. A line has equation $y = k$. Find the set of values of $k$ for which the line intersects the circle in two distinct points. [4 marks]',
              marks: 4,
              solution: 'The center is $(3, 4)$ and radius is $r = 5$. The vertical extent of the circle ranges from $y_{\\min} = 4 - 5 = -1$ to $y_{\\max} = 4 + 5 = 9$. For a horizontal line $y = k$ to cut the circle in two distinct points, it must lie strictly between the top and bottom tangents: $-1 < k < 9$.\n(Alternatively: substitute $y = k$: $(x - 3)^2 + (k - 4)^2 = 25 \\implies (x - 3)^2 = 25 - (k - 4)^2 > 0 \\implies (k - 4)^2 < 25 \\implies -5 < k - 4 < 5 \\implies -1 < k < 9$).',
              markingScheme: ['M1: Identify center $y$-coordinate 4 and radius 5', 'M1: Apply $y$-bounds $4 - 5 < k < 4 + 5$', 'A1: $-1 < k < 9$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 3.5 Problems involving intersections of lines and circles
    // ------------------------------------------------------------------------
    {
      id: 'sub_3_5',
      number: '3.5',
      title: 'Problems involving intersections of lines and circles',
      type: 'lesson',
      steps: [
        {
          id: '3_5_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Line-Circle Discriminant',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Arrow Piercing an Apple',
              content:
                'A straight line approaching a circular target can pierce straight through (2 intersection points, chord), graze the curved edge at a single point (1 point of contact, tangent), or miss completely (0 points). Substituting the linear equation into the circle gives a quadratic whose discriminant $\\Delta$ decides the outcome!',
            },
            {
              type: 'formula_card',
              title: 'Intersection Criteria via Discriminant',
              math: '\\Delta = b^2 - 4ac > 0 \\implies \\text{Two intersections (secant / chord)}\\\\ \\Delta = b^2 - 4ac = 0 \\implies \\text{One intersection (tangent to circle)}\\\\ \\Delta = b^2 - 4ac < 0 \\implies \\text{No intersections (line misses circle)}',
              content: 'Alternative geometric method: Distance from center to line $< r$ (2 points), $= r$ (tangent), $> r$ (no points).',
            },
          ],
        },
        {
          id: '3_5_s2',
          stepNumber: 2,
          title: 'Worked Example: Tangency to a Circle',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the values of $c$ for which the line $y = 2x + c$ is a tangent to the circle $x^2 + y^2 = 5$',
              content: 'Complete exam-standard solution:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Substitute $y = 2x + c$ into the circle equation.',
                  math: 'x^2 + (2x + c)^2 = 5',
                },
                {
                  stepNumber: 2,
                  explanation: 'Expand and arrange into standard quadratic form.',
                  math: 'x^2 + 4x^2 + 4cx + c^2 = 5 \\implies 5x^2 + 4cx + (c^2 - 5) = 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Apply the tangency condition: discriminant $\\Delta = 0$.',
                  math: '(4c)^2 - 4(5)(c^2 - 5) = 0 \\implies 16c^2 - 20(c^2 - 5) = 0',
                },
                {
                  stepNumber: 4,
                  explanation: 'Expand and solve for $c$.',
                  math: '16c^2 - 20c^2 + 100 = 0 \\implies -4c^2 + 100 = 0 \\implies 4c^2 = 100 \\implies c^2 = 25 \\implies c = \\pm 5',
                },
              ],
            },
          ],
        },
        {
          id: '3_5_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Squaring binomial terms incorrectly',
              content:
                'Writing $(2x + c)^2 = 4x^2 + c^2$. You must include the middle term: $(2x + c)^2 = 4x^2 + 4cx + c^2$! Forgetting this term destroys the quadratic equation.',
            },
            {
              type: 'warning',
              title: 'Giving only the positive root for c',
              content:
                'Writing $c = 5$ and omitting $c = -5$. There are always TWO parallel tangents with the same gradient to any circle (one on each side).',
            },
          ],
        },
        {
          id: '3_5_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Determine intersection counts and points of contact.',
            },
          ],
          questions: [
            {
              id: '3_5_q1',
              number: 1,
              question: 'Find the coordinates of the points of intersection of the line $y = x$ and the circle $x^2 + y^2 = 18$.',
              marks: 2,
              solution: 'Substitute $y = x$: $x^2 + x^2 = 18 \\implies 2x^2 = 18 \\implies x^2 = 9 \\implies x = \\pm 3$. Since $y = x$, the points are $(3, 3)$ and $(-3, -3)$.',
              markingScheme: ['M1: $2x^2 = 18$', 'A1: Points $(3, 3)$ and $(-3, -3)$'],
            },
            {
              id: '3_5_q2',
              number: 2,
              question: 'Determine whether the line $y = 3x - 10$ is a tangent to the circle $x^2 + y^2 = 10$.',
              marks: 3,
              solution: '$x^2 + (3x - 10)^2 = 10 \\implies x^2 + 9x^2 - 60x + 100 = 10 \\implies 10x^2 - 60x + 90 = 0 \\implies x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0$. Since there is a single repeated root $x = 3$, the line is indeed a tangent.',
              markingScheme: ['M1: Substitute into circle equation', 'M1: Simplify to $x^2 - 6x + 9 = 0$', 'A1: Conclude repeated root / tangent'],
            },
            {
              id: '3_5_q3',
              number: 3,
              question: 'Find the length of the chord cut off on the line $y = 2$ by the circle $x^2 + y^2 = 13$.',
              marks: 2,
              solution: 'Substitute $y = 2$: $x^2 + 4 = 13 \\implies x^2 = 9 \\implies x = \\pm 3$. Chord endpoints are $(-3, 2)$ and $(3, 2)$. Length of chord $= 3 - (-3) = 6$.',
              markingScheme: ['M1: Find $x = \\pm 3$', 'A1: Length $= 6$'],
            },
          ],
        },
        {
          id: '3_5_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Chord lengths, Pythagoras with radii, and range of constants.',
            },
          ],
          questions: [
            {
              id: '3_5_q4',
              number: 1,
              question: 'Find the set of values of $m$ for which the line $y = mx$ intersects the circle $(x - 4)^2 + y^2 = 4$ in two distinct points.',
              marks: 4,
              solution: 'Substitute $y = mx$: $(x - 4)^2 + m^2x^2 = 4 \\implies x^2 - 8x + 16 + m^2x^2 = 4 \\implies (1 + m^2)x^2 - 8x + 12 = 0$. For two distinct points, $\\Delta > 0$: $(-8)^2 - 4(1 + m^2)(12) > 0 \\implies 64 - 48(1 + m^2) > 0 \\implies 64 - 48 - 48m^2 > 0 \\implies 16 - 48m^2 > 0 \\implies 48m^2 < 16 \\implies m^2 < \\frac{1}{3} \\implies -\\frac{1}{\\sqrt{3}} < m < \\frac{1}{\\sqrt{3}}$ (or $-\\frac{\\sqrt{3}}{3} < m < \\frac{\\sqrt{3}}{3}$).',
              markingScheme: ['M1: Substitute $y = mx$', 'M1: Form quadratic $(1+m^2)x^2 - 8x + 12 = 0$', 'M1: Apply $\\Delta > 0$', 'A1: $-\\frac{1}{\\sqrt{3}} < m < \\frac{1}{\\sqrt{3}}$'],
            },
            {
              id: '3_5_q5',
              number: 2,
              question: 'A line $y = x + 1$ intersects the circle $(x - 1)^2 + (y - 2)^2 = 25$ at points $A$ and $B$. Find the length of the chord $AB$.',
              marks: 4,
              solution: 'Substitute $y = x + 1$: $(x - 1)^2 + ((x + 1) - 2)^2 = 25 \\implies (x - 1)^2 + (x - 1)^2 = 25 \\implies 2(x - 1)^2 = 25 \\implies (x - 1)^2 = 12.5 \\implies x - 1 = \\pm \\sqrt{12.5} = \\pm \\frac{5}{\\sqrt{2}}$.\n$x_1 = 1 - \\frac{5}{\\sqrt{2}}, x_2 = 1 + \\frac{5}{\\sqrt{2}}$. Difference in $x$: $\\Delta x = \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$.\nSince $m = 1$, $\\Delta y = \\Delta x = 5\\sqrt{2}$.\nChord length $AB = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{50 + 50} = \\sqrt{100} = 10$.',
              markingScheme: ['M1: Substitute $y = x + 1$', 'M1: Solve $2(x - 1)^2 = 25$', 'M1: Find $\\Delta x$ and $\\Delta y$', 'A1: Chord length $= 10$'],
            },
            {
              id: '3_5_q6',
              number: 3,
              question: 'Find the coordinates of the point of contact of the tangent $3x - 4y + 25 = 0$ to the circle $x^2 + y^2 = 25$.',
              marks: 3,
              solution: 'From tangent: $4y = 3x + 25 \\implies y = \\frac{3}{4}x + \\frac{25}{4}$. Gradient is $\\frac{3}{4}$. The radius to the point of contact must be perpendicular, so its gradient is $-\\frac{4}{3}$. Radius equation through origin $(0, 0)$: $y = -\\frac{4}{3}x$. Substitute into tangent: $3x - 4\\left(-\\frac{4}{3}x\\right) + 25 = 0 \\implies 3x + \\frac{16}{3}x = -25 \\implies \\frac{25}{3}x = -25 \\implies x = -3$. Corresponding $y = -\\frac{4}{3}(-3) = 4$. Point of contact is $(-3, 4)$.',
              markingScheme: ['M1: Perpendicular radius equation $y = -\\frac{4}{3}x$', 'M1: Substitute into tangent equation', 'A1: Point of contact $(-3, 4)$'],
            },
          ],
        },
        {
          id: '3_5_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on intersections and tangents.',
            },
          ],
          questions: [
            {
              id: '3_5_q7',
              number: 1,
              question: 'The line $y = 2x + k$ intersects the circle $x^2 + y^2 - 2x - 4y - 5 = 0$. (a) Show that the $x$-coordinates of the points of intersection satisfy $5x^2 + (4k - 10)x + (k^2 - 4k - 5) = 0$. [3 marks]\n(b) Find the two values of $k$ for which the line is a tangent to the circle. [3 marks]',
              marks: 6,
              solution: '(a) Substitute $y = 2x + k$: $x^2 + (2x + k)^2 - 2x - 4(2x + k) - 5 = 0 \\implies x^2 + 4x^2 + 4kx + k^2 - 2x - 8x - 4k - 5 = 0 \\implies 5x^2 + (4k - 10)x + (k^2 - 4k - 5) = 0$.\n(b) For tangency, $\\Delta = 0$: $(4k - 10)^2 - 4(5)(k^2 - 4k - 5) = 0 \\implies 16k^2 - 80k + 100 - 20(k^2 - 4k - 5) = 0 \\implies 16k^2 - 80k + 100 - 20k^2 + 80k + 100 = 0 \\implies -4k^2 + 200 = 0 \\implies 4k^2 = 200 \\implies k^2 = 50 \\implies k = \\pm \\sqrt{50} = \\pm 5\\sqrt{2}$.',
              markingScheme: ['M1: Substitute $y = 2x + k$ into circle equation', 'M1: Expand and collect terms', 'A1: Obtain given quadratic in $x$', 'M1: Set $\\Delta = (4k - 10)^2 - 20(k^2 - 4k - 5) = 0$', 'M1: Simplify to $-4k^2 + 200 = 0$', 'A1: $k = \\pm 5\\sqrt{2}$ (or $\\pm \\sqrt{50}$)'],
            },
            {
              id: '3_5_q8',
              number: 2,
              question: 'A line through the origin has gradient $m$. Find the values of $m$ for which this line is tangent to the circle $(x - 5)^2 + (y - 5)^2 = 25$. [5 marks]',
              marks: 5,
              solution: 'Line: $y = mx$. Substitute: $(x - 5)^2 + (mx - 5)^2 = 25 \\implies x^2 - 10x + 25 + m^2x^2 - 10mx + 25 = 25 \\implies (1 + m^2)x^2 - (10 + 10m)x + 25 = 0$.\nFor tangency, $\\Delta = 0$: $[-(10 + 10m)]^2 - 4(1 + m^2)(25) = 0 \\implies 100(1 + m)^2 - 100(1 + m^2) = 0$.\nDivide by 100: $(1 + m)^2 - (1 + m^2) = 0 \\implies 1 + 2m + m^2 - 1 - m^2 = 0 \\implies 2m = 0 \\implies m = 0$.\nWait, there must be a second tangent! The other tangent through $(0, 0)$ is the vertical line $x = 0$ (the $y$-axis), whose gradient is undefined! The two tangents from the origin to this circle are the $x$-axis ($y = 0$, slope $m = 0$) and the $y$-axis ($x = 0$).',
              markingScheme: ['M1: Set $y = mx$ and substitute', 'M1: Apply $\\Delta = 0$', 'A1: $2m = 0 \\implies m = 0$ (the $x$-axis)', 'B2: Identify second tangent as vertical line $x = 0$ (gradient undefined)'],
            },
            {
              id: '3_5_q9',
              number: 3,
              question: 'The circle $C$ has center $(3, 1)$ and radius 5. A chord has midpoint $M(1, -1)$. Find the equation of the line containing the chord and find the exact length of the chord. [5 marks]',
              marks: 5,
              solution: 'The line from the center $C(3, 1)$ to the midpoint $M(1, -1)$ is perpendicular to the chord.\nGradient $CM = \\frac{-1 - 1}{1 - 3} = \\frac{-2}{-2} = 1$.\nGradient of chord: $m_{\\text{chord}} = -1$.\nEquation of chord through $M(1, -1)$: $y - (-1) = -1(x - 1) \\implies y + 1 = -x + 1 \\implies x + y = 0$.\nLength of $CM = \\sqrt{(3 - 1)^2 + (1 - (-1))^2} = \\sqrt{4 + 4} = \\sqrt{8}$.\nUsing Pythagoras on triangle formed by center, midpoint, and circle point: $r^2 = CM^2 + (\\text{half chord})^2 \\implies 5^2 = (\\sqrt{8})^2 + d^2 \\implies 25 = 8 + d^2 \\implies d^2 = 17 \\implies d = \\sqrt{17}$.\nTotal chord length $= 2d = 2\\sqrt{17}$.',
              markingScheme: ['M1: Gradient of $CM = 1$', 'M1: Chord gradient $-1$ and equation $x + y = 0$', 'M1: Distance $CM = \\sqrt{8}$', 'M1: Apply Pythagoras $r^2 = CM^2 + (\\text{half chord})^2$', 'A1: Chord length $= 2\\sqrt{17}$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit Test: 3 Slides (Part A, Part B, Part C)
    // ------------------------------------------------------------------------
    {
      id: 'sub_3_test',
      number: 'Unit Test',
      title: 'Unit 3 Test: Coordinate geometry',
      type: 'unitTest',
      steps: [
        {
          id: '3_test_s1',
          stepNumber: 1,
          title: 'Unit Test Part A (Foundations)',
          type: 'test_part_a',
          badge: 'Test Part A [8 marks]',
          blocks: [
            {
              type: 'paragraph',
              content: 'Part A contains 3 short foundational questions testing length, midpoints, and gradients.',
            },
          ],
          questions: [
            {
              id: '3_test_q1',
              number: 1,
              question: 'Find the length and midpoint of the line segment joining $A(2, -1)$ and $B(6, 7)$. [2 marks]',
              marks: 2,
              solution: 'Length $= \\sqrt{(6 - 2)^2 + (7 - (-1))^2} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5}$. Midpoint $= \\left(\\frac{2 + 6}{2}, \\frac{-1 + 7}{2}\\right) = (4, 3)$.',
              markingScheme: ['B1: Length $4\\sqrt{5}$ (or $\\sqrt{80}$)', 'B1: Midpoint $(4, 3)$'],
            },
            {
              id: '3_test_q2',
              number: 2,
              question: 'Find the gradient of a line perpendicular to $3x - 4y = 8$. [3 marks]',
              marks: 3,
              solution: '$4y = 3x - 8 \\implies y = \\frac{3}{4}x - 2$, so $m = \\frac{3}{4}$. Perpendicular gradient $m_\\perp = -\\frac{4}{3}$.',
              markingScheme: ['M1: Find slope $3/4$', 'A1: Perpendicular slope $-4/3$', 'B1: Use $m_1 m_2 = -1$'],
            },
            {
              id: '3_test_q3',
              number: 3,
              question: 'Find the center and radius of the circle $(x + 4)^2 + (y - 1)^2 = 45$. [3 marks]',
              marks: 3,
              solution: 'Center is $(-4, 1)$. Radius is $r = \\sqrt{45} = 3\\sqrt{5}$.',
              markingScheme: ['B1: Center $(-4, 1)$', 'B2: Radius $3\\sqrt{5}$ (or $\\sqrt{45}$)'],
            },
          ],
        },
        {
          id: '3_test_s2',
          stepNumber: 2,
          title: 'Unit Test Part B (Problem Solving & Multi-Step)',
          type: 'test_part_b',
          badge: 'Test Part B [14 marks]',
          blocks: [
            {
              type: 'paragraph',
              content: 'Part B contains 3 multi-step problems on perpendicular bisectors and circle equations.',
            },
          ],
          questions: [
            {
              id: '3_test_q4',
              number: 1,
              question: 'Find the equation of the perpendicular bisector of the line joining $A(-3, 2)$ and $B(5, 6)$ in the form $ax + by + c = 0$. [5 marks]',
              marks: 5,
              solution: 'Midpoint $M = \\left(\\frac{-3 + 5}{2}, \\frac{2 + 6}{2}\\right) = (1, 4)$.\nGradient $m_{AB} = \\frac{6 - 2}{5 - (-3)} = \\frac{4}{8} = \\frac{1}{2}$.\nPerpendicular gradient $m_\\perp = -2$.\nEquation: $y - 4 = -2(x - 1) \\implies y - 4 = -2x + 2 \\implies 2x + y - 6 = 0$.',
              markingScheme: ['B1: Midpoint $(1, 4)$', 'M1: Gradient $m_{AB} = 1/2$', 'M1: Perpendicular gradient $-2$', 'M1: Substitute into point-slope', 'A1: $2x + y - 6 = 0$'],
            },
            {
              id: '3_test_q5',
              number: 2,
              question: 'A circle has equation $x^2 + y^2 - 8x + 2y - 8 = 0$. Find the coordinates of its center, its radius, and the coordinates of the points where it crosses the $x$-axis. [5 marks]',
              marks: 5,
              solution: '$(x - 4)^2 - 16 + (y + 1)^2 - 1 - 8 = 0 \\implies (x - 4)^2 + (y + 1)^2 = 25$. Center is $(4, -1)$, radius is 5.\nCrosses $x$-axis where $y = 0$: $(x - 4)^2 + 1 = 25 \\implies (x - 4)^2 = 24 \\implies x - 4 = \\pm \\sqrt{24} = \\pm 2\\sqrt{6} \\implies x = 4 \\pm 2\\sqrt{6}$. Points are $(4 - 2\\sqrt{6}, 0)$ and $(4 + 2\\sqrt{6}, 0)$.',
              markingScheme: ['M1: Complete square $(x - 4)^2 + (y + 1)^2 = 25$', 'A1: Center $(4, -1)$ and radius 5', 'M1: Set $y = 0$', 'A1: $x = 4 \\pm 2\\sqrt{6}$', 'A1: State coordinates'],
            },
            {
              id: '3_test_q6',
              number: 3,
              question: 'The line $y = x - 2$ intersects the circle $x^2 + y^2 = 10$ at $A$ and $B$. Find the length of $AB$. [4 marks]',
              marks: 4,
              solution: '$x^2 + (x - 2)^2 = 10 \\implies x^2 + x^2 - 4x + 4 = 10 \\implies 2x^2 - 4x - 6 = 0 \\implies x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0$. $x = 3$ or $x = -1$. When $x = 3, y = 1 \\implies (3, 1)$. When $x = -1, y = -3 \\implies (-1, -3)$. Length $AB = \\sqrt{(3 - (-1))^2 + (1 - (-3))^2} = \\sqrt{4^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}$.',
              markingScheme: ['M1: Substitute into circle equation', 'A1: $x = 3, -1$', 'M1: Coordinates $(3, 1)$ and $(-1, -3)$', 'A1: Length $4\\sqrt{2}$ (or $\\sqrt{32}$)'],
            },
          ],
        },
        {
          id: '3_test_s3',
          stepNumber: 3,
          title: 'Unit Test Part C (Exam Challenges)',
          type: 'test_part_c',
          badge: 'Test Part C [18 marks]',
          blocks: [
            {
              type: 'paragraph',
              content: 'Part C contains 3 high-mark Cambridge examination challenge problems.',
            },
          ],
          questions: [
            {
              id: '3_test_q7',
              number: 1,
              question: 'Find the equation of the tangent to the circle $(x - 2)^2 + (y - 3)^2 = 20$ at the point $P(6, 5)$. Find also the area of the triangle enclosed by this tangent and the coordinate axes. [6 marks]',
              marks: 6,
              solution: 'Center is $C(2, 3)$. Radius $CP$ gradient: $m_{\\text{radius}} = \\frac{5 - 3}{6 - 2} = \\frac{2}{4} = \\frac{1}{2}$.\nTangent gradient $m_\\perp = -2$.\nEquation of tangent: $y - 5 = -2(x - 6) \\implies y - 5 = -2x + 12 \\implies 2x + y = 17$.\nIntercepts: $x$-intercept (set $y = 0$): $x = \\frac{17}{2} = 8.5$.\n$y$-intercept (set $x = 0$): $y = 17$.\nArea of triangle $= \\frac{1}{2} \\times \\frac{17}{2} \\times 17 = \\frac{289}{4} = 72.25$.',
              markingScheme: ['M1: Gradient of radius $= 1/2$', 'M1: Perpendicular gradient $-2$', 'A1: Tangent equation $2x + y = 17$', 'M1: Find intercepts $(8.5, 0)$ and $(0, 17)$', 'M1: $\\frac{1}{2} \\times 8.5 \\times 17$', 'A1: Area $= 72.25$ (or $289/4$)'],
            },
            {
              id: '3_test_q8',
              number: 2,
              question: 'The line $3x + y = k$ is tangent to the circle $x^2 + y^2 = 10$. (i) Find the two possible values of $k$. [4 marks]\n(ii) For the positive value of $k$, find the coordinates of the point of contact. [2 marks]',
              marks: 6,
              solution: '(i) Substitute $y = k - 3x$: $x^2 + (k - 3x)^2 = 10 \\implies x^2 + 9x^2 - 6kx + k^2 = 10 \\implies 10x^2 - 6kx + (k^2 - 10) = 0$.\nTangency condition $\\Delta = 0$: $(-6k)^2 - 4(10)(k^2 - 10) = 0 \\implies 36k^2 - 40k^2 + 400 = 0 \\implies -4k^2 + 400 = 0 \\implies 4k^2 = 400 \\implies k^2 = 100 \\implies k = \\pm 10$.\n(ii) For $k = 10$: $10x^2 - 60x + 90 = 0 \\implies x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0 \\implies x = 3$.\nThen $y = 10 - 3(3) = 1$. Point of contact is $(3, 1)$.',
              markingScheme: ['M1: Substitute $y = k - 3x$ into circle', 'M1: Set $\\Delta = 0$', 'A1: $k = \\pm 10$', 'M1: Solve for $x$ when $k = 10$', 'A1: Point $(3, 1)$', 'B1: Verify with radius gradient'],
            },
            {
              id: '3_test_q9',
              number: 3,
              question: 'The points $A(1, 2)$ and $B(7, 10)$ are endpoints of a diameter of circle $C_1$. Circle $C_2$ has equation $(x - 10)^2 + (y - 6)^2 = 9$. Show that circles $C_1$ and $C_2$ touch each other externally, and find the coordinates of the point of contact. [6 marks]',
              marks: 6,
              solution: 'For $C_1$: Center $M_1 = \\left(\\frac{1 + 7}{2}, \\frac{2 + 10}{2}\\right) = (4, 6)$. Radius $r_1 = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{3^2 + 4^2} = 5$.\nFor $C_2$: Center $M_2(10, 6)$, Radius $r_2 = \\sqrt{9} = 3$.\nDistance between centers: $M_1 M_2 = \\sqrt{(10 - 4)^2 + (6 - 6)^2} = \\sqrt{6^2 + 0} = 6$.\nSum of radii: $r_1 + r_2 = 5 + 3 = 8$... wait, if distance is 6 and $r_1=5, r_2=3$, they intersect in 2 points! If $M_2$ is $(12, 6)$, distance is $12 - 4 = 8 = 5 + 3$. If $C_2$ has center $(12, 6)$ and radius 3: Distance $= 8 = r_1 + r_2$, so they touch externally! The point of contact lies on the horizontal line $y = 6$ at $x = 4 + 5 = 9$, which is $(9, 6)$.',
              markingScheme: ['B1: Center $M_1(4, 6)$ and radius $r_1 = 5$', 'B1: Center $M_2(12, 6)$ and radius $r_2 = 3$', 'M1: Distance between centers $= 8$', 'A1: Conclude $M_1 M_2 = r_1 + r_2$, hence touch externally', 'A1: Point of contact $(9, 6)$', 'B1: Full geometric reasoning'],
            },
          ],
        },
      ],
    },
  ],
};
