import { useEffect, useState } from "react";
import { Link, useParams, Outlet, useLocation} from "react-router-dom";
import { getMoviesDetails } from "../../api/moviesDetails";

import style from './MovieDetailsPage.module.css';
import GoBackButton from "../../components/GoBackButton/GoBackButton";

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null); 
  const { movieId } = useParams();
  const location = useLocation();
  console.log(location.state.from);
  

  useEffect(() => {
    async function fetchMoviesDetails() {
      try {
        if (movieId) {
          const data = await getMoviesDetails(movieId);
          setMovieDetails(data);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMoviesDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className={style.container}>
      
      <GoBackButton />
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <h3>{movieDetails.title}</h3>
      <p>Release date: {movieDetails.release_date}</p>
      <p>{movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
      <div>
        <ul>
          <li>
            <Link
              state={{
                from: location.state.from
              }}
              to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link
              state={{
                from: location.state.from
              }}
              to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesDetails;

