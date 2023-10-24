import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
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

    const id = parseInt(req.query.id as string, 10); // Parse the ID from URL

    try {
      // Delete the question from the user's list using the ID
      await prisma.userQuestions.delete({
        where: {
          id: id,
          githubId: userId, // Ensure the githubId matches the session ID
        },
      });

      res.status(200).json({ message: 'Question removed from your list' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).end(); 
  }
};
