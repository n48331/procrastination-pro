"use client";
import Card from "./components/Dashboard/Card";
import TaskList from "./components/Tasks/TaskList";
import Overview from "./components/Tasks/Overview";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/api/projectOps";
import { getAllTasks } from "@/api/taskOps";

export default function Dashboard() {
  const [projects, setProjects] = useState<any>([]);
  const [tasks, setTasks] = useState<any>([]);
  const [counts, setCounts] = useState<any>({ projects: 0, tasks: 0, pendingTasks: 0});
  useEffect(() => {
    const fetchData = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);

      const allTasks = await getAllTasks();
      const tasksWithProjectName = allTasks.map((task: any) => {
        const project = allProjects.find((project: any) => project.id === task.projectId);
        return { ...task, projectName: project?.name };
      });
      setTasks(tasksWithProjectName);

      const totalProjects = allProjects.length;
      const totalTasks = tasksWithProjectName.length;
      const pendingTasks = tasksWithProjectName.filter((task: any) => task.status === 'Pending').length;
      setCounts({ projects: totalProjects, tasks: totalTasks, pendingTasks: pendingTasks });
    };

    fetchData();
  }, []);
 

  
  return (
    <>
      <main>
        <div className="pt-6 px-4">

          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card title="Projects" description={counts.projects} />
          <Card title="Tasks" description={counts.tasks} pendingTasks={counts.pendingTasks}/>
           
         
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
        <TaskList tasks={tasks}/>
        <Overview/>
          </div>
        </div>
      </main>

      
    </>
  );
}
