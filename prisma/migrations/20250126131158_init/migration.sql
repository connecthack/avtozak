-- AlterTable
ALTER TABLE "CourtCase" ALTER COLUMN "entryDate" DROP NOT NULL,
ALTER COLUMN "entryDate" SET DATA TYPE TEXT,
ALTER COLUMN "accusedInfo" DROP NOT NULL,
ALTER COLUMN "resultDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "March" (
    "id" TEXT NOT NULL,
    "politzekId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "prisonerId" TEXT NOT NULL,
    "probability" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "March_pkey" PRIMARY KEY ("id")
);
