
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesDetailsReviews } from "../../api/moviesDetails";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMoviesReviews() {
      try {
        if (movieId) {
          const data = await getMoviesDetailsReviews(movieId);
          console.log("data:", data);
         
          setMovieReviews(data.results);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMoviesReviews();
  }, [movieId]);

  if (movieReviews.length === 0) {
    return <p>No reviews available.</p>; 
  }

  return (
    <div>
      <h2>Movie Reviews</h2>
      <ul>
        {movieReviews.map((review) => (
          <li key={review.id}>
            <h3>Review Author: {review.author}</h3> 
            <p>{review.content}</p>
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default MovieReviews;

