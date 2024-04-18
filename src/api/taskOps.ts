'use server';
import { db } from "../../db";
import { task } from "../../db/schema";
import { eq,asc, desc  } from "drizzle-orm";
async function createNewTask(payload: any) {
    await db.insert(task).values(payload).run();
}
async function updateTaskStatus(taskId: any, status: any) {
    await db.update(task).set({ status }).where(eq(taskId, task.id)).run();
}
async function updateTaskPriority(taskId: any, priority: any) {
    await db.update(task).set({ priority }).where(eq(taskId, task.id)).run();
}
async function getAllTasks() {
    return await db.select().from(task).all();
}
async function getAllTasksByProjectId(projectId: any) {
    return await db.select().from(task).where(eq(task.projectId, projectId)).orderBy(desc(task.status), desc(task.dueDate)).all();
}

export {
    createNewTask,
    getAllTasks,
    getAllTasksByProjectId,
    updateTaskStatus,
    updateTaskPriority
};