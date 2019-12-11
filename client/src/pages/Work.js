import React, { Component } from 'react';
import {Card} from '@material-ui/core';

class Work extends Component {
    const useStyles = makeStyles({
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });
    render() {


        return (
            <div>
                <h1>Work Experience</h1>
                <div>
                    <Card>
                        <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="/static/images/cards/contemplative-reptile.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
//                            Title
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
//                            Description
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
//                        Link to Github Repo
                        <Button size="small" color="primary">
                          Share
                        </Button>
//                        Link to Live Demo Site
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Work;