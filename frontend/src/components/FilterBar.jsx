function FilterBar({ search, setSearch }) {
    return (

        <div className="filter">

            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
            >

                <option>All</option>

                <option>Pending</option>

                <option>In Progress</option>

                <option>Completed</option>

            </select>

        </div>

    );
}

export default FilterBar;