/*
  Warnings:

  - You are about to drop the column `brandId` on the `cars` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[carId]` on the table `brands` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carId` to the `brands` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_brandId_fkey";

-- AlterTable
ALTER TABLE "brands" ADD COLUMN     "carId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "brandId";

-- CreateIndex
CREATE UNIQUE INDEX "brands_carId_key" ON "brands"("carId");

-- AddForeignKey
ALTER TABLE "brands" ADD CONSTRAINT "brands_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE;
