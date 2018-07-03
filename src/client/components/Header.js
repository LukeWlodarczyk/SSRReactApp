import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
	console.log('Am I logged in?', auth);
	return (
		<div>
			<Link to="/">SSRReactApp</Link>
		</div>
	);
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
