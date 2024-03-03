/*
  Warnings:

  - You are about to alter the column `speechSpeed` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(3,2)`.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "speechSpeed" SET DEFAULT 1,
ALTER COLUMN "speechSpeed" SET DATA TYPE DECIMAL(3,2);
