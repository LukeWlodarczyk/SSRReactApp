import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
	return (
		<nav className="nav-wrapper">
			<div>
				<Link to="/" className="brand-logo left">
					SSRAPP
				</Link>
				<ul className="right">
					<li>
						<Link to="/users">Users</Link>
					</li>
					<li>
						<Link to="/admins">Admins</Link>
					</li>
					{auth ? (
						<li>
							<a href="/api/logout">Logout</a>
						</li>
					) : (
						<li>
							<a href="/api/auth/google">Login</a>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
