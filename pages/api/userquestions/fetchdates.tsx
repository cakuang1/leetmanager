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

    const { userId } = req.query; // Replace with your parameter name for the user ID
    const { startDate, endDate } = req.query; // Replace with your parameter names for start and end dates
    try {
      // Convert date strings to ISO-8601 format
      const isoStartDate = new Date(startDate as string).toISOString();
      const isoEndDate = new Date(endDate as string).toISOString();

      const userQuestions = await prisma.userQuestions.findMany({
        where: {
          githubId: userId as string,
          date: {
            gte: isoStartDate,
            lte: isoEndDate,
          },
        },
      });

      res.status(200).json(userQuestions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
