import { FaSearch } from "react-icons/fa";

function FilterBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sort,
  setSort,
}) {
  return (
    <div className="filter-wrapper">

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-selects">

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">🟡 Pending</option>
          <option value="In Progress">🔵 In Progress</option>
          <option value="Completed">🟢 Completed</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;