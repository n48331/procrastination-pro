import { integer, sqliteTable, text, foreignKey } from "drizzle-orm/sqlite-core";

export const project = sqliteTable('project', {
    id: integer('id').primaryKey(),
    name: text('name'),
    engagement: text('engagement'),
    framework: text('framework'),
    description: text('description'),
    startDate: text('startDate'),
    endDate: text('endDate'),
    status: text('status')
});

export const task = sqliteTable('task', {
    id: integer('id').primaryKey(),
    name: text('name'),
    description: text('description'),
    status: text('status'),
    priority: text('priority'),
    dueDate: text('dueDate'),
    projectId: integer('projectId').references(() => project.id),
    comments: text('comments')
});