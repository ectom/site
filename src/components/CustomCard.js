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



const CustomCard = (props) => {
  
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
      <CardActionArea href={this.props.cardLink} target={'_blank'}>
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
            {this.props.title}
          </Typography>
          <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
          component="p"
          >
            {this.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/*Link to Github Repo*/}
        {this.renderButton(this.props.button1Link, this.props.button1Text)}
        {this.renderButton(this.props.button2Link, this.props.button2Text)}
        <Button size="small" className={classes.button}>
          Share
        </Button>
        {/*Link to Live Demo Site*/}
        <Button size="small" className={classes.button}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default CustomCard;
