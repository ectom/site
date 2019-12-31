import React from 'react';
import {Container, MuiThemeProvider, Button, styled} from "@material-ui/core";
import theme from "../styles";
import Paper from "@material-ui/core/Paper";


function Contact() {
  const SubmitButton = styled(Button)({
    background: '#F55A44',
    color: 'white',
    marginBottom: '3%',
  });
  
  return (
  <>
    <MuiThemeProvider theme={theme}>
      <h1>Contact Me</h1>
      <Container component="div" maxWidth="md">
        <Paper>
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