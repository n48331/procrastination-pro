"use client";
import { useState } from "react";
import { createNewProject } from "@/api/projectOps";
import { useRouter } from "next/navigation";

const addProjectPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        engagement: "",
        framework: "",
        description: "",
        startDate: new Date().toISOString().split("T")[0],
        endDate: new Date(new Date().getTime() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: ""
    });

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const addProject = () => {
        const isEmpty = Object.values(formData).some(value => value === "");
        if (isEmpty) {
            // Handle the case when any input field is empty
            alert("Please fill in all the fields");
            return;
        }
        createNewProject(formData);
        router.push(`/projects/`);
    };

    return (
        <div className="mt-5 bg-white rounded-lg shadow p-5">
           <h1 className="inline text-2xl font-semibold leading-none">Add New Project</h1>
           <br /><br />
            <form action="" className="flex flex-col gap-2">
                <input
                    required
                   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    type="text"
                    name="name"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    type="text"
                    name="description"
                    placeholder="Project Description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <input
                   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    type="text"
                    name="engagement"
                    placeholder="Engagement"
                    value={formData.engagement}
                    onChange={handleInputChange}
                />
                <input
                   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    type="text"
                    name="framework"
                    placeholder="Project framework"
                    value={formData.framework}
                    onChange={handleInputChange}
                />
                <input
                   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    type="date"
                    name="startDate"
                    placeholder="Project Start Date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                />
                <input
                   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    type="date"
                    name="endDate"
                    placeholder="Project End Date"
                    value={formData.endDate}
                    onChange={handleInputChange}
                />
                <select
                   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 dark:focus:text-white focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                >
                    <option value="">Select Project Status</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                </select>

                <button onClick={addProject} type="button" className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">
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
                                <span className="pl-2 mx-1">Create new Project</span>
                            </button>
            </form>
        </div>
    );
};

export default addProjectPage;