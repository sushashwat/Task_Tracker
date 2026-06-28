function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="navbar">

      <div className="navbar-content">

        <div>

          <h1>📋 Task Tracker</h1>

          <p>Manage your daily tasks efficiently</p>

        </div>

        <div className="today">

          <span>Today</span>

          <h3>{today}</h3>

        </div>

      </div>

    </header>
  );
}

export default Navbar;