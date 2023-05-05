/*
  Warnings:

  - You are about to alter the column `price` on the `cars` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "price" SET DATA TYPE INTEGER;
