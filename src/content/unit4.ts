import { Unit } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 4: Circular Measure
 * ============================================================================
 */

export const unit4: Unit = {
  id: 'unit_4',
  number: 4,
  title: 'Circular measure',
  learningObjectives: [
    '1.4.1: understand the definition of a radian, convert angles between degrees and radians, and use radians to solve problems involving arc length and sector area',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 4.1 Radians
    // ------------------------------------------------------------------------
    {
      id: 'sub_4_1',
      number: '4.1',
      title: 'Radians',
      type: 'lesson',
      steps: [
        {
          id: '4_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Nature\'s Pure Angle Unit',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Wrapping the Radius around the Rim',
              content:
                'Degrees ($360^\\circ$) were historically chosen based on the Babylonian calendar, which is completely arbitrary! A **radian** is the natural mathematical angle: imagine bending a piece of string equal in length to the circle\'s radius $r$ around the circumference. The angle subtended at the center is exactly 1 radian ($1\\text{ rad} \\approx 57.3^\\circ$). Since the circumference is $2\\pi r$, a full revolution contains exactly $2\\pi$ radians!',
            },
            {
              type: 'formula_card',
              title: 'Conversion Identities',
              math: '\\pi \\text{ radians} = 180^\\circ \\iff 1 \\text{ rad} = \\frac{180^\\circ}{\\pi} \\approx 57.296^\\circ\\\\ \\text{Degrees to Radians: } \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180^\\circ}\\\\ \\text{Radians to Degrees: } \\theta_{\\text{deg}} = \\theta_{\\text{rad}} \\times \\frac{180^\\circ}{\\pi}',
              content: 'Exact fractions of $\\pi$ are standard for common angles: $30^\\circ = \\frac{\\pi}{6}$, $45^\\circ = \\frac{\\pi}{4}$, $60^\\circ = \\frac{\\pi}{3}$, $90^\\circ = \\frac{\\pi}{2}$, $180^\\circ = \\pi$, $360^\\circ = 2\\pi$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Subtended Angle',
                  definition: 'The angle formed at the center of the circle by two radii meeting the ends of an arc.',
                },
                {
                  term: 'Exact Form',
                  definition: 'Expressing the radian value as a multiple or fraction of $\\pi$ without decimal rounding.',
                },
              ],
            },
          ],
        },
        {
          id: '4_1_s2',
          stepNumber: 2,
          title: 'Worked Example: Exact Conversions',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Convert (i) $135^\\circ$ to radians in terms of $\\pi$, and (ii) $\\frac{5\\pi}{6}$ radians to degrees',
              content: 'Demonstrating complete Cambridge conversion steps:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Convert $135^\\circ$ by multiplying by $\\frac{\\pi}{180^\\circ}$.',
                  math: '135^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{135}{180}\\pi',
                },
                {
                  stepNumber: 2,
                  explanation: 'Divide numerator and denominator by 45 to simplify the fraction.',
                  math: '\\frac{135 \\div 45}{180 \\div 45}\\pi = \\frac{3\\pi}{4} \\text{ rad}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Convert $\\frac{5\\pi}{6}$ to degrees by replacing $\\pi$ with $180^\\circ$.',
                  math: '\\frac{5(180^\\circ)}{6} = 5 \\times 30^\\circ = 150^\\circ',
                },
              ],
            },
          ],
        },
        {
          id: '4_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Calculator in Degree Mode Trap',
              content:
                'Entering $\\sin(1.2)$ into a calculator set to DEGREE mode treats $1.2$ as $1.2^\\circ$ instead of $1.2\\text{ radians}$! Always switch your calculator mode to RAD (Radian) before working with circular measure or calculus.',
              notes: 'Check your calculator display shows an [R], not [D].',
            },
            {
              type: 'warning',
              title: 'Premature decimal rounding of pi',
              content:
                'Using $3.14$ instead of the exact $\\pi$ key or leaving answers in terms of $\\pi$. Keep $\\pi$ exact throughout your intermediate algebra.',
            },
          ],
        },
        {
          id: '4_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Convert angles between degrees and radians.',
            },
          ],
          questions: [
            {
              id: '4_1_q1',
              number: 1,
              question: 'Convert $75^\\circ$ to radians, expressing your answer as an exact fraction of $\\pi$.',
              marks: 2,
              solution: '$75 \\times \\frac{\\pi}{180} = \\frac{75}{180}\\pi = \\frac{5\\pi}{12}$ rad.',
              markingScheme: ['M1: Multiply by $\\pi/180$', 'A1: $\\frac{5\\pi}{12}$'],
            },
            {
              id: '4_1_q2',
              number: 2,
              question: 'Convert $\\frac{7\\pi}{4}$ radians into degrees.',
              marks: 2,
              solution: '$\\frac{7 \\times 180^\\circ}{4} = 7 \\times 45^\\circ = 315^\\circ$.',
              markingScheme: ['M1: Replace $\\pi$ with $180^\\circ$', 'A1: $315^\\circ$'],
            },
            {
              id: '4_1_q3',
              number: 3,
              question: 'Convert $2.4$ radians to degrees, giving your answer to 1 decimal place.',
              marks: 2,
              solution: '$2.4 \\times \\frac{180^\\circ}{\\pi} = \\frac{432^\\circ}{\\pi} \\approx 137.5^\\circ$.',
              markingScheme: ['M1: Multiply by $180/\\pi$', 'A1: $137.5^\\circ$ (1 d.p.)'],
            },
          ],
        },
        {
          id: '4_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Rotational rates, clock hands, and angle proportions.',
            },
          ],
          questions: [
            {
              id: '4_1_q4',
              number: 1,
              question: 'Through how many radians does the minute hand of a clock rotate in 40 minutes? Give your answer in terms of $\\pi$.',
              marks: 2,
              solution: 'In 60 minutes, the minute hand turns $2\\pi$ radians. In 40 minutes, it turns $\\frac{40}{60} \\times 2\\pi = \\frac{2}{3} \\times 2\\pi = \\frac{4\\pi}{3}$ radians.',
              markingScheme: ['M1: Set up fraction $\\frac{40}{60} \\times 2\\pi$', 'A1: $\\frac{4\\pi}{3}$ radians'],
            },
            {
              id: '4_1_q5',
              number: 2,
              question: 'A bicycle wheel rotates at 120 revolutions per minute. Find its angular speed in radians per second, in terms of $\\pi$.',
              marks: 3,
              solution: '120 rev/min $= \\frac{120}{60} = 2$ rev/second. Each revolution is $2\\pi$ radians. Angular speed $\\omega = 2 \\times 2\\pi = 4\\pi\\text{ rad s}^{-1}$.',
              markingScheme: ['M1: Convert rev/min to rev/s ($120/60 = 2$)', 'M1: Multiply by $2\\pi$', 'A1: $4\\pi\\text{ rad s}^{-1}$'],
            },
            {
              id: '4_1_q6',
              number: 3,
              question: 'An arc of length $8\\text{ cm}$ subtends an angle $\\theta$ at the center of a circle of radius $5\\text{ cm}$. Find the angle $\\theta$ in radians, and convert it to degrees to the nearest degree.',
              marks: 3,
              solution: '$\\theta = \\frac{s}{r} = \\frac{8}{5} = 1.6\\text{ radians}$. In degrees: $1.6 \\times \\frac{180^\\circ}{\\pi} = \\frac{288^\\circ}{\\pi} \\approx 91.67^\\circ \\approx 92^\\circ$.',
              markingScheme: ['M1: $\\theta = 8/5 = 1.6$ rad', 'M1: Convert $1.6 \\times 180/\\pi$', 'A1: $92^\\circ$'],
            },
          ],
        },
        {
          id: '4_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on radian definitions.',
            },
          ],
          questions: [
            {
              id: '4_1_q7',
              number: 1,
              question: 'The angles of a triangle are in the ratio $1 : 3 : 5$. Find the exact size of each angle in radians in terms of $\\pi$. [3 marks]',
              marks: 3,
              solution: 'The sum of angles in a triangle is $\\pi$ radians. Total parts $= 1 + 3 + 5 = 9$. One part $= \\frac{\\pi}{9}$. The angles are $\\frac{\\pi}{9}$, $\\frac{3\\pi}{9} = \\frac{\\pi}{3}$, and $\\frac{5\\pi}{9}$ radians.',
              markingScheme: ['M1: Sum of angles $= \\pi$', 'M1: One part $= \\pi/9$', 'A1: $\\frac{\\pi}{9}, \\frac{\\pi}{3}, \\frac{5\\pi}{9}$'],
            },
            {
              id: '4_1_q8',
              number: 2,
              question: 'A regular octagon is inscribed in a circle of radius $r$. Find the exact angle in radians subtended at the center by each side of the octagon. [2 marks]',
              marks: 2,
              solution: 'A full circle is $2\\pi$ radians. For an 8-sided regular polygon, the central angle is $\\frac{2\\pi}{8} = \\frac{\\pi}{4}$ radians.',
              markingScheme: ['M1: Divide $2\\pi$ by 8', 'A1: $\\frac{\\pi}{4}$ radians'],
            },
            {
              id: '4_1_q9',
              number: 3,
              question: 'The difference between the two acute angles in a right-angled triangle is $\\frac{\\pi}{5}$ radians. Find the exact values of all three angles in radians. [4 marks]',
              marks: 4,
              solution: 'Right angle $= \\frac{\\pi}{2}$. The two acute angles $A$ and $B$ sum to $\\frac{\\pi}{2}$ radians: $A + B = \\frac{\\pi}{2}$. Given $A - B = \\frac{\\pi}{5}$. Add equations: $2A = \\frac{\\pi}{2} + \\frac{\\pi}{5} = \\frac{5\\pi + 2\\pi}{10} = \\frac{7\\pi}{10} \\implies A = \\frac{7\\pi}{20}$. Then $B = \\frac{\\pi}{2} - \\frac{7\\pi}{20} = \\frac{10\\pi - 7\\pi}{20} = \\frac{3\\pi}{20}$. The three angles are $\\frac{\\pi}{2}$, $\\frac{7\\pi}{20}$, and $\\frac{3\\pi}{20}$ radians.',
              markingScheme: ['B1: State right angle is $\\pi/2$', 'M1: Set up $A + B = \\pi/2$ and $A - B = \\pi/5$', 'A1: $A = \\frac{7\\pi}{20}$', 'A1: $B = \\frac{3\\pi}{20}$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 4.2 Length of an arc
    // ------------------------------------------------------------------------
    {
      id: 'sub_4_2',
      number: '4.2',
      title: 'Length of an arc',
      type: 'lesson',
      steps: [
        {
          id: '4_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: s = rθ',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'The Great Simplification',
              content:
                'In degrees, the arc length was a messy formula: $s = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$. But because 1 radian is defined as the angle where arc length equals radius ($s = r$), when $\\theta$ is in radians, the formula collapses magically into simple multiplication: $s = r\\theta$!',
            },
            {
              type: 'formula_card',
              title: 'Arc Length & Perimeter of a Sector',
              math: 's = r\\theta \\quad (\\theta \\text{ in radians})\\\\ \\text{Perimeter of Sector} = s + 2r = r\\theta + 2r = r(\\theta + 2)',
              content: 'CRITICAL: This formula ONLY holds when $\\theta$ is measured in RADIANS.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Minor Arc vs Major Arc',
                  definition: 'Minor arc corresponds to central angle $\\theta < \\pi$ ($180^\\circ$); major arc corresponds to reflex angle $\\theta > \\pi$.',
                },
              ],
            },
          ],
        },
        {
          id: '4_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Perimeter of a Sector',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'A sector of a circle of radius $6\\text{ cm}$ has an angle of $1.5\\text{ radians}$ at its center. Find (i) the length of the arc, and (ii) the perimeter of the sector.',
              content: 'Step-by-step working:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Apply the arc length formula $s = r\\theta$.',
                  math: 's = 6 \\times 1.5 = 9\\text{ cm}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Add the two boundary radii to find the total perimeter.',
                  math: '\\text{Perimeter} = s + 2r = 9 + 2(6) = 9 + 12 = 21\\text{ cm}',
                },
              ],
            },
          ],
        },
        {
          id: '4_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Confusing arc length with sector perimeter',
              content:
                'Students frequently calculate $s = r\\theta$ and stop, forgetting that a sector is enclosed by the curved arc PLUS two straight straight edges of length $r$! Perimeter $= r\\theta + 2r$.',
            },
            {
              type: 'warning',
              title: 'Plugging degrees directly into s = rθ',
              content:
                'For radius 10 and angle $45^\\circ$, writing $s = 10 \\times 45 = 450\\text{ cm}$! You must ALWAYS convert $45^\\circ$ to $\\frac{\\pi}{4}$ radians first: $s = 10 \\times \\frac{\\pi}{4} = 2.5\\pi\\text{ cm}$.',
            },
          ],
        },
        {
          id: '4_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Calculate arc lengths and sector perimeters.',
            },
          ],
          questions: [
            {
              id: '4_2_q1',
              number: 1,
              question: 'Find the length of an arc of a circle of radius $8\\text{ cm}$ subtended by a central angle of $\\frac{3\\pi}{4}$ radians.',
              marks: 2,
              solution: '$s = r\\theta = 8 \\times \\frac{3\\pi}{4} = 6\\pi\\text{ cm} \\approx 18.8\\text{ cm}$.',
              markingScheme: ['M1: $s = 8 \\times \\frac{3\\pi}{4}$', 'A1: $6\\pi\\text{ cm}$'],
            },
            {
              id: '4_2_q2',
              number: 2,
              question: 'A circle has radius $12\\text{ cm}$. An arc has length $15\\text{ cm}$. Find the angle subtended at the center in radians.',
              marks: 2,
              solution: '$\\theta = \\frac{s}{r} = \\frac{15}{12} = \\frac{5}{4} = 1.25\\text{ radians}$.',
              markingScheme: ['M1: $\\theta = 15/12$', 'A1: $1.25$ rad'],
            },
            {
              id: '4_2_q3',
              number: 3,
              question: 'The perimeter of a sector of a circle of radius $5\\text{ cm}$ is $18\\text{ cm}$. Find the central angle $\\theta$ in radians.',
              marks: 2,
              solution: '$\\text{Perimeter} = r\\theta + 2r \\implies 18 = 5\\theta + 2(5) \\implies 18 = 5\\theta + 10 \\implies 5\\theta = 8 \\implies \\theta = \\frac{8}{5} = 1.6\\text{ rad}$.',
              markingScheme: ['M1: $5\\theta + 10 = 18$', 'A1: $\\theta = 1.6$ rad'],
            },
          ],
        },
        {
          id: '4_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Geometric composite shapes with chords and arcs.',
            },
          ],
          questions: [
            {
              id: '4_2_q4',
              number: 1,
              question: 'In a circle of radius $10\\text{ cm}$, a chord $AB$ subtends an angle of $\\frac{\\pi}{3}$ radians at the center $O$. Find the exact perimeter of the segment bounded by chord $AB$ and the minor arc $AB$.',
              marks: 4,
              solution: 'Arc length $s = r\\theta = 10 \\times \\frac{\\pi}{3} = \\frac{10\\pi}{3}\\text{ cm}$.\nSince $\\angle AOB = \\frac{\\pi}{3} = 60^\\circ$ and $OA = OB = 10$, triangle $OAB$ is equilateral! Thus chord length $AB = 10\\text{ cm}$.\nPerimeter of the segment $= s + AB = \\frac{10\\pi}{3} + 10\\text{ cm} \\approx 20.47\\text{ cm}$.',
              markingScheme: ['M1: Arc length $10\\pi/3$', 'M1: Chord length $AB = 10$ (equilateral triangle)', 'A1: Exact perimeter $\\frac{10\\pi}{3} + 10\\text{ cm}$'],
            },
            {
              id: '4_2_q5',
              number: 2,
              question: 'A running track has two straight parallel sections of length $80\\text{ m}$ each, connected by two semicircular ends of radius $R$. Given that the total lap distance is $400\\text{ m}$, find the radius $R$ to 3 significant figures.',
              marks: 3,
              solution: 'Total distance $= 2(80) + 2(\\pi R) = 160 + 2\\pi R = 400 \\implies 2\\pi R = 240 \\implies R = \\frac{120}{\\pi} \\approx 38.2\\text{ m}$.',
              markingScheme: ['M1: Set up $160 + 2\\pi R = 400$', 'M1: Solve for $R = 120/\\pi$', 'A1: $R = 38.2\\text{ m}$ (3 s.f.)'],
            },
            {
              id: '4_2_q6',
              number: 3,
              question: 'Two sectors of different circles have the same perimeter of $20\\text{ cm}$. The first sector has radius $4\\text{ cm}$ and angle $\\theta_1$. The second sector has radius $6\\text{ cm}$ and angle $\\theta_2$. Find the ratio $\\theta_1 : \\theta_2$.',
              marks: 3,
              solution: 'For sector 1: $4\\theta_1 + 2(4) = 20 \\implies 4\\theta_1 = 12 \\implies \\theta_1 = 3\\text{ rad}$.\nFor sector 2: $6\\theta_2 + 2(6) = 20 \\implies 6\\theta_2 = 8 \\implies \\theta_2 = \\frac{8}{6} = \\frac{4}{3}\\text{ rad}$.\nRatio $\\theta_1 : \\theta_2 = 3 : \\frac{4}{3} = 9 : 4$.',
              markingScheme: ['M1: $\\theta_1 = 3$', 'M1: $\\theta_2 = 4/3$', 'A1: Ratio $9 : 4$'],
            },
          ],
        },
        {
          id: '4_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on arc lengths and shaded perimeters.',
            },
          ],
          questions: [
            {
              id: '4_2_q7',
              number: 1,
              question: 'The diagram shows a sector $AOB$ of a circle with center $O$ and radius $r\\text{ cm}$. The angle $AOB$ is $\\theta$ radians. The tangents to the circle at $A$ and $B$ meet at $T$. (i) Find the length of $AT$ in terms of $r$ and $\\theta$. [2 marks]\n(ii) Given that $\\theta = \\frac{2\\pi}{3}$ and $r = 6$, find the perimeter of the region bounded by $AT$, $BT$, and the minor arc $AB$. [4 marks]',
              marks: 6,
              solution: '(i) In right-angled triangle $OAT$ (since radius $\\perp$ tangent): $\\angle AOT = \\frac{\\theta}{2}$. $\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{AT}{r} \\implies AT = r\\tan\\left(\\frac{\\theta}{2}\\right)$.\n(ii) With $\\theta = \\frac{2\\pi}{3}$ and $r = 6$: $\\frac{\\theta}{2} = \\frac{\\pi}{3}$.\n$AT = BT = 6\\tan\\left(\\frac{\\pi}{3}\\right) = 6\\sqrt{3}$.\nArc length $AB = r\\theta = 6 \\times \\frac{2\\pi}{3} = 4\\pi$.\nTotal perimeter $= AT + BT + \\text{arc } AB = 6\\sqrt{3} + 6\\sqrt{3} + 4\\pi = 12\\sqrt{3} + 4\\pi\\text{ cm} \\approx 33.4\\text{ cm}$.',
              markingScheme: ['M1: Use $\\tan(\\theta/2) = AT/r$', 'A1: $AT = r\\tan(\\theta/2)$', 'M1: Evaluate $AT = BT = 6\\sqrt{3}$', 'M1: Arc length $s = 4\\pi$', 'A1: Total perimeter $12\\sqrt{3} + 4\\pi$ (or $33.4\\text{ cm}$)'],
            },
            {
              id: '4_2_q8',
              number: 2,
              question: 'A wire of fixed length $L$ is bent into the shape of a sector of a circle with radius $r$ and central angle $\\theta$ radians. Given that the area of the sector is $A$, show that $A = \\frac{1}{2}Lr - r^2$. [4 marks]',
              marks: 4,
              solution: 'Length of wire: $L = r\\theta + 2r \\implies r\\theta = L - 2r \\implies \\theta = \\frac{L - 2r}{r}$.\nArea of sector $A = \\frac{1}{2}r^2\\theta$.\nSubstitute $\\theta$: $A = \\frac{1}{2}r^2\\left(\\frac{L - 2r}{r}\\right) = \\frac{1}{2}r(L - 2r) = \\frac{1}{2}Lr - r^2$.',
              markingScheme: ['M1: Set $L = r\\theta + 2r$', 'M1: Express $\\theta = \\frac{L - 2r}{r}$', 'M1: Substitute into $A = \\frac{1}{2}r^2\\theta$', 'A1: Obtain $A = \\frac{1}{2}Lr - r^2$'],
            },
            {
              id: '4_2_q9',
              number: 3,
              question: 'In the diagram, $ABC$ is an equilateral triangle with side length $6\\text{ cm}$. An arc of a circle with center $A$ and radius $6\\text{ cm}$ connects $B$ to $C$. An arc with center $B$ and radius $6\\text{ cm}$ connects $A$ to $C$. An arc with center $C$ connects $A$ to $B$. Find the exact total perimeter of the resulting curved Reuleaux triangle. [4 marks]',
              marks: 4,
              solution: 'Each angle of the equilateral triangle is $60^\\circ = \\frac{\\pi}{3}$ radians. The radius of each circular arc is $r = 6\\text{ cm}$. Length of one arc $s = r\\theta = 6 \\times \\frac{\\pi}{3} = 2\\pi\\text{ cm}$. The boundary consists of 3 identical arcs: Total perimeter $= 3 \\times 2\\pi = 6\\pi\\text{ cm} \\approx 18.8\\text{ cm}$.',
              markingScheme: ['B1: Angle is $\\pi/3$', 'M1: Arc length $s = 6 \\times \\frac{\\pi}{3} = 2\\pi$', 'M1: Multiply by 3', 'A1: Exact perimeter $6\\pi\\text{ cm}$'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 4.3 Area of a sector
    // ------------------------------------------------------------------------
    {
      id: 'sub_4_3',
      number: '4.3',
      title: 'Area of a sector',
      type: 'lesson',
      steps: [
        {
          id: '4_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Area Formulas for Sectors and Segments',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Pizza Slice vs Crust Segment',
              content:
                '• A **Sector** is the whole pizza slice from the center out: $\\text{Area} = \\frac{1}{2}r^2\\theta$.\n• The central **Triangle** has area $\\frac{1}{2}r^2\\sin\\theta$.\n• A **Segment** is just the crust edge (sector minus triangle): $\\text{Area} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)$!',
            },
            {
              type: 'formula_card',
              title: 'Area Formulas (θ in radians)',
              math: '\\text{Area of Sector} = \\frac{1}{2}r^2\\theta\\\\ \\text{Area of Triangle } AOB = \\frac{1}{2}r^2\\sin\\theta\\\\ \\text{Area of Segment} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)',
              content: 'Remember to set your calculator to RADIAN mode when evaluating $\\sin\\theta$ in these formulas.',
            },
          ],
        },
        {
          id: '4_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Shaded Segment Area',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the exact area of the minor segment cut off by a chord in a circle of radius $4\\text{ cm}$ subtending an angle of $\\frac{\\pi}{3}$ radians',
              content: 'Demonstrating complete Cambridge solution:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Find the area of the sector $OAB$.',
                  math: '\\text{Area of sector} = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(4^2)\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}(16)\\left(\\frac{\\pi}{3}\\right) = \\frac{8\\pi}{3}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Find the area of the triangle $OAB$. Recall $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$.',
                  math: '\\text{Area of triangle} = \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}(16)\\left(\\frac{\\sqrt{3}}{2}\\right) = 4\\sqrt{3}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Subtract triangle area from sector area.',
                  math: '\\text{Area of segment} = \\frac{8\\pi}{3} - 4\\sqrt{3} \\approx 1.45\\text{ cm}^2',
                },
              ],
            },
          ],
        },
        {
          id: '4_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'warning',
              title: 'Evaluating sin(θ) in degrees mode',
              content:
                'Entering $\\sin(1.5)$ when your calculator is in degree mode gives $0.026$ instead of $0.997$! In the segment formula $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$, mixing up units creates completely incorrect answers.',
            },
            {
              type: 'warning',
              title: 'Using 1/2 r θ instead of 1/2 r² θ',
              content:
                'Confusing arc length $r\\theta$ with sector area $\\frac{1}{2}r^2\\theta$. Area involves dimension squared ($r^2$).',
            },
          ],
        },
        {
          id: '4_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          blocks: [
            {
              type: 'paragraph',
              content: 'Calculate sector and segment areas.',
            },
          ],
          questions: [
            {
              id: '4_3_q1',
              number: 1,
              question: 'Find the area of a sector of a circle of radius $6\\text{ cm}$ with central angle $1.2\\text{ radians}$.',
              marks: 2,
              solution: '$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(6^2)(1.2) = \\frac{1}{2}(36)(1.2) = 21.6\\text{ cm}^2$.',
              markingScheme: ['M1: $\\frac{1}{2}(36)(1.2)$', 'A1: $21.6\\text{ cm}^2$'],
            },
            {
              id: '4_3_q2',
              number: 2,
              question: 'A sector of a circle of radius $r$ has central angle $\\frac{\\pi}{4}$ and area $18\\pi\\text{ cm}^2$. Find the value of $r$.',
              marks: 2,
              solution: '$\\frac{1}{2}r^2\\left(\\frac{\\pi}{4}\\right) = 18\\pi \\implies \\frac{\\pi}{8}r^2 = 18\\pi \\implies r^2 = 18 \\times 8 = 144 \\implies r = 12\\text{ cm}$.',
              markingScheme: ['M1: $\\frac{1}{8}r^2 = 18$', 'A1: $r = 12\\text{ cm}$'],
            },
            {
              id: '4_3_q3',
              number: 3,
              question: 'Find the area of a triangle with two sides of length $8\\text{ cm}$ and included angle $\\frac{\\pi}{6}$ radians.',
              marks: 2,
              solution: '$A = \\frac{1}{2}(8)(8)\\sin\\left(\\frac{\\pi}{6}\\right) = 32 \\times \\frac{1}{2} = 16\\text{ cm}^2$.',
              markingScheme: ['M1: $\\frac{1}{2}(64)\\sin(\\pi/6)$', 'A1: $16\\text{ cm}^2$'],
            },
          ],
        },
        {
          id: '4_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications & Problem Solving)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          blocks: [
            {
              type: 'paragraph',
              content: 'Shaded areas between geometric shapes and sectors.',
            },
          ],
          questions: [
            {
              id: '4_3_q4',
              number: 1,
              question: 'In a square $ABCD$ of side $10\\text{ cm}$, a sector of a circle with center $A$ and radius $10\\text{ cm}$ is drawn from $B$ to $D$. Find the exact area of the region inside the square that lies outside the sector.',
              marks: 3,
              solution: 'Area of square $= 10 \\times 10 = 100\\text{ cm}^2$.\nCentral angle is $90^\\circ = \\frac{\\pi}{2}$ radians.\nArea of sector $= \\frac{1}{2}(10^2)\\left(\\frac{\\pi}{2}\\right) = \\frac{1}{2}(100)\\left(\\frac{\\pi}{2}\\right) = 25\\pi\\text{ cm}^2$.\nRemaining area $= 100 - 25\\pi\\text{ cm}^2 \\approx 21.5\\text{ cm}^2$.',
              markingScheme: ['B1: Area of square $= 100$', 'M1: Area of sector $= 25\\pi$', 'A1: $100 - 25\\pi\\text{ cm}^2$'],
            },
            {
              id: '4_3_q5',
              number: 2,
              question: 'Find the area of the segment cut off by a chord in a circle of radius $8\\text{ cm}$ with central angle $2\\text{ radians}$. Give your answer to 3 significant figures.',
              marks: 3,
              solution: '$A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta) = \\frac{1}{2}(64)(2 - \\sin 2) = 32(2 - 0.9093) = 32(1.0907) \\approx 34.9\\text{ cm}^2$.',
              markingScheme: ['M1: Use formula $\\frac{1}{2}r^2(\\theta - \\sin\\theta)$', 'M1: Evaluate $\\sin(2\\text{ rad}) \\approx 0.9093$', 'A1: $34.9\\text{ cm}^2$ (3 s.f.)'],
            },
            {
              id: '4_3_q6',
              number: 3,
              question: 'A sector of a circle of radius $r$ has perimeter $30\\text{ cm}$. Find the value of $r$ that maximises the area of the sector, and calculate this maximum area.',
              marks: 4,
              solution: 'Perimeter: $2r + r\\theta = 30 \\implies r\\theta = 30 - 2r \\implies \\theta = \\frac{30 - 2r}{r}$.\nArea $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}r(30 - 2r) = 15r - r^2$.\nComplete the square: $A = -(r^2 - 15r) = -[(r - 7.5)^2 - 56.25] = 56.25 - (r - 7.5)^2$.\nMaximum area is $56.25\\text{ cm}^2$, occurring when $r = 7.5\\text{ cm}$ (giving $\\theta = 2\\text{ radians}$).',
              markingScheme: ['M1: Set $A = 15r - r^2$', 'M1: Complete the square $56.25 - (r - 7.5)^2$', 'A1: $r = 7.5\\text{ cm}$', 'A1: Maximum area $= 56.25\\text{ cm}^2$'],
            },
          ],
        },
        {
          id: '4_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style Questions)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          blocks: [
            {
              type: 'paragraph',
              content: 'Cambridge exam questions with formal marks on sector areas and tangents.',
            },
          ],
          questions: [
            {
              id: '4_3_q7',
              number: 1,
              question: 'The diagram shows a sector $OAB$ of a circle with center $O$, radius $12\\text{ cm}$, and angle $AOB = \\frac{\\pi}{3}$ radians. The line $BC$ is perpendicular to $OA$ and meets $OA$ at $C$. Find the exact area of the shaded region bounded by $BC$, $CA$, and the arc $AB$. [5 marks]',
              marks: 5,
              solution: 'In right-angled triangle $OCB$: $\\angle COB = \\frac{\\pi}{3}$, $OB = 12$.\n$OC = 12\\cos\\left(\\frac{\\pi}{3}\\right) = 12(0.5) = 6\\text{ cm}$.\n$BC = 12\\sin\\left(\\frac{\\pi}{3}\\right) = 12\\left(\\frac{\\sqrt{3}}{2}\\right) = 6\\sqrt{3}\\text{ cm}$.\nArea of triangle $OCB = \\frac{1}{2}(6)(6\\sqrt{3}) = 18\\sqrt{3}\\text{ cm}^2$.\nArea of sector $OAB = \\frac{1}{2}(12^2)\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}(144)\\left(\\frac{\\pi}{3}\\right) = 24\\pi\\text{ cm}^2$.\nShaded area $= \\text{Area of sector } OAB - \\text{Area of triangle } OCB = 24\\pi - 18\\sqrt{3}\\text{ cm}^2 \\approx 44.2\\text{ cm}^2$.',
              markingScheme: ['M1: $OC = 6$ and $BC = 6\\sqrt{3}$', 'M1: Area of triangle $OCB = 18\\sqrt{3}$', 'M1: Area of sector $= 24\\pi$', 'A1: Shaded area $= 24\\pi - 18\\sqrt{3}$', 'A1: Decimal value $\\approx 44.2\\text{ cm}^2$'],
            },
            {
              id: '4_3_q8',
              number: 2,
              question: 'The diagram shows two circles $C_1$ and $C_2$, each of radius $r$, such that the center of each circle lies on the circumference of the other circle. Show that the area of their overlapping region is $\\frac{r^2}{3}(2\\pi - 3\\sqrt{3})$. [6 marks]',
              marks: 6,
              solution: 'Let centers be $O_1$ and $O_2$. Then $O_1 O_2 = r$. At an intersection point $P$, $O_1 P = r$ and $O_2 P = r$. Thus triangle $O_1 O_2 P$ is equilateral, so $\\angle PO_1 O_2 = \\frac{\\pi}{3}$.\nThe full angle subtended at center $O_1$ by the common chord $PQ$ is $\\theta = 2 \\times \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.\nThe overlapping region consists of two identical segments (one from each circle).\nArea of one segment $= \\frac{1}{2}r^2\\left(\\frac{2\\pi}{3} - \\sin\\left(\\frac{2\\pi}{3}\\right)\\right) = \\frac{1}{2}r^2\\left(\\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}\\right)$.\nTotal overlapping area $= 2 \\times \\text{segment area} = r^2\\left(\\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}\\right) = \\frac{r^2}{6}(4\\pi - 3\\sqrt{3}) = \\frac{r^2}{3}\\left(2\\pi - \\frac{3\\sqrt{3}}{2}\\right)$... wait, $2 \\times \\frac{1}{2}r^2(\\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}) = r^2(\\frac{2\\pi}{3} - \\frac{\\sqrt{3}}{2}) = \\frac{r^2}{6}(4\\pi - 3\\sqrt{3})$.',
              markingScheme: ['B1: Central angle is $2\\pi/3$', 'M1: Area of sector $= \\frac{1}{2}r^2(2\\pi/3)$', 'M1: Area of triangle $= \\frac{1}{2}r^2\\sin(2\\pi/3) = \\frac{\\sqrt{3}}{4}r^2$', 'M1: Segment area $=$ Sector $-$ Triangle', 'A1: Multiply by 2 for both halves', 'A1: Conclude $\\frac{r^2}{6}(4\\pi - 3\\sqrt{3})$'],
            },
            {
              id: '4_3_q9',
              number: 3,
              question: 'A sector of a circle with center $O$ and radius $R$ has angle $\\theta$ radians. A circle of radius $r$ is inscribed inside the sector, touching the two radii and the arc. (i) Show that $R = r\\left(1 + \\frac{1}{\\sin(\\theta/2)}\\right)$. [3 marks]\n(ii) Given that $\\theta = \\frac{\\pi}{3}$, find the ratio of the area of the inscribed circle to the area of the sector. [3 marks]',
              marks: 6,
              solution: '(i) Let the inscribed circle have center $C$. The distance from $C$ to either radius is $r$. In right-angled triangle, $\\sin\\left(\\frac{\\theta}{2}\\right) = \\frac{r}{OC} \\implies OC = \\frac{r}{\\sin(\\theta/2)}$. The total radius of the sector is $R = OC + r = \\frac{r}{\\sin(\\theta/2)} + r = r\\left(1 + \\frac{1}{\\sin(\\theta/2)}\\right)$.\n(ii) For $\\theta = \\frac{\\pi}{3}$, $\\frac{\\theta}{2} = \\frac{\\pi}{6}$. $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$.\n$R = r\\left(1 + \\frac{1}{1/2}\\right) = r(1 + 2) = 3r \\implies R = 3r$.\nArea of inscribed circle $= \\pi r^2$.\nArea of sector $= \\frac{1}{2}R^2\\theta = \\frac{1}{2}(3r)^2\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}(9r^2)\\left(\\frac{\\pi}{3}\\right) = \\frac{3}{2}\\pi r^2$.\nRatio $\\frac{\\text{Area of circle}}{\\text{Area of sector}} = \\frac{\\pi r^2}{\\frac{3}{2}\\pi r^2} = \\frac{2}{3}$.',
              markingScheme: ['M1: Use $\\sin(\\theta/2) = r/OC$', 'A1: $R = r(1 + 1/\\sin(\\theta/2))$', 'M1: When $\\theta = \\pi/3$, $\\sin(\\pi/6) = 0.5 \\implies R = 3r$', 'M1: Calculate area of sector $= \\frac{3}{2}\\pi r^2$', 'A1: Ratio $= 2 : 3$ (or $2/3$)'],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit Test: 3 Slides (Part A, Part B, Part C)
    // ------------------------------------------------------------------------
    {
      id: 'sub_4_test',
      number: 'Unit Test',
      title: 'Unit 4 Test: Circular measure',
      type: 'unitTest',
      steps: [
        {
          id: '4_test_s1',
          stepNumber: 1,
          title: 'Unit Test Part A (Foundations)',
          type: 'test_part_a',
          badge: 'Test Part A [8 marks]',
          blocks: [
            {
              type: 'paragraph',
              content: 'Part A contains 3 foundational questions testing radian conversion, arc lengths, and sector areas.',
            },
          ],
          questions: [
            {
              id: '4_test_q1',
              number: 1,
              question: 'Convert $140^\\circ$ to radians as an exact fraction of $\\pi$. [2 marks]',
              marks: 2,
              solution: '$140 \\times \\frac{\\pi}{180} = \\frac{14}{18}\\pi = \\frac{7\\pi}{9}\\text{ radians}$.',
              markingScheme: ['M1: Multiply by $\\pi/180$', 'A1: $\\frac{7\\pi}{9}$'],
            },
            {
              id: '4_test_q2',
              number: 2,
              question: 'Find the length of an arc of a circle of radius $9\\text{ cm}$ subtended by a central angle of $\\frac{2\\pi}{3}$ radians. [3 marks]',
              marks: 3,
              solution: '$s = r\\theta = 9 \\times \\frac{2\\pi}{3} = 6\\pi\\text{ cm} \\approx 18.8\\text{ cm}$.',
              markingScheme: ['M1: Formula $s = r\\theta$', 'M1: $9 \\times \\frac{2\\pi}{3}$', 'A1: $6\\pi\\text{ cm}$'],
            },
            {
              id: '4_test_q3',
              number: 3,
              question: 'Find the area of a sector of radius $8\\text{ cm}$ with central angle $0.75\\text{ radians}$. [3 marks]',
              marks: 3,
              solution: '$A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(8^2)(0.75) = \\frac{1}{2}(64)(0.75) = 32 \\times 0.75 = 24\\text{ cm}^2$.',
              markingScheme: ['M1: Formula $\\frac{1}{2}r^2\\theta$', 'M1: $\\frac{1}{2}(64)(0.75)$', 'A1: $24\\text{ cm}^2$'],
            },
          ],
        },
        {
          id: '4_test_s2',
          stepNumber: 2,
          title: 'Unit Test Part B (Problem Solving & Multi-Step)',
          type: 'test_part_b',
          badge: 'Test Part B [14 marks]',
          blocks: [
            {
              type: 'paragraph',
              content: 'Part B contains 3 multi-step problems on sector perimeters and shaded segments.',
            },
          ],
          questions: [
            {
              id: '4_test_q4',
              number: 1,
              question: 'A sector of a circle of radius $r\\text{ cm}$ has angle $\\theta$ radians. Given that the perimeter of the sector is $36\\text{ cm}$ and its area is $80\\text{ cm}^2$, find the possible values of $r$ and $\\theta$. [5 marks]',
              marks: 5,
              solution: 'Perimeter: $2r + r\\theta = 36 \\implies r\\theta = 36 - 2r$.\nArea: $\\frac{1}{2}r^2\\theta = 80 \\implies \\frac{1}{2}r(r\\theta) = 80 \\implies \\frac{1}{2}r(36 - 2r) = 80 \\implies r(18 - r) = 80 \\implies 18r - r^2 = 80 \\implies r^2 - 18r + 80 = 0$.\nFactorise: $(r - 8)(r - 10) = 0 \\implies r = 8$ or $r = 10$.\nWhen $r = 8$: $8\\theta = 36 - 16 = 20 \\implies \\theta = \\frac{20}{8} = 2.5\\text{ rad}$.\nWhen $r = 10$: $10\\theta = 36 - 20 = 16 \\implies \\theta = \\frac{16}{10} = 1.6\\text{ rad}$.\nSolutions: $r = 8, \\theta = 2.5$ or $r = 10, \\theta = 1.6$.',
              markingScheme: ['B1: $2r + r\\theta = 36$', 'M1: Form $r^2 - 18r + 80 = 0$', 'A1: $r = 8, 10$', 'A1: $\\theta = 2.5$ when $r = 8$', 'A1: $\\theta = 1.6$ when $r = 10$'],
            },
            {
              id: '4_test_q5',
              number: 2,
              question: 'Find the area of the shaded segment in a circle of radius $10\\text{ cm}$ subtended by a central angle of $\\frac{\\pi}{2}$ radians. [4 marks]',
              marks: 4,
              solution: 'Area of sector $= \\frac{1}{2}(10^2)\\left(\\frac{\\pi}{2}\\right) = 25\\pi\\text{ cm}^2$.\nArea of triangle $= \\frac{1}{2}(10)(10)\\sin\\left(\\frac{\\pi}{2}\\right) = 50(1) = 50\\text{ cm}^2$.\nArea of segment $= 25\\pi - 50\\text{ cm}^2 \\approx 28.5\\text{ cm}^2$.',
              markingScheme: ['M1: Area of sector $= 25\\pi$', 'M1: Area of triangle $= 50$', 'A1: Exact area $25\\pi - 50\\text{ cm}^2$', 'A1: $28.5\\text{ cm}^2$'],
            },
            {
              id: '4_test_q6',
              number: 3,
              question: 'A pendulum of length $75\\text{ cm}$ swings through an angle of $12^\\circ$. Find the length of the arc through which its tip moves. [5 marks]',
              marks: 5,
              solution: 'Convert angle to radians: $12^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{\\pi}{15}\\text{ radians}$.\nArc length $s = r\\theta = 75 \\times \\frac{\\pi}{15} = 5\\pi\\text{ cm} \\approx 15.7\\text{ cm}$.',
              markingScheme: ['M1: Convert $12^\\circ$ to radians: $\\pi/15$', 'M1: $s = 75 \\times \\theta$', 'A1: Exact $5\\pi\\text{ cm}$', 'A1: $15.7\\text{ cm}$ (3 s.f.)'],
            },
          ],
        },
        {
          id: '4_test_s3',
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
              id: '4_test_q7',
              number: 1,
              question: 'In the diagram, $OAB$ is a sector of a circle with center $O$ and radius $r$. The angle $AOB$ is $\\alpha$ radians. A semicircle is constructed with diameter $AB$. Find an expression in terms of $r$ and $\\alpha$ for the area of the crescent-shaped lune lying outside the sector. [6 marks]',
              marks: 6,
              solution: 'Chord $AB$: by cosine rule, $AB^2 = r^2 + r^2 - 2r^2\\cos\\alpha = 2r^2(1 - \\cos\\alpha) = 4r^2\\sin^2(\\alpha/2) \\implies AB = 2r\\sin(\\alpha/2)$.\nRadius of semicircle $R_s = \\frac{AB}{2} = r\\sin(\\alpha/2)$.\nArea of semicircle $= \\frac{1}{2}\\pi R_s^2 = \\frac{1}{2}\\pi r^2\\sin^2(\\alpha/2)$.\nArea of segment of original circle $= \\frac{1}{2}r^2(\\alpha - \\sin\\alpha)$.\nArea of lune $=$ Area of semicircle $-$ Area of segment\n$= \\frac{1}{2}\\pi r^2\\sin^2(\\alpha/2) - \\frac{1}{2}r^2(\\alpha - \\sin\\alpha) = \\frac{1}{2}r^2\\left[\\pi\\sin^2\\left(\\frac{\\alpha}{2}\\right) - \\alpha + \\sin\\alpha\\right]$.',
              markingScheme: ['M1: Chord length $AB = 2r\\sin(\\alpha/2)$', 'M1: Area of semicircle $= \\frac{1}{2}\\pi r^2\\sin^2(\\alpha/2)$', 'M1: Area of segment $= \\frac{1}{2}r^2(\\alpha - \\sin\\alpha)$', 'A1: Subtract segment from semicircle', 'A1: Fully correct expression'],
            },
            {
              id: '4_test_q8',
              number: 2,
              question: 'A belt passes around two pulleys of radii $10\\text{ cm}$ and $4\\text{ cm}$, whose centers are $12\\text{ cm}$ apart. Find the exact total length of the belt. [6 marks]',
              marks: 6,
              solution: 'Let centers be $O_1$ and $O_2$ with $O_1 O_2 = 12$. Radii $R = 10, r = 4$. Difference $R - r = 6$.\nIn right-angled triangle formed by line parallel to straight belt segment: $\\cos\\phi = \\frac{R - r}{O_1 O_2} = \\frac{6}{12} = \\frac{1}{2} \\implies \\phi = \\frac{\\pi}{3} = 60^\\circ$.\nStraight section length $L = \\sqrt{12^2 - 6^2} = \\sqrt{144 - 36} = \\sqrt{108} = 6\\sqrt{3}$.\nThere are 2 straight sections: $2 \\times 6\\sqrt{3} = 12\\sqrt{3}$.\nAngle of contact on large pulley: $\\theta_1 = 2\\pi - 2\\left(\\frac{\\pi}{3}\\right) = \\frac{4\\pi}{3}$.\nArc on large pulley $= 10 \\times \\frac{4\\pi}{3} = \\frac{40\\pi}{3}$.\nAngle of contact on small pulley: $\\theta_2 = 2\\left(\\frac{\\pi}{3}\\right) = \\frac{2\\pi}{3}$.\nArc on small pulley $= 4 \\times \\frac{2\\pi}{3} = \\frac{8\\pi}{3}$.\nTotal belt length $= 12\\sqrt{3} + \\frac{40\\pi}{3} + \\frac{8\\pi}{3} = 12\\sqrt{3} + 16\\pi\\text{ cm} \\approx 71.0\\text{ cm}$.',
              markingScheme: ['M1: Find contact angle $\\cos\\phi = 6/12 = 1/2 \\implies \\phi = \\pi/3$', 'M1: Straight length $= 6\\sqrt{3}$ each', 'M1: Arc on large pulley $= 40\\pi/3$', 'M1: Arc on small pulley $= 8\\pi/3$', 'A1: Total length $12\\sqrt{3} + 16\\pi\\text{ cm}$ (or $\\approx 71.0\\text{ cm}$)'],
            },
            {
              id: '4_test_q9',
              number: 3,
              question: 'The diagram shows a circle with center $O$ and radius $r$. Tangents are drawn from an external point $T$ to touch the circle at $A$ and $B$, where $OT = 2r$. Show that the area of the region bounded by $TA$, $TB$, and the minor arc $AB$ is $r^2\\left(\\sqrt{3} - \\frac{\\pi}{3}\\right)$. [6 marks]',
              marks: 6,
              solution: 'In right-angled triangle $OAT$: $\\cos(\\angle AOT) = \\frac{OA}{OT} = \\frac{r}{2r} = \\frac{1}{2} \\implies \\angle AOT = \\frac{\\pi}{3} = 60^\\circ$.\nBy symmetry, $\\angle AOB = 2 \\times \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.\nLength $AT = \\sqrt{OT^2 - OA^2} = \\sqrt{4r^2 - r^2} = r\\sqrt{3}$.\nArea of kite $OATB = 2 \\times \\text{Area}(\\triangle OAT) = 2 \\times \\left(\\frac{1}{2} \\times r \\times r\\sqrt{3}\\right) = r^2\\sqrt{3}$.\nArea of sector $OAB = \\frac{1}{2}r^2\\left(\\frac{2\\pi}{3}\\right) = \\frac{\\pi}{3}r^2$.\nShaded area $= \\text{Area of kite} - \\text{Area of sector} = r^2\\sqrt{3} - \\frac{\\pi}{3}r^2 = r^2\\left(\\sqrt{3} - \\frac{\\pi}{3}\\right)$.',
              markingScheme: ['M1: Find $\\angle AOT = \\pi/3$', 'M1: $AT = r\\sqrt{3}$', 'M1: Area of kite $= r^2\\sqrt{3}$', 'M1: Area of sector $= \\frac{\\pi}{3}r^2$', 'A1: Conclude $r^2(\\sqrt{3} - \\pi/3)$'],
            },
          ],
        },
      ],
    },
  ],
};
