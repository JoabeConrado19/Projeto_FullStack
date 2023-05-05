/*
  Warnings:

  - You are about to drop the column `brandId` on the `cars` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[brandName]` on the table `brands` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brandName` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_brandId_fkey";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "brandId",
ADD COLUMN     "brandName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "brands_brandName_key" ON "brands"("brandName");

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_brandName_fkey" FOREIGN KEY ("brandName") REFERENCES "brands"("brandName") ON DELETE CASCADE ON UPDATE CASCADE;
