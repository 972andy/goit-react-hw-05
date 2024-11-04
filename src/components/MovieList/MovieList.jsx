import { useEffect, useState } from "react";
// import { getTrendingMovies } from "../../api/movies";
import { Link, useLocation } from "react-router-dom";
import style from './MovieList.module.css';

const MovieList = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovie() {
      try {
        const data = await getTrendingMovies(); 
        console.log('data:', data); 
        setTrendingMovie(data.results); 
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }
    fetchTrendingMovie();
  }, []);

  return (
    <div className={style.container}>
      <h3>Trending today</h3>
      <ul>
        {trendingMovie.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.state?.from || '/' }} 
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

