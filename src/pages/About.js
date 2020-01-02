import React, {Component} from 'react';
import {makeStyles, ThemeProvider} from "@material-ui/core";
import theme from "../styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
  },
  grid: {
    margin: `${theme.spacing(1)}px auto`,
    maxWidth: '900px',
  },
  paper: {
    padding: theme.spacing(5),
    backgroundColor: '#FAFAFA',
    maxWidth: '900px',
    minWidth: '500px',
    textAlign: 'left',
    fontSize: '18px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  subtitle1: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  subtitle2: {
    fontSize: '22px',
    color: '',
  },
});

function About() {
  
  const classes = useStyles();
  
  return (
  <div className={classes.root}>
    <h1>About</h1>
    
    <Grid container wrap="nowrap" spacing={2}>
      <Grid container className={classes.grid}>
        <Paper className={classes.paper} item elevation={0}>
          <Typography variant={'body'}>
            Hi there! My name is Ethan Tom. I am a Software Engineer based in San Francisco, CA, recently out of college
            and coding bootcamp. I build things for the web during my free time. I am proficient in Python and
            Javascript along with experience with several corresponding frameworks.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
  )
}

export default About;