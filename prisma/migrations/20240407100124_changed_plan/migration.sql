/*
  Warnings:

  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "plan" "PlanName" NOT NULL DEFAULT 'FREE';

-- DropTable
DROP TABLE "Plan";
