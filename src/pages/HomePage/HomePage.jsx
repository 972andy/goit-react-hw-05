
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await getTrendingMovies();
        console.log('data:', data);
        setTrendingMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <>
       <h3>Trending today</h3>
      <MovieList movies={trendingMovies} />
    </>
  );
};

export default HomePage;
