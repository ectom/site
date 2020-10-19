import React, { Component } from 'react';
import { Link, Grid } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


class Social extends Component {
  
  render() {
    const GitHub = styled( GitHubIcon )( {
      color: '#fca311'
    } );
    const LinkedIn = styled( LinkedInIcon )( {
      color: '#fca311'
    } );
    const Instagram = styled( InstagramIcon )( {
      color: '#fca311'
    } );
    const Email = styled( EmailIcon )( {
      color: '#fca311'
    } );
    
    return (
//            TODO add spacing to icons
      <>
        <Grid
          container
          direction={"row"}
          justify="center"
        >
          <Link
            href="https://www.github.com/ectom"
            target="_blank"
            rel="noopener"
          >
            <GitHub fontSize="large"/>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ectom"
            target="_blank"
            rel="noopener"
          >
            <LinkedIn fontSize="large"/>
          </Link>
          <Link
            href="https://www.instagram.com/ethantom_"
            target="_blank"
            rel="noopener"
          >
            <Instagram fontSize="large"/>
          </Link>
          <Link
            href={`mailto:?ethanchristophertom@gmail.com`}
            target="_blank"
            rel="noopener"
          >
            <Email fontSize="large"/>
          </Link>
        </Grid>
      </>
    )
  }
}

export default Social;
