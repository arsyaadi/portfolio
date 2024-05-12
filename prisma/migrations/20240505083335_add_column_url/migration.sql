/*
  Warnings:

  - Added the required column `url` to the `WorkExperience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "WorkExperience" ADD COLUMN     "url" TEXT NOT NULL;
