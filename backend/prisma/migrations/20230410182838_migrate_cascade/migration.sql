/*
  Warnings:

  - You are about to drop the column `brand` on the `cars` table. All the data in the column will be lost.
  - Added the required column `brandId` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "brand",
ADD COLUMN     "brandId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "brands" (
    "id" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
