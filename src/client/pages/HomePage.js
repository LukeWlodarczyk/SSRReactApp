import React from 'react';

const Home = () => {
	return (
		<div>
			<div>Home hello!!!!</div>
			<button onClick={() => console.log('Hi!')}>Press</button>
		</div>
	);
};

export default {
	component: Home,
};
