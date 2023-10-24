/*
  Warnings:

  - You are about to drop the column `userId` on the `UserQuestions` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[githubId,questionId]` on the table `UserQuestions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `githubId` to the `UserQuestions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserQuestions" DROP CONSTRAINT "UserQuestions_userId_fkey";

-- DropIndex
DROP INDEX "UserQuestions_userId_questionId_key";

-- AlterTable
ALTER TABLE "UserQuestions" DROP COLUMN "userId",
ADD COLUMN     "githubId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateIndex
CREATE UNIQUE INDEX "UserQuestions_githubId_questionId_key" ON "UserQuestions"("githubId", "questionId");
