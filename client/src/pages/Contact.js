import React, {Component} from 'react';
import { Container, FormControl, TextField, Button, styled } from "@material-ui/core";
// TODO turn this into a modal in the future

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

        const MyInput = styled(TextField)({
            '& label.Mui-focused': {
                color: '#800000',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#800000',
            },
        })

        const SubmitContact = styled(Button)({
            background: '#800000',
            color: 'white',
        });

        return (
            <>
            <Container component="div" maxWidth="lg">
                <form onSubmit={this.handleSubmit}>
                    {/*<FormControl component="fieldset">*/}
                        <MyInput
                            fullWidth
                            type="text"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                            label="Full Name"
                        />
                        <MyInput
                            fullWidth
                            type="text"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            label="Email Address"
                        />
                        <MyInput
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
            </>
        );
    }
}

export default Contact;