ALTER TABLE `user_role_mappings` MODIFY COLUMN `user_id` bigint unsigned NOT NULL;--> statement-breakpoint
ALTER TABLE `user_role_mappings` MODIFY COLUMN `role_id` bigint unsigned NOT NULL;