import React from "react";
import propTypes from "prop-types";

export default function Filter({ setFilter, filter }) {
  return (
    <label className="filter">
      Filter:
      <input
      className="filter-container"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
}

Filter.protoTypes = {
  filter: propTypes.string.isRequired,
  setFilter: propTypes.func.isRequired
}
