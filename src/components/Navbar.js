import React from 'react';
import {Tabs, Tab, Toolbar} from '@material-ui/core';
import {styled} from '@material-ui/core/styles';


const MyToolbar = styled(Toolbar)({
  background: 'black',
  color: 'white',
});

function Navbar() {
  return (
  <div>
    <MyToolbar>
      <Tabs>
        <Tab label="About"/>
        <Tab label="Projects"/>
        <Tab label="Contact Me"/>
      </Tabs>
    </MyToolbar>
  </div>
  );
}

export default Navbar;