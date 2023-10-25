import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { UserQuestionDTO } from '@/components/types';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') { // Use PUT method for partial updates
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: 'Not authenticated' });
      return;
    }
    const userId = session.user?.name;
    if (!userId) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    
    const id = parseInt(req.query.id as string, 10);
    
    const data: Partial<UserQuestionDTO> = req.body; // Accept partial updates

    try {
      const userQuestion = await prisma.userQuestions.findFirst({
        where: {
          githubId: userId,
          id: id,
        },
      });

      if (!userQuestion) {
        res.status(404).json({ message: 'Question not found in your list' });
      } else {
        // Update the question in the user's list with the provided data
        await prisma.userQuestions.update({
          where: {
            id: userQuestion.id,
          },
          data,
        });
        res.status(200).json({ message: 'Question updated in your list' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
