import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { useMovie } from 'hooks/movie';
import { Link } from 'react-router-dom';

const MovieList = () => {
   const { movieList } = useMovie();

   return (
      <Grid sx={{ flexGrow: 1 }} container>
         <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={3}>
               {movieList?.Search?.map(({ Poster, imdbID, Title, Year }) => (
                  <Grid item key={nanoid()}>
                     <Card sx={{ maxWidth: '350' }}>
                        <Link to={`/movie/${imdbID}`}>
                           <CardMedia
                              component="img"
                              height="350"
                              image={Poster}
                              alt={Title}
                           />
                           <CardContent>
                              <Typography variant="body2" color="textPrimary">
                                 {Title}
                              </Typography>
                              <Typography variant="body2" color="textPrimary">
                                 ({Year})
                              </Typography>
                           </CardContent>
                        </Link>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </Grid>
      </Grid>
   );
};

export default MovieList;
