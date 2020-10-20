import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '../components/Link.js'
import theme from '../styles';

const useStyles = makeStyles( {
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
} );


export default function Education() {
  
  const classes = useStyles();
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid container className={classes.grid}>
              <Paper className={classes.paper}>
                <Typography className={classes.subtitle1}>
                  <strong>University of California, Santa Cruz</strong>
                </Typography>
                <Typography className={classes.subtitle2}>
                  <i>Bachelors of Science, Computer Science | Class of 2019</i>
                </Typography>
                <Typography variant={'body1'}>
                  I graduated from UC Santa Cruz with a B.S. in Computer Science.
                  Throughout my four years in college, I participated in many extracurriculars
                  and leadership positions, such as being a Student Outreach Leader, Kyrie Christian
                  Fellowship student leader, 3D Modeling TA, and Doordash driver. Among doing those things,
                  I discovered my passion to develop things to be used by other people.
                </Typography>
              </Paper>
              <Paper className={classes.paper} style={{marginTop: '-5px'}}>
                <Typography className={classes.subtitle1}>
                  <strong>Coding Dojo</strong>
                </Typography>
                <Typography className={classes.subtitle2}>
                  <i>Certification in <Link link={'https://www.codingdojo.com/what-is-the-mean-stack'}
                                            text={'MEAN Stack'}/> and <Link
                    link={'https://www.codingdojo.com/what-is-python-programming'}
                    text={'Python Stack'}/> (Django/Flask)</i>
                </Typography>
                <Typography variant={'body1'}>
                  Over the summer of 2017, I spent 70-90 hours a week at the Silicon Valley Coding Dojo location. There
                  I
                  earned the highest certifications in MongoDB, Express, Angular, and Node.js (MEAN) Stack development
                  and
                  the Python Stack, which includes both Django and Flask with SQLite3. I successfully created simple
                  CRUD
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