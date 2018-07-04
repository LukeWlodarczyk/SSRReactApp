import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsList extends Component {
	componentDidMount() {
		this.props.fetchAdmins();
	}

	renderAdmins() {
		return this.props.admins.map(admin => {
			return <li key={admin.id}>{admin.name}</li>;
		});
	}

	render() {
		return (
			<ul>
				<p>Admins list</p>
				{this.renderAdmins()}
			</ul>
		);
	}
}

const mapStateToProps = ({ admins }) => ({ admins });

export const loadData = ({ dispatch }) => dispatch(fetchAdmins());

export default {
	loadData,
	component: connect(
		mapStateToProps,
		{ fetchAdmins }
	)(requireAuth(AdminsList)),
};
