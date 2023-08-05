import React from 'react'

export const Searchbar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search players by name..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};
