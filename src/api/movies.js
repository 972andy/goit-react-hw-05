import axios from "axios";

const moviesInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/movie/day",
     headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njc5MmFjYzY1Y2JhYjBlZTZkN2NjOGM1NDViZDg5MCIsIm5iZiI6MTczMDU0NTcyMi4zNzc4NjIsInN1YiI6IjY3MjM2Y2Y3ODI2NThhZWVhYzkyNWVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iulfrllo46tdM4oEDMKjbNVrnqaNRqWujOD-b_-SLTk'
    },
    params: {
        // api_key: "56792acc65cbab0ee6d7cc8c545bd890",
        include_adult: false,
        language: "en-US",
    },
});

// 52.хв переглянути про запити 

export const getTrendingMovies = async () => {
    const response = await moviesInstance.get();
    return response.data;
};