import React, { Component } from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import CustomCard from "../components/CustomCard";


export default function Work() {

    return (
        <>
            <h1 id={'Experience'}>Work Experience</h1>
            <Grid
                container
                justify="center"
            >
                <CustomCard
                    image={'./images/planetlogo.jpg'}
                    title={'Software Engineer in Test, Intern (June 2019 - Present)'}
                    description={'I was hired right out of college and have been working at Planet since then. My responsibilities ' +
                        'include designing and developing automated test cases in Cypress (Javascript), PyTest, and Selenium (Python). I ' +
                        'write tests that run in a nightly regression pipeline and tests that run with every new push on both staging ' +
                        'and production platforms. My tests help developers debug issues faster by offering more specific and helpful ' +
                        'error messages that show where problems occur in the code. The Cypress tests are in Javascript and are mostly ' +
                        'stubbed to test web features in a controlled environment also known as a unit test. The PyTest and Selenium Webdriver tests ' +
                        'I write are in Python 3. These are end to end tests which point out where there are failures in the code. ' +
                        'For this job I have to be very detail oriented and thorough in order to streamline the development process, ' +
                        'as I work very closely with the developers and attend biweekly standups, sprint planning meetings and ' +
                        'retrospectives. Since working at Planet, I have become much more comfortable diving into and understanding ' +
                        'different code bases, as I am often switched around between various projects.'}
                    skills={['Python', 'Javascript', 'React', 'Cypress', 'Selenium', 'PyTest', 'Git', 'Jira', 'GitLab CI/CD', 'End-to-end testing', 'Automation', 'Code Review']}
                    cardLink={'https://www.planet.com'}
                />
                <CustomCard
                    image={'./images/cinemalooplogo.jpg'}
                    title={'Fullstack Developer (April 2020 - August 2020)'}
                    description={'Collaborated closely with senior developers to quickly build a MVP customer facing website in React. Worked closely with designers to create a pixel perfect frontend, identical to the designs. Planned and introduced libraries such as Material UI to make Frontend development faster and cleaner. Developed backend endpoints and database functions to connect users.'}
                    skills={['Javascript', 'Node', 'React', 'Express', 'MongoDB', 'Webpack', 'Material UI', 'Figma', 'Git', 'GitLab CI/CD', 'Code Review']}
                    cardLink={'https://www.cinemaloop.co'}
                />
            </Grid>
        </>
    )
}

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
