import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import '@material-ui/core';
import {CssBaseline} from "@material-ui/core";

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
        return (
            <div className="App">
                <CssBaseline />
                <header className="App-header">
                    <Navbar />
                </header>
                <About />
                <Projects />
                <Contact />
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default App;