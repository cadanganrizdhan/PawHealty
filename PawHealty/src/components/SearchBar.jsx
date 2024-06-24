import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input type="text" name="query" placeholder="Cari lokasi..." />
      <button type="submit">Cari</button>
    </form>
  );
};

export default SearchBar;
