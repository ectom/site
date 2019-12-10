import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import '@material-ui/core';
import {CssBaseline} from "@material-ui/core";
import {getMuiTheme} from '@material-ui/styles/';


class App extends Component {
    state = {
        response: '',
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };


    render() {

        const muiTheme = {
            button: {
                backgroundColor: '#87103f',
                borderColor: '#87103f',
                color: '#87103f',
            },
        }

        return (
            <div className="App">
                <CssBaseline />
                <header className="App-header">
                    <Navbar muiTheme={muiTheme}/>
                </header>
                <div>
                    <About />
                    <Projects />
                    <Contact />
                </div>
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default App;