// types.ts
export type LeetCodeQuestionDTO = {
    qid: number;
    title: string;
    titleSlug: string;
    difficulty: string;
    topicTags: string[];
  };
  
  export type UserQuestionDTO = {
    id: number;
    githubId: string;
    questionId: number;
    title: string;
    titleSlug: string;
    topicTags: string[];
    categorySlug: string;
    completionStatus: boolean;
    timeTaken?: string | null;
    code: string;
    notes: string;
  };
  