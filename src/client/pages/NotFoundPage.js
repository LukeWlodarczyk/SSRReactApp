import React from 'react';

const NotFound = ({ staticContext = {} }) => {
	staticContext.notFound = true;

	return (
		<div className="center-align" style={{ marginTop: '150px' }}>
			<h3>Page not found</h3>
		</div>
	);
};

export default {
	component: NotFound,
};