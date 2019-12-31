import React, {Component} from 'react';
import {Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";
import CustomCard from "../components/CustomCard";


const useStyles = makeStyles({
  
  card: {
    maxWidth: '900px',
    minWidth: '500px',
    textAlign: 'left',
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

export default function Work() {
  
  const classes = useStyles();
  
  return (
  <>
    <h1>Work Experience</h1>
    <Grid
    container
    justify="center"
    >
      <CustomCard
        cardLink={'https://www.planet.com'}
        title={'Software Quality Engineer, Intern | June 2019 - Present'}
        description={'Designed, developed and maintained automated test cases\n' +
        '            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\n' +
        '            across all continents except Antarctica'}
        button1Link={'google.com'}
        button1Text={'button1'}
      />
    </Grid>
  </>
  )
  
}

//    TODO use MUI Expansion Panels for work and Cards for Projects

// Responsibilities:
//
// Design, develop and maintain automated test cases
// Take ownership of testing features and automation till release.
// Develop and enhance existing tools and automation framework
// Troubleshoot issues down to the root cause and provide detailed bug reports.
// Detail oriented, highly adaptable and acts as a customer advocate for quality.
// Work closely with stakeholders, communicate with team about any  issues, risks with the application in test.
// The Must Haves:
//
// 6+ years of experience in software testing and automation
// Strong experience in developing test automation using Python or similar.
// Proven experience in all areas of product testing
// Experience in building reliable  automation framework and test tools.
// Experience using Docker and containerized architectures
// Experience in Continuous integration (CI) and continuous delivery (CD) such as Gitlab, Jenkins.
// Experience with open source tools and resources
// The Nice-to-Haves:
//
// Experience of geospatial concepts
// Experience in Agile development environment
