/*
  Warnings:

  - A unique constraint covering the columns `[session_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "session_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_session_id_key" ON "User"("session_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session"("session_id") ON DELETE SET NULL ON UPDATE CASCADE;
