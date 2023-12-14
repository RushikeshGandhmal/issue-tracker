-- AlterTable
ALTER TABLE `issue` ADD COLUMN `assignedToUserIs` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignedToUserIs_fkey` FOREIGN KEY (`assignedToUserIs`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
