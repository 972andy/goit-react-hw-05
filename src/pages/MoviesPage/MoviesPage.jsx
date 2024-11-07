

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../../components/MovieList/MovieList';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import { searchMovies } from '../../api/searchMovies';
import { getTrendingMovies } from "../../api/movies";
import GoBackButton from '../../components/GoBackButton/GoBackButton';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (query) {
          const data = await searchMovies(query);
          setMovies(data.results);
        } setError(null);
      } catch (err) {
        setError("Couldn't load movies. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (searchQuery) => {
    setSearchParams({ q: searchQuery });
  };

  return (
    <div>
      <GoBackButton />
      <SearchMovies onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {loading ? <p>Loading movies...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;



