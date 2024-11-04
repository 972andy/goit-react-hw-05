
import axios from "axios";

const moviesSearchInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/movie",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njc5MmFjYzY1Y2JhYjBlZTZkN2NjOGM1NDViZDg5MCIsIm5iZiI6MTczMDU0NTcyMi4zNzc4NjIsInN1YiI6IjY3MjM2Y2Y3ODI2NThhZWVhYzkyNWVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iulfrllo46tdM4oEDMKjbNVrnqaNRqWujOD-b_-SLTk'
    },
    params: {
        include_adult: false,
        language: "en-US",
    },
});

export const searchMovies = async (query) => {
    const response = await moviesSearchInstance.get('', {
        params: { query }
    });
    return response.data; 
};

