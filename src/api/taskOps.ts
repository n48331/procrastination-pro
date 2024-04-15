'use server';
import { db } from "../../db";
import { task } from "../../db/schema";
import { eq } from "drizzle-orm";
async function createNewTask(payload: any) {
    await db.insert(task).values(payload).run();
}

async function getAllTasks() {
    return await db.select().from(task).all();
}
async function getAllTasksByProjectId(projectId: any) {
    return await db.select().from(task).where(eq(projectId, task.projectId));
}

export { createNewTask, getAllTasks ,getAllTasksByProjectId};