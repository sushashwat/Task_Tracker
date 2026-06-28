function FilterBar() {
  return (

    <div className="filter">

      <input
        type="text"
        placeholder="Search..."
      />

      <select>

        <option>All</option>

        <option>Pending</option>

        <option>In Progress</option>

        <option>Completed</option>

      </select>

    </div>

  );
}

export default FilterBar;