/*
  Warnings:

  - You are about to drop the column `categorySlug` on the `UserQuestions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserQuestions" DROP COLUMN "categorySlug",
ALTER COLUMN "id" SET DEFAULT 1;
