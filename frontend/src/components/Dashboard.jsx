import {
  FaClipboardList,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

function Dashboard({ tasks }) {
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <div className="dashboard">

      <div className="box total">

        <FaClipboardList />

        <h2>{total}</h2>

        <p>Total Tasks</p>

      </div>

      <div className="box pending">

        <FaClock />

        <h2>{pending}</h2>

        <p>Pending</p>

      </div>

      <div className="box progress">

        <FaSpinner />

        <h2>{progress}</h2>

        <p>In Progress</p>

      </div>

      <div className="box completed">

        <FaCheckCircle />

        <h2>{completed}</h2>

        <p>Completed</p>

      </div>

    </div>
  );
}

export default Dashboard;