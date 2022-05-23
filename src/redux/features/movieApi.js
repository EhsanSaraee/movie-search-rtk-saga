import axios from 'axios';

const API_ENDPOINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (movie) =>
   axios.get(`${API_ENDPOINT}&s=${movie}`);
