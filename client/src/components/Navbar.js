import React, {Component} from 'react';
import {AppBar, Tabs, Tab, Toolbar} from '@material-ui/core';
import '../styles/Navbar.css';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#87103f',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});


//
// const styles = (theme) => ({
//     toolbar: theme.palette.main,
// });


class Navbar extends Component {

    render() {
        return (
            <div>
                <Toolbar >
                    <Tabs>
                        <Tab label="About" />
                        <Tab label="Projects" />
                        <Tab label="Contact Me" />
                    </Tabs>
                </Toolbar>
            </div>
        );
    }
}

export default Navbar;