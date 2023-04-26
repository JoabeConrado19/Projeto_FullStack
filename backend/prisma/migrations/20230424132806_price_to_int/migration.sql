/*
  Warnings:

  - You are about to alter the column `price` on the `cars` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "address" ALTER COLUMN "complement" DROP NOT NULL;

-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "price" SET DATA TYPE INTEGER;
