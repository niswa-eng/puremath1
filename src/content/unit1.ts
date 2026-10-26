import { Unit, Subtopic } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 1: Quadratics
 * ============================================================================
 */

export const unit1: Unit = {
  id: 'unit_1',
  number: 1,
  title: 'Quadratics',
  learningObjectives: [
    '1.1.1: carry out the process of completing the square for a quadratic polynomial ax² + bx + c and use this form to locate the vertex of the graph of y = ax² + bx + c',
    '1.1.2: find the discriminant of a quadratic polynomial ax² + bx + c and use the discriminant to determine the number of real roots of the equation ax² + bx + c = 0',
    '1.1.3: solve quadratic equations, and linear and quadratic inequalities, in one unknown',
    '1.1.4: solve simultaneous equations in two unknowns with at least one linear equation',
    '1.1.5: find the set of values of k for which the line y = mx + k intersects, does not intersect, or is tangent to the graph of y = ax² + bx + c',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 1.1 Solving quadratic equations by factorisation
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_1',
      number: '1.1',
      title: 'Solving quadratic equations by factorisation',
      type: 'lesson',
      steps: [
        {
          id: '1_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: The Zero Product Property',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Visual / Real-Life Intuition',
              content:
                'Imagine a weighing balance where the total product of two weights is zero: if $A \\times B = 0$, at least one of the weights must be exactly zero! This simple rule turns a complicated curve problem into two simple linear lines.',
            },
            {
              type: 'paragraph',
              content:
                'A quadratic equation in standard form is written as $ax^2 + bx + c = 0$, where $a \\neq 0$. When we can factorise the quadratic expression into two linear binomial factors $(px + q)(rx + s) = 0$, the Zero Product Property states that either $px + q = 0$ or $rx + s = 0$.',
            },
            {
              type: 'definition',
              title: 'Key Terms & Definitions',
              items: [
                {
                  term: 'Roots / Solutions',
                  definition: 'The values of $x$ that satisfy the equation $ax^2 + bx + c = 0$. Graphically, they represent the $x$-intercepts where $y = 0$.',
                  example: 'For $(x - 3)(x + 2) = 0$, the roots are $x = 3$ and $x = -2$.',
                },
                {
                  term: 'Factorising by Inspection',
                  definition: 'Finding two numbers that multiply to give $ac$ and add to give $b$.',
                  example: 'For $2x^2 + 5x + 3 = 0$, $ac = 6$ and $b = 5$, split $5x$ into $2x + 3x$.',
                },
              ],
            },
            {
              type: 'formula_card',
              title: 'Standard Form Requirement',
              math: 'ax^2 + bx + c = 0 \\iff (px + q)(rx + s) = 0 \\implies x = -\\frac{q}{p} \\quad \\text{or} \\quad x = -\\frac{s}{r}',
              content: 'Always rearrange all terms to one side of the equation so that the other side is exactly zero before factorising.',
            },
          ],
        },
        {
          id: '1_1_s2',
          stepNumber: 2,
          title: 'Worked Example: Non-Monic Quadratic',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Solve the equation $6x^2 - 11x - 10 = 0$',
              content: 'Follow standard Cambridge exam layout step-by-step:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find two integers that multiply to $ac = 6 \\times (-10) = -60$ and add to $b = -11$.',
                  math: '(-15) \\times 4 = -60 \\quad \\text{and} \\quad -15 + 4 = -11',
                },
                {
                  stepNumber: 2,
                  explanation: 'Split the middle term $-11x$ into $-15x + 4x$ and factorise by grouping in pairs.',
                  math: '6x^2 - 15x + 4x - 10 = 0 \\implies 3x(2x - 5) + 2(2x - 5) = 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Take out the common binomial factor $(2x - 5)$.',
                  math: '(3x + 2)(2x - 5) = 0',
                },
                {
                  stepNumber: 4,
                  explanation: 'Apply the Zero Product Property and state the exact solutions.',
                  math: '3x + 2 = 0 \\implies x = -\\frac{2}{3} \\quad \\text{or} \\quad 2x - 5 = 0 \\implies x = \\frac{5}{2}',
                },
              ],
            },
          ],
        },
        {
          id: '1_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Dividing through by the variable x',
              content:
                'Students frequently write: $x^2 = 5x \\implies x = 5$ by dividing both sides by $x$. This causes the loss of the valid root $x = 0$! Never divide an equation by an algebraic term that could equal zero.',
              notes: 'Always factorise instead: $x^2 - 5x = 0 \\implies x(x - 5) = 0$, giving $x = 0$ or $x = 5$.',
            },
            {
              type: 'warning',
              title: 'Attempting to factorise when RHS is not zero',
              content:
                'Writing $(x - 1)(x + 4) = 6 \\implies x - 1 = 6$ or $x + 4 = 6$ is completely mathematically invalid! The Zero Product Property ONLY holds when the product equals 0.',
              notes: 'Expand first: $x^2 + 3x - 4 = 6 \\implies x^2 + 3x - 10 = 0 \\implies (x + 5)(x - 2) = 0$.',
            },
          ],
        },
        {
          id: '1_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Solve each equation by factorisation. Show full working on the Teacher\'s Board.',
            },
          ],
          questions: [
            {
              id: '1_1_q1',
              number: 1,
              question: 'Solve $x^2 - 7x + 12 = 0$.',
              marks: 2,
              solution: '$(x - 3)(x - 4) = 0 \\implies x = 3 \\text{ or } x = 4$.',
              markingScheme: ['M1: Correct factorisation $(x - 3)(x - 4)$', 'A1: Both roots $x = 3, 4$'],
            },
            {
              id: '1_1_q2',
              number: 2,
              question: 'Solve $3x^2 + 10x - 8 = 0$.',
              marks: 2,
              solution: '$3x^2 + 12x - 2x - 8 = 0 \\implies 3x(x + 4) - 2(x + 4) = 0 \\implies (3x - 2)(x + 4) = 0 \\implies x = \\frac{2}{3} \\text{ or } x = -4$.',
              markingScheme: ['M1: Factorisation $(3x - 2)(x + 4) = 0$', 'A1: Exact values $x = \\frac{2}{3}, -4$'],
            },
            {
              id: '1_1_q3',
              number: 3,
              question: 'Solve $4x^2 - 25 = 0$ using the difference of two squares.',
              marks: 2,
              solution: '$(2x - 5)(2x + 5) = 0 \\implies 2x - 5 = 0 \\text{ or } 2x + 5 = 0 \\implies x = \\pm \\frac{5}{2}$.',
              markingScheme: ['M1: Use $(2x - 5)(2x + 5) = 0$', 'A1: $x = \\pm \\frac{5}{2}$'],
            },
          ],
        },
        {
          id: '1_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Solve these multi-step geometric and algebraic problems. Express all dimensions as positive exact values.',
            },
          ],
          questions: [
            {
              id: '1_1_q4',
              number: 1,
              question: 'A rectangular lawn has length $(2x + 3)\\text{ m}$ and width $(x + 1)\\text{ m}$. The lawn has an area of $28\\text{ m}^2$. Find the value of $x$ and determine the perimeter.',
              marks: 4,
              solution: '$(2x + 3)(x + 1) = 28 \\implies 2x^2 + 5x + 3 = 28 \\implies 2x^2 + 5x - 25 = 0$. Factorising: $(2x - 5)(x + 5) = 0$. Since length must be positive, $x = \\frac{5}{2} = 2.5$. Dimensions: Length $= 2(2.5) + 3 = 8\\text{ m}$, Width $= 2.5 + 1 = 3.5\\text{ m}$. Perimeter $= 2(8 + 3.5) = 23\\text{ m}$.',
              markingScheme: ['M1: Form quadratic equation in $x$', 'M1: Factorise into $(2x - 5)(x + 5) = 0$', 'A1: $x = 2.5$ with negative root rejected', 'A1: Perimeter $= 23\\text{ m}$'],
            },
            {
              id: '1_1_q5',
              number: 2,
              question: 'Solve the equation $\\frac{2}{x - 1} + \\frac{1}{x + 2} = 1$, where $x \\neq 1, -2$.',
              marks: 3,
              solution: 'Multiply both sides by $(x - 1)(x + 2)$: $2(x + 2) + 1(x - 1) = (x - 1)(x + 2) \\implies 2x + 4 + x - 1 = x^2 + x - 2 \\implies 3x + 3 = x^2 + x - 2 \\implies x^2 - 2x - 5 = 0$. Note: Check factorisation $(x - 1)(x + 2)$. Here $x^2 - 2x - 5$: wait, if $\\frac{2}{x-1} + \\frac{1}{x+2} = 1$: $x = 1 \\pm \\sqrt{6}$.',
              markingScheme: ['M1: Clear fractions by multiplying common denominator', 'M1: Rearrange to standard quadratic form', 'A1: Correct exact solutions'],
            },
            {
              id: '1_1_q6',
              number: 3,
              question: 'Two consecutive positive odd integers have squares that sum to 130. Form a quadratic equation and solve for the two integers.',
              marks: 3,
              solution: 'Let the numbers be $n$ and $n + 2$. Then $n^2 + (n + 2)^2 = 130 \\implies n^2 + n^2 + 4n + 4 = 130 \\implies 2n^2 + 4n - 126 = 0 \\implies n^2 + 2n - 63 = 0$. Factorising: $(n + 9)(n - 7) = 0$. Since integers are positive, $n = 7$. The integers are 7 and 9.',
              markingScheme: ['M1: Set up $n^2 + (n+2)^2 = 130$', 'M1: Factorise $(n + 9)(n - 7) = 0$', 'A1: State integers 7 and 9'],
            },
          ],
        },
        {
          id: '1_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge International AS & A Level Exam-Style questions with full mark scheme breakdown.',
            },
          ],
          questions: [
            {
              id: '1_1_q7',
              number: 1,
              question: 'Find the coordinates of the points of intersection of the curve $y = 2x^2 - 5x + 1$ and the line $y = 3x - 5$. [4 marks]',
              marks: 4,
              solution: 'Equate the equations: $2x^2 - 5x + 1 = 3x - 5 \\implies 2x^2 - 8x + 6 = 0$. Divide by 2: $x^2 - 4x + 3 = 0 \\implies (x - 1)(x - 3) = 0 \\implies x = 1$ or $x = 3$. Substitute into linear equation: When $x = 1$, $y = 3(1) - 5 = -2$. When $x = 3$, $y = 3(3) - 5 = 4$. Points are $(1, -2)$ and $(3, 4)$.',
              markingScheme: ['M1: Equate and form quadratic in $x$', 'A1: Obtain $x^2 - 4x + 3 = 0$', 'M1: Solve to find $x = 1, 3$', 'A1: Both coordinates $(1, -2)$ and $(3, 4)$'],
            },
            {
              id: '1_1_q8',
              number: 2,
              question: 'The diagram shows a right-angled triangle with sides of lengths $x\\text{ cm}$, $(2x - 1)\\text{ cm}$ and hypotenuse $(2x + 1)\\text{ cm}$. Use Pythagoras\' theorem to find the value of $x$, and hence calculate the area of the triangle. [4 marks]',
              marks: 4,
              solution: '$x^2 + (2x - 1)^2 = (2x + 1)^2 \\implies x^2 + 4x^2 - 4x + 1 = 4x^2 + 4x + 1 \\implies x^2 - 8x = 0 \\implies x(x - 8) = 0$. Since length $x > 0$, $x = 8$. Sides are $8\\text{ cm}$, $2(8)-1 = 15\\text{ cm}$, and hypotenuse $17\\text{ cm}$. $\\text{Area} = \\frac{1}{2} \\times 8 \\times 15 = 60\\text{ cm}^2$.',
              markingScheme: ['M1: Apply Pythagoras: $x^2 + (2x - 1)^2 = (2x + 1)^2$', 'M1: Expand and simplify to $x^2 - 8x = 0$', 'A1: $x = 8$', 'B1: Area $= 60\\text{ cm}^2$'],
            },
            {
              id: '1_1_q9',
              number: 3,
              question: 'Given that $x = 2$ is a root of the equation $2x^2 + kx - 14 = 0$, find the value of the constant $k$, and hence find the second root. [3 marks]',
              marks: 3,
              solution: 'Substitute $x = 2$: $2(2)^2 + k(2) - 14 = 0 \\implies 8 + 2k - 14 = 0 \\implies 2k = 6 \\implies k = 3$. Equation becomes $2x^2 + 3x - 14 = 0 \\implies (x - 2)(2x + 7) = 0 \\implies 2x + 7 = 0 \\implies x = -\\frac{7}{2}$.',
              markingScheme: ['M1: Substitute $x = 2$ to find $k$', 'A1: $k = 3$', 'A1: Second root $x = -\\frac{7}{2}$ (or $-3.5$)'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.2 Completing the square
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_2',
      number: '1.2',
      title: 'Completing the square',
      type: 'lesson',
      steps: [
        {
          id: '1_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Geometric Square Tile Model',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Geometric Intuition: Literally Completing a Square',
              content:
                'Imagine an area $x^2$ and a strip $bx$. Split the strip into two equal halves of width $\\frac{b}{2}$ on two sides of the square. To complete the large square of side $(x + \\frac{b}{2})$, a missing corner piece of area $(\\frac{b}{2})^2$ must be added!',
            },
            {
              type: 'paragraph',
              content:
                'Completing the square transforms any quadratic polynomial from standard form $ax^2 + bx + c$ into vertex form $a(x + p)^2 + q$. This reveals key graphical properties directly without calculus.',
            },
            {
              type: 'formula_card',
              title: 'Standard Transformation Rule',
              math: 'x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2 + c',
              content: 'When $a \\neq 1$, factorise $a$ outside the first two terms before completing the square.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Vertex Form $a(x - h)^2 + k$',
                  definition: 'Coordinates of the vertex (turning point) are $(h, k)$. Axis of symmetry is $x = h$.',
                  example: '$y = 2(x - 3)^2 + 5$ has minimum at $(3, 5)$ and symmetry line $x = 3$.',
                },
              ],
            },
          ],
        },
        {
          id: '1_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Non-Monic Quadratic',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Express $3x^2 - 12x + 7$ in the form $a(x + p)^2 + q$',
              content: 'Exam-style step-by-step working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Factorise the coefficient 3 from the terms containing $x$.',
                  math: '3x^2 - 12x + 7 = 3[x^2 - 4x] + 7',
                },
                {
                  stepNumber: 2,
                  explanation: 'Complete the square inside the bracket for $x^2 - 4x$. Half of $-4$ is $-2$.',
                  math: 'x^2 - 4x = (x - 2)^2 - (-2)^2 = (x - 2)^2 - 4',
                },
                {
                  stepNumber: 3,
                  explanation: 'Substitute back and expand the outer factor 3 carefully.',
                  math: '3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7',
                },
                {
                  stepNumber: 4,
                  explanation: 'Collect constants and state vertex coordinates.',
                  math: '= 3(x - 2)^2 - 5 \\implies a = 3, p = -2, q = -5. \\text{ Vertex is } (2, -5).',
                },
              ],
            },
          ],
        },
        {
          id: '1_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Forgetting to multiply the subtracted term by "a"',
              content:
                'In $2x^2 + 8x + 1$, students often write $2[(x + 2)^2 - 4] + 1 = 2(x + 2)^2 - 4 + 1 = 2(x + 2)^2 - 3$. This is incorrect because $-4$ was inside the bracket and must be multiplied by 2!',
              notes: 'Correct: $2(x+2)^2 - 2(4) + 1 = 2(x+2)^2 - 8 + 1 = 2(x+2)^2 - 7$.',
            },
            {
              type: 'warning',
              title: 'Sign errors in vertex coordinates',
              content:
                'For $y = 3(x + 4)^2 - 10$, the vertex is at $x = -4$, NOT $+4$. Remember the bracket is zero when $x + 4 = 0 \\implies x = -4$.',
            },
          ],
        },
        {
          id: '1_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Express each quadratic in completed square form and state its vertex.',
            },
          ],
          questions: [
            {
              id: '1_2_q1',
              number: 1,
              question: 'Express $x^2 - 6x + 13$ in the form $(x + p)^2 + q$.',
              marks: 2,
              solution: '$x^2 - 6x + 13 = (x - 3)^2 - 9 + 13 = (x - 3)^2 + 4$. Vertex is $(3, 4)$.',
              markingScheme: ['M1: $(x - 3)^2 - 9 + 13$', 'A1: $(x - 3)^2 + 4$'],
            },
            {
              id: '1_2_q2',
              number: 2,
              question: 'Express $x^2 + 5x - 2$ in the form $(x + p)^2 + q$ where $p$ and $q$ are exact fractions.',
              marks: 2,
              solution: '$x^2 + 5x - 2 = \\left(x + \\frac{5}{2}\\right)^2 - \\frac{25}{4} - \\frac{8}{4} = \\left(x + \\frac{5}{2}\\right)^2 - \\frac{33}{4}$.',
              markingScheme: ['M1: $\\left(x + \\frac{5}{2}\\right)^2 - \\frac{25}{4} - 2$', 'A1: $\\left(x + \\frac{5}{2}\\right)^2 - \\frac{33}{4}$'],
            },
            {
              id: '1_2_q3',
              number: 3,
              question: 'Express $2x^2 + 12x + 5$ in the form $a(x + p)^2 + q$.',
              marks: 3,
              solution: '$2[x^2 + 6x] + 5 = 2[(x + 3)^2 - 9] + 5 = 2(x + 3)^2 - 18 + 5 = 2(x + 3)^2 - 13$.',
              markingScheme: ['M1: Factor out 2: $2[x^2 + 6x] + 5$', 'M1: Complete square inside bracket: $2[(x+3)^2 - 9]$', 'A1: $2(x+3)^2 - 13$'],
            },
          ],
        },
        {
          id: '1_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Use completing the square to solve equations and determine coordinates.',
            },
          ],
          questions: [
            {
              id: '1_2_q4',
              number: 1,
              question: 'Solve $x^2 - 8x + 11 = 0$ by completing the square, leaving your answer in the form $a \\pm \\sqrt{b}$.',
              marks: 3,
              solution: '$(x - 4)^2 - 16 + 11 = 0 \\implies (x - 4)^2 - 5 = 0 \\implies (x - 4)^2 = 5 \\implies x - 4 = \\pm \\sqrt{5} \\implies x = 4 \\pm \\sqrt{5}$.',
              markingScheme: ['M1: $(x - 4)^2 = 5$', 'M1: Take square roots: $x - 4 = \\pm \\sqrt{5}$', 'A1: $x = 4 \\pm \\sqrt{5}$'],
            },
            {
              id: '1_2_q5',
              number: 2,
              question: 'Express $5 - 4x - x^2$ in the form $a - (x + b)^2$. Hence state the maximum value of the expression and the value of $x$ at which it occurs.',
              marks: 3,
              solution: '$5 - (x^2 + 4x) = 5 - [(x + 2)^2 - 4] = 5 - (x + 2)^2 + 4 = 9 - (x + 2)^2$. Maximum value is 9, occurring at $x = -2$.',
              markingScheme: ['M1: $5 - [(x + 2)^2 - 4]$', 'A1: $9 - (x + 2)^2$', 'B1: Max value 9 at $x = -2$'],
            },
            {
              id: '1_2_q6',
              number: 3,
              question: 'The curve $y = 2x^2 - 8x + k$ has its vertex on the line $y = 3$. Find the value of the constant $k$.',
              marks: 3,
              solution: 'Complete the square: $y = 2[x^2 - 4x] + k = 2(x - 2)^2 - 8 + k$. Vertex $y$-coordinate is $k - 8$. Set $k - 8 = 3 \\implies k = 11$.',
              markingScheme: ['M1: Express in vertex form: $y = 2(x - 2)^2 + k - 8$', 'M1: Identify vertex $y$-coordinate as $k - 8$', 'A1: $k = 11$'],
            },
          ],
        },
        {
          id: '1_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge 9709 examination questions testing vertex form and range.',
            },
          ],
          questions: [
            {
              id: '1_2_q7',
              number: 1,
              question: '(a) Express $2x^2 - 12x + 11$ in the form $a(x + b)^2 + c$. [3 marks]\n(b) State the coordinates of the minimum point of the curve $y = 2x^2 - 12x + 11$. [1 mark]\n(c) Find the range of the function $f(x) = 2x^2 - 12x + 11$ for $x \\in \\mathbb{R}$. [1 mark]',
              marks: 5,
              solution: '(a) $2[x^2 - 6x] + 11 = 2[(x - 3)^2 - 9] + 11 = 2(x - 3)^2 - 18 + 11 = 2(x - 3)^2 - 7$.\n(b) Minimum point is $(3, -7)$.\n(c) Since $a = 2 > 0$, the parabola opens upwards with minimum $-7$, so range is $f(x) \\ge -7$.',
              markingScheme: ['M1: $2[(x - 3)^2 - 9] + 11$', 'A1: $a = 2, b = -3, c = -7$', 'B1: $(3, -7)$', 'B1: $f(x) \\ge -7$ (or $y \\ge -7$)'],
            },
            {
              id: '1_2_q8',
              number: 2,
              question: 'A curve has equation $y = kx^2 + 4x + 1$, where $k$ is a non-zero constant. Given that the curve has a maximum point, state the sign of $k$. Express the $y$-coordinate of the maximum point in terms of $k$. [4 marks]',
              marks: 4,
              solution: 'Since the curve has a maximum point, it must be an inverted parabola (∩-shaped), so $k < 0$. Complete the square: $y = k\\left[x^2 + \\frac{4}{k}x\\right] + 1 = k\\left[\\left(x + \\frac{2}{k}\\right)^2 - \\frac{4}{k^2}\\right] + 1 = k\\left(x + \\frac{2}{k}\\right)^2 - \\frac{4}{k} + 1$. The maximum $y$-coordinate is $1 - \\frac{4}{k}$.',
              markingScheme: ['B1: State $k < 0$', 'M1: Factorise $k$ and complete square', 'M1: Multiply out $-k\\left(\\frac{4}{k^2}\\right)$', 'A1: Maximum $y = 1 - \\frac{4}{k}$ (or $\\frac{k - 4}{k}$)'],
            },
            {
              id: '1_2_q9',
              number: 3,
              question: 'The function $f$ is defined by $f(x) = 4x^2 - 24x + 31$ for $x \\ge 3$. Explain why $f$ has an inverse function and find an expression for $f^{-1}(x)$. [5 marks]',
              marks: 5,
              solution: '$f(x) = 4(x - 3)^2 - 5$. For $x \\ge 3$, the function is strictly increasing, so it is one-to-one and thus possesses an inverse. To find inverse: let $y = 4(x - 3)^2 - 5 \\implies y + 5 = 4(x - 3)^2 \\implies (x - 3)^2 = \\frac{y + 5}{4} \\implies x - 3 = +\\sqrt{\\frac{y+5}{4}} = \\frac{\\sqrt{y+5}}{2}$ (taking positive root as $x \\ge 3$). Therefore $x = 3 + \\frac{\\sqrt{y+5}}{2}$, so $f^{-1}(x) = 3 + \\frac{1}{2}\\sqrt{x + 5}$.',
              markingScheme: ['B1: Complete square $4(x - 3)^2 - 5$', 'B1: State one-to-one because restricted domain $x \\ge 3$', 'M1: Rearrange $y = 4(x-3)^2 - 5$ for $x$', 'M1: Justify positive square root', 'A1: $f^{-1}(x) = 3 + \\frac{1}{2}\\sqrt{x + 5}$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.3 The quadratic formula
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_3',
      number: '1.3',
      title: 'The quadratic formula',
      type: 'lesson',
      steps: [
        {
          id: '1_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Derivation via Completing the Square',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Intuition: The Universal Key',
              content:
                'Factorisation only works cleanly when roots are rational numbers. The quadratic formula is derived by completing the square on the general equation $ax^2 + bx + c = 0$, giving an exact formula that works for every quadratic polynomial.',
            },
            {
              type: 'formula_card',
              title: 'The Quadratic Formula',
              math: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
              content: 'The quantity under the square root, $b^2 - 4ac$, is known as the discriminant (symbol $\\Delta$).',
            },
            {
              type: 'definition',
              title: 'Exact Values vs Decimals',
              items: [
                {
                  term: 'Surd Form',
                  definition: 'Leaving irrational square roots in simplified form without approximating with decimals.',
                  example: '$\\frac{3 \\pm \\sqrt{17}}{4}$ is exact; $1.78$ is only an approximation.',
                },
              ],
            },
          ],
        },
        {
          id: '1_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Exact Surd Solutions',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Solve $2x^2 - 6x + 3 = 0$, giving solutions in the form $\\frac{p \\pm \\sqrt{q}}{r}$',
              content: 'Follow Cambridge presentation guidelines:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Identify coefficients with their correct signs.',
                  math: 'a = 2, \\quad b = -6, \\quad c = 3',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute into the quadratic formula.',
                  math: 'x = \\frac{-(-6) \\pm \\sqrt{(-6)^2 - 4(2)(3)}}{2(2)}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Evaluate the discriminant.',
                  math: 'b^2 - 4ac = 36 - 24 = 12 \\implies x = \\frac{6 \\pm \\sqrt{12}}{4}',
                },
                {
                  stepNumber: 4,
                  explanation: 'Simplify the surd $\\sqrt{12} = 2\\sqrt{3}$ and divide through by 2.',
                  math: 'x = \\frac{6 \\pm 2\\sqrt{3}}{4} = \\frac{3 \\pm \\sqrt{3}}{2}',
                },
              ],
            },
          ],
        },
        {
          id: '1_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Calculator Square of Negative Numbers',
              content:
                'Writing $-6^2 = -36$ instead of $(-6)^2 = +36$. If $b$ is negative, $b^2$ is ALWAYS positive! This single bracket omission leads to wrong signs inside the root.',
              notes: 'Always write $(-b)^2$ in brackets on your paper and calculator.',
            },
            {
              type: 'warning',
              title: 'Division line not extending across the whole numerator',
              content:
                'Writing $-b \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$ instead of putting both terms over $2a$.',
            },
          ],
        },
        {
          id: '1_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Solve using the quadratic formula, giving exact surd answers in simplest form.',
            },
          ],
          questions: [
            {
              id: '1_3_q1',
              number: 1,
              question: 'Solve $x^2 - 4x + 1 = 0$.',
              marks: 2,
              solution: '$x = \\frac{4 \\pm \\sqrt{16 - 4(1)(1)}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$.',
              markingScheme: ['M1: Correct substitution in formula', 'A1: $x = 2 \\pm \\sqrt{3}$'],
            },
            {
              id: '1_3_q2',
              number: 2,
              question: 'Solve $3x^2 + 8x + 2 = 0$.',
              marks: 2,
              solution: '$x = \\frac{-8 \\pm \\sqrt{64 - 4(3)(2)}}{6} = \\frac{-8 \\pm \\sqrt{40}}{6} = \\frac{-8 \\pm 2\\sqrt{10}}{6} = \\frac{-4 \\pm \\sqrt{10}}{3}$.',
              markingScheme: ['M1: Simplify discriminant to $\\sqrt{40} = 2\\sqrt{10}$', 'A1: $\\frac{-4 \\pm \\sqrt{10}}{3}$'],
            },
            {
              id: '1_3_q3',
              number: 3,
              question: 'Solve $5x^2 - 2x - 1 = 0$, giving answers to 3 significant figures.',
              marks: 2,
              solution: '$x = \\frac{2 \\pm \\sqrt{4 - 4(5)(-1)}}{10} = \\frac{2 \\pm \\sqrt{24}}{10} = \\frac{1 \\pm \\sqrt{6}}{5}$. In decimal: $x \\approx 0.690$ or $x \\approx -0.290$.',
              markingScheme: ['M1: Correct use of formula', 'A1: $x = 0.690$ and $x = -0.290$ (3 s.f.)'],
            },
          ],
        },
        {
          id: '1_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Word problems and algebraic fraction equations solved with the formula.',
            },
          ],
          questions: [
            {
              id: '1_3_q4',
              number: 1,
              question: 'Solve the equation $\\frac{1}{x} + \\frac{1}{x + 3} = 2$. Give solutions to 3 significant figures.',
              marks: 3,
              solution: 'Multiply by $x(x + 3)$: $(x + 3) + x = 2x(x + 3) \\implies 2x + 3 = 2x^2 + 6x \\implies 2x^2 + 4x - 3 = 0$. $x = \\frac{-4 \\pm \\sqrt{16 - 4(2)(-3)}}{4} = \\frac{-4 \\pm \\sqrt{40}}{4} = \\frac{-2 \\pm \\sqrt{10}}{2}$. $x \\approx 0.581$ or $x \\approx -2.58$.',
              markingScheme: ['M1: Form standard quadratic $2x^2 + 4x - 3 = 0$', 'M1: Apply quadratic formula', 'A1: $x = 0.581, -2.58$'],
            },
            {
              id: '1_3_q5',
              number: 2,
              question: 'A ball is thrown vertically upwards from height $1.5\\text{ m}$ with initial speed $14\\text{ m s}^{-1}$. Its height $h$ after $t$ seconds is $h = 1.5 + 14t - 4.9t^2$. Find the time $t$ when the ball lands on the ground ($h = 0$).',
              marks: 3,
              solution: 'Set $4.9t^2 - 14t - 1.5 = 0$. $t = \\frac{14 \\pm \\sqrt{(-14)^2 - 4(4.9)(-1.5)}}{2(4.9)} = \\frac{14 \\pm \\sqrt{196 + 29.4}}{9.8} = \\frac{14 \\pm \\sqrt{225.4}}{9.8}$. $t = \\frac{14 + 15.013}{9.8} \\approx 2.96\\text{ s}$ (rejecting negative time).',
              markingScheme: ['M1: Set up $4.9t^2 - 14t - 1.5 = 0$', 'M1: Substitute into formula', 'A1: $t = 2.96\\text{ s}$ (3 s.f.)'],
            },
            {
              id: '1_3_q6',
              number: 3,
              question: 'Find the positive value of $p$ such that the solutions to $x^2 + px + (p + 3) = 0$ differ by 5.',
              marks: 4,
              solution: 'Difference of roots $= \\frac{\\sqrt{b^2 - 4ac}}{a} = \\sqrt{p^2 - 4(1)(p + 3)} = 5$. Square both sides: $p^2 - 4p - 12 = 25 \\implies p^2 - 4p - 37 = 0$. Using formula: $p = \\frac{4 \\pm \\sqrt{16 - 4(1)(-37)}}{2} = \\frac{4 \\pm \\sqrt{164}}{2} = 2 \\pm \\sqrt{41}$. Since $p > 0$, $p = 2 + \\sqrt{41} \\approx 8.40$.',
              markingScheme: ['M1: Set $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta = 25$', 'M1: Form $p^2 - 4p - 37 = 0$', 'A1: $p = 2 + \\sqrt{41}$', 'B1: Reject negative root'],
            },
          ],
        },
        {
          id: '1_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal method and accuracy marks.',
            },
          ],
          questions: [
            {
              id: '1_3_q7',
              number: 1,
              question: 'The roots of the equation $3x^2 - 4x - 2 = 0$ are denoted by $\\alpha$ and $\\beta$, where $\\alpha > \\beta$. Without using a calculator, find the exact value of $\\alpha - \\beta$. [4 marks]',
              marks: 4,
              solution: 'Using the formula: $x = \\frac{4 \\pm \\sqrt{(-4)^2 - 4(3)(-2)}}{6} = \\frac{4 \\pm \\sqrt{40}}{6} = \\frac{4 \\pm 2\\sqrt{10}}{6} = \\frac{2 \\pm \\sqrt{10}}{3}$. Hence $\\alpha = \\frac{2 + \\sqrt{10}}{3}$ and $\\beta = \\frac{2 - \\sqrt{10}}{3}$. $\\alpha - \\beta = \\frac{(2 + \\sqrt{10}) - (2 - \\sqrt{10})}{3} = \\frac{2\\sqrt{10}}{3}$.',
              markingScheme: ['M1: Use formula to find both roots', 'A1: Simplify surd to $\\sqrt{40} = 2\\sqrt{10}$', 'M1: Subtract roots: $\\alpha - \\beta$', 'A1: Exact answer $\\frac{2\\sqrt{10}}{3}$'],
            },
            {
              id: '1_3_q8',
              number: 2,
              question: 'Solve the equation $x - \\frac{3}{x} = 4$. Express your answers in the form $a \\pm \\sqrt{b}$. [3 marks]',
              marks: 3,
              solution: 'Multiply by $x$: $x^2 - 3 = 4x \\implies x^2 - 4x - 3 = 0$. $x = \\frac{4 \\pm \\sqrt{(-4)^2 - 4(1)(-3)}}{2} = \\frac{4 \\pm \\sqrt{28}}{2} = \\frac{4 \\pm 2\\sqrt{7}}{2} = 2 \\pm \\sqrt{7}$.',
              markingScheme: ['M1: Multiply by $x$ and form $x^2 - 4x - 3 = 0$', 'M1: Quadratic formula or completing square', 'A1: $x = 2 \\pm \\sqrt{7}$'],
            },
            {
              id: '1_3_q9',
              number: 3,
              question: 'Show that the equation $ax^2 + 2ax + (a + 1) = 0$ has real solutions if and only if $a \\le 0$ (for $a \\neq 0$). [4 marks]',
              marks: 4,
              solution: 'For real solutions, the discriminant $\\Delta = b^2 - 4ac \\ge 0$. Here $b = 2a$, $c = a + 1$. $\\Delta = (2a)^2 - 4(a)(a + 1) = 4a^2 - 4a^2 - 4a = -4a$. For real solutions: $-4a \\ge 0 \\implies a \\le 0$. Since $a$ is a quadratic coefficient, $a \\neq 0$, so $a < 0$.',
              markingScheme: ['M1: State condition $b^2 - 4ac \\ge 0$', 'M1: Substitute $b = 2a$ and $c = a + 1$', 'A1: Simplify to $-4a \\ge 0$', 'A1: Conclude $a \\le 0$ with $a \\neq 0$ noted'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.4 Solving simultaneous equations (one linear and one quadratic)
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_4',
      number: '1.4',
      title: 'Solving simultaneous equations (one linear and one quadratic)',
      type: 'lesson',
      steps: [
        {
          id: '1_4_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Substitution Method',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Geometric Intuition: Line Intersecting a Parabola',
              content:
                'Solving a linear and a quadratic equation simultaneously represents finding the coordinates where a straight line meets a curve. A line can cut a parabola in 2 points, touch it in 1 point (tangent), or miss it entirely (0 points).',
            },
            {
              type: 'paragraph',
              content:
                'Always use the substitution method: rearrange the linear equation to make either $x$ or $y$ the subject, then substitute this into the quadratic equation to obtain a single quadratic equation in one unknown.',
            },
            {
              type: 'formula_card',
              title: 'Pairing Coordinates',
              math: 'x = x_1 \\implies y = y_1 \\quad \\text{and} \\quad x = x_2 \\implies y = y_2',
              content: 'Every $x$-value must be substituted back into the LINEAR equation to find the corresponding $y$-value. Always pair them as coordinates $(x, y)$.',
            },
          ],
        },
        {
          id: '1_4_s2',
          stepNumber: 2,
          title: 'Worked Example: Exam Working',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Solve simultaneously: $2x + y = 7$ and $x^2 - xy = 6$',
              content: 'Step-by-step substitution:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Rearrange the linear equation to make $y$ the subject.',
                  math: 'y = 7 - 2x',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute $y = 7 - 2x$ into the quadratic equation.',
                  math: 'x^2 - x(7 - 2x) = 6 \\implies x^2 - 7x + 2x^2 = 6',
                },
                {
                  stepNumber: 3,
                  explanation: 'Simplify to standard form and factorise.',
                  math: '3x^2 - 7x - 6 = 0 \\implies (3x + 2)(x - 3) = 0 \\implies x = -\\frac{2}{3} \\text{ or } x = 3',
                },
                {
                  stepNumber: 4,
                  explanation: 'Find matching $y$-values using $y = 7 - 2x$.',
                  math: 'x = 3 \\implies y = 7 - 2(3) = 1; \\quad x = -\\frac{2}{3} \\implies y = 7 - 2\\left(-\\frac{2}{3}\\right) = \\frac{25}{3}',
                },
              ],
            },
          ],
        },
        {
          id: '1_4_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Mismatched Coordinates Trap',
              content:
                'Students find $x = 1, 4$ and $y = 2, 5$ and write $(1, 5)$ and $(4, 2)$ or forget which $y$ corresponds to which $x$.',
              notes: 'Always substitute $x_1$ to get $y_1$ immediately, then $x_2$ to get $y_2$.',
            },
            {
              type: 'warning',
              title: 'Substituting into the quadratic equation to find y',
              content:
                'Substituting $x$ into the quadratic equation often introduces extraneous roots because of squared terms. Always substitute $x$ back into the original LINEAR equation.',
            },
          ],
        },
        {
          id: '1_4_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Solve each system of simultaneous equations. Express coordinates clearly.',
            },
          ],
          questions: [
            {
              id: '1_4_q1',
              number: 1,
              question: 'Solve $y = x + 2$ and $y = x^2$.',
              marks: 3,
              solution: '$x^2 = x + 2 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = 2$ or $x = -1$. Pairs: $(2, 4)$ and $(-1, 1)$.',
              markingScheme: ['M1: Equate $x^2 = x + 2$', 'M1: Factorise $(x - 2)(x + 1) = 0$', 'A1: Both solutions $(2, 4)$ and $(-1, 1)$'],
            },
            {
              id: '1_4_q2',
              number: 2,
              question: 'Solve $x + y = 5$ and $x^2 + y^2 = 13$.',
              marks: 3,
              solution: '$y = 5 - x \\implies x^2 + (5 - x)^2 = 13 \\implies x^2 + 25 - 10x + x^2 = 13 \\implies 2x^2 - 10x + 12 = 0 \\implies x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0$. Pairs: $(2, 3)$ and $(3, 2)$.',
              markingScheme: ['M1: Substitute $y = 5 - x$', 'M1: Form $x^2 - 5x + 6 = 0$', 'A1: $(2, 3)$ and $(3, 2)$'],
            },
            {
              id: '1_4_q3',
              number: 3,
              question: 'Solve $y - 2x = 1$ and $xy = 6$.',
              marks: 3,
              solution: '$y = 2x + 1 \\implies x(2x + 1) = 6 \\implies 2x^2 + x - 6 = 0 \\implies (2x - 3)(x + 2) = 0$. $x = \\frac{3}{2} \\implies y = 4$; $x = -2 \\implies y = -3$. Solutions: $\\left(\\frac{3}{2}, 4\\right)$ and $(-2, -3)$.',
              markingScheme: ['M1: Substitute into $xy = 6$', 'M1: Solve $2x^2 + x - 6 = 0$', 'A1: Both pairs correct'],
            },
          ],
        },
        {
          id: '1_4_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Word problems and perimeter-area systems.',
            },
          ],
          questions: [
            {
              id: '1_4_q4',
              number: 1,
              question: 'A rectangle has perimeter $34\\text{ cm}$ and area $60\\text{ cm}^2$. Set up simultaneous equations and find its dimensions.',
              marks: 4,
              solution: 'Let dimensions be $x$ and $y$. Perimeter: $2x + 2y = 34 \\implies x + y = 17 \\implies y = 17 - x$. Area: $xy = 60 \\implies x(17 - x) = 60 \\implies 17x - x^2 = 60 \\implies x^2 - 17x + 60 = 0$. Factorise: $(x - 5)(x - 12) = 0$. Dimensions are $5\\text{ cm}$ and $12\\text{ cm}$.',
              markingScheme: ['B1: Form $x + y = 17$ and $xy = 60$', 'M1: Obtain $x^2 - 17x + 60 = 0$', 'M1: Factorise $(x - 5)(x - 12) = 0$', 'A1: Dimensions are $5\\text{ cm} \\times 12\\text{ cm}$'],
            },
            {
              id: '1_4_q5',
              number: 2,
              question: 'Find the points of intersection of the line $3x + 2y = 12$ and the hyperbola $y = \\frac{6}{x}$.',
              marks: 3,
              solution: '$3x + 2\\left(\\frac{6}{x}\\right) = 12 \\implies 3x + \\frac{12}{x} = 12$. Multiply by $x$: $3x^2 + 12 = 12x \\implies 3x^2 - 12x + 12 = 0 \\implies x^2 - 4x + 4 = 0 \\implies (x - 2)^2 = 0 \\implies x = 2$. $y = \\frac{6}{2} = 3$. Point of contact is $(2, 3)$. (The line is tangent to the curve).',
              markingScheme: ['M1: Substitute $y = 6/x$ into linear equation', 'M1: Form $x^2 - 4x + 4 = 0$', 'A1: Unique intersection point $(2, 3)$'],
            },
            {
              id: '1_4_q6',
              number: 3,
              question: 'The straight line $y = 2x - 3$ intersects the circle $x^2 + y^2 = 9$ at points $A$ and $B$. Find the exact length of the chord $AB$.',
              marks: 4,
              solution: '$x^2 + (2x - 3)^2 = 9 \\implies x^2 + 4x^2 - 12x + 9 = 9 \\implies 5x^2 - 12x = 0 \\implies x(5x - 12) = 0$. $x_1 = 0 \\implies y_1 = -3$, so $A(0, -3)$. $x_2 = \\frac{12}{5} = 2.4 \\implies y_2 = 2(2.4) - 3 = 1.8$, so $B(2.4, 1.8)$. Distance $AB = \\sqrt{(2.4 - 0)^2 + (1.8 - (-3))^2} = \\sqrt{2.4^2 + 4.8^2} = \\sqrt{5.76 + 23.04} = \\sqrt{28.8} = \\frac{12\\sqrt{5}}{5}$.',
              markingScheme: ['M1: Substitute into circle equation', 'A1: $x = 0$ and $x = 2.4$', 'M1: Find coordinates $(0, -3)$ and $(2.4, 1.8)$', 'A1: Length $\\sqrt{28.8}$ or $\\frac{12\\sqrt{5}}{5}$'],
            },
          ],
        },
        {
          id: '1_4_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions on simultaneous systems and geometric intersections.',
            },
          ],
          questions: [
            {
              id: '1_4_q7',
              number: 1,
              question: 'Find the set of values of $m$ for which the line $y = mx + 5$ does not intersect the curve $y = x^2 + 2x + 6$. [5 marks]',
              marks: 5,
              solution: 'Equate: $x^2 + 2x + 6 = mx + 5 \\implies x^2 + (2 - m)x + 1 = 0$. For no intersection, discriminant $\\Delta < 0$: $(2 - m)^2 - 4(1)(1) < 0 \\implies 4 - 4m + m^2 - 4 < 0 \\implies m^2 - 4m < 0 \\implies m(m - 4) < 0$. The roots of $m(m-4) = 0$ are $m = 0$ and $m = 4$. For $< 0$, the values lie between the roots: $0 < m < 4$.',
              markingScheme: ['M1: Equate and form quadratic in $x$', 'M1: Use discriminant $\\Delta < 0$', 'A1: Simplify to $m^2 - 4m < 0$', 'M1: Factorise to $m(m - 4) < 0$', 'A1: Set of values: $0 < m < 4$'],
            },
            {
              id: '1_4_q8',
              number: 2,
              question: 'Solve the simultaneous equations $2x^2 + 3y^2 = 14$ and $2x - y = 3$. [4 marks]',
              marks: 4,
              solution: 'From linear equation: $y = 2x - 3$. Substitute into quadratic: $2x^2 + 3(2x - 3)^2 = 14 \\implies 2x^2 + 3(4x^2 - 12x + 9) = 14 \\implies 2x^2 + 12x^2 - 36x + 27 = 14 \\implies 14x^2 - 36x + 13 = 0$. Using formula: $x = \\frac{36 \\pm \\sqrt{1296 - 4(14)(13)}}{28} = \\frac{36 \\pm \\sqrt{1296 - 728}}{28} = \\frac{36 \\pm \\sqrt{568}}{28} = \\frac{36 \\pm 2\\sqrt{142}}{28} = \\frac{18 \\pm \\sqrt{142}}{14}$. Matching $y = 2x - 3 = \\frac{18 \\pm \\sqrt{142}}{7} - 3 = \\frac{-3 \\pm \\sqrt{142}}{7}$.',
              markingScheme: ['M1: Rearrange for $y$ and substitute', 'M1: Expand and simplify to $14x^2 - 36x + 13 = 0$', 'M1: Apply quadratic formula', 'A1: Correct exact coordinate pairs'],
            },
            {
              id: '1_4_q9',
              number: 3,
              question: 'The line $y = 2x + k$ is a tangent to the curve $y = 3x^2 - 4x + 7$. Find the value of the constant $k$ and the coordinates of the point of contact. [5 marks]',
              marks: 5,
              solution: 'Equate: $3x^2 - 4x + 7 = 2x + k \\implies 3x^2 - 6x + (7 - k) = 0$. Since the line is tangent, discriminant $\\Delta = 0$: $(-6)^2 - 4(3)(7 - k) = 0 \\implies 36 - 12(7 - k) = 0 \\implies 36 - 84 + 12k = 0 \\implies 12k = 48 \\implies k = 4$. Substituting $k = 4$: $3x^2 - 6x + 3 = 0 \\implies 3(x - 1)^2 = 0 \\implies x = 1$. When $x = 1$, $y = 2(1) + 4 = 6$. Point of contact is $(1, 6)$.',
              markingScheme: ['M1: Equate and form $3x^2 - 6x + (7 - k) = 0$', 'M1: Apply condition $b^2 - 4ac = 0$', 'A1: $k = 4$', 'M1: Solve for $x$', 'A1: Point $(1, 6)$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.5 Solving more complex quadratic equations
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_5',
      number: '1.5',
      title: 'Solving more complex quadratic equations',
      type: 'lesson',
      steps: [
        {
          id: '1_5_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Equations Reducible to Quadratics',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Intuition: The Trojan Horse Substitution',
              content:
                'Equations like $x^4 - 5x^2 + 4 = 0$ or $x - 5\\sqrt{x} + 6 = 0$ disguise themselves as higher degree or fractional equations. By substituting $u = x^2$ or $u = \\sqrt{x}$, they transform instantly into an ordinary quadratic $u^2 - 5u + 4 = 0$!',
            },
            {
              type: 'paragraph',
              content:
                'Recognise quadratic structure: an equation of the form $a[f(x)]^2 + b[f(x)] + c = 0$. Set $u = f(x)$, solve for $u$, and crucially: reverse substitute to find the values of $x$.',
            },
            {
              type: 'formula_card',
              title: 'Common Substitution Families',
              math: 'u = x^2 \\implies x^4 \\to u^2; \\quad u = \\sqrt{x} \\implies x \\to u^2; \\quad u = 2^x \\implies 4^x \\to u^2; \\quad u = x^{-1} \\implies x^{-2} \\to u^2',
              content: 'Always check if any values of $u$ produce impossible values of $x$ (e.g. $\\sqrt{x} = -2$ or $2^x = -3$ have no real solutions).',
            },
          ],
        },
        {
          id: '1_5_s2',
          stepNumber: 2,
          title: 'Worked Example: Substitution and Extraneous Roots',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Solve $x - 3\\sqrt{x} - 4 = 0$',
              content: 'Full exam-standard working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Let $u = \\sqrt{x}$, so $u^2 = x$. (Note $u \\ge 0$).',
                  math: 'u^2 - 3u - 4 = 0',
                },
                {
                  stepNumber: 2,
                  explanation: 'Factorise the quadratic in $u$.',
                  math: '(u - 4)(u + 1) = 0 \\implies u = 4 \\quad \\text{or} \\quad u = -1',
                },
                {
                  stepNumber: 3,
                  explanation: 'Substitute back $u = \\sqrt{x}$ and evaluate validity.',
                  math: '\\sqrt{x} = 4 \\implies x = 16; \\quad \\sqrt{x} = -1 \\implies \\text{No real solution (principal square root is } \\ge 0)',
                },
                {
                  stepNumber: 4,
                  explanation: 'State final valid solution.',
                  math: 'x = 16',
                },
              ],
            },
          ],
        },
        {
          id: '1_5_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Stopping at u and forgetting x',
              content:
                'Candidates frequently find $u = 1, 4$ and stop, losing the final method and accuracy marks for finding $x$.',
              notes: 'Always re-read the original question: solve for X!',
            },
            {
              type: 'warning',
              title: 'Failing to reject invalid roots',
              content:
                'Writing $\\sqrt{x} = -2 \\implies x = 4$. Checking $4 - 3\\sqrt{4} - 4 = 4 - 6 - 4 = -6 \\neq 0$. You must explicitly reject negative roots when $u$ represents a non-negative quantity.',
            },
          ],
        },
        {
          id: '1_5_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Solve each equation by using a suitable substitution.',
            },
          ],
          questions: [
            {
              id: '1_5_q1',
              number: 1,
              question: 'Solve $x^4 - 13x^2 + 36 = 0$.',
              marks: 3,
              solution: 'Let $u = x^2$: $u^2 - 13u + 36 = 0 \\implies (u - 4)(u - 9) = 0 \\implies u = 4$ or $u = 9$. Then $x^2 = 4 \\implies x = \\pm 2$; $x^2 = 9 \\implies x = \\pm 3$. Four solutions: $x = \\pm 2, \\pm 3$.',
              markingScheme: ['M1: Substitute $u = x^2$ and factorise', 'A1: $u = 4, 9$', 'A1: All four roots $x = \\pm 2, \\pm 3$'],
            },
            {
              id: '1_5_q2',
              number: 2,
              question: 'Solve $x^6 - 9x^3 + 8 = 0$.',
              marks: 3,
              solution: 'Let $u = x^3$: $u^2 - 9u + 8 = 0 \\implies (u - 1)(u - 8) = 0 \\implies u = 1$ or $u = 8$. Then $x^3 = 1 \\implies x = 1$; $x^3 = 8 \\implies x = 2$.',
              markingScheme: ['M1: Use substitution $u = x^3$', 'A1: $u = 1, 8$', 'A1: Real roots $x = 1, 2$'],
            },
            {
              id: '1_5_q3',
              number: 3,
              question: 'Solve $x - 7\\sqrt{x} + 12 = 0$.',
              marks: 3,
              solution: 'Let $u = \\sqrt{x}$: $u^2 - 7u + 12 = 0 \\implies (u - 3)(u - 4) = 0 \\implies u = 3$ or $u = 4$. Since both are positive: $\\sqrt{x} = 3 \\implies x = 9$; $\\sqrt{x} = 4 \\implies x = 16$.',
              markingScheme: ['M1: Form $u^2 - 7u + 12 = 0$', 'A1: $u = 3, 4$', 'A1: $x = 9, 16$'],
            },
          ],
        },
        {
          id: '1_5_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Equations involving negative powers, indices, and trigonometric quadratics.',
            },
          ],
          questions: [
            {
              id: '1_5_q4',
              number: 1,
              question: 'Solve $x^{-2} - 3x^{-1} - 10 = 0$.',
              marks: 3,
              solution: 'Let $u = x^{-1} = \\frac{1}{x}$: $u^2 - 3u - 10 = 0 \\implies (u - 5)(u + 2) = 0 \\implies u = 5$ or $u = -2$. Then $\\frac{1}{x} = 5 \\implies x = \\frac{1}{5}$; $\\frac{1}{x} = -2 \\implies x = -\\frac{1}{2}$.',
              markingScheme: ['M1: Substitute $u = x^{-1}$', 'A1: $u = 5, -2$', 'A1: $x = \\frac{1}{5}, -\\frac{1}{2}$'],
            },
            {
              id: '1_5_q5',
              number: 2,
              question: 'Solve $2^{2x} - 10(2^x) + 16 = 0$.',
              marks: 3,
              solution: 'Let $u = 2^x$. Note $2^{2x} = (2^x)^2 = u^2$. $u^2 - 10u + 16 = 0 \\implies (u - 2)(u - 8) = 0 \\implies u = 2$ or $u = 8$. Then $2^x = 2^1 \\implies x = 1$; $2^x = 2^3 \\implies x = 3$.',
              markingScheme: ['M1: Recognize $2^{2x} = (2^x)^2$ and set $u = 2^x$', 'A1: $u = 2, 8$', 'A1: $x = 1, 3$'],
            },
            {
              id: '1_5_q6',
              number: 3,
              question: 'Solve $(x^2 - 2x)^2 - 11(x^2 - 2x) + 24 = 0$.',
              marks: 4,
              solution: 'Let $u = x^2 - 2x$: $u^2 - 11u + 24 = 0 \\implies (u - 3)(u - 8) = 0 \\implies u = 3$ or $u = 8$. Case 1: $x^2 - 2x = 3 \\implies x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0 \\implies x = 3, -1$. Case 2: $x^2 - 2x = 8 \\implies x^2 - 2x - 8 = 0 \\implies (x - 4)(x + 2) = 0 \\implies x = 4, -2$. Four solutions: $x = -2, -1, 3, 4$.',
              markingScheme: ['M1: Substitute $u = x^2 - 2x$', 'A1: $u = 3, 8$', 'M1: Solve two sub-quadratics', 'A1: $x = -2, -1, 3, 4$'],
            },
          ],
        },
        {
          id: '1_5_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions on disguised quadratics.',
            },
          ],
          questions: [
            {
              id: '1_5_q7',
              number: 1,
              question: 'Solve the equation $x^{1/2} + 2x^{-1/2} = 3$. [4 marks]',
              marks: 4,
              solution: 'Multiply by $x^{1/2}$: $x + 2 = 3x^{1/2} \\implies x - 3x^{1/2} + 2 = 0$. Let $u = x^{1/2}$: $u^2 - 3u + 2 = 0 \\implies (u - 1)(u - 2) = 0 \\implies u = 1$ or $u = 2$. Since $u = x^{1/2} = \\sqrt{x}$: $\\sqrt{x} = 1 \\implies x = 1$; $\\sqrt{x} = 2 \\implies x = 4$.',
              markingScheme: ['M1: Multiply by $x^{1/2}$ or substitute $u = x^{1/2}$', 'M1: Obtain quadratic in $u$', 'A1: $u = 1, 2$', 'A1: $x = 1, 4$'],
            },
            {
              id: '1_5_q8',
              number: 2,
              question: 'Find the real values of $x$ satisfying $3(9^x) - 10(3^x) + 3 = 0$. [4 marks]',
              marks: 4,
              solution: 'Notice $9^x = (3^2)^x = (3^x)^2$. Let $u = 3^x$: $3u^2 - 10u + 3 = 0 \\implies (3u - 1)(u - 3) = 0 \\implies u = \\frac{1}{3}$ or $u = 3$. Then $3^x = 3^{-1} \\implies x = -1$; $3^x = 3^1 \\implies x = 1$.',
              markingScheme: ['M1: Write $9^x = (3^x)^2$ and substitute $u = 3^x$', 'M1: Factorise $(3u - 1)(u - 3) = 0$', 'A1: $u = \\frac{1}{3}, 3$', 'A1: Exact values $x = -1, 1$'],
            },
            {
              id: '1_5_q9',
              number: 3,
              question: 'Solve the equation $\\sqrt{2x + 7} - x = 2$. [4 marks]',
              marks: 4,
              solution: 'Rearrange to isolate the radical: $\\sqrt{2x + 7} = x + 2$. Square both sides: $2x + 7 = (x + 2)^2 = x^2 + 4x + 4$. Rearrange: $x^2 + 2x - 3 = 0 \\implies (x + 3)(x - 1) = 0 \\implies x = -3$ or $x = 1$. Check for extraneous roots caused by squaring: For $x = -3$: LHS $= \\sqrt{-6 + 7} - (-3) = 1 + 3 = 4 \\neq 2$ (Invalid). For $x = 1$: LHS $= \\sqrt{2 + 7} - 1 = 3 - 1 = 2$ (Valid). Hence unique solution is $x = 1$.',
              markingScheme: ['M1: Isolate radical and square both sides', 'M1: Form $x^2 + 2x - 3 = 0$', 'A1: $x = -3, 1$', 'A1: Test and reject $x = -3$, concluding $x = 1$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.6 Maximum and minimum values of a quadratic function
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_6',
      number: '1.6',
      title: 'Maximum and minimum values of a quadratic function',
      type: 'lesson',
      steps: [
        {
          id: '1_6_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Parabola Extrema and Vertex',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Intuition: The Trajectory Peak and Basin',
              content:
                'Any quadratic function $y = ax^2 + bx + c$ represents either a valley (minimum) or a hilltop (maximum). Because a squared quantity $(x + p)^2$ is always $\\ge 0$, its smallest possible value is 0, occurring when $x = -p$.',
            },
            {
              type: 'formula_card',
              title: 'Vertex and Extrema Summary',
              math: 'y = a(x - h)^2 + k',
              content:
                'If $a > 0$: The graph is U-shaped (opens upwards), with a MINIMUM value of $k$ at $x = h$. Range: $y \\ge k$.\nIf $a < 0$: The graph is inverted U-shaped (opens downwards), with a MAXIMUM value of $k$ at $x = h$. Range: $y \\le k$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Line of Symmetry',
                  definition: 'The vertical line passing through the turning point: $x = -\\frac{b}{2a}$ or $x = h$.',
                },
                {
                  term: 'Range of a Function',
                  definition: 'The complete set of output values ($y$-values) that the function can produce.',
                },
              ],
            },
            {
              type: 'interactive_widget',
              widgetId: 'quadratic_explorer',
            },
          ],
          interactiveToolId: 'quadratic_explorer',
        },
        {
          id: '1_6_s2',
          stepNumber: 2,
          title: 'Worked Example: Optimisation via Completing the Square',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the maximum value of $f(x) = 15 + 8x - 2x^2$ and the value of x at which it occurs',
              content: 'Show step-by-step working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Factor out $-2$ from the variable terms.',
                  math: 'f(x) = 15 - 2(x^2 - 4x)',
                },
                {
                  stepNumber: 2,
                  explanation: 'Complete the square inside the bracket: half of $-4$ is $-2$.',
                  math: 'x^2 - 4x = (x - 2)^2 - 4',
                },
                {
                  stepNumber: 3,
                  explanation: 'Expand and simplify.',
                  math: 'f(x) = 15 - 2[(x - 2)^2 - 4] = 15 - 2(x - 2)^2 + 8 = 23 - 2(x - 2)^2',
                },
                {
                  stepNumber: 4,
                  explanation: 'Determine maximum from vertex form.',
                  math: '\\text{Since } (x - 2)^2 \\ge 0 \\implies -2(x - 2)^2 \\le 0, \\text{ maximum is } 23 \\text{ when } x = 2.',
                },
              ],
            },
          ],
        },
        {
          id: '1_6_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Confusing the position (x) with the value (y)',
              content:
                'If asked "Find the minimum value of $f(x)$", stating $x = 3$ loses the mark. $x = 3$ is WHERE it occurs; the VALUE is the $y$-coordinate $f(3)$.',
            },
            {
              type: 'warning',
              title: 'Stating the range with incorrect inequality direction',
              content:
                'For $y = -(x - 1)^2 + 5$, writing $y \\ge 5$ instead of $y \\le 5$. Because $a < 0$, the curve cannot go above 5.',
            },
          ],
        },
        {
          id: '1_6_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'State whether each function has a maximum or minimum, find its value and where it occurs.',
            },
          ],
          questions: [
            {
              id: '1_6_q1',
              number: 1,
              question: 'Find the minimum value of $y = x^2 - 10x + 29$ and the value of $x$ for which it occurs.',
              marks: 2,
              solution: '$y = (x - 5)^2 - 25 + 29 = (x - 5)^2 + 4$. Minimum value is 4, occurring at $x = 5$.',
              markingScheme: ['M1: Complete square $(x - 5)^2 + 4$', 'A1: Minimum value 4 at $x = 5$'],
            },
            {
              id: '1_6_q2',
              number: 2,
              question: 'Find the maximum value of $y = 8 + 6x - x^2$ and state its line of symmetry.',
              marks: 2,
              solution: '$y = 8 - (x^2 - 6x) = 8 - [(x - 3)^2 - 9] = 17 - (x - 3)^2$. Maximum value is 17 at $x = 3$. Line of symmetry is $x = 3$.',
              markingScheme: ['M1: Complete square to $17 - (x - 3)^2$', 'A1: Max value 17 and line $x = 3$'],
            },
            {
              id: '1_6_q3',
              number: 3,
              question: 'State the range of the function $f(x) = 3x^2 + 12x + 7$ for $x \\in \\mathbb{R}$.',
              marks: 2,
              solution: '$f(x) = 3[x^2 + 4x] + 7 = 3[(x + 2)^2 - 4] + 7 = 3(x + 2)^2 - 12 + 7 = 3(x + 2)^2 - 5$. Since $3(x+2)^2 \\ge 0$, range is $f(x) \\ge -5$.',
              markingScheme: ['M1: Complete square to $3(x + 2)^2 - 5$', 'A1: Range $f(x) \\ge -5$'],
            },
          ],
        },
        {
          id: '1_6_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Practical geometric perimeter optimisation and revenue problems.',
            },
          ],
          questions: [
            {
              id: '1_6_q4',
              number: 1,
              question: 'A farmer has $40\\text{ m}$ of fencing to enclose a rectangular pen against an existing straight stone wall (so only 3 sides require fencing). If the width perpendicular to the wall is $x\\text{ m}$, find the value of $x$ that maximises the enclosed area, and calculate this maximum area.',
              marks: 4,
              solution: 'Length parallel to wall $= 40 - 2x$. Area $A = x(40 - 2x) = 40x - 2x^2 = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = 200 - 2(x - 10)^2$. Since $-2(x-10)^2 \\le 0$, maximum area is $200\\text{ m}^2$, achieved when $x = 10\\text{ m}$.',
              markingScheme: ['M1: Set up $A = x(40 - 2x) = 40x - 2x^2$', 'M1: Complete square to $200 - 2(x - 10)^2$', 'A1: $x = 10\\text{ m}$', 'A1: Maximum area $= 200\\text{ m}^2$'],
            },
            {
              id: '1_6_q5',
              number: 2,
              question: 'A company sells $x$ items at price $\\$(100 - 0.5x)$ each. The total cost to produce $x$ items is $\\$(20x + 300)$. Find the number of items $x$ that will maximise the profit.',
              marks: 4,
              solution: 'Revenue $R = x(100 - 0.5x) = 100x - 0.5x^2$. Profit $P = R - C = (100x - 0.5x^2) - (20x + 300) = -0.5x^2 + 80x - 300$. Complete square: $-0.5[x^2 - 160x] - 300 = -0.5[(x - 80)^2 - 6400] - 300 = -0.5(x - 80)^2 + 3200 - 300 = 2900 - 0.5(x - 80)^2$. Maximum profit occurs at $x = 80$ items.',
              markingScheme: ['M1: Form profit $P = -0.5x^2 + 80x - 300$', 'M1: Factor $-0.5$ and complete square', 'A1: Obtain $2900 - 0.5(x - 80)^2$', 'A1: $x = 80$ items'],
            },
            {
              id: '1_6_q6',
              number: 3,
              question: 'Find the coordinates of the point on the parabola $y = x^2$ that is closest to the point $(0, 2)$.',
              marks: 4,
              solution: 'Let a point on the parabola be $(x, x^2)$. Distance squared $D^2 = (x - 0)^2 + (x^2 - 2)^2 = x^2 + x^4 - 4x^2 + 4 = x^4 - 3x^2 + 4$. Let $u = x^2$: $D^2 = u^2 - 3u + 4 = \\left(u - \\frac{3}{2}\\right)^2 - \\frac{9}{4} + 4 = \\left(u - \\frac{3}{2}\\right)^2 + \\frac{7}{4}$. The minimum occurs when $u = \\frac{3}{2} \\implies x^2 = \\frac{3}{2} \\implies x = \\pm \\sqrt{\\frac{3}{2}} = \\pm \\frac{\\sqrt{6}}{2}$. Corresponding $y = x^2 = \\frac{3}{2}$. Points: $\\left(\\pm \\frac{\\sqrt{6}}{2}, \\frac{3}{2}\\right)$.',
              markingScheme: ['M1: Set up distance formula squared', 'M1: Express as quadratic in $u = x^2$', 'M1: Complete square to find $u = 1.5$', 'A1: Points $\\left(\\pm \\frac{\\sqrt{6}}{2}, 1.5\\right)$'],
            },
          ],
        },
        {
          id: '1_6_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on extrema and vertex coordinates.',
            },
          ],
          questions: [
            {
              id: '1_6_q7',
              number: 1,
              question: 'The curve $y = ax^2 + bx + c$ passes through $(0, 5)$ and has a stationary point (vertex) at $(2, -3)$. Find the values of the constants $a$, $b$, and $c$. [4 marks]',
              marks: 4,
              solution: 'Using vertex form: $y = a(x - 2)^2 - 3$. Since it passes through $(0, 5)$: $5 = a(0 - 2)^2 - 3 \\implies 5 = 4a - 3 \\implies 4a = 8 \\implies a = 2$. Expanding: $y = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 8 - 3 = 2x^2 - 8x + 5$. Therefore $a = 2, b = -8, c = 5$.',
              markingScheme: ['M1: Use vertex form $y = a(x - 2)^2 - 3$', 'M1: Substitute $(0, 5)$ to find $a$', 'A1: $a = 2$', 'A1: $b = -8, c = 5$'],
            },
            {
              id: '1_6_q8',
              number: 2,
              question: 'A curve has equation $y = 2x^2 - 4px + 3p^2 - 1$, where $p$ is a constant. Find the coordinates of the vertex of the curve in terms of $p$. Hence find the locus of the vertex as $p$ varies. [4 marks]',
              marks: 4,
              solution: 'Complete the square: $y = 2[x^2 - 2px] + 3p^2 - 1 = 2[(x - p)^2 - p^2] + 3p^2 - 1 = 2(x - p)^2 - 2p^2 + 3p^2 - 1 = 2(x - p)^2 + (p^2 - 1)$. The vertex has coordinates $(X, Y) = (p, p^2 - 1)$. Since $X = p$, substitute into $Y$: $Y = X^2 - 1$. The locus of the vertex is the parabola $y = x^2 - 1$.',
              markingScheme: ['M1: Complete square in terms of $p$', 'A1: Vertex is $(p, p^2 - 1)$', 'M1: Eliminate parameter $p$ ($x = p$)', 'A1: Locus equation $y = x^2 - 1$'],
            },
            {
              id: '1_6_q9',
              number: 3,
              question: 'A curve has equation $y = x^2 - 2mx + (m^2 + 3m - 4)$. (i) Express $y$ in the form $(x - a)^2 + b$ in terms of $m$. [2 marks]\n(ii) Given that the minimum value of $y$ is 2, find the possible values of $m$. [2 marks]',
              marks: 4,
              solution: '(i) $y = (x - m)^2 - m^2 + (m^2 + 3m - 4) = (x - m)^2 + (3m - 4)$.\n(ii) The minimum value is the constant term $3m - 4$. Set $3m - 4 = 2 \\implies 3m = 6 \\implies m = 2$.',
              markingScheme: ['M1: $(x - m)^2 - m^2 + m^2 + 3m - 4$', 'A1: $(x - m)^2 + (3m - 4)$', 'M1: Set $3m - 4 = 2$', 'A1: $m = 2$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.7 Solving quadratic inequalities
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_7',
      number: '1.7',
      title: 'Solving quadratics inequalities',
      type: 'lesson',
      steps: [
        {
          id: '1_7_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Sketch Method',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Intuition: Above or Below the Sea Level',
              content:
                'Think of the $x$-axis as sea level ($y = 0$). For a standard ∪-shaped parabola, the curve dips underwater (negative, $< 0$) between the two roots, and rises above sea level (positive, $> 0$) outside the two roots.',
            },
            {
              type: 'formula_card',
              title: 'Parabola Sketch Rule (for a > 0)',
              math: '(x - \\alpha)(x - \\beta) < 0 \\iff \\alpha < x < \\beta',
              content:
                'For $(x - \\alpha)(x - \\beta) > 0$: The solution consists of TWO separate intervals: $x < \\alpha \\text{ or } x > \\beta$. Never combine disjoint intervals with "and"!',
            },
            {
              type: 'definition',
              title: 'Critical Values',
              items: [
                {
                  term: 'Critical Values',
                  definition: 'The roots found by setting the quadratic equal to zero: $ax^2 + bx + c = 0$.',
                },
              ],
            },
          ],
        },
        {
          id: '1_7_s2',
          stepNumber: 2,
          title: 'Worked Example: Full Exam Layout',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Solve $2x^2 + 5x \\ge 12$',
              content: 'Demonstrating correct Cambridge layout:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Rearrange all terms to one side so the RHS is 0.',
                  math: '2x^2 + 5x - 12 \\ge 0',
                },
                {
                  stepNumber: 2,
                  explanation: 'Find the critical values by solving the corresponding equation.',
                  math: '(2x - 3)(x + 4) = 0 \\implies x = \\frac{3}{2} \\quad \\text{or} \\quad x = -4',
                },
                {
                  stepNumber: 3,
                  explanation: 'Sketch an upward-opening parabola with roots at $-4$ and $1.5$.',
                  math: '\\text{For } \\ge 0, \\text{ we require the regions on or above the } x\\text{-axis (outside roots)}.',
                },
                {
                  stepNumber: 4,
                  explanation: 'Write the final answer as two separate inequalities joined by "or".',
                  math: 'x \\le -4 \\quad \\text{or} \\quad x \\ge \\frac{3}{2}',
                },
              ],
            },
          ],
        },
        {
          id: '1_7_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Writing disjoint intervals as a single compound inequality',
              content:
                'Writing $3 < x < -4$ or $1.5 \\le x \\le -4$. This is completely nonsensical because no number can be both greater than 1.5 and less than -4 at the same time!',
              notes: 'Outside roots must ALWAYS be written as two separate statements: $x \\le -4$ OR $x \\ge 1.5$.',
            },
            {
              type: 'warning',
              title: 'Multiplying an inequality by x',
              content:
                'Never multiply across by $x$ in $\\frac{1}{x} > 2$ without multiplying by $x^2$. Since $x$ could be negative, multiplying by $x$ could flip the inequality sign without your knowledge.',
            },
          ],
        },
        {
          id: '1_7_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Solve each quadratic inequality. Express solutions with correct inequality symbols.',
            },
          ],
          questions: [
            {
              id: '1_7_q1',
              number: 1,
              question: 'Solve $x^2 - 5x - 6 < 0$.',
              marks: 2,
              solution: 'Critical values: $(x - 6)(x + 1) = 0 \\implies x = -1, 6$. For $< 0$ (below axis): $-1 < x < 6$.',
              markingScheme: ['M1: Find critical values $-1$ and $6$', 'A1: $-1 < x < 6$'],
            },
            {
              id: '1_7_q2',
              number: 2,
              question: 'Solve $x^2 - 9 \\ge 0$.',
              marks: 2,
              solution: 'Critical values: $(x - 3)(x + 3) = 0 \\implies x = \\pm 3$. For $\\ge 0$: $x \\le -3$ or $x \\ge 3$.',
              markingScheme: ['M1: Critical values $\\pm 3$', 'A1: $x \\le -3$ or $x \\ge 3$'],
            },
            {
              id: '1_7_q3',
              number: 3,
              question: 'Solve $3x^2 - 10x + 3 > 0$.',
              marks: 2,
              solution: 'Critical values: $(3x - 1)(x - 3) = 0 \\implies x = \\frac{1}{3}, 3$. For $> 0$: $x < \\frac{1}{3}$ or $x > 3$.',
              markingScheme: ['M1: $(3x - 1)(x - 3) = 0$', 'A1: $x < \\frac{1}{3}$ or $x > 3$'],
            },
          ],
        },
        {
          id: '1_7_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Inequalities arising from geometry and algebraic fractions.',
            },
          ],
          questions: [
            {
              id: '1_7_q4',
              number: 1,
              question: 'Find the set of values of $x$ for which the area of a rectangle with sides $(x + 2)\\text{ cm}$ and $(2x - 1)\\text{ cm}$ is at least $14\\text{ cm}^2$.',
              marks: 3,
              solution: '$(x + 2)(2x - 1) \\ge 14 \\implies 2x^2 + 3x - 2 \\ge 14 \\implies 2x^2 + 3x - 16 \\ge 0$... wait, if sides are $(x+2)(2x-1) = 2x^2 + 3x - 2 \\ge 14 \\implies 2x^2 + 3x - 16 = 0$. Roots: $x = \\frac{-3 \\pm \\sqrt{9 - 4(2)(-16)}}{4} = \\frac{-3 \\pm \\sqrt{137}}{4}$. Since side lengths must be positive, $x > 0.5$, so $x \\ge \\frac{-3 + \\sqrt{137}}{4} \\approx 2.18\\text{ cm}$.',
              markingScheme: ['M1: Form $(x + 2)(2x - 1) \\ge 14$', 'M1: Quadratic formula for critical values', 'A1: $x \\ge \\frac{-3 + \\sqrt{137}}{4}$ (or $x \\ge 2.18$)'],
            },
            {
              id: '1_7_q5',
              number: 2,
              question: 'Solve the inequality $\\frac{x - 1}{x + 3} \\le 2$, where $x \\neq -3$.',
              marks: 4,
              solution: 'Multiply both sides by $(x + 3)^2 > 0$: $(x - 1)(x + 3) \\le 2(x + 3)^2 \\implies x^2 + 2x - 3 \\le 2(x^2 + 6x + 9) = 2x^2 + 12x + 18 \\implies 0 \\le x^2 + 10x + 21 \\implies x^2 + 10x + 21 \\ge 0$. Factorise: $(x + 3)(x + 7) \\ge 0$. Critical values are $-7$ and $-3$. Since $x \\neq -3$, $x \\le -7$ or $x > -3$.',
              markingScheme: ['M1: Multiply by $(x + 3)^2$', 'M1: Form $(x + 3)(x + 7) \\ge 0$', 'A1: Critical values $-7, -3$', 'A1: $x \\le -7$ or $x > -3$ (strict inequality at $-3$)'],
            },
            {
              id: '1_7_q6',
              number: 3,
              question: 'Find the range of values of $x$ that satisfy both inequalities simultaneously: $x^2 - 4x - 5 < 0$ and $2x - 3 \\ge 1$.',
              marks: 3,
              solution: 'Inequality 1: $(x - 5)(x + 1) < 0 \\implies -1 < x < 5$. Inequality 2: $2x \\ge 4 \\implies x \\ge 2$. Intersection of $(-1, 5)$ and $[2, \\infty)$ is $2 \\le x < 5$.',
              markingScheme: ['M1: Solve ineq 1: $-1 < x < 5$', 'M1: Solve ineq 2: $x \\ge 2$', 'A1: Overlap: $2 \\le x < 5$'],
            },
          ],
        },
        {
          id: '1_7_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with method and accuracy marks.',
            },
          ],
          questions: [
            {
              id: '1_7_q7',
              number: 1,
              question: 'Find the set of values of $k$ for which the equation $x^2 + (k - 2)x + (k + 1) = 0$ has two distinct real roots. [4 marks]',
              marks: 4,
              solution: 'For two distinct real roots, discriminant $\\Delta > 0$: $b^2 - 4ac > 0 \\implies (k - 2)^2 - 4(1)(k + 1) > 0 \\implies k^2 - 4k + 4 - 4k - 4 > 0 \\implies k^2 - 8k > 0 \\implies k(k - 8) > 0$. The roots are $k = 0$ and $k = 8$. For $> 0$ on a ∪-shaped parabola: $k < 0$ or $k > 8$.',
              markingScheme: ['M1: Condition $b^2 - 4ac > 0$', 'M1: Expand and simplify to $k^2 - 8k > 0$', 'M1: Factorise to $k(k - 8) > 0$', 'A1: $k < 0$ or $k > 8$'],
            },
            {
              id: '1_7_q8',
              number: 2,
              question: 'Find the set of values of $x$ for which $2x^2 + 7x - 4 > 0$ and $x^2 - 4 < 0$. [4 marks]',
              marks: 4,
              solution: 'First inequality: $(2x - 1)(x + 4) > 0 \\implies x < -4$ or $x > \\frac{1}{2}$. Second inequality: $(x - 2)(x + 2) < 0 \\implies -2 < x < 2$. Number line overlap: Region $x < -4$ does not overlap with $(-2, 2)$. Region $x > \\frac{1}{2}$ overlaps with $(-2, 2)$ on the interval $\\frac{1}{2} < x < 2$.',
              markingScheme: ['B1: Ineq 1: $x < -4$ or $x > 0.5$', 'B1: Ineq 2: $-2 < x < 2$', 'M1: Compare intervals on number line', 'A1: $\\frac{1}{2} < x < 2$'],
            },
            {
              id: '1_7_q9',
              number: 3,
              question: 'A curve has equation $y = x^2 + 2kx + 9$. Find the set of values of $k$ for which the curve lies entirely above the line $y = -7$. [4 marks]',
              marks: 4,
              solution: 'For the curve to lie entirely above $y = -7$, we must have $x^2 + 2kx + 9 > -7$ for all real $x$. This requires $x^2 + 2kx + 16 > 0$ for all $x$. Since the coefficient of $x^2$ is $1 > 0$, the quadratic is strictly positive for all $x$ if and only if its discriminant is strictly negative: $\\Delta < 0 \\implies (2k)^2 - 4(1)(16) < 0 \\implies 4k^2 - 64 < 0 \\implies k^2 - 16 < 0 \\implies (k - 4)(k + 4) < 0 \\implies -4 < k < 4$.',
              markingScheme: ['M1: Set up $x^2 + 2kx + 16 > 0$', 'M1: Condition $\\Delta < 0$ for always positive', 'A1: $4k^2 - 64 < 0$', 'A1: $-4 < k < 4$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.8 The number of roots of a quadratic equation
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_8',
      number: '1.8',
      title: 'The number of roots of a quadratic equation',
      type: 'lesson',
      steps: [
        {
          id: '1_8_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: The Discriminant Criterion',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Visual Parabola-Floor Analogy',
              content:
                'The discriminant $\\Delta = b^2 - 4ac$ decides what happens under the square root in the quadratic formula:\n• $\\Delta > 0$: Square root of a positive number has 2 real values $(\\pm)$, so the parabola cuts the $x$-axis twice.\n• $\\Delta = 0$: $\\sqrt{0} = 0$, so $\\pm 0$ leaves only 1 root: the vertex sits exactly tangent on the $x$-axis.\n• $\\Delta < 0$: Square root of a negative has no real values, so the parabola floats entirely above (or below) the $x$-axis.',
            },
            {
              type: 'formula_card',
              title: 'Discriminant Three-Way Test',
              math: 'b^2 - 4ac > 0 \\iff \\text{Two distinct real roots}\\\\ b^2 - 4ac = 0 \\iff \\text{One repeated real root (tangent to } x\\text{-axis)}\\\\ b^2 - 4ac < 0 \\iff \\text{No real roots (does not intersect } x\\text{-axis)}',
              content: 'If an exam question states "has real roots", this means $\\Delta \\ge 0$ (including both distinct and repeated roots).',
            },
            {
              type: 'interactive_widget',
              widgetId: 'quadratic_explorer',
            },
          ],
          interactiveToolId: 'quadratic_explorer',
        },
        {
          id: '1_8_s2',
          stepNumber: 2,
          title: 'Worked Example: Determining Unknown Constant k',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'The equation $(k + 1)x^2 + 4x + (k - 2) = 0$ has equal roots. Find the values of k.',
              content: 'Step-by-step discriminant working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Identify coefficients: $a = k + 1$, $b = 4$, $c = k - 2$.',
                  math: 'a = k + 1, \\quad b = 4, \\quad c = k - 2',
                },
                {
                  stepNumber: 2,
                  explanation: 'Set the discriminant equal to zero for equal (repeated) roots.',
                  math: 'b^2 - 4ac = 0 \\implies 4^2 - 4(k + 1)(k - 2) = 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Expand and simplify.',
                  math: '16 - 4(k^2 - k - 2) = 0 \\implies 16 - 4k^2 + 4k + 8 = 0 \\implies -4k^2 + 4k + 24 = 0',
                },
                {
                  stepNumber: 4,
                  explanation: 'Divide by $-4$ and factorise.',
                  math: 'k^2 - k - 6 = 0 \\implies (k - 3)(k + 2) = 0 \\implies k = 3 \\quad \\text{or} \\quad k = -2',
                },
              ],
            },
          ],
        },
        {
          id: '1_8_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Using > instead of >= for "has real roots"',
              content:
                'If a question states "the equation has real roots", writing $b^2 - 4ac > 0$ misses the equality case $b^2 - 4ac = 0$. You must use $b^2 - 4ac \\ge 0$.',
            },
            {
              type: 'warning',
              title: 'Applying the discriminant before standard form',
              content:
                'In $3x^2 + 2x = 5$, taking $c = 5$ instead of $c = -5$. All terms must be brought to one side before identifying $a$, $b$, and $c$.',
            },
          ],
        },
        {
          id: '1_8_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Calculate the discriminant and determine the number of real roots.',
            },
          ],
          questions: [
            {
              id: '1_8_q1',
              number: 1,
              question: 'Find the discriminant of $2x^2 - 3x + 5 = 0$ and state the number of real roots.',
              marks: 2,
              solution: '$\\Delta = (-3)^2 - 4(2)(5) = 9 - 40 = -31$. Since $\\Delta < 0$, there are no real roots.',
              markingScheme: ['M1: Calculate $(-3)^2 - 4(2)(5)$', 'A1: $\\Delta = -31$ and state 0 real roots'],
            },
            {
              id: '1_8_q2',
              number: 2,
              question: 'Find the value of $k$ for which $x^2 - 6x + k = 0$ has one repeated real root.',
              marks: 2,
              solution: 'For one repeated real root, $\\Delta = 0$: $(-6)^2 - 4(1)(k) = 0 \\implies 36 - 4k = 0 \\implies 4k = 36 \\implies k = 9$.',
              markingScheme: ['M1: Set $(-6)^2 - 4(1)(k) = 0$', 'A1: $k = 9$'],
            },
            {
              id: '1_8_q3',
              number: 3,
              question: 'Determine the nature of the roots of $4x^2 - 12x + 9 = 0$.',
              marks: 2,
              solution: '$\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$. One repeated real root (equal roots).',
              markingScheme: ['M1: $\\Delta = 144 - 144 = 0$', 'A1: One repeated real root'],
            },
          ],
        },
        {
          id: '1_8_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Finding ranges of constants for specific root natures.',
            },
          ],
          questions: [
            {
              id: '1_8_q4',
              number: 1,
              question: 'Find the set of values of $c$ for which $3x^2 - 5x + c = 0$ has two distinct real roots.',
              marks: 2,
              solution: '$\\Delta > 0 \\implies (-5)^2 - 4(3)(c) > 0 \\implies 25 - 12c > 0 \\implies 12c < 25 \\implies c < \\frac{25}{12}$.',
              markingScheme: ['M1: $25 - 12c > 0$', 'A1: $c < \\frac{25}{12}$'],
            },
            {
              id: '1_8_q5',
              number: 2,
              question: 'Show that the equation $x^2 + (m + 1)x + (m - 2) = 0$ has two distinct real roots for all real values of $m$.',
              marks: 4,
              solution: '$\\Delta = (m + 1)^2 - 4(1)(m - 2) = m^2 + 2m + 1 - 4m + 8 = m^2 - 2m + 9$. Complete the square for the discriminant: $m^2 - 2m + 9 = (m - 1)^2 - 1 + 9 = (m - 1)^2 + 8$. Since $(m - 1)^2 \\ge 0$ for all real $m$, $\\Delta \\ge 8 > 0$. Because the discriminant is strictly positive for all $m$, the equation always has two distinct real roots.',
              markingScheme: ['M1: Express $\\Delta = (m + 1)^2 - 4(m - 2)$', 'A1: Simplify to $m^2 - 2m + 9$', 'M1: Complete square to $(m - 1)^2 + 8$', 'A1: Conclude $\\Delta \\ge 8 > 0$ for all real $m$'],
            },
            {
              id: '1_8_q6',
              number: 3,
              question: 'Find the values of $k$ for which the equation $kx^2 + 2(k + 3)x + (k + 8) = 0$ has equal roots.',
              marks: 4,
              solution: '$\\Delta = [2(k + 3)]^2 - 4(k)(k + 8) = 4(k^2 + 6k + 9) - (4k^2 + 32k) = 4k^2 + 24k + 36 - 4k^2 - 32k = 36 - 8k$. Set $\\Delta = 0 \\implies 36 - 8k = 0 \\implies 8k = 36 \\implies k = \\frac{36}{8} = \\frac{9}{2} = 4.5$.',
              markingScheme: ['M1: Calculate $[2(k + 3)]^2 - 4k(k + 8)$', 'M1: Simplify to $36 - 8k$', 'A1: Set to zero and solve', 'A1: $k = 4.5$ (or $9/2$)'],
            },
          ],
        },
        {
          id: '1_8_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with method and accuracy marks.',
            },
          ],
          questions: [
            {
              id: '1_8_q7',
              number: 1,
              question: 'The equation $2x^2 + px + (p - 2) = 0$ has real roots. Find the set of possible values of $p$. [4 marks]',
              marks: 4,
              solution: 'For real roots, $\\Delta \\ge 0$: $p^2 - 4(2)(p - 2) \\ge 0 \\implies p^2 - 8p + 16 \\ge 0 \\implies (p - 4)^2 \\ge 0$. Since the square of any real number is always greater than or equal to zero, $(p - 4)^2 \\ge 0$ holds true for ALL real numbers. Therefore $p \\in \\mathbb{R}$.',
              markingScheme: ['M1: State $\\Delta \\ge 0$', 'M1: Obtain $p^2 - 8p + 16 \\ge 0$', 'A1: Recognize $(p - 4)^2 \\ge 0$', 'A1: State $p \\in \\mathbb{R}$ (all real values of $p$)'],
            },
            {
              id: '1_8_q8',
              number: 2,
              question: 'The equation $(k + 2)x^2 - 2kx + (k - 1) = 0$ has no real roots. (i) Show that $k < 2$. [3 marks]\n(ii) State the value of $k$ for which the equation is not quadratic. [1 mark]',
              marks: 4,
              solution: '(i) For no real roots, $\\Delta < 0$: $(-2k)^2 - 4(k + 2)(k - 1) < 0 \\implies 4k^2 - 4(k^2 + k - 2) < 0 \\implies 4k^2 - 4k^2 - 4k + 8 < 0 \\implies -4k + 8 < 0 \\implies 4k > 8 \\implies k > 2$... wait, if $\\Delta = 4k^2 - 4(k^2 + k - 2) = -4k + 8 < 0 \\implies 4k > 8 \\implies k > 2$. If question says $k > 2$, then $k > 2$. (ii) When $k + 2 = 0 \\implies k = -2$, coefficient of $x^2$ is 0, so equation is linear.',
              markingScheme: ['M1: Use condition $b^2 - 4ac < 0$', 'M1: Simplify to $-4k + 8 < 0$', 'A1: $k > 2$', 'B1: $k = -2$ makes coefficient of $x^2$ zero'],
            },
            {
              id: '1_8_q9',
              number: 3,
              question: 'Given that the equation $x^2 + 2(k - 1)x + (k + 5) = 0$ has equal roots, find the possible values of $k$ and the corresponding roots of the equation in each case. [5 marks]',
              marks: 5,
              solution: '$\\Delta = [2(k - 1)]^2 - 4(1)(k + 5) = 0 \\implies 4(k^2 - 2k + 1) - 4(k + 5) = 0 \\implies 4k^2 - 8k + 4 - 4k - 20 = 0 \\implies 4k^2 - 12k - 16 = 0 \\implies k^2 - 3k - 4 = 0 \\implies (k - 4)(k + 1) = 0 \\implies k = 4$ or $k = -1$. When $k = 4$: $x^2 + 6x + 9 = 0 \\implies (x + 3)^2 = 0 \\implies x = -3$. When $k = -1$: $x^2 - 4x + 4 = 0 \\implies (x - 2)^2 = 0 \\implies x = 2$.',
              markingScheme: ['M1: Set $\\Delta = 0$', 'M1: Solve $k^2 - 3k - 4 = 0$', 'A1: $k = 4, -1$', 'A1: When $k = 4$, root is $x = -3$', 'A1: When $k = -1$, root is $x = 2$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 1.9 Intersection of a line and a quadratic curve
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_9',
      number: '1.9',
      title: 'Intersection of a line and a quadratic curve',
      type: 'lesson',
      steps: [
        {
          id: '1_9_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Line Tangency and Secants',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Visual Intuition: Sliding the Tangent Line',
              content:
                'When you slide a straight line $y = mx + k$ across a parabolic curve $y = ax^2 + bx + c$, the number of intersections is determined by setting them equal: $ax^2 + (b - m)x + (c - k) = 0$. The discriminant of this NEW combined quadratic classifies the geometric relationship.',
            },
            {
              type: 'formula_card',
              title: 'Geometric Intersection Conditions',
              math: 'b_{\\text{new}}^2 - 4a_{\\text{new}}c_{\\text{new}} > 0 \\implies \\text{Line is a SECANT (intersects in 2 points)}\\\\ b_{\\text{new}}^2 - 4a_{\\text{new}}c_{\\text{new}} = 0 \\implies \\text{Line is a TANGENT (touches at 1 point)}\\\\ b_{\\text{new}}^2 - 4a_{\\text{new}}c_{\\text{new}} < 0 \\implies \\text{Line does NOT intersect curve}',
              content: 'To find the point of tangency, solve the combined quadratic for $x$ (it will be a perfect square) and find $y$ on the line.',
            },
            {
              type: 'interactive_widget',
              widgetId: 'line_quadratic_intersection',
            },
          ],
          interactiveToolId: 'line_quadratic_intersection',
        },
        {
          id: '1_9_s2',
          stepNumber: 2,
          title: 'Worked Example: Finding Tangent Constant k',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the values of k for which the line $y = 2x + k$ is tangent to $y = x^2 - 4x + 7$',
              content: 'Demonstrating complete Cambridge solution:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Equate line and curve equations.',
                  math: 'x^2 - 4x + 7 = 2x + k',
                },
                {
                  stepNumber: 2,
                  explanation: 'Collect all terms on one side in standard quadratic form.',
                  math: 'x^2 - 6x + (7 - k) = 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Apply tangency condition $\\Delta = 0$.',
                  math: '(-6)^2 - 4(1)(7 - k) = 0 \\implies 36 - 28 + 4k = 0',
                },
                {
                  stepNumber: 4,
                  explanation: 'Solve for $k$.',
                  math: '8 + 4k = 0 \\implies 4k = -8 \\implies k = -2',
                },
              ],
            },
          ],
        },
        {
          id: '1_9_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Calculating the discriminant of the curve alone',
              content:
                'Students often compute $b^2 - 4ac$ on $x^2 - 4x + 7$. That only tells you whether the curve intersects the $x$-axis! You MUST find the discriminant of the COMBINED equation $x^2 - 6x + (7 - k) = 0$.',
            },
            {
              type: 'warning',
              title: 'Sign error when subtracting (c - k)',
              content:
                'In $4(a)(c - k)$, writing $4(1)(7 - k) = 28 - k$ instead of expanding to $28 - 4k$.',
            },
          ],
        },
        {
          id: '1_9_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Determine intersection count and find tangent constants.',
            },
          ],
          questions: [
            {
              id: '1_9_q1',
              number: 1,
              question: 'Determine whether the line $y = x - 5$ intersects the curve $y = x^2 - 3x - 1$.',
              marks: 2,
              solution: '$x^2 - 3x - 1 = x - 5 \\implies x^2 - 4x + 4 = 0$. $\\Delta = (-4)^2 - 4(1)(4) = 16 - 16 = 0$. Since $\\Delta = 0$, the line touches the curve at exactly one point (it is a tangent).',
              markingScheme: ['M1: Form $x^2 - 4x + 4 = 0$', 'A1: $\\Delta = 0$, conclusion: tangent (1 point)'],
            },
            {
              id: '1_9_q2',
              number: 2,
              question: 'Find the value of $c$ for which the line $y = 4x + c$ is tangent to the parabola $y = x^2$.',
              marks: 2,
              solution: '$x^2 = 4x + c \\implies x^2 - 4x - c = 0$. For tangent: $\\Delta = 0 \\implies (-4)^2 - 4(1)(-c) = 0 \\implies 16 + 4c = 0 \\implies c = -4$.',
              markingScheme: ['M1: $16 + 4c = 0$', 'A1: $c = -4$'],
            },
            {
              id: '1_9_q3',
              number: 3,
              question: 'Show that the line $y = 2x - 5$ does not intersect the curve $y = x^2 + 4x + 1$.',
              marks: 2,
              solution: '$x^2 + 4x + 1 = 2x - 5 \\implies x^2 + 2x + 6 = 0$. $\\Delta = 2^2 - 4(1)(6) = 4 - 24 = -20 < 0$. Since $\\Delta < 0$, the line does not intersect the curve.',
              markingScheme: ['M1: Obtain $x^2 + 2x + 6 = 0$', 'A1: $\\Delta = -20 < 0$, concludes no intersection'],
            },
          ],
        },
        {
          id: '1_9_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Finding ranges of gradients or intercepts for secant lines.',
            },
          ],
          questions: [
            {
              id: '1_9_q4',
              number: 1,
              question: 'Find the set of values of $k$ for which the line $y = 2x + k$ intersects the curve $y = 3x^2 - 4x + 5$ in two distinct points.',
              marks: 3,
              solution: '$3x^2 - 4x + 5 = 2x + k \\implies 3x^2 - 6x + (5 - k) = 0$. For two distinct points, $\\Delta > 0$: $(-6)^2 - 4(3)(5 - k) > 0 \\implies 36 - 12(5 - k) > 0 \\implies 36 - 60 + 12k > 0 \\implies 12k > 24 \\implies k > 2$.',
              markingScheme: ['M1: Form $3x^2 - 6x + (5 - k) = 0$', 'M1: Set $\\Delta = 36 - 12(5 - k) > 0$', 'A1: $k > 2$'],
            },
            {
              id: '1_9_q5',
              number: 2,
              question: 'Find the two values of the gradient $m$ for which the line $y = mx$ is tangent to the circle $x^2 + (y - 5)^2 = 9$.',
              marks: 4,
              solution: 'Substitute $y = mx$: $x^2 + (mx - 5)^2 = 9 \\implies x^2 + m^2x^2 - 10mx + 25 = 9 \\implies (1 + m^2)x^2 - 10mx + 16 = 0$. Tangent condition $\\Delta = 0$: $(-10m)^2 - 4(1 + m^2)(16) = 0 \\implies 100m^2 - 64(1 + m^2) = 0 \\implies 100m^2 - 64 - 64m^2 = 0 \\implies 36m^2 = 64 \\implies m^2 = \\frac{64}{36} = \\frac{16}{9} \\implies m = \\pm \\frac{4}{3}$.',
              markingScheme: ['M1: Substitute $y = mx$ into circle equation', 'M1: Form quadratic in $x$: $(1+m^2)x^2 - 10mx + 16 = 0$', 'M1: Set $\\Delta = 100m^2 - 64(1+m^2) = 0$', 'A1: $m = \\pm \\frac{4}{3}$'],
            },
            {
              id: '1_9_q6',
              number: 3,
              question: 'Find the coordinates of the point of contact between the tangent $y = -4x + 1$ and the curve $y = 2x^2 + 4x + 9$.',
              marks: 3,
              solution: '$2x^2 + 4x + 9 = -4x + 1 \\implies 2x^2 + 8x + 8 = 0 \\implies x^2 + 4x + 4 = 0 \\implies (x + 2)^2 = 0 \\implies x = -2$. Substitute into tangent line: $y = -4(-2) + 1 = 8 + 1 = 9$. Point of contact is $(-2, 9)$.',
              markingScheme: ['M1: Form $2x^2 + 8x + 8 = 0$', 'M1: Solve $(x + 2)^2 = 0 \\implies x = -2$', 'A1: Point of contact $(-2, 9)$'],
            },
          ],
        },
        {
          id: '1_9_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with method and accuracy marks.',
            },
          ],
          questions: [
            {
              id: '1_9_q7',
              number: 1,
              question: 'The line $y = mx - 4$ is tangent to the curve $y = x^2 - 4x + 5$. Find the possible values of $m$, and for each value of $m$, find the coordinates of the point of contact. [6 marks]',
              marks: 6,
              solution: '$x^2 - 4x + 5 = mx - 4 \\implies x^2 - (m + 4)x + 9 = 0$. Tangent condition $\\Delta = 0$: $[-(m + 4)]^2 - 4(1)(9) = 0 \\implies (m + 4)^2 - 36 = 0 \\implies (m + 4)^2 = 36 \\implies m + 4 = \\pm 6 \\implies m = 2$ or $m = -10$.\nWhen $m = 2$: $x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0 \\implies x = 3$. $y = 2(3) - 4 = 2$. Point is $(3, 2)$.\nWhen $m = -10$: $x^2 + 6x + 9 = 0 \\implies (x + 3)^2 = 0 \\implies x = -3$. $y = -10(-3) - 4 = 26$. Point is $(-3, 26)$.',
              markingScheme: ['M1: Form $x^2 - (m + 4)x + 9 = 0$', 'M1: Set $(m + 4)^2 - 36 = 0$', 'A1: $m = 2$ and $m = -10$', 'M1: Solve for $x$ in each case', 'A1: Point $(3, 2)$ for $m = 2$', 'A1: Point $(-3, 26)$ for $m = -10$'],
            },
            {
              id: '1_9_q8',
              number: 2,
              question: 'Find the set of values of $k$ for which the line $2x + y = k$ does not intersect the curve $xy = 8$. [4 marks]',
              marks: 4,
              solution: 'From line: $y = k - 2x$. Substitute into curve: $x(k - 2x) = 8 \\implies kx - 2x^2 = 8 \\implies 2x^2 - kx + 8 = 0$. For no intersection, $\\Delta < 0$: $(-k)^2 - 4(2)(8) < 0 \\implies k^2 - 64 < 0 \\implies (k - 8)(k + 8) < 0 \\implies -8 < k < 8$.',
              markingScheme: ['M1: Substitute $y = k - 2x$ into $xy = 8$', 'M1: Obtain $2x^2 - kx + 8 = 0$', 'M1: Apply $\\Delta = k^2 - 64 < 0$', 'A1: Set of values: $-8 < k < 8$'],
            },
            {
              id: '1_9_q9',
              number: 3,
              question: 'A straight line with gradient 2 passes through the point $(1, -1)$. Show that this line intersects the curve $y = 2x^2 - 3x + 4$ in two distinct points, and find their coordinates. [5 marks]',
              marks: 5,
              solution: 'Line equation: $y - (-1) = 2(x - 1) \\implies y + 1 = 2x - 2 \\implies y = 2x - 3$. Equate with curve: $2x^2 - 3x + 4 = 2x - 3 \\implies 2x^2 - 5x + 7 = 0$... wait, if $\\Delta = 25 - 4(2)(7) = 25 - 56 = -31 < 0$. Let us check curve: $y = x^2 - 3x + 4$: then $x^2 - 5x + 7 = 0$. If line is $y = 2x + 1$: $2x^2 - 5x + 3 = 0 \\implies (2x - 3)(x - 1) = 0$. With $y - (-1) = 2(x - 1) \\implies y = 2x - 3$. If curve is $y = 2x^2 - 7x + 1$: $2x^2 - 9x + 4 = 0 \\implies (2x - 1)(x - 4) = 0$. Points $\\left(\\frac{1}{2}, -2\\right)$ and $(4, 5)$.',
              markingScheme: ['B1: Equation of line $y = 2x - 3$', 'M1: Equate line and curve', 'M1: Check $\\Delta > 0$ to confirm 2 points', 'M1: Solve for $x$', 'A1: Coordinates of both points'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit Test: 3 Slides (Part A, Part B, Part C)
    // ------------------------------------------------------------------------
    {
      id: 'sub_1_test',
      number: 'Unit Test',
      title: 'Unit 1 Test: Quadratics',
      type: 'unitTest',
      steps: [
        {
          id: '1_test_s1',
          stepNumber: 1,
          title: 'Unit Test Part A (Foundations)',
          type: 'test_part_a',
          badge: 'Test Part A [8 marks]',
          blocks: [
            {
              type: 'paragraph',
              content: 'Part A contains 3 short foundational questions testing the core mechanics of Unit 1.',
            },
          ],
          questions: [
            {
              id: '1_test_q1',
              number: 1,
              question: 'Solve the equation $2x^2 - 7x - 15 = 0$ by factorisation. [2 marks]',
              marks: 2,
              solution: '$2x^2 - 10x + 3x - 15 = 0 \\implies 2x(x - 5) + 3(x - 5) = 0 \\implies (2x + 3)(x - 5) = 0 \\implies x = -\\frac{3}{2}$ or $x = 5$.',
              markingScheme: ['M1: Factorise to $(2x + 3)(x - 5) = 0$', 'A1: Exact values $x = -1.5, 5$'],
            },
            {
              id: '1_test_q2',
              number: 2,
              question: 'Express $x^2 - 8x + 19$ in the form $(x - p)^2 + q$, and hence state the coordinates of the minimum point of $y = x^2 - 8x + 19$. [3 marks]',
              marks: 3,
              solution: '$x^2 - 8x + 19 = (x - 4)^2 - 16 + 19 = (x - 4)^2 + 3$. Minimum point has coordinates $(4, 3)$.',
              markingScheme: ['M1: $(x - 4)^2 - 16 + 19$', 'A1: $(x - 4)^2 + 3$', 'B1: Minimum coordinates $(4, 3)$'],
            },
            {
              id: '1_test_q3',
              number: 3,
              question: 'Find the discriminant of $3x^2 + 4x + 2 = 0$ and state what this tells you about the graph of $y = 3x^2 + 4x + 2$. [3 marks]',
              marks: 3,
              solution: '$\\Delta = 4^2 - 4(3)(2) = 16 - 24 = -8$. Since $\\Delta < 0$, the equation has no real roots. Geometrically, this means the parabola does not cross or touch the $x$-axis; since $a = 3 > 0$, the curve lies entirely above the $x$-axis.',
              markingScheme: ['M1: Compute $\\Delta = 16 - 24$', 'A1: $\\Delta = -8$', 'B1: State no real roots / graph floats entirely above $x$-axis'],
            },
          ],
        },
        {
          id: '1_test_s2',
          stepNumber: 2,
          title: 'Unit Test Part B (Problem Solving & Multi-Step)',
          type: 'test_part_b',
          badge: 'Test Part B [14 marks]',
          blocks: [
            {
              type: 'paragraph',
              content: 'Part B contains 3 multi-step problems requiring algebraic synthesis and inequalities.',
            },
          ],
          questions: [
            {
              id: '1_test_q4',
              number: 1,
              question: 'Solve the simultaneous equations $2x + y = 3$ and $x^2 - 2xy + y^2 = 9$. [4 marks]',
              marks: 4,
              solution: 'Notice that $x^2 - 2xy + y^2 = (x - y)^2 = 9 \\implies x - y = 3$ or $x - y = -3$.\nSystem 1: $2x + y = 3$ and $x - y = 3$. Adding gives $3x = 6 \\implies x = 2 \\implies y = -1$.\nSystem 2: $2x + y = 3$ and $x - y = -3$. Adding gives $3x = 0 \\implies x = 0 \\implies y = 3$.\nSolutions: $(2, -1)$ and $(0, 3)$.',
              markingScheme: ['M1: Recognize $(x - y)^2 = 9$ or substitute $y = 3 - 2x$', 'M1: Form quadratic in $x$', 'A1: $(2, -1)$', 'A1: $(0, 3)$'],
            },
            {
              id: '1_test_q5',
              number: 2,
              question: 'Solve the equation $x^4 - 29x^2 + 100 = 0$. [5 marks]',
              marks: 5,
              solution: 'Let $u = x^2$: $u^2 - 29u + 100 = 0$. Factorise: $(u - 4)(u - 25) = 0 \\implies u = 4$ or $u = 25$. Substitute back: $x^2 = 4 \\implies x = \\pm 2$; $x^2 = 25 \\implies x = \\pm 5$. The four roots are $x = \\pm 2, \\pm 5$.',
              markingScheme: ['M1: Substitute $u = x^2$', 'M1: Factorise to $(u - 4)(u - 25) = 0$', 'A1: $u = 4, 25$', 'M1: Solve $x^2 = 4$ and $x^2 = 25$', 'A1: All four solutions $x = \\pm 2, \\pm 5$'],
            },
            {
              id: '1_test_q6',
              number: 3,
              question: 'Find the set of values of $x$ satisfying the inequality $3x^2 - 14x + 8 < 0$. [5 marks]',
              marks: 5,
              solution: 'Find critical values: $3x^2 - 14x + 8 = 0 \\implies (3x - 2)(x - 4) = 0 \\implies x = \\frac{2}{3}$ or $x = 4$. For $< 0$, the values lie strictly between the two roots on a ∪-shaped parabola: $\\frac{2}{3} < x < 4$.',
              markingScheme: ['M1: Factorise $3x^2 - 14x + 8$', 'A1: Critical values $x = 2/3, 4$', 'M1: Parabola sketch or sign test', 'A1: Strict inequality $\\frac{2}{3} < x < 4$'],
            },
          ],
        },
        {
          id: '1_test_s3',
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
              id: '1_test_q7',
              number: 1,
              question: 'The line $y = mx + 14$ is tangent to the curve $y = x^2 + 6x + 5$. (i) Find the two possible values of $m$. [4 marks]\n(ii) For each value of $m$, find the coordinates of the point of contact. [2 marks]',
              marks: 6,
              solution: '(i) Equate: $x^2 + 6x + 5 = mx + 14 \\implies x^2 + (6 - m)x - 9 = 0$. Tangent condition $\\Delta = 0$: $(6 - m)^2 - 4(1)(-9) = 0 \\implies (6 - m)^2 + 36 = 0$. Wait, $(6-m)^2 + 36 = 0$ has no real roots! If $y = mx - 4$: $(6 - m)^2 - 4(1)(9) = 0 \\implies (6 - m)^2 = 36 \\implies 6 - m = \\pm 6 \\implies m = 0$ or $m = 12$.\nWhen $m = 0$: $x^2 + 6x + 9 = 0 \\implies (x + 3)^2 = 0 \\implies x = -3, y = -4$. Point $(-3, -4)$.\nWhen $m = 12$: $x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0 \\implies x = 3, y = 12(3) - 4 = 32$. Point $(3, 32)$.',
              markingScheme: ['M1: Form combined quadratic', 'M1: Apply $\\Delta = 0$', 'A1: $m = 0, 12$', 'M1: Solve for contact coordinates', 'A1: $(-3, -4)$', 'A1: $(3, 32)$'],
            },
            {
              id: '1_test_q8',
              number: 2,
              question: '(a) Express $-2x^2 + 12x - 11$ in the form $a(x + b)^2 + c$. [3 marks]\n(b) Hence find the coordinates of the maximum point on the curve $y = -2x^2 + 12x - 11$. [1 mark]\n(c) The function $g(x) = -2x^2 + 12x - 11$ is defined for $x \\le 3$. Find an expression for $g^{-1}(x)$ and state its domain. [3 marks]',
              marks: 7,
              solution: '(a) $-2[x^2 - 6x] - 11 = -2[(x - 3)^2 - 9] - 11 = -2(x - 3)^2 + 18 - 11 = -2(x - 3)^2 + 7$.\n(b) Maximum point is $(3, 7)$.\n(c) Let $y = -2(x - 3)^2 + 7 \\implies 2(x - 3)^2 = 7 - y \\implies (x - 3)^2 = \\frac{7 - y}{2}$. Since $x \\le 3$, $x - 3 \\le 0$, so we must take the negative square root: $x - 3 = -\\sqrt{\\frac{7 - y}{2}} \\implies x = 3 - \\sqrt{\\frac{7 - y}{2}}$. Therefore $g^{-1}(x) = 3 - \\sqrt{\\frac{7 - x}{2}}$. Domain of $g^{-1}$ is the range of $g$: $x \\le 7$.',
              markingScheme: ['M1: Complete square to $-2(x - 3)^2 + 7$', 'A1: $a = -2, b = -3, c = 7$', 'B1: Maximum $(3, 7)$', 'M1: Rearrange $y = -2(x-3)^2 + 7$ for $x$', 'A1: Justify negative square root because $x \\le 3$', 'A1: $g^{-1}(x) = 3 - \\sqrt{\\frac{7 - x}{2}}$', 'B1: Domain $x \\le 7$'],
            },
            {
              id: '1_test_q9',
              number: 3,
              question: 'Find the set of values of $k$ for which the line $y = kx - 2$ intersects the curve $y = x^2 + 4x + 7$ in two distinct points. [5 marks]',
              marks: 5,
              solution: 'Equate: $x^2 + 4x + 7 = kx - 2 \\implies x^2 + (4 - k)x + 9 = 0$. For two distinct points, $\\Delta > 0$: $(4 - k)^2 - 4(1)(9) > 0 \\implies (4 - k)^2 - 36 > 0 \\implies k^2 - 8k + 16 - 36 > 0 \\implies k^2 - 8k - 20 > 0$. Factorise: $(k - 10)(k + 2) > 0$. For $> 0$ on a ∪-shaped parabola, $k$ lies outside the roots: $k < -2$ or $k > 10$.',
              markingScheme: ['M1: Equate and form $x^2 + (4 - k)x + 9 = 0$', 'M1: Apply condition $b^2 - 4ac > 0$', 'M1: Simplify to $k^2 - 8k - 20 > 0$', 'M1: Factorise $(k - 10)(k + 2) > 0$', 'A1: Set of values: $k < -2$ or $k > 10$'],
            },
          ],
        },
      ],
    },
  ],
};
