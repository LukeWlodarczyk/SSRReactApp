import { FETCH_USERS, FECHT_CURRENT_USER } from './types';

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

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	try {
		const res = await api.get('/current_user');

		dispatch({
			type: FECHT_CURRENT_USER,
			payload: res.data,
		});
	} catch (e) {
		console.log(e);
	}
};
