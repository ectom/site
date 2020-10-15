import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from "@material-ui/core";
import theme from "../styles";
import Typography from "@material-ui/core/Typography";
import Link from '../components/Link.js'
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
  about:{
    display: 'block',
    margin: 'auto',
    paddingBottom: '20px',
  },
  aboutInfo: {
    display: 'inline-block',
    textAlign: 'left',
    minWidth: '400px',
    maxWidth: '600px',
    padding: '0 30px 0 30px',
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
      <Grid className={classes.root} container lg={12} >
        <div id={'About'} className={classes.about}>  
          <div className={classes.aboutInfo}>
            <Typography
              style={{color: '#f8f8ff'}}
              variant={'h5'}
            >About Me</Typography>
            <Typography variant={'body1'}>
              Hi there! My name is Ethan Tom. I am a Software Engineer based in San Francisco, CA. 
            </Typography>
            <Typography variant={'body1'}>  
              After graduating from <Link link='https://www.ucsc.edu' text ='UC Santa Cruz' />, I joined the Quality Engineering team at <Link link='https://www.planet.com' text='Planet Labs' /> where I test and automate many different projects in Python.
            </Typography>  
            <Typography variant={'body1'}>
                I enjoy build things for the web during my free time, hoping to one day become a web developer
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
          </div>
          <div style={{display: 'inline-block'}}>
            <img src={'./images/profile.jpg'} style={{height: '250px', borderRadius: '120px'}}/>
          </div>
        </div>
      </Grid>
    </>
  )
}

export default About;
