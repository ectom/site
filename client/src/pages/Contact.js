import React, {Component} from 'react';
import {Container, TextField, Button, styled, createMuiTheme, MuiThemeProvider} from "@material-ui/core";
// TODO add thank you in place of form in the future

class Contact extends Component {

    state = {
        name: '',
        email:'',
        message:'',
        responseToPost: '',
    };

    handleSubmit = async e => {
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
    };

    render() {

        const theme = createMuiTheme({
            palette:{
                primary: {
                    main: '#F55A44',
                },
                secondary: {
                    main: '#00cc66',
                }
            },
            overrides: {
                MuiInput: {
                    underline: {
                        '&:hover:not($disabled):before': { // TextField color on hover
                            borderBottomColor: '#00cc66',
                        },
                    },
                },
                MuiInputLabel: {  // this doesn't do anything. for the textfield label on hover color
                    '&:hover': {
                        color: '#00cc66',
                    },
                },
            }
        });

        const SubmitContact = styled(Button)({
            background: '#F55A44',
            color: 'white',
        });

        return (
            <>
            <MuiThemeProvider theme={theme}>
            <Container component="div" maxWidth="lg">
                <form onSubmit={this.handleSubmit}>
                    {/*<FormControl component="fieldset">*/}
                        <TextField
                            fullWidth
                            type="text"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                            label="Full Name"
                            style={theme}
                        />
                        <TextField
                            fullWidth
                            type="text"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            label="Email Address"
                        />
                        <TextField
                            fullWidth
                            type="text"
                            value={this.state.message}
                            onChange={e => this.setState({ message: e.target.value })}
                            label="Message"
                            multiline={true}
                            rows={8}
                            rowsMax={10}
                        />
                        <SubmitContact variant="contained" color="primary" type="submit">
                            Send Me A Message
                        </SubmitContact>
                    {/*</FormControl>*/}
                </form>
                <p>{this.state.responseToPost}</p>
            </Container>
            </MuiThemeProvider>
            </>
        );
    }
}

export default Contact;