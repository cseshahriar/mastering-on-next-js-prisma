/*
  Warnings:

  - You are about to alter the column `col2` on the `DateContentTypes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `col3` on the `DateContentTypes` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `col10` on the `Numbers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(100)`.

*/
-- AlterTable
ALTER TABLE `DateContentTypes` MODIFY `col2` DATETIME NOT NULL,
    MODIFY `col3` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Numbers` MODIFY `col10` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` CHAR(100) NOT NULL DEFAULT '',
    MODIFY `postCode` VARCHAR(191) NULL;
