/*
  Warnings:

  - You are about to drop the column `sessionId` on the `MeasureAppointmentClick` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[session_id]` on the table `MeasureAppointmentClick` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[session_id]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `session_id` to the `MeasureAppointmentClick` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MeasureAppointmentClick" DROP CONSTRAINT "MeasureAppointmentClick_sessionId_fkey";

-- DropIndex
DROP INDEX "MeasureAppointmentClick_sessionId_key";

-- AlterTable
ALTER TABLE "MeasureAppointmentClick" DROP COLUMN "sessionId",
ADD COLUMN     "session_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MeasureAppointmentClick_session_id_key" ON "MeasureAppointmentClick"("session_id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_session_id_key" ON "Session"("session_id");

-- AddForeignKey
ALTER TABLE "MeasureAppointmentClick" ADD CONSTRAINT "MeasureAppointmentClick_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session"("session_id") ON DELETE RESTRICT ON UPDATE CASCADE;
