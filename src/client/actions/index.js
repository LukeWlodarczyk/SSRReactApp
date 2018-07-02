import axios from 'axios';
import { FETCH_USERS } from './types';

const base = 'http://react-ssr-api.herokuapp.com';

export const fetchUsers = () => async dispatch => {
	try {
		const res = await axios.get(`${base}/users`);

		dispatch({
			type: FETCH_USERS,
			payload: res.data,
		});
	} catch (e) {
		console.log(e);
	}
};
