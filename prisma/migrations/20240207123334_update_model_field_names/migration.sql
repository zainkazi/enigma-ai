/*
  Warnings:

  - You are about to drop the column `characterImage` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `textPrompt` on the `Project` table. All the data in the column will be lost.
  - Added the required column `characterImageURL` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speechPrompt` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "characterImage",
DROP COLUMN "textPrompt",
ADD COLUMN     "characterImageURL" TEXT NOT NULL,
ADD COLUMN     "speechPrompt" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "User_id_idx" ON "User"("id");
