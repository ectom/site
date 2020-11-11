import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import CustomCard from '../components/CustomCard';
import theme from '../styles';
import data from '../data/work.json';

const useStyles = makeStyles({
	root: {
		width: '100%',
		flexGrow: 1,
		overflow: 'hidden',
	},
	grid: {
		margin: `${theme.spacing(1)}px auto`,
		maxWidth: '900px',
	},
});

const Work = () => {
	const classes = useStyles();

	return (
		<>
			<Typography id="Experience" style={{ color: '#f8f8ff' }} variant="h3">Work Experience</Typography>
			<Grid
				container
				justify="center"
				className={classes.grid}
			>
				{data.work.map((work) => {
					return (
						<CustomCard
							key={work.key}
							image={work.imagePath}
							title={work.title}
							description={work.description}
							skills={work.skills}
							cardLink={work.link}
						/>
					)
				})}
			</Grid>
		</>
	);
};

export default Work;

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
