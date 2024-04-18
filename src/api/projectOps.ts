'use server';
import { db } from "../../db";
import { eq, exists } from "drizzle-orm";
import { project, task } from "../../db/schema";
async function createNewProject(payload: any) {
    await db.insert(project).values(payload).run();
}

async function getAllProjects() {
    return await db.select().from(project).all();
}

// async function getProjectById(id:any) {
//     const data:any = await db.select().from(tables.project).where({id: id}).one
//     return data;
// }

async function deleteProject(id: any) {
    const dependentExists = await db.select()
        .from(task)
        .where(eq(task.projectId, id))
    // .run();

    if (dependentExists.length > 0) {
        await db.delete(task).where(eq(task.projectId, id)).run();
        await db.delete(project)
            .where(eq(project.id, id))
            .run();
    } else {
        await db.delete(project)
            .where(eq(project.id, id))
            .run();
    }

}
export {
    createNewProject,
    deleteProject,
    getAllProjects
};