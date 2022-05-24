import { TextField } from '@mui/material';
import { useMovie } from 'hooks/movie';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from 'redux/features/movieSlice';
import useStyles from 'styles';

const Search = () => {
   const [name, setName] = useState('');
   const mui = useStyles();

   const {
      movieList: { Error: error },
   } = useMovie();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getMovies(name));
   }, [name, dispatch]);

   return (
      <>
         <h2 className={mui.title}>Movie Search App</h2>
         <form
            className={mui.form}
            onSubmit={(event) => event.preventDefault()}
         >
            <TextField
               type="text"
               fullWidth
               value={name}
               sx={{ m: 1, width: '55ch' }}
               onChange={(event) => setName(event.target.value)}
            />
            {error && <p className={mui.error}>{error}</p>}
         </form>
      </>
   );
};

export default Search;
