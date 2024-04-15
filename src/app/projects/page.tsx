
import { project } from "../../../db/schema";
import Card from "../components/Projects/Card";
import { db } from "../../../db";
import Link from "next/link";

const Projects = async () => {
  const datal:any = await db.select().from(project).all();


  return (
    <div className="flex flex-wrap gap-2 mt-10 pb-10 px-2 py-2">
      {datal.map((data:any) => (
        <Link href={`/projects/${data.id}`} key={data.id}>
        <Card props={data} />
        </Link>
      ))}
      <Link href={'/projects/addproject'}>
      <div className="fixed bottom-4 right-4">
  <div 
  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-4 shadow-lg cursor-pointer">
    Add Project
  </div>
</div>
    </Link>
    </div>
  );
}

export default Projects;