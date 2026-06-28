import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import FilterBar from "./components/FilterBar";

import api from "./services/api";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");
  const[sort,setSort] = useState("Newest");
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

        <TaskForm
          fetchTasks={fetchTasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />

        <FilterBar
          search={search}
          setSearch={setSearch}
        />

        {filteredTasks.map((task) => (

          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
            setEditTask={setEditTask}
          />

        ))}

      </div>

      <ToastContainer />

    </div>
  );
}

export default App;