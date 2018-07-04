import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<div className="center-align" style={{ marginTop: '150px' }}>
			<Helmet>
				<title>Home Page</title>
				<meta property="og:title" content="Home" />
			</Helmet>
			<h3>Welcome</h3>
			<p>Check out my ssr react app</p>
		</div>
	);
};

export default {
	component: Home,
};
