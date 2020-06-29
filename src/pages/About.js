import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from "@material-ui/core";
import theme from "../styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles( {
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: '#4b4b4b',
    padding: '3vh 0 3vh 0',
    marginTop: '-2vh',
    marginBottom: '2vh'
  },
  grid: {
    margin: `${theme.spacing( 1 )}px auto`,
    maxWidth: '900px',
  },
  paper: {
    maxWidth: '900px',
    minWidth: '500px',
    textAlign: 'left',
    fontSize: '18px',
    color: '#f8f8ff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  subtitle1: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#f8f8ff',
  },
  subtitle2: {
    fontSize: '22px',
    color: '#f8f8ff',
  },
} );

function About() {
  
  const classes = useStyles();
  
  return (
    <>
      <div style={{display: 'block', height: '95vh'}}>
        <div style={{
          position: 'absolute',
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images/header-background.jpg") no-repeat top center',
          backgroundSize: 'cover !important',
          overflow: 'hidden',
          marginTop: '50px',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
        }}/>
        <Typography variant={'h1'} style={{color: '#f8f8ff', paddingTop: '40vh'}}>Ethan Tom</Typography>
      </div>
      <Grid className={classes.root} container lg={12} spacing={2}>
        <Grid item lg={3}>
          <img src={'./images/profile.jpg'} style={{height: '150px', borderRadius: '100px'}}/>
        </Grid>
        <Grid container lg={9}>
          <Grid item className={classes.paper} lg={12}>
            <Typography
              id={'About'}
              style={{color: '#f8f8ff'}}
              variant={'h5'}
            >About Me</Typography>
            <Typography variant={'body'}>
              Hi there! My name is Ethan Tom. I am a Software Engineer based in San Francisco, CA, recently out of
              college and coding bootcamp. I'm currently working two jobs, the first as a Quality Engineer at Planet Labs and  I build things for the web during my free time. I am proficient in Python and
              Javascript along with experience with several corresponding frameworks.
            </Typography>
            <Grid item lg={6}  style={{marginTop: '20px'}}>
              <Grid item lg={12}>
                <Typography
                  id={'About'}
                  style={{color: '#f8f8ff'}}
                  variant={'h5'}
                >Contact Information</Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant={'body'}>
                  Ethan Tom
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant={'body'}>
                  ethanchristophertom@gmail.com
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant={'body'}>
                  San Francisco, CA
                </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default About;
