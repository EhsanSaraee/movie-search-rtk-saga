import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { fetchMovie, fetchMovies } from './movieApi';
import { getMovie, getMovies, setMovie, setMovies } from './movieSlice';

function* loadMoviesAsync({ payload }) {
   try {
      const movie = payload;
      const { data, status } = yield call(fetchMovies, movie);
      if (status === 200) yield put(setMovies({ ...data }));
   } catch (error) {
      console.log(error);
   }
}

function* loadMovieAsync({ payload }) {
   try {
      const movieID = payload;
      const { data, status } = yield call(fetchMovie, movieID);
      if (status === 200) yield put(setMovie({ ...data }));
   } catch (error) {
      console.log(error);
   }
}

function* loadMovies() {
   yield takeLatest(getMovies.type, loadMoviesAsync);
}

function* loadMovie() {
   yield takeLatest(getMovie.type, loadMovieAsync);
}

export const movieSagas = [fork(loadMovies), fork(loadMovie)];
