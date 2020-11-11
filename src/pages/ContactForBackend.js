import React, { Component, setState } from 'react';
import {
  Container, TextField, Button, styled, createMuiTheme, MuiThemeProvider,
} from '@material-ui/core';

// TODO add thank you in place of form in the future

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    responseToPost: '',
    emailValid: false,
    submitDisabled: true,
  }

  validateEmail(e) {
    console.log(e.target.value);
    if (this.state.name.length > 3 && this.state.email.length > 5 && this.state.message.length > 20 && this.state.emailValid) {
      this.setState({ submitDisabled: false });
      return;
    }
    if (this.state.name === '' || this.state.email === '' || this.state.message === '' || !this.state.emailValid) {
      setState({submitDisabled: true});
    }
    setState({submitDisabled: true});
  }

  handleChangeName = async (e) => {
    this.setState({
      name: e.target.value,
    });
    this.validateEmail(e);
  }

  handleChangeEmail = async (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(e.target.value)) {
      setState({emailValid: true});
    } else {
      setState({emailValid: false});
    }
    this.setState({
      email: e.target.value,
    });
    this.validateEmail(e);
  }

  handleChangeMessage = async (e) => {
    this.setState({
      message: e.target.value,
    });
    this.validateEmail(e);
  }

  handleSubmit = async (e) => {
    console.log('submit clicked');
    e.preventDefault();
    const response = await fetch('/api/contactMe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#F55A44',
        },
        secondary: {
          main: '#00cc66',
        },
      },
      overrides: {
        MuiInput: {
          underline: {
            '&:hover:not($disabled):before': { // TextField color on hover
              borderBottomColor: '#00cc66',
            },
          },
        },
        MuiInputLabel: { // this doesn't do anything. for the textfield label on hover color
          root: {
            '&:hover:not($disabled):before': {
              color: '#00cc66',
            },
          },
        },
      },
    });

    const SubmitContact = styled(Button)({
      background: '#F55A44',
      color: 'white',
      marginTop: '3%',
    });

    const textStyle = {
      marginBottom: '2%',
    };

    return (
      <>
        <MuiThemeProvider theme={theme}>
          <h1>Contact Me</h1>
          <Container component="div" maxWidth="md">
            <form onSubmit={this.handleSubmit}>
              <TextField
                fullWidth
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
                label="Full Name"
                style={textStyle}
              />
              <TextField
                fullWidth
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                label="Email Address"
                style={textStyle}
              />
              <TextField
                fullWidth
                type="text"
                value={this.state.message}
                onChange={this.handleChangeMessage}
                label="Message"
                multiline
                rows={8}
                rowsMax={10}
                style={textStyle}
              />
              <SubmitContact variant="contained" color="primary" type="submit" disabled={this.state.submitDisabled}>
                Send Me A Message
              </SubmitContact>
            </form>
            <p>{this.state.responseToPost}</p>
          </Container>
        </MuiThemeProvider>
      </>
    );
  }
}

export default Contact;
