import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Work from "./pages/Work";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Social from "./pages/Social";
import {CssBaseline} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import darkTheme from './styles/theme/darkTheme';



// const dark = createMuiTheme(darkTheme)
// <MuiThemeProvider theme={dark}>


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
                <CssBaseline/>
                <Navbar/>
                <div>
                    <About/>
                    <Education/>
                    <Work/>
                    <Projects/>
                    <Contact/>
                    <Social/>
                </div>
                <p>{this.state.response}</p>
            </div>
        );
    }
}

export default App;