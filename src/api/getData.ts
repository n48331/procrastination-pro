'use server';
import { db } from "../../db";
async function getData(tableName:any) {
    const datal:any = await db.select().from(tableName).all();
    return datal;
}

export default getData;