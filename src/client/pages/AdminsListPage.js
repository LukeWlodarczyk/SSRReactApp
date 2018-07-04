import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
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
			<div>
				<Helmet>
					<title>{`${this.props.admins.length} Admins Loaded`}</title>
					<meta property="og:title" content="Admins" />
				</Helmet>
				<p>Admins list</p>
				<ul>{this.renderAdmins()}</ul>
			</div>
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
