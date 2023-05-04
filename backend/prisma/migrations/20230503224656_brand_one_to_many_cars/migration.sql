/*
  Warnings:

  - You are about to drop the column `carId` on the `brands` table. All the data in the column will be lost.
  - Added the required column `brandId` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "brands" DROP CONSTRAINT "brands_carId_fkey";

-- DropIndex
DROP INDEX "brands_carId_key";

-- AlterTable
ALTER TABLE "brands" DROP COLUMN "carId";

-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "brandId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "brands"("id") ON DELETE CASCADE ON UPDATE CASCADE;
