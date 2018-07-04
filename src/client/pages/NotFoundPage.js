import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = ({ staticContext = {} }) => {
	staticContext.notFound = true;

	return (
		<div className="center-align" style={{ marginTop: '150px' }}>
			<Helmet>
				<title>Not found</title>
				<meta property="og:title" content="Not found" />
			</Helmet>
			<h3>Page not found</h3>
		</div>
	);
};

export default {
	component: NotFound,
};
