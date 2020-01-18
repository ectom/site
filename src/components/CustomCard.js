import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Spacer from './Spacer';


const useStyles = makeStyles( {
  
  card: {
    maxWidth: '800px',
    minWidth: '500px',
    textAlign: 'left',
    background: '#F55A44',
    color: 'white',
    marginBottom: 50
  },
  media: {
    height: 300,
  },
  description: {
    color: 'white',
  },
  button: {
    background: '#F56C5A',
    color: 'white',
  },
  skills: {
    columnCount: 4
  },
} );


function CustomCard( props ) {
  
  const classes = useStyles()
  
  function actionArea() {
    if ( props.image ) {
      return (
        <CardActionArea
          href={props.cardLink}
          target={'_blank'}
        >
          <CardMedia
            className={classes.media}
            component="img"
            image={props.image}
            alt={props.title}
          />
        </CardActionArea>
      );
    }
  }
  
  
  function skills() {
    if ( props.skills ) {
      const skills = props.skills;
      const listSkills = skills.map( ( skill ) =>
        <li>{skill}</li>
      );
      return (
        <>
          <br/>
          <Typography variant={'h6'}>Relevant Technologies:</Typography>
          <ul className={classes.skills}>{listSkills}</ul>
        </>
      );
    }
  }
  
  function renderButton( buttonLink, buttonText ) {
    if ( buttonLink && buttonText ) {
      return (
        <Button
          size="small"
          className={classes.button}
          href={buttonLink}
          target={'_blank'}
        >
          {buttonText}
        </Button>
      )
    }
  }
  
  return (
    <>
      <Card className={classes.card} elevation={3}>
        {actionArea()}
        <CardContent>
          <Typography
            className={classes.description}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.title}
          </Typography>
          <Typography
            className={classes.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.description}
          </Typography>
          {skills()}
        </CardContent>
        <CardActions>
          {renderButton( props.button1Link, props.button1Text )}
          {renderButton( props.button2Link, props.button2Text )}
        </CardActions>
      </Card>
    </>
  )
}

export default CustomCard;
