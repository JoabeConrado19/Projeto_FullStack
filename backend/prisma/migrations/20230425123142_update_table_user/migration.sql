-- AlterTable
ALTER TABLE "address" ALTER COLUMN "complement" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "reset" TEXT;
