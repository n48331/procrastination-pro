"use client";
import { deleteProject } from '@/api/projectOps';
import { useParams, useRouter } from 'next/navigation';
import { getAllTasksByProjectId } from '@/api/taskOps';
import { use, useEffect, useState } from 'react';
import OverviewCard from '@/app/components/Projects/OverviewCard';
import TaskTable from '@/app/components/Tasks/TaskTable';
import AddTask from '@/app/components/Tasks/AddTask';
const ProjectView = () => {
  const params = useParams();
  const router = useRouter()
  const [tasks, setTasks] = useState<any[]>([]) 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = params;
  const [allTaskCount, setAllTaskCount] = useState({ total: 0, completed: 0, pending: 0, onHold: 0});
  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await getAllTasksByProjectId(id); // Await the promise returned by getAllTasks
      setTasks(allTasks);
      
      
    };
    fetchTasks(); // Call the fetchTasks function
  }, [isModalOpen])
  useEffect(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.status === 'In Progress').length;
    const pending = tasks.filter((task) => task.status === 'Pending').length;
    const onHold = tasks.filter((task) => task.status === 'On Hold').length;
    setAllTaskCount({ total, completed, pending,onHold });
  }, [tasks,isModalOpen])
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
      router.push('/projects');
    }
  }
console.log(tasks);

  return (
    <>
      <div className="flex items-center text-gray-800">
        <AddTask isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <div className="p-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            <OverviewCard color={"text-blue-500"} desc={'Total tasks'} count={allTaskCount.total} >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </OverviewCard>
            <OverviewCard color={'text-green-500'} desc={'In Progress'} count={allTaskCount.completed} >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </OverviewCard>
            <OverviewCard color={'text-orange-500'} desc={'Pending'} count={allTaskCount.pending} >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>

            </OverviewCard>
            <OverviewCard color={'text-orange-500'} desc={'On Hold'} count={allTaskCount.onHold} >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>

            </OverviewCard>

            <div className="col-span-12 sm:col-span-6 md:col-span-3 cursor-pointer " onClick={() => setIsModalOpen(true)}>
              <div className="flex flex-row bg-green-600 shadow-md rounded p-4">

                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-white">Add task</div>
                </div>
                <div className="flex flex-col flex-grow ml-4">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TaskTable tasks={tasks} setTasks={setTasks}/>
      <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete Project</button>
      <footer className="relative pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-500  py-1">
                Made with <a href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" className="text-gray-900 hover:text-gray-800" target="_blank">Soft UI</a> by <a href="https://www.creative-tim.com" className="text-gray-900 hover:text-gray-800" target="_blank"> Creative Tim</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ProjectView;