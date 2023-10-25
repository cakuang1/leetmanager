import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }

    const userId = req.query.userId as string;


    try {
      const userQuestions = await prisma.userQuestions.findMany({
        where: {
          githubId: userId,
        },
      });

      const completedQuestions = userQuestions.filter((question) => question.completionStatus);
      const notCompletedQuestions = userQuestions.filter((question) => !question.completionStatus);

      res.status(200).json({
        completed: completedQuestions,
        notCompleted: notCompletedQuestions,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
