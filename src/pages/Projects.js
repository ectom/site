import React from 'react';
import {Grid} from "@material-ui/core";
import CustomCard from "../components/CustomCard";


export default function Projects() {
  
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
