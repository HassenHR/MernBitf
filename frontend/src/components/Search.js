import React from "react";

function Search({ value, onChange }) {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Search for a user"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
