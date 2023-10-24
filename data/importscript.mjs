import fs from 'fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const csvFilePath = 'this.csv';

const insertData = async () => {
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', async (row) => {
      // Map CSV data to your Prisma model
      const newData = {
        qid: parseInt(row.QID),
        title: row.title,
        titleSlug: row.titleSlug,
        difficulty: row.difficulty,
        topicTags: row.topicTags.split(','), // Split tags if they are comma-separated
      };

      // Insert data into the database using Prisma
      await prisma.LeetCodeQuestion.create({
        data: newData,
      });
    })
    .on('end', () => {
      console.log('CSV data has been inserted into the database');
      prisma.$disconnect();
    });
};

insertData().catch((error) => {
  console.error('Error inserting data:', error);
});
