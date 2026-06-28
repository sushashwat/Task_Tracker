import api from "../services/api";
import { toast } from "react-toastify";

function TaskCard({ task, fetchTasks, setEditTask }) {

  async function deleteTask() {

    if (!window.confirm("Delete this task?")) return;

    try {

      await api.delete(`/tasks/${task._id}`);

      toast.success("Task Deleted");

      fetchTasks();

    } catch {

      toast.error("Delete failed");

    }
  }

  return (

    <div className="task-card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <span>{task.status}</span>

      <div className="buttons">

        <button 
        className="edit"
        onClick={()=> setEditTask(task)}
        >
          Edit
        </button>

        <button
          className="delete"
          onClick={deleteTask}
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default TaskCard;