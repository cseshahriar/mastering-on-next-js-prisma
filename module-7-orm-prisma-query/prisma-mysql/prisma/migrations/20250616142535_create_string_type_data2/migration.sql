/*
  Warnings:

  - You are about to alter the column `col10` on the `Numbers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - A unique constraint covering the columns `[col14]` on the table `StringText` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `col10` to the `StringText` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col11` to the `StringText` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col12` to the `StringText` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col14` to the `StringText` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Numbers` MODIFY `col10` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `StringText` ADD COLUMN `col10` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `col11` DOUBLE NOT NULL,
    ADD COLUMN `col12` FLOAT NOT NULL,
    ADD COLUMN `col13` BIGINT NOT NULL DEFAULT 10,
    ADD COLUMN `col14` BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `StringText_col14_key` ON `StringText`(`col14`);
