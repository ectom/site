import React from 'react';
import {Container, MuiThemeProvider, Button, styled, makeStyles} from "@material-ui/core";
import theme from "../styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  paper: {
    padding: theme.spacing(5),
    paddingTop: theme.spacing(1),
    backgroundColor: '#FAFAFA',
    maxWidth: '900px',
    minWidth: '500px',
    textAlign: 'left',
    fontSize: '18px',
  },
});

function Contact() {
  
  const classes = useStyles();
  
  const SubmitButton = styled(Button)({
    background: '#F55A44',
    color: 'white',
    margin: '3%',
    padding: '2% 8% 2% 8%',
  });
  
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
        <SubmitButton href={'mailto:ethanchristophertom@gmail.com'}>Say Hello</SubmitButton>
      </Container>
    </MuiThemeProvider>
  </>
  )
}

export default Contact;