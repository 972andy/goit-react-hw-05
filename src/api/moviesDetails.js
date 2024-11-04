import axios from "axios";

const moviesDetailsInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Njc5MmFjYzY1Y2JhYjBlZTZkN2NjOGM1NDViZDg5MCIsIm5iZiI6MTczMDU0NTcyMi4zNzc4NjIsInN1YiI6IjY3MjM2Y2Y3ODI2NThhZWVhYzkyNWVhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iulfrllo46tdM4oEDMKjbNVrnqaNRqWujOD-b_-SLTk'
    },
    params: {
        
        include_adult: false,
        language: "en-US",
    },
});

export const getMoviesDetailsReviews = async (moviesId) => {
    const response = await moviesDetailsInstance.get(`/${moviesId}/reviews`);
    return response.data;
};


export const getMoviesDetailsCredits = async (moviesId) => {
    const response = await moviesDetailsInstance.get(`/${moviesId}/credits`);
    return response.data;
};

export const getMoviesDetails = async (moviesId) => {
    const response = await moviesDetailsInstance.get(`/${moviesId}`);
    return response.data;
};