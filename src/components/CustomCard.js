import {
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

  card: {
    maxWidth: '800px',
    textAlign: 'left',
    background: '#fca311',
    color: 'white',
    marginBottom: 50,
    display: 'block',
  },
  media: {
    height: 300,
  },
  description: {
    color: 'white',
  },
  button: {
    background: '#495057',
    color: 'white',
  },
  skills: {
    columnCount: 4,
  },
});

function CustomCard(props) {
  const classes = useStyles();

  function actionArea() {
    if (props.image) {
      return (
        <CardActionArea
          href={props.cardLink}
          target="_blank"
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

  const skills = () => {
    if (props.skills) {
      const { skills } = props;
      const listSkills = skills.map((skill, index) => <li key={`${props.title}-${skill}-${index}`}>{skill}</li>);
      return (
        <>
          <br />
          <Typography variant="h6">Relevant Technologies:</Typography>
          <ul className={classes.skills}>{listSkills}</ul>
        </>
      );
    }
  };

  const renderButton = (buttonLink, buttonText) => {
    if (buttonLink && buttonText) {
      return (
        <Button
          size="small"
          className={classes.button}
          href={buttonLink}
          target="_blank"
        >
          {buttonText}
        </Button>
      );
    }
  };

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
          {renderButton(props.button1Link, props.button1Text)}
          {renderButton(props.button2Link, props.button2Text)}
        </CardActions>
      </Card>
    </>
  );
}

export default CustomCard;
