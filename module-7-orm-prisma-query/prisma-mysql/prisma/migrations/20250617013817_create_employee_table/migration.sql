/*
  Warnings:

  - You are about to drop the `BlobUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DateContentTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Numbers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StringText` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `BlobUser`;

-- DropTable
DROP TABLE `DateContentTypes`;

-- DropTable
DROP TABLE `Numbers`;

-- DropTable
DROP TABLE `StringText`;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `salary` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
