import { Unit } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 5: Trigonometry
 * ============================================================================
 */

export const unit5: Unit = {
  id: 'unit_5',
  number: 5,
  title: 'Trigonometry',
  learningObjectives: [
    '1.5.1: understand the definitions of sine, cosine and tangent and their values for angles between 0° and 90°',
    '1.5.2: extend the definitions of sine, cosine and tangent to angles between 0° and 360° and understand the signs of trigonometric ratios in different quadrants',
    '1.5.3: sketch and recognise the graphs of the functions y = sin x, y = cos x, y = tan x, y = a sin(bx) + c, y = a cos(bx) + c and y = a tan(bx) and understand the terms period and amplitude',
    '1.5.4: understand the definitions and domains of the inverse trigonometric functions sin⁻¹ x, cos⁻¹ x and tan⁻¹ x',
    '1.5.5: solve trigonometric equations, including those involving the use of trigonometric identities, in a given interval',
    '1.5.6: prove and use the identities sin² θ + cos² θ = 1, tan θ = sin θ / cos θ and solve equations involving these identities',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 5.1 Angles between 0 and 90
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_1',
      number: '5.1',
      title: 'Angles between 0 and 90',
      type: 'lesson',
      steps: [
        {
          id: '5_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Right-Angled Ratios & Exact Values',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'The Invariant Geometry of Triangles',
              content:
                'In any right-angled triangle, the shape is completely locked once an acute angle $\\theta$ is chosen. The ratios of side lengths depend solely on $\\theta$, not the size of the triangle. The two foundational reference triangles—the $45^\\circ$-$45^\\circ$-$90^\\circ$ isosceles triangle and the $30^\\circ$-$60^\\circ$-$90^\\circ$ halved equilateral triangle—yield the non-negotiable exact trigonometric values essential for Cambridge A Level.',
            },
            {
              type: 'formula_card',
              title: 'Exact Special Values (Memorise or Derive)',
              math: '\\begin{array}{c|c|c|c|c|c} \\theta & 0^\\circ (0) & 30^\\circ (\\frac{\\pi}{6}) & 45^\\circ (\\frac{\\pi}{4}) & 60^\\circ (\\frac{\\pi}{3}) & 90^\\circ (\\frac{\\pi}{2}) \\\\ \\hline \\sin\\theta & 0 & \\frac{1}{2} & \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{3}}{2} & 1 \\\\ \\cos\\theta & 1 & \\frac{\\sqrt{3}}{2} & \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2} & \\frac{1}{2} & 0 \\\\ \\tan\\theta & 0 & \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3} & 1 & \\sqrt{3} & \\text{undefined} \\end{array}',
              content: 'Notice the symmetry: $\\sin(90^\\circ - \\theta) = \\cos\\theta$ and $\\cos(90^\\circ - \\theta) = \\sin\\theta$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Complementary Angle Identity',
                  definition: 'Angles that add to $90^\\circ$ satisfy $\\sin\\theta = \\cos(90^\\circ - \\theta)$.',
                },
                {
                  term: 'Exact Surd Form',
                  definition: 'Expressing trig values using roots (e.g. $\\frac{\\sqrt{3}}{2}$) rather than rounded decimals.',
                },
              ],
            },
          ],
        },
        {
          id: '5_1_s2',
          stepNumber: 2,
          title: 'Worked Example: Exact Value Calculations',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the exact value of $\\frac{\\sin 30^\\circ + \\tan 45^\\circ}{\\cos 30^\\circ \\tan 60^\\circ}$ without a calculator',
              content: 'Step-by-step substitution of exact values:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Substitute exact values for the numerator terms: $\\sin 30^\\circ = \\frac{1}{2}$, $\\tan 45^\\circ = 1$.',
                  math: '\\text{Numerator} = \\frac{1}{2} + 1 = \\frac{3}{2}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Substitute exact values for the denominator: $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\tan 60^\\circ = \\sqrt{3}$.',
                  math: '\\text{Denominator} = \\frac{\\sqrt{3}}{2} \\times \\sqrt{3} = \\frac{3}{2}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Divide the numerator by the denominator.',
                  math: '\\frac{\\frac{3}{2}}{\\frac{3}{2}} = 1',
                },
              ],
            },
          ],
        },
        {
          id: '5_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Beware of Rounded Decimal Answers',
              mistake: 'Typing $\\sin 60^\\circ$ into a calculator and writing $0.866$ when the question asks for an exact value.',
              correction: 'Always leave answers in surd form: $\\frac{\\sqrt{3}}{2}$. Whenever a question specifies "exact value" or "without using a calculator", giving decimals loses all accuracy marks.',
              proTip: 'Remember the equilateral triangle of side 2 split in half: hypotenuse is 2, base is 1, perpendicular height is $\\sqrt{2^2 - 1^2} = \\sqrt{3}$. This gives all $30^\\circ$ and $60^\\circ$ ratios in 5 seconds.',
            },
          ],
        },
        {
          id: '5_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_1_q1',
              questionNumber: 1,
              prompt: 'State the exact value of $\\sin 45^\\circ \\cos 45^\\circ$.',
              hint: 'Substitute $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$ and $\\cos 45^\\circ = \\frac{1}{\\sqrt{2}}$.',
              answer: '$\\frac{1}{\\sqrt{2}} \\times \\frac{1}{\\sqrt{2}} = \\frac{1}{2}$',
              marks: 2,
            },
            {
              id: '5_1_q2',
              questionNumber: 2,
              prompt: 'Evaluate $4\\cos 60^\\circ + 3\\tan 45^\\circ$ in exact arithmetic.',
              hint: '$\\cos 60^\\circ = \\frac{1}{2}$ and $\\tan 45^\\circ = 1$.',
              answer: '$4\\left(\\frac{1}{2}\\right) + 3(1) = 2 + 3 = 5$',
              marks: 2,
            },
            {
              id: '5_1_q3',
              questionNumber: 3,
              prompt: 'A right triangle has hypotenuse 10 and acute angle $30^\\circ$. Find the lengths of the opposite and adjacent sides.',
              hint: '$\\text{Opposite} = 10\\sin 30^\\circ$, $\\text{Adjacent} = 10\\cos 30^\\circ$.',
              answer: '$\\text{Opposite} = 10(0.5) = 5$, $\\text{Adjacent} = 10\\left(\\frac{\\sqrt{3}}{2}\\right) = 5\\sqrt{3}$',
              marks: 3,
            },
          ],
        },
        {
          id: '5_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_1_q4',
              questionNumber: 1,
              prompt: 'Show that $\\frac{1 - \\cos 60^\\circ}{\\sin 30^\\circ} = 1$.',
              hint: 'Substitute $\\cos 60^\\circ = \\frac{1}{2}$ and $\\sin 30^\\circ = \\frac{1}{2}$.',
              answer: '$\\frac{1 - 1/2}{1/2} = \\frac{1/2}{1/2} = 1$',
              marks: 3,
            },
            {
              id: '5_1_q5',
              questionNumber: 2,
              prompt: 'Given that $\\tan\\theta = \\frac{5}{12}$ where $0 < \\theta < 90^\\circ$, find the exact value of $\\sin\\theta + \\cos\\theta$.',
              hint: 'Hypotenuse $= \\sqrt{5^2 + 12^2} = 13$.',
              answer: '$\\sin\\theta = \\frac{5}{13}, \\cos\\theta = \\frac{12}{13} \\implies \\sin\\theta + \\cos\\theta = \\frac{17}{13}$',
              marks: 3,
            },
            {
              id: '5_1_q6',
              questionNumber: 3,
              prompt: 'Show that $\\tan^2 30^\\circ + \\sin^2 45^\\circ = \\frac{5}{6}$.',
              hint: '$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$, $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$.',
              answer: '$\\left(\\frac{1}{\\sqrt{3}}\\right)^2 + \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{1}{3} + \\frac{1}{2} = \\frac{5}{6}$',
              marks: 4,
            },
          ],
        },
        {
          id: '5_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_1_q7',
              questionNumber: 1,
              prompt: 'In triangle $ABC$, angle $B = 90^\\circ$, angle $A = 60^\\circ$, and $AC = 4\\sqrt{3}\\text{ cm}$. Find the exact area of triangle $ABC$. [4 marks]',
              hint: 'Find $AB = AC\\cos 60^\\circ$ and $BC = AC\\sin 60^\\circ$, then $\\text{Area} = \\frac{1}{2} \\times AB \\times BC$.',
              answer: '$AB = 4\\sqrt{3} \\times \\frac{1}{2} = 2\\sqrt{3}$, $BC = 4\\sqrt{3} \\times \\frac{\\sqrt{3}}{2} = 6$. $\\text{Area} = \\frac{1}{2}(2\\sqrt{3})(6) = 6\\sqrt{3}\\text{ cm}^2$.',
              marks: 4,
              markingScheme: [
                'M1: Correct use of $\\cos 60^\\circ$ to find $AB$ or $\\sin 60^\\circ$ for $BC$',
                'A1: $AB = 2\\sqrt{3}$ and $BC = 6$',
                'M1: $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$',
                'A1: Exact answer $6\\sqrt{3}$',
              ],
            },
            {
              id: '5_1_q8',
              questionNumber: 2,
              prompt: 'Show that $\\frac{\\tan 60^\\circ - \\tan 30^\\circ}{1 + \\tan 60^\\circ \\tan 30^\\circ} = \\frac{1}{\\sqrt{3}}$. [4 marks]',
              hint: 'Substitute $\\tan 60^\\circ = \\sqrt{3}$ and $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.',
              answer: '$\\text{Numerator} = \\sqrt{3} - \\frac{1}{\\sqrt{3}} = \\frac{3 - 1}{\\sqrt{3}} = \\frac{2}{\\sqrt{3}}$. $\\text{Denominator} = 1 + \\sqrt{3}\\left(\\frac{1}{\\sqrt{3}}\\right) = 1 + 1 = 2$. Dividing gives $\\frac{2/\\sqrt{3}}{2} = \\frac{1}{\\sqrt{3}}$.',
              marks: 4,
              markingScheme: [
                'B1: $\\tan 60^\\circ = \\sqrt{3}$ and $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ stated',
                'M1: Correct algebraic simplification of numerator to $\\frac{2}{\\sqrt{3}}$',
                'M1: Simplification of denominator to $2$',
                'A1: Concludes with exact value $\\frac{1}{\\sqrt{3}}$',
              ],
            },
            {
              id: '5_1_q9',
              questionNumber: 3,
              prompt: 'Given that $\\cos\\theta = \\frac{2}{3}$ where $\\theta$ is acute, show without finding $\\theta$ that $\\tan\\theta = \\frac{\\sqrt{5}}{2}$. [4 marks]',
              hint: 'Draw a right triangle with adjacent $= 2$, hypotenuse $= 3$. Opposite $= \\sqrt{3^2 - 2^2}$.',
              answer: '$\\text{Opposite} = \\sqrt{3^2 - 2^2} = \\sqrt{9 - 4} = \\sqrt{5}$. Hence $\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sqrt{5}}{2}$.',
              marks: 4,
              markingScheme: [
                'M1: Apply Pythagoras to find the remaining side $\\sqrt{3^2 - 2^2}$',
                'A1: Opposite side length is $\\sqrt{5}$',
                'M1: State $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$',
                'A1: Fully established result $\\frac{\\sqrt{5}}{2}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 5.2 The general definition of an angle
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_2',
      number: '5.2',
      title: 'The general definition of an angle',
      type: 'lesson',
      steps: [
        {
          id: '5_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Rotation & Quadrants',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Angles Beyond the Triangle',
              content:
                'In trigonometry, an angle is not just an opening inside a triangle—it is a **rotation**. We place the vertex at the origin $(0,0)$ and start the initial ray along the positive $x$-axis. Rotating anticlockwise generates positive angles; clockwise generates negative angles. Any angle terminates in one of four quadrants (I, II, III, IV), allowing angles of any magnitude: $150^\\circ, 240^\\circ, -45^\\circ, 750^\\circ$.',
            },
            {
              type: 'formula_card',
              title: 'Basic Angle (Acute Reference Angle $\\alpha$)',
              math: '\\begin{aligned} \\text{Quadrant I: } & \\theta = \\alpha \\\\ \\text{Quadrant II: } & \\theta = 180^\\circ - \\alpha \\\\ \\text{Quadrant III: } & \\theta = 180^\\circ + \\alpha \\\\ \\text{Quadrant IV: } & \\theta = 360^\\circ - \\alpha \\text{ (or } -\\alpha\\text{)} \\end{aligned}',
              content: 'The basic angle $\\alpha$ is ALWAYS the acute positive angle made with the horizontal $x$-axis ($0 < \\alpha < 90^\\circ$).',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Basic (Reference) Angle $\\alpha$',
                  definition: 'The acute angle between the terminal ray and the $x$-axis. It is always positive.',
                },
                {
                  term: 'Coterminal Angles',
                  definition: 'Angles that differ by a multiple of $360^\\circ$ ($2\\pi$), ending at the exact same ray position.',
                },
              ],
            },
          ],
        },
        {
          id: '5_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Finding the Basic Angle $\\alpha$',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the basic angle $\\alpha$ for (i) $\\theta = 130^\\circ$, (ii) $\\theta = 225^\\circ$, (iii) $\\theta = -60^\\circ$',
              content: 'Relate each angle to the nearest horizontal $x$-axis:',
              items: [
                {
                  stepNumber: 1,
                  explanation: '$\\theta = 130^\\circ$ is in Quadrant II. The nearest $x$-axis is $180^\\circ$.',
                  math: '\\alpha = 180^\\circ - 130^\\circ = 50^\\circ',
                },
                {
                  stepNumber: 2,
                  explanation: '$\\theta = 225^\\circ$ is in Quadrant III. Compare with $180^\\circ$.',
                  math: '\\alpha = 225^\\circ - 180^\\circ = 45^\\circ',
                },
                {
                  stepNumber: 3,
                  explanation: '$\\theta = -60^\\circ$ rotates clockwise into Quadrant IV. The acute angle with the positive $x$-axis is simply $60^\\circ$.',
                  math: '\\alpha = 60^\\circ',
                },
              ],
            },
          ],
        },
        {
          id: '5_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Measuring from the $y$-Axis',
              mistake: 'Calculating $\\alpha = 130^\\circ - 90^\\circ = 40^\\circ$ by measuring to the vertical $y$-axis.',
              correction: 'The reference basic angle $\\alpha$ is ALWAYS measured against the horizontal $x$-axis ($180^\\circ$ or $360^\\circ$), never the $y$-axis!',
              proTip: 'Think "Bowtie": draw a bowtie shape with its center at the origin. Every triangle in the bowtie has one leg resting directly on the $x$-axis.',
            },
          ],
        },
        {
          id: '5_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_2_q1',
              questionNumber: 1,
              prompt: 'State the quadrant and basic angle $\\alpha$ for $\\theta = 165^\\circ$.',
              hint: 'Quadrant II: $\\alpha = 180^\\circ - 165^\\circ$.',
              answer: 'Quadrant II, $\\alpha = 15^\\circ$',
              marks: 2,
            },
            {
              id: '5_2_q2',
              questionNumber: 2,
              prompt: 'State the quadrant and basic angle $\\alpha$ for $\\theta = 310^\\circ$.',
              hint: 'Quadrant IV: $\\alpha = 360^\\circ - 310^\\circ$.',
              answer: 'Quadrant IV, $\\alpha = 50^\\circ$',
              marks: 2,
            },
            {
              id: '5_2_q3',
              questionNumber: 3,
              prompt: 'State the quadrant and basic angle $\\alpha$ for $\\theta = \\frac{4\\pi}{3}$.',
              hint: 'Compare with $\\pi$: $\\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$.',
              answer: 'Quadrant III, $\\alpha = \\frac{\\pi}{3}$ radians',
              marks: 2,
            },
          ],
        },
        {
          id: '5_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_2_q4',
              questionNumber: 1,
              prompt: 'Find two values of $\\theta$ in the range $0^\\circ \\le \\theta \\le 360^\\circ$ that have a basic angle of $35^\\circ$ and lie in Quadrants II and III.',
              hint: 'Quadrant II: $180^\\circ - 35^\\circ$; Quadrant III: $180^\\circ + 35^\\circ$.',
              answer: '$145^\\circ$ and $215^\\circ$',
              marks: 3,
            },
            {
              id: '5_2_q5',
              questionNumber: 2,
              prompt: 'An angle $\\theta = -140^\\circ$. Express this as a positive angle $0^\\circ \\le \\theta < 360^\\circ$ and find its basic angle.',
              hint: 'Add $360^\\circ$ to find the positive coterminal angle.',
              answer: '$\\theta = -140^\\circ + 360^\\circ = 220^\\circ$ (Quadrant III), $\\alpha = 220^\\circ - 180^\\circ = 40^\\circ$',
              marks: 3,
            },
            {
              id: '5_2_q6',
              questionNumber: 3,
              prompt: 'For $\\theta = \\frac{7\\pi}{4}$, identify the quadrant and state the basic angle in radians.',
              hint: '$\\frac{7\\pi}{4} = 2\\pi - \\frac{\\pi}{4}$.',
              answer: 'Quadrant IV, $\\alpha = \\frac{\\pi}{4}$',
              marks: 3,
            },
          ],
        },
        {
          id: '5_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_2_q7',
              questionNumber: 1,
              prompt: 'An angle $\\theta$ satisfies $180^\\circ < \\theta < 360^\\circ$. If its acute reference angle is $28^\\circ$, write down the two possible values of $\\theta$. [4 marks]',
              hint: 'The range covers Quadrants III and IV.',
              answer: 'Quadrant III: $\\theta = 180^\\circ + 28^\\circ = 208^\\circ$. Quadrant IV: $\\theta = 360^\\circ - 28^\\circ = 332^\\circ$.',
              marks: 4,
              markingScheme: [
                'B1: Recognises range corresponds to Quadrants III and IV',
                'M1: Calculates Quadrant III value $180^\\circ + 28^\\circ$',
                'A1: $\\theta = 208^\\circ$',
                'A1: $\\theta = 332^\\circ$',
              ],
            },
            {
              id: '5_2_q8',
              questionNumber: 2,
              prompt: 'A wheel rotates through an angle of $1000^\\circ$. Determine the number of full turns, the final quadrant of rotation, and the acute reference angle. [4 marks]',
              hint: 'Divide $1000^\\circ$ by $360^\\circ$.',
              answer: '$1000^\\circ = 2 \\times 360^\\circ + 280^\\circ$. 2 full turns. $280^\\circ$ lies in Quadrant IV. Reference angle $\\alpha = 360^\\circ - 280^\\circ = 80^\\circ$.',
              marks: 4,
              markingScheme: [
                'B1: 2 complete revolutions ($720^\\circ$ subtracted)',
                'B1: Remainder angle $280^\\circ$',
                'B1: Identifies Quadrant IV',
                'B1: Accurate reference angle $80^\\circ$',
              ],
            },
            {
              id: '5_2_q9',
              questionNumber: 3,
              prompt: 'Find all angles $\\theta$ in the interval $-180^\\circ \\le \\theta \\le 180^\\circ$ having a basic angle of $42^\\circ$. [4 marks]',
              hint: 'There is one angle in each of the 4 quadrants.',
              answer: 'Quadrant I: $42^\\circ$; Quadrant II: $180^\\circ - 42^\\circ = 138^\\circ$; Quadrant IV (clockwise): $-42^\\circ$; Quadrant III (clockwise): $-(180^\\circ - 42^\\circ) = -138^\\circ$.',
              marks: 4,
              markingScheme: [
                'B1: Positive values $42^\\circ, 138^\\circ$',
                'M1: Method for negative angles in Quadrants III and IV',
                'A1: $-42^\\circ$',
                'A1: $-138^\\circ$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 5.3 Trigonometric ratios of general angles
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_3',
      number: '5.3',
      title: 'Trigonometric ratios of general angles',
      type: 'lesson',
      steps: [
        {
          id: '5_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: The CAST Rule & Signs',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Points on the Unit Circle $(x, y) = (\\cos\\theta, \\sin\\theta)$',
              content:
                'On a circle of radius $r = 1$, any point is given by $x = \\cos\\theta$ and $y = \\sin\\theta$, while $\\tan\\theta = \\frac{y}{x}$. As the ray rotates through different quadrants, the coordinates $x$ and $y$ switch signs: in Q II, $x < 0, y > 0 \\implies \\cos < 0, \\sin > 0, \\tan < 0$. The signs are neatly summarized by the famous **CAST** diagram (or "All Students Take Calculus").',
            },
            {
              type: 'formula_card',
              title: 'The CAST Diagram Rule',
              math: '\\begin{array}{c|c} \\text{Quadrant II (S)}: \\sin > 0, \\cos < 0, \\tan < 0 & \\text{Quadrant I (A)}: \\text{All positive} \\\\ \\hline \\text{Quadrant III (T)}: \\tan > 0, \\sin < 0, \\cos < 0 & \\text{Quadrant IV (C)}: \\cos > 0, \\sin < 0, \\tan < 0 \\end{array}',
              content: 'To evaluate any trig function of a general angle: (1) Find the basic angle $\\alpha$. (2) Determine the sign (+ or -) from the quadrant using CAST.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'CAST Rule',
                  definition: 'Acronym showing which ratio is positive in Q IV (C), Q I (A), Q II (S), Q III (T).',
                },
                {
                  term: 'Unit Circle Definition',
                  definition: '$\\cos\\theta = x$, $\\sin\\theta = y$, and $\\tan\\theta = y/x$ for points on $x^2 + y^2 = 1$.',
                },
              ],
            },
          ],
        },
        {
          id: '5_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Exact Trig Ratio via CAST',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the exact value of $\\cos 210^\\circ$ and $\\sin(-45^\\circ)$',
              content: 'Apply reference angles and quadrant signs:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'For $\\theta = 210^\\circ$, it lies in Quadrant III. Basic angle $\\alpha = 210^\\circ - 180^\\circ = 30^\\circ$.',
                  math: '\\alpha = 30^\\circ',
                },
                {
                  stepNumber: 2,
                  explanation: 'In Quadrant III, only Tangent is positive (CAST). Therefore cosine is negative.',
                  math: '\\cos 210^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}',
                },
                {
                  stepNumber: 3,
                  explanation: 'For $\\theta = -45^\\circ$, it lies in Quadrant IV. In Q IV, only cosine is positive, so sine is negative. Basic angle is $45^\\circ$.',
                  math: '\\sin(-45^\\circ) = -\\sin 45^\\circ = -\\frac{1}{\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}',
                },
              ],
            },
          ],
        },
        {
          id: '5_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Forgetting the Negative Sign in Quadrants II & III',
              mistake: 'Writing $\\cos 120^\\circ = \\frac{1}{2}$ because $\\cos 60^\\circ = \\frac{1}{2}$.',
              correction: '$120^\\circ$ is in Quadrant II where cosine is negative! $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$.',
              proTip: 'Always write down the sign FIRST before looking up the value: e.g. "Q II $\\rightarrow \\cos$ is negative $\\rightarrow -(\\dots)$".',
            },
          ],
        },
        {
          id: '5_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_3_q1',
              questionNumber: 1,
              prompt: 'Find the exact value of $\\sin 150^\\circ$.',
              hint: 'Quadrant II: $\\sin$ is positive, $\\alpha = 180^\\circ - 150^\\circ = 30^\\circ$.',
              answer: '$\\sin 150^\\circ = +\\sin 30^\\circ = \\frac{1}{2}$',
              marks: 2,
            },
            {
              id: '5_3_q2',
              questionNumber: 2,
              prompt: 'Find the exact value of $\\tan 315^\\circ$.',
              hint: 'Quadrant IV: $\\tan$ is negative, $\\alpha = 360^\\circ - 315^\\circ = 45^\\circ$.',
              answer: '$\\tan 315^\\circ = -\\tan 45^\\circ = -1$',
              marks: 2,
            },
            {
              id: '5_3_q3',
              questionNumber: 3,
              prompt: 'State whether each is positive or negative: (a) $\\cos 260^\\circ$, (b) $\\tan 190^\\circ$, (c) $\\sin 340^\\circ$.',
              hint: 'Identify quadrants: 260 is Q III, 190 is Q III, 340 is Q IV.',
              answer: '(a) Negative, (b) Positive, (c) Negative',
              marks: 3,
            },
          ],
        },
        {
          id: '5_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_3_q4',
              questionNumber: 1,
              prompt: 'Given that $\\sin\\theta = -\\frac{3}{5}$ and $\\theta$ is in Quadrant III, find the exact values of $\\cos\\theta$ and $\\tan\\theta$.',
              hint: 'In Q III, $\\cos < 0$ and $\\tan > 0$. Pythagorean triple is 3-4-5.',
              answer: '$\\cos\\theta = -\\frac{4}{5}$, $\\tan\\theta = +\\frac{3}{4}$',
              marks: 3,
            },
            {
              id: '5_3_q5',
              questionNumber: 2,
              prompt: 'Evaluate exactly: $\\cos\\left(\\frac{5\\pi}{6}\\right) + \\sin\\left(\\frac{4\\pi}{3}\\right)$.',
              hint: '$\\frac{5\\pi}{6}$ is in Q II ($\\cos$ is $-\\frac{\\sqrt{3}}{2}$), $\\frac{4\\pi}{3}$ is in Q III ($\\sin$ is $-\\frac{\\sqrt{3}}{2}$).',
              answer: '$-\\frac{\\sqrt{3}}{2} + \\left(-\\frac{\\sqrt{3}}{2}\\right) = -\\sqrt{3}$',
              marks: 3,
            },
            {
              id: '5_3_q6',
              questionNumber: 3,
              prompt: 'The point $P(-5, 12)$ lies on the terminal arm of angle $\\theta$. Find the exact value of $\\sin\\theta, \\cos\\theta$ and $\\tan\\theta$.',
              hint: '$r = \\sqrt{(-5)^2 + 12^2} = 13$.',
              answer: '$\\sin\\theta = \\frac{12}{13}$, $\\cos\\theta = -\\frac{5}{13}$, $\\tan\\theta = -\\frac{12}{5}$',
              marks: 4,
            },
          ],
        },
        {
          id: '5_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_3_q7',
              questionNumber: 1,
              prompt: 'It is given that $\\tan\\theta = -\\frac{1}{\\sqrt{3}}$ and $0^\\circ \\le \\theta \\le 360^\\circ$. Find the two possible values of $\\theta$ and the corresponding values of $\\cos\\theta$. [4 marks]',
              hint: '$\\tan$ is negative in Quadrants II and IV. Reference angle $\\alpha = 30^\\circ$.',
              answer: '$\\alpha = 30^\\circ$. Q II: $\\theta = 150^\\circ \\implies \\cos 150^\\circ = -\\frac{\\sqrt{3}}{2}$. Q IV: $\\theta = 330^\\circ \\implies \\cos 330^\\circ = +\\frac{\\sqrt{3}}{2}$.',
              marks: 4,
              markingScheme: [
                'B1: Reference angle $\\alpha = 30^\\circ$',
                'B1: $\\theta = 150^\\circ$ with $\\cos\\theta = -\\frac{\\sqrt{3}}{2}$',
                'B1: $\\theta = 330^\\circ$ with $\\cos\\theta = +\\frac{\\sqrt{3}}{2}$',
                'A1: Clear identification of both quadrant solutions',
              ],
            },
            {
              id: '5_3_q8',
              questionNumber: 2,
              prompt: 'Given that $\\cos\\theta = p$ where $\\theta$ is obtuse, express in terms of $p$: (a) $\\sin\\theta$, (b) $\\tan\\theta$, (c) $\\cos(180^\\circ - \\theta)$. [5 marks]',
              hint: 'Since $\\theta$ is obtuse, $\\theta \\in$ Q II, so $p < 0$. $\\sin\\theta = +\\sqrt{1 - p^2}$.',
              answer: '(a) $\\sin\\theta = \\sqrt{1 - p^2}$. (b) $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sqrt{1 - p^2}}{p}$. (c) $\\cos(180^\\circ - \\theta) = -\\cos\\theta = -p$.',
              marks: 5,
              markingScheme: [
                'M1: Use of $\\sin^2\\theta + \\cos^2\\theta = 1$',
                'A1: $\\sin\\theta = \\sqrt{1 - p^2}$ (positive in Q II)',
                'A1: $\\tan\\theta = \\frac{\\sqrt{1 - p^2}}{p}$',
                'M1: Recognition of symmetry $\\cos(180^\\circ - \\theta) = -\\cos\\theta$',
                'A1: $-p$',
              ],
            },
            {
              id: '5_3_q9',
              questionNumber: 3,
              prompt: 'An angle $\\theta$ satisfies $\\sin\\theta = -\\frac{2}{3}$ and $\\tan\\theta > 0$. Find the exact value of $\\cos\\theta$ and $\\tan\\theta$. [4 marks]',
              hint: '$\\sin < 0$ and $\\tan > 0$ restricts $\\theta$ to Quadrant III.',
              answer: 'In Q III, $\\cos < 0$. Adjacent side $= \\sqrt{3^2 - 2^2} = \\sqrt{5}$. Thus $\\cos\\theta = -\\frac{\\sqrt{5}}{3}$ and $\\tan\\theta = +\\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}$.',
              marks: 4,
              markingScheme: [
                'B1: Deduces $\\theta$ must be in Quadrant III',
                'M1: Computes missing adjacent length $\\sqrt{3^2 - 2^2} = \\sqrt{5}$',
                'A1: $\\cos\\theta = -\\frac{\\sqrt{5}}{3}$',
                'A1: $\\tan\\theta = \\frac{2}{\\sqrt{5}}$ or $\\frac{2\\sqrt{5}}{5}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 5.4 Graphs of trigonometric functions
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_4',
      number: '5.4',
      title: 'Graphs of trigonometric functions',
      type: 'lesson',
      steps: [
        {
          id: '5_4_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Waves, Periodicity & Transformations',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Repeating Waves of Motion',
              content:
                'Because rotating around a circle repeats every $360^\\circ$ ($2\\pi$), trig graphs are periodic waves. The graph of $y = \\sin x$ starts at 0, peaks at $(90^\\circ, 1)$, crosses 0 at $180^\\circ$, troughs at $(270^\\circ, -1)$, and completes one cycle at $360^\\circ$. $y = \\cos x$ starts at its crest $(0, 1)$. $y = \\tan x$ has vertical asymptotes wherever $\\cos x = 0$ (at $90^\\circ, 270^\\circ, \\dots$) and repeats every $180^\\circ$.',
            },
            {
              type: 'formula_card',
              title: 'Wave Properties & Transformations',
              math: '\\begin{aligned} y &= a\\sin(bx) + c \\quad \\text{or} \\quad y = a\\cos(bx) + c \\\\ \\text{Amplitude} &= |a| = \\frac{\\text{max} - \\text{min}}{2} \\\\ \\text{Period} &= \\frac{360^\\circ}{b} \\quad \\text{or} \\quad \\frac{2\\pi}{b} \\\\ \\text{Principal Axis (Vertical Shift)} &: y = c \\\\ \\text{For } y &= a\\tan(bx): \\text{ Period} = \\frac{180^\\circ}{b} \\text{ (No amplitude)} \\end{aligned}',
              content: 'A stretch of factor $\\frac{1}{b}$ horizontally changes the frequency; a vertical stretch of $a$ changes the wave height.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Amplitude',
                  definition: 'Half the vertical distance between maximum and minimum values ($|a|$). Tangent has no amplitude.',
                },
                {
                  term: 'Period',
                  definition: 'The smallest interval over which the wave pattern repeats completely.',
                },
              ],
            },
          ],
        },
        {
          id: '5_4_s2',
          stepNumber: 2,
          title: 'Worked Example: Sketching $y = 3\\cos(2x) + 1$',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'State the amplitude, period, and range of $y = 3\\cos(2x) + 1$ for $0^\\circ \\le x \\le 360^\\circ$, and sketch one cycle',
              content: 'Systematic analysis of wave parameters:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Identify amplitude and principal axis from $a=3$ and $c=1$.',
                  math: '\\text{Amplitude} = 3, \\quad \\text{Axis: } y = 1',
                },
                {
                  stepNumber: 2,
                  explanation: 'Calculate the maximum and minimum values to determine the range.',
                  math: '\\text{Max} = 1 + 3 = 4, \\quad \\text{Min} = 1 - 3 = -2 \\implies \\text{Range: } -2 \\le y \\le 4',
                },
                {
                  stepNumber: 3,
                  explanation: 'Calculate the period using $b = 2$.',
                  math: '\\text{Period} = \\frac{360^\\circ}{2} = 180^\\circ',
                },
                {
                  stepNumber: 4,
                  explanation: 'Determine key points for the first cycle from $0^\\circ$ to $180^\\circ$.',
                  math: '(0^\\circ, 4), \\; (45^\\circ, 1), \\; (90^\\circ, -2), \\; (135^\\circ, 1), \\; (180^\\circ, 4)',
                },
              ],
            },
          ],
        },
        {
          id: '5_4_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Confusing Period of $\\tan$ with $\\sin/\\cos$',
              mistake: 'Calculating the period of $y = \\tan(3x)$ as $\\frac{360^\\circ}{3} = 120^\\circ$.',
              correction: 'The base period of $\\tan x$ is $180^\\circ$ (or $\\pi$), NOT $360^\\circ$! So the period of $\\tan(3x)$ is $\\frac{180^\\circ}{3} = 60^\\circ$.',
              proTip: 'On sketch questions, examiners award marks for: (1) Correct amplitude/range, (2) Correct number of cycles, (3) Correct start point and intercepts marked clearly.',
            },
          ],
        },
        {
          id: '5_4_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_4_q1',
              questionNumber: 1,
              prompt: 'State the amplitude and period of the curve $y = 5\\sin(4x)$.',
              hint: 'Amplitude $= |a|$, Period $= \\frac{360^\\circ}{b}$.',
              answer: 'Amplitude $= 5$, Period $= \\frac{360^\\circ}{4} = 90^\\circ$',
              marks: 2,
            },
            {
              id: '5_4_q2',
              questionNumber: 2,
              prompt: 'Find the period and equations of the first two positive asymptotes of $y = \\tan(2x)$.',
              hint: 'Base period $180^\\circ / 2 = 90^\\circ$. Asymptotes when $2x = 90^\\circ, 270^\\circ$.',
              answer: 'Period $= 90^\\circ$, Asymptotes at $x = 45^\\circ$ and $x = 135^\\circ$',
              marks: 3,
            },
            {
              id: '5_4_q3',
              questionNumber: 3,
              prompt: 'State the maximum and minimum values of $f(x) = 2 - 7\\cos x$.',
              hint: 'Since $-1 \\le \\cos x \\le 1$, the max occurs when $\\cos x = -1$.',
              answer: 'Maximum $= 2 - 7(-1) = 9$, Minimum $= 2 - 7(1) = -5$',
              marks: 2,
            },
          ],
        },
        {
          id: '5_4_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_4_q4',
              questionNumber: 1,
              prompt: 'The curve $y = a\\sin(bx) + c$ has maximum value 7, minimum value -1, and period $120^\\circ$. Assuming $a > 0$, find $a, b,$ and $c$.',
              hint: 'Amplitude $a = (7 - (-1))/2$, vertical shift $c = (7 + (-1))/2$, period $= 360/b = 120$.',
              answer: '$a = 4, c = 3, b = 3$',
              marks: 3,
            },
            {
              id: '5_4_q5',
              questionNumber: 2,
              prompt: 'Sketch the graph of $y = 2\\sin x - 1$ for $0 \\le x \\le 2\\pi$, stating the coordinates of all intercepts with the $x$-axis.',
              hint: '$2\\sin x - 1 = 0 \\implies \\sin x = \\frac{1}{2}$. Solutions in $[0, 2\\pi]$ are $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$.',
              answer: 'Period $2\\pi$, range $[-3, 1]$. $x$-intercepts at $\\left(\\frac{\\pi}{6}, 0\\right)$ and $\\left(\\frac{5\\pi}{6}, 0\\right)$; $y$-intercept at $(0, -1)$.',
              marks: 4,
            },
            {
              id: '5_4_q6',
              questionNumber: 3,
              prompt: 'How many solutions does the equation $3\\cos(2x) = 1$ have in the interval $0^\\circ \\le x \\le 360^\\circ$?',
              hint: 'In $0^\\circ \\le x \\le 360^\\circ$, there are 2 full cycles of $\\cos(2x)$. Each cycle crosses $y = 1/3$ twice.',
              answer: '4 solutions ($2 \\text{ solutions per cycle} \\times 2 \\text{ cycles} = 4$)',
              marks: 3,
            },
          ],
        },
        {
          id: '5_4_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_4_q7',
              questionNumber: 1,
              prompt: 'The function $f$ is defined by $f(x) = 3 - 2\\cos\\left(\\frac{1}{2}x\\right)$ for $0 \\le x \\le 4\\pi$. (i) State the amplitude and period of $f$. (ii) State the range of $f$. (iii) Sketch the graph of $y = f(x)$. [5 marks]',
              hint: '$b = 1/2 \\implies \\text{Period} = 2\\pi / (1/2) = 4\\pi$. Amplitude is 2.',
              answer: '(i) Amplitude $= 2$, Period $= 4\\pi$. (ii) Range: $[1, 5]$ since $3 - 2(1) = 1$ and $3 - 2(-1) = 5$. (iii) Starts at $(0, 1)$, reaches $(2\\pi, 5)$, returns to $(4\\pi, 1)$.',
              marks: 5,
              markingScheme: [
                'B1: Amplitude $= 2$',
                'B1: Period $= 4\\pi$',
                'B1: Range $1 \\le f(x) \\le 5$',
                'M1: Correct inverted cosine shape starting at minimum $(0, 1)$',
                'A1: Peak clearly shown at $(2\\pi, 5)$ and ending at $(4\\pi, 1)$',
              ],
            },
            {
              id: '5_4_q8',
              questionNumber: 2,
              prompt: 'The function $g(x) = a + b\\sin x$ passes through $(0, 4)$ and has minimum value 1. Given $b > 0$, find the values of $a$ and $b$, and sketch the graph for $0 \\le x \\le 2\\pi$. [4 marks]',
              hint: '$g(0) = a + b(0) = 4 \\implies a = 4$. Minimum is $a - b = 1$.',
              answer: '$a = 4$. Min $= 4 - b = 1 \\implies b = 3$. Equation is $g(x) = 4 + 3\\sin x$. Range is $[1, 7]$, peak at $(\\pi/2, 7)$, trough at $(3\\pi/2, 1)$.',
              marks: 4,
              markingScheme: [
                'B1: Correctly finds $a = 4$',
                'M1: Solves $4 - b = 1$ for $b$',
                'A1: $b = 3$',
                'A1: Accurate sketch showing correct range $[1, 7]$ and intercepts',
              ],
            },
            {
              id: '5_4_q9',
              questionNumber: 3,
              prompt: 'On the same diagram, sketch $y = 2\\cos x$ and $y = \\tan x$ for $0 \\le x \\le 2\\pi$. State the number of solutions to $2\\cos x = \\tan x$ in this interval. [5 marks]',
              hint: 'Count the intersection points carefully across the four quadrants.',
              answer: 'In $[0, 2\\pi]$, the curves intersect at 2 points (one in Q I around $x \\approx 0.67$ rad, and one in Q II around $x \\approx 2.47$ rad). In Q III and Q IV, $\\tan x$ and $2\\cos x$ have opposite signs except where their signs match, but calculations confirm exactly 2 real intersections.',
              marks: 5,
              markingScheme: [
                'B1: Accurate sketch of $y = 2\\cos x$ with amplitude 2 and period $2\\pi$',
                'B1: Accurate sketch of $y = \\tan x$ with asymptotes at $x = \\pi/2, 3\\pi/2$',
                'M1: Identifies intersections on the sketched graphs',
                'A2: Correctly concludes 2 solutions with reasoning',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 5.5 Inverse trigonometric function
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_5',
      number: '5.5',
      title: 'Inverse trigonometric function',
      type: 'lesson',
      steps: [
        {
          id: '5_5_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Restricted Domains for One-to-One Ratios',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Why We Must Restrict the Domain',
              content:
                'Because trig functions are periodic, they fail the horizontal line test—they are many-to-one! To create an inverse function, we must restrict the domain so each output corresponds to exactly ONE input. The calculator uses these exact principal value branches when you press $\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$.',
            },
            {
              type: 'formula_card',
              title: 'Principal Branches & Domains',
              math: '\\begin{array}{l|c|c} \\text{Function} & \\text{Domain} & \\text{Range (Principal Values)} \\\\ \\hline y = \\sin^{-1} x & -1 \\le x \\le 1 & -\\frac{\\pi}{2} \\le y \\le \\frac{\\pi}{2} \\quad (-90^\\circ \\le y \\le 90^\\circ) \\\\ y = \\cos^{-1} x & -1 \\le x \\le 1 & 0 \\le y \\le \\pi \\quad (0^\\circ \\le y \\le 180^\\circ) \\\\ y = \\tan^{-1} x & x \\in \\mathbb{R} & -\\frac{\\pi}{2} < y < \\frac{\\pi}{2} \\quad (-90^\\circ < y < 90^\\circ) \\end{array}',
              content: 'Notice that $\\cos^{-1}(-x) = \\pi - \\cos^{-1}(x)$, whereas $\\sin^{-1}(-x) = -\\sin^{-1}(x)$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Principal Value',
                  definition: 'The unique angle returned by the inverse trigonometric function in its standard restricted range.',
                },
                {
                  term: 'Domain Limitation',
                  definition: '$\\sin^{-1} x$ and $\\cos^{-1} x$ are completely undefined for $|x| > 1$.',
                },
              ],
            },
          ],
        },
        {
          id: '5_5_s2',
          stepNumber: 2,
          title: 'Worked Example: Evaluating Inverse Trig Expressions',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the exact principal value of (i) $\\sin^{-1}\\left(-\\frac{1}{2}\\right)$ and (ii) $\\cos^{-1}\\left(-\\frac{1}{2}\\right)$ in radians',
              content: 'Apply the official principal ranges:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'For $\\sin^{-1}\\left(-\\frac{1}{2}\\right)$, the range is $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$. Since $\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$, the negative input gives $-\\frac{\\pi}{6}$.',
                  math: '\\sin^{-1}\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}',
                },
                {
                  stepNumber: 2,
                  explanation: 'For $\\cos^{-1}\\left(-\\frac{1}{2}\\right)$, the range is $[0, \\pi]$. Cosine is negative in Quadrant II.',
                  math: '\\cos^{-1}\\left(-\\frac{1}{2}\\right) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}',
                },
              ],
            },
          ],
        },
        {
          id: '5_5_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Assuming $\\cos^{-1}(-x) = -\\cos^{-1}(x)$',
              mistake: 'Writing $\\cos^{-1}\\left(-\\frac{1}{2}\\right) = -60^\\circ$ or $-\\frac{\\pi}{3}$.',
              correction: 'The range of $\\cos^{-1}$ is $[0, 180^\\circ]$ (or $[0, \\pi]$). It NEVER produces negative angles! A negative input gives an obtuse angle in Quadrant II: $180^\\circ - 60^\\circ = 120^\\circ$.',
              proTip: 'Remember: $\\sin^{-1}$ and $\\tan^{-1}$ are symmetric about the origin (giving negative acute angles), but $\\cos^{-1}$ stays strictly non-negative.',
            },
          ],
        },
        {
          id: '5_5_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_5_q1',
              questionNumber: 1,
              prompt: 'Find the exact value of $\\tan^{-1}(-1)$ in radians.',
              hint: 'Principal range of $\\tan^{-1}$ is $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.',
              answer: '$-\\frac{\\pi}{4}$',
              marks: 2,
            },
            {
              id: '5_5_q2',
              questionNumber: 2,
              prompt: 'Find the exact value of $\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right)$ in degrees.',
              hint: 'Quadrant II angle whose cosine is $-\\frac{\\sqrt{3}}{2}$.',
              answer: '$180^\\circ - 30^\\circ = 150^\\circ$',
              marks: 2,
            },
            {
              id: '5_5_q3',
              questionNumber: 3,
              prompt: 'Explain why the equation $\\sin^{-1}(x) = 2$ has no real solution.',
              hint: 'What is the maximum value in the range of $\\sin^{-1}(x)$?',
              answer: 'The range of $\\sin^{-1} x$ is $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] \\approx [-1.57, 1.57]$. Since $2 > \\frac{\\pi}{2}$, no such $x$ exists.',
              marks: 2,
            },
          ],
        },
        {
          id: '5_5_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_5_q4',
              questionNumber: 1,
              prompt: 'Evaluate $\\sin\\left(\\cos^{-1}\\left(\\frac{3}{5}\\right)\\right)$ without finding the angle.',
              hint: 'Let $\\theta = \\cos^{-1}(3/5)$. Then $\\cos\\theta = 3/5$ and $\\sin\\theta = \\sqrt{1 - (3/5)^2}$.',
              answer: '$\\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$',
              marks: 3,
            },
            {
              id: '5_5_q5',
              questionNumber: 2,
              prompt: 'Solve the equation $2\\sin^{-1}(x) = \\frac{\\pi}{3}$.',
              hint: 'Divide by 2 to isolate $\\sin^{-1}(x)$.',
              answer: '$\\sin^{-1}(x) = \\frac{\\pi}{6} \\implies x = \\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$',
              marks: 3,
            },
            {
              id: '5_5_q6',
              questionNumber: 3,
              prompt: 'Find the exact value of $\\tan\\left(\\sin^{-1}\\left(-\\frac{5}{13}\\right)\\right)$.',
              hint: 'Let $\\theta = \\sin^{-1}(-5/13) \\in [-\\pi/2, 0]$. Opp $=-5$, Hyp $=13$, Adj $=12$.',
              answer: '$\\tan\\theta = -\\frac{5}{12}$',
              marks: 3,
            },
          ],
        },
        {
          id: '5_5_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_5_q7',
              questionNumber: 1,
              prompt: 'The function $f(x) = 2\\cos^{-1}(1 - 2x)$ is defined on its maximal real domain. (i) State the domain of $f$. (ii) State the range of $f$. (iii) Find $f^{-1}(x)$. [5 marks]',
              hint: 'The argument of $\\cos^{-1}$ must satisfy $-1 \\le 1 - 2x \\le 1$.',
              answer: '(i) $-1 \\le 1 - 2x \\le 1 \\implies -2 \\le -2x \\le 0 \\implies 0 \\le x \\le 1$. (ii) Range: $0 \\le \\cos^{-1} \\le \\pi \\implies 0 \\le f(x) \\le 2\\pi$. (iii) $y = 2\\cos^{-1}(1 - 2x) \\implies \\cos(y/2) = 1 - 2x \\implies f^{-1}(x) = \\frac{1 - \\cos(x/2)}{2}$.',
              marks: 5,
              markingScheme: [
                'M1: Sets $-1 \\le 1 - 2x \\le 1$',
                'A1: Correct domain $0 \\le x \\le 1$',
                'A1: Correct range $[0, 2\\pi]$',
                'M1: Rearranges for $x$ by taking cosine of $y/2$',
                'A1: $f^{-1}(x) = \\frac{1 - \\cos(x/2)}{2}$',
              ],
            },
            {
              id: '5_5_q8',
              questionNumber: 2,
              prompt: 'Evaluate without a calculator: $\\cos\\left(2\\tan^{-1}\\left(\\frac{1}{2}\\right)\\right)$. [4 marks]',
              hint: 'Let $\\alpha = \\tan^{-1}(1/2)$. In a right triangle, opp $= 1$, adj $= 2$, hyp $= \\sqrt{5}$. Use $\\cos(2\\alpha) = 2\\cos^2\\alpha - 1$ or $\\cos^2\\alpha - \\sin^2\\alpha$.',
              answer: '$\\cos\\alpha = \\frac{2}{\\sqrt{5}}, \\sin\\alpha = \\frac{1}{\\sqrt{5}}$. $\\cos(2\\alpha) = \\cos^2\\alpha - \\sin^2\\alpha = \\frac{4}{5} - \\frac{1}{5} = \\frac{3}{5}$.',
              marks: 4,
              markingScheme: [
                'B1: Sets $\\alpha = \\tan^{-1}(1/2)$ and draws/states right triangle sides $1, 2, \\sqrt{5}$',
                'B1: $\\cos\\alpha = \\frac{2}{\\sqrt{5}}$ and $\\sin\\alpha = \\frac{1}{\\sqrt{5}}$',
                'M1: Uses double angle or right triangle identity',
                'A1: Correct exact value $\\frac{3}{5}$',
              ],
            },
            {
              id: '5_5_q9',
              questionNumber: 3,
              prompt: 'Solve the equation $\\tan^{-1}(x) + \\tan^{-1}(2x) = \\frac{\\pi}{4}$ where $x > 0$. [5 marks]',
              hint: 'Take the tangent of both sides: $\\frac{x + 2x}{1 - x(2x)} = \\tan(\\pi/4) = 1$.',
              answer: '$\\frac{3x}{1 - 2x^2} = 1 \\implies 3x = 1 - 2x^2 \\implies 2x^2 + 3x - 1 = 0$. By quadratic formula: $x = \\frac{-3 \\pm \\sqrt{9 - 4(2)(-1)}}{4} = \\frac{-3 \\pm \\sqrt{17}}{4}$. Since $x > 0$, $x = \\frac{\\sqrt{17} - 3}{4} \\approx 0.281$.',
              marks: 5,
              markingScheme: [
                'M1: Applies compound angle identity for tangent',
                'M1: Equates to $\\tan(\\pi/4) = 1$',
                'A1: Obtains $2x^2 + 3x - 1 = 0$',
                'M1: Solves quadratic correctly',
                'A1: Selects positive root $x = \\frac{\\sqrt{17} - 3}{4}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 5.6 Trigonometric equations
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_6',
      number: '5.6',
      title: 'Trigonometric equations',
      type: 'lesson',
      steps: [
        {
          id: '5_6_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: The 4-Step Systematic Protocol',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Finding Every Needle in the Haystack',
              content:
                'Because trig functions repeat infinitely, a horizontal line $y = k$ cuts the curve many times! To find ALL solutions in an interval without missing any, always use the bulletproof 4-step protocol: (1) Find basic angle $\\alpha = \\sin^{-1}(|k|)$ using POSITIVE $|k|$; (2) Identify the two quadrants using the sign of $k$; (3) Read off all answers within the transformed domain; (4) Solve for $x$ at the very end.',
            },
            {
              type: 'formula_card',
              title: 'Standard Interval Formulas ($0^\\circ \\le \\theta \\le 360^\\circ$)',
              math: '\\begin{aligned} \\sin\\theta = k &\\implies \\theta = \\alpha \\quad \\text{and} \\quad 180^\\circ - \\alpha \\quad (\\text{if } k > 0) \\\\ \\cos\\theta = k &\\implies \\theta = \\alpha \\quad \\text{and} \\quad 360^\\circ - \\alpha \\quad (\\text{if } k > 0) \\\\ \\tan\\theta = k &\\implies \\theta = \\alpha \\quad \\text{and} \\quad 180^\\circ + \\alpha \\quad (\\text{if } k > 0) \\\\ \\text{For } k < 0, &\\text{ use the remaining two quadrants from the CAST diagram!} \\end{aligned}',
              content: 'If the angle inside is compound (e.g. $2x - 30^\\circ$), transform the domain FIRST before finding values.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Basic Acute Angle $\\alpha$',
                  definition: 'Always computed with a positive argument: $\\alpha = \\sin^{-1}(|k|)$.',
                },
                {
                  term: 'Transformed Domain',
                  definition: 'If $0^\\circ \\le x \\le 360^\\circ$, then $2x$ has interval $0^\\circ \\le 2x \\le 720^\\circ$.',
                },
              ],
            },
          ],
        },
        {
          id: '5_6_s2',
          stepNumber: 2,
          title: 'Worked Example: Solving $\\cos(2x) = -\\frac{1}{2}$',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Solve $\\cos(2x) = -\\frac{1}{2}$ for $0^\\circ \\le x \\le 360^\\circ$',
              content: 'Full Cambridge working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Transform the domain for the angle $\\theta = 2x$: if $0^\\circ \\le x \\le 360^\\circ$, then $0^\\circ \\le 2x \\le 720^\\circ$.',
                  math: '0^\\circ \\le 2x \\le 720^\\circ',
                },
                {
                  stepNumber: 2,
                  explanation: 'Find basic angle $\\alpha$ using the positive argument $|-1/2| = 1/2$.',
                  math: '\\alpha = \\cos^{-1}\\left(\\frac{1}{2}\\right) = 60^\\circ',
                },
                {
                  stepNumber: 3,
                  explanation: 'Cosine is negative, so $2x$ must lie in Quadrants II and III. Find solutions in $0^\\circ \\le 2x \\le 360^\\circ$ and add $360^\\circ$ for the second revolution.',
                  math: '2x = 180^\\circ - 60^\\circ = 120^\\circ, \\quad 180^\\circ + 60^\\circ = 240^\\circ\\\\ \\text{Second lap: } 120^\\circ + 360^\\circ = 480^\\circ, \\quad 240^\\circ + 360^\\circ = 600^\\circ',
                },
                {
                  stepNumber: 4,
                  explanation: 'Divide all values of $2x$ by 2 to solve for $x$.',
                  math: 'x = 60^\\circ, \\; 120^\\circ, \\; 240^\\circ, \\; 300^\\circ',
                },
              ],
            },
          ],
        },
        {
          id: '5_6_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Dividing by 2 Too Early',
              mistake: 'Dividing $120^\\circ$ and $240^\\circ$ by 2 to get $60^\\circ$ and $120^\\circ$, and then missing the other two solutions $240^\\circ$ and $300^\\circ$!',
              correction: 'ALWAYS find all solutions for the entire transformed angle ($2x$) across its complete domain $[0^\\circ, 720^\\circ]$ BEFORE dividing by 2!',
              proTip: 'If the angle inside is multiplied by $n$, you must expect roughly $2n$ solutions across a $360^\\circ$ range.',
            },
          ],
        },
        {
          id: '5_6_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_6_q1',
              questionNumber: 1,
              prompt: 'Solve $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ for $0^\\circ \\le \\theta \\le 360^\\circ$.',
              hint: '$\\alpha = 60^\\circ$. Sine is positive in Q I and Q II.',
              answer: '$\\theta = 60^\\circ, 120^\\circ$',
              marks: 2,
            },
            {
              id: '5_6_q2',
              questionNumber: 2,
              prompt: 'Solve $\\tan x = -1$ for $0^\\circ \\le x \\le 360^\\circ$.',
              hint: '$\\alpha = 45^\\circ$. Tangent is negative in Q II and Q IV.',
              answer: '$x = 180^\\circ - 45^\\circ = 135^\\circ, \\quad 360^\\circ - 45^\\circ = 315^\\circ$',
              marks: 2,
            },
            {
              id: '5_6_q3',
              questionNumber: 3,
              prompt: 'Solve $\\cos\\theta = -0.5$ for $-180^\\circ \\le \\theta \\le 180^\\circ$.',
              hint: '$\\alpha = 60^\\circ$. Cosine is negative in Q II and Q III.',
              answer: '$\\theta = 180^\\circ - 60^\\circ = 120^\\circ, \\quad -(180^\\circ - 60^\\circ) = -120^\\circ$',
              marks: 3,
            },
          ],
        },
        {
          id: '5_6_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_6_q4',
              questionNumber: 1,
              prompt: 'Solve $\\sin(2x - 20^\\circ) = 0.5$ for $0^\\circ \\le x \\le 180^\\circ$.',
              hint: 'Domain for $\\phi = 2x - 20^\\circ$: $-20^\\circ \\le \\phi \\le 340^\\circ$. Basic angle is $30^\\circ$.',
              answer: '$\\phi = 30^\\circ, 150^\\circ \\implies 2x = 50^\\circ, 170^\\circ \\implies x = 25^\\circ, 85^\\circ$',
              marks: 4,
            },
            {
              id: '5_6_q5',
              questionNumber: 2,
              prompt: 'Solve $3\\tan^2\\theta = 1$ for $0 \\le \\theta \\le 2\\pi$. Give answers in terms of $\\pi$.',
              hint: '$\\tan\\theta = \\pm\\frac{1}{\\sqrt{3}}$. Basic angle is $\\frac{\\pi}{6}$. Solutions in all 4 quadrants.',
              answer: '$\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$',
              marks: 4,
            },
            {
              id: '5_6_q6',
              questionNumber: 3,
              prompt: 'Solve $2\\cos(3x) = 1$ for $0^\\circ \\le x \\le 180^\\circ$.',
              hint: '$\\cos(3x) = 0.5$. Range for $3x$ is $0^\\circ \\le 3x \\le 540^\\circ$. Basic angle $60^\\circ$.',
              answer: '$3x = 60^\\circ, 300^\\circ, 420^\\circ \\implies x = 20^\\circ, 100^\\circ, 140^\\circ$',
              marks: 4,
            },
          ],
        },
        {
          id: '5_6_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_6_q7',
              questionNumber: 1,
              prompt: 'Solve the equation $5\\sin(2x + 1) = -3$ for $0 \\le x \\le \\pi$ radians. Give answers to 3 decimal places. [5 marks]',
              hint: 'Angle is in radians. $\\sin(2x + 1) = -0.6$. Interval for $2x + 1$ is $1 \\le 2x + 1 \\le 2\\pi + 1 \\approx 7.283$.',
              answer: 'Basic angle $\\alpha = \\sin^{-1}(0.6) \\approx 0.6435$ rad. Sine is negative: Q III and Q IV. $2x + 1 = \\pi + 0.6435 = 3.7851$, and $2\\pi - 0.6435 = 5.6397$. Subtract 1: $2x = 2.7851, 4.6397 \\implies x = 1.393, 2.320$.',
              marks: 5,
              markingScheme: [
                'B1: Basic angle $\\alpha = 0.6435$ rad',
                'M1: Correct quadrant addition $\\pi + \\alpha$ and $2\\pi - \\alpha$',
                'A1: $2x + 1 = 3.785, 5.640$',
                'M1: Correctly subtracts 1 and divides by 2',
                'A1: $x = 1.393$ and $x = 2.320$ (accept 3 sig figs / 3 d.p.)',
              ],
            },
            {
              id: '5_6_q8',
              questionNumber: 2,
              prompt: 'Solve $\\tan\\left(\\frac{1}{2}x + 40^\\circ\\right) = \\sqrt{3}$ for $0^\\circ \\le x \\le 360^\\circ$. [4 marks]',
              hint: 'Transformed interval: $40^\\circ \\le \\frac{1}{2}x + 40^\\circ \\le 220^\\circ$. Basic angle is $60^\\circ$.',
              answer: '$\\frac{1}{2}x + 40^\\circ = 60^\\circ, 60^\\circ + 180^\\circ = 240^\\circ$ (out of range). $\\frac{1}{2}x + 40^\\circ = 60^\\circ \\implies \\frac{1}{2}x = 20^\\circ \\implies x = 40^\\circ$.',
              marks: 4,
              markingScheme: [
                'B1: Reference angle $60^\\circ$',
                'M1: Range check $40^\\circ \\le \\theta \\le 220^\\circ$',
                'M1: $\\frac{1}{2}x = 60^\\circ - 40^\\circ = 20^\\circ$',
                'A1: $x = 40^\\circ$',
              ],
            },
            {
              id: '5_6_q9',
              questionNumber: 3,
              prompt: 'Find all solutions of $4\\cos^2 x - 3 = 0$ in the interval $0 \\le x \\le 2\\pi$. [4 marks]',
              hint: '$\\cos^2 x = \\frac{3}{4} \\implies \\cos x = \\pm\\frac{\\sqrt{3}}{2}$.',
              answer: 'Basic angle $\\alpha = \\frac{\\pi}{6}$. Solutions in all 4 quadrants: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.',
              marks: 4,
              markingScheme: [
                'M1: $\\cos x = \\pm\\frac{\\sqrt{3}}{2}$ (must include $\\pm$)',
                'B1: Basic angle $\\frac{\\pi}{6}$',
                'A1: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$',
                'A1: $x = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 5.7 Trigonometric identities
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_7',
      number: '5.7',
      title: 'Trigonometric identities',
      type: 'lesson',
      steps: [
        {
          id: '5_7_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: The Two Pure 1 Pillars',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Pythagoras on the Unit Circle',
              content:
                'In Cambridge Pure 1, all identity proofs and equation simplifications rest upon two pillars: (1) Pythagoras applied to the unit circle: $x^2 + y^2 = 1 \\implies \\cos^2\\theta + \\sin^2\\theta = 1$; and (2) The definition of tangent: $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$. These allow you to convert expressions between sine and cosine at will, or collapse mixed ratios into a single solvable tangent.',
            },
            {
              type: 'formula_card',
              title: 'The Core Pure 1 Identities',
              math: '\\begin{aligned} \\tan\\theta &\\equiv \\frac{\\sin\\theta}{\\cos\\theta} \\\\ \\sin^2\\theta + \\cos^2\\theta &\\equiv 1 \\\\ \\implies \\sin^2\\theta &\\equiv 1 - \\cos^2\\theta \\\\ \\implies \\cos^2\\theta &\\equiv 1 - \\sin^2\\theta \\end{aligned}',
              content: 'Notice the equivalence symbol $\\equiv$: these hold true for ALL angles $\\theta$ (where defined), not just for specific solutions.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Identity ($\\equiv$)',
                  definition: 'An equation that is valid for all values of the variable.',
                },
                {
                  term: 'LHS $\\to$ RHS Proof Strategy',
                  definition: 'Start strictly on one side (usually the more complicated side) and manipulate step-by-step to reach the other side.',
                },
              ],
            },
          ],
        },
        {
          id: '5_7_s2',
          stepNumber: 2,
          title: 'Worked Example: Proving a Fractional Identity',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Prove the identity $\\frac{1}{\\cos\\theta} - \\frac{\\cos\\theta}{1 + \\sin\\theta} \\equiv \\tan\\theta$',
              content: 'Step-by-step algebraic manipulation of the LHS:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find a common denominator: $\\cos\\theta(1 + \\sin\\theta)$.',
                  math: '\\text{LHS} = \\frac{1(1 + \\sin\\theta) - \\cos\\theta(\\cos\\theta)}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{1 + \\sin\\theta - \\cos^2\\theta}{\\cos\\theta(1 + \\sin\\theta)}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Replace $1 - \\cos^2\\theta$ with $\\sin^2\\theta$ using the Pythagorean identity.',
                  math: '= \\frac{(1 - \\cos^2\\theta) + \\sin\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{\\sin^2\\theta + \\sin\\theta}{\\cos\\theta(1 + \\sin\\theta)}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Factor out $\\sin\\theta$ in the numerator and cancel the common factor $(1 + \\sin\\theta)$.',
                  math: '= \\frac{\\sin\\theta(\\sin\\theta + 1)}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta = \\text{RHS}',
                },
              ],
            },
          ],
        },
        {
          id: '5_7_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Treating an Identity Proof like an Equation',
              mistake: 'Cross-multiplying across the equals sign: e.g. writing $\\text{LHS} = \\text{RHS}$, moving terms from left to right, and concluding "$0 = 0$".',
              correction: 'Examiners award zero marks for moving terms across the equals sign during an identity proof! You must begin strictly with one side (LHS) and transform it algebraically until it equals the RHS.',
              proTip: 'Whenever you see $1 - \\sin^2\\theta$ or $1 - \\cos^2\\theta$, immediately think of difference of two squares: $(1 - \\sin\\theta)(1 + \\sin\\theta)$. It factors out in almost every Cambridge question!',
            },
          ],
        },
        {
          id: '5_7_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_7_q1',
              questionNumber: 1,
              prompt: 'Simplify $(1 - \\cos\\theta)(1 + \\cos\\theta)$ to a single trigonometric term.',
              hint: 'Difference of two squares: $1 - \\cos^2\\theta$.',
              answer: '$1 - \\cos^2\\theta = \\sin^2\\theta$',
              marks: 2,
            },
            {
              id: '5_7_q2',
              questionNumber: 2,
              prompt: 'Express $\\frac{\\tan\\theta}{\\sin\\theta}$ in terms of $\\cos\\theta$ only.',
              hint: 'Replace $\\tan\\theta$ with $\\frac{\\sin\\theta}{\\cos\\theta}$.',
              answer: '$\\frac{\\sin\\theta/\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\cos\\theta}$',
              marks: 2,
            },
            {
              id: '5_7_q3',
              questionNumber: 3,
              prompt: 'Show that $\\cos^4\\theta - \\sin^4\\theta \\equiv \\cos^2\\theta - \\sin^2\\theta$.',
              hint: 'Factor as difference of squares: $(\\cos^2\\theta - \\sin^2\\theta)(\\cos^2\\theta + \\sin^2\\theta)$.',
              answer: '$(\\cos^2\\theta - \\sin^2\\theta)(\\cos^2\\theta + \\sin^2\\theta) = (\\cos^2\\theta - \\sin^2\\theta)(1) = \\cos^2\\theta - \\sin^2\\theta$',
              marks: 3,
            },
          ],
        },
        {
          id: '5_7_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_7_q4',
              questionNumber: 1,
              prompt: 'Prove the identity $(\\sin\\theta + \\cos\\theta)^2 + (\\sin\\theta - \\cos\\theta)^2 \\equiv 2$.',
              hint: 'Expand both brackets and watch the cross terms $+2\\sin\\theta\\cos\\theta$ and $-2\\sin\\theta\\cos\\theta$ cancel.',
              answer: '$(\\sin^2\\theta + 2\\sin\\theta\\cos\\theta + \\cos^2\\theta) + (\\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta) = 2(\\sin^2\\theta + \\cos^2\\theta) = 2(1) = 2$',
              marks: 3,
            },
            {
              id: '5_7_q5',
              questionNumber: 2,
              prompt: 'Prove the identity $\\tan\\theta + \\frac{1}{\\tan\\theta} \\equiv \\frac{1}{\\sin\\theta\\cos\\theta}$.',
              hint: 'Replace $\\tan\\theta$ by $\\frac{\\sin\\theta}{\\cos\\theta}$ and $\\frac{1}{\\tan\\theta}$ by $\\frac{\\cos\\theta}{\\sin\\theta}$.',
              answer: '$\\frac{\\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{\\sin^2\\theta + \\cos^2\\theta}{\\sin\\theta\\cos\\theta} = \\frac{1}{\\sin\\theta\\cos\\theta}$',
              marks: 4,
            },
            {
              id: '5_7_q6',
              questionNumber: 3,
              prompt: 'Show that $\\frac{1}{1 - \\sin\\theta} + \\frac{1}{1 + \\sin\\theta} \\equiv \\frac{2}{\\cos^2\\theta}$.',
              hint: 'Common denominator is $(1 - \\sin\\theta)(1 + \\sin\\theta) = 1 - \\sin^2\\theta = \\cos^2\\theta$.',
              answer: '$\\frac{(1 + \\sin\\theta) + (1 - \\sin\\theta)}{1 - \\sin^2\\theta} = \\frac{2}{\\cos^2\\theta}$',
              marks: 3,
            },
          ],
        },
        {
          id: '5_7_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_7_q7',
              questionNumber: 1,
              prompt: 'Prove the identity $\\frac{\\sin\\theta}{1 - \\cos\\theta} - \\frac{1 + \\cos\\theta}{\\sin\\theta} \\equiv 0$. [4 marks]',
              hint: 'Put over a common denominator $\\sin\\theta(1 - \\cos\\theta)$.',
              answer: '$\\text{LHS} = \\frac{\\sin^2\\theta - (1 + \\cos\\theta)(1 - \\cos\\theta)}{\\sin\\theta(1 - \\cos\\theta)} = \\frac{\\sin^2\\theta - (1 - \\cos^2\\theta)}{\\sin\\theta(1 - \\cos\\theta)} = \\frac{\\sin^2\\theta - \\sin^2\\theta}{\\sin\\theta(1 - \\cos\\theta)} = \\frac{0}{\\dots} = 0 = \\text{RHS}$.',
              marks: 4,
              markingScheme: [
                'M1: Puts fractions over common denominator $\\sin\\theta(1 - \\cos\\theta)$',
                'M1: Expands $(1 + \\cos\\theta)(1 - \\cos\\theta)$ as $1 - \\cos^2\\theta$',
                'A1: Replaces $1 - \\cos^2\\theta$ with $\\sin^2\\theta$',
                'A1: Concludes with 0 correctly',
              ],
            },
            {
              id: '5_7_q8',
              questionNumber: 2,
              prompt: '(i) Prove the identity $\\frac{\\tan\\theta \\sin\\theta}{1 - \\cos\\theta} \\equiv 1 + \\frac{1}{\\cos\\theta}$. (ii) Hence solve the equation $\\frac{\\tan\\theta \\sin\\theta}{1 - \\cos\\theta} = 4$ for $0^\\circ \\le \\theta \\le 360^\\circ$. [6 marks]',
              hint: 'In (i), replace $\\tan\\theta$ with $\\sin\\theta/\\cos\\theta$, so numerator is $\\sin^2\\theta/\\cos\\theta = (1 - \\cos^2\\theta)/\\cos\\theta$. In (ii), $1 + 1/\\cos\\theta = 4 \\implies \\cos\\theta = 1/3$.',
              answer: '(i) $\\text{LHS} = \\frac{\\frac{\\sin\\theta}{\\cos\\theta}\\sin\\theta}{1 - \\cos\\theta} = \\frac{1 - \\cos^2\\theta}{\\cos\\theta(1 - \\cos\\theta)} = \\frac{(1 - \\cos\\theta)(1 + \\cos\\theta)}{\\cos\\theta(1 - \\cos\\theta)} = \\frac{1 + \\cos\\theta}{\\cos\\theta} = 1 + \\frac{1}{\\cos\\theta}$. (ii) $1 + \\frac{1}{\\cos\\theta} = 4 \\implies \\frac{1}{\\cos\\theta} = 3 \\implies \\cos\\theta = \\frac{1}{3}$. Basic angle $\\alpha = 70.5^\\circ$. Q I: $70.5^\\circ$, Q IV: $360^\\circ - 70.5^\\circ = 289.5^\\circ$.',
              marks: 6,
              markingScheme: [
                'M1: Replaces $\\tan\\theta$ by $\\sin\\theta/\\cos\\theta$',
                'M1: Uses $\\sin^2\\theta = (1 - \\cos\\theta)(1 + \\cos\\theta)$',
                'A1: Completes proof of (i) clearly',
                'M1: Equates $1 + 1/\\cos\\theta = 4$ to obtain $\\cos\\theta = 1/3$',
                'A1: $\\theta = 70.5^\\circ$',
                'A1: $\\theta = 289.5^\\circ$',
              ],
            },
            {
              id: '5_7_q9',
              questionNumber: 3,
              prompt: 'Show that $\\frac{\\cos\\theta}{1 - \\tan\\theta} + \\frac{\\sin\\theta}{1 - \\frac{1}{\\tan\\theta}} \\equiv \\cos\\theta + \\sin\\theta$. [4 marks]',
              hint: 'Express all tangents as $\\sin\\theta/\\cos\\theta$.',
              answer: '$\\frac{\\cos\\theta}{\\frac{\\cos\\theta - \\sin\\theta}{\\cos\\theta}} + \\frac{\\sin\\theta}{\\frac{\\sin\\theta - \\cos\\theta}{\\sin\\theta}} = \\frac{\\cos^2\\theta}{\\cos\\theta - \\sin\\theta} + \\frac{\\sin^2\\theta}{\\sin\\theta - \\cos\\theta} = \\frac{\\cos^2\\theta - \\sin^2\\theta}{\\cos\\theta - \\sin\\theta} = \\frac{(\\cos\\theta - \\sin\\theta)(\\cos\\theta + \\sin\\theta)}{\\cos\\theta - \\sin\\theta} = \\cos\\theta + \\sin\\theta$.',
              marks: 4,
              markingScheme: [
                'M1: Converts $\\tan\\theta$ to $\\sin\\theta/\\cos\\theta$ in denominators',
                'M1: Combines into single fraction with common denominator $(\\cos\\theta - \\sin\\theta)$',
                'M1: Factors numerator using difference of two squares',
                'A1: Successfully reaches $\\cos\\theta + \\sin\\theta$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 5.8 Further trigonometric equations
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_8',
      number: '5.8',
      title: 'Further trigonometric equations',
      type: 'lesson',
      steps: [
        {
          id: '5_8_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Hidden Quadratics in Sine and Cosine',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Transforming Mixed Equations into Quadratics',
              content:
                'Many exam equations mix $\\sin^2 x$ with $\\cos x$, or contain $\\sin x = k\\cos x$. To solve them, use identity substitutions to produce a single ratio throughout: replace $\\sin^2 x$ with $1 - \\cos^2 x$ to get a quadratic in $\\cos x$, or divide both sides by $\\cos x$ to obtain $\\tan x = k$. Then solve the quadratic and find all angles in range.',
            },
            {
              type: 'formula_card',
              title: 'Standard Transformation Patterns',
              math: '\\begin{aligned} a\\sin x = b\\cos x &\\iff \\tan x = \\frac{b}{a} \\quad (\\cos x \\ne 0) \\\\ a\\sin^2 x + b\\cos x + c = 0 &\\iff a(1 - \\cos^2 x) + b\\cos x + c = 0 \\\\ a\\cos^2 x + b\\sin x + c = 0 &\\iff a(1 - \\sin^2 x) + b\\sin x + c = 0 \\end{aligned}',
              content: 'Always check if any quadratic roots lie outside $[-1, 1]$: e.g. $\\cos x = 2.5$ yields no real solutions and must be discarded!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Hidden Quadratic in $\\cos x$',
                  definition: 'An equation of form $A\\cos^2 x + B\\cos x + C = 0$, solved by letting $u = \\cos x$.',
                },
                {
                  term: 'Extraneous / Invalid Root',
                  definition: 'Values of $\\sin x$ or $\\cos x$ outside $[-1, 1]$ which must be explicitly rejected.',
                },
              ],
            },
          ],
        },
        {
          id: '5_8_s2',
          stepNumber: 2,
          title: 'Worked Example: Solving $2\\sin^2 x - 3\\cos x = 0$',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Solve $2\\sin^2 x - 3\\cos x = 0$ for $0^\\circ \\le x \\le 360^\\circ$',
              content: 'Converting to a quadratic in $\\cos x$:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Substitute $\\sin^2 x = 1 - \\cos^2 x$ to write the equation purely in $\\cos x$.',
                  math: '2(1 - \\cos^2 x) - 3\\cos x = 0 \\implies 2 - 2\\cos^2 x - 3\\cos x = 0',
                },
                {
                  stepNumber: 2,
                  explanation: 'Rearrange to make the quadratic term positive: $2\\cos^2 x + 3\\cos x - 2 = 0$.',
                  math: '(2\\cos x - 1)(\\cos x + 2) = 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Set each factor to zero and test validity.',
                  math: '\\cos x = \\frac{1}{2} \\quad \\text{or} \\quad \\cos x = -2 \\text{ (no solution since } -2 < -1)',
                },
                {
                  stepNumber: 4,
                  explanation: 'Solve $\\cos x = \\frac{1}{2}$ for $0^\\circ \\le x \\le 360^\\circ$ (Q I and Q IV).',
                  math: 'x = 60^\\circ \\quad \\text{and} \\quad x = 360^\\circ - 60^\\circ = 300^\\circ',
                },
              ],
            },
          ],
        },
        {
          id: '5_8_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Cancelling Out $\\sin x$ or $\\cos x$',
              mistake: 'Given $\\sin x \\cos x = \\sin x$, dividing both sides by $\\sin x$ to get $\\cos x = 1$.',
              correction: 'NEVER divide by a trig function that can equal zero—you lose an entire set of solutions! Instead, factorise: $\\sin x(\\cos x - 1) = 0 \\implies \\sin x = 0$ or $\\cos x = 1$.',
              proTip: 'Always write "no solution for $\\cos x = -2$" on your exam paper. Examiners specifically check that you addressed and rejected the invalid root.',
            },
          ],
        },
        {
          id: '5_8_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '5_8_q1',
              questionNumber: 1,
              prompt: 'Solve $3\\sin x = 2\\cos x$ for $0^\\circ \\le x \\le 360^\\circ$. Give answers to 1 decimal place.',
              hint: 'Divide by $\\cos x$ to get $\\tan x = \\frac{2}{3}$.',
              answer: '$\\tan x = \\frac{2}{3} \\implies x = 33.7^\\circ, 213.7^\\circ$',
              marks: 3,
            },
            {
              id: '5_8_q2',
              questionNumber: 2,
              prompt: 'Solve $\\sin\\theta \\cos\\theta - 2\\sin\\theta = 0$ for $0^\\circ \\le \\theta \\le 360^\\circ$.',
              hint: 'Factor out $\\sin\\theta$: $\\sin\\theta(\\cos\\theta - 2) = 0$.',
              answer: '$\\sin\\theta = 0 \\implies \\theta = 0^\\circ, 180^\\circ, 360^\\circ$. ($\\cos\\theta = 2$ has no solutions).',
              marks: 3,
            },
            {
              id: '5_8_q3',
              questionNumber: 3,
              prompt: 'Solve $2\\cos^2 x + \\cos x - 1 = 0$ for $0 \\le x \\le 2\\pi$.',
              hint: 'Factor as $(2\\cos x - 1)(\\cos x + 1) = 0$.',
              answer: '$\\cos x = 1/2 \\implies x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$. $\\cos x = -1 \\implies x = \\pi$.',
              marks: 3,
            },
          ],
        },
        {
          id: '5_8_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '5_8_q4',
              questionNumber: 1,
              prompt: 'Solve $6\\cos^2\\theta - \\sin\\theta - 5 = 0$ for $0^\\circ \\le \\theta \\le 360^\\circ$.',
              hint: 'Replace $\\cos^2\\theta$ with $1 - \\sin^2\\theta$: $6(1 - \\sin^2\\theta) - \\sin\\theta - 5 = 0$.',
              answer: '$6\\sin^2\\theta + \\sin\\theta - 1 = 0 \\implies (3\\sin\\theta - 1)(2\\sin\\theta + 1) = 0$. $\\sin\\theta = 1/3 \\implies \\theta = 19.5^\\circ, 160.5^\\circ$. $\\sin\\theta = -1/2 \\implies \\theta = 210^\\circ, 330^\\circ$.',
              marks: 4,
            },
            {
              id: '5_8_q5',
              questionNumber: 2,
              prompt: 'Solve the equation $4\\tan\\theta = 3\\cos\\theta$ for $0^\\circ \\le \\theta \\le 360^\\circ$.',
              hint: 'Multiply by $\\cos\\theta$: $4\\sin\\theta = 3\\cos^2\\theta = 3(1 - \\sin^2\\theta)$.',
              answer: '$3\\sin^2\\theta + 4\\sin\\theta - 3 = 0$. By formula: $\\sin\\theta = \\frac{-4 \\pm \\sqrt{16 - 4(3)(-3)}}{6} = \\frac{-4 \\pm \\sqrt{52}}{6}$. Valid root: $\\sin\\theta \\approx 0.5352 \\implies \\theta = 32.4^\\circ, 147.6^\\circ$.',
              marks: 4,
            },
            {
              id: '5_8_q6',
              questionNumber: 3,
              prompt: 'Solve $2\\sin^2(2x) = 1$ for $0^\\circ \\le x \\le 180^\\circ$.',
              hint: '$\\sin^2(2x) = 1/2 \\implies \\sin(2x) = \\pm\\frac{1}{\\sqrt{2}}$. Range for $2x$ is $0^\\circ \\le 2x \\le 360^\\circ$.',
              answer: '$2x = 45^\\circ, 135^\\circ, 225^\\circ, 315^\\circ \\implies x = 22.5^\\circ, 67.5^\\circ, 112.5^\\circ, 157.5^\\circ$',
              marks: 4,
            },
          ],
        },
        {
          id: '5_8_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '5_8_q7',
              questionNumber: 1,
              prompt: 'Solve the equation $3\\cos\\theta = 2\\tan\\theta$ for $0^\\circ \\le \\theta \\le 360^\\circ$. [5 marks]',
              hint: 'Replace $\\tan\\theta$ with $\\frac{\\sin\\theta}{\\cos\\theta}$ and multiply by $\\cos\\theta$ to get $3\\cos^2\\theta = 2\\sin\\theta$.',
              answer: '$3(1 - \\sin^2\\theta) = 2\\sin\\theta \\implies 3\\sin^2\\theta + 2\\sin\\theta - 3 = 0$. $\\sin\\theta = \\frac{-2 \\pm \\sqrt{4 - 4(3)(-3)}}{6} = \\frac{-2 \\pm \\sqrt{40}}{6}$. Valid: $\\sin\\theta = \\frac{-2 + \\sqrt{40}}{6} \\approx 0.7208$. Basic angle $\\alpha = 46.1^\\circ$. Solutions: $\\theta = 46.1^\\circ, 133.9^\\circ$.',
              marks: 5,
              markingScheme: [
                'M1: Replaces $\\tan\\theta$ with $\\sin\\theta/\\cos\\theta$ and clears fractions',
                'M1: Substitutes $\\cos^2\\theta = 1 - \\sin^2\\theta$',
                'A1: Correct quadratic $3\\sin^2\\theta + 2\\sin\\theta - 3 = 0$',
                'M1: Solves quadratic and rejects negative invalid root',
                'A1: $\\theta = 46.1^\\circ$ and $\\theta = 133.9^\\circ$',
              ],
            },
            {
              id: '5_8_q8',
              questionNumber: 2,
              prompt: '(i) Show that the equation $5\\sin^2 x = 7\\cos x - 1$ can be written as $5\\cos^2 x + 7\\cos x - 6 = 0$. (ii) Hence solve $5\\sin^2 x = 7\\cos x - 1$ for $0 \\le x \\le 2\\pi$. [5 marks]',
              hint: 'In (i), replace $\\sin^2 x$ by $1 - \\cos^2 x$. In (ii), factor the quadratic.',
              answer: '(i) $5(1 - \\cos^2 x) = 7\\cos x - 1 \\implies 5 - 5\\cos^2 x = 7\\cos x - 1 \\implies 5\\cos^2 x + 7\\cos x - 6 = 0$. (ii) $(5\\cos x - 3)(\\cos x + 2) = 0$. $\\cos x = 3/5$ (or $\\cos x = -2$ impossible). Basic angle $\\alpha = \\cos^{-1}(0.6) \\approx 0.927$ rad. Q I: $0.927$, Q IV: $2\\pi - 0.927 = 5.36$ rad.',
              marks: 5,
              markingScheme: [
                'M1: Substitutes $\\sin^2 x = 1 - \\cos^2 x$',
                'A1: Correctly establishes $5\\cos^2 x + 7\\cos x - 6 = 0$',
                'M1: Factors as $(5\\cos x - 3)(\\cos x + 2) = 0$ and notes $\\cos x = -2$ has no solutions',
                'A1: $x = 0.927$ rad',
                'A1: $x = 5.36$ rad',
              ],
            },
            {
              id: '5_8_q9',
              questionNumber: 3,
              prompt: 'Solve the equation $2\\tan^2\\theta - 5\\tan\\theta - 3 = 0$ for $0^\\circ \\le \\theta \\le 360^\\circ$. [5 marks]',
              hint: 'Factor as $(2\\tan\\theta + 1)(\\tan\\theta - 3) = 0$. Remember tangent can take ANY real value!',
              answer: 'Factorization: $(2\\tan\\theta + 1)(\\tan\\theta - 3) = 0$.\nCase 1: $\\tan\\theta = 3 \\implies \\alpha = 71.6^\\circ$. Q I: $71.6^\\circ$, Q III: $180^\\circ + 71.6^\\circ = 251.6^\\circ$.\nCase 2: $\\tan\\theta = -0.5 \\implies \\alpha = 26.6^\\circ$. Q II: $180^\\circ - 26.6^\\circ = 153.4^\\circ$, Q IV: $360^\\circ - 26.6^\\circ = 333.4^\\circ$.',
              marks: 5,
              markingScheme: [
                'M1: Factors quadratic in $\\tan\\theta$',
                'A1: Obtains $\\tan\\theta = 3$ and $\\tan\\theta = -0.5$',
                'M1: Finds basic angles $71.6^\\circ$ and $26.6^\\circ$',
                'A1: Angles for $\\tan\\theta = 3$: $71.6^\\circ, 251.6^\\circ$',
                'A1: Angles for $\\tan\\theta = -0.5$: $153.4^\\circ, 333.4^\\circ$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit 5 Test
    // ------------------------------------------------------------------------
    {
      id: 'sub_5_test',
      number: 'Unit Test',
      title: 'Unit 5 Test: Trigonometry',
      type: 'unitTest',
      steps: [
        {
          id: '5_test_s1',
          stepNumber: 1,
          title: 'Test Part A: Fundamentals & Exact Values',
          type: 'exercise_l1',
          badge: 'Unit Test: Part A',
          practiceQuestions: [
            {
              id: '5_t_q1',
              questionNumber: 1,
              prompt: 'Find the exact value of $\\sin\\left(\\frac{5\\pi}{4}\\right) \\tan\\left(\\frac{2\\pi}{3}\\right)$. [3 marks]',
              hint: '$\\frac{5\\pi}{4}$ is in Q III ($\\sin$ is negative). $\\frac{2\\pi}{3}$ is in Q II ($\\tan$ is negative).',
              answer: '$\\sin(5\\pi/4) = -\\frac{1}{\\sqrt{2}}$, $\\tan(2\\pi/3) = -\\sqrt{3}$. Product is $\\left(-\\frac{1}{\\sqrt{2}}\\right)(-\\sqrt{3}) = \\frac{\\sqrt{3}}{\\sqrt{2}} = \\frac{\\sqrt{6}}{2}$.',
              marks: 3,
            },
            {
              id: '5_t_q2',
              questionNumber: 2,
              prompt: 'State the amplitude and period of $y = 4 - 3\\sin(5x)$. [2 marks]',
              hint: 'Amplitude is $|a| = |-3| = 3$. Period is $360^\\circ / 5$.',
              answer: 'Amplitude $= 3$, Period $= 72^\\circ$',
              marks: 2,
            },
            {
              id: '5_t_q3',
              questionNumber: 3,
              prompt: 'Solve $\\sqrt{3}\\tan x + 1 = 0$ for $0^\\circ \\le x \\le 360^\\circ$. [3 marks]',
              hint: '$\\tan x = -\\frac{1}{\\sqrt{3}}$. Basic angle $\\alpha = 30^\\circ$. Q II and Q IV.',
              answer: '$x = 180^\\circ - 30^\\circ = 150^\\circ, \\quad 360^\\circ - 30^\\circ = 330^\\circ$',
              marks: 3,
            },
          ],
        },
        {
          id: '5_test_s2',
          stepNumber: 2,
          title: 'Test Part B: Multi-Step Problems & Graphs',
          type: 'exercise_l2',
          badge: 'Unit Test: Part B',
          practiceQuestions: [
            {
              id: '5_t_q4',
              questionNumber: 1,
              prompt: 'Solve $2\\cos(2x - 30^\\circ) = -\\sqrt{3}$ for $0^\\circ \\le x \\le 180^\\circ$. [4 marks]',
              hint: '$\\cos(2x - 30^\\circ) = -\\frac{\\sqrt{3}}{2}$. Interval for $2x - 30^\\circ$ is $-30^\\circ \\le \\phi \\le 330^\\circ$. Basic angle $30^\\circ$.',
              answer: 'Cosine negative: Q II and Q III $\\implies \\phi = 150^\\circ, 210^\\circ$. $2x = 180^\\circ, 240^\\circ \\implies x = 90^\\circ, 120^\\circ$.',
              marks: 4,
            },
            {
              id: '5_t_q5',
              questionNumber: 2,
              prompt: 'Given that $\\sin\\theta = k$ where $\\theta$ is reflex and $\\cos\\theta > 0$, express in terms of $k$: (i) $\\cos\\theta$, (ii) $\\tan\\theta$. [4 marks]',
              hint: 'Reflex and $\\cos > 0$ means $\\theta$ is in Quadrant IV. In Q IV, $k < 0$, $\\cos\\theta > 0$, $\\tan\\theta < 0$.',
              answer: '(i) $\\cos\\theta = +\\sqrt{1 - k^2}$. (ii) $\\tan\\theta = \\frac{k}{\\sqrt{1 - k^2}}$.',
              marks: 4,
            },
            {
              id: '5_t_q6',
              questionNumber: 3,
              prompt: 'The function $f(x) = 3\\cos(2x) + 2$ is defined for $0 \\le x \\le \\pi$. Find the coordinates of the turning points and $x$-intercepts. [5 marks]',
              hint: 'Max when $\\cos(2x) = 1$, min when $\\cos(2x) = -1$. $x$-intercepts when $3\\cos(2x) + 2 = 0$.',
              answer: 'Max at $(0, 5)$ and $(\\pi, 5)$; Min at $(\\pi/2, -1)$. Intercepts: $\\cos(2x) = -2/3 \\implies 2x = 2.30, 3.98 \\implies x \\approx 1.15, 1.99$ rad.',
              marks: 5,
            },
          ],
        },
        {
          id: '5_test_s3',
          stepNumber: 3,
          title: 'Test Part C: Exam-Style Challenge',
          type: 'exercise_l3',
          badge: 'Unit Test: Part C',
          practiceQuestions: [
            {
              id: '5_t_q7',
              questionNumber: 1,
              prompt: '(i) Prove the identity $\\frac{1 + \\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta} \\equiv \\frac{2}{\\cos\\theta}$. (ii) Hence solve $\\frac{1 + \\sin\\theta}{\\cos\\theta} + \\frac{\\cos\\theta}{1 + \\sin\\theta} = \\frac{4}{\\sqrt{3}}$ for $0^\\circ \\le \\theta \\le 360^\\circ$. [7 marks]',
              hint: 'In (i), put over common denominator $\\cos\\theta(1 + \\sin\\theta)$. In (ii), $\\frac{2}{\\cos\\theta} = \\frac{4}{\\sqrt{3}} \\implies \\cos\\theta = \\frac{\\sqrt{3}}{2}$.',
              answer: '(i) $\\text{LHS} = \\frac{(1 + \\sin\\theta)^2 + \\cos^2\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{1 + 2\\sin\\theta + \\sin^2\\theta + \\cos^2\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{2 + 2\\sin\\theta}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{2(1 + \\sin\\theta)}{\\cos\\theta(1 + \\sin\\theta)} = \\frac{2}{\\cos\\theta}$.\n(ii) $\\frac{2}{\\cos\\theta} = \\frac{4}{\\sqrt{3}} \\implies \\cos\\theta = \\frac{\\sqrt{3}}{2} \\implies \\theta = 30^\\circ, 330^\\circ$.',
              marks: 7,
              markingScheme: [
                'M1: Common denominator $\\cos\\theta(1 + \\sin\\theta)$',
                'M1: Expands $(1 + \\sin\\theta)^2 = 1 + 2\\sin\\theta + \\sin^2\\theta$',
                'M1: Uses $\\sin^2\\theta + \\cos^2\\theta = 1$ to get numerator $2 + 2\\sin\\theta$',
                'A1: Factors $2(1 + \\sin\\theta)$ and cancels to conclude proof',
                'M1: Replaces equation with $\\frac{2}{\\cos\\theta} = \\frac{4}{\\sqrt{3}}$ to find $\\cos\\theta = \\frac{\\sqrt{3}}{2}$',
                'A1: $\\theta = 30^\\circ$',
                'A1: $\\theta = 330^\\circ$',
              ],
            },
            {
              id: '5_t_q8',
              questionNumber: 2,
              prompt: 'Solve the equation $4\\sin^4 x + 3\\sin^2 x - 1 = 0$ for $0 \\le x \\le 2\\pi$. [6 marks]',
              hint: 'This is a quadratic in $\\sin^2 x$. Let $u = \\sin^2 x$.',
              answer: 'Let $u = \\sin^2 x$: $4u^2 + 3u - 1 = 0 \\implies (4u - 1)(u + 1) = 0$. Thus $u = 1/4$ or $u = -1$.\nSince $u = \\sin^2 x \\ge 0$, $u = -1$ has no real solutions.\n$\\sin^2 x = 1/4 \\implies \\sin x = \\pm\\frac{1}{2}$.\nBasic angle $\\alpha = \\frac{\\pi}{6}$. Solutions in all 4 quadrants: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.',
              marks: 6,
              markingScheme: [
                'M1: Factors quadratic in $\\sin^2 x$ into $(4\\sin^2 x - 1)(\\sin^2 x + 1) = 0$',
                'A1: Obtains $\\sin^2 x = 1/4$ and rejects $\\sin^2 x = -1$',
                'M1: Takes square root to get $\\sin x = \\pm 1/2$',
                'B1: Reference angle $\\alpha = \\pi/6$',
                'A1: $x = \\pi/6, 5\\pi/6$',
                'A1: $x = 7\\pi/6, 11\\pi/6$',
              ],
            },
            {
              id: '5_t_q9',
              questionNumber: 3,
              prompt: 'The function $f(x) = 2 - 3\\sin^2 x$ is defined for $0 \\le x \\le \\pi$. (i) Find the range of $f$. (ii) State with a reason whether $f$ has an inverse. (iii) Solve $f(x) = 0$, giving exact answers in terms of $\\pi$. [7 marks]',
              hint: 'For (i), what are min and max of $\\sin^2 x$ on $[0, \\pi]$? For (ii), test one-to-one. For (iii), $\\sin^2 x = 2/3$.',
              answer: '(i) On $[0, \\pi]$, $0 \\le \\sin^2 x \\le 1$. When $\\sin^2 x = 0$, $f(x) = 2$. When $\\sin^2 x = 1$, $f(x) = 2 - 3(1) = -1$. Range is $-1 \\le f(x) \\le 2$.\n(ii) $f$ is many-to-one on $[0, \\pi]$ (for example $f(0) = f(\\pi) = 2$). Therefore $f$ has no inverse.\n(iii) $2 - 3\\sin^2 x = 0 \\implies \\sin^2 x = 2/3 \\implies \\sin x = \\sqrt{2/3} = \\frac{\\sqrt{6}}{3}$ (positive on $[0, \\pi]$). $x = \\sin^{-1}\\left(\\frac{\\sqrt{6}}{3}\\right) \\approx 0.955$ rad and $\\pi - 0.955 \\approx 2.186$ rad.',
              marks: 7,
              markingScheme: [
                'M1: Identifies bounds $0 \\le \\sin^2 x \\le 1$',
                'A1: Range $-1 \\le f(x) \\le 2$',
                'B1: States that $f$ has no inverse',
                'B1: Valid reason (e.g. $f$ is not one-to-one / $f(0) = f(\\pi) = 2$)',
                'M1: Solves $2 - 3\\sin^2 x = 0$ to get $\\sin x = \\sqrt{2/3}$',
                'A1: First solution $x = 0.955$ rad',
                'A1: Second solution $x = 2.186$ rad',
              ],
            },
          ],
        },
      ],
    },
  ],
};
