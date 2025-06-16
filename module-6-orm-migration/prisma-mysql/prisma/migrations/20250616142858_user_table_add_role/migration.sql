/*
  Warnings:

  - You are about to alter the column `col10` on the `Numbers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Numbers` MODIFY `col10` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('Visitor', 'Staff', 'SuperAdmin') NOT NULL;
