import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";


class Work extends Component {

    render() {
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
//         const useStyles = makeStyles({
//             card: {
//                 maxWidth: 345,
//             },
//             media: {
//                 height: 140,
//             },
//         });
//
//         const classes = useStyles();

        return (
            <>
                <h1>Work Experience</h1>
                <div>
                    <Card>
                        <CardActionArea>
                        <CardMedia
                          // className={classes.media}
                          image="/static/images/cards/contemplative-reptile.jpg"
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {/*Title*/}
                            Software Quality Engineer, Intern | June 2019 - Present
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {/*Description*/}
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        {/*Link to Github Repo*/}
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        {/*Link to Live Demo Site*/}
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                </div>
            </>
        )
    }
}

export default Work;