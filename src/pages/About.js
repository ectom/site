import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import theme from '../styles';
import Link from '../components/Link.js';
import data from '../data/about.json';

// paletteTheme: {
//   #f8f9fa,
//   #e9ecef
//   #dee2e6,
//   #ced4da,
//   #adb5bd,
//   #6c757d,
//   #495057,
//   #343a40,
//   #212529,
//   #fca311,
// }

const useStyles = makeStyles({
	root: {
		width: '100%',
		flexGrow: 1,
		overflow: 'hidden',
		backgroundColor: '#212529',
		padding: '30px 0 50px 0',
		marginTop: '-20px',
		marginBottom: '2',
	},
	grid: {
		margin: `${theme.spacing(1)}px auto`,
		maxWidth: '900px',
	},
	paper: {
		maxWidth: '900px',
		minWidth: '500px',
		textAlign: 'left',
		fontSize: '18px',
		color: '#f8f8ff',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	subtitle1: {
		fontSize: '25px',
		fontWeight: 'bold',
		color: '#f8f8ff',
	},
	subtitle2: {
		fontSize: '22px',
		color: '#f8f8ff',
	},
	about: {
		display: 'block',

		margin: 'auto',
		paddingBottom: '20px',
	},
	aboutInfo: {
		display: 'inline-block',
		textAlign: 'left',
		maxWidth: '600px',
		padding: '0 30px 0 30px',
		color: '#e9ecef',
	},
	p: {
		marginBottom: '10px',
	},
});

function About() {
	const classes = useStyles();

	return (
		<>
			<div style={{ display: 'block', height: '95vh' }}>
				<div style={{
					position: 'absolute',
					background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images/header-background.jpg") no-repeat top center',
					backgroundSize: 'cover !important',
					overflow: 'hidden',
					marginTop: '50px',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					zIndex: 0,
				}}
				/>
				<Typography variant="h1" style={{ color: '#f8f8ff', paddingTop: '40vh', position: 'relative' }}>Ethan Tom</Typography>
			</div>
			<Grid className={classes.root} container>
				<div id="About" className={classes.about}>
					<div className={classes.aboutInfo}>
						<Typography
							style={{ color: '#f8f8ff' }}
							variant="h3"
						>
              About Me
						</Typography>
						<Typography variant="body1" className={classes.p}>
              {data.line1}
						</Typography>
						<Typography variant="body1" className={classes.p}>
              {data.line2.part1}
							<Link link={data.line2.linkUrl1} text={data.line2.linkText1} />
              {data.line2.part2}
							<Link link={data.line2.linkUrl2} text={data.line2.linkText2} />
              {data.line2.part3}
						</Typography>
						<Typography variant="body1" className={classes.p}>
							{data.line3}
						</Typography>
						<Grid item lg={6} style={{ marginTop: '20px' }}>
							<Grid item lg={12}>
								<Typography
									id="About"
									style={{ color: '#f8f8ff' }}
									variant="h5"
								>
                  Contact Information
								</Typography>
							</Grid>
							<Grid item lg={12}>
								<Typography variant="body2">
                  Ethan Tom
								</Typography>
							</Grid>
							<Grid item lg={12}>
								<Typography variant="body2">
                  ethanchristophertom@gmail.com
								</Typography>
							</Grid>
							<Grid item lg={12}>
								<Typography variant="body2">
                  San Francisco, CA
								</Typography>
							</Grid>
						</Grid>
					</div>
					<div style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '70px' }}>
						<img
							src="./images/profile.jpg"
							alt="Profile Pic"
							style={{
								marginLeft: '-20px', height: '250px', border: '3px solid #343a40', borderRadius: '120px', boxShadow: '20px 15px #495057',
							}}
						/>
					</div>
				</div>
			</Grid>
		</>
	);
}

export default About;
