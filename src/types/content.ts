export type StepType =
  | 'concept'
  | 'worked_example'
  | 'common_mistake'
  | 'exercise_l1'
  | 'exercise_l2'
  | 'exercise_l3'
  | 'test_part_a'
  | 'test_part_b'
  | 'test_part_c';

export type BlockType =
  | 'paragraph'
  | 'math_display'
  | 'definition'
  | 'intuition'
  | 'formula_card'
  | 'warning'
  | 'common_mistake'
  | 'worked_steps'
  | 'interactive_widget';

export interface DefinitionItem {
  term: string;
  definition: string;
  example?: string;
}

export interface WorkedStepItem {
  stepNumber: number;
  explanation: string;
  math?: string;
}

export interface Block {
  type: BlockType;
  title?: string;
  content?: string;
  math?: string;
  items?: DefinitionItem[] | WorkedStepItem[] | string[];
  widgetId?: string;
  notes?: string;
  mistake?: string;
  correction?: string;
  proTip?: string;
}

export interface PracticeQuestion {
  id: string;
  number?: number;
  questionNumber?: number;
  question?: string;
  prompt?: string;
  marks?: number;
  hint?: string;
  solution?: string;
  answer?: string;
  markingScheme?: string[];
}

export interface Step {
  id: string;
  stepNumber: number;
  title: string;
  type: StepType;
  badge: string;
  blocks?: Block[];
  questions?: PracticeQuestion[];
  practiceQuestions?: PracticeQuestion[];
  interactiveToolId?: string;
}

export interface Subtopic {
  id: string;
  number: string;
  title: string;
  type: 'lesson' | 'unitTest';
  steps: Step[];
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  learningObjectives: string[];
  subtopics: Subtopic[];
}
