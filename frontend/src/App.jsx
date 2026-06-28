import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import FilterBar from "./components/FilterBar";
import Dashboard from "./components/Dashboard";
import api from "./services/api";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [statusFilter, setStatusFilter] = useState("All");
  async function fetchTasks() {

    try {

      const res = await api.get("/tasks");

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }

  }

  useEffect(() => {

    fetchTasks();

  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      task.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  filteredTasks.sort((a, b) => {
    if (sort === "Newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  return (
    <div>

      <Navbar />
      <div className="container">
        <Dashboard tasks={tasks} />
        <TaskForm
          fetchTasks={fetchTasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />
        <FilterBar
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sort={sort}
          setSort={setSort}
        />

        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <h2>No Tasks Found 📭</h2>
            <p>Try creating a new task</p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              fetchTasks={fetchTasks}
              setEditTask={setEditTask}
            />
          ))
        )}

      </div>

      <ToastContainer />

    </div>
  );
}

export default App;