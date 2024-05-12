/*
  Warnings:

  - Added the required column `projectType` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('WORK', 'PERSONAL');

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectType" "ProjectType" NOT NULL;
