import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';

class UsersList extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>;
		});
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>{`${this.props.users.length} Users Loaded`}</title>
					<meta property="og:title" content="Users" />
				</Helmet>
				<p>Users list</p>
				<ul>{this.renderUsers()}</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => ({ users });

export const loadData = ({ dispatch }) => dispatch(fetchUsers());

export default {
	loadData,
	component: connect(
		mapStateToProps,
		{ fetchUsers }
	)(UsersList),
};
