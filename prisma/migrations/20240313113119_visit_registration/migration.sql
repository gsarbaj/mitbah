/*
  Warnings:

  - Added the required column `visit_date` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visit" ADD COLUMN     "visit_date" TIMESTAMP(3) NOT NULL;
