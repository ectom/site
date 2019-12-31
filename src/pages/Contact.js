import React from 'react';
import {Container, MuiThemeProvider, Button, styled} from "@material-ui/core";
import theme from "../styles";


function Contact() {
  const SubmitButton = styled(Button)({
    background: '#F55A44',
    color: 'white',
    marginBottom: '3%',
  });
  
  return(
    <>
      <MuiThemeProvider theme={theme}>
        <h1>Contact Me</h1>
        <Container component="div" maxWidth="md">
          <SubmitButton href={'mailto:ethanchristophertom@gmail.com'}>Say Hello</SubmitButton>
        </Container>
      </MuiThemeProvider>
    </>
  )
}

export default Contact;