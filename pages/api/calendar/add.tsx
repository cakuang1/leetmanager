import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
const prisma = new PrismaClient();


type LeetCodeQuestion = {
    qid: number;
    title: string;
    titleSlug: string;
    difficulty: string;
    topicTags: string[];
  };

  type UserQuestion = {
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
  

  

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }
    const userId = session.user?.name
    const data: LeetCodeQuestion = req.body;

    try {
      // Fetch the user's list of LeetCode questions
      if (userId) {
        const userQuestions = await prisma.userQuestions.findMany({
          where: {
            githubId: {
              equals: userId,
            },
          },
        });
        
      const isQuestionAlreadyAdded = userQuestions.some((userQuestion) => userQuestion.questionId === questionId);
      if (isQuestionAlreadyAdded) {
        // Send a notification
        res.status(400).json({ message: 'Question is already in your list' });
      } else {
        // Add the question to the user's list
        await prisma.userQuestions.create({
          data: {
            githubId:userId,
            questionId: data.qid,
            title: data.title,
            titleSlug: data.titleSlug,
            topicTags: data.topicTags,
            completionStatus: false, // You can set the initial status as needed
            timeTaken: null, // You can set the initial time taken as needed
            code: '', // You can set the initial code as needed
            notes: '', // You can set the initial notes as needed
          },
        });
        res.status(200).json({ message: 'Question added to your list' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
