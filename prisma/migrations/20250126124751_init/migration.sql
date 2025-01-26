-- CreateTable
CREATE TABLE "MonitoringCase" (
    "id" TEXT NOT NULL,
    "ordinal" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "terrorist" BOOLEAN NOT NULL,

    CONSTRAINT "MonitoringCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourtCase" (
    "id" TEXT NOT NULL,
    "region" INTEGER NOT NULL,
    "instance" TEXT NOT NULL,
    "courtName" TEXT NOT NULL,
    "caseNumber" TEXT NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "accusedInfo" TEXT NOT NULL,
    "judgeName" TEXT NOT NULL,
    "resultDate" TIMESTAMP(3),
    "decision" TEXT,
    "endDate" TIMESTAMP(3),
    "consideredBy" TEXT,
    "cui" TEXT NOT NULL,
    "linkMeta" TEXT,
    "linkText" TEXT,
    "text" TEXT,

    CONSTRAINT "CourtCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConnectedLink" (
    "id" TEXT NOT NULL,
    "courtCaseId" TEXT NOT NULL,
    "linkMeta" TEXT,
    "linkText" TEXT,

    CONSTRAINT "ConnectedLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourtCase_caseNumber_key" ON "CourtCase"("caseNumber");

-- AddForeignKey
ALTER TABLE "ConnectedLink" ADD CONSTRAINT "ConnectedLink_courtCaseId_fkey" FOREIGN KEY ("courtCaseId") REFERENCES "CourtCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
