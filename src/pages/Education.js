import React from 'react';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import exports from '../styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
    padding: exports.theme.spacing(0, 3),
  },
  paper: {
    margin: `${exports.theme.spacing(1)}px auto`,
    padding: exports.theme.spacing(6),
    backgroundColor: '#FAFAFA',
    maxWidth: '750px',
    minWidth: '500px',
    textAlign: 'left',
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
    <ThemeProvider theme={exports.theme}>
      <div className={classes.root}>
        <Grid container wrap="nowrap"  spacing={2}>
          <Grid item>
            <Paper className={classes.paper} item elevation={0}>
              <Typography className={exports.customStyles.subtitle1}>
                <strong>University of California, Santa Cruz</strong>
              </Typography>
              <Typography className={exports.customStyles.subtitle2}>
                <i>Bachelors of Science, Computer Science | Class of 2019</i>
              </Typography>
              <Typography variant={'body'}>
                I graduated from UC Santa Cruz with a B.S. in Computer Science.
                Throughout my four years in college, I participated in many extracurriculars
                and leadership positions, such as being a Student Outreach Leader, Kyrie Christian
                Fellowship student leader, 3D Modeling TA, and Doordash driver. Among doing those things,
                I discovered my passion to develop things to be used by other people.
              </Typography>
            </Paper>
            <Paper className={classes.paper} item elevation={0}>
              <Typography className={exports.customStyles.subtitle1}>
                <strong>Coding Dojo</strong>
              </Typography>
              <Typography className={exports.customStyles.subtitle2}>
                <i>Certification in MEAN Stack and Python Stack (Django/Flask)</i>
              </Typography>
              <Typography variant={'body'}>
                Over the summer of 2017, I spent 70-90 hours a week at the Silicon Valley Coding Dojo location. There I
                earned the highest certifications in MongoDB, Express, Angular, and Node.js (MEAN) Stack development and
                the Python Stack, which includes both Django and Flask with SQLite3. I successfully created simple CRUD
                applications and deployed them to the web.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  </div>
  );
}