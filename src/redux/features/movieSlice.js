import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   movieList: [],
   movie: {},
};

const movieSlice = createSlice({
   name: 'movie',
   initialState,
   reducers: {},
});

export default movieSlice.reducer;
