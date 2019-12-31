import React, {Component} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import CustomCard from "../components/CustomCard";


const useStyles = makeStyles({
  
  card: {
    maxWidth: 425,
    background: '#F55A44',
    color: 'white',
  },
  media: {
    height: 200,
  },
  description: {
    color: 'white',
  },
  button: {
    background: '#F56C5A',
    // background: '#6a0000',
    color: 'white',
  }
});

export default function Projects() {
  const classes = useStyles();
  
  return (
  <>
    <h1>Projects</h1>
    <Grid
    container
    justify="center"
    >
      <CustomCard
        title={'PyTron'}
        description={'Attendance app that helps manage flow of students.\n' +
        '            Logs when students check in and out. Notifies parents\n' +
        '            when students have checked out via email or text'}
        button1Text={'GitHub'}
        button1Link={'https://www.github.com/ectom/PyTron'}
        button2Text={'Live Demo'}
        button2Link={'https://ectom.github.io//404'}
      />
    </Grid>
  </>
  )
}
