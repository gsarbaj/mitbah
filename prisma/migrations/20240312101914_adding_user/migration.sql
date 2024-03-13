/*
  Warnings:

  - Added the required column `adress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "adress" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "session_id" TEXT NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Visit_session_id_key" ON "Visit"("session_id");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session"("session_id") ON DELETE RESTRICT ON UPDATE CASCADE;
