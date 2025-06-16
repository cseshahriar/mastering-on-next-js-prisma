/*
  Warnings:

  - You are about to alter the column `col2` on the `DateContentTypes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `col3` on the `DateContentTypes` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `col10` on the `Numbers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `DateContentTypes` MODIFY `col2` DATETIME NOT NULL,
    MODIFY `col3` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Numbers` MODIFY `col10` DECIMAL NOT NULL;

-- CreateTable
CREATE TABLE `BlobUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `col1` BLOB NOT NULL,
    `col2` LONGBLOB NOT NULL,
    `col3` TINYBLOB NOT NULL,
    `col4` MEDIUMBLOB NOT NULL,
    `col5` BINARY(100) NOT NULL,
    `col6` VARBINARY(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `userID` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_userID_key`(`userID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
