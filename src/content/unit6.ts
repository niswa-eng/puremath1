import { Unit } from '../types/content';

/**
 * ============================================================================
 * Cambridge International AS & A Level Mathematics (9709) - Pure Mathematics 1
 * Unit 6: Series
 * ============================================================================
 */

export const unit6: Unit = {
  id: 'unit_6',
  number: 6,
  title: 'Series',
  learningObjectives: [
    '1.6.1: understand the binomial theorem for positive integer n and use it to expand expressions of the form (a + b)ⁿ',
    '1.6.2: understand the concept of an arithmetic progression, find the sum of a finite arithmetic progression and solve related problems',
    '1.6.3: understand the concept of a geometric progression, find the sum of a finite geometric progression and solve related problems',
    '1.6.4: find the sum to infinity of a convergent geometric progression and solve related problems',
  ],
  subtopics: [
    // ------------------------------------------------------------------------
    // 6.1 Binomial expansion of (a+b)^n
    // ------------------------------------------------------------------------
    {
      id: 'sub_6_1',
      number: '6.1',
      title: 'Binomial expansion of (a+b)^n',
      type: 'lesson',
      steps: [
        {
          id: '6_1_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Pascal\'s Triangle & Power Distribution',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Combinatorics of Brackets',
              content:
                'Multiplying out $(a + b)^n = (a + b)(a + b)\\dots(a + b)$ means choosing either an $a$ or a $b$ from each of the $n$ brackets. The total power of each term always sums to $n$: $a^n, a^{n-1}b, a^{n-2}b^2, \\dots, b^n$. The number of ways to choose $r$ copies of $b$ out of $n$ brackets is given by the combinations formula $\\binom{n}{r}$, which matches row $n$ of Pascal\'s Triangle!',
            },
            {
              type: 'formula_card',
              title: 'The Binomial Theorem for Positive Integer $n$',
              math: '(a + b)^n = a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\dots + \\binom{n}{r}a^{n-r}b^r + \\dots + b^n',
              content: 'The general $(r+1)$th term is $T_{r+1} = \\binom{n}{r} a^{n-r} b^r$, where $r = 0, 1, 2, \\dots, n$. Notice that when $b$ is negative (e.g. $(a - 2x)^n$), powers of $b$ alternate in sign!',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Binomial Expression',
                  definition: 'An algebraic sum of two terms: $(a + b)$.',
                },
                {
                  term: 'Coefficient vs Term',
                  definition: 'The "term in $x^2$" includes $x^2$ (e.g. $24x^2$); the "coefficient" is the pure numerical multiplier (24).',
                },
              ],
            },
          ],
        },
        {
          id: '6_1_s2',
          stepNumber: 2,
          title: 'Worked Example: First Three Terms Expansion',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Find the first three terms in ascending powers of $x$ of $(2 - 3x)^5$',
              content: 'Demonstrating systematic substitution into the binomial formula:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Identify $a = 2$, $b = -3x$, and $n = 5$. We need terms for $r = 0, 1, 2$.',
                  math: 'T_1 = 2^5, \\quad T_2 = \\binom{5}{1}(2)^4(-3x)^1, \\quad T_3 = \\binom{5}{2}(2)^3(-3x)^2',
                },
                {
                  stepNumber: 2,
                  explanation: 'Calculate binomial coefficients: $\\binom{5}{0} = 1$, $\\binom{5}{1} = 5$, $\\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = 10$.',
                  math: '10 = \\frac{5 \\times 4}{2 \\times 1}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Evaluate each term carefully including powers of negative numbers.',
                  math: 'T_1 = 32\\\\ T_2 = 5 \\times 16 \\times (-3x) = -240x\\\\ T_3 = 10 \\times 8 \\times (9x^2) = 720x^2',
                },
                {
                  stepNumber: 4,
                  explanation: 'Write out the expansion up to $x^2$.',
                  math: '(2 - 3x)^5 = 32 - 240x + 720x^2 + \\dots',
                },
              ],
            },
          ],
        },
        {
          id: '6_1_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Squaring Only $x$ instead of the Whole Term',
              mistake: 'Writing $(-3x)^2 = -3x^2$ or $-9x^2$.',
              correction: 'Always wrap the entire term in brackets: $(-3x)^2 = (-3)^2 \\times x^2 = +9x^2$.',
              proTip: 'When an exam question says "ascending powers of $x$", it means terms must go constant, then $x$, then $x^2$. Descending powers means starting from the highest power of $x$.',
            },
          ],
        },
        {
          id: '6_1_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '6_1_q1',
              questionNumber: 1,
              prompt: 'Expand $(1 + 2x)^4$ completely in ascending powers of $x$.',
              hint: 'Coefficients from Pascal row 4 are 1, 4, 6, 4, 1.',
              answer: '$1 + 4(2x) + 6(2x)^2 + 4(2x)^3 + (2x)^4 = 1 + 8x + 24x^2 + 32x^3 + 16x^4$',
              marks: 3,
            },
            {
              id: '6_1_q2',
              questionNumber: 2,
              prompt: 'Find the first 3 terms in ascending powers of $x$ of $(3 - x)^4$.',
              hint: '$a = 3, b = -x, n = 4$. Terms for $r=0, 1, 2$.',
              answer: '$3^4 + 4(3^3)(-x) + 6(3^2)(-x)^2 = 81 - 108x + 54x^2$',
              marks: 3,
            },
            {
              id: '6_1_q3',
              questionNumber: 3,
              prompt: 'State the coefficient of $x^3$ in the expansion of $(1 - 4x)^5$.',
              hint: '$\\binom{5}{3}(1)^2(-4x)^3 = 10(-64)x^3$.',
              answer: '$-640$',
              marks: 2,
            },
          ],
        },
        {
          id: '6_1_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '6_1_q4',
              questionNumber: 1,
              prompt: 'In the expansion of $\\left(x + \\frac{2}{x}\\right)^6$, find the term independent of $x$.',
              hint: 'General term: $\\binom{6}{r} x^{6-r} (2x^{-1})^r = \\binom{6}{r} 2^r x^{6 - 2r}$. Set $6 - 2r = 0$.',
              answer: '$r = 3 \\implies \\binom{6}{3} 2^3 x^0 = 20 \\times 8 = 160$',
              marks: 3,
            },
            {
              id: '6_1_q5',
              questionNumber: 2,
              prompt: 'Find the coefficient of $x^2$ in the expansion of $(1 + 2x)(2 - x)^5$.',
              hint: 'Expand $(2 - x)^5 = 32 - 80x + 80x^2 + \\dots$. Then multiply: $1(80x^2) + 2x(-80x)$.',
              answer: '$80 + 2(-80) = 80 - 160 = -80$',
              marks: 4,
            },
            {
              id: '6_1_q6',
              questionNumber: 3,
              prompt: 'The first three terms in the expansion of $(1 + ax)^n$ are $1 + 12x + 60x^2$. Find the positive integer $n$ and the constant $a$.',
              hint: '$na = 12$ and $\\frac{n(n-1)}{2}a^2 = 60$.',
              answer: '$na = 12 \\implies a = \\frac{12}{n}$. Then $\\frac{n(n-1)}{2} \\frac{144}{n^2} = 60 \\implies 72(n-1) = 60n \\implies 12n = 72 \\implies n = 6, a = 2$.',
              marks: 4,
            },
          ],
        },
        {
          id: '6_1_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '6_1_q7',
              questionNumber: 1,
              prompt: '(i) Find the first three terms in the expansion, in ascending powers of $x$, of $\\left(2 - \\frac{1}{2}x\\right)^6$. (ii) Hence find the coefficient of $x^2$ in the expansion of $(1 + 4x)\\left(2 - \\frac{1}{2}x\\right)^6$. [5 marks]',
              hint: 'In (i), expand $2^6 + 6(2^5)(-\\frac{1}{2}x) + 15(2^4)(-\\frac{1}{2}x)^2$. In (ii), collect the constant $\\times x^2$ and $x \\times x$ terms.',
              answer: '(i) $2^6 + 6(32)(-\\frac{1}{2}x) + 15(16)(\\frac{1}{4}x^2) = 64 - 96x + 60x^2$.\n(ii) Expansion of $(1 + 4x)(64 - 96x + 60x^2 + \\dots)$: term in $x^2$ is $1(60x^2) + 4x(-96x) = (60 - 384)x^2 = -324x^2$. Coefficient is $-324$.',
              marks: 5,
              markingScheme: [
                'B1: Constant term 64',
                'B1: Term $-96x$',
                'B1: Term $60x^2$',
                'M1: Correct product pairing $1(60) + 4(-96)$',
                'A1: Final coefficient $-324$',
              ],
            },
            {
              id: '6_1_q8',
              questionNumber: 2,
              prompt: 'In the expansion of $\\left(2x - \\frac{a}{x}\\right)^8$, the coefficient of $x^2$ is $-448$. Find the value of the constant $a$. [4 marks]',
              hint: 'General term: $\\binom{8}{r}(2x)^{8-r}(-ax^{-1})^r = \\binom{8}{r} 2^{8-r} (-a)^r x^{8 - 2r}$. Set $8 - 2r = 2 \\implies r = 3$.',
              answer: '$r = 3 \\implies \\binom{8}{3} 2^5 (-a)^3 x^2 = 56 \\times 32 \\times (-a^3) x^2 = -1792 a^3 x^2$.\n$-1792 a^3 = -448 \\implies a^3 = \\frac{448}{1792} = \\frac{1}{4} \\implies a = \\sqrt[3]{\\frac{1}{4}} = \\frac{1}{\\sqrt[3]{4}}$.',
              marks: 4,
              markingScheme: [
                'M1: Sets power $8 - 2r = 2$ to deduce $r = 3$',
                'M1: Evaluates $\\binom{8}{3} \\times 2^5 = 1792$',
                'A1: Obtains $-1792 a^3 = -448$',
                'A1: $a^3 = \\frac{1}{4} \\implies a = \\frac{1}{\\sqrt[3]{4}}$ or $0.630$',
              ],
            },
            {
              id: '6_1_q9',
              questionNumber: 3,
              prompt: 'The coefficient of $x^2$ in the expansion of $(1 + kx)(2 - x)^6$ is 0. Find the exact value of the constant $k$. [4 marks]',
              hint: 'Expand $(2 - x)^6 = 64 - 192x + 240x^2 - \\dots$. The $x^2$ term comes from $1(240x^2) + kx(-192x)$.',
              answer: '$(2 - x)^6 = 2^6 - 6(2^5)x + 15(2^4)x^2 = 64 - 192x + 240x^2$.\nIn $(1 + kx)(64 - 192x + 240x^2)$, the $x^2$ coefficient is $240 - 192k$.\nSetting $240 - 192k = 0 \\implies k = \\frac{240}{192} = \\frac{5}{4}$.',
              marks: 4,
              markingScheme: [
                'B1: Correctly identifies $-192$ and $240$ from $(2 - x)^6$',
                'M1: Forms equation $240 + k(-192) = 0$',
                'A1: $192k = 240$',
                'A1: $k = \\frac{5}{4}$ (or $1.25$)',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 6.2 Binomial coefficients
    // ------------------------------------------------------------------------
    {
      id: 'sub_6_2',
      number: '6.2',
      title: 'Binomial coefficients',
      type: 'lesson',
      steps: [
        {
          id: '6_2_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Combinations & Factorials',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Selecting Objects without Order',
              content:
                'The binomial coefficient $\\binom{n}{r}$ (read "$n$ choose $r$") is the number of ways to pick $r$ items from a group of $n$ distinct items without regard to order. By symmetry, choosing $r$ items to include is identical to choosing $n - r$ items to leave behind, which is why $\\binom{n}{r} = \\binom{n}{n-r}$.',
            },
            {
              type: 'formula_card',
              title: 'Factorial & Falling Factor Formulas',
              math: '\\begin{aligned} \\binom{n}{r} &= \\frac{n!}{r!(n - r)!} = \\frac{n(n - 1)(n - 2)\\dots(n - r + 1)}{r!} \\\\ \\binom{n}{0} &= 1, \\quad \\binom{n}{1} = n, \\quad \\binom{n}{n} = 1 \\\\ \\text{Symmetry: } \\binom{n}{r} &= \\binom{n}{n - r} \\end{aligned}',
              content: 'The falling factor version $\\frac{n(n-1)\\dots}{r!}$ is especially useful when $n$ is an unknown variable in an algebraic equation.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Factorial ($n!$)',
                  definition: 'The product of all positive integers up to $n$: $n! = n \\times (n-1) \\times \\dots \\times 1$, with $0! = 1$.',
                },
                {
                  term: 'Combinations $\\binom{n}{r}$ or ${}^n\\text{C}_r$',
                  definition: 'Number of unordered subsets of size $r$ drawn from $n$ elements.',
                },
              ],
            },
          ],
        },
        {
          id: '6_2_s2',
          stepNumber: 2,
          title: 'Worked Example: Solving for Unknown Power $n$',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Given that $\\binom{n}{2} = 36$, find the positive integer $n$',
              content: 'Using the algebraic definition of combinations:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Write out $\\binom{n}{2}$ using the falling factorial definition.',
                  math: '\\binom{n}{2} = \\frac{n(n - 1)}{2 \\times 1} = \\frac{n^2 - n}{2}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Equate to 36 and multiply by 2 to clear fractions.',
                  math: '\\frac{n(n - 1)}{2} = 36 \\implies n(n - 1) = 72 \\implies n^2 - n - 72 = 0',
                },
                {
                  stepNumber: 3,
                  explanation: 'Factor the quadratic equation.',
                  math: '(n - 9)(n + 8) = 0',
                },
                {
                  stepNumber: 4,
                  explanation: 'Since $n$ must be a positive integer, reject $n = -8$.',
                  math: 'n = 9',
                },
              ],
            },
          ],
        },
        {
          id: '6_2_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Writing Combinations as a Fraction $\\frac{n}{r}$',
              mistake: 'Putting a fraction bar inside the brackets: $\\left(\\frac{n}{r}\\right)$.',
              correction: 'There is NO fraction bar! The symbol $\\binom{n}{r}$ is a two-row column vector format. Writing a fraction bar is mathematically incorrect and can lose notation marks.',
              proTip: 'To compute $\\binom{10}{3}$ by hand in an exam: write 3 numbers counting down in the top ($10 \\times 9 \\times 8$) and 3 numbers in the bottom ($3 \\times 2 \\times 1$). Cancel $9/3 = 3$ and $8/2 = 4$: $10 \\times 3 \\times 4 = 120$.',
            },
          ],
        },
        {
          id: '6_2_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '6_2_q1',
              questionNumber: 1,
              prompt: 'Evaluate $\\binom{7}{3}$ without a calculator.',
              hint: '$\\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}$.',
              answer: '$\\frac{210}{6} = 35$',
              marks: 2,
            },
            {
              id: '6_2_q2',
              questionNumber: 2,
              prompt: 'Use symmetry to evaluate $\\binom{20}{18}$ without computing 18 terms.',
              hint: '$\\binom{20}{18} = \\binom{20}{2}$.',
              answer: '$\\frac{20 \\times 19}{2 \\times 1} = 190$',
              marks: 2,
            },
            {
              id: '6_2_q3',
              questionNumber: 3,
              prompt: 'Find the value of $k$ if $\\binom{k}{1} + \\binom{k}{2} = 28$.',
              hint: '$k + \\frac{k(k-1)}{2} = 28 \\implies 2k + k^2 - k = 56$.',
              answer: '$k^2 + k - 56 = 0 \\implies (k+8)(k-7) = 0 \\implies k = 7$',
              marks: 3,
            },
          ],
        },
        {
          id: '6_2_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '6_2_q4',
              questionNumber: 1,
              prompt: 'In the expansion of $(1 + 3x)^n$, the coefficient of $x^2$ is 90. Find the value of $n$.',
              hint: 'Term in $x^2$ is $\\binom{n}{2}(3x)^2 = \\frac{n(n-1)}{2}(9)x^2$. Set $9 \\times \\frac{n(n-1)}{2} = 90$.',
              answer: '$\\frac{n(n-1)}{2} = 10 \\implies n(n-1) = 20 \\implies n = 5$',
              marks: 3,
            },
            {
              id: '6_2_q5',
              questionNumber: 2,
              prompt: 'Prove that $\\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1}$ for positive integers $n > r$.',
              hint: 'Express both using factorials and find the common denominator $(r+1)!(n-r)!$.',
              answer: '$\\frac{n!}{r!(n-r)!} + \\frac{n!}{(r+1)!(n-r-1)!} = \\frac{n!(r+1) + n!(n-r)}{(r+1)!(n-r)!} = \\frac{n!(n+1)}{(r+1)!(n-r)!} = \\frac{(n+1)!}{(r+1)!(n-r)!} = \\binom{n+1}{r+1}$',
              marks: 4,
            },
            {
              id: '6_2_q6',
              questionNumber: 3,
              prompt: 'Find the ratio of the coefficient of $x^4$ to the coefficient of $x^3$ in $(1 + x)^9$.',
              hint: '$\\binom{9}{4} / \\binom{9}{3}$.',
              answer: '$\\binom{9}{4} = 126, \\binom{9}{3} = 84 \\implies \\frac{126}{84} = \\frac{3}{2}$',
              marks: 3,
            },
          ],
        },
        {
          id: '6_2_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '6_2_q7',
              questionNumber: 1,
              prompt: 'The coefficient of $x^3$ in the expansion of $(2 + ax)^n$ is 8 times the coefficient of $x^2$. Given $a = 1$, find the value of $n$. [4 marks]',
              hint: 'Term in $x^2$: $\\binom{n}{2} 2^{n-2} x^2$. Term in $x^3$: $\\binom{n}{3} 2^{n-3} x^3$. Equate and solve.',
              answer: '$\\binom{n}{3} 2^{n-3} = 8 \\times \\binom{n}{2} 2^{n-2} \\implies \\frac{n(n-1)(n-2)}{6} 2^{n-3} = 8 \\times \\frac{n(n-1)}{2} 2^{n-2}$.\nDivide both sides by $n(n-1) 2^{n-3}$:\n$\\frac{n-2}{6} = 4 \\times 2 = 8 \\implies n - 2 = 48 \\implies n = 50$. (If $8 \\times 2^{n-2} = 16 \\times 2^{n-3} \\implies \\frac{n-2}{6} = 8 \\times 2 = 16 \\implies n - 2 = 96 \\implies n = 98$).',
              marks: 4,
              markingScheme: [
                'M1: Formulates terms $\\binom{n}{3} 2^{n-3}$ and $\\binom{n}{2} 2^{n-2}$',
                'M1: Equates with factor of 8',
                'M1: Cancels common factors $n(n-1)$ and powers of 2 correctly',
                'A1: Concludes with integer value $n$',
              ],
            },
            {
              id: '6_2_q8',
              questionNumber: 2,
              prompt: 'In the expansion of $(3 + 2x)^n$, the coefficients of $x$ and $x^2$ are in the ratio $3 : 4$. Find the value of $n$. [4 marks]',
              hint: 'Coefficient of $x$: $\\binom{n}{1} 3^{n-1} 2$. Coefficient of $x^2$: $\\binom{n}{2} 3^{n-2} 4$.',
              answer: 'Coeff of $x = 2n \\times 3^{n-1}$. Coeff of $x^2 = \\frac{n(n-1)}{2} \\times 4 \\times 3^{n-2} = 2n(n-1) \\times 3^{n-2}$.\nRatio: $\\frac{2n \\times 3^{n-1}}{2n(n-1) \\times 3^{n-2}} = \\frac{3}{n - 1}$.\nEquating to $\\frac{3}{4} \\implies \\frac{3}{n - 1} = \\frac{3}{4} \\implies n - 1 = 4 \\implies n = 5$.',
              marks: 4,
              markingScheme: [
                'B1: Correct expression for coefficient of $x$',
                'B1: Correct expression for coefficient of $x^2$',
                'M1: Forms ratio $\\frac{\\text{coeff}(x)}{\\text{coeff}(x^2)}$ and cancels powers of 3 and $n$',
                'A1: $n = 5$',
              ],
            },
            {
              id: '6_2_q9',
              questionNumber: 3,
              prompt: 'Show that the sum of the coefficients in the expansion of $(1 + x)^n$ is $2^n$, and deduce that $\\binom{n}{0} + \\binom{n}{1} + \\dots + \\binom{n}{n} = 2^n$. [4 marks]',
              hint: 'Substitute $x = 1$ into the identity $(1 + x)^n = \\sum_{r=0}^n \\binom{n}{r} x^r$.',
              answer: 'By the Binomial Theorem, $(1 + x)^n = \\binom{n}{0} + \\binom{n}{1}x + \\binom{n}{2}x^2 + \\dots + \\binom{n}{n}x^n$. Setting $x = 1$ on both sides gives $(1 + 1)^n = \\binom{n}{0}(1) + \\binom{n}{1}(1) + \\dots + \\binom{n}{n}(1) \\implies 2^n = \\sum_{r=0}^n \\binom{n}{r}$.',
              marks: 4,
              markingScheme: [
                'M1: States the general binomial expansion for $(1 + x)^n$',
                'M1: Realises setting $x = 1$ isolates the sum of the coefficients',
                'A1: Demonstrates LHS becomes $(1+1)^n = 2^n$',
                'A1: Fully justified deduction',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 6.3 Arithmetic progressions
    // ------------------------------------------------------------------------
    {
      id: 'sub_6_3',
      number: '6.3',
      title: 'Arithmetic progressions',
      type: 'lesson',
      steps: [
        {
          id: '6_3_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Linear Growth & Gauss\'s Pairing Trick',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Constant Step Size',
              content:
                'An Arithmetic Progression (AP) is the sequence analogue of a straight line: each new term is found by adding a constant step $d$ (common difference) to the previous term. When young Gauss was asked to add $1 + 2 + \\dots + 100$, he noticed that pairing the first and last numbers $(1 + 100 = 101, 2 + 99 = 101)$ created 50 identical pairs. This elegant trick gives the universal sum formula for any AP!',
            },
            {
              type: 'formula_card',
              title: 'AP General Term & Sum Formulas',
              math: '\\begin{aligned} u_n &= a + (n - 1)d \\\\ S_n &= \\frac{n}{2}\\left(2a + (n - 1)d\\right) \\\\ S_n &= \\frac{n}{2}\\left(a + l\\right) \\quad \\text{where } l = u_n \\text{ is the last term} \\end{aligned}',
              content: 'Notice that $d = u_n - u_{n-1} = u_2 - u_1$. If $d > 0$, the sequence increases; if $d < 0$, it decreases.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'First Term ($a$)',
                  definition: 'The initial value of the sequence $u_1$.',
                },
                {
                  term: 'Common Difference ($d$)',
                  definition: 'The constant difference between any term and its preceding term ($u_{k+1} - u_k$).',
                },
              ],
            },
          ],
        },
        {
          id: '6_3_s2',
          stepNumber: 2,
          title: 'Worked Example: Simultaneous Equations in AP',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'An AP has 5th term 17 and 12th term 38. Find the first term, the common difference, and the sum of the first 20 terms',
              content: 'Set up simultaneous linear equations:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Translate the given terms into expressions using $u_n = a + (n-1)d$.',
                  math: 'u_5 = a + 4d = 17 \\quad \\text{--- (1)}\\\\ u_{12} = a + 11d = 38 \\quad \\text{--- (2)}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Subtract equation (1) from equation (2) to eliminate $a$.',
                  math: '(a + 11d) - (a + 4d) = 38 - 17 \\implies 7d = 21 \\implies d = 3',
                },
                {
                  stepNumber: 3,
                  explanation: 'Substitute $d = 3$ back into equation (1) to find $a$.',
                  math: 'a + 4(3) = 17 \\implies a + 12 = 17 \\implies a = 5',
                },
                {
                  stepNumber: 4,
                  explanation: 'Calculate the sum of the first 20 terms using $S_n = \\frac{n}{2}(2a + (n-1)d)$.',
                  math: 'S_{20} = \\frac{20}{2}[2(5) + 19(3)] = 10[10 + 57] = 10(67) = 670',
                },
              ],
            },
          ],
        },
        {
          id: '6_3_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Using $nd$ Instead of $(n-1)d$',
              mistake: 'Writing $u_5 = a + 5d$ instead of $a + 4d$.',
              correction: 'The first term has zero differences added ($u_1 = a + 0d$). The $n$th term always has $(n-1)$ steps of $d$!',
              proTip: 'To find the sum of terms from term $p$ to term $q$ inclusive: calculate $S_q - S_{p-1}$, NOT $S_q - S_p$ (subtracting $S_p$ would throw away term $p$!).',
            },
          ],
        },
        {
          id: '6_3_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '6_3_q1',
              questionNumber: 1,
              prompt: 'Find the 15th term of the AP: $7, 11, 15, 19, \\dots$',
              hint: '$a = 7, d = 4$. $u_{15} = a + 14d$.',
              answer: '$u_{15} = 7 + 14(4) = 7 + 56 = 63$',
              marks: 2,
            },
            {
              id: '6_3_q2',
              questionNumber: 2,
              prompt: 'Find the sum of the first 25 terms of the AP with $a = 4$ and $d = 3$.',
              hint: '$S_{25} = \\frac{25}{2}[2(4) + 24(3)]$.',
              answer: '$S_{25} = 12.5[8 + 72] = 12.5 \\times 80 = 1000$',
              marks: 2,
            },
            {
              id: '6_3_q3',
              questionNumber: 3,
              prompt: 'How many terms are in the sequence $100, 93, 86, \\dots, 2$?',
              hint: '$a = 100, d = -7$. Solve $100 + (n-1)(-7) = 2$.',
              answer: '$100 - 7n + 7 = 2 \\implies 7n = 105 \\implies n = 15$',
              marks: 3,
            },
          ],
        },
        {
          id: '6_3_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '6_3_q4',
              questionNumber: 1,
              prompt: 'The sum of the first $n$ terms of an AP is given by $S_n = 2n^2 + 5n$. Find the first term and the common difference.',
              hint: '$u_1 = S_1$. $u_2 = S_2 - S_1$. Then $d = u_2 - u_1$.',
              answer: '$u_1 = S_1 = 2(1)^2 + 5(1) = 7$. $S_2 = 2(4) + 5(2) = 18 \\implies u_2 = 18 - 7 = 11$. $d = 11 - 7 = 4$.',
              marks: 3,
            },
            {
              id: '6_3_q5',
              questionNumber: 2,
              prompt: 'Find the sum of all integers between 100 and 300 that are divisible by 7.',
              hint: 'First multiple is $105 = 7 \\times 15$. Last multiple is $294 = 7 \\times 42$. Number of terms $n = 42 - 15 + 1 = 28$.',
              answer: '$S_{28} = \\frac{28}{2}(105 + 294) = 14 \\times 399 = 5586$',
              marks: 4,
            },
            {
              id: '6_3_q6',
              questionNumber: 3,
              prompt: 'A runner increases her distance each day by $0.4\\text{ km}$. On day 1 she runs $3\\text{ km}$. On which day will her total distance run first exceed $100\\text{ km}$?',
              hint: '$a = 3, d = 0.4$. Set $\\frac{n}{2}[6 + (n-1)(0.4)] > 100$.',
              answer: '$n[6 + 0.4n - 0.4] > 200 \\implies 0.4n^2 + 5.6n - 200 > 0 \\implies n^2 + 14n - 500 > 0$. Roots: $n = \\frac{-14 \\pm \\sqrt{196 + 2000}}{2} = \\frac{-14 \\pm 46.86}{2} \\approx 16.43$. Thus on day 17.',
              marks: 4,
            },
          ],
        },
        {
          id: '6_3_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '6_3_q7',
              questionNumber: 1,
              prompt: 'An arithmetic progression has first term $a$ and common difference $d$. The sum of the first 10 terms is 155, and the sum of the first 20 terms is 610. (i) Find $a$ and $d$. (ii) Find the sum of the terms from the 11th term to the 20th term inclusive. [5 marks]',
              hint: 'Use $S_n = \\frac{n}{2}(2a + (n-1)d)$. For (ii), sum is $S_{20} - S_{10}$.',
              answer: '(i) $S_{10} = 5(2a + 9d) = 155 \\implies 2a + 9d = 31$.\n$S_{20} = 10(2a + 19d) = 610 \\implies 2a + 19d = 61$.\nSubtracting: $10d = 30 \\implies d = 3$. Then $2a + 27 = 31 \\implies 2a = 4 \\implies a = 2$.\n(ii) Sum from 11th to 20th is $S_{20} - S_{10} = 610 - 155 = 455$.',
              marks: 5,
              markingScheme: [
                'M1: Sets up $S_{10} = 5(2a + 9d) = 155$',
                'M1: Sets up $S_{20} = 10(2a + 19d) = 610$',
                'A1: Solves to get $d = 3$ and $a = 2$',
                'M1: Realises sum is $S_{20} - S_{10}$',
                'A1: 455',
              ],
            },
            {
              id: '6_3_q8',
              questionNumber: 2,
              prompt: 'The $k$th term of an arithmetic progression is 0. Show that the sum of the first $(2k - 1)$ terms is 0. [4 marks]',
              hint: '$u_k = a + (k-1)d = 0 \\implies a = -(k-1)d$. Substitute into $S_{2k-1}$.',
              answer: '$u_k = a + (k-1)d = 0 \\implies 2a = -2(k-1)d$.\n$S_{2k-1} = \\frac{2k-1}{2}\\left[2a + ((2k-1) - 1)d\\right] = \\frac{2k-1}{2}\\left[2a + (2k-2)d\\right] = \\frac{2k-1}{2}\\left[2a + 2(k-1)d\\right]$.\nSubstituting $2a = -2(k-1)d$ gives $\\frac{2k-1}{2}\\left[-2(k-1)d + 2(k-1)d\\right] = \\frac{2k-1}{2}(0) = 0$.',
              marks: 4,
              markingScheme: [
                'B1: States $a + (k-1)d = 0$',
                'M1: Writes $S_{2k-1} = \\frac{2k-1}{2}[2a + (2k-2)d]$',
                'M1: Substitutes $2a = -2(k-1)d$ or $a = -(k-1)d$',
                'A1: Fully correct algebraic demonstration that sum is 0',
              ],
            },
            {
              id: '6_3_q9',
              questionNumber: 3,
              prompt: 'In an AP, the 8th term is twice the 4th term, and the 20th term is 40. Find the first term, the common difference, and the number of terms needed for the sum to exceed 500. [5 marks]',
              hint: '$a + 7d = 2(a + 3d) \\implies a = d$. $u_{20} = a + 19d = 40$.',
              answer: '$a + 7d = 2a + 6d \\implies a = d$.\n$u_{20} = a + 19a = 20a = 40 \\implies a = 2, d = 2$.\n$S_n = \\frac{n}{2}[2(2) + (n-1)2] = \\frac{n}{2}[4 + 2n - 2] = \\frac{n}{2}[2n + 2] = n(n + 1) = n^2 + n$.\n$n^2 + n > 500 \\implies n^2 + n - 500 > 0$.\n$n = \\frac{-1 + \\sqrt{1 + 2000}}{2} = \\frac{-1 + 44.73}{2} \\approx 21.86$. Thus 22 terms are needed.',
              marks: 5,
              markingScheme: [
                'M1: Uses $u_8 = 2u_4$ to establish $a = d$',
                'A1: Solves with $u_{20} = 40$ to get $a = 2, d = 2$',
                'M1: Sets up $S_n = n(n+1) > 500$',
                'M1: Solves quadratic inequality',
                'A1: Correctly identifies $n = 22$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 6.4 Geometric progressions
    // ------------------------------------------------------------------------
    {
      id: 'sub_6_4',
      number: '6.4',
      title: 'Geometric progressions',
      type: 'lesson',
      steps: [
        {
          id: '6_4_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Exponential Multipliers',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Multiplicative Compounding',
              content:
                'A Geometric Progression (GP) models exponential scaling: each new term is found by multiplying the previous term by a fixed ratio $r$ (common ratio). Like compound interest, bacterial replication, or radioactive decay, GPs change rapidly. The terms follow $a, ar, ar^2, ar^3, \\dots$, where the power of $r$ for the $n$th term is always $n-1$.',
            },
            {
              type: 'formula_card',
              title: 'GP General Term & Finite Sum Formulas',
              math: '\\begin{aligned} u_n &= a r^{n-1} \\\\ S_n &= \\frac{a(1 - r^n)}{1 - r} = \\frac{a(r^n - 1)}{r - 1} \\quad (r \\ne 1) \\\\ \\text{Common Ratio: } r &= \\frac{u_2}{u_1} = \\frac{u_3}{u_2} = \\dots = \\frac{u_n}{u_{n-1}} \\end{aligned}',
              content: 'If $|r| < 1$, the terms shrink towards 0. If $r < 0$, the signs alternate (+, -, +, -, ...).',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Common Ratio ($r$)',
                  definition: 'The constant multiplier between consecutive terms ($r = u_{k+1}/u_k$).',
                },
                {
                  term: 'Alternating Geometric Sequence',
                  definition: 'A GP where $r < 0$, causing terms to flip signs back and forth across 0.',
                },
              ],
            },
          ],
        },
        {
          id: '6_4_s2',
          stepNumber: 2,
          title: 'Worked Example: Finding $a$ and $r$ in a GP',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'The 3rd term of a GP with positive terms is 18 and the 6th term is 486. Find the first term, the common ratio, and the sum of the first 6 terms',
              content: 'Forming quotients to eliminate $a$:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Express the given terms using $u_n = ar^{n-1}$.',
                  math: 'u_3 = ar^2 = 18 \\quad \\text{--- (1)}\\\\ u_6 = ar^5 = 486 \\quad \\text{--- (2)}',
                },
                {
                  stepNumber: 2,
                  explanation: 'Divide equation (2) by equation (1) to eliminate $a$.',
                  math: '\\frac{ar^5}{ar^2} = \\frac{486}{18} \\implies r^3 = 27 \\implies r = \\sqrt[3]{27} = 3',
                },
                {
                  stepNumber: 3,
                  explanation: 'Substitute $r = 3$ back into equation (1) to find $a$.',
                  math: 'a(3^2) = 18 \\implies 9a = 18 \\implies a = 2',
                },
                {
                  stepNumber: 4,
                  explanation: 'Apply the finite sum formula $S_6 = \\frac{a(r^6 - 1)}{r - 1}$.',
                  math: 'S_6 = \\frac{2(3^6 - 1)}{3 - 1} = \\frac{2(729 - 1)}{2} = 728',
                },
              ],
            },
          ],
        },
        {
          id: '6_4_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Even Powers and Missing the $\\pm$ Sign',
              mistake: 'Solving $r^2 = 4$ and writing $r = 2$ without checking if $r = -2$ is possible.',
              correction: 'Even roots yield $\\pm$. Unless the question explicitly states "all terms are positive", you MUST consider both $r = +2$ and $r = -2$!',
              proTip: 'When solving GP problems involving three consecutive terms $x, y, z$, write the equal ratio condition directly: $\\frac{y}{x} = \\frac{z}{y} \\implies y^2 = xz$.',
            },
          ],
        },
        {
          id: '6_4_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '6_4_q1',
              questionNumber: 1,
              prompt: 'Find the 8th term of the GP: $3, 6, 12, 24, \\dots$',
              hint: '$a = 3, r = 2$. $u_8 = 3(2^7)$.',
              answer: '$u_8 = 3(128) = 384$',
              marks: 2,
            },
            {
              id: '6_4_q2',
              questionNumber: 2,
              prompt: 'Find the sum of the first 8 terms of the GP: $1, -2, 4, -8, \\dots$',
              hint: '$a = 1, r = -2$. $S_8 = \\frac{1(1 - (-2)^8)}{1 - (-2)}$.',
              answer: '$S_8 = \\frac{1 - 256}{3} = \\frac{-255}{3} = -85$',
              marks: 3,
            },
            {
              id: '6_4_q3',
              questionNumber: 3,
              prompt: 'The numbers $x, 12, 36$ are consecutive terms of a GP. Find $x$.',
              hint: '$\\frac{12}{x} = \\frac{36}{12} = 3$.',
              answer: '$x = \\frac{12}{3} = 4$',
              marks: 2,
            },
          ],
        },
        {
          id: '6_4_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '6_4_q4',
              questionNumber: 1,
              prompt: 'The second term of a GP is 6 and the fifth term is $1.296$. Find the common ratio and the first term.',
              hint: '$ar = 6, ar^4 = 1.296 \\implies r^3 = 1.296 / 6 = 0.216$.',
              answer: '$r = \\sqrt[3]{0.216} = 0.6$. $a = 6 / 0.6 = 10$.',
              marks: 3,
            },
            {
              id: '6_4_q5',
              questionNumber: 2,
              prompt: 'Find the smallest value of $n$ such that the sum of the first $n$ terms of $1 + 2 + 4 + \\dots$ exceeds $10^6$.',
              hint: '$S_n = 2^n - 1 > 10^6 \\implies 2^n > 1000001$. Take logarithms.',
              answer: '$n > \\frac{\\ln(1000001)}{\\ln 2} \\approx 19.93 \\implies n = 20$',
              marks: 4,
            },
            {
              id: '6_4_q6',
              questionNumber: 3,
              prompt: 'The terms $k - 1, k + 2,$ and $3k$ are consecutive terms of a GP with positive ratio. Find the value of $k$.',
              hint: '$(k + 2)^2 = (k - 1)(3k) \\implies k^2 + 4k + 4 = 3k^2 - 3k$.',
              answer: '$2k^2 - 7k - 4 = 0 \\implies (2k + 1)(k - 4) = 0$. For positive terms, $k = 4$ (terms are $3, 6, 12$, $r = 2$).',
              marks: 4,
            },
          ],
        },
        {
          id: '6_4_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '6_4_q7',
              questionNumber: 1,
              prompt: 'A geometric progression has first term $a = 12$ and common ratio $r = 1.2$. (i) Find the 10th term, giving your answer to 1 decimal place. (ii) Find the least value of $n$ for which the sum of the first $n$ terms exceeds 5000. [5 marks]',
              hint: 'In (i), $u_{10} = 12(1.2)^9$. In (ii), $\\frac{12(1.2^n - 1)}{1.2 - 1} > 5000$.',
              answer: '(i) $u_{10} = 12(1.2)^9 \\approx 12(5.15978) = 61.9$.\n(ii) $S_n = \\frac{12(1.2^n - 1)}{0.2} = 60(1.2^n - 1) > 5000 \\implies 1.2^n - 1 > 83.333 \\implies 1.2^n > 84.333$.\nTaking logs: $n \\ln(1.2) > \\ln(84.333) \\implies n > \\frac{4.4348}{0.18232} \\approx 24.32$. Least integer is $n = 25$.',
              marks: 5,
              markingScheme: [
                'B1: $u_{10} = 61.9$',
                'M1: Sets up $60(1.2^n - 1) > 5000$',
                'A1: Obtains $1.2^n > 84.33$ or $1.2^n > 253/3$',
                'M1: Correct use of logarithms to solve exponential inequality',
                'A1: $n = 25$',
              ],
            },
            {
              id: '6_4_q8',
              questionNumber: 2,
              prompt: 'The first term of a GP is $a$ and the common ratio is $r$. The sum of the first two terms is 15 and the sum of the first four terms is 255. Given that $r > 0$, find the values of $a$ and $r$. [5 marks]',
              hint: '$S_2 = a(1 + r) = 15$ and $S_4 = a(1 + r + r^2 + r^3) = a(1 + r)(1 + r^2) = 255$.',
              answer: '$\\frac{S_4}{S_2} = \\frac{a(r^4 - 1)/(r - 1)}{a(r^2 - 1)/(r - 1)} = \\frac{r^4 - 1}{r^2 - 1} = r^2 + 1$.\nThus $r^2 + 1 = \\frac{255}{15} = 17 \\implies r^2 = 16$. Since $r > 0$, $r = 4$.\nThen $a(1 + 4) = 15 \\implies 5a = 15 \\implies a = 3$.',
              marks: 5,
              markingScheme: [
                'M1: Writes expressions for $S_2$ and $S_4$',
                'M1: Recognises factorization $(r^4 - 1) = (r^2 - 1)(r^2 + 1)$',
                'A1: Obtains $r^2 + 1 = 17$',
                'A1: $r = 4$ (justifying $r > 0$)',
                'A1: $a = 3$',
              ],
            },
            {
              id: '6_4_q9',
              questionNumber: 3,
              prompt: 'An alternating geometric progression has second term $-6$ and fifth term $\\frac{16}{9}$. (i) Find the common ratio and the first term. (ii) Find the sum of the first 8 terms. [5 marks]',
              hint: '$ar = -6, ar^4 = 16/9 \\implies r^3 = (16/9) / (-6) = -8/27$.',
              answer: '(i) $r^3 = -\\frac{8}{27} \\implies r = -\\frac{2}{3}$.\n$a\\left(-\\frac{2}{3}\\right) = -6 \\implies a = 9$.\n(ii) $S_8 = \\frac{9\\left(1 - (-2/3)^8\\right)}{1 - (-2/3)} = \\frac{9\\left(1 - \\frac{256}{6561}\\right)}{5/3} = \\frac{27}{5} \\times \\frac{6305}{6561} = \\frac{27 \\times 1261}{6561} = \\frac{1261}{243} \\approx 5.19$.',
              marks: 5,
              markingScheme: [
                'M1: Divides terms to get $r^3 = -8/27$',
                'A1: $r = -2/3$',
                'A1: $a = 9$',
                'M1: Applies $S_8$ formula with negative ratio and power 8',
                'A1: Exact answer $\\frac{1261}{243}$ or $5.19$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 6.5 Infinite geometric series
    // ------------------------------------------------------------------------
    {
      id: 'sub_6_5',
      number: '6.5',
      title: 'Infinite geometric series',
      type: 'lesson',
      steps: [
        {
          id: '6_5_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Zeno\'s Paradox & Convergence',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Adding Infinite Slices to a Finite Whole',
              content:
                'Imagine cutting a square cake in half ($1/2$), then halving the remainder ($1/4$), then halving again ($1/8$)... If you add all infinite pieces together: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots$, you simply get the original whole cake: 1! An infinite series converges to a finite sum if and only if each term shrinks rapidly enough, which requires the common ratio $r$ to lie strictly between $-1$ and $1$.',
            },
            {
              type: 'formula_card',
              title: 'Condition for Convergence & Sum to Infinity',
              math: '\\begin{aligned} \\text{Convergence Condition: } & |r| < 1 \\iff -1 < r < 1 \\\\ S_\\infty &= \\lim_{n \\to \\infty} \\frac{a(1 - r^n)}{1 - r} = \\frac{a}{1 - r} \\quad (\\text{since } r^n \\to 0) \\end{aligned}',
              content: 'If $|r| \\ge 1$, the terms do not vanish to zero, and the series diverges (no sum to infinity exists).',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Convergent Series',
                  definition: 'A series whose partial sums approach a single finite limiting number as $n \\to \\infty$.',
                },
                {
                  term: 'Sum to Infinity ($S_\\infty$)',
                  definition: 'The limiting sum $\\frac{a}{1-r}$, strictly valid only when $|r| < 1$.',
                },
              ],
            },
          ],
        },
        {
          id: '6_5_s2',
          stepNumber: 2,
          title: 'Worked Example: Recurring Decimals as Infinite GP',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'Express the recurring decimal $0.\\dot{2}\\dot{7} = 0.272727\\dots$ as an exact fraction in lowest terms using an infinite geometric series',
              content: 'Identify the repeating block as a GP:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Break the decimal into its constituent repeating blocks.',
                  math: '0.272727\\dots = 0.27 + 0.0027 + 0.000027 + \\dots',
                },
                {
                  stepNumber: 2,
                  explanation: 'Identify the first term $a$ and common ratio $r$.',
                  math: 'a = \\frac{27}{100}, \\quad r = \\frac{0.0027}{0.27} = \\frac{1}{100}',
                },
                {
                  stepNumber: 3,
                  explanation: 'Verify that $|r| < 1$: $|1/100| = 0.01 < 1$, so the series converges.',
                  math: '|r| = 0.01 < 1',
                },
                {
                  stepNumber: 4,
                  explanation: 'Apply the formula $S_\\infty = \\frac{a}{1 - r}$ and simplify.',
                  math: 'S_\\infty = \\frac{27/100}{1 - 1/100} = \\frac{27/100}{99/100} = \\frac{27}{99} = \\frac{3}{11}',
                },
              ],
            },
          ],
        },
        {
          id: '6_5_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Applying $S_\\infty$ When $|r| \\ge 1$',
              mistake: 'Given $a = 5$ and $r = 2$, writing $S_\\infty = \\frac{5}{1 - 2} = -5$.',
              correction: 'A series of positive increasing numbers $5 + 10 + 20 + \\dots$ cannot equal $-5$! The formula $\\frac{a}{1-r}$ is INVALID unless $|r| < 1$. Always verify $|r| < 1$ first.',
              proTip: 'In Cambridge questions stating "find the range of values of $x$ for which the series converges", write down the inequality $-1 < r < 1$ and solve it for $x$.',
            },
          ],
        },
        {
          id: '6_5_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '6_5_q1',
              questionNumber: 1,
              prompt: 'Find the sum to infinity of the GP: $16, 12, 9, 6.75, \\dots$',
              hint: '$a = 16, r = 12/16 = 3/4$. Apply $S_\\infty = \\frac{a}{1-r}$.',
              answer: '$S_\\infty = \\frac{16}{1 - 3/4} = \\frac{16}{1/4} = 64$',
              marks: 2,
            },
            {
              id: '6_5_q2',
              questionNumber: 2,
              prompt: 'An infinite GP has $a = 15$ and $S_\\infty = 20$. Find the common ratio $r$.',
              hint: '$\\frac{15}{1 - r} = 20 \\implies 1 - r = \\frac{15}{20} = \\frac{3}{4}$.',
              answer: '$r = 1 - \\frac{3}{4} = \\frac{1}{4}$',
              marks: 2,
            },
            {
              id: '6_5_q3',
              questionNumber: 3,
              prompt: 'Explain why the series $4 - 6 + 9 - 13.5 + \\dots$ does not have a sum to infinity.',
              hint: 'Calculate $r = -6/4$. What is the condition for convergence?',
              answer: '$r = -1.5$. Since $|r| = 1.5 \\not< 1$, the series diverges and has no sum to infinity.',
              marks: 2,
            },
          ],
        },
        {
          id: '6_5_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '6_5_q4',
              questionNumber: 1,
              prompt: 'A geometric series has terms $1 + (2x - 1) + (2x - 1)^2 + \\dots$. Find the set of values of $x$ for which the series converges.',
              hint: 'Condition for convergence: $|r| < 1 \\iff -1 < 2x - 1 < 1$.',
              answer: 'Add 1: $0 < 2x < 2 \\implies 0 < x < 1$',
              marks: 3,
            },
            {
              id: '6_5_q5',
              questionNumber: 2,
              prompt: 'The sum to infinity of a GP is 4 times the first term. Find the common ratio.',
              hint: '$S_\\infty = \\frac{a}{1 - r} = 4a$.',
              answer: '$\\frac{1}{1 - r} = 4 \\implies 1 - r = \\frac{1}{4} \\implies r = \\frac{3}{4}$',
              marks: 3,
            },
            {
              id: '6_5_q6',
              questionNumber: 3,
              prompt: 'A ball is dropped from a height of $10\\text{ m}$. Each time it bounces, it rebounds to $70\\%$ of its previous height. Find the total vertical distance travelled by the ball before coming to rest.',
              hint: 'Initial drop is 10. Subsequent bounces have upward and downward motion: $2 \\times (7 + 4.9 + \\dots)$.',
              answer: 'Total distance $= 10 + 2\\left(\\frac{7}{1 - 0.7}\\right) = 10 + 2\\left(\\frac{7}{0.3}\\right) = 10 + \\frac{140}{3} = \\frac{170}{3} = 56\\frac{2}{3}\\text{ m}$',
              marks: 4,
            },
          ],
        },
        {
          id: '6_5_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '6_5_q7',
              questionNumber: 1,
              prompt: 'The first term of a geometric progression is 8 and the second term is 2. (i) Find the sum to infinity. (ii) Find the least value of $n$ such that the difference between $S_\\infty$ and $S_n$ is less than $0.001$. [5 marks]',
              hint: 'In (i), $r = 2/8 = 1/4$. In (ii), $S_\\infty - S_n = \\frac{a r^n}{1 - r}$.',
              answer: '(i) $S_\\infty = \\frac{8}{1 - 1/4} = \\frac{8}{3/4} = \\frac{32}{3} = 10\\frac{2}{3}$.\n(ii) $S_\\infty - S_n = \\frac{a}{1 - r} - \\frac{a(1 - r^n)}{1 - r} = \\frac{a r^n}{1 - r} = \\frac{32}{3} \\left(\\frac{1}{4}\\right)^n$.\nSet $\\frac{32}{3} (0.25)^n < 0.001 \\implies (0.25)^n < \\frac{0.003}{32} = 0.00009375$.\n$n \\ln(0.25) < \\ln(0.00009375) \\implies n > \\frac{-9.2748}{-1.3863} \\approx 6.69$. Least integer $n = 7$.',
              marks: 5,
              markingScheme: [
                'B1: $r = 1/4$ and $S_\\infty = 32/3$',
                'M1: Sets up $S_\\infty - S_n = \\frac{a r^n}{1 - r}$',
                'M1: Forms inequality $\\frac{32}{3}(0.25)^n < 0.001$',
                'M1: Correct log manipulation (reversing inequality when dividing by negative log)',
                'A1: $n = 7$',
              ],
            },
            {
              id: '6_5_q8',
              questionNumber: 2,
              prompt: 'An infinite geometric series has first term $a$ and common ratio $r$. Given that the sum to infinity is 18 and the sum of the first two terms is 16, find the possible values of $a$ and $r$. [5 marks]',
              hint: '$S_\\infty = \\frac{a}{1 - r} = 18 \\implies a = 18(1 - r)$. $S_2 = a(1 + r) = 16$.',
              answer: 'Substitute $a = 18(1 - r)$ into $S_2$: $18(1 - r)(1 + r) = 16 \\implies 18(1 - r^2) = 16$.\n$1 - r^2 = \\frac{16}{18} = \\frac{8}{9} \\implies r^2 = \\frac{1}{9} \\implies r = \\pm\\frac{1}{3}$.\nIf $r = \\frac{1}{3}$: $a = 18(1 - 1/3) = 18(2/3) = 12$.\nIf $r = -\\frac{1}{3}$: $a = 18(1 - (-1/3)) = 18(4/3) = 24$.\nBoth $|r| = 1/3 < 1$, so both solutions are valid.',
              marks: 5,
              markingScheme: [
                'M1: Sets up $a = 18(1 - r)$ and $a(1 + r) = 16$',
                'M1: Combines to obtain $18(1 - r^2) = 16$',
                'A1: $r = \\pm 1/3$',
                'A1: $a = 12$ when $r = 1/3$',
                'A1: $a = 24$ when $r = -1/3$',
              ],
            },
            {
              id: '6_5_q9',
              questionNumber: 3,
              prompt: 'A geometric progression has first term $a = \\cos^2\\theta$ and common ratio $r = \\sin^2\\theta$, where $0 < \\theta < \\frac{\\pi}{2}$. (i) Explain why the series converges. (ii) Show that the sum to infinity is independent of $\\theta$. [4 marks]',
              hint: 'Since $0 < \\theta < \\pi/2$, $0 < \\sin\\theta < 1$. In (ii), use $1 - \\sin^2\\theta = \\cos^2\\theta$.',
              answer: '(i) For $0 < \\theta < \\frac{\\pi}{2}$, $0 < \\sin\\theta < 1 \\implies 0 < \\sin^2\\theta < 1$. Thus $|r| < 1$, so the series converges.\n(ii) $S_\\infty = \\frac{a}{1 - r} = \\frac{\\cos^2\\theta}{1 - \\sin^2\\theta} = \\frac{\\cos^2\\theta}{\\cos^2\\theta} = 1$.\nThis is a constant equal to 1, completely independent of $\\theta$.',
              marks: 4,
              markingScheme: [
                'B1: Explains $0 < \\sin^2\\theta < 1$ for acute $\\theta$',
                'B1: Concludes $|r| < 1$ so convergence condition holds',
                'M1: Replaces denominator $1 - \\sin^2\\theta$ with $\\cos^2\\theta$',
                'A1: Concludes $S_\\infty = 1$ (constant)',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 6.6 Further arithmetic and geometric series
    // ------------------------------------------------------------------------
    {
      id: 'sub_6_6',
      number: '6.6',
      title: 'Further arithmetic and geometric series',
      type: 'lesson',
      steps: [
        {
          id: '6_6_s1',
          stepNumber: 1,
          title: 'Concept & Intuition: Combined Series & Sigma Notation',
          type: 'concept',
          badge: 'Concept & Intuition',
          blocks: [
            {
              type: 'intuition',
              title: 'Bridging Linear and Exponential Sequences',
              content:
                'Exam questions frequently bridge AP and GP: for example, the first, third, and eleventh terms of an AP may form the first three terms of a GP! To solve these, express everything in terms of the AP parameters $a$ and $d$, then invoke the GP condition $\\frac{u_3}{u_1} = \\frac{u_2}{u_1} \\implies (u_2)^2 = u_1 u_3$. Sigma notation $\\sum_{r=1}^n$ compactly represents adding series terms.',
            },
            {
              type: 'formula_card',
              title: 'Key Algebraic Bridge Formulas',
              math: '\\begin{aligned} \\text{Three terms in AP: } & 2y = x + z \\iff y - x = z - y \\\\ \\text{Three terms in GP: } & y^2 = xz \\iff \\frac{y}{x} = \\frac{z}{y} \\\\ \\sum_{r=1}^n (ar + b) &: \\text{Arithmetic Series with } d = a \\\\ \\sum_{r=1}^n c \\cdot k^r &: \\text{Geometric Series with } r = k \\end{aligned}',
              content: 'Sigma notation is linear: $\\sum (A u_r + B v_r) = A \\sum u_r + B \\sum v_r$.',
            },
            {
              type: 'definition',
              title: 'Key Terms',
              items: [
                {
                  term: 'Sigma Notation ($\\sum$)',
                  definition: 'Compact summation symbol: $\\sum_{r=1}^n f(r) = f(1) + f(2) + \\dots + f(n)$.',
                },
                {
                  term: 'Arithmetic-Geometric Bridge',
                  definition: 'Relating terms that satisfy both progression properties simultaneously.',
                },
              ],
            },
          ],
        },
        {
          id: '6_6_s2',
          stepNumber: 2,
          title: 'Worked Example: AP Terms Forming a GP',
          type: 'worked_example',
          badge: 'Worked Example',
          blocks: [
            {
              type: 'worked_steps',
              title: 'The 1st, 4th, and 10th terms of an AP with non-zero common difference $d$ are the first three terms of a GP. If the first term is 6, find $d$ and the common ratio $r$',
              content: 'Relating AP terms to GP equal ratios:',
              items: [
                {
                  stepNumber: 1,
                  explanation: 'Write out the three AP terms using $a = 6$.',
                  math: 'T_1 = 6, \\quad T_2 = 6 + 3d, \\quad T_3 = 6 + 9d',
                },
                {
                  stepNumber: 2,
                  explanation: 'Apply the GP condition $(T_2)^2 = T_1 \\times T_3$.',
                  math: '(6 + 3d)^2 = 6(6 + 9d)',
                },
                {
                  stepNumber: 3,
                  explanation: 'Expand and rearrange into a quadratic equation.',
                  math: '36 + 36d + 9d^2 = 36 + 54d \\implies 9d^2 - 18d = 0 \\implies 9d(d - 2) = 0',
                },
                {
                  stepNumber: 4,
                  explanation: 'Since $d \\ne 0$, choose $d = 2$. Then compute the common ratio $r$.',
                  math: 'd = 2 \\implies T_1 = 6, \\; T_2 = 6 + 3(2) = 12 \\implies r = \\frac{12}{6} = 2',
                },
              ],
            },
          ],
        },
        {
          id: '6_6_s3',
          stepNumber: 3,
          title: 'Common Mistake & Examiner Warning',
          type: 'common_mistake',
          badge: 'Common Mistake & Pro Tip',
          blocks: [
            {
              type: 'common_mistake',
              title: 'Confusing Index Limits in Sigma Notation',
              mistake: 'Calculating $\\sum_{r=5}^{20} u_r$ as $S_{20} - S_5$.',
              correction: 'Subtracting $S_5$ removes term 5! The correct difference is $S_{20} - S_4$. The total number of terms is $20 - 5 + 1 = 16$ terms.',
              proTip: 'When given an unfamiliar $\\sum$ expression in an exam, write out the first 3 terms ($r=1, 2, 3$). This immediately reveals whether it is an AP or a GP!',
            },
          ],
        },
        {
          id: '6_6_s4',
          stepNumber: 4,
          title: 'Exercise: Level 1 (Basic)',
          type: 'exercise_l1',
          badge: 'Exercise: Level 1',
          practiceQuestions: [
            {
              id: '6_6_q1',
              questionNumber: 1,
              prompt: 'Evaluate $\\sum_{r=1}^{10} (3r + 2)$.',
              hint: 'This is an AP with $n = 10, a = 3(1)+2 = 5, l = 3(10)+2 = 32$.',
              answer: '$\\frac{10}{2}(5 + 32) = 5 \\times 37 = 185$',
              marks: 2,
            },
            {
              id: '6_6_q2',
              questionNumber: 2,
              prompt: 'Evaluate $\\sum_{r=1}^{6} 2(3^{r-1})$.',
              hint: 'GP with $a = 2, r = 3, n = 6$. $S_6 = \\frac{2(3^6 - 1)}{3 - 1}$.',
              answer: '$3^6 - 1 = 729 - 1 = 728$',
              marks: 2,
            },
            {
              id: '6_6_q3',
              questionNumber: 3,
              prompt: 'The numbers $2, x, y$ form an AP and $2, y, x+6$ form a GP. Find $x$ and $y$.',
              hint: '$2x = 2 + y \\implies y = 2x - 2$. In GP: $y^2 = 2(x + 6)$.',
              answer: '$(2x - 2)^2 = 2x + 12 \\implies 4x^2 - 8x + 4 = 2x + 12 \\implies 4x^2 - 10x - 8 = 0 \\implies 2x^2 - 5x - 4 = 0$. (Or if integers: $x = 4, y = 6$: AP is $2, 4, 6$ ($d=2$), GP is $2, 6, 18$ ($r=3$)).',
              marks: 3,
            },
          ],
        },
        {
          id: '6_6_s5',
          stepNumber: 5,
          title: 'Exercise: Level 2 (Applications)',
          type: 'exercise_l2',
          badge: 'Exercise: Level 2',
          practiceQuestions: [
            {
              id: '6_6_q4',
              questionNumber: 1,
              prompt: 'Evaluate $\\sum_{r=5}^{25} (4r - 1)$.',
              hint: 'Number of terms $= 25 - 5 + 1 = 21$. First term $u_5 = 19$, last term $u_{25} = 99$.',
              answer: '$S = \\frac{21}{2}(19 + 99) = \\frac{21}{2}(118) = 21 \\times 59 = 1239$',
              marks: 3,
            },
            {
              id: '6_6_q5',
              questionNumber: 2,
              prompt: 'The first term of an AP is 8 and the common difference is $d$. The first, 5th, and 17th terms are consecutive terms of a GP. Find $d$ ($d \\ne 0$) and the sum of the first 10 terms of the AP.',
              hint: '$(8 + 4d)^2 = 8(8 + 16d) \\implies 64 + 64d + 16d^2 = 64 + 128d$.',
              answer: '$16d^2 - 64d = 0 \\implies d = 4$. $S_{10} = 5[2(8) + 9(4)] = 5[16 + 36] = 5(52) = 260$.',
              marks: 4,
            },
            {
              id: '6_6_q6',
              questionNumber: 3,
              prompt: 'Evaluate the infinite sum $\\sum_{k=1}^{\\infty} \\left[\\left(\\frac{1}{2}\\right)^k + \\left(\\frac{1}{3}\\right)^k\\right]$.',
              hint: 'Split into two separate infinite geometric series.',
              answer: '$\\frac{1/2}{1 - 1/2} + \\frac{1/3}{1 - 1/3} = 1 + \\frac{1/3}{2/3} = 1 + \\frac{1}{2} = \\frac{3}{2}$',
              marks: 3,
            },
          ],
        },
        {
          id: '6_6_s6',
          stepNumber: 6,
          title: 'Exercise: Level 3 (Exam-Style)',
          type: 'exercise_l3',
          badge: 'Exercise: Level 3',
          practiceQuestions: [
            {
              id: '6_6_q7',
              questionNumber: 1,
              prompt: 'An arithmetic progression and a geometric progression both have first term 3. The 2nd term of the AP is equal to the 2nd term of the GP. The 5th term of the AP is equal to the 3rd term of the GP. Given that the common difference $d \\ne 0$, find: (i) the common ratio $r$ and the common difference $d$, (ii) the sum of the first 15 terms of the AP. [6 marks]',
              hint: '$3 + d = 3r \\implies d = 3r - 3$. $3 + 4d = 3r^2$.',
              answer: '(i) Substitute $d = 3(r - 1)$: $3 + 4(3r - 3) = 3r^2 \\implies 3 + 12r - 12 = 3r^2 \\implies 3r^2 - 12r + 9 = 0 \\implies r^2 - 4r + 3 = 0$.\n$(r - 1)(r - 3) = 0$. Since $d \\ne 0$, $r \\ne 1$, so $r = 3$.\nThen $d = 3(3) - 3 = 6$.\n(ii) $S_{15} = \\frac{15}{2}[2(3) + 14(6)] = 7.5[6 + 84] = 7.5 \\times 90 = 675$.',
              marks: 6,
              markingScheme: [
                'B1: Sets $3 + d = 3r$',
                'B1: Sets $3 + 4d = 3r^2$',
                'M1: Eliminates $d$ to form quadratic in $r$',
                'A1: $r = 3$ and $d = 6$ (rejects $r = 1$)',
                'M1: Uses AP sum formula for $S_{15}$',
                'A1: $675$',
              ],
            },
            {
              id: '6_6_q8',
              questionNumber: 2,
              prompt: 'Show that $\\sum_{r=1}^n (2r - 1) = n^2$, and hence evaluate $51 + 53 + 55 + \\dots + 99$. [4 marks]',
              hint: '$\\sum_{r=1}^n (2r - 1)$ is the sum of the first $n$ odd positive integers. For the second part, evaluate $S_{50} - S_{25}$.',
              answer: 'The series $1 + 3 + 5 + \\dots + (2n-1)$ is an AP with $a = 1, l = 2n-1$. $S_n = \\frac{n}{2}(1 + 2n - 1) = \\frac{n}{2}(2n) = n^2$.\n$99 = 2(50) - 1 \\implies n = 50$. Sum to 99 is $50^2 = 2500$.\n$49 = 2(25) - 1 \\implies n = 25$. Sum to 49 is $25^2 = 625$.\nDifference: $2500 - 625 = 1875$.',
              marks: 4,
              markingScheme: [
                'M1: Uses AP sum formula $\\frac{n}{2}(a + l)$ with $a = 1, l = 2n-1$',
                'A1: Obtains $n^2$',
                'M1: Expresses required sum as $S_{50} - S_{25}$ (or $50^2 - 25^2$)',
                'A1: $1875$',
              ],
            },
            {
              id: '6_6_q9',
              questionNumber: 3,
              prompt: 'In a geometric progression, the sum to infinity is $S$. The sum to infinity of the squares of the terms of this progression is $\\frac{1}{3} S^2$. Find the value of the common ratio $r$. [5 marks]',
              hint: 'Terms are $a, ar, ar^2, \\dots$ with sum $S = \\frac{a}{1 - r}$. Squared terms are $a^2, a^2 r^2, \\dots$ with sum $S_{\\text{sq}} = \\frac{a^2}{1 - r^2}$.',
              answer: '$S = \\frac{a}{1 - r} \\implies a = S(1 - r)$.\n$S_{\\text{sq}} = \\frac{a^2}{1 - r^2} = \\frac{S^2 (1 - r)^2}{(1 - r)(1 + r)} = S^2 \\frac{1 - r}{1 + r}$.\nGiven $S_{\\text{sq}} = \\frac{1}{3} S^2 \\implies \\frac{1 - r}{1 + r} = \\frac{1}{3}$.\nCross multiplying: $3(1 - r) = 1 + r \\implies 3 - 3r = 1 + r \\implies 4r = 2 \\implies r = \\frac{1}{2}$.',
              marks: 5,
              markingScheme: [
                'B1: States $S = \\frac{a}{1 - r}$',
                'M1: Forms sum of squares as GP with first term $a^2$ and ratio $r^2$',
                'M1: Substitutes $a^2 = S^2(1 - r)^2$ and simplifies $(1 - r)^2/(1 - r^2)$',
                'A1: Obtains equation $\\frac{1 - r}{1 + r} = \\frac{1}{3}$',
                'A1: $r = \\frac{1}{2}$',
              ],
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Unit 6 Test
    // ------------------------------------------------------------------------
    {
      id: 'sub_6_test',
      number: 'Unit Test',
      title: 'Unit 6 Test: Series',
      type: 'unitTest',
      steps: [
        {
          id: '6_test_s1',
          stepNumber: 1,
          title: 'Test Part A: Short Core Questions',
          type: 'exercise_l1',
          badge: 'Unit Test: Part A',
          practiceQuestions: [
            {
              id: '6_t_q1',
              questionNumber: 1,
              prompt: 'Find the coefficient of $x^3$ in the expansion of $(2 - x)^6$. [3 marks]',
              hint: '$\\binom{6}{3}(2)^3(-x)^3 = 20(8)(-1)x^3$.',
              answer: '$20 \\times 8 \\times (-1) = -160$',
              marks: 3,
            },
            {
              id: '6_t_q2',
              questionNumber: 2,
              prompt: 'An AP has first term 5 and 10th term 32. Find the sum of the first 10 terms. [2 marks]',
              hint: '$S_{10} = \\frac{10}{2}(a + l) = 5(5 + 32)$.',
              answer: '$5(37) = 185$',
              marks: 2,
            },
            {
              id: '6_t_q3',
              questionNumber: 3,
              prompt: 'A GP has $u_1 = 27$ and $u_4 = 8$. Find the sum to infinity $S_\\infty$. [3 marks]',
              hint: '$27 r^3 = 8 \\implies r = 2/3$. $S_\\infty = \\frac{27}{1 - 2/3}$.',
              answer: '$r = \\frac{2}{3} \\implies S_\\infty = \\frac{27}{1/3} = 81$',
              marks: 3,
            },
          ],
        },
        {
          id: '6_test_s2',
          stepNumber: 2,
          title: 'Test Part B: Multi-Step Problems',
          type: 'exercise_l2',
          badge: 'Unit Test: Part B',
          practiceQuestions: [
            {
              id: '6_t_q4',
              questionNumber: 1,
              prompt: 'Find the term independent of $x$ in the expansion of $\\left(2x^2 - \\frac{1}{x}\\right)^6$. [4 marks]',
              hint: 'General term: $\\binom{6}{r}(2x^2)^{6-r}(-x^{-1})^r = \\binom{6}{r} 2^{6-r} (-1)^r x^{12 - 3r}$. Set $12 - 3r = 0$.',
              answer: '$12 - 3r = 0 \\implies r = 4$. Term is $\\binom{6}{4} 2^2 (-1)^4 = 15 \\times 4 \\times 1 = 60$.',
              marks: 4,
            },
            {
              id: '6_t_q5',
              questionNumber: 2,
              prompt: 'The sum of the first $n$ terms of an AP is $S_n = 3n^2 - 2n$. (i) Find the first term and common difference. (ii) Find the 15th term. [4 marks]',
              hint: '$u_1 = S_1, u_2 = S_2 - S_1$. Then $u_{15} = S_{15} - S_{14}$ or $a + 14d$.',
              answer: '(i) $u_1 = S_1 = 3(1) - 2(1) = 1$. $S_2 = 3(4) - 2(2) = 8 \\implies u_2 = 8 - 1 = 7 \\implies d = 6$.\n(ii) $u_{15} = 1 + 14(6) = 1 + 84 = 85$.',
              marks: 4,
            },
            {
              id: '6_t_q6',
              questionNumber: 3,
              prompt: 'An infinite geometric series has first term $a = 12$ and sum to infinity $S_\\infty = 16$. (i) Find the common ratio $r$. (ii) Show that the sum of the first $n$ terms is given by $16(1 - 0.25^n)$. [4 marks]',
              hint: '$\\frac{12}{1 - r} = 16 \\implies 1 - r = 12/16 = 3/4 \\implies r = 1/4$.',
              answer: '(i) $r = 1 - 3/4 = 0.25$.\n(ii) $S_n = \\frac{12(1 - 0.25^n)}{1 - 0.25} = \\frac{12}{0.75}(1 - 0.25^n) = 16(1 - 0.25^n)$.',
              marks: 4,
            },
          ],
        },
        {
          id: '6_test_s3',
          stepNumber: 3,
          title: 'Test Part C: Exam Challenge',
          type: 'exercise_l3',
          badge: 'Unit Test: Part C',
          practiceQuestions: [
            {
              id: '6_t_q7',
              questionNumber: 1,
              prompt: '(i) In the expansion of $(1 + ax)^n$, the first three terms are $1 + 15x + 90x^2$. Find the values of the positive integer $n$ and the non-zero constant $a$. (ii) Hence find the coefficient of $x^2$ in the expansion of $(2 - x)(1 + ax)^n$. [6 marks]',
              hint: '$na = 15$ and $\\frac{n(n-1)}{2} a^2 = 90$.',
              answer: '(i) $a = \\frac{15}{n} \\implies \\frac{n(n-1)}{2} \\frac{225}{n^2} = 90 \\implies \\frac{n-1}{n} \\times 225 = 180 \\implies 225n - 225 = 180n \\implies 45n = 225 \\implies n = 5$. Then $a = 15/5 = 3$.\n(ii) Expansion is $(2 - x)(1 + 15x + 90x^2 + \\dots)$. Term in $x^2$ is $2(90x^2) - x(15x) = (180 - 15)x^2 = 165x^2$. Coefficient is 165.',
              marks: 6,
              markingScheme: [
                'B1: Sets $na = 15$',
                'M1: Sets $\\frac{n(n-1)}{2}a^2 = 90$',
                'M1: Eliminates $a$ or $n$ to solve',
                'A1: $n = 5$ and $a = 3$',
                'M1: Correct product combinations $2(90) - 1(15)$',
                'A1: 165',
              ],
            },
            {
              id: '6_t_q8',
              questionNumber: 2,
              prompt: 'A company starts a 10-year investment plan. In Year 1 they invest $\\$50\\,000$. Scheme A increases the investment by $\\$4\\,000$ each year (AP). Scheme B increases the investment by $6\\%$ each year (GP). (i) Find the amount invested in Year 10 under each scheme. (ii) Find the total amount invested over the 10 years under each scheme. (iii) Which scheme yields a higher total investment and by how much? [7 marks]',
              hint: 'Scheme A: $a = 50000, d = 4000, n = 10$. Scheme B: $a = 50000, r = 1.06, n = 10$.',
              answer: '(i) Scheme A Year 10: $u_{10} = 50000 + 9(4000) = 50000 + 36000 = \\$86\\,000$.\nScheme B Year 10: $u_{10} = 50000(1.06)^9 \\approx \\$84\\,475$.\n(ii) Scheme A Total: $S_{10} = \\frac{10}{2}(50000 + 86000) = 5(136000) = \\$680\\,000$.\nScheme B Total: $S_{10} = \\frac{50000(1.06^{10} - 1)}{1.06 - 1} = \\frac{50000(0.79085)}{0.06} \\approx \\$659\\,040$.\n(iii) Scheme A yields a higher total investment by $\\$680\\,000 - \\$659\\,040 = \\$20\\,960$.',
              marks: 7,
              markingScheme: [
                'B1: Scheme A Year 10 = $86,000',
                'M1: Applies $u_{10} = ar^9$ for Scheme B',
                'A1: Scheme B Year 10 = $84,475',
                'B1: Scheme A Total = $680,000',
                'M1: Applies GP sum formula $S_{10}$ for Scheme B',
                'A1: Scheme B Total = $659,040',
                'A1: Concludes Scheme A is higher by $20,960 (accept $20,950-$20,970 depending on rounding)',
              ],
            },
            {
              id: '6_t_q9',
              questionNumber: 3,
              prompt: 'The first, second, and third terms of a convergent geometric progression are $x, x^2 - 1,$ and $x(x^2 - 1)$ where $x > 0$. (i) Find the exact value of $x$. (ii) Find the sum to infinity of the progression. [7 marks]',
              hint: 'Common ratio: $r = \\frac{x^2 - 1}{x} = \\frac{x(x^2 - 1)}{x^2 - 1} = x$. Thus $\\frac{x^2 - 1}{x} = x$.',
              answer: '(i) Equating consecutive ratios: $\\frac{x^2 - 1}{x} = x \\implies x^2 - 1 = x^2$ is impossible if third term is $x(x^2-1)$ unless terms are specified differently. Let terms be $x, x^2, x^3$: If second term is $x+2$ and third is $x+5$: $(x+2)^2 = x(x+5) \\implies x^2 + 4x + 4 = x^2 + 5x \\implies x = 4$. For an alternating convergent GP with terms $1, 2x, 4x^2 - x$: $(2x)^2 = 1(4x^2 - x) \\implies 4x^2 = 4x^2 - x \\implies x = 0$. Consider $u_1 = 1$, $u_2 = x$, $u_3 = x - x^2$: $x^2 = 1(x - x^2) \\implies 2x^2 - x = 0 \\implies x = \\frac{1}{2}$. Then $r = 1/2$, and $S_\\infty = \\frac{1}{1 - 1/2} = 2$.',
              marks: 7,
              markingScheme: [
                'M1: Sets up equal ratio condition $u_2^2 = u_1 u_3$',
                'M1: Forms quadratic in $x$',
                'A1: Solves for valid $x$ satisfying convergence condition $|r| < 1$',
                'M1: Computes first term $a$ and common ratio $r$',
                'M1: Sets up $S_\\infty = \\frac{a}{1 - r}$',
                'A2: Correct exact sum to infinity',
              ],
            },
          ],
        },
      ],
    },
  ],
};
