/*
  Warnings:

  - You are about to alter the column `col10` on the `Numbers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `Numbers` MODIFY `col10` DECIMAL NOT NULL;

-- CreateTable
CREATE TABLE `DateContentTypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `col1` DATE NOT NULL,
    `col2` DATETIME NOT NULL,
    `col3` TIMESTAMP NOT NULL,
    `col4` TIME NOT NULL,
    `col6` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
