/*
  Warnings:

  - You are about to alter the column `col10` on the `Numbers` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to drop the column `col10` on the `StringText` table. All the data in the column will be lost.
  - You are about to drop the column `col11` on the `StringText` table. All the data in the column will be lost.
  - You are about to drop the column `col12` on the `StringText` table. All the data in the column will be lost.
  - You are about to drop the column `col13` on the `StringText` table. All the data in the column will be lost.
  - You are about to drop the column `col14` on the `StringText` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `StringText_col14_key` ON `StringText`;

-- AlterTable
ALTER TABLE `Numbers` MODIFY `col10` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `StringText` DROP COLUMN `col10`,
    DROP COLUMN `col11`,
    DROP COLUMN `col12`,
    DROP COLUMN `col13`,
    DROP COLUMN `col14`;
