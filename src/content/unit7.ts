import { Unit } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 7: Differentiation
 * ============================================================================
 */

export const unit7: Unit = {
  id: 'unit_7',
  number: 7,
  title: 'Differentiation',
  learningObjectives: [
    '1.7.1: understand the concept of the derivative as a rate of change and as the gradient of a curve, and find the gradient function of a function',
    '1.7.2: use the chain rule to find the derivative of composite functions',
    '1.7.3: find the equations of tangents and normals to curves at given points',
    '1.7.4: find and use second derivatives, including to determine the nature of stationary points',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 7.1 Derivatives and gradient functions
    // ------------------------------------------------------------------------
    {
      id: 'sub_7_1',
      number: '7.1',
      title: 'Derivatives and gradient functions',
      type: 'lesson',
      steps: [
        {
          id: '7_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: From Secant Chords to the Instantaneous Tangent',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Zooming In Until Curves Look Straight',
              content:
                'If you zoom in closely on any smooth curve, it starts to look like a straight line! The gradient between two nearby points $P(x, y)$ and $Q(x + \\delta x, y + \\delta y)$ is $\\frac{\\delta y}{\\delta x}$. As $Q$ slides towards $P$ (so $\\delta x \\to 0$), the secant line rotates into the unique **tangent line** at $P$. The limiting gradient is the derivative $\\frac{dy}{dx} = f\'(x)$, which gives the instantaneous slope at any $x$.',
            },
            {
              type: 'formula_card',
              title: 'The Power Rule & Linearity',
              math: '\\begin{aligned} \\frac{d}{dx}\\left(x^n\\right) &= n x^{n-1} \\quad \\text{for any real } n \\\\ \\frac{d}{dx}\\left(c\\right) &= 0 \\quad (\\text{constant}) \\\\ \\frac{d}{dx}\\left(k f(x)\\right) &= k f\'(x) \\\\ \\frac{d}{dx}\\left(f(x) \\pm g(x)\\right) &= f\'(x) \\pm g\'(x) \\end{aligned}',
              content: 'Always rewrite roots and denominators into index form BEFORE differentiating: $\\frac{1}{x^3} = x^{-3}$, $\\sqrt{x} = x^{1/2}$, $\\frac{4}{\\sqrt[3]{x}} = 4x^{-1/3}$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Derivative / Gradient Function ($\\frac{dy}{dx}$)',
                  definition: 'A function that outputs the exact gradient of the tangent to the curve at any input $x$.',
                },
                {
                  term: 'Index Form',
                  definition: 'Expressing algebraic terms purely as $k x^n$ with fractional or negative exponents.',
                },
              ],
            },
          ],
        },
        {
          id: '7_1_s2',
          stepNumber: 2,
          title: 'Worked Example: Differentiating Negative & Fractional Powers',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Differentiate $y = 3x^4 - \\frac{2}{x^2} + 4\\sqrt{x} - 7$ with respect to $x$',
              content: 'Convert to index form and apply the power rule term-by-term:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Rewrite each term in standard power form $k x^n$.',
                  math: 'y = 3x^4 - 2x^{-2} + 4x^{1/2} - 7',
                },
                {
                  stepNumber: 2,
                  explanation: 'Apply the power rule $\\frac{d}{dx}(x^n) = n x^{n-1}$ to each term.',
                  math: '\\frac{dy}{dx} = 3(4x^3) - 2(-2x^{-3}) + 4\\left(\\frac{1}{2}x^{-1/2}\\right) - 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Multiply coefficients and simplify exponents.',
                  math: '\\frac{dy}{dx} = 12x^3 + 4x^{-3} + 2x^{-1/2}',
                },
                {
                  stepNumber: 4,
                  explanation: 'Optionally express using positive indices and surds.',
                  math: '\\frac{dy}{dx} = 12x^3 + \\frac{4}{x^3} + \\frac{2}{\\sqrt{x}}',
                },
              ],
            },
          ],
        },
        {
          id: '7_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Differentiating Numerator and Denominator Separately',
              mistake: 'Given $y = \\frac{x^3 + 2}{x}$, differentiating top and bottom to get $\\frac{3x^2}{1} = 3x^2$.',
              correction: 'In Pure 1, there is no quotient rule! You must divide through by the denominator FIRST: $y = \\frac{x^3}{x} + \\frac{2}{x} = x^2 + 2x^{-1}$, then differentiate: $\\frac{dy}{dx} = 2x - 2x^{-2}$.',
              proTip: 'Be careful subtracting 1 from negative powers: $-2 - 1 = -3$, NOT $-1$! Common error: writing $\\frac{d}{dx}(x^{-2}) = -2x^{-1}$.',
            },
          ],
        },
        {
          id: '7_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '7_1_q1',
              questionNumber: 1,
              prompt: 'Find $\\frac{dy}{dx}$ when $y = 5x^3 - 4x^2 + 7x - 9$.',
              hint: 'Apply the power rule to each term.',
              answer: '$\\frac{dy}{dx} = 15x^2 - 8x + 7$',
              marks: 2,
            },
            {
              id: '7_1_q2',
              questionNumber: 2,
              prompt: 'Differentiate $f(x) = \\frac{6}{x^3}$ with respect to $x$.',
              hint: 'Rewrite as $6x^{-3}$.',
              answer: '$f\'(x) = 6(-3x^{-4}) = -18x^{-4} = -\\frac{18}{x^4}$',
              marks: 2,
            },
            {
              id: '7_1_q3',
              questionNumber: 3,
              prompt: 'Find the gradient of the curve $y = x^2 - 6x + 5$ at the point where $x = 4$.',
              hint: 'Find $\\frac{dy}{dx} = 2x - 6$ and substitute $x = 4$.',
              answer: '$\\left.\\frac{dy}{dx}\\right|_{x=4} = 2(4) - 6 = 2$',
              marks: 2,
            },
          ],
        },
        {
          id: '7_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '7_1_q4',
              questionNumber: 1,
              prompt: 'Differentiate $y = \\frac{2x^4 - 5\\sqrt{x}}{x}$ with respect to $x$.',
              hint: 'Divide each term in the numerator by $x$: $y = 2x^3 - 5x^{-1/2}$.',
              answer: '$\\frac{dy}{dx} = 6x^2 - 5\\left(-\\frac{1}{2}\\right)x^{-3/2} = 6x^2 + \\frac{5}{2}x^{-3/2} = 6x^2 + \\frac{5}{2x\\sqrt{x}}$',
              marks: 3,
            },
            {
              id: '7_1_q5',
              questionNumber: 2,
              prompt: 'Find the coordinates of the point on the curve $y = 2x^2 - 8x + 3$ where the gradient is 4.',
              hint: 'Set $\\frac{dy}{dx} = 4x - 8 = 4$ and solve for $x$, then find $y$.',
              answer: '$4x - 8 = 4 \\implies 4x = 12 \\implies x = 3$. $y = 2(9) - 8(3) + 3 = 18 - 24 + 3 = -3$. Point is $(3, -3)$.',
              marks: 3,
            },
            {
              id: '7_1_q6',
              questionNumber: 3,
              prompt: 'A curve has equation $y = a x^3 + b x^2$. At the point $(1, 3)$, the gradient is 8. Find the values of the constants $a$ and $b$.',
              hint: 'Point on curve: $a + b = 3$. Gradient: $\\frac{dy}{dx} = 3ax^2 + 2bx \\implies 3a + 2b = 8$.',
              answer: '$3a + 2b = 8$ and $2a + 2b = 6 \\implies a = 2$. Then $b = 3 - 2 = 1$.',
              marks: 4,
            },
          ],
        },
        {
          id: '7_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '7_1_q7',
              questionNumber: 1,
              prompt: 'A curve has equation $y = 4\\sqrt{x} + \\frac{9}{\\sqrt{x}}$. (i) Find $\\frac{dy}{dx}$. (ii) Find the coordinates of the point on the curve where the gradient is 0. [5 marks]',
              hint: 'Rewrite as $y = 4x^{1/2} + 9x^{-1/2}$. Set $\\frac{dy}{dx} = 0$.',
              answer: '(i) $\\frac{dy}{dx} = 4\\left(\\frac{1}{2}x^{-1/2}\\right) + 9\\left(-\\frac{1}{2}x^{-3/2}\\right) = 2x^{-1/2} - \\frac{9}{2}x^{-3/2} = \\frac{2}{\\sqrt{x}} - \\frac{9}{2x\\sqrt{x}}$.\n(ii) $\\frac{2}{\\sqrt{x}} - \\frac{9}{2x\\sqrt{x}} = 0 \\implies \\frac{2}{\\sqrt{x}} = \\frac{9}{2x\\sqrt{x}} \\implies 2 = \\frac{9}{2x} \\implies 4x = 9 \\implies x = \\frac{9}{4}$.\nWhen $x = \\frac{9}{4}$: $y = 4\\left(\\frac{3}{2}\\right) + 9\\left(\\frac{2}{3}\\right) = 6 + 6 = 12$. Point is $\\left(\\frac{9}{4}, 12\\right)$.',
              marks: 5,
              markingScheme: [
                'B1: Converts to powers $x^{1/2}$ and $x^{-1/2}$',
                'M1: Correct differentiation using power rule',
                'A1: $\\frac{dy}{dx} = 2x^{-1/2} - 4.5x^{-3/2}$',
                'M1: Sets derivative to 0 and clears powers of $x$',
                'A1: $x = \\frac{9}{4}$ and $y = 12$',
              ],
            },
            {
              id: '7_1_q8',
              questionNumber: 2,
              prompt: 'The line $y = 2x + k$ is a tangent to the curve $y = x^2 - 4x + 7$. (i) Using differentiation, find the coordinates of the point of contact. (ii) Hence find the value of $k$. [5 marks]',
              hint: 'Gradient of tangent is 2. Set $\\frac{dy}{dx} = 2x - 4 = 2$.',
              answer: '(i) $\\frac{dy}{dx} = 2x - 4$. Setting $2x - 4 = 2 \\implies 2x = 6 \\implies x = 3$.\nWhen $x = 3$, $y = 3^2 - 4(3) + 7 = 9 - 12 + 7 = 4$. Point of contact is $(3, 4)$.\n(ii) The point $(3, 4)$ lies on the line $y = 2x + k \\implies 4 = 2(3) + k \\implies 4 = 6 + k \\implies k = -2$.',
              marks: 5,
              markingScheme: [
                'M1: Equates derivative $2x - 4$ to line gradient 2',
                'A1: $x = 3$',
                'A1: $y = 4$',
                'M1: Substitutes $(3, 4)$ into line equation',
                'A1: $k = -2$',
              ],
            },
            {
              id: '7_1_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = f(x)$ where $f\'(x) = 3x^2 - 12x + 9$. Find the set of values of $x$ for which the gradient of the curve is negative. [4 marks]',
              hint: 'Solve the quadratic inequality $3x^2 - 12x + 9 < 0$.',
              answer: '$3x^2 - 12x + 9 < 0 \\implies x^2 - 4x + 3 < 0 \\implies (x - 1)(x - 3) < 0$. The roots are 1 and 3. The parabola opens upward, so the values are negative between the roots: $1 < x < 3$.',
              marks: 4,
              markingScheme: [
                'M1: Sets $3x^2 - 12x + 9 < 0$',
                'A1: Factors into $(x - 1)(x - 3) < 0$',
                'M1: Identifies critical values 1 and 3',
                'A1: Strict inequality $1 < x < 3$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 7.2 The chain rule
    // ------------------------------------------------------------------------
    {
      id: 'sub_7_2',
      number: '7.2',
      title: 'The chain rule',
      type: 'lesson',
      steps: [
        {
          id: '7_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Differentiating Inside & Outside',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Cogs within Cogs: Linked Rates of Change',
              content:
                'Imagine two gears: if gear A spins twice as fast as gear B, and gear B spins three times as fast as gear C, then gear A spins $2 \\times 3 = 6$ times as fast as gear C! That is the Chain Rule: to differentiate a function wrapped inside another function $y = f(u)$ where $u = g(x)$, you multiply the outer rate of change by the inner rate of change: $\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$.',
            },
            {
              type: 'formula_card',
              title: 'The Generalized Power Rule',
              math: '\\begin{aligned} \\frac{dy}{dx} &= \\frac{dy}{du} \\times \\frac{du}{dx} \\\\ \\frac{d}{dx}\\left[(g(x))^n\\right] &= n [g(x)]^{n-1} \\times g\'(x) \\\\ \\frac{d}{dx}\\left[(ax + b)^n\\right] &= a n (ax + b)^{n-1} \\end{aligned}',
              content: 'Never forget to multiply by the derivative of the inside bracket $g\'(x)$ at the end!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Composite Function',
                  definition: 'A function of a function, e.g. $y = (3x^2 + 1)^4$.',
                },
                {
                  term: 'Inner Derivative',
                  definition: 'The derivative $\\frac{du}{dx}$ of the expression enclosed within the outer operation.',
                },
              ],
            },
          ],
        },
        {
          id: '7_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Differentiating a Root Bracket',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Differentiate $y = \\frac{1}{\\sqrt{2x^2 + 5}}$ with respect to $x$',
              content: 'Express as a power and apply the chain rule:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Rewrite the expression using negative fractional index form.',
                  math: 'y = (2x^2 + 5)^{-1/2}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Identify the inner function $u = 2x^2 + 5$, so $y = u^{-1/2}$.',
                  math: '\\frac{dy}{du} = -\\frac{1}{2} u^{-3/2}, \\quad \\frac{du}{dx} = 4x',
                },
                {
                  stepNumber: 3,
                  explanation: 'Multiply $\\frac{dy}{du} \\times \\frac{du}{dx}$ according to the chain rule.',
                  math: '\\frac{dy}{dx} = -\\frac{1}{2}(2x^2 + 5)^{-3/2} \\times (4x) = -2x(2x^2 + 5)^{-3/2}',
                },
                {
                  stepNumber: 4,
                  explanation: 'Write in clear fractional surd format.',
                  math: '\\frac{dy}{dx} = -\\frac{2x}{(2x^2 + 5)^{3/2}} = -\\frac{2x}{\\sqrt{(2x^2 + 5)^3}}',
                },
              ],
            },
          ],
        },
        {
          id: '7_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Forgetting the Inner Derivative',
              mistake: 'Differentiating $(3x + 1)^4$ as $4(3x + 1)^3$, completely forgetting the factor of 3.',
              correction: 'You must multiply by $\\frac{d}{dx}(3x + 1) = 3$: $\\frac{dy}{dx} = 4(3x + 1)^3 \\times 3 = 12(3x + 1)^3$.',
              proTip: 'Chant this in your head: "Bring the power down, leave the inside alone, subtract one from the power, MULTIPLY by the derivative of the inside!"',
            },
          ],
        },
        {
          id: '7_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '7_2_q1',
              questionNumber: 1,
              prompt: 'Differentiate $y = (2x - 5)^4$ with respect to $x$.',
              hint: '$4(2x - 5)^3 \\times 2$.',
              answer: '$\\frac{dy}{dx} = 8(2x - 5)^3$',
              marks: 2,
            },
            {
              id: '7_2_q2',
              questionNumber: 2,
              prompt: 'Find $\\frac{dy}{dx}$ when $y = \\sqrt{3x + 4}$.',
              hint: '$y = (3x + 4)^{1/2}$. Chain rule gives $\\frac{1}{2}(3x + 4)^{-1/2} \\times 3$.',
              answer: '$\\frac{dy}{dx} = \\frac{3}{2\\sqrt{3x + 4}}$',
              marks: 2,
            },
            {
              id: '7_2_q3',
              questionNumber: 3,
              prompt: 'Differentiate $y = \\frac{1}{(4 - x)^2}$.',
              hint: '$y = (4 - x)^{-2}$. Remember the inner derivative is $-1$.',
              answer: '$\\frac{dy}{dx} = -2(4 - x)^{-3} \\times (-1) = \\frac{2}{(4 - x)^3}$',
              marks: 2,
            },
          ],
        },
        {
          id: '7_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '7_2_q4',
              questionNumber: 1,
              prompt: 'Find the gradient of the curve $y = (x^2 - 3)^5$ at the point where $x = 2$.',
              hint: '$\\frac{dy}{dx} = 5(x^2 - 3)^4 \\times (2x) = 10x(x^2 - 3)^4$. Substitute $x = 2$.',
              answer: '$\\left.\\frac{dy}{dx}\\right|_{x=2} = 10(2)(4 - 3)^4 = 20(1)^4 = 20$',
              marks: 3,
            },
            {
              id: '7_2_q5',
              questionNumber: 2,
              prompt: 'Find the coordinates of the stationary point on the curve $y = (2x - 6)^3 + 8$.',
              hint: 'Stationary point when $\\frac{dy}{dx} = 0$. $\\frac{dy}{dx} = 3(2x - 6)^2(2) = 6(2x - 6)^2$.',
              answer: '$6(2x - 6)^2 = 0 \\implies 2x = 6 \\implies x = 3$. When $x = 3$, $y = 0 + 8 = 8$. Point is $(3, 8)$.',
              marks: 3,
            },
            {
              id: '7_2_q6',
              questionNumber: 3,
              prompt: 'Differentiate $y = \\frac{4}{\\sqrt{1 - 2x}}$ and find the value of $\\frac{dy}{dx}$ when $x = -4$.',
              hint: '$y = 4(1 - 2x)^{-1/2} \\implies \\frac{dy}{dx} = 4(-1/2)(1 - 2x)^{-3/2}(-2) = 4(1 - 2x)^{-3/2}$.',
              answer: 'When $x = -4$, $1 - 2(-4) = 9$. $\\frac{dy}{dx} = 4(9)^{-3/2} = 4 \\times \\frac{1}{27} = \\frac{4}{27}$.',
              marks: 4,
            },
          ],
        },
        {
          id: '7_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '7_2_q7',
              questionNumber: 1,
              prompt: 'A curve has equation $y = \\frac{12}{(3x - 1)^2}$. (i) Find $\\frac{dy}{dx}$. (ii) Find the equation of the tangent to the curve at the point where $x = 1$. [5 marks]',
              hint: '$y = 12(3x - 1)^{-2}$. At $x = 1$, $y = 12/4 = 3$.',
              answer: '(i) $\\frac{dy}{dx} = 12(-2)(3x - 1)^{-3}(3) = -72(3x - 1)^{-3} = -\\frac{72}{(3x - 1)^3}$.\n(ii) When $x = 1$, $y = \\frac{12}{(2)^2} = 3$. Gradient $m = -\\frac{72}{(2)^3} = -\\frac{72}{8} = -9$.\nTangent equation: $y - 3 = -9(x - 1) \\implies y - 3 = -9x + 9 \\implies y = -9x + 12$ (or $9x + y - 12 = 0$).',
              marks: 5,
              markingScheme: [
                'M1: Writes $y = 12(3x - 1)^{-2}$ and applies power rule',
                'M1: Correct multiplication by 3 (inner derivative)',
                'A1: $\\frac{dy}{dx} = -\\frac{72}{(3x - 1)^3}$',
                'M1: Computes $y = 3$ and gradient $m = -9$ at $x = 1$',
                'A1: $y = -9x + 12$ or $9x + y = 12$',
              ],
            },
            {
              id: '7_2_q8',
              questionNumber: 2,
              prompt: 'The curve $y = (ax + b)^3$ passes through $(1, 8)$ and has gradient 12 at $(1, 8)$. Given $a > 0$, find the values of the constants $a$ and $b$. [5 marks]',
              hint: 'Point on curve: $(a + b)^3 = 8 \\implies a + b = 2$. Derivative: $\\frac{dy}{dx} = 3a(ax + b)^2 = 12$.',
              answer: 'At $(1, 8)$: $(a + b)^3 = 8 \\implies a + b = 2 \\quad \\text{--- (1)}$.\n$\\frac{dy}{dx} = 3(ax + b)^2 \\times a = 3a(ax + b)^2$.\nAt $x = 1$: $3a(a + b)^2 = 12$. Substitute $a + b = 2$:\n$3a(2^2) = 12 \\implies 12a = 12 \\implies a = 1$.\nFrom (1): $1 + b = 2 \\implies b = 1$.',
              marks: 5,
              markingScheme: [
                'B1: $(a + b)^3 = 8 \\implies a + b = 2$',
                'M1: Differentiates using chain rule: $3a(ax + b)^2$',
                'M1: Sets $3a(a + b)^2 = 12$',
                'A1: $a = 1$',
                'A1: $b = 1$',
              ],
            },
            {
              id: '7_2_q9',
              questionNumber: 3,
              prompt: 'A particle moves along a curve $y = \\sqrt{25 - x^2}$ for $-5 < x < 5$. (i) Find $\\frac{dy}{dx}$. (ii) Show that $x + y\\frac{dy}{dx} = 0$. [4 marks]',
              hint: '$y = (25 - x^2)^{1/2} \\implies \\frac{dy}{dx} = \\frac{1}{2}(25 - x^2)^{-1/2}(-2x) = -\\frac{x}{\\sqrt{25 - x^2}}$.',
              answer: '(i) $\\frac{dy}{dx} = \\frac{1}{2}(25 - x^2)^{-1/2}(-2x) = -\\frac{x}{(25 - x^2)^{1/2}} = -\\frac{x}{y}$.\n(ii) Since $\\frac{dy}{dx} = -\\frac{x}{y}$, multiplying both sides by $y$ gives $y\\frac{dy}{dx} = -x \\implies x + y\\frac{dy}{dx} = 0$.',
              marks: 4,
              markingScheme: [
                'M1: Applies chain rule to $(25 - x^2)^{1/2}$',
                'A1: $\\frac{dy}{dx} = -\\frac{x}{\\sqrt{25 - x^2}}$',
                'M1: Recognises denominator is equal to $y$',
                'A1: Concludes $x + y\\frac{dy}{dx} = 0$ clearly',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 7.3 Tangents and normals
    // ------------------------------------------------------------------------
    {
      id: 'sub_7_3',
      number: '7.3',
      title: 'Tangents and normals',
      type: 'lesson',
      steps: [
        {
          id: '7_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Linear Approximations & Perpendicularity',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'The Local Tangent and Perpendicular Normal',
              content:
                'At any chosen point $P(x_1, y_1)$ on a curve: (1) The **tangent** is the straight line that just glances the curve, sharing its exact slope $m_T = \\left.\\frac{dy}{dx}\\right|_{P}$. (2) The **normal** is the perpendicular line passing through $P$ at an exact $90^\\circ$ right angle to the tangent, with gradient $m_N = -\\frac{1}{m_T}$. Both lines are then formulated using the point-slope straight line formula $y - y_1 = m(x - x_1)$.',
            },
            {
              type: 'formula_card',
              title: 'Tangent & Normal Formulas',
              math: '\\begin{aligned} \\text{Tangent Gradient: } & m_T = f\'(x_1) \\\\ \\text{Normal Gradient: } & m_N = -\\frac{1}{m_T} \\quad (m_T \\ne 0) \\\\ \\text{Tangent Line: } & y - y_1 = m_T (x - x_1) \\\\ \\text{Normal Line: } & y - y_1 = -\\frac{1}{m_T} (x - x_1) \\end{aligned}',
              content: 'If $m_T = 0$, the tangent is horizontal ($y = y_1$) and the normal is vertical ($x = x_1$).',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Tangent Line',
                  definition: 'A straight line that touches a curve at a single point and has the same instantaneous slope as the curve there.',
                },
                {
                  term: 'Normal Line',
                  definition: 'The straight line perpendicular to the tangent at the point of contact ($m_1 m_2 = -1$).',
                },
              ],
            },
          ],
        },
        {
          id: '7_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Complete Tangent & Normal Calculation',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the equations of the tangent and normal to the curve $y = x^3 - 3x + 4$ at the point where $x = 2$',
              content: 'Full step-by-step working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the $y$-coordinate of the point of contact by substituting $x = 2$ into the curve equation.',
                  math: 'y_1 = 2^3 - 3(2) + 4 = 8 - 6 + 4 = 6 \\implies P(2, 6)',
                },
                {
                  stepNumber: 2,
                  explanation: 'Differentiate to find the gradient function $\\frac{dy}{dx}$.',
                  math: '\\frac{dy}{dx} = 3x^2 - 3',
                },
                {
                  stepNumber: 3,
                  explanation: 'Evaluate the gradient at $x = 2$ to find the tangent gradient $m_T$.',
                  math: 'm_T = 3(2^2) - 3 = 12 - 3 = 9',
                },
                {
                  stepNumber: 4,
                  explanation: 'Form the equation of the tangent using $y - y_1 = m_T(x - x_1)$.',
                  math: 'y - 6 = 9(x - 2) \\implies y - 6 = 9x - 18 \\implies y = 9x - 12',
                },
                {
                  stepNumber: 5,
                  explanation: 'Find the perpendicular normal gradient $m_N = -\\frac{1}{m_T} = -\\frac{1}{9}$ and form the normal equation.',
                  math: 'y - 6 = -\\frac{1}{9}(x - 2) \\implies 9y - 54 = -x + 2 \\implies x + 9y - 56 = 0',
                },
              ],
            },
          ],
        },
        {
          id: '7_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Using the Derivative Function as $m$ in $y - y_1 = m(x - x_1)$',
              mistake: 'Writing $y - 6 = (3x^2 - 3)(x - 2)$, leaving $x$ inside the gradient!',
              correction: 'The gradient of a straight line is a CONSTANT NUMBER, not a function! You must evaluate $\\frac{dy}{dx}$ at the specific numerical point $x = 2$ before substituting into the line equation.',
              proTip: 'Examiners often ask for the line equation in the form $ax + by + c = 0$ where $a, b, c$ are integers. Always check the required format before finishing your answer.',
            },
          ],
        },
        {
          id: '7_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '7_3_q1',
              questionNumber: 1,
              prompt: 'Find the equation of the tangent to $y = x^2 - 4x + 1$ at the point $(3, -2)$.',
              hint: '$\\frac{dy}{dx} = 2x - 4$. At $x = 3$, $m = 2$. Line: $y - (-2) = 2(x - 3)$.',
              answer: '$y + 2 = 2x - 6 \\implies y = 2x - 8$',
              marks: 2,
            },
            {
              id: '7_3_q2',
              questionNumber: 2,
              prompt: 'Find the gradient of the normal to $y = \\frac{8}{x}$ at the point where $x = 4$.',
              hint: '$\\frac{dy}{dx} = -8x^{-2} = -\\frac{8}{x^2}$. At $x = 4$, $m_T = -8/16 = -1/2$. $m_N = -1/m_T$.',
              answer: '$m_N = -\\frac{1}{-1/2} = 2$',
              marks: 2,
            },
            {
              id: '7_3_q3',
              questionNumber: 3,
              prompt: 'State the equation of the normal to $y = 5 - x^2$ at the point $(0, 5)$.',
              hint: '$\\frac{dy}{dx} = -2x = 0$ at $x = 0$. What is perpendicular to a horizontal line?',
              answer: 'Tangent is $y = 5$ (horizontal), so normal is the vertical line $x = 0$ ($y$-axis).',
              marks: 2,
            },
          ],
        },
        {
          id: '7_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '7_3_q4',
              questionNumber: 1,
              prompt: 'The tangent to the curve $y = 2\\sqrt{x}$ at the point $P(4, 4)$ meets the $x$-axis at $A$. Find the coordinates of $A$.',
              hint: '$\\frac{dy}{dx} = x^{-1/2} = \\frac{1}{\\sqrt{x}}$. At $x = 4$, $m = 1/2$. Tangent: $y - 4 = \\frac{1}{2}(x - 4) \\implies y = \\frac{1}{2}x + 2$. Set $y = 0$.',
              answer: '$0 = \\frac{1}{2}x + 2 \\implies \\frac{1}{2}x = -2 \\implies x = -4$. $A(-4, 0)$.',
              marks: 4,
            },
            {
              id: '7_3_q5',
              questionNumber: 2,
              prompt: 'Find the equation of the normal to the curve $y = (2x - 1)^3$ at the point where $x = 1$. Give your answer in the form $ax + by + c = 0$.',
              hint: 'At $x = 1$, $y = 1$. $\\frac{dy}{dx} = 6(2x - 1)^2 = 6$. $m_N = -1/6$.',
              answer: '$y - 1 = -\\frac{1}{6}(x - 1) \\implies 6y - 6 = -x + 1 \\implies x + 6y - 7 = 0$',
              marks: 4,
            },
            {
              id: '7_3_q6',
              questionNumber: 3,
              prompt: 'Find the equations of the tangents to the curve $y = x^2 - 5x + 4$ at the points where the curve crosses the $x$-axis.',
              hint: 'Crosses $x$-axis when $x^2 - 5x + 4 = 0 \\implies x = 1$ and $x = 4$. Points are $(1, 0)$ and $(4, 0)$.',
              answer: '$\\frac{dy}{dx} = 2x - 5$. At $(1, 0)$, $m = -3 \\implies y = -3(x - 1) = -3x + 3$. At $(4, 0)$, $m = 3 \\implies y = 3(x - 4) = 3x - 12$.',
              marks: 4,
            },
          ],
        },
        {
          id: '7_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '7_3_q7',
              questionNumber: 1,
              prompt: 'The normal to the curve $y = \\frac{8}{x + 2}$ at the point $P(2, 2)$ intersects the $x$-axis at $A$ and the $y$-axis at $B$. Find the area of triangle $OAB$, where $O$ is the origin. [6 marks]',
              hint: '$y = 8(x + 2)^{-1} \\implies \\frac{dy}{dx} = -8(x + 2)^{-2}$. At $x = 2$, $\\frac{dy}{dx} = -8/16 = -1/2$. Normal gradient is 2.',
              answer: '$\\frac{dy}{dx} = -\\frac{8}{(x+2)^2}$. At $P(2, 2)$, $m_T = -\\frac{8}{16} = -\\frac{1}{2} \\implies m_N = +2$.\nNormal equation: $y - 2 = 2(x - 2) \\implies y = 2x - 2$.\n$x$-intercept $A$: Set $y = 0 \\implies 2x - 2 = 0 \\implies x = 1 \\implies A(1, 0)$.\n$y$-intercept $B$: Set $x = 0 \\implies y = -2 \\implies B(0, -2)$.\nArea of $\\triangle OAB = \\frac{1}{2} \\times |OA| \\times |OB| = \\frac{1}{2} \\times 1 \\times 2 = 1$.',
              marks: 6,
              markingScheme: [
                'M1: Differentiates $y = 8(x+2)^{-1}$ using chain rule or power rule',
                'A1: Gradient of tangent $m_T = -1/2$ at $x = 2$',
                'B1: Normal gradient $m_N = 2$',
                'M1: Obtains normal equation $y = 2x - 2$',
                'A1: Intercepts $A(1, 0)$ and $B(0, -2)$',
                'A1: Area $= 1$',
              ],
            },
            {
              id: '7_3_q8',
              questionNumber: 2,
              prompt: 'The tangent to the curve $y = x^3 - 6x^2 + 12x - 5$ at the point $P(1, 2)$ meets the curve again at point $Q$. Find the coordinates of $Q$. [6 marks]',
              hint: 'Find the tangent at $P$. Then solve simultaneously with the curve: set curve equation equal to tangent equation and divide by $(x - 1)^2$.',
              answer: '$\\frac{dy}{dx} = 3x^2 - 12x + 12 = 3(x - 2)^2$. At $P(1, 2)$, $m = 3(1 - 2)^2 = 3$.\nTangent equation: $y - 2 = 3(x - 1) \\implies y = 3x - 1$.\nIntersection with curve: $x^3 - 6x^2 + 12x - 5 = 3x - 1 \\implies x^3 - 6x^2 + 9x - 4 = 0$.\nSince the line is tangent at $x = 1$, $(x - 1)^2 = x^2 - 2x + 1$ is a factor.\n$(x^2 - 2x + 1)(x - 4) = 0 \\implies x = 4$.\nWhen $x = 4$, $y = 3(4) - 1 = 11$. Point $Q$ is $(4, 11)$.',
              marks: 6,
              markingScheme: [
                'M1: Finds $\\frac{dy}{dx} = 3x^2 - 12x + 12$ and evaluates $m = 3$ at $x = 1$',
                'A1: Tangent equation $y = 3x - 1$',
                'M1: Equates curve to tangent: $x^3 - 6x^2 + 9x - 4 = 0$',
                'M1: Recognises $(x - 1)^2$ is a factor and finds remaining root $(x - 4)$',
                'A1: $x = 4$',
                'A1: $y = 11$, so $Q(4, 11)$',
              ],
            },
            {
              id: '7_3_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = \\sqrt{2x + 1}$. The normal to the curve at $x = 4$ has equation $y = mx + c$. Find the exact values of $m$ and $c$. [4 marks]',
              hint: 'At $x = 4$, $y = \\sqrt{9} = 3$. $\\frac{dy}{dx} = \\frac{1}{2}(2x + 1)^{-1/2}(2) = \\frac{1}{\\sqrt{2x + 1}}$.',
              answer: 'At $x = 4$, $y = 3$. $\\frac{dy}{dx} = \\frac{1}{\\sqrt{2(4) + 1}} = \\frac{1}{3} \\implies m_T = \\frac{1}{3}$.\nNormal gradient $m = -\\frac{1}{1/3} = -3$.\nNormal line passes through $(4, 3)$: $y - 3 = -3(x - 4) \\implies y - 3 = -3x + 12 \\implies y = -3x + 15$.\nThus $m = -3$ and $c = 15$.',
              marks: 4,
              markingScheme: [
                'B1: Point $(4, 3)$ and $\\frac{dy}{dx} = \\frac{1}{\\sqrt{2x+1}}$',
                'B1: Tangent gradient $1/3$, so normal gradient $m = -3$',
                'M1: Uses $y - 3 = -3(x - 4)$ to find $c$',
                'A1: $m = -3$ and $c = 15$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 7.4 Second derivatives
    // ------------------------------------------------------------------------
    {
      id: 'sub_7_4',
      number: '7.4',
      title: 'Second derivatives',
      type: 'lesson',
      steps: [
        {
          id: '7_4_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Rate of Change of the Gradient & Curvature',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Curvature and Acceleration',
              content:
                'If the first derivative $\\frac{dy}{dx}$ is the velocity of your graph (how fast $y$ changes with $x$), the second derivative $\\frac{d^2y}{dx^2}$ is its acceleration! It measures whether the gradient is growing steeper or flattening out. Graphically, $\\frac{d^2y}{dx^2} > 0$ means the curve is concave up (bending like a smile $\\smile$), while $\\frac{d^2y}{dx^2} < 0$ means concave down (frowning $\\frown$).',
            },
            {
              type: 'formula_card',
              title: 'Second Derivative Notation & Second Derivative Test',
              math: '\\begin{aligned} \\frac{d^2y}{dx^2} &= \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = f\'\'(x) \\\\ \\text{If } f\'(c) = 0 \\text{ and } f\'\'(c) > 0 &\\implies \\text{Local Minimum } (\\smile) \\\\ \\text{If } f\'(c) = 0 \\text{ and } f\'\'(c) < 0 &\\implies \\text{Local Maximum } (\\frown) \\\\ \\text{If } f\'\'(c) = 0 &\\implies \\text{Inconclusive (test signs of } f\'(x)\\text{)} \\end{aligned}',
              content: 'Notice the counter-intuitive signs: positive second derivative means MINIMUM, negative means MAXIMUM!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Second Derivative ($\\frac{d^2y}{dx^2}$)',
                  definition: 'The derivative of the first derivative, indicating the curvature or concavity of the function.',
                },
                {
                  term: 'Concavity',
                  definition: 'A curve is concave upward if $\\frac{d^2y}{dx^2} > 0$ and concave downward if $\\frac{d^2y}{dx^2} < 0$.',
                },
              ],
            },
          ],
        },
        {
          id: '7_4_s2',
          stepNumber: 2,
          title: 'Worked Example: Calculating $\\frac{d^2y}{dx^2}$ & Classifying Extrema',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'For the curve $y = 2x^3 - 9x^2 + 12x + 1$, find the stationary points and use the second derivative test to determine their nature',
              content: 'Systematic two-step calculus procedure:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the first derivative $\\frac{dy}{dx}$ and set it to zero.',
                  math: '\\frac{dy}{dx} = 6x^2 - 18x + 12 = 0 \\implies 6(x^2 - 3x + 2) = 0 \\implies 6(x - 1)(x - 2) = 0',
                },
                {
                  stepNumber: 2,
                  explanation: 'Solve for the stationary $x$-values and calculate their $y$-coordinates.',
                  math: 'x = 1: y = 2(1) - 9(1) + 12(1) + 1 = 6 \\implies (1, 6)\\\\ x = 2: y = 2(8) - 9(4) + 12(2) + 1 = 5 \\implies (2, 5)',
                },
                {
                  stepNumber: 3,
                  explanation: 'Find the second derivative $\\frac{d^2y}{dx^2}$.',
                  math: '\\frac{d^2y}{dx^2} = \\frac{d}{dx}(6x^2 - 18x + 12) = 12x - 18',
                },
                {
                  stepNumber: 4,
                  explanation: 'Test the curvature at each stationary point.',
                  math: 'x = 1: \\frac{d^2y}{dx^2} = 12(1) - 18 = -6 < 0 \\implies \\text{Local Maximum at } (1, 6)\\\\ x = 2: \\frac{d^2y}{dx^2} = 12(2) - 18 = +6 > 0 \\implies \\text{Local Minimum at } (2, 5)',
                },
              ],
            },
          ],
        },
        {
          id: '7_4_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Misinterpreting the Sign of the Second Derivative',
              mistake: 'Thinking $\\frac{d^2y}{dx^2} > 0$ means "maximum" because positive sounds like max.',
              correction: 'Positive second derivative means the gradient is INCREASING (it goes from negative slope, through 0, to positive slope), which shapes the bottom of a bowl: a MINIMUM!',
              proTip: 'Draw a small bowl $\\smile$: tangent slopes go $- \\to 0 \\to +$, so slope increases $\\implies \\frac{d^2y}{dx^2} > 0$ is MINIMUM. Frown $\\frown$: slopes go $+ \\to 0 \\to -$, so slope decreases $\\implies \\frac{d^2y}{dx^2} < 0$ is MAXIMUM.',
            },
          ],
        },
        {
          id: '7_4_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '7_4_q1',
              questionNumber: 1,
              prompt: 'Find $\\frac{d^2y}{dx^2}$ when $y = 4x^5 - 3x^3 + 2x - 1$.',
              hint: 'Differentiate once, then differentiate the result again.',
              answer: '$\\frac{dy}{dx} = 20x^4 - 9x^2 + 2 \\implies \\frac{d^2y}{dx^2} = 80x^3 - 18x$',
              marks: 2,
            },
            {
              id: '7_4_q2',
              questionNumber: 2,
              prompt: 'Given $f(x) = \\frac{1}{x}$, evaluate $f\'\'(2)$.',
              hint: '$f(x) = x^{-1} \\implies f\'(x) = -x^{-2} \\implies f\'\'(x) = 2x^{-3}$.',
              answer: '$f\'\'(2) = 2(2)^{-3} = \\frac{2}{8} = \\frac{1}{4}$',
              marks: 2,
            },
            {
              id: '7_4_q3',
              questionNumber: 3,
              prompt: 'A curve has $\\frac{dy}{dx} = 0$ and $\\frac{d^2y}{dx^2} = -5$ at $x = 3$. State the nature of this stationary point.',
              hint: 'Negative second derivative corresponds to concave down.',
              answer: 'Local Maximum (since $\\frac{d^2y}{dx^2} < 0$).',
              marks: 2,
            },
          ],
        },
        {
          id: '7_4_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '7_4_q4',
              questionNumber: 1,
              prompt: 'Find $\\frac{d^2y}{dx^2}$ for the curve $y = \\sqrt{2x + 1}$ and show that $\\frac{d^2y}{dx^2} < 0$ for all $x > -\\frac{1}{2}$.',
              hint: '$\\frac{dy}{dx} = (2x + 1)^{-1/2} \\implies \\frac{d^2y}{dx^2} = -\\frac{1}{2}(2x + 1)^{-3/2}(2) = -(2x + 1)^{-3/2}$.',
              answer: '$\\frac{d^2y}{dx^2} = -\\frac{1}{(2x + 1)^{3/2}}$. For $x > -1/2$, the base $(2x + 1) > 0$, so $(2x + 1)^{3/2} > 0$. The negative numerator makes $\\frac{d^2y}{dx^2} < 0$ for all $x > -1/2$.',
              marks: 4,
            },
            {
              id: '7_4_q5',
              questionNumber: 2,
              prompt: 'Find the coordinates and nature of the stationary point on $y = x + \\frac{16}{x}$ for $x > 0$.',
              hint: '$\\frac{dy}{dx} = 1 - 16x^{-2} = 0 \\implies x^2 = 16$. $\\frac{d^2y}{dx^2} = 32x^{-3}$.',
              answer: '$x = 4$ (since $x > 0$). $y = 4 + 4 = 8$. $\\frac{d^2y}{dx^2} = \\frac{32}{64} = 0.5 > 0$. Nature: Local Minimum at $(4, 8)$.',
              marks: 4,
            },
            {
              id: '7_4_q6',
              questionNumber: 3,
              prompt: 'Find the values of $x$ for which the curve $y = x^4 - 6x^2$ is concave upwards (i.e. $\\frac{d^2y}{dx^2} > 0$).',
              hint: 'Find $\\frac{d^2y}{dx^2} = 12x^2 - 12 > 0$.',
              answer: '$12(x^2 - 1) > 0 \\implies x^2 > 1 \\implies x > 1 \\text{ or } x < -1$.',
              marks: 3,
            },
          ],
        },
        {
          id: '7_4_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '7_4_q7',
              questionNumber: 1,
              prompt: 'A curve has equation $y = 3x^5 - 20x^3$. (i) Find $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$. (ii) Find all stationary points and determine the nature of each using the second derivative test where possible. [6 marks]',
              hint: '$\\frac{dy}{dx} = 15x^4 - 60x^2 = 15x^2(x^2 - 4) = 0$. Roots at $x = 0, \\pm 2$.',
              answer: '(i) $\\frac{dy}{dx} = 15x^4 - 60x^2$, $\\frac{d^2y}{dx^2} = 60x^3 - 120x = 60x(x^2 - 2)$.\n(ii) Stationary points: $15x^2(x - 2)(x + 2) = 0 \\implies x = 2, -2, 0$.\nAt $x = 2$: $y = 3(32) - 20(8) = -64$. $\\frac{d^2y}{dx^2} = 60(2)(4 - 2) = 240 > 0 \\implies$ Local Minimum at $(2, -64)$.\nAt $x = -2$: $y = 3(-32) - 20(-8) = +64$. $\\frac{d^2y}{dx^2} = 60(-2)(4 - 2) = -240 < 0 \\implies$ Local Maximum at $(-2, 64)$.\nAt $x = 0$: $y = 0$. $\\frac{d^2y}{dx^2} = 0$. Test first derivative around $0$: at $x = -1$, $\\frac{dy}{dx} = 15 - 60 = -45 < 0$; at $x = 1$, $\\frac{dy}{dx} = -45 < 0$. Slope does not change sign $\\implies$ Point of Inflexion at $(0, 0)$.',
              marks: 6,
              markingScheme: [
                'B1: $\\frac{dy}{dx} = 15x^4 - 60x^2$ and $\\frac{d^2y}{dx^2} = 60x^3 - 120x$',
                'M1: Solves $\\frac{dy}{dx} = 0$ to get $x = -2, 0, 2$',
                'A1: Identifies $(2, -64)$ as local minimum via $\\frac{d^2y}{dx^2} = 240 > 0$',
                'A1: Identifies $(-2, 64)$ as local maximum via $\\frac{d^2y}{dx^2} = -240 < 0$',
                'M1: Tests around $x = 0$ since $\\frac{d^2y}{dx^2} = 0$',
                'A1: Classifies $(0, 0)$ as stationary point of inflexion',
              ],
            },
            {
              id: '7_4_q8',
              questionNumber: 2,
              prompt: 'A curve has equation $y = \\frac{k}{x} + x^2$ where $k$ is a non-zero constant. Given that the curve has a stationary point at $x = 2$: (i) Find the value of $k$. (ii) Show that this stationary point is a local minimum. [4 marks]',
              hint: '$\\frac{dy}{dx} = -kx^{-2} + 2x = 0$ at $x = 2$.',
              answer: '(i) $\\frac{dy}{dx} = -\\frac{k}{x^2} + 2x$. At $x = 2$: $-\\frac{k}{4} + 4 = 0 \\implies \\frac{k}{4} = 4 \\implies k = 16$.\n(ii) $\\frac{d^2y}{dx^2} = \\frac{d}{dx}(-16x^{-2} + 2x) = 32x^{-3} + 2 = \\frac{32}{x^3} + 2$.\nAt $x = 2$: $\\frac{d^2y}{dx^2} = \\frac{32}{8} + 2 = 4 + 2 = 6 > 0$.\nSince $\\frac{d^2y}{dx^2} > 0$, the stationary point is a local minimum.',
              marks: 4,
              markingScheme: [
                'M1: Differentiates and sets $-k/x^2 + 2x = 0$ at $x = 2$',
                'A1: $k = 16$',
                'M1: Finds $\\frac{d^2y}{dx^2} = 32x^{-3} + 2$',
                'A1: Computes $\\frac{d^2y}{dx^2} = 6 > 0$ and justifies minimum',
              ],
            },
            {
              id: '7_4_q9',
              questionNumber: 3,
              prompt: 'The function $f$ is defined by $f(x) = (2x - 3)^4$. (i) Find $f\'(x)$ and $f\'\'(x)$. (ii) Find the stationary point of $f$. (iii) Explain why the second derivative test fails to classify this stationary point, and determine its nature by another method. [5 marks]',
              hint: '$f\'(x) = 8(2x - 3)^3$. $f\'\'(x) = 48(2x - 3)^2$. At $x = 1.5$, both are 0.',
              answer: '(i) $f\'(x) = 4(2x - 3)^3 \\times 2 = 8(2x - 3)^3$.\n$f\'\'(x) = 24(2x - 3)^2 \\times 2 = 48(2x - 3)^2$.\n(ii) $f\'(x) = 0 \\implies 2x - 3 = 0 \\implies x = 1.5$. Point is $(1.5, 0)$.\n(iii) At $x = 1.5$, $f\'\'(1.5) = 48(0) = 0$, so the test is inconclusive.\nTesting sign of $f\'(x)$: for $x < 1.5$ (e.g. $x = 1$), $f\'(1) = 8(-1)^3 = -8 < 0$. For $x > 1.5$ (e.g. $x = 2$), $f\'(2) = 8(1)^3 = +8 > 0$.\nSince the gradient changes from negative to positive, the point $(1.5, 0)$ is a local minimum.',
              marks: 5,
              markingScheme: [
                'B1: $f\'(x) = 8(2x - 3)^3$ and $f\'\'(x) = 48(2x - 3)^2$',
                'B1: Stationary point at $(1.5, 0)$',
                'B1: Notes $f\'\'(1.5) = 0$, so second derivative test is inconclusive',
                'M1: Tests sign of $f\'(x)$ on either side of $1.5$',
                'A1: Correctly classifies as local minimum with reasoning',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit 7 Test
    // ------------------------------------------------------------------------
    {
      id: 'sub_7_test',
      number: 'Unit Test',
      title: 'Unit 7 Test: Differentiation',
      type: 'unitTest',
      steps: [
        {
          id: '7_test_s1',
          stepNumber: 1,
          title: 'Test Part A: Core Derivatives & Rates',
          type: 'exercise_l1',
          badge: 'Unit Test: Part A',
          practiceQuestions: [
            {
              id: '7_t_q1',
              questionNumber: 1,
              prompt: 'Differentiate $y = 4x^3 - \\frac{3}{x^2} + 2$ with respect to $x$. [3 marks]',
              hint: 'Rewrite as $y = 4x^3 - 3x^{-2} + 2$.',
              answer: '$\\frac{dy}{dx} = 12x^2 - 3(-2x^{-3}) = 12x^2 + \\frac{6}{x^3}$',
              marks: 3,
            },
            {
              id: '7_t_q2',
              questionNumber: 2,
              prompt: 'Use the chain rule to differentiate $y = (5x - 2)^6$. [2 marks]',
              hint: '$6(5x - 2)^5 \\times 5$.',
              answer: '$\\frac{dy}{dx} = 30(5x - 2)^5$',
              marks: 2,
            },
            {
              id: '7_t_q3',
              questionNumber: 3,
              prompt: 'Find the gradient of the curve $y = \\sqrt{4x + 1}$ at the point where $x = 2$. [3 marks]',
              hint: '$\\frac{dy}{dx} = \\frac{1}{2}(4x + 1)^{-1/2}(4) = \\frac{2}{\\sqrt{4x + 1}}$.',
              answer: 'At $x = 2$, $\\frac{dy}{dx} = \\frac{2}{\\sqrt{9}} = \\frac{2}{3}$',
              marks: 3,
            },
          ],
        },
        {
          id: '7_test_s2',
          stepNumber: 2,
          title: 'Test Part B: Tangents, Normals & Turning Points',
          type: 'exercise_l2',
          badge: 'Unit Test: Part B',
          practiceQuestions: [
            {
              id: '7_t_q4',
              questionNumber: 1,
              prompt: 'Find the equation of the normal to the curve $y = x^2 - 6x + 8$ at the point $P(5, 3)$. [4 marks]',
              hint: '$\\frac{dy}{dx} = 2x - 6$. At $x = 5$, $m_T = 4 \\implies m_N = -1/4$.',
              answer: '$y - 3 = -\\frac{1}{4}(x - 5) \\implies 4y - 12 = -x + 5 \\implies x + 4y - 17 = 0$',
              marks: 4,
            },
            {
              id: '7_t_q5',
              questionNumber: 2,
              prompt: 'A curve has equation $y = 2x + \\frac{18}{x}$ for $x > 0$. Find the stationary point and use the second derivative to determine its nature. [4 marks]',
              hint: '$\\frac{dy}{dx} = 2 - 18x^{-2} = 0 \\implies x^2 = 9$.',
              answer: '$x = 3 \\implies y = 2(3) + 18/3 = 12$. $\\frac{d^2y}{dx^2} = 36x^{-3} = \\frac{36}{27} = \\frac{4}{3} > 0 \\implies$ Local Minimum at $(3, 12)$.',
              marks: 4,
            },
            {
              id: '7_t_q6',
              questionNumber: 3,
              prompt: 'The tangent to the curve $y = \\frac{4}{\\sqrt{x}}$ at $x = 1$ intersects the $x$-axis at $T$. Find the coordinates of $T$. [4 marks]',
              hint: '$y = 4x^{-1/2} \\implies \\frac{dy}{dx} = -2x^{-3/2}$. At $x = 1$, $y = 4, m = -2$.',
              answer: 'Tangent: $y - 4 = -2(x - 1) \\implies y = -2x + 6$. Setting $y = 0 \\implies 2x = 6 \\implies x = 3$. $T(3, 0)$.',
              marks: 4,
            },
          ],
        },
        {
          id: '7_test_s3',
          stepNumber: 3,
          title: 'Test Part C: Exam-Style Challenge',
          type: 'exercise_l3',
          badge: 'Unit Test: Part C',
          practiceQuestions: [
            {
              id: '7_t_q7',
              questionNumber: 1,
              prompt: 'The curve $y = f(x)$ passes through $(2, 10)$ and its gradient is given by $f\'(x) = 3x^2 - 4x + k$. Given that the tangent to the curve at $x = 2$ is parallel to the line $16x - 2y = 5$: (i) Find the value of $k$. (ii) Find the equation of the normal to the curve at $(2, 10)$. [6 marks]',
              hint: 'Parallel line has gradient $16/2 = 8$. Set $f\'(2) = 8$.',
              answer: '(i) Line is $2y = 16x - 5 \\implies y = 8x - 2.5$, so gradient is 8.\nAt $x = 2$: $f\'(2) = 3(4) - 4(2) + k = 12 - 8 + k = 4 + k$.\nSetting $4 + k = 8 \\implies k = 4$.\n(ii) At $(2, 10)$, tangent gradient is 8, so normal gradient is $m_N = -\\frac{1}{8}$.\nNormal equation: $y - 10 = -\\frac{1}{8}(x - 2) \\implies 8y - 80 = -x + 2 \\implies x + 8y - 82 = 0$.',
              marks: 6,
              markingScheme: [
                'B1: Identifies line gradient as 8',
                'M1: Sets $3(2^2) - 4(2) + k = 8$',
                'A1: $k = 4$',
                'B1: Normal gradient $m_N = -1/8$',
                'M1: Applies $y - 10 = -\\frac{1}{8}(x - 2)$',
                'A1: $x + 8y - 82 = 0$ (or $y = -\\frac{1}{8}x + \\frac{41}{4}$)',
              ],
            },
            {
              id: '7_t_q8',
              questionNumber: 2,
              prompt: 'A curve has equation $y = \\frac{1}{3}x^3 - x^2 - 3x + 5$. (i) Find the set of values of $x$ for which $y$ is an increasing function of $x$. (ii) Find the coordinates of the two stationary points and classify each using $\\frac{d^2y}{dx^2}$. [7 marks]',
              hint: 'Increasing when $\\frac{dy}{dx} \\ge 0$. Solve $x^2 - 2x - 3 \\ge 0$.',
              answer: '(i) $\\frac{dy}{dx} = x^2 - 2x - 3 = (x - 3)(x + 1)$.\nFunction is increasing where $\\frac{dy}{dx} \\ge 0 \\implies x \\le -1$ or $x \\ge 3$.\n(ii) Stationary points at $x = -1$ and $x = 3$.\n$\\frac{d^2y}{dx^2} = 2x - 2$.\nAt $x = -1$: $y = -\\frac{1}{3} - 1 + 3 + 5 = 6\\frac{2}{3} = \\frac{20}{3}$. $\\frac{d^2y}{dx^2} = -4 < 0 \\implies$ Local Maximum at $\\left(-1, \\frac{20}{3}\\right)$.\nAt $x = 3$: $y = 9 - 9 - 9 + 5 = -4$. $\\frac{d^2y}{dx^2} = 6 - 2 = 4 > 0 \\implies$ Local Minimum at $(3, -4)$.',
              marks: 7,
              markingScheme: [
                'M1: Differentiates to get $x^2 - 2x - 3$',
                'M1: Solves $(x - 3)(x + 1) \\ge 0$',
                'A1: $x \\le -1$ or $x \\ge 3$',
                'B1: $\\frac{d^2y}{dx^2} = 2x - 2$',
                'M1: Evaluates $y$ and $\\frac{d^2y}{dx^2}$ at $x = -1$ and $x = 3$',
                'A1: Maximum at $(-1, 20/3)$ justified by $\\frac{d^2y}{dx^2} = -4 < 0$',
                'A1: Minimum at $(3, -4)$ justified by $\\frac{d^2y}{dx^2} = 4 > 0$',
              ],
            },
            {
              id: '7_t_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = 2x\\sqrt{x} - 9x + 12\\sqrt{x}$ for $x > 0$. (i) Show that $\\frac{dy}{dx} = \\frac{3(\\sqrt{x} - 1)(\\sqrt{x} - 2)}{\\sqrt{x}}$. (ii) Hence find the exact coordinates of the stationary points of the curve. [7 marks]',
              hint: 'Write in index form: $y = 2x^{3/2} - 9x + 12x^{1/2}$. Differentiate and factorise.',
              answer: '(i) $y = 2x^{3/2} - 9x + 12x^{1/2}$.\n$\\frac{dy}{dx} = 2\\left(\\frac{3}{2}x^{1/2}\\right) - 9 + 12\\left(\\frac{1}{2}x^{-1/2}\\right) = 3x^{1/2} - 9 + 6x^{-1/2} = 3\\sqrt{x} - 9 + \\frac{6}{\\sqrt{x}}$.\nOver a common denominator $\\sqrt{x}$:\n$\\frac{dy}{dx} = \\frac{3x - 9\\sqrt{x} + 6}{\\sqrt{x}} = \\frac{3(x - 3\\sqrt{x} + 2)}{\\sqrt{x}} = \\frac{3(\\sqrt{x} - 1)(\\sqrt{x} - 2)}{\\sqrt{x}}$.\n(ii) $\\frac{dy}{dx} = 0 \\implies \\sqrt{x} = 1$ or $\\sqrt{x} = 2 \\implies x = 1$ or $x = 4$.\nWhen $x = 1$: $y = 2(1) - 9(1) + 12(1) = 5 \\implies (1, 5)$.\nWhen $x = 4$: $y = 2(4)(2) - 9(4) + 12(2) = 16 - 36 + 24 = 4 \\implies (4, 4)$.',
              marks: 7,
              markingScheme: [
                'B1: Expresses $y$ in index form $2x^{3/2} - 9x + 12x^{1/2}$',
                'M1: Correct differentiation to $3x^{1/2} - 9 + 6x^{-1/2}$',
                'M1: Puts over common denominator $\\sqrt{x}$',
                'A1: Correctly factors into $\\frac{3(\\sqrt{x}-1)(\\sqrt{x}-2)}{\\sqrt{x}}$',
                'M1: Sets numerator to zero to find $\\sqrt{x} = 1, 2$',
                'A1: $x = 1, y = 5$',
                'A1: $x = 4, y = 4$',
              ],
            },
          ],
        },
      ],
    },
  ],
};
