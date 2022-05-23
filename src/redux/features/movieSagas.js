import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { fetchMovies } from './movieApi';
import { getMovies, setMovies } from './movieSlice';

function* loadMoviesAsync({ payload }) {
   try {
      const { data, status } = yield call(fetchMovies, payload);
      if (status === 200) yield put(setMovies({ ...data }));
   } catch (error) {
      console.log(error);
   }
}

function* loadMovies() {
   yield takeLatest(getMovies.type, loadMoviesAsync);
}

export const movieSagas = [fork(loadMovies)];
