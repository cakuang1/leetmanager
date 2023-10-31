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
    const  userId  = session.user?.name
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    try {
      const CompletedQuestions = await prisma.userQuestions.findMany({
        where: {
          githubId: userId as string,
          completionStatus: true,
        },
        orderBy: {
          date: 'desc', // Sort by date in ascending order
        },
        skip: (page - 1) * pageSize,
        take: pageSize,
      });
      const totalCompletedCount = CompletedQuestions.length;
      res.status(200).json({
        CompletedQuestions,
        totalCompletedCount,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};


