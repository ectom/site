import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import CustomCard from '../components/CustomCard';
import theme from '../styles';
import data from '../data/projects.json';

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
	paper: {
		padding: theme.spacing(5),
		backgroundColor: '#FAFAFA',
		maxWidth: '900px',
		minWidth: '500px',
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
	panel: {
		flexGrow: 1,
		backgroundColor: '#adb5bd',
		display: 'flex',
		height: '224',
	},
	tabs: {
		borderRight: '1px solid #fca311',
	},
});

const Projects = () => {
	const classes = useStyles();

	return (
		<>
			<Typography id="Projects" style={{ color: '#f8f8ff' }} variant="h3">Projects</Typography>
			<Grid
				container
				justify="center"
				className={classes.grid}
			>
				{data.projects.map((project) => {
					return (
						<CustomCard
							key={project.title}
							title={project.title}
							description={project.description}
							button1Text={project.button1Text}
							button1Link={project.button1Link}
							button2Text={project.button2Text}
							button2Link={project.button2Link}
							skills={project.skills}
						/>
					)
				})}
				<CustomCard
					title="TakeAPoll"
					description={'A React Native mobile app where users can create polls for other users to anonymously vote '
          + 'on. There will be settings such as polls by location, interest, demographic, etc. This app is still in '
          + 'development, but I am continuously working on it '}
					button1Text="Github"
					button1Link="https://www.github.com/ectom/TakeAPoll"
					skills={['React', 'React Native', 'Google Sheets API', 'Javascript', 'Node.js']}
				/>
				<CustomCard
					title="Portfolio Website 1.0"
					description={'My first attempt at a personal website. This is a full stack portfolio web app using MEAN '
          + 'stack. I went a bit overkill by adding a backend database and Node server to control the contact form and '
          + 'store data of messages. It is organized according to standard MVC patterns.'}
					button1Text="Github"
					button1Link="https://www.github.com/ectom/sitev1"
					skills={['Angular', 'MongoDB', 'Express', 'Node.js', 'MVC Framework', 'Nodemailer']}
				/>
			</Grid>
		</>
	);
};

export default Projects;
