import React, { Component } from 'react';

class Link extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		};
	}

	toggleHover = () => {
		this.setState({ hover: !this.state.hover });
	};

	render() {
		let linkStyle;
		if (this.state.hover) {
			linkStyle = { textDecoration: 'none', color: '#e9ecef' };
		} else {
			linkStyle = { textDecoration: 'none', color: '#fca311' };
		}
		return (
			<a
				style={linkStyle}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
				href={this.props.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				{this.props.text}
			</a>
		);
	}
}

export default Link;
