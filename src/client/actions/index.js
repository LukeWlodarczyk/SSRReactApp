import { FETCH_USERS } from './types';

export const fetchUsers = () => async (dispatch, getState, api) => {
	try {
		const res = await api.get('/users');

		dispatch({
			type: FETCH_USERS,
			payload: res.data,
		});
	} catch (e) {
		console.log(e);
	}
};
