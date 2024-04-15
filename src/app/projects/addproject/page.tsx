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
        startDate: "",
        endDate: "",
        status: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div>
            <h1>Add Project</h1>
            <form action="" className="flex flex-col gap-2">
                <input
                    required
                    className="border p-1"
                    type="text"
                    name="name"
                    placeholder="Project Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <input
                    className="border p-1"
                    type="text"
                    name="description"
                    placeholder="Project Description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                <input
                    className="border p-1"
                    type="text"
                    name="engagement"
                    placeholder="Engagement"
                    value={formData.engagement}
                    onChange={handleInputChange}
                />
                <input
                    className="border p-1"
                    type="text"
                    name="framework"
                    placeholder="Project framework"
                    value={formData.framework}
                    onChange={handleInputChange}
                />
                <input
                    className="border p-1"
                    type="text"
                    name="startDate"
                    placeholder="Project Start Date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                />
                <input
                    className="border p-1"
                    type="text"
                    name="endDate"
                    placeholder="Project End Date"
                    value={formData.endDate}
                    onChange={handleInputChange}
                />
                <input
                    className="border p-1"
                    type="text"
                    name="status"
                    placeholder="Project status"
                    value={formData.status}
                    onChange={handleInputChange}
                />

                <button className="border p-1 bg-cyan-600" type="button" onClick={addProject}>
                    Add Project
                </button>
            </form>
        </div>
    );
};

export default addProjectPage;