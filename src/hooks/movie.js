import { useSelector } from 'react-redux';

export const useMovie = () => useSelector((state) => ({ ...state.movie }));
