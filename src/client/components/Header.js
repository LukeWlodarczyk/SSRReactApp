import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
	console.log('Am I logged in?', auth);
	return (
		<div>
			<Link to="/">SSRReactApp</Link>
			<div>
				<Link to="/users">Users</Link>
				<Link to="/admins">Admins</Link>
				{auth ? (
					<a href="/api/logout">Logout</a>
				) : (
					<a href="/api/auth/google">Login</a>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
