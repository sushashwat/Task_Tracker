import { FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";
import api from "../services/api";
import { toast } from "react-toastify";

function TaskCard({ task, fetchTasks, setEditTask }) {
  async function deleteTask() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/tasks/${task._id}`);

      toast.success("Task Deleted Successfully");

      fetchTasks();
    } catch (error) {
      toast.error("Failed to delete task");
    }
  }

  const formattedDate = new Date(task.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="task-card">

      <div className="card-top">

        <div>

          <h3>{task.title}</h3>

          <p className="task-description">
            {task.description || "No description provided"}
          </p>

        </div>

        <span className={`badge ${task.status.replace(/\s/g, "")}`}>
          {task.status}
        </span>

      </div>

      <div className="card-footer">

        <div className="date">

          <FaCalendarAlt />

          <span>{formattedDate}</span>

        </div>

        <div className="buttons">

          <button
            className="edit"
            onClick={() => setEditTask(task)}
          >
            <FaEdit />

            Edit
          </button>

          <button
            className="delete"
            onClick={deleteTask}
          >
            <FaTrash />

            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;    