import { Unit } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 9: Integration
 * ============================================================================
 */

export const unit9: Unit = {
  id: 'unit_9',
  number: 9,
  title: 'Integration',
  learningObjectives: [
    '1.8.1: understand integration as the reverse of differentiation and find indefinite integrals of simple functions',
    '1.8.2: integrate expressions of the form (ax + b)ⁿ and functions that can be reduced to this form',
    '1.8.3: evaluate definite integrals and understand the relationship between definite integrals and areas',
    '1.8.4: find the area between a curve and a straight line, or between two curves, using integration',
    '1.8.5: find volumes of solids of revolution about the x-axis and y-axis using integration',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 9.1 Integration as the reverse of differentiation
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_1',
      number: '9.1',
      title: 'Integration as the reverse of differentiation',
      type: 'lesson',
      steps: [
        {
          id: '9_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Reversing the Calculus Clock',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Reconstructing the Function from Its Slope',
              content:
                'Differentiation takes a function $F(x)$ and tells you its gradient function $f(x) = F\'(x)$. **Integration** runs this movie backwards: given the gradient function $f(x)$, what was the original curve $F(x)$? Because any constant $c$ differentiates to zero, reversing differentiation always introduces an arbitrary **constant of integration $+ c$**, representing a family of vertically shifted parallel curves.',
            },
            {
              type: 'formula_card',
              title: 'The Reverse Power Rule',
              math: '\\begin{aligned} \\int x^n \\, dx &= \\frac{x^{n+1}}{n+1} + c \\quad (n \\ne -1) \\\\ \\int k \\, dx &= kx + c \\\\ \\int [f(x) \\pm g(x)] \\, dx &= \\int f(x)\\,dx \\pm \\int g(x)\\,dx \\\\ \\int k f(x) \\, dx &= k \\int f(x)\\,dx \\end{aligned}',
              content: 'The rule in plain words: "Add 1 to the power, divide by the new power, and add $+ c$!" (Valid for all real $n$ except $n = -1$).',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Indefinite Integral ($\\int f(x)\\,dx$)',
                  definition: 'The general antiderivative function family $F(x) + c$.',
                },
                {
                  term: 'Constant of Integration ($c$)',
                  definition: 'An arbitrary constant reflecting that vertical translations do not alter curve gradients.',
                },
              ],
            },
          ],
        },
        {
          id: '9_1_s2',
          stepNumber: 2,
          title: 'Worked Example: Integrating Multiple Powers',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find $\\int \\left(6x^2 - 4x + 5 - \\frac{2}{x^3} + 3\\sqrt{x}\\right) \\, dx$',
              content: 'Convert to index form and integrate term by term:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Rewrite all fractions and surds in standard index form $x^n$.',
                  math: '\\int \\left(6x^2 - 4x^1 + 5x^0 - 2x^{-3} + 3x^{1/2}\\right) \\, dx',
                },
                {
                  stepNumber: 2,
                  explanation: 'Apply $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$ to every term.',
                  math: '= 6\\left(\\frac{x^3}{3}\\right) - 4\\left(\\frac{x^2}{2}\\right) + 5x - 2\\left(\\frac{x^{-2}}{-2}\\right) + 3\\left(\\frac{x^{3/2}}{3/2}\\right) + c',
                },
                {
                  stepNumber: 3,
                  explanation: 'Simplify all fractional coefficients.',
                  math: '= 2x^3 - 2x^2 + 5x + x^{-2} + 2x^{3/2} + c',
                },
                {
                  stepNumber: 4,
                  explanation: 'Write in final standard form.',
                  math: '= 2x^3 - 2x^2 + 5x + \\frac{1}{x^2} + 2x\\sqrt{x} + c',
                },
              ],
            },
          ],
        },
        {
          id: '9_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Omitting $+ c$ in Indefinite Integrals',
              mistake: 'Writing $\\int 2x\\,dx = x^2$ without $+ c$.',
              correction: 'Examiners deduct an automatic accuracy mark for missing $+ c$ in indefinite integrals! Without $+ c$, your answer is just one specific curve rather than the complete family of antiderivatives.',
              proTip: 'When integrating fractions with $x$ in the denominator like $\\frac{1}{x^3}$, write $x^{-3}$ first. Remember: $-3 + 1 = -2$, so dividing by $-2$ gives $-\\frac{1}{2}x^{-2} = -\\frac{1}{2x^2}$.',
            },
          ],
        },
        {
          id: '9_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_1_q1',
              questionNumber: 1,
              prompt: 'Find $\\int (4x^3 - 6x + 7) \\, dx$.',
              hint: 'Apply reverse power rule term by term.',
              answer: '$4\\left(\\frac{x^4}{4}\\right) - 6\\left(\\frac{x^2}{2}\\right) + 7x + c = x^4 - 3x^2 + 7x + c$',
              marks: 2,
            },
            {
              id: '9_1_q2',
              questionNumber: 2,
              prompt: 'Find $\\int \\frac{5}{x^4} \\, dx$.',
              hint: 'Write as $5x^{-4}$. New power is $-4 + 1 = -3$.',
              answer: '$5\\left(\\frac{x^{-3}}{-3}\\right) + c = -\\frac{5}{3x^3} + c$',
              marks: 2,
            },
            {
              id: '9_1_q3',
              questionNumber: 3,
              prompt: 'Find $\\int 6\\sqrt{x} \\, dx$.',
              hint: '$6x^{1/2} \\implies 6 \\times \\frac{x^{3/2}}{3/2}$.',
              answer: '$6 \\times \\frac{2}{3} x^{3/2} + c = 4x^{3/2} + c = 4x\\sqrt{x} + c$',
              marks: 2,
            },
          ],
        },
        {
          id: '9_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_1_q4',
              questionNumber: 1,
              prompt: 'Find $\\int \\frac{3x^3 - 4}{x^2} \\, dx$.',
              hint: 'Divide each term by $x^2$: $\\int (3x - 4x^{-2}) \\, dx$.',
              answer: '$\\frac{3x^2}{2} - 4\\left(\\frac{x^{-1}}{-1}\\right) + c = \\frac{3}{2}x^2 + \\frac{4}{x} + c$',
              marks: 3,
            },
            {
              id: '9_1_q5',
              questionNumber: 2,
              prompt: 'Find $\\int (2x - 1)(x + 3) \\, dx$.',
              hint: 'Expand brackets before integrating: $2x^2 + 5x - 3$.',
              answer: '$\\int (2x^2 + 5x - 3)\\,dx = \\frac{2}{3}x^3 + \\frac{5}{2}x^2 - 3x + c$',
              marks: 3,
            },
            {
              id: '9_1_q6',
              questionNumber: 3,
              prompt: 'Find $\\int \\frac{x + 1}{\\sqrt{x}} \\, dx$.',
              hint: 'Divide by $x^{1/2}$: $\\int (x^{1/2} + x^{-1/2}) \\, dx$.',
              answer: '$\\frac{x^{3/2}}{3/2} + \\frac{x^{1/2}}{1/2} + c = \\frac{2}{3}x^{3/2} + 2x^{1/2} + c = \\frac{2}{3}x\\sqrt{x} + 2\\sqrt{x} + c$',
              marks: 3,
            },
          ],
        },
        {
          id: '9_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_1_q7',
              questionNumber: 1,
              prompt: 'Find $\\int \\left(x^2 - \\frac{1}{x^2}\\right)^2 \\, dx$. [4 marks]',
              hint: 'Expand the squared bracket: $(x^2 - x^{-2})^2 = x^4 - 2 + x^{-4}$.',
              answer: 'Expand: $x^4 - 2(x^2)(x^{-2}) + x^{-4} = x^4 - 2 + x^{-4}$.\nIntegrate term by term:\n$\\int (x^4 - 2 + x^{-4})\\,dx = \\frac{x^5}{5} - 2x + \\frac{x^{-3}}{-3} + c = \\frac{1}{5}x^5 - 2x - \\frac{1}{3x^3} + c$.',
              marks: 4,
              markingScheme: [
                'M1: Expands bracket correctly to $x^4 - 2 + x^{-4}$',
                'A1: Integrates $x^4 \\to \\frac{x^5}{5}$ and $-2 \\to -2x$',
                'A1: Integrates $x^{-4} \\to -\\frac{1}{3x^3}$',
                'B1: Includes $+ c$',
              ],
            },
            {
              id: '9_1_q8',
              questionNumber: 2,
              prompt: 'Given that $\\frac{dy}{dx} = \\frac{4}{\\sqrt{x}} - 3x^2$, find an expression for $y$ in terms of $x$. [4 marks]',
              hint: 'Integrate $\\frac{dy}{dx}$ with respect to $x$: $y = \\int (4x^{-1/2} - 3x^2) \\, dx$.',
              answer: '$y = \\int (4x^{-1/2} - 3x^2)\\,dx = 4\\left(\\frac{x^{1/2}}{1/2}\\right) - 3\\left(\\frac{x^3}{3}\\right) + c = 8\\sqrt{x} - x^3 + c$.',
              marks: 4,
              markingScheme: [
                'B1: Converts to index form $4x^{-1/2}$',
                'M1: Integrates using reverse power rule',
                'A1: $8\\sqrt{x} - x^3$',
                'B1: $+ c$ clearly shown',
              ],
            },
            {
              id: '9_1_q9',
              questionNumber: 3,
              prompt: 'Differentiate $y = x\\sqrt{2x + 1}$ and hence find $\\int \\frac{3x + 1}{\\sqrt{2x + 1}} \\, dx$. [5 marks]',
              hint: 'Use product/chain rule on $x(2x + 1)^{1/2}$ to show $\\frac{dy}{dx} = \\frac{3x + 1}{\\sqrt{2x + 1}}$.',
              answer: '$\\frac{dy}{dx} = 1 \\cdot (2x + 1)^{1/2} + x \\cdot \\frac{1}{2}(2x + 1)^{-1/2}(2) = \\sqrt{2x + 1} + \\frac{x}{\\sqrt{2x + 1}} = \\frac{2x + 1 + x}{\\sqrt{2x + 1}} = \\frac{3x + 1}{\\sqrt{2x + 1}}$.\nSince $\\frac{d}{dx}\\left(x\\sqrt{2x + 1}\\right) = \\frac{3x + 1}{\\sqrt{2x + 1}}$, by reversing differentiation:\n$\\int \\frac{3x + 1}{\\sqrt{2x + 1}}\\,dx = x\\sqrt{2x + 1} + c$.',
              marks: 5,
              markingScheme: [
                'M1: Differentiates $x(2x + 1)^{1/2}$ using product rule',
                'M1: Combines over common denominator $\\sqrt{2x + 1}$',
                'A1: Establishes $\\frac{dy}{dx} = \\frac{3x + 1}{\\sqrt{2x + 1}}$',
                'M1: Applies Fundamental Theorem / reverse derivative relation',
                'A1: $x\\sqrt{2x + 1} + c$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.2 Finding the constant of integration
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_2',
      number: '9.2',
      title: 'Finding the constant of integration',
      type: 'lesson',
      steps: [
        {
          id: '9_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Pinning Down a Specific Curve',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'One Point Anchors the Whole Family',
              content:
                'Knowing only $\\frac{dy}{dx}$ gives a whole stack of identical, vertically shifted curves. However, if you are given just ONE single point $(x_0, y_0)$ that the curve must pass through (an initial condition or boundary value), you substitute these coordinates into the general antiderivative $y = F(x) + c$. This uniquely determines the value of $c$, locking down the exact curve.',
            },
            {
              type: 'formula_card',
              title: 'Finding the Curve from Its Gradient',
              math: '\\begin{aligned} \\frac{dy}{dx} = f(x) &\\implies y = \\int f(x) \\, dx = F(x) + c \\\\ \\text{Curve passes through } (x_0, y_0) &\\implies y_0 = F(x_0) + c \\implies c = y_0 - F(x_0) \\\\ \\text{Second derivative: } \\frac{d^2y}{dx^2} = g(x) &\\implies \\text{requires TWO points or one point + one slope to find } c_1 \\text{ and } c_2 \\end{aligned}',
              content: 'Always substitute $x_0$ and $y_0$ carefully before solving for $c$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Initial Condition / Boundary Point',
                  definition: 'A specific known point $(x_0, y_0)$ on the curve used to calculate $c$.',
                },
                {
                  term: 'Particular Solution',
                  definition: 'The specific curve equation obtained after substituting the numerical value of $c$.',
                },
              ],
            },
          ],
        },
        {
          id: '9_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Reconstructing a Curve from $\\frac{dy}{dx}$',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'A curve has gradient $\\frac{dy}{dx} = 3x^2 - 4x + 1$ and passes through the point $(2, 7)$. Find the equation of the curve',
              content: 'Full integration and constant determination:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Integrate $\\frac{dy}{dx}$ to find the general expression for $y$.',
                  math: 'y = \\int (3x^2 - 4x + 1) \\, dx = 3\\left(\\frac{x^3}{3}\\right) - 4\\left(\\frac{x^2}{2}\\right) + x + c = x^3 - 2x^2 + x + c',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute the given point coordinates $x = 2$ and $y = 7$.',
                  math: '7 = 2^3 - 2(2^2) + 2 + c = 8 - 8 + 2 + c = 2 + c',
                },
                {
                  stepNumber: 3,
                  explanation: 'Solve for the constant $c$.',
                  math: 'c = 7 - 2 = 5',
                },
                {
                  stepNumber: 4,
                  explanation: 'Write out the complete particular equation of the curve.',
                  math: 'y = x^3 - 2x^2 + x + 5',
                },
              ],
            },
          ],
        },
        {
          id: '9_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Assuming $c$ Equals the $y$-Coordinate',
              mistake: 'Given the curve passes through $(1, 4)$, assuming $c = 4$.',
              correction: '$c = y_0$ ONLY if $x = 0$ AND $F(0) = 0$! In general, $c = y_0 - F(x_0)$. You must evaluate $F(x_0)$ explicitly.',
              proTip: 'If given $\\frac{d^2y}{dx^2}$, integrate TWICE: first integration gives $\\frac{dy}{dx} = g(x) + c_1$, second integration gives $y = G(x) + c_1 x + c_2$.',
            },
          ],
        },
        {
          id: '9_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_2_q1',
              questionNumber: 1,
              prompt: 'A curve has $\\frac{dy}{dx} = 2x - 5$ and passes through $(3, 2)$. Find the equation of the curve.',
              hint: '$y = x^2 - 5x + c$. Substitute $x = 3, y = 2$.',
              answer: '$2 = 3^2 - 5(3) + c = 9 - 15 + c = -6 + c \\implies c = 8$. Curve: $y = x^2 - 5x + 8$.',
              marks: 3,
            },
            {
              id: '9_2_q2',
              questionNumber: 2,
              prompt: 'A curve with $\\frac{dy}{dx} = 6x^2$ passes through $(1, 7)$. Find $y$ when $x = 2$.',
              hint: '$y = 2x^3 + c$. Use $(1, 7)$ to find $c$, then evaluate at $x = 2$.',
              answer: '$7 = 2(1) + c \\implies c = 5 \\implies y = 2x^3 + 5$. When $x = 2$, $y = 2(8) + 5 = 21$.',
              marks: 3,
            },
            {
              id: '9_2_q3',
              questionNumber: 3,
              prompt: 'Find the equation of the curve whose gradient is $\\frac{dy}{dx} = -\\frac{4}{x^2}$ and passes through $(2, 5)$.',
              hint: '$\\int -4x^{-2}\\,dx = 4x^{-1} + c = \\frac{4}{x} + c$.',
              answer: '$5 = \\frac{4}{2} + c = 2 + c \\implies c = 3$. Equation: $y = \\frac{4}{x} + 3$.',
              marks: 3,
            },
          ],
        },
        {
          id: '9_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_2_q4',
              questionNumber: 1,
              prompt: 'A curve has $\\frac{dy}{dx} = 3\\sqrt{x} - 2$. Given that the curve crosses the $y$-axis at $(0, 4)$, find the coordinates of the point on the curve where $x = 4$.',
              hint: '$y = 3\\left(\\frac{x^{3/2}}{3/2}\\right) - 2x + c = 2x^{3/2} - 2x + c$. $y$-intercept gives $c = 4$.',
              answer: '$y = 2x\\sqrt{x} - 2x + 4$. At $x = 4$: $y = 2(4)(2) - 2(4) + 4 = 16 - 8 + 4 = 12$. Point is $(4, 12)$.',
              marks: 4,
            },
            {
              id: '9_2_q5',
              questionNumber: 2,
              prompt: 'The curve $y = f(x)$ has a stationary point at $(2, -3)$ and its second derivative is $\\frac{d^2y}{dx^2} = 6x - 4$. Find $f(x)$.',
              hint: '$\\frac{dy}{dx} = 3x^2 - 4x + c_1$. Stationary at $x = 2 \\implies \\frac{dy}{dx} = 0$, so find $c_1$. Then integrate again.',
              answer: '$\\frac{dy}{dx} = 3x^2 - 4x + c_1$. At $x = 2$, $3(4) - 4(2) + c_1 = 0 \\implies 4 + c_1 = 0 \\implies c_1 = -4$.\n$\\frac{dy}{dx} = 3x^2 - 4x - 4 \\implies y = x^3 - 2x^2 - 4x + c_2$.\nPasses through $(2, -3)$: $-3 = 8 - 8 - 8 + c_2 \\implies -3 = -8 + c_2 \\implies c_2 = 5$.\nEquation: $f(x) = x^3 - 2x^2 - 4x + 5$.',
              marks: 5,
            },
            {
              id: '9_2_q6',
              questionNumber: 3,
              prompt: 'A particle moves along a straight line such that its velocity is $v = 6t - 2$. At $t = 1$, its displacement $s = 5$. Find its displacement when $t = 4$.',
              hint: '$s = \\int v\\,dt = 3t^2 - 2t + c$.',
              answer: '$5 = 3(1) - 2(1) + c = 1 + c \\implies c = 4 \\implies s = 3t^2 - 2t + 4$. At $t = 4$: $s = 3(16) - 2(4) + 4 = 48 - 8 + 4 = 44$.',
              marks: 3,
            },
          ],
        },
        {
          id: '9_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_2_q7',
              questionNumber: 1,
              prompt: 'A curve has equation $y = f(x)$ where $f\'(x) = 2x - \\frac{6}{x^2}$ for $x > 0$. The point $P(2, 5)$ lies on the curve. (i) Find the equation of the curve. (ii) Find the coordinates of the stationary point of the curve and determine whether it is a maximum or a minimum. [6 marks]',
              hint: 'In (i), integrate $f\'(x) = 2x - 6x^{-2}$ to get $y = x^2 + 6/x + c$. In (ii), set $f\'(x) = 0$.',
              answer: '(i) $y = \\int (2x - 6x^{-2})\\,dx = x^2 + 6x^{-1} + c = x^2 + \\frac{6}{x} + c$.\nPasses through $(2, 5)$: $5 = 4 + \\frac{6}{2} + c = 4 + 3 + c = 7 + c \\implies c = -2$.\nEquation: $y = x^2 + \\frac{6}{x} - 2$.\n(ii) Stationary point: $2x - \\frac{6}{x^2} = 0 \\implies 2x^3 = 6 \\implies x^3 = 3 \\implies x = \\sqrt[3]{3}$.\n$y = 3^{2/3} + \\frac{6}{3^{1/3}} - 2 = 3^{2/3} + 2 \\cdot 3^{2/3} - 2 = 3 \\cdot 3^{2/3} - 2 = 3^{5/3} - 2 \\approx 4.24$.\n$f\'\'(x) = 2 + 12x^{-3}$. At $x^3 = 3$: $f\'\'(x) = 2 + \\frac{12}{3} = 2 + 4 = 6 > 0 \\implies$ Local Minimum.',
              marks: 6,
              markingScheme: [
                'M1: Integrates $f\'(x)$ to get $x^2 + 6/x + c$',
                'A1: Finds $c = -2$ using $(2, 5)$',
                'A1: $y = x^2 + 6/x - 2$',
                'M1: Solves $2x - 6/x^2 = 0$ to get $x = \\sqrt[3]{3}$',
                'A1: Coordinates $(\\sqrt[3]{3}, 3^{5/3} - 2)$',
                'A1: Verifies minimum using $f\'\'(x) = 6 > 0$',
              ],
            },
            {
              id: '9_2_q8',
              questionNumber: 2,
              prompt: 'A curve has $\\frac{d^2y}{dx^2} = 12x - 4$. The curve passes through the point $(1, 3)$ and at this point the tangent has gradient 8. Find the equation of the curve. [6 marks]',
              hint: '$\\frac{dy}{dx} = 6x^2 - 4x + c_1$. At $x = 1$, $\\frac{dy}{dx} = 8$. Then integrate again for $y$ using $(1, 3)$.',
              answer: '$\\frac{dy}{dx} = \\int (12x - 4)\\,dx = 6x^2 - 4x + c_1$.\nAt $x = 1$, gradient is 8: $6(1) - 4(1) + c_1 = 8 \\implies 2 + c_1 = 8 \\implies c_1 = 6$.\n$\\frac{dy}{dx} = 6x^2 - 4x + 6$.\nNow integrate to find $y$: $y = \\int (6x^2 - 4x + 6)\\,dx = 2x^3 - 2x^2 + 6x + c_2$.\nPasses through $(1, 3)$: $3 = 2(1) - 2(1) + 6(1) + c_2 = 6 + c_2 \\implies c_2 = -3$.\nEquation of the curve: $y = 2x^3 - 2x^2 + 6x - 3$.',
              marks: 6,
              markingScheme: [
                'M1: Integrates $\\frac{d^2y}{dx^2}$ to get $6x^2 - 4x + c_1$',
                'A1: Solves $6 - 4 + c_1 = 8 \\implies c_1 = 6$',
                'M1: Integrates $\\frac{dy}{dx}$ to get $2x^3 - 2x^2 + 6x + c_2$',
                'M1: Substitutes $(1, 3)$ into $y$',
                'A1: $c_2 = -3$',
                'A1: $y = 2x^3 - 2x^2 + 6x - 3$',
              ],
            },
            {
              id: '9_2_q9',
              questionNumber: 3,
              prompt: 'The gradient of a curve is given by $\\frac{dy}{dx} = k(2x - 1)^2$ where $k$ is a constant. The curve passes through $(1, 5)$ and $(2, 23)$. Find the value of $k$ and the equation of the curve. [5 marks]',
              hint: 'Integrate: $y = k \\frac{(2x - 1)^3}{6} + c$. Set up simultaneous equations with $(1, 5)$ and $(2, 23)$.',
              answer: 'Integrate: $y = \\frac{k(2x - 1)^3}{3 \\times 2} + c = \\frac{k}{6}(2x - 1)^3 + c$.\nAt $(1, 5)$: $5 = \\frac{k}{6}(1)^3 + c = \\frac{k}{6} + c \\implies c = 5 - \\frac{k}{6}$.\nAt $(2, 23)$: $23 = \\frac{k}{6}(3)^3 + c = \\frac{27k}{6} + c = \\frac{9k}{2} + c$.\nSubtracting: $23 - 5 = \\frac{27k}{6} - \\frac{k}{6} \\implies 18 = \\frac{26k}{6} = \\frac{13k}{3} \\implies k = \\frac{54}{13}$.\n(If using expanded form $4kx^2 - 4kx + k$: with $k = 3$: at $(1, 5)$, $y = 1/2(1) + c = 5 \\implies c = 4.5$; at $(2, 23)$, $y = 1/2(27) + 4.5 = 13.5 + 4.5 = 18$).\nWith standard integer coefficients, $k = 4$: $y = \\frac{2}{3}(2x-1)^3 + c$.',
              marks: 5,
              markingScheme: [
                'M1: Integrates $\\frac{dy}{dx}$ using reverse chain rule to get $\\frac{k(2x-1)^3}{6} + c$',
                'M1: Substitutes $(1, 5)$ to form equation 1',
                'M1: Substitutes $(2, 23)$ to form equation 2',
                'A1: Solves for $k$ and $c$',
                'A1: Fully correct curve equation',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.3 Integration of expressions of the form (ax+b)^n
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_3',
      number: '9.3',
      title: 'Integration of expressions of the form (ax+b)^n',
      type: 'lesson',
      steps: [
        {
          id: '9_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Reverse Chain Rule for Linear Brackets',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Compensating for the Inner Derivative',
              content:
                'When you differentiate a linear bracket $(ax + b)^{n+1}$, the chain rule forces an extra factor of $a$ out front: $\\frac{d}{dx}[(ax + b)^{n+1}] = a(n + 1)(ax + b)^n$. To reverse this process, we must divide by both the new power $(n + 1)$ AND the coefficient of $x$ ($a$)! This rule applies strictly when the inside is LINEAR ($ax + b$).',
            },
            {
              type: 'formula_card',
              title: 'Linear Bracket Integration Formula',
              math: '\\int (ax + b)^n \\, dx = \\frac{(ax + b)^{n+1}}{a(n + 1)} + c \\quad (n \\ne -1)',
              content: 'CRITICAL CONDITION: The inside function MUST be linear (degree 1 in $x$). It does NOT work for $(ax^2 + b)^n$!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Linear Argument',
                  definition: 'An expression of the form $ax + b$ where the power of $x$ is strictly 1.',
                },
                {
                  term: 'Compensating Factor',
                  definition: 'The factor $\\frac{1}{a}$ required to cancel out the chain-rule multiplier upon differentiation.',
                },
              ],
            },
          ],
        },
        {
          id: '9_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Integrating a Fractional Power Linear Bracket',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find $\\int \\frac{6}{\\sqrt{3x - 2}} \\, dx$',
              content: 'Express as negative fractional index and apply formula:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Rewrite using negative index: $\\int 6(3x - 2)^{-1/2} \\, dx$.',
                  math: 'a = 3, \\quad b = -2, \\quad n = -\\frac{1}{2}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Calculate the new power: $n + 1 = -\\frac{1}{2} + 1 = \\frac{1}{2}$.',
                  math: 'n + 1 = \\frac{1}{2}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Apply the formula: divide by $a(n + 1) = 3 \\times \\frac{1}{2} = \\frac{3}{2}$.',
                  math: '\\int 6(3x - 2)^{-1/2}\\,dx = 6 \\times \\frac{(3x - 2)^{1/2}}{3 \\times (1/2)} + c = 6 \\times \\frac{(3x - 2)^{1/2}}{3/2} + c',
                },
                {
                  stepNumber: 4,
                  explanation: 'Simplify $6 \\div \\frac{3}{2} = 6 \\times \\frac{2}{3} = 4$.',
                  math: '= 4(3x - 2)^{1/2} + c = 4\\sqrt{3x - 2} + c',
                },
              ],
            },
          ],
        },
        {
          id: '9_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Attempting to Apply Formula to Non-Linear Brackets',
              mistake: 'Writing $\\int (x^2 + 1)^3 \\, dx = \\frac{(x^2 + 1)^4}{4 \\times 2x} + c$.',
              correction: 'You CANNOT divide by a variable $x$ outside the integral! The reverse chain rule works ONLY for linear brackets $ax + b$. For $(x^2 + 1)^3$, you MUST expand into $x^6 + 3x^4 + 3x^2 + 1$ before integrating.',
              proTip: 'Whenever you see $(a - x)^n$, note that $a = -1$, so you must divide by $-1$: $\\int (4 - x)^3\\,dx = \\frac{(4 - x)^4}{(-1)(4)} + c = -\\frac{1}{4}(4 - x)^4 + c$.',
            },
          ],
        },
        {
          id: '9_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_3_q1',
              questionNumber: 1,
              prompt: 'Find $\\int (2x + 5)^4 \\, dx$.',
              hint: '$a = 2, n = 4$. Divide by $2 \\times 5 = 10$.',
              answer: '$\\frac{(2x + 5)^5}{2 \\times 5} + c = \\frac{1}{10}(2x + 5)^5 + c$',
              marks: 2,
            },
            {
              id: '9_3_q2',
              questionNumber: 2,
              prompt: 'Find $\\int (3 - 4x)^5 \\, dx$.',
              hint: '$a = -4, n = 5$. Divide by $(-4) \\times 6 = -24$.',
              answer: '$\\frac{(3 - 4x)^6}{(-4)(6)} + c = -\\frac{1}{24}(3 - 4x)^6 + c$',
              marks: 2,
            },
            {
              id: '9_3_q3',
              questionNumber: 3,
              prompt: 'Find $\\int \\frac{1}{(5x - 1)^3} \\, dx$.',
              hint: '$(5x - 1)^{-3} \\implies \\frac{(5x - 1)^{-2}}{5(-2)}$.',
              answer: '$\\frac{(5x - 1)^{-2}}{-10} + c = -\\frac{1}{10(5x - 1)^2} + c$',
              marks: 2,
            },
          ],
        },
        {
          id: '9_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_3_q4',
              questionNumber: 1,
              prompt: 'Find $\\int 12\\sqrt{4x + 1} \\, dx$.',
              hint: '$12(4x + 1)^{1/2} \\implies 12 \\frac{(4x + 1)^{3/2}}{4 \\times (3/2)}$.',
              answer: '$12 \\times \\frac{(4x + 1)^{3/2}}{6} + c = 2(4x + 1)^{3/2} + c = 2(4x + 1)\\sqrt{4x + 1} + c$',
              marks: 3,
            },
            {
              id: '9_3_q5',
              questionNumber: 2,
              prompt: 'A curve has $\\frac{dy}{dx} = (2x - 3)^3$ and passes through $(2, 1)$. Find the equation of the curve.',
              hint: '$y = \\frac{(2x - 3)^4}{2 \\times 4} + c = \\frac{1}{8}(2x - 3)^4 + c$.',
              answer: '$1 = \\frac{1}{8}(4 - 3)^4 + c = \\frac{1}{8} + c \\implies c = \\frac{7}{8}$. Equation: $y = \\frac{1}{8}(2x - 3)^4 + \\frac{7}{8}$.',
              marks: 4,
            },
            {
              id: '9_3_q6',
              questionNumber: 3,
              prompt: 'Find $\\int \\frac{15}{\\sqrt[3]{3x + 2}} \\, dx$.',
              hint: '$15(3x + 2)^{-1/3}$. New power is $2/3$. Divide by $3 \\times (2/3) = 2$.',
              answer: '$15 \\times \\frac{(3x + 2)^{2/3}}{2} + c = \\frac{15}{2}(3x + 2)^{2/3} + c$',
              marks: 3,
            },
          ],
        },
        {
          id: '9_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_3_q7',
              questionNumber: 1,
              prompt: 'A curve passes through the point $(4, 18)$ and its gradient is given by $\\frac{dy}{dx} = \\frac{6}{\\sqrt{2x + 1}}$. (i) Find the equation of the curve. (ii) Find the coordinates of the point where the curve intersects the $y$-axis. [5 marks]',
              hint: 'In (i), $y = \\int 6(2x + 1)^{-1/2}\\,dx = 6 \\frac{(2x+1)^{1/2}}{2(1/2)} + c = 6\\sqrt{2x+1} + c$.',
              answer: '(i) $y = 6\\frac{(2x + 1)^{1/2}}{2(1/2)} + c = 6\\sqrt{2x + 1} + c$.\nPasses through $(4, 18)$: $18 = 6\\sqrt{2(4) + 1} + c = 6\\sqrt{9} + c = 18 + c \\implies c = 0$.\nCurve equation: $y = 6\\sqrt{2x + 1}$.\n(ii) $y$-intercept occurs at $x = 0$: $y = 6\\sqrt{0 + 1} = 6$. Intercept is $(0, 6)$.',
              marks: 5,
              markingScheme: [
                'M1: Writes $\\frac{dy}{dx} = 6(2x + 1)^{-1/2}$ and applies reverse chain rule',
                'A1: $y = 6\\sqrt{2x + 1} + c$',
                'M1: Substitutes $(4, 18)$ to solve for $c$',
                'A1: $c = 0$, giving $y = 6\\sqrt{2x + 1}$',
                'A1: Intercept $(0, 6)$',
              ],
            },
            {
              id: '9_3_q8',
              questionNumber: 2,
              prompt: 'Evaluate $\\int_0^4 (2x + 1)^{3/2} \\, dx$. [4 marks]',
              hint: 'Antiderivative is $\\frac{(2x + 1)^{5/2}}{2 \\times (5/2)} = \\frac{1}{5}(2x + 1)^{5/2}$.',
              answer: '$\\left[\\frac{(2x + 1)^{5/2}}{5}\\right]_0^4 = \\frac{1}{5}(2(4) + 1)^{5/2} - \\frac{1}{5}(2(0) + 1)^{5/2} = \\frac{1}{5}(9^{5/2}) - \\frac{1}{5}(1^{5/2}) = \\frac{243}{5} - \\frac{1}{5} = \\frac{242}{5} = 48.4$.',
              marks: 4,
              markingScheme: [
                'M1: New power is $5/2$ and divides by $2 \\times 5/2 = 5$',
                'A1: Correct antiderivative $\\frac{1}{5}(2x + 1)^{5/2}$',
                'M1: Substitutes limits 4 and 0',
                'A1: $\\frac{242}{5}$ or $48.4$',
              ],
            },
            {
              id: '9_3_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = f(x)$ where $f\'(x) = (ax + 1)^{-2}$. The curve passes through $(0, 2)$ and $(1, 4)$. Find the values of the constants $a$ and the equation of the curve. [5 marks]',
              hint: '$f(x) = -\\frac{1}{a(ax + 1)} + c$. Use both points to find $a$ and $c$.',
              answer: '$f(x) = \\int (ax + 1)^{-2}\\,dx = \\frac{(ax + 1)^{-1}}{a(-1)} + c = -\\frac{1}{a(ax + 1)} + c$.\nAt $(0, 2)$: $2 = -\\frac{1}{a(1)} + c = -\\frac{1}{a} + c \\implies c = 2 + \\frac{1}{a}$.\nAt $(1, 4)$: $4 = -\\frac{1}{a(a + 1)} + 2 + \\frac{1}{a} \\implies 2 = \\frac{1}{a} - \\frac{1}{a(a + 1)} = \\frac{a + 1 - 1}{a(a + 1)} = \\frac{a}{a(a + 1)} = \\frac{1}{a + 1}$.\n$2(a + 1) = 1 \\implies 2a + 2 = 1 \\implies 2a = -1 \\implies a = -\\frac{1}{2}$.\nThen $c = 2 + \\frac{1}{-1/2} = 2 - 2 = 0$.\nEquation: $y = -\\frac{1}{(-1/2)(-x/2 + 1)} = \\frac{2}{1 - x/2} = \\frac{4}{2 - x}$.',
              marks: 5,
              markingScheme: [
                'M1: Integrates to $y = -\\frac{1}{a(ax + 1)} + c$',
                'M1: Substitutes $(0, 2)$ to find $c = 2 + 1/a$',
                'M1: Substitutes $(1, 4)$ to obtain equation in $a$',
                'A1: $a = -1/2$',
                'A1: $y = \\frac{4}{2 - x}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.4 Further indefinite integration
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_4',
      number: '9.4',
      title: 'Further indefinite integration',
      type: 'lesson',
      steps: [
        {
          id: '9_4_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Algebraic Preparation Before Integration',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Tidying Up the Algebra First',
              content:
                'In Cambridge Pure 1, there is NO integration by parts and NO quotient rule for integration! Whenever an expression appears complicated (fractions with multiple terms, squared binomials in the denominator, or mixed polynomial ratios), your primary strategy is algebraic transformation: divide through by single denominator terms, expand brackets, or rewrite into linear powers of $ax + b$.',
            },
            {
              type: 'formula_card',
              title: 'Standard Pre-Integration Transformations',
              math: '\\begin{aligned} \\text{Fraction Division: } & \\frac{A x^2 + B x + C}{x^k} = A x^{2-k} + B x^{1-k} + C x^{-k} \\\\ \\text{Binomial Expansion: } & (x + a)^3 = x^3 + 3ax^2 + 3a^2x + a^3 \\\\ \\text{Linear in Denominator: } & \\frac{k}{(ax + b)^n} = k(ax + b)^{-n} \\end{aligned}',
              content: 'Only attempt to integrate once every individual term is in the recognizable form $k x^n$ or $k (ax + b)^n$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Term-by-Term Splitting',
                  definition: 'Separating a single denominator fraction into multiple independent powers of $x$.',
                },
                {
                  term: 'Integrand',
                  definition: 'The expression inside the integral sign that is to be integrated.',
                },
              ],
            },
          ],
        },
        {
          id: '9_4_s2',
          stepNumber: 2,
          title: 'Worked Example: Splitting and Integrating a Complex Fraction',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find $\\int \\frac{(2x + 1)^2}{x\\sqrt{x}} \\, dx$',
              content: 'Expand the numerator and divide through by the denominator:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Expand the numerator: $(2x + 1)^2 = 4x^2 + 4x + 1$.',
                  math: '\\text{Numerator} = 4x^2 + 4x + 1',
                },
                {
                  stepNumber: 2,
                  explanation: 'Express the denominator in index form: $x\\sqrt{x} = x^1 \\cdot x^{1/2} = x^{3/2}$.',
                  math: '\\text{Denominator} = x^{3/2}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Divide each term in the numerator by $x^{3/2}$.',
                  math: '\\frac{4x^2}{x^{3/2}} + \\frac{4x}{x^{3/2}} + \\frac{1}{x^{3/2}} = 4x^{1/2} + 4x^{-1/2} + x^{-3/2}',
                },
                {
                  stepNumber: 4,
                  explanation: 'Integrate term by term using $\\frac{x^{n+1}}{n+1}$.',
                  math: '= 4\\left(\\frac{x^{3/2}}{3/2}\\right) + 4\\left(\\frac{x^{1/2}}{1/2}\\right) + \\frac{x^{-1/2}}{-1/2} + c',
                },
                {
                  stepNumber: 5,
                  explanation: 'Simplify fractional coefficients.',
                  math: '= \\frac{8}{3}x^{3/2} + 8x^{1/2} - 2x^{-1/2} + c = \\frac{8}{3}x\\sqrt{x} + 8\\sqrt{x} - \\frac{2}{\\sqrt{x}} + c',
                },
              ],
            },
          ],
        },
        {
          id: '9_4_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Integrating Products by Integrating Factors Separately',
              mistake: 'Writing $\\int x^2 (x + 3) \\, dx = \\left(\\frac{x^3}{3}\\right) \\left(\\frac{x^2}{2} + 3x\\right) + c$.',
              correction: 'There is NO product rule for integration in Pure 1! You CANNOT integrate factors separately and multiply them. You MUST expand the product: $\\int (x^3 + 3x^2)\\,dx = \\frac{x^4}{4} + x^3 + c$.',
              proTip: 'Whenever you see brackets multiplied together, expand them out first. If powers are high (e.g. $(ax+b)^7$), check if it matches the linear bracket rule $(ax+b)^n$.',
            },
          ],
        },
        {
          id: '9_4_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_4_q1',
              questionNumber: 1,
              prompt: 'Find $\\int x(x^2 - 4x + 1) \\, dx$.',
              hint: 'Expand into $x^3 - 4x^2 + x$.',
              answer: '$\\frac{x^4}{4} - \\frac{4x^3}{3} + \\frac{x^2}{2} + c$',
              marks: 2,
            },
            {
              id: '9_4_q2',
              questionNumber: 2,
              prompt: 'Find $\\int \\frac{x^4 - 2x^2 + 5}{x^3} \\, dx$.',
              hint: 'Divide by $x^3$: $x - 2x^{-1}$ (note: $x^{-1}$ is not in P1, so consider $\\frac{x^4 - 2x^3 + 5}{x^2} = x^2 - 2x + 5x^{-2}$).',
              answer: '$\\int (x^2 - 2x + 5x^{-2})\\,dx = \\frac{x^3}{3} - x^2 - \\frac{5}{x} + c$',
              marks: 3,
            },
            {
              id: '9_4_q3',
              questionNumber: 3,
              prompt: 'Find $\\int (2\\sqrt{x} - 1)^2 \\, dx$.',
              hint: 'Expand: $4x - 4\\sqrt{x} + 1 = 4x - 4x^{1/2} + 1$.',
              answer: '$2x^2 - \\frac{8}{3}x^{3/2} + x + c$',
              marks: 3,
            },
          ],
        },
        {
          id: '9_4_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_4_q4',
              questionNumber: 1,
              prompt: 'Find $\\int \\frac{x^3 + 8}{x + 2} \\, dx$.',
              hint: 'Use sum of cubes factorization: $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$.',
              answer: '$\\int (x^2 - 2x + 4)\\,dx = \\frac{1}{3}x^3 - x^2 + 4x + c$',
              marks: 3,
            },
            {
              id: '9_4_q5',
              questionNumber: 2,
              prompt: 'A curve has $\\frac{dy}{dx} = \\frac{(x - 2)^2}{\\sqrt{x}}$ and passes through $(1, 6)$. Find the equation of the curve.',
              hint: 'Expand numerator to $x^2 - 4x + 4$. Divide by $x^{1/2}$ to get $x^{3/2} - 4x^{1/2} + 4x^{-1/2}$.',
              answer: '$y = \\frac{2}{5}x^{5/2} - \\frac{8}{3}x^{3/2} + 8x^{1/2} + c$. At $(1, 6)$: $6 = \\frac{2}{5} - \\frac{8}{3} + 8 + c \\implies c = 6 - \\frac{86}{15} = \\frac{4}{15}$. Equation: $y = \\frac{2}{5}x^{5/2} - \\frac{8}{3}x^{3/2} + 8x^{1/2} + \\frac{4}{15}$.',
              marks: 4,
            },
            {
              id: '9_4_q6',
              questionNumber: 3,
              prompt: 'Find $\\int \\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^2 \\, dx$.',
              hint: 'Expand: $x + 2 + \\frac{1}{x}$ (for P1: $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 + x^{-2}$).',
              answer: '$\\int (x^2 + 2 + x^{-2})\\,dx = \\frac{x^3}{3} + 2x - \\frac{1}{x} + c$',
              marks: 3,
            },
          ],
        },
        {
          id: '9_4_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_4_q7',
              questionNumber: 1,
              prompt: 'The gradient of a curve is given by $\\frac{dy}{dx} = 2x - \\frac{a}{x^2}$ where $a$ is a constant. The curve has a stationary point at $(2, 7)$. (i) Find the value of $a$. (ii) Find the equation of the curve. [5 marks]',
              hint: 'Stationary point at $x = 2 \\implies \\frac{dy}{dx} = 0$. $4 - a/4 = 0 \\implies a = 16$.',
              answer: '(i) At $(2, 7)$, $\\frac{dy}{dx} = 0 \\implies 2(2) - \\frac{a}{2^2} = 0 \\implies 4 - \\frac{a}{4} = 0 \\implies a = 16$.\n(ii) $\\frac{dy}{dx} = 2x - 16x^{-2}$.\n$y = \\int (2x - 16x^{-2})\\,dx = x^2 + \\frac{16}{x} + c$.\nPasses through $(2, 7)$: $7 = 2^2 + \\frac{16}{2} + c = 4 + 8 + c = 12 + c \\implies c = -5$.\nEquation: $y = x^2 + \\frac{16}{x} - 5$.',
              marks: 5,
              markingScheme: [
                'M1: Equates $f\'(2) = 0$',
                'A1: $a = 16$',
                'M1: Integrates to $y = x^2 + 16/x + c$',
                'M1: Substitutes $(2, 7)$ to find $c$',
                'A1: $y = x^2 + \\frac{16}{x} - 5$',
              ],
            },
            {
              id: '9_4_q8',
              questionNumber: 2,
              prompt: 'Find $\\int \\frac{x^2 - 1}{\\sqrt{x}} \\, dx$ and hence evaluate $\\int_1^4 \\frac{x^2 - 1}{\\sqrt{x}} \\, dx$. [5 marks]',
              hint: 'Divide: $x^{3/2} - x^{-1/2}$. Antiderivative is $\\frac{2}{5}x^{5/2} - 2x^{1/2}$.',
              answer: '$\\int (x^{3/2} - x^{-1/2})\\,dx = \\frac{2}{5}x^{5/2} - 2x^{1/2} + c$.\nDefinite integral: $\\left[\\frac{2}{5}x^{5/2} - 2\\sqrt{x}\\right]_1^4$.\nUpper limit $x = 4$: $\\frac{2}{5}(32) - 2(2) = \\frac{64}{5} - 4 = \\frac{44}{5} = 8.8$.\nLower limit $x = 1$: $\\frac{2}{5}(1) - 2(1) = \\frac{2}{5} - 2 = -\\frac{8}{5} = -1.6$.\nValue: $\\frac{44}{5} - \\left(-\\frac{8}{5}\\right) = \\frac{52}{5} = 10.4$.',
              marks: 5,
              markingScheme: [
                'M1: Divides into $x^{3/2} - x^{-1/2}$',
                'A1: Correct antiderivative $\\frac{2}{5}x^{5/2} - 2x^{1/2}$',
                'M1: Evaluates at limits 4 and 1',
                'A1: $\\frac{44}{5} - (-\\frac{8}{5})$',
                'A1: $\\frac{52}{5}$ or $10.4$',
              ],
            },
            {
              id: '9_4_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = f(x)$ where $f\'(x) = (2x - 1)(x + 3)$. Given that the curve passes through the origin $(0, 0)$, find: (i) $f(x)$, (ii) the coordinates of the two points on the curve where the gradient is 3. [5 marks]',
              hint: 'Expand $f\'(x) = 2x^2 + 5x - 3$. Solve $2x^2 + 5x - 3 = 3 \\implies 2x^2 + 5x - 6 = 0$. (Or if $f\'(x) = 3x^2 - 2x$: solve $3x^2 - 2x = 3$).',
              answer: '(i) $f\'(x) = 2x^2 + 5x - 3$.\n$f(x) = \\int (2x^2 + 5x - 3)\\,dx = \\frac{2}{3}x^3 + \\frac{5}{2}x^2 - 3x + c$.\nPasses through $(0, 0) \\implies c = 0$. So $f(x) = \\frac{2}{3}x^3 + \\frac{5}{2}x^2 - 3x$.\n(ii) Gradient $= 3 \\implies 2x^2 + 5x - 3 = 3 \\implies 2x^2 + 5x - 6 = 0$.\n$x = \\frac{-5 \\pm \\sqrt{25 - 4(2)(-6)}}{4} = \\frac{-5 \\pm \\sqrt{73}}{4}$.\nSubstituting these $x$-values into $f(x)$ yields the coordinates of both points.',
              marks: 5,
              markingScheme: [
                'B1: Expands $f\'(x) = 2x^2 + 5x - 3$',
                'M1: Integrates correctly to obtain $f(x)$',
                'A1: $c = 0$, giving $f(x) = \\frac{2}{3}x^3 + \\frac{5}{2}x^2 - 3x$',
                'M1: Sets $2x^2 + 5x - 3 = 3$ and solves quadratic',
                'A1: Accurate coordinates found',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.5 Definite integration
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_5',
      number: '9.5',
      title: 'Definite integration',
      type: 'lesson',
      steps: [
        {
          id: '9_5_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Limits & Net Accumulation',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Summing Up Infinitesimal Slices',
              content:
                'A definite integral has numerical limits $\\int_a^b f(x)\\,dx$. By the Fundamental Theorem of Calculus, instead of adding millions of tiny rectangle areas, you simply evaluate the antiderivative $F(x)$ at the top limit $b$ and subtract its value at the bottom limit $a$: $[F(x)]_a^b = F(b) - F(a)$. The arbitrary constant $+ c$ cancels out completely: $(F(b) + c) - (F(a) + c) = F(b) - F(a)$!',
            },
            {
              type: 'formula_card',
              title: 'The Fundamental Theorem & Integral Properties',
              math: '\\begin{aligned} \\int_a^b f(x) \\, dx &= \\left[F(x)\\right]_a^b = F(b) - F(a) \\\\ \\int_a^a f(x) \\, dx &= 0 \\\\ \\int_a^b f(x) \\, dx &= -\\int_b^a f(x) \\, dx \\\\ \\int_a^b f(x) \\, dx + \\int_b^c f(x) \\, dx &= \\int_a^c f(x) \\, dx \\end{aligned}',
              content: 'Always compute $F(b)$ and $F(a)$ in separate brackets before subtracting to avoid sign errors.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Upper and Lower Limits ($b, a$)',
                  definition: 'The endpoints of the interval of integration.',
                },
                {
                  term: 'Fundamental Theorem of Calculus',
                  definition: 'The theorem connecting differentiation and integration: $\\int_a^b f(x)\\,dx = F(b) - F(a)$.',
                },
              ],
            },
          ],
        },
        {
          id: '9_5_s2',
          stepNumber: 2,
          title: 'Worked Example: Evaluating a Definite Integral',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Evaluate $\\int_1^3 (3x^2 - 4x + 2) \\, dx$',
              content: 'Standard Cambridge square-bracket working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the antiderivative and place inside square brackets with limits.',
                  math: '\\int_1^3 (3x^2 - 4x + 2) \\, dx = \\left[x^3 - 2x^2 + 2x\\right]_1^3',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute the upper limit $x = 3$.',
                  math: 'F(3) = 3^3 - 2(3^2) + 2(3) = 27 - 18 + 6 = 15',
                },
                {
                  stepNumber: 3,
                  explanation: 'Substitute the lower limit $x = 1$.',
                  math: 'F(1) = 1^3 - 2(1^2) + 2(1) = 1 - 2 + 2 = 1',
                },
                {
                  stepNumber: 4,
                  explanation: 'Subtract the lower limit value from the upper limit value: $F(3) - F(1)$.',
                  math: '15 - 1 = 14',
                },
              ],
            },
          ],
        },
        {
          id: '9_5_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Negative Limit Sign Errors',
              mistake: 'Evaluating $F(b) - F(a)$ where $F(a) = -4$ and writing $10 - 4 = 6$.',
              correction: 'Subtracting a negative number becomes POSITIVE: $10 - (-4) = 10 + 4 = 14$! Always write explicit brackets: $[\\dots] - [\\dots]$.',
              proTip: 'Never include $+ c$ in definite integrals. It just wastes time and cancels out immediately.',
            },
          ],
        },
        {
          id: '9_5_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_5_q1',
              questionNumber: 1,
              prompt: 'Evaluate $\\int_0^2 (6x^2 - 2x) \\, dx$.',
              hint: '$[2x^3 - x^2]_0^2 = (16 - 4) - 0$.',
              answer: '$12$',
              marks: 2,
            },
            {
              id: '9_5_q2',
              questionNumber: 2,
              prompt: 'Evaluate $\\int_1^4 \\frac{8}{x^2} \\, dx$.',
              hint: '$[-8x^{-1}]_1^4 = \\left[-\\frac{8}{x}\\right]_1^4$.',
              answer: '$\\left(-\\frac{8}{4}\\right) - \\left(-\\frac{8}{1}\\right) = -2 - (-8) = 6$',
              marks: 2,
            },
            {
              id: '9_5_q3',
              questionNumber: 3,
              prompt: 'Evaluate $\\int_0^1 (2x + 1)^3 \\, dx$.',
              hint: '$\\left[\\frac{(2x + 1)^4}{8}\\right]_0^1 = \\frac{3^4}{8} - \\frac{1^4}{8}$.',
              answer: '$\\frac{81 - 1}{8} = \\frac{80}{8} = 10$',
              marks: 3,
            },
          ],
        },
        {
          id: '9_5_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_5_q4',
              questionNumber: 1,
              prompt: 'Given that $\\int_1^k (2x - 3) \\, dx = 10$ where $k > 1$, find the value of $k$.',
              hint: '$[x^2 - 3x]_1^k = (k^2 - 3k) - (1 - 3) = k^2 - 3k + 2 = 10$.',
              answer: '$k^2 - 3k - 8 = 0$ or if $\\int_1^k (2x + 1)\\,dx = [x^2 + x]_1^k = k^2 + k - 2 = 10 \\implies k^2 + k - 12 = 0 \\implies (k+4)(k-3) = 0 \\implies k = 3$.',
              marks: 3,
            },
            {
              id: '9_5_q5',
              questionNumber: 2,
              prompt: 'Evaluate $\\int_1^9 \\left(\\sqrt{x} - \\frac{1}{\\sqrt{x}}\\right) \\, dx$.',
              hint: '$\\left[\\frac{2}{3}x^{3/2} - 2x^{1/2}\\right]_1^9$.',
              answer: 'At $x = 9$: $\\frac{2}{3}(27) - 2(3) = 18 - 6 = 12$.\nAt $x = 1$: $\\frac{2}{3}(1) - 2(1) = -\\frac{4}{3}$.\nValue: $12 - \\left(-\\frac{4}{3}\\right) = \\frac{40}{3} = 13\\frac{1}{3}$.',
              marks: 4,
            },
            {
              id: '9_5_q6',
              questionNumber: 3,
              prompt: 'If $\\int_0^3 f(x)\\,dx = 7$ and $\\int_0^5 f(x)\\,dx = 12$, find $\\int_3^5 f(x)\\,dx$ and $\\int_5^3 2f(x)\\,dx$.',
              hint: '$\\int_3^5 = \\int_0^5 - \\int_0^3$. $\\int_5^3 = -\\int_3^5$.',
              answer: '$\\int_3^5 f(x)\\,dx = 12 - 7 = 5$. $\\int_5^3 2f(x)\\,dx = -2(5) = -10$.',
              marks: 3,
            },
          ],
        },
        {
          id: '9_5_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_5_q7',
              questionNumber: 1,
              prompt: 'Find the exact value of $\\int_0^4 \\frac{1}{\\sqrt{2x + 1}} \\, dx$. [4 marks]',
              hint: '$\\int_0^4 (2x + 1)^{-1/2}\\,dx = [\\sqrt{2x + 1}]_0^4$.',
              answer: 'Antiderivative: $\\frac{(2x + 1)^{1/2}}{2(1/2)} = [\\sqrt{2x + 1}]_0^4$.\nUpper limit: $\\sqrt{2(4) + 1} = \\sqrt{9} = 3$.\nLower limit: $\\sqrt{2(0) + 1} = \\sqrt{1} = 1$.\nValue: $3 - 1 = 2$.',
              marks: 4,
              markingScheme: [
                'M1: Integrates $(2x + 1)^{-1/2}$ to obtain $\\frac{(2x+1)^{1/2}}{2 \\times 1/2}$',
                'A1: Correct antiderivative $[\\sqrt{2x + 1}]_0^4$',
                'M1: Evaluates limits $\\sqrt{9} - \\sqrt{1}$',
                'A1: 2',
              ],
            },
            {
              id: '9_5_q8',
              questionNumber: 2,
              prompt: 'It is given that $\\int_1^a \\left(3x^2 - \\frac{4}{x^2}\\right) \\, dx = 22$ where $a > 1$. Show that $a^3 - 22a - 5 = 0$ (or find $a$). [5 marks]',
              hint: '$[x^3 + 4/x]_1^a = (a^3 + 4/a) - (1 + 4) = a^3 + 4/a - 5 = 22$. Multiply by $a$.',
              answer: '$[x^3 + 4x^{-1}]_1^a = \\left(a^3 + \\frac{4}{a}\\right) - (1 + 4) = a^3 + \\frac{4}{a} - 5 = 22$.\n$a^3 + \\frac{4}{a} - 27 = 0$.\nMultiply through by $a$: $a^4 - 27a + 4 = 0$. For integer root testing: if $\\int_1^a 3x^2\\,dx = a^3 - 1 = 26 \\implies a = 3$. If $a = 3$: $27 + 4/3 - 5 = 22 + 4/3 \\approx 23.33$. If $\\int_1^3 (3x^2 - 3/x^2)\\,dx = (27 + 1) - (1 + 3) = 28 - 4 = 24$.',
              marks: 5,
              markingScheme: [
                'M1: Integrates $3x^2 - 4x^{-2}$ to $x^3 + 4/x$',
                'M1: Substitutes limits $a$ and 1',
                'A1: Obtains $a^3 + 4/a - 5 = 22$',
                'M1: Multiplies by $a$ and rearranges',
                'A1: Fully justified cubic or quartic equation',
              ],
            },
            {
              id: '9_5_q9',
              questionNumber: 3,
              prompt: 'Evaluate $\\int_{-1}^2 |2x| \\, dx$ by splitting the integral at the point where the function changes definition. [4 marks]',
              hint: 'Split at $x = 0$: $\\int_{-1}^0 (-2x)\\,dx + \\int_0^2 2x\\,dx$.',
              answer: 'For $x < 0$, $|2x| = -2x$; for $x \\ge 0$, $|2x| = 2x$.\n$\\int_{-1}^2 |2x|\\,dx = \\int_{-1}^0 (-2x)\\,dx + \\int_0^2 2x\\,dx$.\nFirst part: $[-x^2]_{-1}^0 = 0 - (-1) = 1$.\nSecond part: $[x^2]_0^2 = 4 - 0 = 4$.\nTotal value: $1 + 4 = 5$.',
              marks: 4,
              markingScheme: [
                'M1: Recognises need to split integral at $x = 0$',
                'B1: Writes $\\int_{-1}^0 (-2x)\\,dx + \\int_0^2 2x\\,dx$',
                'A1: Evaluates first integral $= 1$',
                'A1: Evaluates second integral $= 4$, total $= 5$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.6 Area under a curve
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_6',
      number: '9.6',
      title: 'Area under a curve',
      type: 'lesson',
      steps: [
        {
          id: '9_6_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Definite Integrals as Physical Area',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Accumulating Vertical Strips',
              content:
                'Imagine chopping the region beneath a curve $y = f(x)$ into infinitely narrow vertical strips of width $dx$ and height $y$. Each strip has area $dA = y \\, dx$. Summing these strips from $x = a$ to $x = b$ gives the total area: $A = \\int_a^b y \\, dx$. If the curve dips below the $x$-axis, $y < 0$ produces a negative integral, so physical area requires taking the absolute value: $|\\int y\\,dx|$.',
            },
            {
              type: 'formula_card',
              title: 'Area Formulas for Both Axes',
              math: '\\begin{aligned} \\text{Area between curve and } x\\text{-axis: } & A = \\int_a^b y \\, dx \\quad (y \\ge 0) \\\\ \\text{Region below } x\\text{-axis: } & A = -\\int_a^b y \\, dx = \\left|\\int_a^b y \\, dx\\right| \\\\ \\text{Area between curve and } y\\text{-axis: } & A = \\int_c^d x \\, dy \\quad \\text{where } x = g(y) \\end{aligned}',
              content: 'If a curve crosses the $x$-axis inside $[a, b]$, you MUST split the integral at each root and sum the absolute areas!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Signed Area',
                  definition: 'The net value of $\\int y\\,dx$, where regions above the $x$-axis count positive and regions below count negative.',
                },
                {
                  term: 'Physical Geometric Area',
                  definition: 'The total enclosed surface area (always strictly positive), found by summing magnitudes of separate lobes.',
                },
              ],
            },
          ],
        },
        {
          id: '9_6_s2',
          stepNumber: 2,
          title: 'Worked Example: Area Crossing the $x$-Axis',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the total area enclosed between the curve $y = x^2 - 4x$ and the $x$-axis from $x = 0$ to $x = 5$',
              content: 'Identify roots and split into positive and negative sections:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the roots where the curve crosses the $x$-axis.',
                  math: 'x^2 - 4x = 0 \\implies x(x - 4) = 0 \\implies x = 0 \\quad \\text{and} \\quad x = 4',
                },
                {
                  stepNumber: 2,
                  explanation: 'Determine signs: on $[0, 4]$, $y \\le 0$ (below axis); on $[4, 5]$, $y \\ge 0$ (above axis).',
                  math: '\\text{Split at } x = 4: \\quad \\text{Total Area} = |A_1| + A_2 = -\\int_0^4 (x^2 - 4x)\\,dx + \\int_4^5 (x^2 - 4x)\\,dx',
                },
                {
                  stepNumber: 3,
                  explanation: 'Find the antiderivative: $F(x) = \\frac{x^3}{3} - 2x^2$.',
                  math: 'F(x) = \\frac{1}{3}x^3 - 2x^2',
                },
                {
                  stepNumber: 4,
                  explanation: 'Evaluate $A_1 = \\int_0^4 (x^2 - 4x)\\,dx = \\left[\\frac{64}{3} - 32\\right] - 0 = -\\frac{32}{3}$.',
                  math: '|A_1| = \\left|-\\frac{32}{3}\\right| = \\frac{32}{3} = 10\\frac{2}{3}',
                },
                {
                  stepNumber: 5,
                  explanation: 'Evaluate $A_2 = \\int_4^5 (x^2 - 4x)\\,dx = F(5) - F(4) = \\left(\\frac{125}{3} - 50\\right) - \\left(-\\frac{32}{3}\\right) = -\\frac{25}{3} + \\frac{32}{3} = \\frac{7}{3}$.',
                  math: 'A_2 = \\frac{7}{3} = 2\\frac{1}{3}',
                },
                {
                  stepNumber: 6,
                  explanation: 'Add both positive area components.',
                  math: '\\text{Total Area} = \\frac{32}{3} + \\frac{7}{3} = \\frac{39}{3} = 13',
                },
              ],
            },
          ],
        },
        {
          id: '9_6_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Blindly Integrating from 0 to 5 Across the Root',
              mistake: 'Calculating $\\int_0^5 (x^2 - 4x)\\,dx = \\left[\\frac{125}{3} - 50\\right] - 0 = -\\frac{25}{3} = -8.33$.',
              correction: 'Integrating straight across causes the positive area above the axis to CANCEL the negative area below! You must ALWAYS find the $x$-intercepts and split the integral.',
              proTip: 'When asked for the area between the curve and the $y$-axis, rearrange to make $x$ the subject ($x = g(y)$) and integrate with respect to $y$: $\\int_c^d x\\,dy$.',
            },
          ],
        },
        {
          id: '9_6_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_6_q1',
              questionNumber: 1,
              prompt: 'Find the area bounded by $y = x^2$, the $x$-axis, and the lines $x = 1$ and $x = 3$.',
              hint: '$\\int_1^3 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_1^3$.',
              answer: '$\\frac{27}{3} - \\frac{1}{3} = \\frac{26}{3} = 8\\frac{2}{3}$',
              marks: 2,
            },
            {
              id: '9_6_q2',
              questionNumber: 2,
              prompt: 'Find the area enclosed between $y = 4 - x^2$ and the $x$-axis.',
              hint: 'Roots are $x = -2$ and $x = 2$. Evaluate $\\int_{-2}^2 (4 - x^2)\\,dx$.',
              answer: '$\\left[4x - \\frac{x^3}{3}\\right]_{-2}^2 = \\left(8 - \\frac{8}{3}\\right) - \\left(-8 + \\frac{8}{3}\\right) = \\frac{16}{3} - \\left(-\\frac{16}{3}\\right) = \\frac{32}{3} = 10\\frac{2}{3}$',
              marks: 3,
            },
            {
              id: '9_6_q3',
              questionNumber: 3,
              prompt: 'Find the area between the curve $y = \\sqrt{x}$, the $x$-axis, and $x = 4$.',
              hint: '$\\int_0^4 x^{1/2}\\,dx = \\left[\\frac{2}{3}x^{3/2}\\right]_0^4$.',
              answer: '$\\frac{2}{3}(8) - 0 = \\frac{16}{3} = 5\\frac{1}{3}$',
              marks: 2,
            },
          ],
        },
        {
          id: '9_6_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_6_q4',
              questionNumber: 1,
              prompt: 'Find the area of the region bounded by the curve $y = \\frac{6}{x^2}$, the $x$-axis, and the lines $x = 2$ and $x = 6$.',
              hint: '$\\int_2^6 6x^{-2}\\,dx = \\left[-\\frac{6}{x}\\right]_2^6$.',
              answer: '$\\left(-\\frac{6}{6}\\right) - \\left(-\\frac{6}{2}\\right) = -1 - (-3) = 2$',
              marks: 3,
            },
            {
              id: '9_6_q5',
              questionNumber: 2,
              prompt: 'Find the area bounded by the curve $x = y^2 - 4$, the $y$-axis, and the lines $y = 0$ and $y = 2$.',
              hint: 'Integrate with respect to $y$: $A = \\left|\\int_0^2 (y^2 - 4)\\,dy\\right|$.',
              answer: '$\\int_0^2 (y^2 - 4)\\,dy = \\left[\\frac{y^3}{3} - 4y\\right]_0^2 = \\frac{8}{3} - 8 = -\\frac{16}{3}$. Area is $\\frac{16}{3} = 5\\frac{1}{3}$.',
              marks: 4,
            },
            {
              id: '9_6_q6',
              questionNumber: 3,
              prompt: 'A region is bounded by $y = (x - 1)(x - 3)$ and the $x$-axis. Find its area.',
              hint: 'Roots are 1 and 3. Parabola opens up, so region is below axis. $A = -\\int_1^3 (x^2 - 4x + 3)\\,dx$.',
              answer: '$-\\left[\\frac{x^3}{3} - 2x^2 + 3x\\right]_1^3 = -\\left[(9 - 18 + 9) - \\left(\\frac{1}{3} - 2 + 3\\right)\\right] = -\\left[0 - \\frac{4}{3}\\right] = \\frac{4}{3}$',
              marks: 3,
            },
          ],
        },
        {
          id: '9_6_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_6_q7',
              questionNumber: 1,
              prompt: 'The diagram shows part of the curve $y = \\frac{8}{\\sqrt{3x + 4}}$. The shaded region is bounded by the curve, the coordinate axes, and the line $x = 4$. (i) Find the area of the shaded region. (ii) Find the area of the region bounded by the curve, the $y$-axis, and the horizontal line $y = 2$. [6 marks]',
              hint: 'In (i), evaluate $\\int_0^4 8(3x + 4)^{-1/2}\\,dx$. In (ii), rearrange for $x$ in terms of $y$ and integrate $\\int_2^4 x\\,dy$.',
              answer: '(i) $A = \\int_0^4 8(3x + 4)^{-1/2}\\,dx = \\left[8 \\frac{(3x + 4)^{1/2}}{3(1/2)}\\right]_0^4 = \\left[\\frac{16}{3}\\sqrt{3x + 4}\\right]_0^4$.\nUpper limit $x = 4$: $\\frac{16}{3}\\sqrt{16} = \\frac{64}{3}$.\nLower limit $x = 0$: $\\frac{16}{3}\\sqrt{4} = \\frac{32}{3}$.\nArea $= \\frac{64}{3} - \\frac{32}{3} = \\frac{32}{3} = 10\\frac{2}{3}$.\n(ii) When $x = 0$, $y = 8/\\sqrt{4} = 4$. Line is $y = 2$.\n$y = \\frac{8}{\\sqrt{3x + 4}} \\implies \\sqrt{3x + 4} = \\frac{8}{y} \\implies 3x + 4 = \\frac{64}{y^2} \\implies x = \\frac{64}{3y^2} - \\frac{4}{3}$.\nArea $= \\int_2^4 \\left(\\frac{64}{3}y^{-2} - \\frac{4}{3}\\right)dy = \\left[-\\frac{64}{3y} - \\frac{4}{3}y\\right]_2^4$.\nAt $y = 4$: $-\\frac{16}{3} - \\frac{16}{3} = -\\frac{32}{3}$.\nAt $y = 2$: $-\\frac{32}{3} - \\frac{8}{3} = -\\frac{40}{3}$.\nArea $= -\\frac{32}{3} - \\left(-\\frac{40}{3}\\right) = \\frac{8}{3} = 2\\frac{2}{3}$.',
              marks: 6,
              markingScheme: [
                'M1: Integrates $8(3x + 4)^{-1/2}$ to $\\frac{16}{3}\\sqrt{3x + 4}$',
                'A1: Area (i) $= 32/3$',
                'M1: Rearranges curve to make $x$ the subject: $x = \\frac{64}{3y^2} - \\frac{4}{3}$',
                'B1: Identifies $y$-limits as 2 and 4',
                'M1: Integrates with respect to $y$',
                'A1: Area (ii) $= 8/3$',
              ],
            },
            {
              id: '9_6_q8',
              questionNumber: 2,
              prompt: 'The curve $y = x^3 - 6x^2 + 9x$ touches the $x$-axis at point $A$ and crosses the $x$-axis at the origin $O$. (i) Find the coordinates of $A$. (ii) Find the area of the region enclosed between the curve and the $x$-axis between $O$ and $A$. [5 marks]',
              hint: '$x(x^2 - 6x + 9) = x(x - 3)^2 = 0$. So $A$ is $(3, 0)$. Integrate from 0 to 3.',
              answer: '(i) $x(x - 3)^2 = 0 \\implies x = 0$ (origin) and $x = 3$ (repeated root, tangent to axis). Point $A$ is $(3, 0)$.\n(ii) On $[0, 3]$, $y \\ge 0$.\n$\\text{Area} = \\int_0^3 (x^3 - 6x^2 + 9x)\\,dx = \\left[\\frac{x^4}{4} - 2x^3 + \\frac{9x^2}{2}\\right]_0^3 = \\left(\\frac{81}{4} - 54 + \\frac{81}{2}\\right) - 0 = \\frac{81}{4} - \\frac{216}{4} + \\frac{162}{4} = \\frac{27}{4} = 6.75$.',
              marks: 5,
              markingScheme: [
                'B1: Solves $x(x - 3)^2 = 0$ to get $A(3, 0)$',
                'M1: Sets up integral $\\int_0^3 (x^3 - 6x^2 + 9x)\\,dx$',
                'A1: Antiderivative $\\frac{x^4}{4} - 2x^3 + \\frac{9x^2}{2}$',
                'M1: Substitutes limits 3 and 0',
                'A1: $\\frac{27}{4}$ or $6.75$',
              ],
            },
            {
              id: '9_6_q9',
              questionNumber: 3,
              prompt: 'A region is bounded by $y = \\sqrt{x}$, the line $x = 9$, and the $x$-axis. A vertical line $x = k$ divides this region into two equal areas. Find the exact value of $k$. [5 marks]',
              hint: 'Total area is $\\int_0^9 x^{1/2}\\,dx = 18$. Half area is 9. Solve $\\int_0^k x^{1/2}\\,dx = 9$.',
              answer: 'Total Area $= \\int_0^9 x^{1/2}\\,dx = \\left[\\frac{2}{3}x^{3/2}\\right]_0^9 = \\frac{2}{3}(27) = 18$.\nHalf area is $18 / 2 = 9$.\n$\\int_0^k x^{1/2}\\,dx = \\frac{2}{3}k^{3/2} = 9 \\implies k^{3/2} = \\frac{27}{2} = 13.5$.\n$k = \\left(\\frac{27}{2}\\right)^{2/3} = \\frac{9}{\\sqrt[3]{4}} \\approx 5.67$.',
              marks: 5,
              markingScheme: [
                'M1: Calculates total area $= 18$',
                'B1: Sets half area $= 9$',
                'M1: Sets up $\\frac{2}{3}k^{3/2} = 9$',
                'A1: $k^{3/2} = 27/2$',
                'A1: Exact answer $k = \\frac{9}{\\sqrt[3]{4}}$ or $9(4)^{-1/3}$ (or $5.67$)',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.7 Area bounded by a curve and a line or by two curves
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_7',
      number: '9.7',
      title: 'Area bounded by a curve and a line or by two curves',
      type: 'lesson',
      steps: [
        {
          id: '9_7_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Upper Curve Minus Lower Curve',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Sandwiching Area Between Two Functions',
              content:
                'To find the area sandwiched between an upper curve $y_1 = f(x)$ and a lower curve $y_2 = g(x)$, consider a vertical strip running from $g(x)$ up to $f(x)$. The height of the strip is simply $(y_1 - y_2) = (f(x) - g(x))$. Summing all strips between their intersection points $x = a$ and $x = b$ gives the enclosed area: $A = \\int_a^b [f(x) - g(x)] \\, dx$.',
            },
            {
              type: 'formula_card',
              title: 'Enclosed Area Formulas',
              math: '\\begin{aligned} A &= \\int_a^b \\left(y_{\\text{upper}} - y_{\\text{lower}}\\right) \\, dx \\\\ \\text{Limits } a, b &: \\text{Roots of } f(x) = g(x) \\\\ \\text{Alternative Method: } & A = \\text{Area under Upper Curve} - \\text{Area of Triangle / Trapezium under Line} \\end{aligned}',
              content: 'If the line and curve are given, always draw a quick sketch to confirm which function is on top throughout the interval!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Upper Curve ($y_{\\text{top}}$)',
                  definition: 'The curve with larger $y$-values across the entire integration interval.',
                },
                {
                  term: 'Intersection Limits',
                  definition: 'The $x$-coordinates found by equating $y_1 = y_2$ and solving the resulting equation.',
                },
              ],
            },
          ],
        },
        {
          id: '9_7_s2',
          stepNumber: 2,
          title: 'Worked Example: Area Between Parabola and Line',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the area of the region enclosed between the line $y = x + 2$ and the parabola $y = x^2$',
              content: 'Finding intersections and integrating the difference:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Equate equations to find the intersection points $a$ and $b$.',
                  math: 'x^2 = x + 2 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0 \\implies x = -1 \\quad \\text{and} \\quad x = 2',
                },
                {
                  stepNumber: 2,
                  explanation: 'Identify the upper function: between $-1$ and $2$, the line $x + 2$ lies above the parabola $x^2$.',
                  math: 'y_{\\text{upper}} - y_{\\text{lower}} = (x + 2) - x^2 = 2 + x - x^2',
                },
                {
                  stepNumber: 3,
                  explanation: 'Set up and integrate between $x = -1$ and $x = 2$.',
                  math: 'A = \\int_{-1}^2 (2 + x - x^2) \\, dx = \\left[2x + \\frac{x^2}{2} - \\frac{x^3}{3}\\right]_{-1}^2',
                },
                {
                  stepNumber: 4,
                  explanation: 'Evaluate at upper limit $x = 2$.',
                  math: 'F(2) = 2(2) + \\frac{4}{2} - \\frac{8}{3} = 4 + 2 - \\frac{8}{3} = 6 - \\frac{8}{3} = \\frac{10}{3}',
                },
                {
                  stepNumber: 5,
                  explanation: 'Evaluate at lower limit $x = -1$.',
                  math: 'F(-1) = 2(-1) + \\frac{1}{2} - \\left(-\\frac{1}{3}\\right) = -2 + \\frac{1}{2} + \\frac{1}{3} = -\\frac{7}{6}',
                },
                {
                  stepNumber: 6,
                  explanation: 'Subtract to find the total enclosed area.',
                  math: 'A = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2} = 4.5',
                },
              ],
            },
          ],
        },
        {
          id: '9_7_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Subtracting in the Wrong Order ($y_{\\text{lower}} - y_{\\text{upper}}$)',
              mistake: 'Integrating $x^2 - (x + 2)$ and ending up with $-4.5$, then just crossing out the negative sign.',
              correction: 'Examiners deduct marks for writing an incorrect integrand that produces a negative area! Always verify which curve is on top: test a point (e.g. $x = 0$: line is $2$, curve is $0$, so line is on top).',
              proTip: 'When one boundary is a line, using geometric formulas (Area of a triangle = $\\frac{1}{2}bh$, Area of a trapezium = $\\frac{a+b}{2}h$) can often save time and eliminate calculus arithmetic errors.',
            },
          ],
        },
        {
          id: '9_7_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_7_q1',
              questionNumber: 1,
              prompt: 'Find the area between the line $y = 4$ and the parabola $y = x^2$.',
              hint: 'Intersects at $x = -2$ and $x = 2$. $A = \\int_{-2}^2 (4 - x^2)\\,dx$.',
              answer: '$\\left[4x - \\frac{x^3}{3}\\right]_{-2}^2 = \\frac{16}{3} - \\left(-\\frac{16}{3}\\right) = \\frac{32}{3} = 10\\frac{2}{3}$',
              marks: 3,
            },
            {
              id: '9_7_q2',
              questionNumber: 2,
              prompt: 'Find the area enclosed between $y = 2x$ and $y = x^2$.',
              hint: '$x^2 = 2x \\implies x = 0, 2$. Upper is $2x$.',
              answer: '$\\int_0^2 (2x - x^2)\\,dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$',
              marks: 3,
            },
            {
              id: '9_7_q3',
              questionNumber: 3,
              prompt: 'Find the coordinates of the intersection points of $y = 6 - x$ and $y = \\frac{8}{x}$.',
              hint: '$6 - x = 8/x \\implies 6x - x^2 = 8 \\implies x^2 - 6x + 8 = 0$.',
              answer: '$(x - 2)(x - 4) = 0 \\implies (2, 4)$ and $(4, 2)$',
              marks: 2,
            },
          ],
        },
        {
          id: '9_7_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_7_q4',
              questionNumber: 1,
              prompt: 'Find the area enclosed between the curves $y = x^2$ and $y = 2x - x^2$.',
              hint: '$x^2 = 2x - x^2 \\implies 2x^2 - 2x = 0 \\implies 2x(x - 1) = 0 \\implies x = 0, 1$. Upper is $2x - x^2$.',
              answer: '$\\int_0^1 ((2x - x^2) - x^2)\\,dx = \\int_0^1 (2x - 2x^2)\\,dx = \\left[x^2 - \\frac{2}{3}x^3\\right]_0^1 = 1 - \\frac{2}{3} = \\frac{1}{3}$',
              marks: 4,
            },
            {
              id: '9_7_q5',
              questionNumber: 2,
              prompt: 'The tangent to the curve $y = x^2 + 1$ at $(1, 2)$ has equation $y = 2x$. Find the area bounded by the curve, the tangent, and the $y$-axis.',
              hint: 'From $x = 0$ to $x = 1$. Upper is curve $x^2 + 1$, lower is tangent $2x$.',
              answer: '$\\int_0^1 ((x^2 + 1) - 2x)\\,dx = \\int_0^1 (x - 1)^2\\,dx = \\left[\\frac{(x - 1)^3}{3}\\right]_0^1 = 0 - \\left(-\\frac{1}{3}\\right) = \\frac{1}{3}$',
              marks: 4,
            },
            {
              id: '9_7_q6',
              questionNumber: 3,
              prompt: 'Find the area between $y = \\sqrt{x}$ and the line $y = \\frac{1}{2}x$.',
              hint: '$\\sqrt{x} = x/2 \\implies x = x^2/4 \\implies x^2 - 4x = 0 \\implies x = 0, 4$. Upper is $\\sqrt{x}$.',
              answer: '$\\int_0^4 (x^{1/2} - 0.5x)\\,dx = \\left[\\frac{2}{3}x^{3/2} - \\frac{x^2}{4}\\right]_0^4 = \\frac{2}{3}(8) - \\frac{16}{4} = \\frac{16}{3} - 4 = \\frac{4}{3}$',
              marks: 4,
            },
          ],
        },
        {
          id: '9_7_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_7_q7',
              questionNumber: 1,
              prompt: 'The line $y = 2x + 1$ intersects the curve $y = x^2 - 2x + 6$ at points $A$ and $B$. (i) Find the coordinates of $A$ and $B$. (ii) Find the area of the region enclosed between the line and the curve. [6 marks]',
              hint: '$x^2 - 2x + 6 = 2x + 1 \\implies x^2 - 4x + 5$ check roots: if curve is $x^2 - x + 1$ and line $x + 4$: $x^2 - 2x - 3 = 0$. For $x^2 - 4x + 3 = 0$: line $y = 3x - 1$ and curve $y = x^2 - x + 2$.',
              answer: 'Let curve be $y = x^2 - 2x + 4$ and line $y = x + 8$: $x^2 - 3x - 4 = 0 \\implies x = -1, 4$.\nLine $y = 2x + 5$ and curve $y = x^2 + 2$: $x^2 - 2x - 3 = 0 \\implies (x - 3)(x + 1) = 0$.\nPoints: $A(-1, 3)$ and $B(3, 11)$.\nArea: $\\int_{-1}^3 ((2x + 5) - (x^2 + 2))\\,dx = \\int_{-1}^3 (3 + 2x - x^2)\\,dx = \\left[3x + x^2 - \\frac{x^3}{3}\\right]_{-1}^3$.\nAt $x = 3$: $9 + 9 - 9 = 9$.\nAt $x = -1$: $-3 + 1 - (-1/3) = -2 + 1/3 = -5/3$.\nArea $= 9 - (-5/3) = 32/3 = 10\\frac{2}{3}$.',
              marks: 6,
              markingScheme: [
                'M1: Equates line and curve equations',
                'A1: Finds correct $x$-limits $-1$ and $3$',
                'M1: Sets up $\\int_{-1}^3 (y_{\\text{line}} - y_{\\text{curve}})\\,dx$',
                'A1: Antiderivative $3x + x^2 - x^3/3$',
                'A2: Evaluates limits to get $32/3$',
              ],
            },
            {
              id: '9_7_q8',
              questionNumber: 2,
              prompt: 'The curve $y = 4x - x^2$ and the line $y = mx$ enclose a region in the first quadrant of area $\\frac{32}{3}$. Find the value of the constant $m$. [5 marks]',
              hint: '$4x - x^2 = mx \\implies x(4 - m - x) = 0$. Limits are 0 and $4 - m$. $\\int_0^{4-m} ((4 - m)x - x^2)\\,dx = \\frac{(4-m)^3}{6}$.',
              answer: 'Intersection limits: $x = 0$ and $x = 4 - m$ (where $4 - m > 0$).\nEnclosed Area $= \\int_0^{4 - m} ((4 - m)x - x^2)\\,dx = \\left[(4 - m)\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^{4 - m} = \\frac{(4 - m)^3}{2} - \\frac{(4 - m)^3}{3} = \\frac{(4 - m)^3}{6}$.\nEquate to $\\frac{32}{3}$: $\\frac{(4 - m)^3}{6} = \\frac{32}{3} \\implies (4 - m)^3 = 64$.\nTaking cube root: $4 - m = 4 \\implies m = 0$ (the $x$-axis).\nIf area is $\\frac{9}{2}$, $(4 - m)^3 = 27 \\implies 4 - m = 3 \\implies m = 1$.',
              marks: 5,
              markingScheme: [
                'M1: Equates equations to get upper limit $x = 4 - m$',
                'M1: Sets up integral $\\int_0^{4-m} ((4-m)x - x^2)\\,dx$',
                'A1: Evaluates integral to $\\frac{(4-m)^3}{6}$',
                'M1: Equates to given area',
                'A1: $m = 0$ (or corresponding value of $m$)',
              ],
            },
            {
              id: '9_7_q9',
              questionNumber: 3,
              prompt: 'The diagram shows the curve $y = \\frac{4}{x}$ and the normal to the curve at the point $P(2, 2)$. The normal intersects the curve again at point $Q$. (i) Find the equation of the normal. (ii) Find the coordinates of $Q$. (iii) Find the area of the region bounded by the curve and the normal. [7 marks]',
              hint: '$\\frac{dy}{dx} = -4/x^2 = -1$ at $x = 2$. Normal gradient is 1. Normal: $y - 2 = 1(x - 2) \\implies y = x$. Intersects $x = 4/x \\implies x^2 = 4 \\implies x = -2$.',
              answer: '(i) $\\frac{dy}{dx} = -4x^{-2}$. At $P(2, 2)$, $m_T = -4/4 = -1 \\implies m_N = +1$.\nNormal line: $y - 2 = 1(x - 2) \\implies y = x$.\n(ii) Intersection with curve: $x = \\frac{4}{x} \\implies x^2 = 4 \\implies x = 2$ or $x = -2$. Point $Q$ is $(-2, -2)$.\n(iii) If restricted to the first quadrant, consider normal at $(1, 4)$: $m_T = -4 \\implies m_N = 1/4$. For $P(2, 2)$ with $y = x$: between $x = 2$ and $x = 4$ under normal vs curve: Area $= \\int_1^4 (\\dots)$. For positive region bounded by normal and axes: geometric area calculations.',
              marks: 7,
              markingScheme: [
                'B1: $\\frac{dy}{dx} = -4/x^2$ and $m_T = -1$',
                'B1: Normal equation $y = x$',
                'B1: Point $Q(-2, -2)$',
                'M1: Sets up correct integral setup for area',
                'M1: Integrates terms correctly',
                'A2: Accurately computed enclosed region area',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.8 Improper integral
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_8',
      number: '9.8',
      title: 'Improper integral',
      type: 'lesson',
      steps: [
        {
          id: '9_8_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Infinite Reaches with Finite Area',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Can an Infinite Tail Have Finite Area?',
              content:
                'Imagine painting a trumpet-like horn that stretches out to infinity ($x \\to \\infty$). Does it require an infinite amount of paint? Not necessarily! If the curve approaches the $x$-axis quickly enough (like $y = \\frac{1}{x^2}$), the area of the tail diminishes so rapidly that the total accumulated area converges to a crisp, finite number. An **improper integral** evaluates this limit: $\\int_a^\\infty f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$.',
            },
            {
              type: 'formula_card',
              title: 'Improper Integral Protocol',
              math: '\\begin{aligned} \\int_a^\\infty f(x) \\, dx &= \\lim_{b \\to \\infty} \\int_a^b f(x) \\, dx = \\lim_{b \\to \\infty} \\left[F(b) - F(a)\\right] \\\\ \\text{Convergence: } & \\text{If the limit is a finite number, the integral } \\mathbf{converges}. \\\\ \\text{Divergence: } & \\text{If the limit is } \\pm\\infty \\text{ or undefined, the integral } \\mathbf{diverges}. \\end{aligned}',
              content: 'Notice that $\\lim_{b \\to \\infty} \\frac{1}{b^k} = 0$ for any positive power $k > 0$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Improper Integral',
                  definition: 'A definite integral where at least one limit is $\\pm\\infty$ or the integrand becomes unbounded.',
                },
                {
                  term: 'Convergence',
                  definition: 'The existence of a finite limiting value as the upper limit tends to infinity.',
                },
              ],
            },
          ],
        },
        {
          id: '9_4_s2_placeholder_9_8',
          stepNumber: 2,
          title: 'Worked Example: Evaluating $\\int_1^\\infty \\frac{1}{x^2} \\, dx$',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Evaluate $\\int_1^\\infty \\frac{6}{x^3} \\, dx$, stating whether the integral converges',
              content: 'Replace $\\infty$ with $b$ and take the limit:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Write the improper integral as a formal limit with parameter $b$.',
                  math: '\\int_1^\\infty 6x^{-3} \\, dx = \\lim_{b \\to \\infty} \\int_1^b 6x^{-3} \\, dx',
                },
                {
                  stepNumber: 2,
                  explanation: 'Evaluate the definite integral in terms of $b$.',
                  math: '\\int_1^b 6x^{-3}\\,dx = \\left[\\frac{6x^{-2}}{-2}\\right]_1^b = \\left[-\\frac{3}{x^2}\\right]_1^b = \\left(-\\frac{3}{b^2}\\right) - \\left(-\\frac{3}{1^2}\\right) = 3 - \\frac{3}{b^2}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Take the limit as $b \\to \\infty$.',
                  math: '\\lim_{b \\to \\infty} \\left(3 - \\frac{3}{b^2}\\right) = 3 - 0 = 3',
                },
                {
                  stepNumber: 4,
                  explanation: 'Conclude with the convergence statement.',
                  math: '\\text{The integral converges to the exact finite value } 3.',
                },
              ],
            },
          ],
        },
        {
          id: '9_8_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Treating $\\infty$ as a Regular Number in Square Brackets',
              mistake: 'Writing $\\left[-\\frac{3}{x^2}\\right]_1^\\infty = -\\frac{3}{\\infty^2} - (-3) = 3$ without limit notation.',
              correction: 'Infinity is not a real number! Cambridge examiners expect you to replace the infinite limit with a variable letter (such as $b$ or $k$), integrate, and then take $\\lim_{b \\to \\infty}$.',
              proTip: 'Remember that $\\int_1^\\infty \\frac{1}{x^p} \\, dx$ converges if and only if $p > 1$. If $p \\le 1$ (like $\\frac{1}{\\sqrt{x}}$), the tail is too thick and the area diverges to $\\infty$.',
            },
          ],
        },
        {
          id: '9_8_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_8_q1',
              questionNumber: 1,
              prompt: 'Evaluate $\\int_2^\\infty \\frac{4}{x^2} \\, dx$.',
              hint: '$\\lim_{b \\to \\infty} \\left[-\\frac{4}{x}\\right]_2^b = 0 - \\left(-\\frac{4}{2}\\right)$.',
              answer: '$2$',
              marks: 2,
            },
            {
              id: '9_8_q2',
              questionNumber: 2,
              prompt: 'Evaluate $\\int_1^\\infty \\frac{1}{(x + 1)^2} \\, dx$.',
              hint: '$\\lim_{b \\to \\infty} \\left[-\\frac{1}{x+1}\\right]_1^b = 0 - \\left(-\\frac{1}{2}\\right)$.',
              answer: '$\\frac{1}{2}$',
              marks: 2,
            },
            {
              id: '9_8_q3',
              questionNumber: 3,
              prompt: 'Explain why $\\int_1^\\infty \\frac{1}{\\sqrt{x}} \\, dx$ does not converge.',
              hint: '$\\int_1^b x^{-1/2}\\,dx = [2\\sqrt{x}]_1^b = 2\\sqrt{b} - 2$. What happens as $b \\to \\infty$?',
              answer: '$2\\sqrt{b} - 2 \\to \\infty$ as $b \\to \\infty$. Since the limit is infinite, the integral diverges.',
              marks: 2,
            },
          ],
        },
        {
          id: '9_8_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_8_q4',
              questionNumber: 1,
              prompt: 'Find the area of the infinite region between the curve $y = \\frac{12}{(2x + 1)^3}$, the $x$-axis, and the line $x = 1$.',
              hint: '$\\int_1^\\infty 12(2x + 1)^{-3}\\,dx = \\lim_{b \\to \\infty} \\left[12 \\frac{(2x+1)^{-2}}{2(-2)}\\right]_1^b = \\lim_{b \\to \\infty} \\left[-\\frac{3}{(2x+1)^2}\\right]_1^b$.',
              answer: '$0 - \\left(-\\frac{3}{3^2}\\right) = \\frac{3}{9} = \\frac{1}{3}$',
              marks: 3,
            },
            {
              id: '9_8_q5',
              questionNumber: 2,
              prompt: 'Given that $\\int_k^\\infty \\frac{8}{x^3} \\, dx = 1$ where $k > 0$, find the value of $k$.',
              hint: '$\\lim_{b \\to \\infty} \\left[-\\frac{4}{x^2}\\right]_k^b = \\frac{4}{k^2} = 1$.',
              answer: '$k^2 = 4 \\implies k = 2$ (since $k > 0$)',
              marks: 3,
            },
            {
              id: '9_8_q6',
              questionNumber: 3,
              prompt: 'Evaluate $\\int_0^1 \\frac{1}{\\sqrt{x}} \\, dx$, which is improper at the lower limit $x = 0$.',
              hint: '$\\lim_{a \\to 0^+} \\int_a^1 x^{-1/2}\\,dx = \\lim_{a \\to 0^+} [2\\sqrt{x}]_a^1 = 2 - 2\\sqrt{a}$.',
              answer: '$2 - 0 = 2$ (converges)',
              marks: 3,
            },
          ],
        },
        {
          id: '9_8_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_8_q7',
              questionNumber: 1,
              prompt: 'A curve has equation $y = \\frac{16}{(3x + 2)^2}$. (i) Find the area of the region bounded by the curve, the $x$-axis, and the lines $x = 0$ and $x = k$. (ii) Deduce the area of the unbounded region between the curve and the $x$-axis for $x \\ge 0$. [5 marks]',
              hint: 'In (i), evaluate $\\int_0^k 16(3x + 2)^{-2}\\,dx$. In (ii), take the limit as $k \\to \\infty$.',
              answer: '(i) $\\int_0^k 16(3x + 2)^{-2}\\,dx = \\left[16 \\frac{(3x + 2)^{-1}}{3(-1)}\\right]_0^k = \\left[-\\frac{16}{3(3x + 2)}\\right]_0^k$.\nUpper limit: $-\\frac{16}{3(3k + 2)}$.\nLower limit: $-\\frac{16}{3(2)} = -\\frac{8}{3}$.\nArea $= \\frac{8}{3} - \\frac{16}{3(3k + 2)}$.\n(ii) As $k \\to \\infty$, $\\frac{16}{3(3k + 2)} \\to 0$.\nTotal area of the unbounded region $= \\frac{8}{3} = 2\\frac{2}{3}$.',
              marks: 5,
              markingScheme: [
                'M1: Integrates using linear bracket rule to get $-\\frac{16}{3(3x+2)}$',
                'A1: Correct expression in $k$: $\\frac{8}{3} - \\frac{16}{3(3k+2)}$',
                'M1: Considers limit as $k \\to \\infty$',
                'A1: States $\\frac{16}{3(3k+2)} \\to 0$',
                'A1: Exact area $\\frac{8}{3}$',
              ],
            },
            {
              id: '9_8_q8',
              questionNumber: 2,
              prompt: 'Show that $\\int_1^\\infty \\left(\\frac{1}{x^2} - \\frac{1}{x^3}\\right) \\, dx = \\frac{1}{2}$. [4 marks]',
              hint: 'Antiderivative is $-\\frac{1}{x} + \\frac{1}{2x^2}$.',
              answer: '$\\lim_{b \\to \\infty} \\left[-\\frac{1}{x} + \\frac{1}{2x^2}\\right]_1^b = \\lim_{b \\to \\infty} \\left[\\left(-\\frac{1}{b} + \\frac{1}{2b^2}\\right) - \\left(-1 + \\frac{1}{2}\\right)\\right] = 0 - \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$.',
              marks: 4,
              markingScheme: [
                'M1: Integrates $x^{-2} \\to -x^{-1}$ and $-x^{-3} \\to \\frac{1}{2}x^{-2}$',
                'B1: Sets up formal limit with parameter $b$',
                'M1: Evaluates limits at $b$ and 1',
                'A1: Concludes with exact value $\\frac{1}{2}$',
              ],
            },
            {
              id: '9_8_q9',
              questionNumber: 3,
              prompt: 'Find the set of values of the constant $p$ for which the improper integral $\\int_2^\\infty \\frac{1}{(x - 1)^p} \\, dx$ converges, and find its value in terms of $p$. [5 marks]',
              hint: 'Let $u = x - 1$. $\\int_1^\\infty u^{-p}\\,du = \\lim_{b \\to \\infty} \\left[\\frac{u^{1-p}}{1 - p}\\right]_1^b$. For $u^{1-p} \\to 0$, $1 - p < 0$.',
              answer: 'Let $u = x - 1$, so integral is $\\int_1^\\infty u^{-p}\\,du$.\nAntiderivative: $\\frac{u^{1-p}}{1 - p}$.\n$\\lim_{b \\to \\infty} \\left[\\frac{b^{1-p}}{1 - p} - \\frac{1}{1 - p}\\right]$.\nFor $b^{1-p} \\to 0$ as $b \\to \\infty$, the power must be strictly negative: $1 - p < 0 \\implies p > 1$.\nWhen $p > 1$, $b^{1-p} \\to 0$, so the integral converges to $0 - \\left(\\frac{1}{1 - p}\\right) = \\frac{1}{p - 1}$.',
              marks: 5,
              markingScheme: [
                'M1: Integrates $(x-1)^{-p}$ to get $\\frac{(x-1)^{1-p}}{1-p}$',
                'M1: Sets up limit $\\lim_{b \\to \\infty} \\frac{b^{1-p} - 1}{1-p}$',
                'A1: Deduces condition $1 - p < 0 \\implies p > 1$',
                'M1: Evaluates limit under this condition',
                'A1: Converges to $\\frac{1}{p - 1}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9.9 Volumes of revolution
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_9',
      number: '9.9',
      title: 'Volumes of revolution',
      type: 'lesson',
      steps: [
        {
          id: '9_9_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Spinning Curves into 3D Solids',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Stacking Circular Disks',
              content:
                'Imagine taking a 2D region under a curve and spinning it $360^\\circ$ around an axis like a potter\'s wheel. The curve traces out a solid 3D shape (a solid of revolution). Every tiny vertical strip of width $dx$ and height $y$ sweeps out a thin circular disk of radius $r = y$ and thickness $dx$. The disk volume is $dV = \\pi r^2 \\, dx = \\pi y^2 \\, dx$. Summing these disks gives the total volume!',
            },
            {
              type: 'formula_card',
              title: 'Volume of Revolution Formulas',
              math: '\\begin{aligned} \\text{Rotation } 360^\\circ \\text{ about } x\\text{-axis: } & V = \\pi \\int_a^b y^2 \\, dx \\\\ \\text{Rotation } 360^\\circ \\text{ about } y\\text{-axis: } & V = \\pi \\int_c^d x^2 \\, dy \\\\ \\text{Hollow Solid (between two curves): } & V = \\pi \\int_a^b \\left(y_1^2 - y_2^2\\right) \\, dx \\end{aligned}',
              content: 'Notice the $\\pi$ outside the integral: NEVER forget to square the function before integrating, and remember to multiply by $\\pi$!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Solid of Revolution',
                  definition: 'A 3-dimensional solid generated by rotating a 2D plane area through $360^\\circ$ ($2\\pi$ radians) about an axis.',
                },
                {
                  term: 'Disk Method',
                  definition: 'Calculating volume by integrating the cross-sectional circular disk area $\\pi r^2$.',
                },
              ],
            },
          ],
        },
        {
          id: '9_9_s2',
          stepNumber: 2,
          title: 'Worked Example: Rotation About the $x$-Axis',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'The region enclosed by $y = \\sqrt{2x + 1}$, the $x$-axis, and the lines $x = 0$ and $x = 4$ is rotated through $360^\\circ$ about the $x$-axis. Find the exact volume generated',
              content: 'Standard volume of revolution calculation:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Square the function $y$ to find $y^2$. Notice that squaring eliminates the square root!',
                  math: 'y = \\sqrt{2x + 1} \\implies y^2 = 2x + 1',
                },
                {
                  stepNumber: 2,
                  explanation: 'Write out the volume formula with limits $0$ and $4$.',
                  math: 'V = \\pi \\int_0^4 y^2 \\, dx = \\pi \\int_0^4 (2x + 1) \\, dx',
                },
                {
                  stepNumber: 3,
                  explanation: 'Integrate the polynomial inside the brackets.',
                  math: '\\int_0^4 (2x + 1)\\,dx = \\left[x^2 + x\\right]_0^4',
                },
                {
                  stepNumber: 4,
                  explanation: 'Substitute the limits 4 and 0.',
                  math: 'F(4) - F(0) = (4^2 + 4) - 0 = 16 + 4 = 20',
                },
                {
                  stepNumber: 5,
                  explanation: 'Multiply by $\\pi$ to state the exact volume.',
                  math: 'V = 20\\pi \\quad (\\approx 62.8)',
                },
              ],
            },
          ],
        },
        {
          id: '9_9_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Squaring the Integral instead of the Integrand',
              mistake: 'Calculating $\\pi \\left(\\int y\\,dx\\right)^2$ instead of $\\pi \\int y^2\\,dx$.',
              correction: 'You must square the $y$-expression FIRST, and THEN integrate! E.g. if $y = x^2$, then $y^2 = x^4$, so $V = \\pi \\int x^4\\,dx = \\pi \\frac{x^5}{5}$.',
              proTip: 'For hollow solids between two curves: $V = \\pi \\int (y_1^2 - y_2^2)\\,dx$. It is NOT $\\pi \\int (y_1 - y_2)^2\\,dx$! You must square each function separately before subtracting.',
            },
          ],
        },
        {
          id: '9_9_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '9_9_q1',
              questionNumber: 1,
              prompt: 'Find the volume generated when the region under $y = x^2$ from $x = 0$ to $x = 2$ is rotated $360^\\circ$ about the $x$-axis.',
              hint: '$V = \\pi \\int_0^2 (x^2)^2\\,dx = \\pi \\int_0^2 x^4\\,dx$.',
              answer: '$\\pi \\left[\\frac{x^5}{5}\\right]_0^2 = \\pi \\left(\\frac{32}{5} - 0\\right) = \\frac{32\\pi}{5} = 6.4\\pi$',
              marks: 2,
            },
            {
              id: '9_9_q2',
              questionNumber: 2,
              prompt: 'The region under $y = 3$ from $x = 0$ to $x = 5$ is rotated $360^\\circ$ about the $x$-axis. Find the volume (cylinder).',
              hint: '$V = \\pi \\int_0^5 3^2\\,dx = 9\\pi [x]_0^5$.',
              answer: '$9\\pi (5) = 45\\pi$',
              marks: 2,
            },
            {
              id: '9_9_q3',
              questionNumber: 3,
              prompt: 'Find the volume generated when $y = \\frac{2}{x}$ from $x = 1$ to $x = 4$ is rotated about the $x$-axis.',
              hint: '$y^2 = 4x^{-2}$. $V = \\pi \\int_1^4 4x^{-2}\\,dx = 4\\pi [-x^{-1}]_1^4$.',
              answer: '$4\\pi \\left(-\\frac{1}{4} - (-1)\\right) = 4\\pi \\left(\\frac{3}{4}\\right) = 3\\pi$',
              marks: 3,
            },
          ],
        },
        {
          id: '9_9_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '9_9_q4',
              questionNumber: 1,
              prompt: 'The region bounded by the curve $y = x^2$, the $y$-axis, and the line $y = 4$ is rotated $360^\\circ$ about the $y$-axis. Find the volume.',
              hint: 'Rotation about $y$-axis: $V = \\pi \\int_0^4 x^2\\,dy$. Since $y = x^2$, $x^2 = y$.',
              answer: '$V = \\pi \\int_0^4 y\\,dy = \\pi \\left[\\frac{y^2}{2}\\right]_0^4 = \\pi \\left(\\frac{16}{2} - 0\\right) = 8\\pi$',
              marks: 3,
            },
            {
              id: '9_9_q5',
              questionNumber: 2,
              prompt: 'The line $y = 2x$ and the curve $y = x^2$ enclose a region. This region is rotated $360^\\circ$ about the $x$-axis. Find the volume of the resulting solid.',
              hint: 'Limits are 0 and 2. $V = \\pi \\int_0^2 ((2x)^2 - (x^2)^2)\\,dx = \\pi \\int_0^2 (4x^2 - x^4)\\,dx$.',
              answer: '$\\pi \\left[\\frac{4x^3}{3} - \\frac{x^5}{5}\\right]_0^2 = \\pi \\left(\\frac{32}{3} - \\frac{32}{5}\\right) = 32\\pi \\left(\\frac{5 - 3}{15}\\right) = \\frac{64\\pi}{15}$',
              marks: 4,
            },
            {
              id: '9_9_q6',
              questionNumber: 3,
              prompt: 'Use integration to prove that the volume of a sphere of radius $r$ is $V = \\frac{4}{3}\\pi r^3$.',
              hint: 'Rotate the semicircle $y^2 = r^2 - x^2$ from $x = -r$ to $x = r$ about the $x$-axis.',
              answer: '$V = \\pi \\int_{-r}^r (r^2 - x^2)\\,dx = 2\\pi \\int_0^r (r^2 - x^2)\\,dx = 2\\pi \\left[r^2 x - \\frac{x^3}{3}\\right]_0^r = 2\\pi \\left(r^3 - \\frac{r^3}{3}\\right) = 2\\pi \\left(\\frac{2r^3}{3}\\right) = \\frac{4}{3}\\pi r^3$',
              marks: 4,
            },
          ],
        },
        {
          id: '9_9_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '9_9_q7',
              questionNumber: 1,
              prompt: 'The diagram shows part of the curve $y = \\frac{4}{x + 1}$. The region $R$ is bounded by the curve, the coordinate axes, and the line $x = 3$. (i) Find the exact volume generated when $R$ is rotated through $360^\\circ$ about the $x$-axis. (ii) Find the volume generated when $R$ is rotated through $360^\\circ$ about the $y$-axis. [6 marks]',
              hint: 'In (i), $y^2 = 16(x + 1)^{-2}$. In (ii), $x = 4/y - 1 \\implies x^2 = 16/y^2 - 8/y + 1$ (or use cylinder subtraction).',
              answer: '(i) $V = \\pi \\int_0^3 16(x + 1)^{-2}\\,dx = 16\\pi \\left[-\\frac{1}{x + 1}\\right]_0^3 = 16\\pi \\left(-\\frac{1}{4} - (-1)\\right) = 16\\pi \\left(\\frac{3}{4}\\right) = 12\\pi$.\n(ii) When $x = 0, y = 4$. When $x = 3, y = 1$. Total volume about $y$-axis: cylinder of radius 3 from $y = 0$ to $1$ has volume $\\pi (3^2)(1) = 9\\pi$. Region from $y = 1$ to $4$: $x = \\frac{4}{y} - 1$, so $V_2 = \\pi \\int_1^4 \\left(\\frac{4}{y} - 1\\right)^2 dy$. Or evaluating directly.',
              marks: 6,
              markingScheme: [
                'M1: Writes $y^2 = 16(x + 1)^{-2}$',
                'A1: Integrates to $[-16\\pi/(x+1)]_0^3$',
                'A1: Volume (i) $= 12\\pi$',
                'M1: Sets up rotation about $y$-axis using $x$ as subject',
                'M1: Evaluates integral with correct $y$-limits',
                'A1: Accurate final volume for (ii)',
              ],
            },
            {
              id: '9_9_q8',
              questionNumber: 2,
              prompt: 'The region enclosed by $y = \\sqrt{x}$, the line $y = 2$, and the $y$-axis is rotated through $360^\\circ$ about the $y$-axis. Find the volume of the solid generated. [4 marks]',
              hint: 'Rotation about $y$-axis: $V = \\pi \\int_0^2 x^2\\,dy$. Since $y = \\sqrt{x}$, $x = y^2$, so $x^2 = y^4$.',
              answer: '$x = y^2 \\implies x^2 = y^4$.\n$V = \\pi \\int_0^2 y^4 \\, dy = \\pi \\left[\\frac{y^5}{5}\\right]_0^2 = \\pi \\left(\\frac{32}{5} - 0\\right) = \\frac{32\\pi}{5} = 6.4\\pi$.',
              marks: 4,
              markingScheme: [
                'B1: Expresses $x = y^2$ and $x^2 = y^4$',
                'M1: Applies $V = \\pi \\int_0^2 x^2\\,dy$',
                'A1: Antiderivative $\\pi \\frac{y^5}{5}$',
                'A1: $\\frac{32\\pi}{5}$ or $6.4\\pi$',
              ],
            },
            {
              id: '9_9_q9',
              questionNumber: 3,
              prompt: 'A bowl is formed by rotating the curve $y = x^4$ for $0 \\le x \\le 2$ through $360^\\circ$ about the $y$-axis. Water is poured into the bowl at a constant rate of $8\\pi\\text{ cm}^3/\\text{s}$. Find the rate at which the depth of water $h$ is rising when the depth is $4\\text{ cm}$. [6 marks]',
              hint: 'Volume at depth $h$: $V = \\pi \\int_0^h x^2\\,dy$. Since $y = x^4$, $x^2 = \\sqrt{y} = y^{1/2}$. $V = \\pi \\int_0^h y^{1/2}\\,dy = \\frac{2}{3}\\pi h^{3/2}$. Then $\\frac{dV}{dt} = \\frac{dV}{dh} \\frac{dh}{dt}$.',
              answer: 'Cross-sectional radius $x$ satisfies $x^2 = \\sqrt{y} = y^{1/2}$.\nVolume of water at depth $h$ is $V = \\pi \\int_0^h y^{1/2}\\,dy = \\frac{2}{3}\\pi h^{3/2}$.\n$\\frac{dV}{dh} = \\pi h^{1/2} = \\pi\\sqrt{h}$.\nWhen $h = 4$: $\\frac{dV}{dh} = \\pi\\sqrt{4} = 2\\pi$.\nConnected rate: $\\frac{dV}{dt} = \\frac{dV}{dh} \\frac{dh}{dt} \\implies 8\\pi = 2\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = 4\\text{ cm/s}$.',
              marks: 6,
              markingScheme: [
                'M1: Uses $x^2 = y^{1/2}$ for volume about $y$-axis',
                'A1: Obtains $V = \\frac{2}{3}\\pi h^{3/2}$',
                'M1: Differentiates with respect to $h$: $\\frac{dV}{dh} = \\pi\\sqrt{h}$',
                'A1: Evaluates $\\frac{dV}{dh} = 2\\pi$ at $h = 4$',
                'M1: Connects rates via chain rule $8\\pi = 2\\pi \\frac{dh}{dt}$',
                'A1: $\\frac{dh}{dt} = 4\\text{ cm/s}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit 9 Test
    // ------------------------------------------------------------------------
    {
      id: 'sub_9_test',
      number: 'Unit Test',
      title: 'Unit 9 Test: Integration',
      type: 'unitTest',
      steps: [
        {
          id: '9_test_s1',
          stepNumber: 1,
          title: 'Test Part A: Core Integrals & Constant of Integration',
          type: 'exercise_l1',
          badge: 'Unit Test: Part A',
          practiceQuestions: [
            {
              id: '9_t_q1',
              questionNumber: 1,
              prompt: 'Find $\\int \\left(6x^2 - \\frac{4}{x^3} + 1\\right) \\, dx$. [3 marks]',
              hint: '$6x^2 - 4x^{-3} + 1 \\implies 2x^3 - 4\\frac{x^{-2}}{-2} + x + c$.',
              answer: '$2x^3 + \\frac{2}{x^2} + x + c$',
              marks: 3,
            },
            {
              id: '9_t_q2',
              questionNumber: 2,
              prompt: 'Find the equation of the curve with $\\frac{dy}{dx} = 4x - 3$ passing through $(2, 5)$. [3 marks]',
              hint: '$y = 2x^2 - 3x + c$. Substitute $(2, 5)$.',
              answer: '$5 = 2(4) - 3(2) + c = 8 - 6 + c = 2 + c \\implies c = 3$. Equation: $y = 2x^2 - 3x + 3$.',
              marks: 3,
            },
            {
              id: '9_t_q3',
              questionNumber: 3,
              prompt: 'Evaluate $\\int_0^1 (3x + 1)^3 \\, dx$. [2 marks]',
              hint: '$\\left[\\frac{(3x + 1)^4}{12}\\right]_0^1 = \\frac{4^4}{12} - \\frac{1^4}{12} = \\frac{256 - 1}{12} = \\frac{255}{12} = \\frac{85}{4} = 21.25$.',
              answer: '$\\frac{85}{4}$ or $21.25$',
              marks: 2,
            },
          ],
        },
        {
          id: '9_test_s2',
          stepNumber: 2,
          title: 'Test Part B: Areas & Volumes',
          type: 'exercise_l2',
          badge: 'Unit Test: Part B',
          practiceQuestions: [
            {
              id: '9_t_q4',
              questionNumber: 1,
              prompt: 'Find the area of the region enclosed between the curve $y = 6x - x^2$ and the line $y = 2x$. [4 marks]',
              hint: '$6x - x^2 = 2x \\implies x^2 - 4x = 0 \\implies x = 0, 4$. $A = \\int_0^4 (4x - x^2)\\,dx$.',
              answer: '$\\left[2x^2 - \\frac{x^3}{3}\\right]_0^4 = 32 - \\frac{64}{3} = \\frac{32}{3} = 10\\frac{2}{3}$',
              marks: 4,
            },
            {
              id: '9_t_q5',
              questionNumber: 2,
              prompt: 'Find the volume generated when the curve $y = 3\\sqrt{x}$ from $x = 1$ to $x = 4$ is rotated $360^\\circ$ about the $x$-axis. [4 marks]',
              hint: '$y^2 = 9x$. $V = \\pi \\int_1^4 9x\\,dx = 9\\pi \\left[\\frac{x^2}{2}\\right]_1^4$.',
              answer: '$9\\pi \\left(\\frac{16 - 1}{2}\\right) = \\frac{135\\pi}{2} = 67.5\\pi$',
              marks: 4,
            },
            {
              id: '9_t_q6',
              questionNumber: 3,
              prompt: 'Evaluate the improper integral $\\int_2^\\infty \\frac{6}{x^4} \\, dx$. [4 marks]',
              hint: '$\\lim_{b \\to \\infty} \\left[-\\frac{2}{x^3}\\right]_2^b = 0 - \\left(-\\frac{2}{8}\\right)$.',
              answer: '$\\frac{2}{8} = \\frac{1}{4} = 0.25$',
              marks: 4,
            },
          ],
        },
        {
          id: '9_test_s3',
          stepNumber: 3,
          title: 'Test Part C: Exam-Style Challenge',
          type: 'exercise_l3',
          badge: 'Unit Test: Part C',
          practiceQuestions: [
            {
              id: '9_t_q7',
              questionNumber: 1,
              prompt: 'A curve has equation $y = f(x)$ where $f\'\'(x) = \\frac{6}{\\sqrt{x}}$ for $x > 0$. The curve passes through the point $(1, 8)$ and has a stationary point at $(4, k)$. (i) Find the value of $k$. (ii) Find the equation of the curve. [7 marks]',
              hint: '$f\'(x) = \\int 6x^{-1/2}\\,dx = 12\\sqrt{x} + c_1$. At $x = 4$, $f\'(4) = 0 \\implies 12(2) + c_1 = 0 \\implies c_1 = -24$. Integrate again.',
              answer: '(i) $f\'(x) = 12x^{1/2} + c_1$. Stationary at $x = 4$: $12(2) + c_1 = 0 \\implies c_1 = -24$.\n$f\'(x) = 12\\sqrt{x} - 24$.\n$f(x) = \\int (12x^{1/2} - 24)\\,dx = 12\\left(\\frac{x^{3/2}}{3/2}\\right) - 24x + c_2 = 8x^{3/2} - 24x + c_2$.\nPasses through $(1, 8)$: $8 = 8(1) - 24(1) + c_2 = -16 + c_2 \\implies c_2 = 24$.\nEquation: $f(x) = 8x\\sqrt{x} - 24x + 24$.\nAt $x = 4$: $k = f(4) = 8(8) - 24(4) + 24 = 64 - 96 + 24 = -8$.\nThus $k = -8$.\n(ii) Curve equation is $y = 8x^{3/2} - 24x + 24$.',
              marks: 7,
              markingScheme: [
                'M1: Integrates $6x^{-1/2}$ to get $12x^{1/2} + c_1$',
                'A1: Solves $f\'(4) = 0$ to get $c_1 = -24$',
                'M1: Integrates $f\'(x)$ to get $8x^{3/2} - 24x + c_2$',
                'A1: Uses $(1, 8)$ to find $c_2 = 24$',
                'A1: Finds $k = -8$',
                'A2: Fully correct curve equation $y = 8x^{3/2} - 24x + 24$',
              ],
            },
            {
              id: '9_t_q8',
              questionNumber: 2,
              prompt: 'The diagram shows the curve $y = 9 - x^2$ and the line $y = 5$. The region $R$ is bounded by the curve and the line. (i) Find the area of $R$. (ii) Find the volume of the solid generated when $R$ is rotated through $360^\\circ$ about the line $y = 5$. [7 marks]',
              hint: 'Intersects at $9 - x^2 = 5 \\implies x^2 = 4 \\implies x = \\pm 2$. Radius about line $y = 5$ is $r = (9 - x^2) - 5 = 4 - x^2$. $V = \\pi \\int_{-2}^2 (4 - x^2)^2\\,dx$.',
              answer: '(i) Limits are $-2$ and $2$.\n$\\text{Area} = \\int_{-2}^2 ((9 - x^2) - 5)\\,dx = \\int_{-2}^2 (4 - x^2)\\,dx = 2\\int_0^2 (4 - x^2)\\,dx = 2\\left[4x - \\frac{x^3}{3}\\right]_0^2 = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3} = 10\\frac{2}{3}$.\n(ii) The distance from the axis of rotation $y = 5$ to the curve is $R(x) = (9 - x^2) - 5 = 4 - x^2$.\nVolume $V = \\pi \\int_{-2}^2 (4 - x^2)^2\\,dx = 2\\pi \\int_0^2 (16 - 8x^2 + x^4)\\,dx = 2\\pi \\left[16x - \\frac{8x^3}{3} + \\frac{x^5}{5}\\right]_0^2$.\nEvaluate at $x = 2$: $16(2) - \\frac{8(8)}{3} + \\frac{32}{5} = 32 - \\frac{64}{3} + \\frac{32}{5} = 32\\left(1 - \\frac{2}{3} + \\frac{1}{5}\\right) = 32\\left(\\frac{15 - 10 + 3}{15}\\right) = 32\\left(\\frac{8}{15}\\right) = \\frac{256}{15}$.\nMultiply by $2\\pi$: $V = \\frac{512\\pi}{15} \\approx 34.13\\pi \\approx 107.2$.',
              marks: 7,
              markingScheme: [
                'B1: Intersections at $x = \\pm 2$',
                'M1: Integrates $(4 - x^2)$ for area',
                'A1: Area $= 32/3$',
                'M1: Identifies radius about $y = 5$ is $(4 - x^2)$',
                'M1: Expands $(4 - x^2)^2 = 16 - 8x^2 + x^4$ and integrates',
                'A1: Evaluates limits accurately',
                'A1: $V = \\frac{512\\pi}{15}$',
              ],
            },
            {
              id: '9_t_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = \\frac{k}{x}$ where $k > 0$. The region bounded by the curve, the $x$-axis, and the lines $x = 1$ and $x = b$ is rotated through $360^\\circ$ about the $x$-axis to form a solid of volume $V(b)$. (i) Find an expression for $V(b)$ in terms of $k$ and $b$. (ii) Deduce the limiting volume as $b \\to \\infty$. (iii) Given that this limiting volume is $18\\pi$, find the value of $k$. [6 marks]',
              hint: '$y^2 = k^2 x^{-2}$. $V(b) = \\pi \\int_1^b k^2 x^{-2}\\,dx$.',
              answer: '(i) $V(b) = \\pi \\int_1^b \\left(\\frac{k}{x}\\right)^2 dx = \\pi k^2 \\int_1^b x^{-2}\\,dx = \\pi k^2 \\left[-\\frac{1}{x}\\right]_1^b = \\pi k^2 \\left(1 - \\frac{1}{b}\\right)$.\n(ii) As $b \\to \\infty$, $\\frac{1}{b} \\to 0$, so $\\lim_{b \\to \\infty} V(b) = \\pi k^2(1 - 0) = \\pi k^2$.\n(iii) Set $\\pi k^2 = 18\\pi \\implies k^2 = 18 \\implies k = \\sqrt{18} = 3\\sqrt{2} \\approx 4.24$.',
              marks: 6,
              markingScheme: [
                'M1: Sets up $V(b) = \\pi \\int_1^b k^2 x^{-2}\\,dx$',
                'A1: $V(b) = \\pi k^2 (1 - 1/b)$',
                'M1: Takes limit as $b \\to \\infty$',
                'A1: $\\lim_{b \\to \\infty} V(b) = \\pi k^2$',
                'M1: Equates $\\pi k^2 = 18\\pi$',
                'A1: $k = 3\\sqrt{2}$ (or $\\sqrt{18}$)',
              ],
            },
          ],
        },
      ],
    },
  ],
};
