'use server';
import { db } from "../../db";
import { eq } from "drizzle-orm";
import { project } from "../../db/schema";
async function createNewProject(payload: any) {
    await db.insert(project).values(payload).run();
}
// async function getProjectById(id:any) {
//     const data:any = await db.select().from(tables.project).where({id: id}).one
//     return data;
// }


async function deleteProject(id: any) {
    await db.delete(project).where(eq(project.id, id)).run();
}

export {
    createNewProject,
    deleteProject,
};