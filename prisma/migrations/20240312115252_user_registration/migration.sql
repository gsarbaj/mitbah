-- DropForeignKey
ALTER TABLE "Visit" DROP CONSTRAINT "Visit_session_id_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "first_name" SET DEFAULT 'NO_NAME';

-- AlterTable
ALTER TABLE "Visit" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "session_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "Session"("session_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
