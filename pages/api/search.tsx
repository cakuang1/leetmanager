// pages/api/search.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { query } = req.query;
    try {
      const results = await prisma.LeetCodeQuestion.findMany({
        where: {
            title: {
                contains: query,
                mode: 'insensitive', 
          },
        },
        take: 4, // Limit the number of results to 4
      });

      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while searching.' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
