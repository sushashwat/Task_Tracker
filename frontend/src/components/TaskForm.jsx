import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

function TaskForm({ fetchTasks, editTask, setEditTask }) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "Pending",
    });
    useEffect(() => {
        if (editTask) {
            setTask(editTask);
        }
    }, [editTask]);

    function handleChange(e) {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (editTask) {

            await api.put(`/tasks/${editTask._id}`, task);

            toast.success("Task Updated");

            setEditTask(null);

        } else {

            await api.post("/tasks", task);

            toast.success("Task Added");

        }
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
            />

            <select
                name="status"
                value={task.status}
                onChange={handleChange}
            >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>

            <button>Add Task</button>

        </form>
    );
}

export default TaskForm;