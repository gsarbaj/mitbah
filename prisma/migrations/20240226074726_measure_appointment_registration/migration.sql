-- CreateTable
CREATE TABLE "MeasureAppointmentClick" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "session_id" TEXT NOT NULL,

    CONSTRAINT "MeasureAppointmentClick_pkey" PRIMARY KEY ("id")
);
