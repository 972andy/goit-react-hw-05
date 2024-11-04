import React, { useState, useEffect } from 'react';
import { searchMovies } from '../../api/searchMovies';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Отримання значення запиту 
  useEffect(() => {
    const queryFromParams = searchParams.get('q') || '';
    setQuery(queryFromParams);

    if (queryFromParams) {
      const fetchMovies = async () => {
        try {
          const data = await searchMovies(queryFromParams);
          setMovies(data.results);
          setError(null);
        } catch (err) {
          setError("Couldn't find the movies. Try again.");
          setMovies([]);
        }
      };

      fetchMovies();
    }
  }, [searchParams]); 

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ q: query });
  };

  return (
    <div>
      <h3>Search movies</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter the name of the movie"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>} 
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMovies;

