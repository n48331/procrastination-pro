"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createNewTask } from "@/api/taskOps";
import { IoClose } from "react-icons/io5";
const AddTask = ({ isModalOpen, setIsModalOpen }: any) => {
    const params = useParams();
    const router = useRouter();
    const projectId = params.id;

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        status: "Pending",
        priority: "",
        startDate: new Date().toISOString().split('T')[0],
        dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        projectId: projectId,
        comments: ""
    });

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const addTask = () => {
        if (formData.name === "" || formData.description === "") {
            alert("Please fill all the fields");
            return;
        }
        createNewTask(formData);
        setIsModalOpen(false);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <div className="z-20">

            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="mt-5 bg-white rounded-lg shadow p-5 w-1/4 relative">
                    <span onClick={closeModal} className=" absolute right-1 top-1 text-[25px]"><IoClose/></span>
                        <h2>Add Task</h2>
                        <form className="flex flex-col gap-2">
                            <input
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                type="text"
                                name="name"
                                placeholder="Task Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea 
                                 className="text-black  placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                name="description"
                                placeholder="Task Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                            <select
                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                defaultValue={'Pending'}
                            >
                                <option value="Pending" >Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <select
                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                name="priority"
                                value={formData.priority}
                                onChange={handleInputChange}
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Optional">Optional</option>
                            </select>
                            <input
                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                type="date"
                                name="dueDate"
                                placeholder="Task Due Date"
                                value={formData.dueDate}
                                onChange={handleInputChange}
                                defaultValue={new Date().toISOString().split('T')[0]}
                            />
                            <input
                                 className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                type="text"
                                name="comments"
                                placeholder="Task Comments"
                                value={formData.comments}
                                onChange={handleInputChange}
                            />

                            <button onClick={addTask} type="button" className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                    <g>
                                        <rect fill="none" height="24" width="24"></rect>
                                    </g>
                                    <g>
                                        <g>
                                            <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <span className="pl-2 mx-1">Create new Task</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTask;

