import React, { useState, useEffect } from 'react';
import { Container, MuiThemeProvider, Button, styled, makeStyles, withStyles } from "@material-ui/core";
import theme from "../styles";
import Paper from "@material-ui/core/Paper";
import { TextField, Grid, Typography } from '@material-ui/core';
import emailjs from 'emailjs-com';

const useStyles = makeStyles( {
  paper: {
    paddingBottom: theme.spacing( 5 ),
    paddingTop: theme.spacing( 1 ),
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
    display: 'block'
  }
} );

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
  }
})(TextField)

const Contact = () => {
  const [contactName, setContactName] = useState( '' );
  const [contactInfo, setContactInfo] = useState( '' );
  const [message, setMessage] = useState( '' );
  
  const classes = useStyles();
  
  emailjs.init( 'user_I8kGakbBp8ZVLYmygKAB5' );
  
  const SubmitButton = styled( Button )( {
    color: 'white',
    margin: '3% 0 3% 0',
    padding: '2% 8% 2% 8%',
  } );

  const ContactLabels = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1280;

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    if( width < breakpoint ) {
      return null;
    }
    return (
      <Grid item lg={2}>
        <Grid item lg={12}><Typography variant={'h6'} align={'left'} style={{ height: '55px', color: '#e9ecef' }}>Name*</Typography></Grid>
        <Grid item lg={12}><Typography variant={'h6'} align={'left'} style={{ height: '55px', color: '#e9ecef' }}>Contact Info*</Typography></Grid>
        <Grid item lg={12}><Typography variant={'h6'} align={'left'} style={{ height: '55px', color: '#e9ecef' }}>Message*</Typography></Grid>
      </Grid>
    );
  };  

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
        <Typography id={'Contact'} style={{color: '#f8f8ff'}} variant={'h3'}>Contact Me</Typography>
        <Container component="div" maxWidth="md">
          <Paper className={classes.paper} elevation={0}>
            I'm always looking for new opportunities to learn new things and improve my own skills. If you want to work
            with me, teach me something new, suggest improvements to any of my code, or just want to make networking
            connections please send me an email and I'll do my best to get back to you as soon as possible.
          </Paper>
          
          <Grid container spacing={3}>
            <ContactLabels />
            <Grid container style={{display: 'block'}}>
              <Grid item lg={12}>
                <ContactInput
                  required={true}
                  placeholder={'Enter your Name'}
                  value={contactName}
                  onChange={( e ) => handleNameChange( e )}
                  InputProps={{className: classes.input}}
                  style={{ display: 'block' }}
                  variant={'outlined'}
                  fullWidth={true}
                />
              </Grid>
              <Grid item lg={12}>
                <ContactInput
                  required={true}
                  placeholder={'Your Contact info (i.e. email, phone number, etc.)'}
                  value={contactInfo}
                  onChange={( e ) => handleInfoChange( e )}
                  style={{ display: 'block' }}
                  variant={'outlined'}
                  fullWidth={true}
                  InputProps={{className: classes.input}}
                />
              </Grid>
              <Grid item lg={12}>
                <ContactInput
                  required={true}
                  placeholder={'A message for Ethan'}
                  value={message}
                  multiline={true}
                  rows={5}
                  onChange={( e ) => handleMessageChange( e )}
                  style={{ display: 'block' }}
                  variant={'outlined'}
                  fullWidth={true}
                  InputProps={{className: classes.input}}
                />
              </Grid>
              <Grid item lg={12} style={{display: 'block'}}>
                <SubmitButton
                  fullWidth={true}
                  disabled={validateForm()}
                  className={validateForm() ? classes.disabled : classes.validated}
                  onClick={sendEmail}
                >
                  Say Hello
                </SubmitButton >
              </Grid>
            </Grid>
            <Grid item lg={3} style={{marginTop: '-15px'}}>
              <Typography variant={'h6'} align="left" style={{ color: '#e9ecef' }}>Contact Information</Typography>
              <Typography variant={'body1'} align="left" style={{ color: '#e9ecef' }}>Ethan Tom</Typography>
              <Typography variant={'body1'} align="left" style={{ color: '#e9ecef' }}>ethanchristophertom@gmail.com</Typography>
              <Typography variant={'body1'} align="left" style={{ color: '#e9ecef' }}>San Francisco, CA 94118</Typography>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </>
  )
}

export default Contact;
