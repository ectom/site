import React, { useState } from 'react';
import { Container, MuiThemeProvider, Button, styled, makeStyles } from "@material-ui/core";
import theme from "../styles";
import Paper from "@material-ui/core/Paper";
import { TextField, FormControl, FormLabel, Grid, Typography } from '@material-ui/core';
import emailjs from 'emailjs-com';

const useStyles = makeStyles( {
  paper: {
    paddingBottom: theme.spacing( 5 ),
    paddingTop: theme.spacing( 1 ),
    backgroundColor: '#FAFAFA',
    maxWidth: '900px',
    minWidth: '500px',
    textAlign: 'left',
    fontSize: '18px',
  },
} );

function Contact() {
  const [contactName, setContactName] = useState( '' );
  const [contactInfo, setContactInfo] = useState( '' );
  const [message, setMessage] = useState( '' );
  
  const classes = useStyles();
  
  emailjs.init( 'user_I8kGakbBp8ZVLYmygKAB5' );
  
  const SubmitButton = styled( Button )( {
    background: '#F55A44',
    color: 'white',
    margin: '3% 0 3% 0',
    padding: '2% 8% 2% 8%',
  } );
  
  const handleNameChange = ( e ) => {
    setContactName( e.target.value );
  };
  
  const handleInfoChange = ( e ) => {
    setContactInfo( e.target.value );
  };
  
  
  const handleMessageChange = ( e ) => {
    setMessage( e.target.value );
  };
  
  const validateForm = () => {
    return !( contactName && contactInfo && message );
    
  };
  
  const clearContactForm = () => {
    setContactName('');
    setContactInfo('');
    setMessage('');
  };
  
  const sendEmail = () => {
    emailjs.send('gmail', 'portfolio_contact', {
      from_name: contactName,
      message: message,
      contact_info: contactInfo,
    }).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      }
    ).then(clearContactForm);
  };
  
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <h1 id={'Contact'}>Contact Me</h1>
        <Container component="div" maxWidth="md">
          <Paper className={classes.paper} elevation={0}>
            I'm always looking for new opportunities to learn new things and improve my own skills. If you want to work
            with me, teach me something new, suggest improvements to any of my code, or just want to make networking
            connections please send me an email and I'll do my best to get back to you as soon as possible.
          </Paper>
          
          <Grid container lg={12} spacing={3}>
            <Grid item lg={2}>
              <Grid item lg={12}><Typography variant={'h6'} align={'left'} style={{height: '55px'}}>Name*</Typography></Grid>
              <Grid item lg={12}><Typography variant={'h6'} align={'left'} style={{height: '55px'}}>Contact Info*</Typography></Grid>
              <Grid item lg={12}><Typography variant={'h6'} align={'left'} style={{height: '55px'}}>Message*</Typography></Grid>
            </Grid>
            <Grid container lg={7}>
              <Grid item lg={12}>
                <TextField
                  required={true}
                  placeholder={'Enter your Name'}
                  value={contactName}
                  onChange={( e ) => handleNameChange( e )}
                  style={{ display: 'block' }}
                  variant={'outlined'}
                  fullWidth={true}
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  required={true}
                  placeholder={'Your Contact info (i.e. email, phone number, etc.'}
                  value={contactInfo}
                  onChange={( e ) => handleInfoChange( e )}
                  style={{ display: 'block' }}
                  variant={'outlined'}
                  fullWidth={true}
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  required={true}
                  placeholder={'Enter a message'}
                  value={message}
                  multiline={true}
                  rows={5}
                  onChange={( e ) => handleMessageChange( e )}
                  style={{ display: 'block' }}
                  variant={'outlined'}
                  fullWidth={true}
                />
              </Grid>
              <Grid item lg={12}>
                <SubmitButton
                  fullWidth={true}
                  disabled={validateForm()}
                  onClick={sendEmail}
                >
                  Say Hello
                </SubmitButton>
              </Grid>
            </Grid>
            <Grid item lg={3} style={{marginTop: '-15px'}}>
              <Typography variant={'h6'} align="left">Contact Information</Typography>
              <Typography variant={'body1'} align="left">Ethan Tom</Typography>
              <Typography variant={'body1'} align="left">ethanchristophertom@gmail.com</Typography>
              <Typography variant={'body1'} align="left">San Francisco, CA 94118</Typography>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </>
  )
}

export default Contact;
