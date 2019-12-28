import React, {Component} from 'react';
import {AppBar, Tabs, Tab, Toolbar} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';


const MyToolbar = styled(Toolbar)({
    background: '#F55A44',
    color: 'white',
});

class Navbar extends Component {

    render() {
        return (
            <div>
                <MyToolbar>
                    <Tabs>
                        <Tab label="About" />
                        <Tab label="Projects" />
                        <Tab label="Contact Me" />
                    </Tabs>
                </MyToolbar>
            </div>
        );
    }
}

export default Navbar;