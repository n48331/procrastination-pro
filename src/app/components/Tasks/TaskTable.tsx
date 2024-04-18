import { updateTaskStatus ,updateTaskPriority} from "@/api/taskOps";
import BasicExample from "./AddTask";


const TaskTable = ({ tasks,setTasks }: any) => {
   const colors:any = {
        'High': 'text-red-600',
        'Medium': 'text-yellow-600',
        'Low': 'text-green-600',
        'Optional': 'text-blue-600',
        'In Progress': 'bg-blue-500/20 text-blue-600',
        'Pending': 'bg-red-500/20 text-red-600',
        'On Hold': 'bg-yellow-500/20 text-yellow-600',
        'Completed': 'bg-green-500/20 text-green-600',

    };
    const updateTaskPriorityCo = async (taskId: any, priority: any) => {
        await updateTaskPriority(taskId, priority);
        // Update the priority of the task in the local state
        const updatedTaskList = tasks?.map((task: any) => {
            if (task.id === taskId) {
                return { ...task, priority };
            }
            return task;
        });
        setTasks(updatedTaskList);
    };
    const updateStatus = async (taskId: any, status: any) => {
        await updateTaskStatus(taskId, status);
        // Update the status of the task in the local state
        const updatedTaskList = tasks?.map((task: any) => {
            if (task.id === taskId) {
                return { ...task, status };
            }
            return task;
        });
        setTasks(updatedTaskList);
    };
    return (
        <div className="p-6 overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Task <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                            </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Desc <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                            </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Proirity <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                            </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Status <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                            </p>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Deadline <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                            </svg>
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task: any) => (
                        <tr key={task.id}>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{task.name}</p>
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">Start date: 10 Dec 2023</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{task.description}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex flex-col">
                                <select
                                        className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${colors[task.priority]} py-1 px-2 text-xs rounded-md`}
                                        value={task.priority}
                                        onChange={(e) => updateTaskPriorityCo(task.id, e.target.value)}
                                    >
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                        <option value="Optional">Optional</option>
                                    </select>
                                    {/* <p className={`block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal ${task.priority === 'High' ? 'text-red-600' : task.priority === 'Medium' ? 'text-yellow-600' : task.priority === 'Low' ? 'text-green-600' : 'text-blue-600'}`}>{task.priority}</p> */}
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="w-max">
                                    <select
                                        className={`relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none ${colors[task.status]} py-1 px-2 text-xs rounded-md`}
                                        value={task.status}
                                        onChange={(e) => updateStatus(task.id, e.target.value)}
                                    >
                                        <option value="In Progress">In Progress</option>
                                        <option value="Pending">Pending</option>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{task.dueDate}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br /><br />
        </div>
    );
}

export default TaskTable;