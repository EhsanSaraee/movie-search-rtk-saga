import { useDispatch } from 'react-redux';
import useStyles from 'styles';
import { useMovie } from 'hooks/movie';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovie } from 'redux/features/movieSlice';
import { Typography, Button } from '@mui/material';

const Movie = () => {
   const mui = useStyles();
   const dispatch = useDispatch();
   const {
      movie: { Poster, Title, Year, Plot, Director },
   } = useMovie();
   const { id } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      id && dispatch(getMovie(id));
   }, [id, dispatch]);

   return (
      <section className={mui.section}>
         <img src={Poster} alt={Title} />
         <div>
            <Typography variant="h3" align="left" component="h2" gutterBottom>
               {Title}
            </Typography>
            <Typography variant="h5" align="left" component="h5" gutterBottom>
               Year: {Year}
            </Typography>
            <Typography variant="body1" align="left" component="p" gutterBottom>
               {Plot}
            </Typography>
            <Typography variant="h6" align="left" component="h6" gutterBottom>
               Director: {Director}
            </Typography>
            <Button
               variant="contained"
               color="primary"
               onClick={() => navigate('/')}
            >
               Go Back
            </Button>
         </div>
      </section>
   );
};

export default Movie;
