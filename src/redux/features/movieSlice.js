import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   movieList: [],
   movie: {},
};

const movieSlice = createSlice({
   name: 'movie',
   initialState,
   reducers: {
      getMovies: (movie) => movie,
      setMovies: (state, action) => {
         state.movieList = action.payload;
      },
      getMovie: (movieID) => movieID,
      setMovie: (state, action) => {
         state.movie = action.payload;
      },
   },
});

export const { getMovies, setMovies, getMovie, setMovie } = movieSlice.actions;

export default movieSlice.reducer;
