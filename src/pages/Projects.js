import React, { Component } from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({

    card: {
        maxWidth: 425,
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

export default function Projects() {
    const classes = useStyles();

    return (
        <>
            <h1>Projects</h1>
            <Grid
                container
                justify="center"
            >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.description}
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            PyTron
                        </Typography>
                        <Typography
                            className={classes.description}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Attendance app that helps manage flow of students.
                            Logs when students check in and out. Notifies parents
                            when students have checked out via email or text
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/*Link to Github Repo*/}
                        <Button size="small" className={classes.button}>
                            Github
                        </Button>
                        {/*Link to Live Demo Site*/}
                        <Button size="small" className={classes.button}>
                            Demo
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}
