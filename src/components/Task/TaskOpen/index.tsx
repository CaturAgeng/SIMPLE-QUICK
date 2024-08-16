import { useState } from "react";

type TaskProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isOpen: boolean;
    onClose: () => void;
}

type Task = {
    title: string;
    date: string;
    description: string;
}

export default function TaskOpen(props: TaskProps) {
    const { isOpen } = props;

    const [selectedTaskType, setSelectedTaskType] = useState("");
    const [isFormOpen, setFormOpen] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task>({
        title: "",
        date: "",
        description: ""
    });
    const [checkedTasks, setCheckedTasks] = useState<boolean[]>(new Array(tasks.length).fill(false));

    const handleNewTaskClick = () => {
        setFormOpen(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewTask(prevTask => ({ ...prevTask, [name]: value }));
    };

    const handleSaveTask = () => {
        setTasks([...tasks, newTask]);
        setCheckedTasks([...checkedTasks, false]); // Tambahkan checkbox baru
        setFormOpen(false);
        setNewTask({ title: "", date: "", description: "" });
    };

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedTasks = [...checkedTasks];
        updatedCheckedTasks[index] = !updatedCheckedTasks[index];
        setCheckedTasks(updatedCheckedTasks);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex flex-col justify-end items-end bottom-24 right-8">
            <div className="bg-white rounded-lg shadow-lg" style={{ width: '734px', height: '737px' }}>
                {/* Top Element */}
                <div className="flex flex-row justify-between mx-8 mt-6">
                    <select
                        id="task-type-select"
                        title="My Tasks"
                        value={selectedTaskType}
                        onChange={(e) => setSelectedTaskType(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-64 text-gray-700"
                    >
                        <option value="" disabled hidden>
                            My Tasks
                        </option>
                        <option value="Personal Errands">Personal Errands</option>
                        <option value="Urgent To-Do">Urgent To-Do</option>
                    </select>

                    <button
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={handleNewTaskClick}
                    >
                        New Task
                    </button>
                </div>

                {isFormOpen && (
                    <div className="bg-white rounded-lg shadow-lg mx-8 mt-6">
                        <div className="flex items-center mb-4 text-[#4F4F4F]">
                            <input
                                type="text"
                                name="title"
                                value={newTask.title}
                                onChange={handleInputChange}
                                placeholder="Type Task Title"
                                className="border border-gray-300 rounded-md p-2 w-full"
                            />
                            <button className="ml-2 p-2 border border-gray-300 rounded-full" title="panah">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.175 7.08749L5 3.27083L8.825 7.08749L10 5.91249L5 0.912495L-1.02722e-07 5.91249L1.175 7.08749Z" fill="#4F4F4F"/>
                                </svg>
                            </button>
                            <button className="ml-2 p-2 border border-gray-300 rounded-full" title="option">
                                <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z" fill="#828282"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center mb-4 text-[#4F4F4F]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6 mr-2 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h10z"
                                />
                            </svg>
                            <input
                                type="date"
                                name="date"
                                placeholder="Set Date"
                                value={newTask.date}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6 mr-2 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 20h9"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 2h-8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z"
                                />
                            </svg>
                            <textarea
                                name="description"
                                value={newTask.description}
                                onChange={handleInputChange}
                                placeholder="No Description"
                                className="border border-gray-300 rounded-md p-2 w-full text-[#4F4F4F]"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                                onClick={handleSaveTask}
                            >
                                Save Task
                            </button>
                        </div>
                    </div>
                )}

                {/* Render List of Tasks */}
                <div className="mx-8 mt-[22px] h-[554px] w-[668px] overflow-y-scroll">
                    {tasks.map((task, index) => (
                        <div key={index} className="bg-white border-b-2 border-[#828282] p-4 text-[#4F4F4F]">
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    title="checkbox"
                                    className="mr-4"
                                    checked={checkedTasks[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <div
                                    className={`text-[#4F4F4F] w-full ${checkedTasks[index] ? 'line-through' : ''}`}
                                >
                                    {task.title ? task.title : "There is no task"}
                                </div>
                                <button className="ml-2 p-2 border border-gray-300 rounded-full" title="panah">
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.175 7.08749L5 3.27083L8.825 7.08749L10 5.91249L5 0.912495L-1.02722e-07 5.91249L1.175 7.08749Z" fill="#4F4F4F"/>
                                    </svg>
                                </button>
                                <button className="ml-2 p-2 border border-gray-300 rounded-full" title="option">
                                    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z" fill="#828282"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-center mb-4 text-black">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-12 mr-5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99187 1.66663C5.39187 1.66663 1.66687 5.39996 1.66687 9.99996C1.66687 14.6 5.39187 18.3333 9.99187 18.3333C14.6002 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6002 1.66663 9.99187 1.66663ZM10.0004 16.6666C6.31703 16.6666 3.3337 13.6833 3.3337 9.99996C3.3337 6.31662 6.31703 3.33329 10.0004 3.33329C13.6837 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6837 16.6666 10.0004 16.6666ZM9.16687 5.83329H10.4169V10.2083L14.1669 12.4333L13.5419 13.4583L9.16687 10.8333V5.83329Z" fill="#2F80ED"/>
                                </svg>
                                <input
                                    type="date"
                                    name="date"
                                    placeholder="Set Date"
                                    value={task.date}
                                    onChange={(e) => handleInputChange(e)}
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>

                            <div className="flex items-center mb-4">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-12 mr-6">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z" fill="#2F80ED"/>
                                </svg>
                                <div className="text-[#4F4F4F] w-full">
                                    {task.description ? task.description : "No Description"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}