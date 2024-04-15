"use client";   
import { useState } from "react";
import { useParams,useRouter } from "next/navigation";
import { createNewTask } from "@/api/taskOps";

const addTaskPage = () => {
    const params = useParams();
    const router = useRouter();
    const projectId = params.id;
    
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        status: "",
        priority: "",
        dueDate: "",
        projectId:projectId,
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
        createNewTask(formData);
        router.push(`/projects/${projectId}/`);
    };

    return (
        <div>
            <h1>Add Task - {projectId}</h1>
            <form action="" className="flex flex-col gap-2">
                <input
                    className="border p-1"
                    type="text"
                    name="name"
                    placeholder="Task Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    className="border p-1"
                    type="text"
                    name="description"
                    placeholder="Task Description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <select
                    className="border p-1"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                >
                    <option value="">Select Status</option>
                    <option value="In Progress">In Progress</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Started">Not Started</option>
                </select>
                <select
                    className="border p-1"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                >
                    <option value="">Select Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="Optional">Optional</option>
                </select>
                <input
                    className="border p-1"
                    type="date"
                    name="dueDate"
                    placeholder="Task Due Date"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                />
              
                <input
                    className="border p-1"
                    type="text"
                    name="comments"
                    placeholder="Task Comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                />
                
                <div className="border p-1 bg-cyan-600 cursor-pointer"  onClick={addTask}>
                    Add Task
                </div>
            </form>
        </div>
    );
};

export default addTaskPage;