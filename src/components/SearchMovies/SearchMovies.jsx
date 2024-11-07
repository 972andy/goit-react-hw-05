import React, { useState } from 'react';

const SearchMovies = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);  // Передаємо введений запит у батьківський компонент
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter the name of the movie"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovies;


