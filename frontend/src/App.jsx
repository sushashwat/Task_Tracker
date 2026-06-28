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

  return (
    <div>

      <Navbar />

      <div className="container">

        <TaskForm 
        fetchTasks={fetchTasks}
        editTask={editTask}
        setEditTask={setEditTask} 
        />

        <FilterBar />

        {tasks.map((task) => (

          <TaskCard
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