CREATE TABLE `project` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`engagement` text,
	`framework` text,
	`description` text,
	`startDate` text,
	`endDate` text,
	`status` text
);
--> statement-breakpoint
CREATE TABLE `task` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`description` text,
	`status` text,
	`priority` text,
	`startDate` text,
	`dueDate` text,
	`projectId` integer,
	`comments` text,
	FOREIGN KEY (`projectId`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE no action
);
