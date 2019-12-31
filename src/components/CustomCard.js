import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
  
  card: {
    maxWidth: '900px',
    minWidth: '500px',
    textAlign: 'left',
    background: '#F55A44',
    color: 'white',
  },
  media: {
    height: 400,
  },
  description: {
    color: 'white',
  },
  button: {
    background: '#F56C5A',
    color: 'white',
  }
});



function CustomCard(props) {
  
  const classes = useStyles()
  
  function renderButton(buttonLink, buttonText){
    if(buttonLink && buttonText){
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
    <Card className={classes.card}>
      <CardActionArea
        href={props.cardLink}
        target={'_blank'}
      >
        <CardMedia
        className={classes.media}
        component="img"
        image="./images/planetlogo.jpg"
        title="Planet Labs"
        alt="Planet Labs"
        />
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
        </CardContent>
      </CardActionArea>
      <CardActions>
        {renderButton(props.button1Link, props.button1Text)}
        {renderButton(props.button2Link, props.button2Text)}
      </CardActions>
    </Card>
  )
}

export default CustomCard;
