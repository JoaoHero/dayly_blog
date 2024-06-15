/*
  Warnings:

  - You are about to drop the column `userId` on the `Like` table. All the data in the column will be lost.
  - Added the required column `userImg` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Like" DROP COLUMN "userId",
ADD COLUMN     "userImg" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
