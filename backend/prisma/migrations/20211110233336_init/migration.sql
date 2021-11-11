-- CreateEnum
CREATE TYPE "MissionType" AS ENUM ('TEXT', 'PHOTO', 'GPS');

-- CreateTable
CREATE TABLE "Mission" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "type" "MissionType" NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);
