import React, {Component} from 'react';
// TODO turn this into a modal in the future

class Contact extends Component {

    state = {
        post: '',
        responseToPost: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();

        this.setState({ responseToPost: body });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <p>
                        <strong>Get in touch</strong>
                    </p>
                    <input
                        type="text"
                        value={this.state.post}
                        onChange={e => this.setState({ post: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.responseToPost}</p>
            </div>
        );
    }
}

export default Contact;