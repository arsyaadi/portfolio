/*
  Warnings:

  - The `description` column on the `WorkExperience` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "WorkExperience" DROP COLUMN "description",
ADD COLUMN     "description" TEXT[];
