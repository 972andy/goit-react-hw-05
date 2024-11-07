import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import { getMoviesDetailsCredits } from "../../api/moviesDetails";

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null); 
  const { movieId } = useParams(); 

  useEffect(() => {
    async function fetchMoviesCast() {
      try {
        if (movieId) {
          const data = await getMoviesDetailsCredits(movieId);
          console.log("data:", data);
          setMovieCast(data.cast); 
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMoviesCast();
  }, [movieId]);

  if (!movieCast) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {movieCast.map((actor) => (
          <li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name} as Character {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;


