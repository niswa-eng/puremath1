import { Unit } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 8: Further Differentiation
 * ============================================================================
 */

export const unit8: Unit = {
  id: 'unit_8',
  number: 8,
  title: 'Further differentiation',
  learningObjectives: [
    '1.7.4: find and use second derivatives, including to determine the nature of stationary points',
    '1.7.5: use the first derivative to determine whether a function is increasing or decreasing',
    '1.7.6: solve practical problems involving optimisation using differentiation',
    '1.7.7: solve problems involving rates of change, including related rates',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 8.1 Increasing and decreasing function
    // ------------------------------------------------------------------------
    {
      id: 'sub_8_1',
      number: '8.1',
      title: 'Increasing and decreasing function',
      type: 'lesson',
      steps: [
        {
          id: '8_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Uphill vs Downhill Slopes',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Reading Curves from Left to Right',
              content:
                'Imagine walking along a hiking trail from left to right: as $x$ increases, if your elevation $y$ is rising, the path has a positive tangent slope ($\\frac{dy}{dx} > 0$), meaning the function is **increasing**. If you are walking downhill, your elevation drops ($\\frac{dy}{dx} < 0$), meaning the function is **decreasing**. Stationary points occur at the exact summits and valley bottoms where the path is momentarily flat ($\\frac{dy}{dx} = 0$).',
            },
            {
              type: 'formula_card',
              title: 'Definitions of Monotonicity',
              math: '\\begin{aligned} \\text{Increasing Function: } & f\'(x) \\ge 0 \\quad (\\text{or } f\'(x) > 0 \\text{ for strictly increasing}) \\\\ \\text{Decreasing Function: } & f\'(x) \\le 0 \\quad (\\text{or } f\'(x) < 0 \\text{ for strictly decreasing}) \\\\ \\text{Strict Monotonicity: } & \\text{Guarantees the function is one-to-one and has an inverse!} \\end{aligned}',
              content: 'To prove a function is ALWAYS increasing for all $x \\in \\mathbb{R}$, differentiate and complete the square to show $f\'(x) \\ge k > 0$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Increasing Function',
                  definition: 'A function where $x_1 < x_2 \\implies f(x_1) \\le f(x_2)$, indicated by $f\'(x) \\ge 0$.',
                },
                {
                  term: 'Decreasing Function',
                  definition: 'A function where $x_1 < x_2 \\implies f(x_1) \\ge f(x_2)$, indicated by $f\'(x) \\le 0$.',
                },
              ],
            },
          ],
        },
        {
          id: '8_1_s2',
          stepNumber: 2,
          title: 'Worked Example: Proving Monotonicity via Completing the Square',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Show that the function $f(x) = 2x^3 + 3x^2 + 12x - 5$ is an increasing function for all real values of $x$',
              content: 'Demonstrating complete Cambridge justification:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the first derivative $f\'(x)$.',
                  math: 'f\'(x) = 6x^2 + 6x + 12',
                },
                {
                  stepNumber: 2,
                  explanation: 'Factor out the leading coefficient 6 to complete the square on the quadratic.',
                  math: 'f\'(x) = 6(x^2 + x + 2) = 6\\left[\\left(x + \\frac{1}{2}\\right)^2 - \\frac{1}{4} + 2\\right]',
                },
                {
                  stepNumber: 3,
                  explanation: 'Simplify inside the bracket: $-\\frac{1}{4} + \\frac{8}{4} = \\frac{7}{4}$.',
                  math: 'f\'(x) = 6\\left(x + \\frac{1}{2}\\right)^2 + 6\\left(\\frac{7}{4}\\right) = 6\\left(x + \\frac{1}{2}\\right)^2 + \\frac{21}{2}',
                },
                {
                  stepNumber: 4,
                  explanation: 'Argue that since squared terms are $\\ge 0$, $f\'(x)$ is strictly positive for all real $x$.',
                  math: '\\left(x + \\frac{1}{2}\\right)^2 \\ge 0 \\implies f\'(x) \\ge \\frac{21}{2} > 0 \\quad \\forall x \\in \\mathbb{R}',
                },
                {
                  stepNumber: 5,
                  explanation: 'Write the final concluding statement required by the mark scheme.',
                  math: '\\text{Since } f\'(x) > 0 \\text{ for all } x \\in \\mathbb{R}, \\; f(x) \\text{ is strictly increasing.}',
                },
              ],
            },
          ],
        },
        {
          id: '8_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Assuming a Function is Increasing Just by Testing Values',
              mistake: 'Testing $f(1) = 12$ and $f(2) = 35$ and concluding that $f(x)$ is increasing.',
              correction: 'Examiners award zero marks for testing discrete numerical values! A rigorous calculus proof requires showing that the derivative $f\'(x) > 0$ for all $x$ in the interval.',
              proTip: 'For quadratic derivatives $A x^2 + B x + C$, you can also calculate the discriminant $b^2 - 4ac$. If $b^2 - 4ac < 0$ and $A > 0$, the quadratic never crosses the $x$-axis and stays strictly positive for all $x$!',
            },
          ],
        },
        {
          id: '8_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '8_1_q1',
              questionNumber: 1,
              prompt: 'Find the set of values of $x$ for which $f(x) = x^2 - 8x + 15$ is decreasing.',
              hint: 'Decreasing when $f\'(x) \\le 0$. Find $f\'(x) = 2x - 8$.',
              answer: '$2x - 8 \\le 0 \\implies 2x \\le 8 \\implies x \\le 4$',
              marks: 2,
            },
            {
              id: '8_1_q2',
              questionNumber: 2,
              prompt: 'Show that $y = 5x - \\frac{3}{x}$ is an increasing function for all $x \\ne 0$.',
              hint: '$\\frac{dy}{dx} = 5 + 3x^{-2} = 5 + \\frac{3}{x^2}$. What is the sign of $\\frac{3}{x^2}$?',
              answer: '$\\frac{dy}{dx} = 5 + \\frac{3}{x^2}$. Since $x^2 > 0$ for all $x \\ne 0$, $\\frac{3}{x^2} > 0$, so $\\frac{dy}{dx} > 5 > 0$ everywhere.',
              marks: 2,
            },
            {
              id: '8_1_q3',
              questionNumber: 3,
              prompt: 'Find the interval where $y = 12x - x^3$ is increasing.',
              hint: '$\\frac{dy}{dx} = 12 - 3x^2 \\ge 0 \\implies 3(4 - x^2) \\ge 0$.',
              answer: '$4 - x^2 \\ge 0 \\implies x^2 \\le 4 \\implies -2 \\le x \\le 2$',
              marks: 3,
            },
          ],
        },
        {
          id: '8_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '8_1_q4',
              questionNumber: 1,
              prompt: 'Find the set of values of $x$ for which the curve $y = 2x^3 - 9x^2 - 24x + 7$ is decreasing.',
              hint: '$\\frac{dy}{dx} = 6x^2 - 18x - 24 \\le 0 \\implies x^2 - 3x - 4 \\le 0$.',
              answer: '$(x - 4)(x + 1) \\le 0 \\implies -1 \\le x \\le 4$',
              marks: 3,
            },
            {
              id: '8_1_q5',
              questionNumber: 2,
              prompt: 'Show that the function $g(x) = x^3 - 3x^2 + 6x - 1$ has no stationary points, and explain why it has an inverse function.',
              hint: '$g\'(x) = 3x^2 - 6x + 6 = 3(x^2 - 2x + 2) = 3[(x - 1)^2 + 1]$.',
              answer: '$g\'(x) = 3(x - 1)^2 + 3 \\ge 3 > 0$ for all $x$. Since $g\'(x) \\ne 0$, there are no stationary points. Since $g\'(x) > 0$, $g$ is strictly increasing (one-to-one) and therefore possesses an inverse function.',
              marks: 4,
            },
            {
              id: '8_1_q6',
              questionNumber: 3,
              prompt: 'The function $f(x) = kx - \\frac{4}{x}$ is strictly increasing for all $x \\ne 0$. Find the range of possible values for the constant $k$.',
              hint: '$f\'(x) = k + \\frac{4}{x^2}$. For this to be $> 0$ for large $x$, what must $k$ satisfy?',
              answer: 'As $x \\to \\infty$, $\\frac{4}{x^2} \\to 0$, so $f\'(x) \\to k$. For $f\'(x) > 0$ for all $x \\ne 0$, we require $k \\ge 0$.',
              marks: 3,
            },
          ],
        },
        {
          id: '8_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '8_1_q7',
              questionNumber: 1,
              prompt: 'A function $f$ is defined by $f(x) = 4x + \\frac{9}{x}$ for $x > 0$. (i) Find the set of values of $x$ for which $f$ is decreasing. (ii) Hence find the coordinates of the turning point of $f$ for $x > 0$. [5 marks]',
              hint: 'In (i), set $f\'(x) \\le 0$. In (ii), the turning point occurs where the function transitions from decreasing to increasing.',
              answer: '(i) $f\'(x) = 4 - 9x^{-2} = 4 - \\frac{9}{x^2}$.\n$f\'(x) \\le 0 \\implies 4 \\le \\frac{9}{x^2} \\implies 4x^2 \\le 9 \\implies x^2 \\le \\frac{9}{4}$.\nSince $x > 0$, the interval is $0 < x \\le \\frac{3}{2}$ (or $0 < x \\le 1.5$).\n(ii) At the boundary $x = 1.5$, $f\'(x) = 0$. $y = 4(1.5) + \\frac{9}{1.5} = 6 + 6 = 12$. Turning point is $(1.5, 12)$ (a local minimum).',
              marks: 5,
              markingScheme: [
                'B1: $f\'(x) = 4 - 9x^{-2}$',
                'M1: Sets $4 - \\frac{9}{x^2} \\le 0$',
                'A1: $0 < x \\le 1.5$ (must respect domain $x > 0$)',
                'M1: Evaluates $f(1.5)$',
                'A1: $(1.5, 12)$',
              ],
            },
            {
              id: '8_1_q8',
              questionNumber: 2,
              prompt: 'A curve has equation $y = x^3 + a x^2 + b x + 5$. Given that the curve is increasing for all $x \\in \\mathbb{R}$, show that $a^2 \\le 3b$. [4 marks]',
              hint: '$\\frac{dy}{dx} = 3x^2 + 2ax + b$. For this quadratic to be $\\ge 0$ for all $x$, its discriminant $\\Delta \\le 0$.',
              answer: '$\\frac{dy}{dx} = 3x^2 + 2ax + b$.\nSince the curve is increasing for all $x$, $\\frac{dy}{dx} \\ge 0$ for all real $x$.\nBecause the coefficient of $x^2$ is $3 > 0$, the parabola opens upward.\nFor it to remain non-negative everywhere, it must have at most one real root: $\\Delta = B^2 - 4AC \\le 0$.\n$\\Delta = (2a)^2 - 4(3)(b) = 4a^2 - 12b \\le 0 \\implies 4a^2 \\le 12b \\implies a^2 \\le 3b$.',
              marks: 4,
              markingScheme: [
                'B1: $\\frac{dy}{dx} = 3x^2 + 2ax + b$',
                'M1: States condition $\\Delta \\le 0$ for positive quadratic',
                'M1: Forms $(2a)^2 - 4(3)(b) \\le 0$',
                'A1: Concludes $a^2 \\le 3b$ with full justification',
              ],
            },
            {
              id: '8_1_q9',
              questionNumber: 3,
              prompt: 'The function $f(x) = \\frac{2x - 3}{x + 1}$ is defined for $x \\ne -1$. (i) Find $f\'(x)$. (ii) Deduce whether $f$ is increasing or decreasing on each part of its domain. [4 marks]',
              hint: 'Rewrite as $f(x) = \\frac{2(x+1) - 5}{x+1} = 2 - 5(x+1)^{-1}$.',
              answer: '(i) $f(x) = 2 - 5(x + 1)^{-1} \\implies f\'(x) = -5(-1)(x + 1)^{-2} = \\frac{5}{(x + 1)^2}$.\n(ii) For all $x \\ne -1$, $(x + 1)^2 > 0$. Thus $f\'(x) = \\frac{5}{(x+1)^2} > 0$ for all $x \\ne -1$.\nTherefore $f(x)$ is strictly increasing on both intervals $(-\\infty, -1)$ and $(-1, \\infty)$.',
              marks: 4,
              markingScheme: [
                'M1: Rewrites into polynomial form $2 - 5(x+1)^{-1}$ or equivalent',
                'A1: $f\'(x) = \\frac{5}{(x+1)^2}$',
                'M1: Argues $(x+1)^2 > 0$ for all $x \\ne -1$',
                'A1: Concludes strictly increasing on each branch',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 8.2 Stationary points
    // ------------------------------------------------------------------------
    {
      id: 'sub_8_2',
      number: '8.2',
      title: 'Stationary points',
      type: 'lesson',
      steps: [
        {
          id: '8_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Zero Gradient & Nature Classification',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Where the Slope Goes Flat',
              content:
                'A stationary point is any point on a curve where the tangent line is completely horizontal: $\\frac{dy}{dx} = 0$. There are three distinct geometrical types: (1) **Local Maximum**: slope changes $+ \\to 0 \\to -$; (2) **Local Minimum**: slope changes $- \\to 0 \\to +$; (3) **Stationary Point of Inflexion**: slope goes $+ \\to 0 \\to +$ or $- \\to 0 \\to -$.',
            },
            {
              type: 'formula_card',
              title: 'First vs Second Derivative Classification Tests',
              math: '\\begin{array}{l|c|c} \\text{Stationary Point Type} & \\text{Slope Sign Change Around } c & \\text{Second Derivative } f\'\'(c) \\\\ \\hline \\text{Local Maximum } (\\frown) & + \\to 0 \\to - & f\'\'(c) < 0 \\\\ \\text{Local Minimum } (\\smile) & - \\to 0 \\to + & f\'\'(c) > 0 \\\\ \\text{Stationary Inflexion } (\\sim) & + \\to 0 \\to + \\text{ or } - \\to 0 \\to - & f\'\'(c) = 0 \\text{ (test signs of } f\'\\text{)} \\end{array}',
              content: 'If the second derivative test yields 0, you MUST use the first derivative slope sign table.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Stationary Point',
                  definition: 'A point $(c, f(c))$ where $f\'(c) = 0$.',
                },
                {
                  term: 'Point of Inflexion',
                  definition: 'A point where the tangent is horizontal ($f\'=0$) but the curve cuts through its own tangent line without changing vertical direction.',
                },
              ],
            },
          ],
        },
        {
          id: '8_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Classifying a Stationary Point of Inflexion',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find all stationary points of $y = (x - 2)^3 + 4$ and determine their nature',
              content: 'Evaluating derivative signs around the stationary point:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the first derivative $\\frac{dy}{dx}$ using the chain rule.',
                  math: '\\frac{dy}{dx} = 3(x - 2)^2(1) = 3(x - 2)^2',
                },
                {
                  stepNumber: 2,
                  explanation: 'Set $\\frac{dy}{dx} = 0$ to find the stationary $x$-coordinate.',
                  math: '3(x - 2)^2 = 0 \\implies x - 2 = 0 \\implies x = 2',
                },
                {
                  stepNumber: 3,
                  explanation: 'Find the $y$-coordinate when $x = 2$.',
                  math: 'y = (2 - 2)^3 + 4 = 4 \\implies (2, 4)',
                },
                {
                  stepNumber: 4,
                  explanation: 'Compute the second derivative: $\\frac{d^2y}{dx^2} = 6(x - 2)$.',
                  math: '\\left.\\frac{d^2y}{dx^2}\\right|_{x=2} = 6(2 - 2) = 0 \\quad (\\text{Inconclusive!})',
                },
                {
                  stepNumber: 5,
                  explanation: 'Construct a first derivative sign table for $x = 1.9, 2.0, 2.1$.',
                  math: '\\begin{array}{c|c|c|c} x & 1.9 & 2.0 & 2.1 \\\\ \\hline \\frac{dy}{dx} & 3(-0.1)^2 = +0.03 > 0 & 0 & 3(0.1)^2 = +0.03 > 0 \\\\ \\text{Slope} & / & - & / \\end{array}',
                },
                {
                  stepNumber: 6,
                  explanation: 'Conclude that $(2, 4)$ is a stationary point of inflexion.',
                  math: '\\text{Gradient does not change sign } (+ \\to 0 \\to +) \\implies \\text{Stationary Point of Inflexion at } (2, 4).',
                },
              ],
            },
          ],
        },
        {
          id: '8_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Giving Only the $x$-Coordinate for a "Point"',
              mistake: 'Answering "stationary point is $x = 3$".',
              correction: 'A point has TWO coordinates $(x, y)$! Answering only $x = 3$ automatically loses the final accuracy mark. You must substitute $x$ back into the ORIGINAL curve equation to find $y$.',
              proTip: 'Always substitute $x$ into the original function $y = f(x)$ to find coordinates, NOT into $\\frac{dy}{dx}$ (which would just give 0!).',
            },
          ],
        },
        {
          id: '8_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '8_2_q1',
              questionNumber: 1,
              prompt: 'Find the stationary point of $y = 3x^2 - 12x + 7$ and state its nature.',
              hint: '$\\frac{dy}{dx} = 6x - 12 = 0 \\implies x = 2$. Parabola opens upward.',
              answer: '$x = 2 \\implies y = 3(4) - 12(2) + 7 = -5$. $\\frac{d^2y}{dx^2} = 6 > 0 \\implies$ Local Minimum at $(2, -5)$.',
              marks: 2,
            },
            {
              id: '8_2_q2',
              questionNumber: 2,
              prompt: 'Find the stationary point of $y = 5 - (x + 1)^4$.',
              hint: '$\\frac{dy}{dx} = -4(x+1)^3 = 0$.',
              answer: '$x = -1, y = 5$. Since $-(x+1)^4 \\le 0$, $( -1, 5)$ is a Local Maximum.',
              marks: 2,
            },
            {
              id: '8_2_q3',
              questionNumber: 3,
              prompt: 'Show that the curve $y = x^3 + 3x + 2$ has no stationary points.',
              hint: '$\\frac{dy}{dx} = 3x^2 + 3$. Can this equal zero for any real $x$?',
              answer: '$\\frac{dy}{dx} = 3x^2 + 3 = 3(x^2 + 1) \\ge 3 > 0$ for all real $x$. Since $\\frac{dy}{dx}$ can never equal 0, there are no stationary points.',
              marks: 2,
            },
          ],
        },
        {
          id: '8_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '8_2_q4',
              questionNumber: 1,
              prompt: 'Find the coordinates and nature of the two stationary points of $y = 2x^3 - 3x^2 - 12x + 5$.',
              hint: '$\\frac{dy}{dx} = 6x^2 - 6x - 12 = 6(x - 2)(x + 1) = 0$.',
              answer: '$x = -1 \\implies y = 12, \\frac{d^2y}{dx^2} = -18 < 0 \\implies$ Local Maximum at $(-1, 12)$.\n$x = 2 \\implies y = -15, \\frac{d^2y}{dx^2} = 18 > 0 \\implies$ Local Minimum at $(2, -15)$.',
              marks: 4,
            },
            {
              id: '8_2_q5',
              questionNumber: 2,
              prompt: 'A curve has equation $y = x^2 + \\frac{16}{x^2}$ for $x > 0$. Find the coordinates of the turning point and confirm it is a minimum.',
              hint: '$\\frac{dy}{dx} = 2x - 32x^{-3} = 0 \\implies 2x = \\frac{32}{x^3} \\implies x^4 = 16$.',
              answer: '$x = 2$ (since $x > 0$). $y = 4 + 16/4 = 8$. $\\frac{d^2y}{dx^2} = 2 + 96x^{-4} = 2 + \\frac{96}{16} = 8 > 0$. Local Minimum at $(2, 8)$.',
              marks: 4,
            },
            {
              id: '8_2_q6',
              questionNumber: 3,
              prompt: 'The curve $y = a x^3 + b x^2 + c x$ has stationary points at $(1, 4)$ and $(3, 0)$. Find $a, b,$ and $c$.',
              hint: '$\\frac{dy}{dx} = 3ax^2 + 2bx + c$. Roots of derivative are 1 and 3: $3a(x - 1)(x - 3) = 3a(x^2 - 4x + 3)$.',
              answer: '$3a(x^2 - 4x + 3) = 3ax^2 - 12ax + 9a \\implies b = -6a, c = 9a$. At $(1, 4)$: $a(1) + b(1) + c(1) = 4 \\implies a - 6a + 9a = 4 \\implies 4a = 4 \\implies a = 1$. Then $b = -6, c = 9$.',
              marks: 4,
            },
          ],
        },
        {
          id: '8_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '8_2_q7',
              questionNumber: 1,
              prompt: 'A curve has equation $y = 3x^4 - 4x^3 - 12x^2 + 5$. (i) Find the coordinates of all three stationary points. (ii) Classify each stationary point using the second derivative test. [6 marks]',
              hint: '$\\frac{dy}{dx} = 12x^3 - 12x^2 - 24x = 12x(x^2 - x - 2) = 0$. Factorise.',
              answer: '(i) $12x(x - 2)(x + 1) = 0 \\implies x = -1, 0, 2$.\nAt $x = -1$: $y = 3(-1)^4 - 4(-1)^3 - 12(-1)^2 + 5 = 3 + 4 - 12 + 5 = 0 \\implies (-1, 0)$.\nAt $x = 0$: $y = 5 \\implies (0, 5)$.\nAt $x = 2$: $y = 3(16) - 4(8) - 12(4) + 5 = 48 - 32 - 48 + 5 = -27 \\implies (2, -27)$.\n(ii) $\\frac{d^2y}{dx^2} = 36x^2 - 24x - 24$.\nAt $x = -1$: $\\frac{d^2y}{dx^2} = 36 + 24 - 24 = 36 > 0 \\implies$ Local Minimum at $(-1, 0)$.\nAt $x = 0$: $\\frac{d^2y}{dx^2} = -24 < 0 \\implies$ Local Maximum at $(0, 5)$.\nAt $x = 2$: $\\frac{d^2y}{dx^2} = 36(4) - 24(2) - 24 = 144 - 48 - 24 = 72 > 0 \\implies$ Local Minimum at $(2, -27)$.',
              marks: 6,
              markingScheme: [
                'M1: Differentiates and sets $12x(x^2 - x - 2) = 0$',
                'A1: Finds $x = -1, 0, 2$',
                'A1: Finds points $(-1, 0), (0, 5), (2, -27)$',
                'M1: Evaluates $\\frac{d^2y}{dx^2} = 36x^2 - 24x - 24$ at all 3 points',
                'A1: $(-1, 0)$ is minimum and $(2, -27)$ is minimum',
                'A1: $(0, 5)$ is maximum',
              ],
            },
            {
              id: '8_2_q8',
              questionNumber: 2,
              prompt: 'The curve $y = x\\sqrt{4 - x^2}$ is defined for $-2 \\le x \\le 2$. (i) Find $\\frac{dy}{dx}$ in terms of a single fraction. (ii) Hence find the coordinates of the two turning points and determine their nature. [6 marks]',
              hint: 'Write as $y = x(4 - x^2)^{1/2}$ or use $(4x^2 - x^4)^{1/2}$. Alternatively product: $1 \\cdot (4 - x^2)^{1/2} + x \\cdot \\frac{1}{2}(4 - x^2)^{-1/2}(-2x) = \\frac{4 - 2x^2}{\\sqrt{4 - x^2}}$.',
              answer: '(i) $\\frac{dy}{dx} = \\sqrt{4 - x^2} - \\frac{x^2}{\\sqrt{4 - x^2}} = \\frac{4 - x^2 - x^2}{\\sqrt{4 - x^2}} = \\frac{4 - 2x^2}{\\sqrt{4 - x^2}}$.\n(ii) $\\frac{dy}{dx} = 0 \\implies 4 - 2x^2 = 0 \\implies x^2 = 2 \\implies x = \\pm\\sqrt{2}$.\nWhen $x = \\sqrt{2}$: $y = \\sqrt{2}\\sqrt{4 - 2} = \\sqrt{2}\\sqrt{2} = 2 \\implies (\\sqrt{2}, 2)$.\nWhen $x = -\\sqrt{2}$: $y = -\\sqrt{2}\\sqrt{2} = -2 \\implies (-\\sqrt{2}, -2)$.\nSince the function is continuous on $[-2, 2]$ with $f(-2) = f(2) = 0$, $(\\sqrt{2}, 2)$ is a Local Maximum and $(-\\sqrt{2}, -2)$ is a Local Minimum.',
              marks: 6,
              markingScheme: [
                'M1: Differentiates using chain / product rule',
                'A1: $\\frac{dy}{dx} = \\frac{4 - 2x^2}{\\sqrt{4 - x^2}}$',
                'M1: Solves $4 - 2x^2 = 0$ to get $x = \\pm\\sqrt{2}$',
                'A1: Coordinates $(\\sqrt{2}, 2)$ and $(-\\sqrt{2}, -2)$',
                'M1: Valid method to classify nature (signs or endpoints)',
                'A1: $(\\sqrt{2}, 2)$ maximum, $(-\\sqrt{2}, -2)$ minimum',
              ],
            },
            {
              id: '8_2_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = (x - 1)^5 + 2$. (i) Find the coordinates of the stationary point. (ii) Use a table of values of $\\frac{dy}{dx}$ to classify the stationary point. [4 marks]',
              hint: '$\\frac{dy}{dx} = 5(x - 1)^4$. Notice the power is even!',
              answer: '(i) $\\frac{dy}{dx} = 5(x - 1)^4 = 0 \\implies x = 1, y = 2 \\implies (1, 2)$.\n(ii) For $x < 1$ (e.g. $x = 0.9$): $\\frac{dy}{dx} = 5(-0.1)^4 = 5(0.0001) > 0$.\nFor $x > 1$ (e.g. $x = 1.1$): $\\frac{dy}{dx} = 5(0.1)^4 > 0$.\nBecause the gradient is positive before and after the flat point ($+ \\to 0 \\to +$), $(1, 2)$ is a Stationary Point of Inflexion.',
              marks: 4,
              markingScheme: [
                'B1: Point $(1, 2)$',
                'B1: $\\frac{dy}{dx} = 5(x - 1)^4$',
                'M1: Shows $\\frac{dy}{dx} > 0$ for $x < 1$ and for $x > 1$',
                'A1: Concludes stationary point of inflexion',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 8.3 Practical maximum and minimum problems
    // ------------------------------------------------------------------------
    {
      id: 'sub_8_3',
      number: '8.3',
      title: 'Practical maximum and minimum problems',
      type: 'lesson',
      steps: [
        {
          id: '8_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Real-World Optimization',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Finding the Most Efficient Design',
              content:
                'Engineers want to maximize the volume of a can while minimizing sheet metal cost; farmers want to fence the maximum pasture area with a fixed length of wire. All practical optimization follows a 4-step blueprint: (1) Write a formula for the quantity $Q$ to optimize; (2) Use a constraint equation to eliminate extra variables, expressing $Q$ in ONE variable $x$; (3) Differentiate and solve $\\frac{dQ}{dx} = 0$; (4) Confirm the maximum or minimum using the second derivative test $\\frac{d^2Q}{dx^2}$.',
            },
            {
              type: 'formula_card',
              title: 'The Optimization Protocol',
              math: '\\begin{aligned} \\text{Step 1: } & Q = f(x, y) \\quad \\text{and constraint } g(x, y) = C \\\\ \\text{Step 2: } & y = h(x) \\implies Q(x) = f(x, h(x)) \\\\ \\text{Step 3: } & \\frac{dQ}{dx} = 0 \\implies x = x^* \\\\ \\text{Step 4: } & \\left.\\frac{d^2Q}{dx^2}\\right|_{x^*} < 0 \\implies \\text{Maximum}, \\quad \\left.\\frac{d^2Q}{dx^2}\\right|_{x^*} > 0 \\implies \\text{Minimum} \\end{aligned}',
              content: 'Always read the question carefully: does it ask for the dimensions ($x$) or the actual maximum/minimum value ($Q$)?',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Objective Function',
                  definition: 'The mathematical expression representing the quantity to be maximized or minimized (e.g. Area, Volume, Cost).',
                },
                {
                  term: 'Constraint Equation',
                  definition: 'A relationship between variables imposed by physical limitations (e.g. fixed perimeter or surface area).',
                },
              ],
            },
          ],
        },
        {
          id: '8_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Maximising Open Box Volume',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'A sheet of metal is $16\\text{ cm}$ by $10\\text{ cm}$. Equal squares of side $x\\text{ cm}$ are cut from each corner, and the flaps are folded up to form an open rectangular box. Find the value of $x$ that maximizes the volume, and find the maximum volume',
              content: 'Full algebraic and calculus solution:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Express the dimensions of the folded box in terms of $x$: length $= 16 - 2x$, width $= 10 - 2x$, height $= x$.',
                  math: 'V = x(16 - 2x)(10 - 2x) = x(160 - 52x + 4x^2) = 4x^3 - 52x^2 + 160x',
                },
                {
                  stepNumber: 2,
                  explanation: 'Differentiate with respect to $x$ and set to zero.',
                  math: '\\frac{dV}{dx} = 12x^2 - 104x + 160 = 0 \\implies 4(3x^2 - 26x + 40) = 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Factor the quadratic: $(3x - 20)(x - 2) = 0$.',
                  math: 'x = 2 \\quad \\text{or} \\quad x = \\frac{20}{3} \\approx 6.67',
                },
                {
                  stepNumber: 4,
                  explanation: 'Check feasibility: the width is $10 - 2x$, so $x$ must be less than $5\\text{ cm}$. Reject $x = 20/3$.',
                  math: '0 < x < 5 \\implies x = 2\\text{ cm}',
                },
                {
                  stepNumber: 5,
                  explanation: 'Confirm nature using the second derivative.',
                  math: '\\frac{d^2V}{dx^2} = 24x - 104 \\implies \\left.\\frac{d^2V}{dx^2}\\right|_{x=2} = 24(2) - 104 = -56 < 0 \\implies \\text{Maximum!}',
                },
                {
                  stepNumber: 6,
                  explanation: 'Calculate the maximum volume.',
                  math: 'V_{\\text{max}} = 2(16 - 4)(10 - 4) = 2(12)(6) = 144\\text{ cm}^3',
                },
              ],
            },
          ],
        },
        {
          id: '8_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Skipping the Second Derivative Test in Exam Questions',
              mistake: 'Finding $x = 2$ and stopping without proving it gives a maximum.',
              correction: 'Almost all Cambridge exam questions award an explicit method and accuracy mark for confirming the nature! Always evaluate $\\frac{d^2Q}{dx^2}$ and state "since $\\frac{d^2Q}{dx^2} < 0$, it is a maximum".',
              proTip: 'When showing that a formula holds (e.g. "Show that $A = 200x - 2x^2$"), write out every intermediate geometric step. Never jump straight to the given result!',
            },
          ],
        },
        {
          id: '8_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '8_3_q1',
              questionNumber: 1,
              prompt: 'Two positive numbers sum to 20. Find the numbers such that their product $P$ is maximized.',
              hint: '$P = x(20 - x) = 20x - x^2$. Set $\\frac{dP}{dx} = 20 - 2x = 0$.',
              answer: '$x = 10$, and other number is $20 - 10 = 10$. Maximum product is 100.',
              marks: 2,
            },
            {
              id: '8_3_q2',
              questionNumber: 2,
              prompt: 'A farmer has $60\\text{ m}$ of fencing to enclose a rectangular field against an existing straight stone wall. Find the dimensions that maximize the area.',
              hint: 'Let the two perpendicular sides be $x$. Along the wall is $60 - 2x$. Area $A = x(60 - 2x)$.',
              answer: '$A = 60x - 2x^2 \\implies \\frac{dA}{dx} = 60 - 4x = 0 \\implies x = 15\\text{ m}$. Length along wall $= 30\\text{ m}$. Max area $= 450\\text{ m}^2$.',
              marks: 3,
            },
            {
              id: '8_3_q3',
              questionNumber: 3,
              prompt: 'The profit $P$ in thousands of dollars is given by $P(x) = 50x - 2x^2 - 100$ where $x$ is the production level. Find $x$ for maximum profit.',
              hint: '$P\'(x) = 50 - 4x = 0$.',
              answer: '$4x = 50 \\implies x = 12.5$. $P\'\'(x) = -4 < 0$ (Maximum).',
              marks: 2,
            },
          ],
        },
        {
          id: '8_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '8_3_q4',
              questionNumber: 1,
              prompt: 'A wire of length $80\\text{ cm}$ is bent into the shape of a sector of a circle of radius $r\\text{ cm}$ and angle $\\theta$ radians. (i) Show that the area is $A = 40r - r^2$. (ii) Find the radius that maximizes the area and state the maximum area.',
              hint: 'Perimeter $= 2r + r\\theta = 80 \\implies r\\theta = 80 - 2r$. Area $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}r(r\\theta)$.',
              answer: '(i) $A = \\frac{1}{2}r(80 - 2r) = 40r - r^2$.\n(ii) $\\frac{dA}{dr} = 40 - 2r = 0 \\implies r = 20\\text{ cm}$. $\\frac{d^2A}{dr^2} = -2 < 0 \\implies$ Maximum. Maximum Area $= 40(20) - 20^2 = 400\\text{ cm}^2$.',
              marks: 4,
            },
            {
              id: '8_3_q5',
              questionNumber: 2,
              prompt: 'A solid cylinder has radius $r\\text{ cm}$ and height $h\\text{ cm}$. Its total surface area is $150\\pi\\text{ cm}^2$. (i) Express $h$ in terms of $r$. (ii) Show that the volume is $V = 75\\pi r - \\pi r^3$. (iii) Find $r$ for maximum volume.',
              hint: '$2\\pi r^2 + 2\\pi r h = 150\\pi \\implies r^2 + rh = 75 \\implies h = \\frac{75 - r^2}{r}$. $V = \\pi r^2 h$.',
              answer: '(i) $h = \\frac{75 - r^2}{r} = \\frac{75}{r} - r$.\n(ii) $V = \\pi r^2\\left(\\frac{75}{r} - r\\right) = 75\\pi r - \\pi r^3$.\n(iii) $\\frac{dV}{dr} = 75\\pi - 3\\pi r^2 = 0 \\implies 3\\pi r^2 = 75\\pi \\implies r^2 = 25 \\implies r = 5\\text{ cm}$.',
              marks: 4,
            },
            {
              id: '8_3_q6',
              questionNumber: 3,
              prompt: 'A window consists of a rectangle surmounted by a semicircle. The total perimeter is $10\\text{ m}$. If the radius of the semicircle is $r$, show that the area is maximized when $r = \\frac{10}{\\pi + 4}$.',
              hint: 'Base $= 2r$, height of rectangle $= h$. Perimeter $= 2r + 2h + \\pi r = 10 \\implies 2h = 10 - (\\pi + 2)r$. Area $A = 2rh + \\frac{1}{2}\\pi r^2$.',
              answer: '$A = r(2h) + \\frac{1}{2}\\pi r^2 = r(10 - (\\pi + 2)r) + \\frac{1}{2}\\pi r^2 = 10r - \\left(2 + \\frac{\\pi}{2}\\right)r^2$.\n$\\frac{dA}{dr} = 10 - (4 + \\pi)r = 0 \\implies r = \\frac{10}{\\pi + 4}$. $\\frac{d^2A}{dr^2} = -(4 + \\pi) < 0$ (Maximum).',
              marks: 4,
            },
          ],
        },
        {
          id: '8_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '8_3_q7',
              questionNumber: 1,
              prompt: 'A closed rectangular box with a square base of side $x\\text{ cm}$ has volume $250\\text{ cm}^3$. (i) Show that the total surface area $A\\text{ cm}^2$ is given by $A = 2x^2 + \\frac{1000}{x}$. (ii) Find the value of $x$ for which $A$ has a stationary value. (iii) Determine the nature of this stationary value and calculate the minimum surface area. [6 marks]',
              hint: 'Let height be $h$. $V = x^2 h = 250 \\implies h = 250/x^2$. $A = 2x^2 + 4xh$.',
              answer: '(i) $h = \\frac{250}{x^2}$. $A = 2(x^2) + 4x h = 2x^2 + 4x\\left(\\frac{250}{x^2}\\right) = 2x^2 + \\frac{1000}{x}$.\n(ii) $\\frac{dA}{dx} = 4x - 1000x^{-2} = 4x - \\frac{1000}{x^2} = 0 \\implies 4x^3 = 1000 \\implies x^3 = 250 \\implies x = \\sqrt[3]{250} = 5\\sqrt[3]{2} \\approx 6.30\\text{ cm}$.\n(iii) $\\frac{d^2A}{dx^2} = 4 + 2000x^{-3} = 4 + \\frac{2000}{250} = 4 + 8 = 12 > 0 \\implies$ Minimum.\n$A_{\\text{min}} = 2(250^{2/3}) + \\frac{1000}{250^{1/3}} = 2(39.685) + 158.74 \\approx 238\\text{ cm}^2$ (exact: $300 \\cdot 2^{2/3} / 2 = 150 \\times 2^{2/3} \\approx 238.1$).',
              marks: 6,
              markingScheme: [
                'B1: $h = 250/x^2$',
                'M1: Surface area formula $A = 2x^2 + 4xh$ and substitution of $h$',
                'A1: Establishes $A = 2x^2 + 1000/x$',
                'M1: Differentiates and solves $4x - 1000/x^2 = 0$ to get $x^3 = 250$',
                'M1: Computes $\\frac{d^2A}{dx^2} = 12 > 0$ and concludes minimum',
                'A1: $A_{\\text{min}} \\approx 238\\text{ cm}^2$',
              ],
            },
            {
              id: '8_3_q8',
              questionNumber: 2,
              prompt: 'A piece of wire $60\\text{ cm}$ long is cut into two pieces. One piece of length $x\\text{ cm}$ is bent to form a square, and the remaining piece is bent to form a circle. (i) Show that the total combined area of the square and circle is $A = \\frac{x^2}{16} + \\frac{(60 - x)^2}{4\\pi}$. (ii) Find the value of $x$ that minimizes the total area. [5 marks]',
              hint: 'Square side is $x/4$, area is $(x/4)^2 = x^2/16$. Circle circumference is $60 - x = 2\\pi r \\implies r = \\frac{60-x}{2\\pi}$.',
              answer: '(i) Area of square $= \\left(\\frac{x}{4}\\right)^2 = \\frac{x^2}{16}$.\nRadius of circle $r = \\frac{60 - x}{2\\pi} \\implies \\text{Area} = \\pi r^2 = \\pi \\frac{(60 - x)^2}{4\\pi^2} = \\frac{(60 - x)^2}{4\\pi}$.\nTotal Area $A = \\frac{x^2}{16} + \\frac{(60 - x)^2}{4\\pi}$.\n(ii) $\\frac{dA}{dx} = \\frac{2x}{16} + \\frac{2(60 - x)(-1)}{4\\pi} = \\frac{x}{8} - \\frac{60 - x}{2\\pi} = 0$.\n$\\frac{x}{8} = \\frac{60 - x}{2\\pi} \\implies 2\\pi x = 480 - 8x \\implies (2\\pi + 8)x = 480 \\implies (\\pi + 4)x = 240 \\implies x = \\frac{240}{\\pi + 4} \\approx 33.6\\text{ cm}$.\n$\\frac{d^2A}{dx^2} = \\frac{1}{8} + \\frac{1}{2\\pi} > 0 \\implies$ Minimum.',
              marks: 5,
              markingScheme: [
                'B1: Square area $x^2/16$',
                'M1: Circle radius $r = (60-x)/(2\\pi)$ and area $\\pi r^2$',
                'A1: Correct combined area formula established',
                'M1: Differentiates and sets $\\frac{dA}{dx} = 0$',
                'A1: $x = \\frac{240}{\\pi + 4} \\approx 33.6\\text{ cm}$',
              ],
            },
            {
              id: '8_3_q9',
              questionNumber: 3,
              prompt: 'A cylinder is inscribed in a right circular cone of base radius $6\\text{ cm}$ and height $12\\text{ cm}$. Find the radius $r$ of the cylinder that maximizes its volume. [5 marks]',
              hint: 'Use similar triangles: $\\frac{12 - h}{r} = \\frac{12}{6} = 2 \\implies 12 - h = 2r \\implies h = 12 - 2r$. $V = \\pi r^2 h$.',
              answer: 'By similar triangles: $\\frac{12 - h}{r} = \\frac{12}{6} = 2 \\implies h = 12 - 2r$.\nVolume of cylinder $V = \\pi r^2(12 - 2r) = 12\\pi r^2 - 2\\pi r^3$.\n$\\frac{dV}{dr} = 24\\pi r - 6\\pi r^2 = 0 \\implies 6\\pi r(4 - r) = 0$.\nSince $r > 0$, $r = 4\\text{ cm}$.\n$\\frac{d^2V}{dr^2} = 24\\pi - 12\\pi r \\implies \\left.\\frac{d^2V}{dr^2}\\right|_{r=4} = 24\\pi - 48\\pi = -24\\pi < 0 \\implies$ Maximum.\nRadius for maximum volume is $r = 4\\text{ cm}$.',
              marks: 5,
              markingScheme: [
                'M1: Uses similar triangles to relate $h$ and $r$: $h = 12 - 2r$',
                'A1: $V = 12\\pi r^2 - 2\\pi r^3$',
                'M1: Differentiates and sets $24\\pi r - 6\\pi r^2 = 0$',
                'A1: $r = 4\\text{ cm}$',
                'A1: Verifies maximum via $\\frac{d^2V}{dr^2} = -24\\pi < 0$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 8.4 Rates of change
    // ------------------------------------------------------------------------
    {
      id: 'sub_8_4',
      number: '8.4',
      title: 'Rates of change',
      type: 'lesson',
      steps: [
        {
          id: '8_4_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Temporal Derivatives & Differentials',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'How Quantities Evolve Over Time',
              content:
                'Whenever a physical quantity changes over time $t$, its rate of change is measured by the time derivative $\\frac{dQ}{dt}$. For instance, $\\frac{dx}{dt}$ is velocity, $\\frac{dV}{dt}$ is flow rate (volume per second), and $\\frac{dA}{dt}$ is area growth rate. A positive rate means the quantity is growing; a negative rate means it is shrinking.',
            },
            {
              type: 'formula_card',
              title: 'Rate of Change & Small Increments Approximation',
              math: '\\begin{aligned} \\text{Rate of Change: } & \\frac{dy}{dt} \\\\ \\text{Small Increments Formula: } & \\delta y \\approx \\frac{dy}{dx} \\times \\delta x \\\\ \\text{Percentage Change: } & \\frac{\\delta y}{y} \\times 100\\% \\approx \\frac{\\frac{dy}{dx}\\delta x}{y} \\times 100\\% \\end{aligned}',
              content: 'The small change formula $\\delta y \\approx f\'(x) \\delta x$ comes from the local linear tangent approximation $\\frac{\\delta y}{\\delta x} \\approx \\frac{dy}{dx}$ when $\\delta x$ is tiny.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Instantaneous Rate of Change',
                  definition: 'The exact value of $\\frac{dy}{dt}$ at a specific moment in time.',
                },
                {
                  term: 'Small Increment ($\\delta x$)',
                  definition: 'A tiny change in $x$, causing an approximate change $\\delta y \\approx f\'(x)\\delta x$ in $y$.',
                },
              ],
            },
          ],
        },
        {
          id: '8_4_s2',
          stepNumber: 2,
          title: 'Worked Example: Estimating Values with Small Increments',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Given that $y = \\sqrt{x}$, use small increments to find an approximate value for $\\sqrt{101}$',
              content: 'Linear approximation using derivatives:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Choose a convenient base point $x = 100$ where the square root is known exactly, so $\\delta x = 1$.',
                  math: 'x = 100, \\quad y = \\sqrt{100} = 10, \\quad \\delta x = +1',
                },
                {
                  stepNumber: 2,
                  explanation: 'Find the derivative $\\frac{dy}{dx}$.',
                  math: '\\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Evaluate the derivative at the base point $x = 100$.',
                  math: '\\left.\\frac{dy}{dx}\\right|_{x=100} = \\frac{1}{2\\sqrt{100}} = \\frac{1}{20} = 0.05',
                },
                {
                  stepNumber: 4,
                  explanation: 'Calculate the estimated small change $\\delta y \\approx \\frac{dy}{dx} \\delta x$.',
                  math: '\\delta y \\approx 0.05 \\times 1 = 0.05',
                },
                {
                  stepNumber: 5,
                  explanation: 'Add $\\delta y$ to the base value $y$.',
                  math: '\\sqrt{101} \\approx 10 + 0.05 = 10.05 \\quad (\\text{True value: } 10.049875...)',
                },
              ],
            },
          ],
        },
        {
          id: '8_4_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Confusing $\\frac{dy}{dx}$ with $\\frac{dy}{dt}$',
              mistake: 'When a question asks "find the rate at which $y$ is increasing", calculating $\\frac{dy}{dx}$ instead of $\\frac{dy}{dt}$.',
              correction: '"Rate of change" without other qualification ALWAYS means rate of change with respect to TIME ($t$): $\\frac{dy}{dt}$. If you calculate $\\frac{dy}{dx}$, you have found the gradient, not the rate of change over time.',
              proTip: 'Always check the units: rate of change with respect to time has seconds, minutes, or hours in the denominator (e.g. $\\text{cm}/\\text{s}$, $\\text{m}^3/\\text{min}$).',
            },
          ],
        },
        {
          id: '8_4_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '8_4_q1',
              questionNumber: 1,
              prompt: 'A point moves along the curve $y = 3x^2 - 5x + 2$. When $x = 2$, $x$ is increasing at a rate of $4\\text{ units/s}$. Find the rate of increase of $y$.',
              hint: '$\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}$. At $x = 2$, $\\frac{dy}{dx} = 6x - 5 = 7$.',
              answer: '$\\frac{dy}{dt} = 7 \\times 4 = 28\\text{ units/s}$',
              marks: 2,
            },
            {
              id: '8_4_q2',
              questionNumber: 2,
              prompt: 'Given $y = x^3$, find the approximate change in $y$ when $x$ increases from 4 to $4.02$.',
              hint: '$\\delta x = 0.02$. $\\delta y \\approx 3x^2 \\delta x = 3(16)(0.02)$.',
              answer: '$\\delta y \\approx 48 \\times 0.02 = 0.96$',
              marks: 2,
            },
            {
              id: '8_4_q3',
              questionNumber: 3,
              prompt: 'The radius of a circle increases by $2\\%$. Find the approximate percentage increase in its area.',
              hint: '$A = \\pi r^2 \\implies \\frac{\\delta A}{A} \\approx \\frac{2\\pi r \\delta r}{\\pi r^2} = 2\\frac{\\delta r}{r}$.',
              answer: 'Approximate percentage increase $= 2 \\times 2\\% = 4\\%$',
              marks: 2,
            },
          ],
        },
        {
          id: '8_4_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '8_4_q4',
              questionNumber: 1,
              prompt: 'A point $P(x, y)$ moves along the curve $y = \\frac{12}{x}$. At the point where $x = 3$, the $y$-coordinate is decreasing at a rate of $0.4\\text{ units/s}$. Find the rate of change of the $x$-coordinate.',
              hint: '$\\frac{dy}{dx} = -\\frac{12}{x^2} = -\\frac{12}{9} = -\\frac{4}{3}$. Use $\\frac{dy}{dt} = \\frac{dy}{dx} \\frac{dx}{dt}$ with $\\frac{dy}{dt} = -0.4$.',
              answer: '$-0.4 = -\\frac{4}{3} \\frac{dx}{dt} \\implies \\frac{dx}{dt} = (-0.4) \\times \\left(-\\frac{3}{4}\\right) = +0.3\\text{ units/s}$ (increasing)',
              marks: 3,
            },
            {
              id: '8_4_q5',
              questionNumber: 2,
              prompt: 'Given that $y = \\frac{1}{(2x - 1)^2}$, find the value of $\\frac{dy}{dt}$ when $x = 2$, given that $\\frac{dx}{dt} = -0.6$.',
              hint: '$\\frac{dy}{dx} = -2(2x - 1)^{-3}(2) = -\\frac{4}{(2x - 1)^3}$. At $x = 2$, $\\frac{dy}{dx} = -\\frac{4}{27}$.',
              answer: '$\\frac{dy}{dt} = \\left(-\\frac{4}{27}\\right)(-0.6) = \\left(-\\frac{4}{27}\\right)\\left(-\\frac{3}{5}\\right) = \\frac{4}{45} \\approx 0.0889$',
              marks: 3,
            },
            {
              id: '8_4_q6',
              questionNumber: 3,
              prompt: 'The variables $x$ and $y$ are related by $y = \\sqrt{2x + 5}$. When $x = 10$, $x$ increases by a small amount $p$. Express the corresponding approximate change in $y$ in terms of $p$.',
              hint: '$\\delta y \\approx \\left.\\frac{dy}{dx}\\right|_{x=10} \\times p$. $\\frac{dy}{dx} = \\frac{1}{\\sqrt{2x + 5}}$.',
              answer: 'At $x = 10$, $\\frac{dy}{dx} = \\frac{1}{\\sqrt{25}} = \\frac{1}{5} = 0.2$. Approximate change $\\delta y \\approx 0.2p$ (or $\\frac{p}{5}$).',
              marks: 3,
            },
          ],
        },
        {
          id: '8_4_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '8_4_q7',
              questionNumber: 1,
              prompt: 'A point $P(x, y)$ moves along the curve $y = 2x^3 - 3x^2 - 12x + 8$ in such a way that the $x$-coordinate is increasing at a constant rate of $0.5\\text{ units/s}$. (i) Find the rate of change of $y$ when $x = 3$. (ii) Find the coordinates of the points where the $y$-coordinate is momentarily stationary. [5 marks]',
              hint: '$\\frac{dy}{dt} = \\frac{dy}{dx} \\times 0.5$. In (ii), $\\frac{dy}{dt} = 0 \\iff \\frac{dy}{dx} = 0$.',
              answer: '(i) $\\frac{dy}{dx} = 6x^2 - 6x - 12$. At $x = 3$: $\\frac{dy}{dx} = 6(9) - 6(3) - 12 = 54 - 18 - 12 = 24$.\n$\\frac{dy}{dt} = 24 \\times 0.5 = 12\\text{ units/s}$.\n(ii) $y$ is momentarily stationary when $\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dx} = 0$.\n$6(x^2 - x - 2) = 0 \\implies 6(x - 2)(x + 1) = 0 \\implies x = 2$ or $x = -1$.\nAt $x = 2$: $y = 2(8) - 3(4) - 12(2) + 8 = 16 - 12 - 24 + 8 = -12 \\implies (2, -12)$.\nAt $x = -1$: $y = 2(-1) - 3(1) - 12(-1) + 8 = -2 - 3 + 12 + 8 = 15 \\implies (-1, 15)$.',
              marks: 5,
              markingScheme: [
                'B1: $\\frac{dy}{dx} = 6x^2 - 6x - 12$',
                'M1: Evaluates $\\frac{dy}{dt} = \\frac{dy}{dx} \\times 0.5$ at $x = 3$',
                'A1: $12\\text{ units/s}$',
                'M1: Solves $6x^2 - 6x - 12 = 0$ to find $x = 2, -1$',
                'A1: Both points $(2, -12)$ and $(-1, 15)$ fully stated',
              ],
            },
            {
              id: '8_4_q8',
              questionNumber: 2,
              prompt: 'The area of a circle $A$ is increasing at a constant rate of $8\\pi\\text{ cm}^2/\\text{s}$. (i) Find the rate at which the radius $r$ is increasing when $r = 4\\text{ cm}$. (ii) Find the rate at which the circumference $C$ is increasing. [5 marks]',
              hint: '$A = \\pi r^2 \\implies \\frac{dA}{dr} = 2\\pi r$. $C = 2\\pi r \\implies \\frac{dC}{dr} = 2\\pi$.',
              answer: '(i) $\\frac{dA}{dt} = \\frac{dA}{dr} \\frac{dr}{dt} = 2\\pi r \\frac{dr}{dt}$.\n$8\\pi = 2\\pi(4) \\frac{dr}{dt} = 8\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1\\text{ cm/s}$.\n(ii) $C = 2\\pi r \\implies \\frac{dC}{dt} = \\frac{dC}{dr} \\frac{dr}{dt} = 2\\pi \\times 1 = 2\\pi\\text{ cm/s}$ (or $\\approx 6.28\\text{ cm/s}$).',
              marks: 5,
              markingScheme: [
                'M1: Uses $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$',
                'A1: $\\frac{dr}{dt} = 1\\text{ cm/s}$',
                'M1: Uses $C = 2\\pi r \\implies \\frac{dC}{dt} = 2\\pi \\frac{dr}{dt}$',
                'A1: $\\frac{dC}{dt} = 2\\pi\\text{ cm/s}$',
                'B1: Clear units given on both rates',
              ],
            },
            {
              id: '8_4_q9',
              questionNumber: 3,
              prompt: 'A sphere of radius $r$ expands. When $r = 5\\text{ cm}$, the surface area $S = 4\\pi r^2$ is increasing at $40\\pi\\text{ cm}^2/\\text{s}$. Find the rate of increase of the volume $V = \\frac{4}{3}\\pi r^3$ at this instant. [5 marks]',
              hint: '$\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$. Find $\\frac{dr}{dt}$, then use $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.',
              answer: '$\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$. At $r = 5$:\n$40\\pi = 8\\pi(5) \\frac{dr}{dt} = 40\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1\\text{ cm/s}$.\nNow $\\frac{dV}{dr} = 4\\pi r^2$.\n$\\frac{dV}{dt} = \\frac{dV}{dr} \\frac{dr}{dt} = 4\\pi(5^2)(1) = 4\\pi(25)(1) = 100\\pi\\text{ cm}^3/\\text{s} \\approx 314\\text{ cm}^3/\\text{s}$.',
              marks: 5,
              markingScheme: [
                'M1: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$',
                'A1: $\\frac{dr}{dt} = 1\\text{ cm/s}$',
                'M1: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$',
                'A1: Substitutes $r = 5$ and $\\frac{dr}{dt} = 1$',
                'A1: $100\\pi\\text{ cm}^3/\\text{s}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 8.5 Practical applications of connected rates of change
    // ------------------------------------------------------------------------
    {
      id: 'sub_8_5',
      number: '8.5',
      title: 'Practical applications of connected rates of change',
      type: 'lesson',
      steps: [
        {
          id: '8_5_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: The Chain Rule for Physical Models',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Linking Geometric Variables Through Time',
              content:
                'In real engineering scenarios, variables are connected geometrically: water poured into an inverted conical container increases the water depth $h$, which in turn increases the volume $V$. If water flows in at a known rate $\\frac{dV}{dt}$, how fast does the water level rise ($\\frac{dh}{dt}$)? The chain rule seamlessly links them together: $\\frac{dV}{dt} = \\frac{dV}{dh} \\times \\frac{dh}{dt}$.',
            },
            {
              type: 'formula_card',
              title: 'Connected Rates Formula Hub',
              math: '\\begin{aligned} \\frac{dy}{dt} &= \\frac{dy}{dx} \\times \\frac{dx}{dt} \\\\ \\implies \\frac{dx}{dt} &= \\frac{dy/dt}{dy/dx} \\quad (\\text{provided } \\frac{dy}{dx} \\ne 0) \\\\ \\text{Sphere: } V &= \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} \\\\ \\text{Cone: } V &= \\frac{1}{3}\\pi r^2 h \\implies \\text{use similar triangles to eliminate } r \\end{aligned}',
              content: 'Always establish the purely geometric relationship $V = f(h)$ FIRST, before taking time derivatives.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Connected Rates of Change',
                  definition: 'Problems where two or more rates with respect to time are linked via the Chain Rule.',
                },
                {
                  term: 'Inverted Cone Model',
                  definition: 'A cone resting on its vertex where $\\frac{r}{h} = \\text{constant}$ by similar triangles.',
                },
              ],
            },
          ],
        },
        {
          id: '8_5_s2',
          stepNumber: 2,
          title: 'Worked Example: Inverted Conical Tank',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'An inverted cone has base radius $6\\text{ cm}$ and height $18\\text{ cm}$. Water is poured in at a constant rate of $12\\pi\\text{ cm}^3/\\text{s}$. Find the rate at which the water level is rising when the depth is $6\\text{ cm}$',
              content: 'Step-by-step similar triangles and chain rule:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Use similar triangles to express the water surface radius $r$ in terms of water depth $h$.',
                  math: '\\frac{r}{h} = \\frac{6}{18} = \\frac{1}{3} \\implies r = \\frac{1}{3}h',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute $r = \\frac{1}{3}h$ into the cone volume formula $V = \\frac{1}{3}\\pi r^2 h$ to express $V$ in terms of $h$ alone.',
                  math: 'V = \\frac{1}{3}\\pi\\left(\\frac{1}{3}h\\right)^2 h = \\frac{1}{3}\\pi\\left(\\frac{1}{9}h^2\\right)h = \\frac{1}{27}\\pi h^3',
                },
                {
                  stepNumber: 3,
                  explanation: 'Differentiate $V$ with respect to $h$.',
                  math: '\\frac{dV}{dh} = \\frac{3}{27}\\pi h^2 = \\frac{1}{9}\\pi h^2',
                },
                {
                  stepNumber: 4,
                  explanation: 'Apply the connected rates formula $\\frac{dV}{dt} = \\frac{dV}{dh} \\times \\frac{dh}{dt}$.',
                  math: '12\\pi = \\left(\\frac{1}{9}\\pi h^2\\right) \\frac{dh}{dt}',
                },
                {
                  stepNumber: 5,
                  explanation: 'Substitute $h = 6\\text{ cm}$ and solve for $\\frac{dh}{dt}$.',
                  math: '12\\pi = \\left(\\frac{1}{9}\\pi (36)\\right) \\frac{dh}{dt} = 4\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{12\\pi}{4\\pi} = 3\\text{ cm/s}',
                },
              ],
            },
          ],
        },
        {
          id: '8_5_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Treating Radius $r$ as a Constant in a Cone',
              mistake: 'Differentiating $V = \\frac{1}{3}\\pi r^2 h$ as $\\frac{dV}{dh} = \\frac{1}{3}\\pi r^2$ as if $r$ does not change as water rises.',
              correction: 'In a cone, as water rises, the surface radius $r$ ALSO widens! You must eliminate $r$ using similar triangles BEFORE differentiating.',
              proTip: 'For leaking or draining problems, write $\\frac{dV}{dt} = -k$ (negative rate!). A leak means volume is DECREASING.',
            },
          ],
        },
        {
          id: '8_5_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '8_5_q1',
              questionNumber: 1,
              prompt: 'A spherical balloon is being inflated so that its radius increases at $0.5\\text{ cm/s}$. Find the rate of increase of its volume when $r = 6\\text{ cm}$.',
              hint: '$V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.',
              answer: '$\\frac{dV}{dt} = 4\\pi (36)(0.5) = 72\\pi\\text{ cm}^3/\\text{s} \\approx 226\\text{ cm}^3/\\text{s}$',
              marks: 2,
            },
            {
              id: '8_5_q2',
              questionNumber: 2,
              prompt: 'Oil spills in a circular puddle whose area increases at $5\\text{ m}^2/\\text{min}$. Find the rate at which the radius is increasing when $r = 10\\text{ m}$.',
              hint: '$\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt}$. Solve for $\\frac{dr}{dt}$.',
              answer: '$5 = 2\\pi(10)\\frac{dr}{dt} = 20\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = \\frac{5}{20\\pi} = \\frac{1}{4\\pi} \\approx 0.0796\\text{ m/min}$',
              marks: 2,
            },
            {
              id: '8_5_q3',
              questionNumber: 3,
              prompt: 'The side length $x$ of a cube expands at $0.2\\text{ cm/s}$. Find the rate of change of its total surface area when $x = 5\\text{ cm}$.',
              hint: '$S = 6x^2 \\implies \\frac{dS}{dt} = 12x \\frac{dx}{dt}$.',
              answer: '$\\frac{dS}{dt} = 12(5)(0.2) = 12\\text{ cm}^2/\\text{s}$',
              marks: 2,
            },
          ],
        },
        {
          id: '8_5_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '8_5_q4',
              questionNumber: 1,
              prompt: 'A cylindrical water tank of fixed radius $2\\text{ m}$ is being filled at a rate of $0.6\\text{ m}^3/\\text{min}$. Find the rate at which the water height $h$ is rising.',
              hint: '$V = \\pi r^2 h = 4\\pi h$. Radius is constant!',
              answer: '$\\frac{dV}{dt} = 4\\pi \\frac{dh}{dt} \\implies 0.6 = 4\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{0.6}{4\\pi} = \\frac{3}{20\\pi} \\approx 0.0477\\text{ m/min}$',
              marks: 3,
            },
            {
              id: '8_5_q5',
              questionNumber: 2,
              prompt: 'A spherical raindrop evaporates so that its volume decreases at a rate proportional to its surface area: $\\frac{dV}{dt} = -k S$. Show that the radius decreases at a constant rate.',
              hint: '$V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = S \\frac{dr}{dt}$.',
              answer: '$S \\frac{dr}{dt} = -k S \\implies \\frac{dr}{dt} = -k$. Since $k$ is constant, the radius decreases at the constant rate $k$.',
              marks: 3,
            },
            {
              id: '8_5_q6',
              questionNumber: 3,
              prompt: 'Sand poured onto level ground forms a conical pile whose height is always equal to its base diameter ($h = 2r$). If sand is poured at $4\\text{ m}^3/\\text{min}$, find the rate at which the height is increasing when $h = 3\\text{ m}$.',
              hint: '$r = h/2 \\implies V = \\frac{1}{3}\\pi (h/2)^2 h = \\frac{1}{12}\\pi h^3$. $\\frac{dV}{dh} = \\frac{1}{4}\\pi h^2$.',
              answer: '$\\frac{dV}{dh} = \\frac{1}{4}\\pi h^2$. At $h = 3$: $\\frac{dV}{dh} = \\frac{9\\pi}{4}$. $4 = \\frac{9\\pi}{4} \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{16}{9\\pi} \\approx 0.566\\text{ m/min}$.',
              marks: 4,
            },
          ],
        },
        {
          id: '8_5_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '8_5_q7',
              questionNumber: 1,
              prompt: 'A hollow inverted cone with top radius $8\\text{ cm}$ and depth $20\\text{ cm}$ is filled with liquid. Liquid leaks out through a small hole at the vertex at a constant rate of $5\\text{ cm}^3/\\text{s}$. (i) Show that the volume of liquid in the cone when depth is $h$ is $V = \\frac{4}{75}\\pi h^3$. (ii) Find the rate at which the liquid level is falling when the depth is $10\\text{ cm}$. [6 marks]',
              hint: 'Similar triangles: $r/h = 8/20 = 2/5 \\implies r = \\frac{2}{5}h$. Liquid leaking means $\\frac{dV}{dt} = -5$.',
              answer: '(i) By similar triangles: $\\frac{r}{h} = \\frac{8}{20} = \\frac{2}{5} \\implies r = \\frac{2}{5}h$.\n$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\left(\\frac{2}{5}h\\right)^2 h = \\frac{1}{3}\\pi \\left(\\frac{4}{25}h^2\\right) h = \\frac{4}{75}\\pi h^3$.\n(ii) $\\frac{dV}{dh} = \\frac{12}{75}\\pi h^2 = \\frac{4}{25}\\pi h^2$.\nAt $h = 10\\text{ cm}$: $\\frac{dV}{dh} = \\frac{4}{25}\\pi(100) = 16\\pi$.\nConnected rate: $\\frac{dV}{dt} = \\frac{dV}{dh} \\frac{dh}{dt}$.\nLiquid is leaking at $5\\text{ cm}^3/\\text{s}$, so $-5 = 16\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = -\\frac{5}{16\\pi} \\approx -0.0995\\text{ cm/s}$.\nThe level is falling at $\\frac{5}{16\\pi}\\text{ cm/s}$.',
              marks: 6,
              markingScheme: [
                'B1: $r = \\frac{2}{5}h$',
                'M1: Substitutes $r$ into cone volume formula',
                'A1: Successfully demonstrates $V = \\frac{4}{75}\\pi h^3$',
                'M1: Differentiates to get $\\frac{dV}{dh} = \\frac{4}{25}\\pi h^2$ and evaluates at $h = 10$',
                'M1: Sets $-5 = 16\\pi \\frac{dh}{dt}$ (or equates speeds)',
                'A1: Falling at $\\frac{5}{16\\pi}\\text{ cm/s}$ (or $0.0995\\text{ cm/s}$)',
              ],
            },
            {
              id: '8_5_q8',
              questionNumber: 2,
              prompt: 'A hemispherical bowl of radius $10\\text{ cm}$ contains water to a depth of $h\\text{ cm}$. The volume of water is $V = \\pi\\left(10h^2 - \\frac{1}{3}h^3\\right)$. Water is poured into the bowl at a constant rate of $30\\pi\\text{ cm}^3/\\text{s}$. Find the rate at which the depth of water is increasing when $h = 4\\text{ cm}$. [5 marks]',
              hint: 'Find $\\frac{dV}{dh} = \\pi(20h - h^2)$. Use $\\frac{dV}{dt} = \\frac{dV}{dh} \\frac{dh}{dt}$.',
              answer: '$\\frac{dV}{dh} = \\pi(20h - h^2)$.\nWhen $h = 4$: $\\frac{dV}{dh} = \\pi(20(4) - 4^2) = \\pi(80 - 16) = 64\\pi$.\nGiven $\\frac{dV}{dt} = 30\\pi$:\n$30\\pi = 64\\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = \\frac{30\\pi}{64\\pi} = \\frac{15}{32} = 0.46875\\text{ cm/s}$.',
              marks: 5,
              markingScheme: [
                'M1: Differentiates $V$ with respect to $h$',
                'A1: $\\frac{dV}{dh} = \\pi(20h - h^2)$',
                'M1: Evaluates $\\frac{dV}{dh} = 64\\pi$ at $h = 4$',
                'M1: Sets up $30\\pi = 64\\pi \\frac{dh}{dt}$',
                'A1: $\\frac{dh}{dt} = \\frac{15}{32}\\text{ cm/s}$ (or $0.469\\text{ cm/s}$)',
              ],
            },
            {
              id: '8_5_q9',
              questionNumber: 3,
              prompt: 'A ladder $10\\text{ m}$ long rests against a vertical wall. The base of the ladder slides away from the wall along horizontal ground at $0.6\\text{ m/s}$. Find the speed at which the top of the ladder is sliding down the wall when the base is $6\\text{ m}$ from the wall. [5 marks]',
              hint: '$x^2 + y^2 = 100$. Differentiate implicitly with respect to $t$: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$.',
              answer: '$x^2 + y^2 = 10^2 = 100$.\nWhen $x = 6$: $y = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ m}$.\nDifferentiating with respect to $t$:\n$2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0 \\implies x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0$.\nSubstitute $x = 6, y = 8, \\frac{dx}{dt} = 0.6$:\n$6(0.6) + 8\\frac{dy}{dt} = 0 \\implies 3.6 + 8\\frac{dy}{dt} = 0 \\implies \\frac{dy}{dt} = -\\frac{3.6}{8} = -0.45\\text{ m/s}$.\nThe top of the ladder slides down at a speed of $0.45\\text{ m/s}$.',
              marks: 5,
              markingScheme: [
                'B1: Pythagoras relation $x^2 + y^2 = 100$ and $y = 8$',
                'M1: Differentiates with respect to $t$: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$',
                'M1: Substitutes $x = 6, y = 8, \\frac{dx}{dt} = 0.6$',
                'A1: $\\frac{dy}{dt} = -0.45\\text{ m/s}$',
                'A1: States downward speed is $0.45\\text{ m/s}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit 8 Test
    // ------------------------------------------------------------------------
    {
      id: 'sub_8_test',
      number: 'Unit Test',
      title: 'Unit 8 Test: Further differentiation',
      type: 'unitTest',
      steps: [
        {
          id: '8_test_s1',
          stepNumber: 1,
          title: 'Test Part A: Monotonicity & Rates',
          type: 'exercise_l1',
          badge: 'Unit Test: Part A',
          practiceQuestions: [
            {
              id: '8_t_q1',
              questionNumber: 1,
              prompt: 'Find the set of values of $x$ for which $f(x) = 2x^3 - 15x^2 + 24x + 9$ is strictly decreasing. [3 marks]',
              hint: '$f\'(x) = 6x^2 - 30x + 24 < 0$.',
              answer: '$6(x^2 - 5x + 4) < 0 \\implies 6(x - 1)(x - 4) < 0 \\implies 1 < x < 4$',
              marks: 3,
            },
            {
              id: '8_t_q2',
              questionNumber: 2,
              prompt: 'A point moves along $y = 4\\sqrt{x}$. When $x = 9$, $x$ is increasing at $3\\text{ units/s}$. Find the rate of increase of $y$. [2 marks]',
              hint: '$\\frac{dy}{dx} = \\frac{2}{\\sqrt{x}}$. At $x = 9$, $\\frac{dy}{dx} = \\frac{2}{3}$.',
              answer: '$\\frac{dy}{dt} = \\frac{2}{3} \\times 3 = 2\\text{ units/s}$',
              marks: 2,
            },
            {
              id: '8_t_q3',
              questionNumber: 3,
              prompt: 'Find the stationary point of $y = (3x - 1)^3 + 5$ and classify its nature. [3 marks]',
              hint: '$\\frac{dy}{dx} = 9(3x - 1)^2 = 0$. Gradient is always non-negative.',
              answer: '$x = 1/3, y = 5$. Since $\\frac{dy}{dx} = 9(3x - 1)^2 \\ge 0$ on both sides, $(1/3, 5)$ is a Stationary Point of Inflexion.',
              marks: 3,
            },
          ],
        },
        {
          id: '8_test_s2',
          stepNumber: 2,
          title: 'Test Part B: Multi-Step Optimization & Curvature',
          type: 'exercise_l2',
          badge: 'Unit Test: Part B',
          practiceQuestions: [
            {
              id: '8_t_q4',
              questionNumber: 1,
              prompt: 'A closed cylinder of radius $r\\text{ cm}$ and height $h\\text{ cm}$ has fixed volume $54\\pi\\text{ cm}^3$. (i) Show that its total surface area is $A = 2\\pi r^2 + \\frac{108\\pi}{r}$. (ii) Find the value of $r$ that minimizes the surface area. [5 marks]',
              hint: '$\\pi r^2 h = 54\\pi \\implies h = 54/r^2$. $A = 2\\pi r^2 + 2\\pi r h$.',
              answer: '(i) $h = \\frac{54}{r^2} \\implies A = 2\\pi r^2 + 2\\pi r\\left(\\frac{54}{r^2}\\right) = 2\\pi r^2 + \\frac{108\\pi}{r}$.\n(ii) $\\frac{dA}{dr} = 4\\pi r - \\frac{108\\pi}{r^2} = 0 \\implies 4r^3 = 108 \\implies r^3 = 27 \\implies r = 3\\text{ cm}$.\n$\\frac{d^2A}{dr^2} = 4\\pi + \\frac{216\\pi}{r^3} = 4\\pi + 8\\pi = 12\\pi > 0$ (Minimum).',
              marks: 5,
            },
            {
              id: '8_t_q5',
              questionNumber: 2,
              prompt: 'Water flows into an inverted right circular cone of base radius $5\\text{ cm}$ and depth $15\\text{ cm}$ at a constant rate of $9\\pi\\text{ cm}^3/\\text{s}$. Find the rate at which the water level is rising when the depth is $3\\text{ cm}$. [5 marks]',
              hint: '$r/h = 5/15 = 1/3 \\implies r = h/3$. $V = \\frac{1}{27}\\pi h^3$.',
              answer: '$V = \\frac{1}{27}\\pi h^3 \\implies \\frac{dV}{dh} = \\frac{1}{9}\\pi h^2$.\nAt $h = 3$: $\\frac{dV}{dh} = \\frac{1}{9}\\pi(9) = \\pi$.\n$9\\pi = \\pi \\frac{dh}{dt} \\implies \\frac{dh}{dt} = 9\\text{ cm/s}$.',
              marks: 5,
            },
            {
              id: '8_t_q6',
              questionNumber: 3,
              prompt: 'Show that the function $f(x) = 2x + \\cos x$ is strictly increasing for all $x \\in \\mathbb{R}$. [4 marks]',
              hint: 'Find $f\'(x)$ and recall that $-1 \\le \\cos x \\le 1$ or $-1 \\le -\\sin x \\le 1$.',
              answer: '$f\'(x) = 2 - \\sin x$. Since $-1 \\le \\sin x \\le 1$, $2 - \\sin x \\ge 2 - 1 = 1 > 0$ for all real $x$. Since $f\'(x) \\ge 1 > 0$ everywhere, $f(x)$ is strictly increasing for all $x \\in \\mathbb{R}$.',
              marks: 4,
            },
          ],
        },
        {
          id: '8_test_s3',
          stepNumber: 3,
          title: 'Test Part C: Exam-Style Challenge',
          type: 'exercise_l3',
          badge: 'Unit Test: Part C',
          practiceQuestions: [
            {
              id: '8_t_q7',
              questionNumber: 1,
              prompt: 'A wire of length $100\\text{ cm}$ is cut into two pieces. One piece of length $x$ is bent into an equilateral triangle and the other into a square. (i) Show that the combined area is $A = \\frac{\\sqrt{3}}{36}x^2 + \\frac{1}{16}(100 - x)^2$. (ii) Find the value of $x$ that minimizes the combined area. [7 marks]',
              hint: 'Triangle side is $x/3$, area is $\\frac{\\sqrt{3}}{4}(x/3)^2 = \\frac{\\sqrt{3}}{36}x^2$. Square side is $(100 - x)/4$, area is $\\frac{(100-x)^2}{16}$.',
              answer: '(i) Equilateral triangle of side $s = x/3$ has area $\\frac{1}{2} s^2 \\sin 60^\\circ = \\frac{\\sqrt{3}}{4} \\frac{x^2}{9} = \\frac{\\sqrt{3}}{36}x^2$.\nSquare of side $(100 - x)/4$ has area $\\left(\\frac{100 - x}{4}\\right)^2 = \\frac{(100 - x)^2}{16}$.\nCombined area $A = \\frac{\\sqrt{3}}{36}x^2 + \\frac{(100 - x)^2}{16}$.\n(ii) $\\frac{dA}{dx} = \\frac{2\\sqrt{3}}{36}x - \\frac{2(100 - x)}{16} = \\frac{\\sqrt{3}}{18}x - \\frac{100 - x}{8} = 0$.\nMultiply by 72: $4\\sqrt{3}x - 9(100 - x) = 0 \\implies 4\\sqrt{3}x + 9x - 900 = 0$.\n$x(4\\sqrt{3} + 9) = 900 \\implies x = \\frac{900}{9 + 4\\sqrt{3}} \\approx \\frac{900}{15.928} \\approx 56.5\\text{ cm}$.\n$\\frac{d^2A}{dx^2} = \\frac{\\sqrt{3}}{18} + \\frac{1}{8} > 0 \\implies$ Minimum.',
              marks: 7,
              markingScheme: [
                'B1: Correct area of equilateral triangle $\\frac{\\sqrt{3}}{36}x^2$',
                'B1: Correct area of square $\\frac{(100-x)^2}{16}$',
                'M1: Differentiates and equates to 0: $\\frac{\\sqrt{3}}{18}x - \\frac{100-x}{8} = 0$',
                'M1: Clears denominators and collects terms in $x$',
                'A1: Exact answer $x = \\frac{900}{9 + 4\\sqrt{3}}$ (or $\\approx 56.5\\text{ cm}$)',
                'M1: Calculates $\\frac{d^2A}{dx^2} > 0$',
                'A1: Justifies minimum fully',
              ],
            },
            {
              id: '8_t_q8',
              questionNumber: 2,
              prompt: 'A trough of length $2\\text{ m}$ has a cross-section in the shape of an inverted equilateral triangle with side length $0.6\\text{ m}$. Water is pumped into the trough at a rate of $0.05\\text{ m}^3/\\text{min}$. Find the rate at which the water level is rising when the depth is $0.2\\text{ m}$. [7 marks]',
              hint: 'In an equilateral cross-section with vertex angle $60^\\circ$, width $w$ at depth $h$ is $w = 2h \\tan 30^\\circ = \\frac{2}{\\sqrt{3}}h$. Area of triangle is $\\frac{1}{2} w h = \\frac{1}{\\sqrt{3}}h^2$. Volume $V = 2 \\times \\frac{1}{\\sqrt{3}}h^2 = \\frac{2}{\\sqrt{3}}h^2$.',
              answer: 'Cross-sectional width $w = 2h \\tan 30^\\circ = \\frac{2h}{\\sqrt{3}}$.\nCross-sectional area of water $= \\frac{1}{2} w h = \\frac{1}{2}\\left(\\frac{2h}{\\sqrt{3}}\\right)h = \\frac{h^2}{\\sqrt{3}}$.\nVolume of water for length $L = 2\\text{ m}$: $V = 2 \\times \\frac{h^2}{\\sqrt{3}} = \\frac{2}{\\sqrt{3}}h^2$.\n$\\frac{dV}{dh} = \\frac{4}{\\sqrt{3}}h$.\nWhen $h = 0.2\\text{ m}$: $\\frac{dV}{dh} = \\frac{4(0.2)}{\\sqrt{3}} = \\frac{0.8}{\\sqrt{3}}$.\nConnected rates: $\\frac{dV}{dt} = \\frac{dV}{dh} \\frac{dh}{dt} \\implies 0.05 = \\frac{0.8}{\\sqrt{3}} \\frac{dh}{dt}$.\n$\\frac{dh}{dt} = 0.05 \\times \\frac{\\sqrt{3}}{0.8} = \\frac{0.05\\sqrt{3}}{0.8} = \\frac{\\sqrt{3}}{16} \\approx 0.108\\text{ m/min}$.',
              marks: 7,
              markingScheme: [
                'M1: Expresses width $w$ in terms of $h$ using $\\tan 30^\\circ$',
                'A1: Area of cross-section $= h^2/\\sqrt{3}$',
                'M1: $V = \\frac{2}{\\sqrt{3}}h^2$',
                'M1: Differentiates $\\frac{dV}{dh} = \\frac{4}{\\sqrt{3}}h$',
                'M1: Evaluates at $h = 0.2$ and substitutes into rate equation',
                'A2: $\\frac{\\sqrt{3}}{16}\\text{ m/min}$ or $0.108\\text{ m/min}$',
              ],
            },
            {
              id: '8_t_q9',
              questionNumber: 3,
              prompt: 'A curve has equation $y = x^2 - \\frac{k}{x}$ where $k > 0$. (i) Find the coordinates of the stationary point in terms of $k$. (ii) Show that the stationary point is always a local minimum. (iii) Find the value of $k$ for which the minimum value of $y$ is 12. [7 marks]',
              hint: '$\\frac{dy}{dx} = 2x + \\frac{k}{x^2} = 0 \\implies 2x^3 = -k \\implies x = -\\sqrt[3]{k/2}$.',
              answer: '(i) $\\frac{dy}{dx} = 2x + kx^{-2} = 2x + \\frac{k}{x^2} = 0 \\implies 2x^3 = -k \\implies x = -\\left(\\frac{k}{2}\\right)^{1/3}$.\n$y = x^2 - \\frac{k}{x} = x^2 - \\frac{-2x^3}{x} = x^2 + 2x^2 = 3x^2 = 3\\left(\\frac{k}{2}\\right)^{2/3}$.\nStationary point is $\\left(-\\left(\\frac{k}{2}\\right)^{1/3}, 3\\left(\\frac{k}{2}\\right)^{2/3}\\right)$.\n(ii) $\\frac{d^2y}{dx^2} = 2 - 2kx^{-3}$. Since $x^3 = -k/2$, $-2kx^{-3} = -2k(-2/k) = 4$.\n$\\frac{d^2y}{dx^2} = 2 + 4 = 6 > 0$ for all $k > 0$. Therefore the stationary point is always a local minimum.\n(iii) Set minimum $y$-value to 12: $3\\left(\\frac{k}{2}\\right)^{2/3} = 12 \\implies \\left(\\frac{k}{2}\\right)^{2/3} = 4$.\nTaking power $3/2$: $\\frac{k}{2} = 4^{3/2} = 8 \\implies k = 16$.',
              marks: 7,
              markingScheme: [
                'M1: Differentiates and sets $2x + k/x^2 = 0$',
                'A1: $x = -\\left(\\frac{k}{2}\\right)^{1/3}$',
                'A1: $y = 3\\left(\\frac{k}{2}\\right)^{2/3}$',
                'M1: Computes $\\frac{d^2y}{dx^2} = 2 - 2kx^{-3}$ and substitutes $x^3 = -k/2$',
                'A1: $\\frac{d^2y}{dx^2} = 6 > 0$, confirming minimum',
                'M1: Solves $3(k/2)^{2/3} = 12$',
                'A1: $k = 16$',
              ],
            },
          ],
        },
      ],
    },
  ],
};
