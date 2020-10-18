import React, { useState } from 'react';
import { Grid, Typography, makeStyles, Tabs, Tab, Box } from "@material-ui/core";
import CustomCard from "../components/CustomCard";
import theme from "../styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
  },
  grid: {
    margin: `${theme.spacing( 1 )}px auto`,
    maxWidth: '900px',
  },
  paper: {
    padding: theme.spacing( 5 ),
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
  panel: {
    flexGrow: 1,
    backgroundColor: '#adb5bd',
    display: 'flex',
    height: '224',
  },
  tabs: {
    borderRight: '1px solid #fca311'
  }
});

export default function Projects() {
  
  const classes = useStyles();
  
  return (
    <>
      <Typography id={'Projects'} style={{color: '#f8f8ff'}} variant={'h3'}>Projects</Typography>
      <Grid
        container
        justify="center"
        className={classes.grid}
      >
        <CustomCard
          title={'Disasters'}
          description={'Displays Earthquakes filtered by date and magnitude. Information about the earthquake and a ' +
          'visual minimap is displayed where each earthquake took place.'}
          button1Text={'GitHub'}
          button1Link={'https://www.github.com/ectom/disasters'}
          button2Text={'Live Demo'}
          button2Link={'https://ectom.github.io/disasters/'}
          skills={['React', 'Node.js', 'Material UI', 'USGS API', 'React Leaflet']}
        />
        <CustomCard
          title={'Student Manager'}
          description={'Attendance app that helps manage flow of students.\n' +
          '            Logs when students check in and out. Notifies parents\n' +
          '            when students have checked out via email or text'}
          button1Text={'GitHub'}
          button1Link={'https://www.github.com/ectom/StudentManager'}
          skills={['React', 'Electron', 'Node.js', 'MySQL', 'Electron IPC', 'Material UI', 'Material Table']}
        />
        <CustomCard
          title={'Portfolio Website 2.0'}
          description={'My second and current attempt at a personal website, created to display the various projects ' +
          'and places I\'ve worked. This is ' +
          'webpage is built with React from the Create React App template and Material UI. I self-taught myself React' +
          'and this is my first React project, and through it, I am learning the usefulness and importance of ' +
          'reusable and custom components.'}
          button1Text={'Github'}
          button1Link={'https://www.github.com/ectom/ectom.github.io'}
          button2Text={'Live Demo'}
          button2Link={'https://ectom.github.io'}
          skills={['Javascript', 'React', 'Material UI', 'Node.js', 'Create React App', 'gh-pages']}
        />
        <CustomCard
          title={'TakeAPoll'}
          description={'A React Native mobile app where users can create polls for other users to anonymously vote ' +
          'on. There will be settings such as polls by location, interest, demographic, etc. This app is still in ' +
          'development, but I am continuously working on it '}
          button1Text={'Github'}
          button1Link={'https://www.github.com/ectom/TakeAPoll'}
          skills={['React', 'React Native', 'Google Sheets API', 'Javascript', 'Node.js']}
        />
        <CustomCard
          title={'Portfolio Website 1.0'}
          description={'My first attempt at a personal website. This is a full stack portfolio web app using MEAN ' +
          'stack. I went a bit overkill by adding a backend database and Node server to control the contact form and ' +
          'store data of messages. It is organized according to standard MVC patterns.'}
          button1Text={'Github'}
          button1Link={'https://www.github.com/ectom/sitev1'}
          skills={['Angular', 'MongoDB', 'Express', 'Node.js', 'MVC Framework', 'Nodemailer']}
        />
      </Grid>
    </>
  )
}
