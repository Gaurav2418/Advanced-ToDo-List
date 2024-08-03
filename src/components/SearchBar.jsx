import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
    type="text"
    className="border p-2 rounded w-full mb-4"
    placeholder="Search tasks..."
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  );
};

export default SearchBar;
