import React, { useState, useEffect } from 'react';
import {
	Container, MuiThemeProvider, Button, styled, makeStyles, withStyles,
	TextField, Grid, Typography
} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";

import emailjs from 'emailjs-com';
import theme from '../styles';

const useStyles = makeStyles({
	paper: {
		paddingBottom: theme.spacing(5),
		paddingTop: theme.spacing(1),
		backgroundColor: '#212529',
		color: '#e9ecef',
		maxWidth: '900px',
		textAlign: 'left',
		fontSize: '18px',
	},
	input: {
		backgroundColor: '#adb5bd',
		borderColor: '#212529',
	},
	disabled: {
		background: '#495057',
		color: 'green',
	},
	validated: {
		background: '#fca311',
	},
	hidden: {
		display: 'none',
	},
	show: {
		display: 'block',
	},
});

const ContactInput = withStyles({
	root: {
		'& .MuiOutlinedInput-root': {
			'&:hover fieldset': {
				borderColor: '#5B6671',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#212529',
			},
		},
	},
})(TextField);

const Contact = () => {
	const [contactName, setContactName] = useState('');
	const [contactInfo, setContactInfo] = useState('');
	const [message, setMessage] = useState('');

	const classes = useStyles();

	emailjs.init('user_I8kGakbBp8ZVLYmygKAB5');

	const SubmitButton = styled(Button)({
		color: 'white',
		margin: '3% 0 3% 0',
		padding: '2% 8% 2% 8%',
	});

	const handleNameChange = (e) => {
		setContactName(e.target.value);
	};

	const handleInfoChange = (e) => {
		setContactInfo(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const validateForm = () => !(contactName && contactInfo && message);

	const clearContactForm = () => {
		setContactName('');
		setContactInfo('');
		setMessage('');
	};

	const sendEmail = () => {
		emailjs.send('gmail', 'portfolio_contact', {
			from_name: contactName,
			message,
			contact_info: contactInfo,
		}).then((response) => {
			console.log('SUCCESS!', response.status, response.text);
		}, (err) => {
			console.log('FAILED...', err);
		}).then(clearContactForm);
	};

	return (
		<>
			<MuiThemeProvider theme={theme}>
				<Typography id="Contact" style={{ color: '#f8f8ff' }} variant="h3">Contact Me</Typography>
				<Container component="div" maxWidth="md">
					<Paper className={classes.paper} elevation={0}>
						I&apos;m always looking for new opportunities to learn new things and improve my own skills. If you want to work
						with me, teach me something new, suggest improvements to any of my code, or just want to make networking
						connections please send me an email and I&apos;ll do my best to get back to you as soon as possible.
					</Paper>

					<Grid container spacing={3}>
						<Grid container style={{ display: 'block' }}>
							<Grid item lg={12}>
								<ContactInput
									required
									placeholder="Enter your Name"
									value={contactName}
									onChange={(e) => handleNameChange(e)}
									InputProps={{ className: classes.input }}
									style={{ display: 'block' }}
									variant="outlined"
									fullWidth
								/>
							</Grid>
							<Grid item lg={12}>
								<ContactInput
									required
									placeholder="Your Contact info (i.e. email, phone number, etc.)"
									value={contactInfo}
									onChange={(e) => handleInfoChange(e)}
									style={{ display: 'block' }}
									variant="outlined"
									fullWidth
									InputProps={{ className: classes.input }}
								/>
							</Grid>
							<Grid item lg={12}>
								<ContactInput
									required
									placeholder="A message for Ethan"
									value={message}
									multiline
									rows={5}
									onChange={(e) => handleMessageChange(e)}
									style={{ display: 'block' }}
									variant="outlined"
									fullWidth
									InputProps={{ className: classes.input }}
								/>
							</Grid>
							<Grid item lg={12} style={{ display: 'block' }}>
								<SubmitButton
									fullWidth
									disabled={validateForm()}
									className={validateForm() ? classes.disabled : classes.validated}
									onClick={sendEmail}
								>
									Say Hello
								</SubmitButton>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</MuiThemeProvider>
		</>
	);
};

export default Contact;
