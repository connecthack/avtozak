/*
  Warnings:

  - You are about to drop the column `politzekId` on the `March` table. All the data in the column will be lost.
  - Added the required column `sourceId` to the `March` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "March" DROP COLUMN "politzekId",
ADD COLUMN     "sourceId" TEXT NOT NULL;
