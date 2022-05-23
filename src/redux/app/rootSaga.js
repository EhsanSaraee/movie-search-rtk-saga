import { all } from 'redux-saga/effects';
import { movieSagas } from 'redux/features/movieSagas';

export default function* rootSaga() {
   yield all([...movieSagas]);
}
