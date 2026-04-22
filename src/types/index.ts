export interface Question {
  id: string;
  proctor_id: string;
  subject: 'MAD1' | 'MAD2' | 'MLP' | 'BDM' | 'GENAI';
  level: 1 | 2 | null;
  questions_text: string;
  advice: string | null;
  viva_datetime: string | null;
  tags: string[] | null;
  created_at: string;
  upvotes?: number;
}

export interface Submission {
  id: string;
  proctor_id: string;
  subject: 'MAD1' | 'MAD2' | 'MLP' | 'BDM' | 'GENAI';
  level: 1 | 2 | null;
  questions_text: string;
  advice: string | null;
  viva_datetime: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface ProctorStats {
  proctor_id: string;
  total_questions: number;
  subjects: string[];
  common_topics: { topic: string; count: number }[];
}

export type Subject = 'MAD1' | 'MAD2' | 'MLP' | 'BDM' | 'GENAI';
export type Level = 1 | 2 | null;
