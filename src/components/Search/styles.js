import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
   title: {
      letterSpacing: '0.1rem',
      lineHeight: '1.25',
      marginBottom: '0.15rem',
      fontSize: '2rem',
   },
   form: {
      width: '90vw',
      maxWidth: '1170px',
      margin: '3rem auto 3rem auto',
   },
   error: {
      color: '#f93154',
      paddingTop: '0.5rem',
      fontSize: '2.15rem',
   },
}));

export default useStyles;
