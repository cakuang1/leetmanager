/*
  Warnings:

  - Added the required column `difficulty` to the `UserQuestions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserQuestions" ADD COLUMN     "difficulty" TEXT NOT NULL;
