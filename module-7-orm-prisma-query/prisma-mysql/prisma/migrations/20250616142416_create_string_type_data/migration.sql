/*
  Warnings:

  - You are about to alter the column `col10` on the `Numbers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `Numbers` MODIFY `col10` DECIMAL NOT NULL;

-- CreateTable
CREATE TABLE `StringText` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `col1` VARCHAR(191) NOT NULL,
    `col2` VARCHAR(191) NULL,
    `col3` VARCHAR(191) NOT NULL DEFAULT 'Bangladesh',
    `col4` VARCHAR(1000) NOT NULL,
    `col6` TINYTEXT NOT NULL,
    `col7` TEXT NOT NULL,
    `col8` LONGTEXT NOT NULL,
    `col9` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
