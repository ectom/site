import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

class Social extends Component {
    render() {
        return (
//            TODO add links to each profile
            <Link
                to="https://www.github.com/ectom"
                target="_blank"
                rel="noopener"
//                url: 'https://twitter.com/intent/tweet',
//                query: {
//                    url,
//                },
            >
                <GitHubIcon/>
            </Link>
            <Link
                to="https://www.linkedin.com/in/ectom"
                target="_blank"
                rel="noopener"
            >
                <LinkedInIcon/>
            </Link>
            <Link
                to="https://www.instagram.com/ethanchristophertom"
                target="_blank"
                rel="noopener"
            >
                <InstagramIcon/>
            </Link>
            <Link
                href={`mailto:?${query}`}
                target="_blank"
                rel="noopener"
            >
                <EmailIcon/>
            </Link>
        )
    }
}

export default Social;