/*
  Warnings:

  - You are about to drop the column `session_id` on the `MeasureAppointmentClick` table. All the data in the column will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sessionId]` on the table `MeasureAppointmentClick` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionId` to the `MeasureAppointmentClick` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MeasureAppointmentClick" DROP COLUMN "session_id",
ADD COLUMN     "sessionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Test";

-- CreateIndex
CREATE UNIQUE INDEX "MeasureAppointmentClick_sessionId_key" ON "MeasureAppointmentClick"("sessionId");

-- AddForeignKey
ALTER TABLE "MeasureAppointmentClick" ADD CONSTRAINT "MeasureAppointmentClick_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
