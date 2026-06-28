import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function TaskForm({ fetchTasks, editTask, setEditTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  useEffect(() => {
    if (editTask) {
      setTask({
        title: editTask.title,
        description: editTask.description,
        status: editTask.status,
      });
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

    if (!task.title.trim()) {
      return toast.error("Task title is required");
    }

    try {
      if (editTask) {
        await api.put(`/tasks/${editTask._id}`, task);

        toast.success("Task Updated");

        setEditTask(null);
      } else {
        await api.post("/tasks", task);

        toast.success("Task Added");
      }

      setTask({
        title: "",
        description: "",
        status: "Pending",
      });

      fetchTasks();
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <h2>
        {editTask ? "✏ Edit Task" : "➕ Add New Task"}
      </h2>

      <div className="form-group">

        <label>Task Title</label>

        <input
          type="text"
          name="title"
          placeholder="Enter task title..."
          value={task.title}
          onChange={handleChange}
        />

      </div>

      <div className="form-group">

        <label>Description</label>

        <textarea
          name="description"
          placeholder="Enter task description..."
          value={task.description}
          onChange={handleChange}
        />

      </div>

      <div className="form-bottom">

        <div className="form-group">

          <label>Status</label>

          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="Pending"> Pending</option>
            <option value="In Progress"> In Progress</option>
            <option value="Completed"> Completed</option>
          </select>

        </div>

        <button type="submit">
          {editTask ? "Update Task" : "Add Task"}
        </button>

      </div>

    </form>
  );
}

export default TaskForm;