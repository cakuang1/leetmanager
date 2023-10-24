/*
  Warnings:

  - Added the required column `difficulty` to the `LeetCodeQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LeetCodeQuestion" ADD COLUMN     "difficulty" TEXT NOT NULL;
