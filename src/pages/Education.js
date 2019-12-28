import React from 'react';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(10),
    backgroundColor: '#FAFAFA',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});


export default function Education() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <Grid container wrap="nowrap" spacing={2}>
        <Paper className={classes.paper} item elevation={0}>
            <Typography variant={'h4'}>University of California, Santa Cruz</Typography>
            <Typography variant={'h5'}>Bachelors of Science, Computer Science</Typography>
            <Typography>description</Typography>
        </Paper>
      </Grid>
      </div>
      </ThemeProvider>
    </div>
  );
}