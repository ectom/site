import React, {Component} from 'react';
import {AppBar, Tabs, Tab, Toolbar} from '@material-ui/core';
import '../styles/Navbar.css';


class Navbar extends Component {


    render() {
        return (
            <div>
                <AppBar>
                <Toolbar>
                    <Tabs>
                        <Tab label="About" />
                        <Tab label="Projects" />
                        <Tab label="Contact Me" />
                    </Tabs>
                </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;