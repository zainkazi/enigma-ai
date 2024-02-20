/*
  Warnings:

  - You are about to drop the column `characterImageURL` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `characterPrompt` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Project` table. All the data in the column will be lost.
  - Added the required column `ageGroup` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatarUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ethnicity` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hairColor` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- DropIndex
DROP INDEX "Project_userId_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "characterImageURL",
DROP COLUMN "characterPrompt",
DROP COLUMN "userId",
ADD COLUMN     "ageGroup" TEXT NOT NULL,
ADD COLUMN     "avatarUrl" TEXT NOT NULL,
ADD COLUMN     "ethnicity" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "hairColor" TEXT NOT NULL,
ADD COLUMN     "speechUrl" TEXT,
ALTER COLUMN "speechPrompt" DROP NOT NULL;
