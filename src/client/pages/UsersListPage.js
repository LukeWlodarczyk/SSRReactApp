import React, { Component } from 'react';
import { connect } from 'react-redux';
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
			<ul>
				<p>Users list</p>
				{this.renderUsers()}
			</ul>
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
