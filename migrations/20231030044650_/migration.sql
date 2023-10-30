/*
  Warnings:

  - You are about to drop the column `code` on the `UserQuestions` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserQuestions_titleSlug_key";

-- AlterTable
ALTER TABLE "UserQuestions" DROP COLUMN "code";
