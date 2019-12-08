import React, {Component} from 'react';
import {FormControl, TextField, Button} from "@material-ui/core";
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
        const classes = {
            formControl: {
                color: '#87103f',
                width: '70%',
            }
        }



        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <TextField type="text"
                                   value={this.state.name}
                                   onChange={e => this.setState({ name: e.target.value })}
                                   label="Full Name"
                        />
                        <TextField
                            type="text"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                            label="Email Address"
                        />
                        <TextField
                            type="text"
                            value={this.state.message}
                            onChange={e => this.setState({ message: e.target.value })}
                            label="Message"
                            multiline={true}
                            rows={4}
                            rowsMax={10}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Send Me A Message
                        </Button>
                    </FormControl>
                </form>
                <p>{this.state.responseToPost}</p>
            </div>
        );
    }
}

export default Contact;