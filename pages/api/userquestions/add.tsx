import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
const prisma = new PrismaClient();
import { LeetCodeQuestionDTO } from '@/components/types';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }
    const userId = session.user?.name;

    if (!userId) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    const data: LeetCodeQuestionDTO = req.body;
    const questionId = data.qid; 

    try {
      // Fetch the user's list of LeetCode questions
      const userQuestions = await prisma.userQuestions.findMany({
        where: {
          githubId: userId,
        },
      });

      const isQuestionAlreadyAdded = userQuestions.some(
        (userQuestion) => userQuestion.questionId === questionId
      );

      if (isQuestionAlreadyAdded) {
        // Send a notification
        res.status(400).json({ message: 'Question is already in your list' });
      } else {
        // Add the question to the user's list
        await prisma.userQuestions.create({
          data: {
            githubId: userId,
            questionId: questionId,
            title: data.title,
            titleSlug: data.titleSlug,
            difficulty: data.difficulty,
            topicTags: data.topicTags,
            completionStatus: false,
            timeTaken: null,
            code: '',
            notes: '',
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
